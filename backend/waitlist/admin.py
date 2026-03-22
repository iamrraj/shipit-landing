import logging
from datetime import timedelta

from django import forms
from django.contrib import admin, messages
from django.shortcuts import render
from django.utils import timezone

from tokens.emails import send_token_activated
from tokens.models import Token

from .models import WaitlistUser

logger = logging.getLogger(__name__)


class BulkTokenForm(forms.Form):
    validity_days = forms.IntegerField(
        initial=60,
        min_value=1,
        max_value=365,
        label="Token validity (days)",
        help_text="How many days the token will be valid from now.",
    )
    send_email = forms.BooleanField(
        initial=True,
        required=False,
        label="Send token email",
        help_text="Send the token activation email to each user.",
    )


@admin.register(WaitlistUser)
class WaitlistUserAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "has_active_token", "joined_at"]
    search_fields = ["name", "email"]
    list_filter = ["joined_at"]
    readonly_fields = ["joined_at"]
    actions = ["send_tokens_bulk"]

    @admin.display(boolean=True, description="Has Token")
    def has_active_token(self, obj):
        return obj.tokens.filter(is_active=True).exists()

    @admin.action(description="Generate & send tokens to selected users")
    def send_tokens_bulk(self, request, queryset):
        if "confirm" in request.POST:
            form = BulkTokenForm(request.POST)
            if form.is_valid():
                validity_days = form.cleaned_data["validity_days"]
                send_email = form.cleaned_data["send_email"]
                now = timezone.now()
                end_date = now + timedelta(days=validity_days)

                created = 0
                skipped = 0
                email_errors = 0

                for user in queryset:
                    # Skip users who already have an active valid token
                    if user.tokens.filter(is_active=True, end_date__gt=now).exists():
                        skipped += 1
                        continue

                    token = Token.objects.create(
                        user=user,
                        is_active=True,
                        start_date=now,
                        end_date=end_date,
                    )
                    created += 1

                    if send_email:
                        try:
                            send_token_activated(token)
                        except Exception:
                            email_errors += 1
                            logger.exception(
                                "Failed to send token email to %s", user.email
                            )

                msg = f"{created} token(s) created."
                if skipped:
                    msg += f" {skipped} user(s) skipped (already have active token)."
                if email_errors:
                    msg += f" {email_errors} email(s) failed to send."
                    self.message_user(request, msg, messages.WARNING)
                else:
                    if send_email and created:
                        msg += f" {created} email(s) sent."
                    self.message_user(request, msg, messages.SUCCESS)
                return None

        else:
            form = BulkTokenForm()

        return render(
            request,
            "admin/waitlist/bulk_token_confirm.html",
            {
                "form": form,
                "users": queryset,
                "title": "Generate & Send Tokens",
                "action_name": "send_tokens_bulk",
            },
        )

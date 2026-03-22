from django.contrib import admin

from .models import Token


@admin.register(Token)
class TokenAdmin(admin.ModelAdmin):
    list_display = ["key_short", "user", "is_active", "is_valid", "start_date", "end_date", "created_at"]
    list_filter = ["is_active", "start_date", "end_date"]
    search_fields = ["key", "user__email", "user__name"]
    readonly_fields = ["key", "created_at"]
    raw_id_fields = ["user"]

    @admin.display(description="Token")
    def key_short(self, obj):
        return f"{obj.key[:20]}..."

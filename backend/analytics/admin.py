from django.contrib import admin

from .models import ActiveUser, DownloadEvent, InstallEvent


@admin.register(DownloadEvent)
class DownloadEventAdmin(admin.ModelAdmin):
    list_display = ("event_type", "version", "platform", "arch", "ip_address", "created_at")
    list_filter = ("event_type", "platform", "version")
    search_fields = ("ip_address",)
    readonly_fields = ("created_at",)


@admin.register(InstallEvent)
class InstallEventAdmin(admin.ModelAdmin):
    list_display = ("status", "version", "platform", "python_version", "node_version", "ip_address", "created_at")
    list_filter = ("status", "platform", "version")
    search_fields = ("ip_address",)
    readonly_fields = ("created_at",)


@admin.register(ActiveUser)
class ActiveUserAdmin(admin.ModelAdmin):
    list_display = ("user_email", "token_key_short", "platform", "app_version", "total_sessions", "last_seen", "first_seen")
    list_filter = ("platform", "app_version")
    search_fields = ("user_email", "user_name", "token_key")
    readonly_fields = ("first_seen", "last_seen")

    def token_key_short(self, obj):
        return obj.token_key[:20] + "..." if len(obj.token_key) > 20 else obj.token_key
    token_key_short.short_description = "Token"

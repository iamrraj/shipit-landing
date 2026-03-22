from django.db import models


class DownloadEvent(models.Model):
    """Records every install script or archive download."""

    EVENT_TYPES = [
        ("install_script", "Install Script"),
        ("archive", "Archive Download"),
    ]

    event_type = models.CharField(max_length=20, choices=EVENT_TYPES)
    version = models.CharField(max_length=20, blank=True, default="")
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True, default="")
    platform = models.CharField(max_length=20, blank=True, default="")
    arch = models.CharField(max_length=20, blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.event_type} v{self.version} from {self.ip_address} ({self.created_at:%Y-%m-%d %H:%M})"


class InstallEvent(models.Model):
    """Records successful installations."""

    STATUS_CHOICES = [
        ("started", "Started"),
        ("completed", "Completed"),
        ("failed", "Failed"),
    ]

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="started")
    version = models.CharField(max_length=20, blank=True, default="")
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    platform = models.CharField(max_length=20, blank=True, default="")
    arch = models.CharField(max_length=20, blank=True, default="")
    python_version = models.CharField(max_length=10, blank=True, default="")
    node_version = models.CharField(max_length=10, blank=True, default="")
    error_message = models.TextField(blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"Install {self.status} v{self.version} ({self.platform}) {self.created_at:%Y-%m-%d %H:%M}"


class ActiveUser(models.Model):
    """Records active usage — updated on each token validation."""

    token_key = models.CharField(max_length=100, db_index=True)
    user_email = models.EmailField(blank=True, default="")
    user_name = models.CharField(max_length=100, blank=True, default="")
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    platform = models.CharField(max_length=20, blank=True, default="")
    app_version = models.CharField(max_length=20, blank=True, default="")
    last_seen = models.DateTimeField(auto_now=True)
    first_seen = models.DateTimeField(auto_now_add=True)
    total_sessions = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["-last_seen"]

    def __str__(self):
        return f"{self.user_email or self.token_key[:20]} — last seen {self.last_seen:%Y-%m-%d %H:%M}"

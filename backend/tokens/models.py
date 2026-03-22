import secrets

from django.db import models
from django.utils import timezone


def generate_token():
    return f"shipit_{secrets.token_hex(24)}"


class Token(models.Model):
    user = models.ForeignKey(
        "waitlist.WaitlistUser",
        on_delete=models.CASCADE,
        related_name="tokens",
    )
    key = models.CharField(max_length=128, unique=True, default=generate_token)
    is_active = models.BooleanField(default=False)
    start_date = models.DateTimeField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.key[:20]}... ({self.user.email})"

    @property
    def is_valid(self):
        if not self.is_active:
            return False
        now = timezone.now()
        if self.start_date and now < self.start_date:
            return False
        if self.end_date and now > self.end_date:
            return False
        return True

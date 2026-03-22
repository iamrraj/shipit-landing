from django.db import models


class WaitlistUser(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    joined_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-joined_at"]

    def __str__(self):
        return f"{self.name} <{self.email}>"

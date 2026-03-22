from rest_framework import serializers

from .models import WaitlistUser


class WaitlistUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitlistUser
        fields = ["id", "name", "email", "joined_at"]
        read_only_fields = ["id", "joined_at"]

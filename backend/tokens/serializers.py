from rest_framework import serializers

from .models import Token


class TokenSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source="user.email", read_only=True)
    user_name = serializers.CharField(source="user.name", read_only=True)
    is_valid = serializers.BooleanField(read_only=True)

    class Meta:
        model = Token
        fields = [
            "id",
            "key",
            "user_email",
            "user_name",
            "is_active",
            "is_valid",
            "start_date",
            "end_date",
            "created_at",
        ]
        read_only_fields = ["id", "key", "created_at"]

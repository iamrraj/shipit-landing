import logging

from django.conf import settings
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .emails import send_token_activated
from .models import Token
from .serializers import TokenSerializer

logger = logging.getLogger(__name__)


@api_view(["POST"])
def validate_token(request):
    """Validate a ShipIt token. Used by the CLI at install/startup."""
    key = request.data.get("token", "").strip()
    if not key:
        return Response(
            {"valid": False, "error": "Token is required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        token = Token.objects.select_related("user").get(key=key)
    except Token.DoesNotExist:
        return Response(
            {"valid": False, "error": "Token not found."},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = TokenSerializer(token)
    return Response(
        {"valid": token.is_valid, "token": serializer.data},
        status=status.HTTP_200_OK,
    )


@api_view(["POST"])
def activate_token(request):
    """Activate a token and set its validity period. Sends email on activation."""
    key = request.data.get("token", "").strip()
    days = request.data.get("days", getattr(settings, "TOKEN_DEFAULT_DAYS", 30))

    if not key:
        return Response(
            {"error": "Token is required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        token = Token.objects.select_related("user").get(key=key)
    except Token.DoesNotExist:
        return Response(
            {"error": "Token not found."},
            status=status.HTTP_404_NOT_FOUND,
        )

    if token.is_active:
        return Response(
            {"error": "Token is already active.", "token": TokenSerializer(token).data},
            status=status.HTTP_409_CONFLICT,
        )

    now = timezone.now()
    token.is_active = True
    token.start_date = now
    token.end_date = now + timezone.timedelta(days=int(days))
    token.save(update_fields=["is_active", "start_date", "end_date"])

    try:
        send_token_activated(token)
    except Exception:
        logger.exception("Failed to send token activation email to %s", token.user.email)

    serializer = TokenSerializer(token)
    return Response(
        {"message": "Token activated.", "token": serializer.data},
        status=status.HTTP_200_OK,
    )

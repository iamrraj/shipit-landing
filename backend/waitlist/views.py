import logging

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .emails import send_waitlist_welcome
from .models import WaitlistUser
from .serializers import WaitlistUserSerializer

logger = logging.getLogger(__name__)


@api_view(["POST"])
def join_waitlist(request):
    """Add a user to the waitlist and send welcome email."""
    serializer = WaitlistUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        try:
            send_waitlist_welcome(user)
        except Exception:
            logger.exception("Failed to send waitlist welcome email to %s", user.email)
        return Response(
            {"message": "You're on the waitlist!", "user": serializer.data},
            status=status.HTTP_201_CREATED,
        )
    if "email" in serializer.errors:
        return Response(
            {"message": "This email is already on the waitlist."},
            status=status.HTTP_409_CONFLICT,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

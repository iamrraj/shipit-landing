from datetime import timedelta

from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ActiveUser, DownloadEvent, InstallEvent


def _get_client_ip(request):
    """Extract real IP from request (handles proxies)."""
    forwarded = request.META.get("HTTP_X_FORWARDED_FOR")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR")


@api_view(["POST"])
def track_download(request):
    """Record a download event (install script or archive)."""
    DownloadEvent.objects.create(
        event_type=request.data.get("event", "archive"),
        version=request.data.get("version", ""),
        ip_address=_get_client_ip(request),
        user_agent=request.META.get("HTTP_USER_AGENT", ""),
        platform=request.data.get("platform", ""),
        arch=request.data.get("arch", ""),
    )
    return Response({"ok": True}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def track_install(request):
    """Record an install event (started, completed, or failed)."""
    InstallEvent.objects.create(
        status=request.data.get("status", "started"),
        version=request.data.get("version", ""),
        ip_address=_get_client_ip(request),
        platform=request.data.get("platform", ""),
        arch=request.data.get("arch", ""),
        python_version=request.data.get("python_version", ""),
        node_version=request.data.get("node_version", ""),
        error_message=request.data.get("error", ""),
    )
    return Response({"ok": True}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def track_heartbeat(request):
    """Record active usage — called by ShipIt app on launch/periodically."""
    token_key = request.data.get("token_key", "")
    if not token_key:
        return Response({"error": "token_key required"}, status=status.HTTP_400_BAD_REQUEST)

    user, created = ActiveUser.objects.get_or_create(
        token_key=token_key,
        defaults={
            "user_email": request.data.get("user_email", ""),
            "user_name": request.data.get("user_name", ""),
            "ip_address": _get_client_ip(request),
            "platform": request.data.get("platform", ""),
            "app_version": request.data.get("app_version", ""),
        },
    )

    if not created:
        user.ip_address = _get_client_ip(request)
        user.platform = request.data.get("platform", user.platform)
        user.app_version = request.data.get("app_version", user.app_version)
        if request.data.get("user_email"):
            user.user_email = request.data["user_email"]
        if request.data.get("user_name"):
            user.user_name = request.data["user_name"]
        user.total_sessions += 1
        user.save()

    return Response({"ok": True}, status=status.HTTP_200_OK)


@api_view(["GET"])
def stats(request):
    """Dashboard stats — total downloads, installs, active users."""
    now = timezone.now()
    last_24h = now - timedelta(hours=24)
    last_7d = now - timedelta(days=7)
    last_30d = now - timedelta(days=30)

    return Response({
        "downloads": {
            "total": DownloadEvent.objects.count(),
            "last_24h": DownloadEvent.objects.filter(created_at__gte=last_24h).count(),
            "last_7d": DownloadEvent.objects.filter(created_at__gte=last_7d).count(),
            "last_30d": DownloadEvent.objects.filter(created_at__gte=last_30d).count(),
        },
        "installs": {
            "total": InstallEvent.objects.filter(status="completed").count(),
            "last_24h": InstallEvent.objects.filter(status="completed", created_at__gte=last_24h).count(),
            "last_7d": InstallEvent.objects.filter(status="completed", created_at__gte=last_7d).count(),
            "failed": InstallEvent.objects.filter(status="failed").count(),
        },
        "active_users": {
            "total": ActiveUser.objects.count(),
            "last_24h": ActiveUser.objects.filter(last_seen__gte=last_24h).count(),
            "last_7d": ActiveUser.objects.filter(last_seen__gte=last_7d).count(),
            "last_30d": ActiveUser.objects.filter(last_seen__gte=last_30d).count(),
        },
    })

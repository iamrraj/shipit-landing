from django.conf import settings
from post_office import mail

LOGO_URL = f"{settings.SITE_URL}/static/images/shipit-logo.svg"


def send_waitlist_welcome(user):
    """Send welcome email when a user joins the waitlist."""
    mail.send(
        recipients=[user.email],
        sender=settings.DEFAULT_FROM_EMAIL,
        template="waitlist_welcome",
        context={
            "name": user.name,
            "email": user.email,
            "subject": f"Welcome to ShipIt, {user.name}!",
            "base_url": settings.SITE_URL,
            "logo_url": LOGO_URL,
        },
        language="en",
        priority="now",
    )

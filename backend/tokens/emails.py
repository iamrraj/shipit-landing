from django.conf import settings
from post_office import mail

LOGO_URL = f"{settings.SITE_URL}/static/images/shipit-logo.svg"


def send_token_activated(token):
    """Send email when a token is activated with the token key and dates."""
    mail.send(
        recipients=[token.user.email],
        sender=settings.DEFAULT_FROM_EMAIL,
        template="token_activated",
        context={
            "name": token.user.name,
            "email": token.user.email,
            "subject": "Your ShipIt token is active!",
            "token_key": token.key,
            "start_date": token.start_date.strftime("%B %d, %Y %H:%M UTC")
            if token.start_date
            else "—",
            "end_date": token.end_date.strftime("%B %d, %Y %H:%M UTC")
            if token.end_date
            else "—",
            "base_url": settings.SITE_URL,
            "logo_url": LOGO_URL,
        },
        language="en",
        priority="now",
    )

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/waitlist/", include("waitlist.urls")),
    path("api/tokens/", include("tokens.urls")),
]

from django.urls import path

from . import views

urlpatterns = [
    path("download/", views.track_download, name="track-download"),
    path("install/", views.track_install, name="track-install"),
    path("heartbeat/", views.track_heartbeat, name="track-heartbeat"),
    path("stats/", views.stats, name="analytics-stats"),
]

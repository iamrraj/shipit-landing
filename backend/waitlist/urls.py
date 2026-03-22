from django.urls import path

from . import views

urlpatterns = [
    path("join/", views.join_waitlist, name="join-waitlist"),
]

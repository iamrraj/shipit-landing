from django.urls import path

from . import views

urlpatterns = [
    path("validate/", views.validate_token, name="validate-token"),
    path("activate/", views.activate_token, name="activate-token"),
]

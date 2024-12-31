# rsvp/urls.py
from django.urls import path
from .views import rsvp_view

urlpatterns = [
    path('', rsvp_view, name='rsvp'),
    #path('thank_you/', thank_you_view, name='thank_you'),
]


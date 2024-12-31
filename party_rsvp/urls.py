# party_rsvp/urls.py
from django.contrib import admin
from django.urls import include, path
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rsvp/', include('rsvp.urls')),
    path('', lambda request: redirect('rsvp/', permanent=False)),  # Redirect root URL to rsvp app
]

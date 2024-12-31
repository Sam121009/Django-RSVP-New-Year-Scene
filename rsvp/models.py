from django.db import models

# Create your models here.
# rsvp/models.py
#from django.db import models

class RSVP(models.Model):
    name = models.CharField(max_length=100)
    response = models.CharField(max_length=3, choices=[('YES', 'Yes'), ('NO', 'No')])


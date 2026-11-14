
from django.db import models


class BusinessInfo(models.Model):

    name = models.CharField(max_length=200)

    owner_name = models.CharField(max_length=100, blank=True)

    description = models.TextField()

    address = models.TextField()

    phone = models.CharField(max_length=15)

    email = models.EmailField()

    opening_hours = models.CharField(max_length=200)

    google_maps_url = models.URLField(blank=True)

    whatsapp_number = models.CharField(max_length=15)

    def __str__(self):
        return self.name

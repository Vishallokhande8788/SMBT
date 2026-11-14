from django.db import models

# Create your models here.

from django.db import models


class Enquiry(models.Model):

    DEVICE_CHOICES = [
        ('Laptop', 'Laptop'),
        ('Desktop', 'Desktop'),
        ('MacBook', 'MacBook'),
        ('iMac', 'iMac'),
        ('Other', 'Other'),
    ]

    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=15)

    email = models.EmailField(blank=True, null=True)

    device_type = models.CharField(
        max_length=20,
        choices=DEVICE_CHOICES
    )

    device_model = models.CharField(max_length=100)

    issue = models.TextField()

    message = models.TextField(blank=True)

    is_contacted = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.device_type}"

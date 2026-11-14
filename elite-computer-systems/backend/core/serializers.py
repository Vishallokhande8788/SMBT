
from rest_framework import serializers
from .models import BusinessInfo


class BusinessInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = BusinessInfo

        fields = [
            'id',
            'name',
            'owner_name',
            'description',
            'address',
            'phone',
            'email',
            'opening_hours',
            'google_maps_url',
            'whatsapp_number',
        ]

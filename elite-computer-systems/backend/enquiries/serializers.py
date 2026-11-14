
from rest_framework import serializers
from .models import Enquiry


class EnquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enquiry

        fields = [
            'id',
            'name',
            'phone',
            'email',
            'device_type',
            'device_model',
            'issue',
            'message',
            'created_at',
        ]

        read_only_fields = ['id', 'created_at']

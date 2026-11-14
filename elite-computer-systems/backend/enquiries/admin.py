
from django.contrib import admin
from .models import Enquiry


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'phone',
        'device_type',
        'device_model',
        'is_contacted',
        'created_at',
    )

    list_filter = ('device_type', 'is_contacted')

    search_fields = ('name', 'phone', 'email')

    readonly_fields = ('created_at',)

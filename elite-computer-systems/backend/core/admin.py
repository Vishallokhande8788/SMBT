
from django.contrib import admin
from .models import BusinessInfo


@admin.register(BusinessInfo)
class BusinessInfoAdmin(admin.ModelAdmin):

    list_display = ('name', 'phone', 'email')

    search_fields = ('name', 'owner_name')

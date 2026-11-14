
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/services/', include('services.urls')),

    path('api/enquiries/', include('enquiries.urls')),

    path('api/business/', include('core.urls')),
]

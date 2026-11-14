
from django.urls import path
from .views import BusinessInfoAPIView


urlpatterns = [
    path('', BusinessInfoAPIView.as_view(), name='business-info'),
]

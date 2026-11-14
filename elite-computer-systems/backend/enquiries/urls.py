
from django.urls import path
from .views import EnquiryCreateAPIView


urlpatterns = [
    path(
        '',
        EnquiryCreateAPIView.as_view(),
        name='enquiry-create'
    ),
]

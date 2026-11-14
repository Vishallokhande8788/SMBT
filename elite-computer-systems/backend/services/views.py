
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import Service
from .serializers import ServiceSerializer


class ServiceListAPIView(ListAPIView):

    queryset = Service.objects.filter(is_active=True)

    serializer_class = ServiceSerializer

    permission_classes = [AllowAny]


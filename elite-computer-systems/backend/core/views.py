
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny

from .models import BusinessInfo
from .serializers import BusinessInfoSerializer


class BusinessInfoAPIView(RetrieveAPIView):

    queryset = BusinessInfo.objects.all()

    serializer_class = BusinessInfoSerializer

    permission_classes = [AllowAny]

    def get_object(self):
        return BusinessInfo.objects.first()

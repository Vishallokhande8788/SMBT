
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny

from .models import Enquiry
from .serializers import EnquirySerializer


class EnquiryCreateAPIView(CreateAPIView):

    queryset = Enquiry.objects.all()

    serializer_class = EnquirySerializer

    permission_classes = [AllowAny]

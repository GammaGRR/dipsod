from rest_framework import generics, permissions
from .models import ConsultationRequest
from .serializers import ConsultationRequestSerializer
from .models import ServiceRequest
from .serializers import ServiceRequestSerializer
from rest_framework import viewsets
from .models import ServiceCategory
from .serializers import ServiceCategorySerializer
from .models import ConsultationMessage
from .serializers import ConsultationMessageSerializer

class ConsultationRequestCreate(generics.CreateAPIView):
    queryset = ConsultationRequest.objects.all()
    serializer_class = ConsultationRequestSerializer
    permission_classes = [permissions.AllowAny]

class ConsultationMessageCreate(generics.CreateAPIView):
    queryset = ConsultationMessage.objects.all()
    serializer_class = ConsultationMessageSerializer
    permission_classes = [permissions.AllowAny]

class ServiceRequestCreate(generics.CreateAPIView):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestSerializer
    permission_classes = [permissions.AllowAny]

class ServiceCategoryViewSet(viewsets.ModelViewSet):
    queryset = ServiceCategory.objects.prefetch_related('services').all()
    serializer_class = ServiceCategorySerializer
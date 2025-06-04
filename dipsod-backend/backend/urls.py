from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from applications.views import ConsultationMessageCreate
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import RedirectView
from django.conf import settings
from django.conf.urls.static import static
from applications.views import (
    ServiceRequestCreate,
    ConsultationRequestCreate,
    ServiceCategoryViewSet,
    ConsultationMessageCreate
)
from staff.views import EmployeeListAPIView
from django.http import HttpResponseRedirect

def redirect_to_frontend(request, path):
    return HttpResponseRedirect(f'http://localhost:3000/{path}')

router = routers.DefaultRouter()
router.register(r'service-categories', ServiceCategoryViewSet)

urlpatterns = [
    path('', RedirectView.as_view(url='http://localhost:3000/')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/consultations/', ConsultationRequestCreate.as_view(), name='consultation-request'),
    path('api/consultation-message/', ConsultationMessageCreate.as_view(), name='consultation-message'),
    path('api/service-requests/', ServiceRequestCreate.as_view(), name='service-request'),
    path('api/staff/employees/', EmployeeListAPIView.as_view(), name='staff-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('<path:path>', redirect_to_frontend),
]
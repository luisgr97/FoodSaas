"""Librerias e imports"""
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include

"""by allow charge a file in the dirname"""


urlpatterns = [
    path('api/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/tenant/', include('tenant.urls')),
    path('api/log/', include('accesspoint.urls')),
    path('api/users/', include('users.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

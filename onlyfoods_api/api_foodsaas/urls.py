"""Librerias e imports"""
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include

"""by allow charge a file in the dirname"""


urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/tenants/', include('tenant.urls')),
    path('api/logs/', include('accesspoint.urls')),
    path('api/users/', include('users.urls')),
    path('api/franchises/', include('franchise.urls')),
    path('api/menus/', include('menu.urls')),
    path('api/products/', include('products.urls')),
    path('api/ingredients/', include('ingredients.urls')),
    path('api/bills/', include('bills.urls')),
    path('api/purcharsers/', include('purcharsers.urls')),
    path('api/payments/', include('payments.urls')),



]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

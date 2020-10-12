from django.urls import path, re_path

from tenant.views.domain_views import *
from tenant.views.tenant_views import *

urlpatterns = [
    # CRUD Tenant => Create, Read, Update, Delete
    path('create', TenantCreate.as_view()), #ok
    path('list', TenantList.as_view()),#ok
    path('get/<pk>', TenantUpdate.as_view()), #ok
    path('update/<pk>', TenantDetail.as_view()),#ok
    path('delete/v<pk>', TenantDelete.as_view()),#ok

    #CRUD Domain=> Create, Read, Update, Delete
    path('create', DomainCreate.as_view()), #ok
    path('list', DomainList.as_view()),#ok
    path('get/<pk>', DomainUpdate.as_view()), #ok
    path('update/<pk>', DomainDetail.as_view()),#ok
    path('delete/v<pk>', DomainDelete.as_view())#ok
]

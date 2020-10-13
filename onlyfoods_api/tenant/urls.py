from django.urls import path, re_path

from .views.domain_views import *
from .views.tenant_views import *
from .views.plan_views import *

urlpatterns = [

    # CRUD Tenant => Create, Read, Update, Delete
    path('client/create', TenantCreate.as_view()), #ok
    path('client/list', TenantList.as_view()),#ok
    path('client/get/<pk>', TenantDetail.as_view()), #ok
    path('client/update/<pk>', TenantUpdate.as_view()),#ok
    path('client/delete/<pk>', TenantDelete.as_view()),#ok

    #CRUD Domain=> Create, Read, Update, Delete
    path('domain/create', DomainCreate.as_view()), #ok
    path('domain/list', DomainList.as_view()),#ok
    path('domain/get/<pk>', DomainDetail.as_view()), #ok
    path('domain/update/<pk>', DomainUpdate.as_view()),#ok
    path('domain/delete/<pk>', DomainDelete.as_view()),#ok

    #CRUD Plan=> Create, Read, Update, Delete
    path('plan/create', PlanCreate.as_view()), #ok
    path('plan/list', PlanList.as_view()),#ok
    path('plan/get/<pk>', PlanDetail.as_view()), #ok
    path('plan/update/<pk>', PlanUpdate.as_view()),#ok
    path('plan/delete/<pk>', PlanDelete.as_view())#ok
]

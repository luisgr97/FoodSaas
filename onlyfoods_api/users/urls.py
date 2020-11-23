from django.urls import path, re_path

from .views.user_views import *
from .views.typeuser_views import *


urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', UserCreate.as_view()), #ok
    path('list', UserList.as_view()),#ok
    path('get/<pk>', UserDetail.as_view()), #ok
    path('update/<pk>', UserUpdate.as_view()),#ok
    path('delete/<pk>', UserDelete.as_view()),#ok
    path('listdig', DigList.as_view()),
    path('listclients', ClientList.as_view()),

    # CRUD => Create, Read, Update, Delete
    path('type/create', TypeUserCreate.as_view()),#ok
    path('type/list', TypeUserList.as_view()),#ok
    path('type/get/<pk>', TypeUserDetail.as_view()), #ok
    path('type/update/<pk>', TypeUserUpdate.as_view()),#ok
    path('type/delete/<pk>', TypeUserDelete.as_view())#ok
]

from django.urls import path, re_path

from users.views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', UserCreate.as_view()), #ok
    path('list', UserList.as_view()),#ok
    path('get/<pk>', UserUpdate.as_view()), #ok
    path('update/<pk>', UserDetail.as_view()),#ok
    path('delete/v<pk>', UserDelete.as_view())#ok
]

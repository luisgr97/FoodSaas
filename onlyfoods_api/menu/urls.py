from django.urls import path, re_path

from .views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', MenuCreate.as_view()), #ok
    path('list', MenuList.as_view()),#ok
    path('get/<pk>', MenuUpdate.as_view()), #ok
    path('update/<pk>', MenuDetail.as_view()),#ok
    path('delete/<pk>', MenuDelete.as_view()),#ok
]

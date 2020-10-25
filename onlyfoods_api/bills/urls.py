from django.urls import path, re_path

from .views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', BillCreate.as_view()), #ok
    path('list', BillList.as_view()),#ok
    path('get/<pk>', BillUpdate.as_view()), #ok
    path('update/<pk>', BillDetail.as_view()),#ok
    path('delete/<pk>', BillDelete.as_view()),#ok
]

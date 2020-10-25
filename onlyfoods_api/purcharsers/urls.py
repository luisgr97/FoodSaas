from django.urls import path, re_path

from .views import *


urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', PurcharseCreate.as_view()), #ok
    path('list', PurcharseList.as_view()),#ok
    path('get/<pk>', PurcharseUpdate.as_view()), #ok
    path('update/<pk>', PurcharseDetail.as_view()),#ok
    path('delete/v<pk>', PurcharseDelete.as_view()),#ok
]

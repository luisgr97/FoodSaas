from django.urls import path, re_path

from .views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('in', Log_in.as_view()), #ok
    path('out', Log_out.as_view()),#ok
]

from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^add$', views.add, name='add'),
    url(r'^', views.books, name='books'), #keep empty string urls at bottom of list to avoid routiung errors
    
]
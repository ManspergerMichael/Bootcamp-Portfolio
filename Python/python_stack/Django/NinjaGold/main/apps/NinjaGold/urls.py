from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.game),
    url(r'process_money$',views.process_money)
]
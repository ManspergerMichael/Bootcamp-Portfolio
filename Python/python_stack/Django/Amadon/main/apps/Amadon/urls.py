from django.conf.urls import url
from . import views
urlpatterns = [
url(r'cart$', views.cart),
url(r'buy$', views.buy),
url(r'checkout$', views.checkout)
]

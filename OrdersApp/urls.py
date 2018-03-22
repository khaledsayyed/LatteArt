from django.urls import path
from django.conf.urls import url,include
from . import users_views
from . import orders_views
from .forms import NewOrderForm
urlpatterns = [
	path('/users', users_views.users, name='users'),
	path('/orders', orders_views.orders, name='orders'),
	path('/orders/new', orders_views.create, name='new_order'),
	path('/',orders_views.products, name="products",),
	url(r'^datetimepicker/', include('datetimepicker.urls')),
	
]
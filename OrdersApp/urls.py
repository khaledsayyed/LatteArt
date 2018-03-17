from django.urls import path
from . import users_views
from . import orders_views
urlpatterns = [
	path('/users', users_views.users, name='users'),
	path('/orders', orders_views.orders, name='orders'),
	path('/orders/new', orders_views.create, name='new_order'),
]
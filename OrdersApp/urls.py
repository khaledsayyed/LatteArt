from django.urls import path
from django.conf.urls import url,include
from . import users_views
from . import orders_views
from . import employees_views
from . import mainpageview
urlpatterns = [
	path('/users', users_views.users, name='users'),
	path('/orders', orders_views.orders, name='orders'),
	path('/orders/new', orders_views.create, name='new_order'),
	path('/orders/getAllProducts', orders_views.getAllProducts, name='getAllProducts'),
	path('/employees', employees_views.employees, name='employees'),
	path('/employees/new', employees_views.add, name='add_employees'),
	path('/mainpage', mainpageview.home, name= 'main'),
	path('/menu', mainpageview.menu, name= 'menu'),
	path('/login', mainpageview.login, name='login'),
]

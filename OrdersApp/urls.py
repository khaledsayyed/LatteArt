from django.urls import path
from django.conf.urls import url,include
from . import users_views
from . import orders_views
from . import employees_views
from . import mainpageview
from . import product_views
from . import signupview
urlpatterns = [
	path('users', users_views.users, name='users'),
	path(r'^users/delete/(?P<id>\d+)/$', users_views.delete_p, name= 'delete_user'),
	path('orders', orders_views.orders, name='orders'),
	path('orders/new', orders_views.create, name='new_order'),
	path('orders/getAllProducts', orders_views.getAllProducts, name='getAllProducts'),
	path('orders/getBranches', orders_views.getBranches, name='getBranches'),
	path('orders/getOrders', orders_views.getOrders, name='getOrders'),
	path('orders/getOrder', orders_views.getOrder, name='getOrder'),
	path('orders/changeStatus', orders_views.changeStatus, name='changeStatus'),
	path('orders/delete', orders_views.delete, name='deleteOrder'),
	path('orders/edit', orders_views.edit, name='editOrder'),
	path('employees', employees_views.employees, name='employees'),
	path('employees/new', employees_views.add, name='add_employees'),
	path('mainpage', mainpageview.home, name= 'main'),
	path('menu', mainpageview.menu, name= 'menu'),
	path('orders/sendOrder', orders_views.sendOrder, name= 'sendOrder'),
	path('products', product_views.Products, name ='products'),
	path('products/new', product_views.add_p, name= 'add products'),
	path(r'^products/delete/(?P<id>\d+)/$', product_views.delete_p, name= 'delete_product'),
	path(r'^products/edit/(?P<id>\d+)/$', product_views.edit_p, name='edit_product'),
	path('login', mainpageview.login, name='login'),
	path(r'^users/edit/(?P<id>\d+)/$', users_views.edit_wallet, name='edit_wallet'),
	path('logout', mainpageview.logout, name='logout'),
	path('signup',signupview.add, name= 'signup'),
	path('customer',signupview.customer, name= 'customer'),
]

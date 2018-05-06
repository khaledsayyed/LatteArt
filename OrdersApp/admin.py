from django.contrib import admin
from .models import CustomerProfile
from .models import Product
from .models import Order, OrderItem
from .models import Branch
from .models import Employee
 
admin.site.register(CustomerProfile)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Branch)
admin.site.register(Employee)
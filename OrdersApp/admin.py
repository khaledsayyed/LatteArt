from django.contrib import admin
from .models import UserProfile
from .models import Product
from .models import Order
admin.site.register(UserProfile)
admin.site.register(Product)
admin.site.register(Order)
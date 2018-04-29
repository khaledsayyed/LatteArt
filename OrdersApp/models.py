from django.db import models
from django.core.validators import RegexValidator
#from django_mysql.models import ListTextField

PAYMENTMETHODS = (
    ('Credit Card', 'Credit Card'),
    ('From Wallet', 'From Wallet'),
    ('On Pickup', 'On Pickup'),
)

CATEGORY=(
	('coffee','Coffee product'),
	('beans', 'Coffee Beans'),
	('food','Food product'),
)

ORDERSTATUS=(
	(0, 'Received'),
	(1, 'Cooking'),
	(2, 'Ready'),
)

ADMINRIGHTS=(
	('manager','Manager'),
	('employee', 'Employee'),
	('customer', 'Customer'),
)
phone_regex = RegexValidator(regex=r'^\d{9,8}$', message="Phone number must be entered in the format: '--------'. Up to 8 digits allowed.")
	
class CustomerProfile(models.Model):
	Name = models.CharField(max_length=100)
	UserName = models.CharField(max_length=100)
	Password = models.CharField(max_length=100)
	Email=models.EmailField(max_length=100, blank=False, unique=False, null=True)
	PhoneNumber=models.CharField(max_length=8,blank=False)
	#AdminRights=models.CharField(max_length=10, choices=ADMINRIGHTS,null=True)
	#add credit card information
class Product(models.Model):
	Category=models.CharField(max_length=10,choices=CATEGORY)
	Name = models.CharField(max_length=100)
	Price = models.IntegerField()
	Description = models.CharField(max_length=300)
#	Image=models.ImageField (upload_to = 'products_images')


class Branch(models.Model):
	Name=models.CharField(max_length=100)
	#Location=LocationField(based_fields=['Name'],zoom=7, default=Point(1.0,1.0))
	Description=models.CharField(max_length=300)
	#ListOfEmployees=models.ListTextField(base_field=models.Employee())
	ImageID=models.ImageField(upload_to= 'Branch_images')

class OrderItem(models.Model):
    Product = models.ForeignKey(Product,on_delete=models.CASCADE)
    Quantity = models.IntegerField()

class Order(models.Model):
	Customer = models.ForeignKey(CustomerProfile,on_delete=models.CASCADE)
	Products = models.ManyToManyField(OrderItem)
	PickupTime = models.DateTimeField(auto_now=True)
	PaymentMethod = models.CharField(default=2, max_length=1, choices=PAYMENTMETHODS)
	#order ID will be automatically generated
	Branch=models.ForeignKey(Branch, on_delete=models.CASCADE)
	TotalPrice=models.IntegerField()
	Description = models.CharField(max_length=300)
	OrderStatus=models.IntegerField(default=0, choices=ORDERSTATUS)

class Manager(models.Model):
	Name=models.CharField(max_length=100)
	UserName = models.CharField(max_length=100)
	Password = models.CharField(max_length=100)
	Email=models.EmailField(max_length=100, blank=False, unique=True, null=False)
	
class Employee(models.Model):
	Name=models.CharField(max_length=100)
	UserName = models.CharField(max_length=100)
	Password = models.CharField(max_length=100)
	Email=models.EmailField(max_length=100, blank=False, unique=True, null=False)
	#AdminRights=models.CharField(max_length=10, choices=ADMINRIGHTS)
#	Branch=models.ForeignKey(Branch, on_delete=models.CASCADE)

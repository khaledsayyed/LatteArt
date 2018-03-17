from django.db import models
PAYMENTMETHODS = (
    (0, 'Credit Card'),
    (1, 'From Wallet'),
    (2, 'On Pickup'),
)
class UserProfile(models.Model):
	Name = models.CharField(max_length=100)
	UserName = models.CharField(max_length=100)
	Password = models.CharField(max_length=100)

class Product(models.Model):
	Name = models.CharField(max_length=100)
	Price = models.IntegerField()
	Description = models.CharField(max_length=300)
	
class Order(models.Model):
	Customer = models.ForeignKey(UserProfile,on_delete=models.CASCADE)
	Product = models.ForeignKey(Product,on_delete=models.CASCADE)
	PickupTime = models.DateTimeField(auto_now=True)
	PaymentMethod = models.CharField(default=2, max_length=1, choices=PAYMENTMETHODS)
	
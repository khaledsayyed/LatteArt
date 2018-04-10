from .models import Order
from .models import CustomerProfile
from .models import Product
from .models import Employee
from table import Table
from table.columns import Column

class UserTable(Table):
	id = Column(field='id', header=u'Id')
	Name = Column(field='Name', header=u'Name')
	UserName = Column(field='UserName', header=u'UserName')
	class Meta:
		model = CustomerProfile
	
class OrderTable(Table):
	id = Column(field='id', header=u'Id')
	CustomerName = Column(field='Customer.Name', header=u'Customer')
	#ProductName = Column(field='Products.Name', header=u'Product')
	TotalPrice = Column(field = 'TotalPrice', header=u'Price')
	PickupTime = Column(field = 'PickupTime',header=u'PickupTime')
	PaymentMethod = Column(field = 'PaymentMethod',header=u'PaymentMethod')
	class Meta:
		model = Order
		
class EmployeeTable(Table):
	id = Column(field='id', header=u'Id')
	Name = Column(field='Name', header=u'Name')
	UserName = Column(field='UserName', header=u'UserName')
	Password = Column(field='Password', header=u'Password')
	Email = Column(field='Email', header=u'Email')
	class Meta:
		model = Employee
		
class ProductTable(Table):
	id = Column(field='id', header=u'Id')
	ProductName = Column(field='Product.Name', header=u'Product')
	ProductPrice = Column(field = 'Product.Price', header=u'Price')
	class Meta:
		model = Product

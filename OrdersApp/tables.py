from .models import Order
from .models import UserProfile
from .models import Product
from table import Table
from table.columns import Column

class UserTable(Table):
	id = Column(field='id', header=u'Id')
	Name = Column(field='Name', header=u'Name')
	UserNamme = Column(field='UserName', header=u'UserName')
	class Meta:
		model = UserProfile
	
class OrderTable(Table):
	id = Column(field='id', header=u'Id')
	CustomerName = Column(field='Customer.Name', header=u'Customer')
	ProductName = Column(field='Product.Name', header=u'Product')
	ProductPrice = Column(field = 'Product.Price', header=u'Price')
	PickupTime = Column(field = 'PickupTime',header=u'PickupTime')
	PaymentMethod = Column(field = 'PaymentMethod',header=u'PaymentMethod')
	class Meta:
		model = Order
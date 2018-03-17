from django import forms
from .models import Product  
from .models import UserProfile  
from .models import Order  
from .models import PAYMENTMETHODS
from bootstrap3_datetime.widgets import DateTimePicker
class PropertyModelChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
         return obj.Name

class NewOrderForm(forms.Form):
	product = PropertyModelChoiceField(queryset=Product.objects.all())
	user = PropertyModelChoiceField(queryset=UserProfile.objects.all())
#	order_time = forms.DateTimeField(
 #       widget=DateTimePicker(options={"format": "YYYY-MM-DD HH:mm",
  #                                     "pickSeconds": False}))
	payment_method = forms.ChoiceField(choices=PAYMENTMETHODS)

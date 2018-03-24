from django import forms
from .models import CustomerProfile
from .models import Product
from .models import Order
from .models import Branch
from .models import Employee 

from .models import PAYMENTMETHODS
from datetimepicker.helpers import js_loader_url
from datetimepicker.widgets import DateTimePicker
class PropertyModelChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
         return obj.Name

class NewOrderForm(forms.Form):
	product = PropertyModelChoiceField(queryset=Product.objects.all())
	user = PropertyModelChoiceField(queryset=UserProfile.objects.all())
	order_time = forms.DateTimeField(
        widget=DateTimePicker(script_tag=False),
	)
	@property
	def media(self):
		js_urls =js_loader_url(
			fields=self.fields,
			input_ids=['datepicker_no_script_tag',
						'timepicker_no_script_tag',
						'datetimepicker_no_script_tag']
        )

		form_media = forms.Media(js=js_urls)
		return super(SampleForm, self).media + form_media
	payment_method = forms.ChoiceField(choices=PAYMENTMETHODS)
	

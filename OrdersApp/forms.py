from django import forms
from .models import Employee
from.models import Product
from .models import CustomerProfile
class NewEmpForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = ('Name', 'Password','Email','UserName')
		
class NewProductForm (forms.ModelForm):

	class Meta:
		model = Product
		fields = ('Category','Name', 'Price', 'Description')
		

class DeleteProductForm (forms.Form):
	ID = forms.IntegerField()
	
class SignupForm(forms.ModelForm):
	class Meta:
		model=CustomerProfile
		fields=('PhoneNumber','Name','Password','Email', 'UserName')
	
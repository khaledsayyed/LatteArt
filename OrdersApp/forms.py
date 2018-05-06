from django import forms
from .models import Employee
from .models import *
class NewEmpForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = ('Name', 'Password','Email','UserName')

class NewProductForm (forms.ModelForm):
    class Meta:
            model = Product
            fields = ('Category','Name', 'Price', 'Description', 'Stock', 'unlimited','Image')
class EditWalletForm(forms.ModelForm):
	class Meta:
		model = CustomerProfile
		fields = ('Name','Wallet')									  

class SignupForm(forms.ModelForm):
	class Meta:
		model=CustomerProfile
		fields=('PhoneNumber','Name','Password','Email', 'UserName')
	

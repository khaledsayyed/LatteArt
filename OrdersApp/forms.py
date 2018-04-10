from django import forms
from .models import Employee

class NewEmpForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = ('Name', 'Password','Email','UserName')
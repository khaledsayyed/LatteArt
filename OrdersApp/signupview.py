from django.contrib.auth.decorators import permission_required
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime
from .models import CustomerProfile
from .forms import SignupForm
from django.shortcuts import render
from .tables import CustomerTable


def customer(request):
	customer = CustomerTable()
	return render(request, "customer/index.html",{'customer':customer})

def	add(request):
	cust_inst = CustomerProfile();

	if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
		form = SignupForm(request.POST)

        # Check if the form is valid:
		if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            #order_inst.Customer = form.cleaned_data['renewal_date']
			cust_inst.Name = form.cleaned_data['Name']
			cust_inst.UserName = form.cleaned_data['UserName']
			cust_inst.Password = form.cleaned_data['Password']
			cust_inst.Email = form.cleaned_data['Email']
			cust_inst.PhoneNumber = form.cleaned_data['PhoneNumber']
			cust_inst.save()

            # redirect to a new URL:
			return HttpResponseRedirect(reverse('customer') )
	else:
#		order = datetime.date.today() + datetime.timedelta(weeks=3)
		form = SignupForm()

	return render(request, 'customer/create.html', {'form': form, 'customer':cust_inst})
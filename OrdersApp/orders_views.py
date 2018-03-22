from django.contrib.auth.decorators import permission_required
from django.shortcuts import render
from OrdersApp.tables import OrderTable
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime
from .models import Order
from .forms import NewOrderForm

def products(request):
	return render(request,"index.html")
	
def orders(request):
	orders = OrderTable()
	return render(request, "orders/index.html",{'orders':orders})

def create(request):

	order_inst = Order();
    # If this is a POST request then process the Form data
	if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
		form = NewOrderForm(request.POST)

        # Check if the form is valid:
		if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            #order_inst.Customer = form.cleaned_data['renewal_date']
			order_inst.Product = form.cleaned_data['product']
			order_inst.Customer = form.cleaned_data['user']
			order_inst.PaymentMethod = form.cleaned_data['payment_method']
			#order_inst.PickupTime = datetime.now()
			order_inst.save()

            # redirect to a new URL:
			return HttpResponseRedirect(reverse('orders') )
	else:
#		order = datetime.date.today() + datetime.timedelta(weeks=3)
		form = NewOrderForm()

	return render(request, 'orders/create.html', {'form': form, 'orderinst':order_inst})
       

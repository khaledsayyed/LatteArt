from django.contrib.auth.decorators import permission_required
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime
from .models import Product
from .forms import NewProductForm
from .forms import DeleteProductForm
from django.shortcuts import render
from .tables import ProductTable

def Products(request):
	Products = ProductTable()
	return render(request, "products/index.html",{'Products':Products})
	
def	add_p(request):
	product_inst = Product();

	if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
		form = NewProductForm(request.POST)

        # Check if the form is valid:
		if form.is_valid():
			product_inst.Category = form.cleaned_data['Category']
			product_inst.Name = form.cleaned_data['Name']
			product_inst.Price = form.cleaned_data['Price']
			product_inst.Description = form.cleaned_data['Description']
			product_inst.save()

            # redirect to a new URL:
			return HttpResponseRedirect(reverse('products') )
	else:
#		order = datetime.date.today() + datetime.timedelta(weeks=3)
		form = NewProductForm()
	return render(request, 'products/create2.html', {'form': form, 'products':product_inst})
	

def delete_p(request):

	pr = Product.objects.all()
	if request.method == 'POST':
		form2 = DeleteProductForm(request.POST)
		if form2.is_valid():
			pr.id = form2.cleaned_data['ID']
			prr = Product.objects.get(id = pr.id)
			prr.delete()
			return HttpResponseRedirect(reverse('products') )
	else:
		form2 = DeleteProductForm()
	return render(request, 'products/delete.html', {'form2': form2, 'Products':Products})

	
def edit_p(request):
	pr = Product.objects.all()
	if request.method == 'POST':
		form3 = DeleteProductForm(request.POST)
		if form3.is_valid():
			pr.id = form3.cleaned_data['ID']
			prr = Product.objects.get(id = pr.id)
			prr.delete()
			return HttpResponseRedirect(reverse('add products') )
	else:
		form3 = DeleteProductForm()
	return render(request, 'products/edit.html', {'form3': form3, 'Products':Products})
	
	
	

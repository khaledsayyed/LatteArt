from django.contrib.auth.decorators import permission_required
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime
from .models import Product
from .forms import NewProductForm
from django.shortcuts import render
from .tables import ProductTable
from django.core.files.storage import FileSystemStorage

def Products(request):
	Products = ProductTable()
	return render(request, "products/index.html",{'Products':Products})

def	add_p(request):
	product_inst = Product();

	if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
		form = NewProductForm(request.POST, request.FILES)

        # Check if the form is valid:
		if form.is_valid():
			# product_inst.Category = form.cleaned_data['Category']
			# product_inst.Name = form.cleaned_data['Name']
			# product_inst.Name = request.FILES
			# product_inst.Price = form.cleaned_data['Price']
			# product_inst.Description = form.cleaned_data['Description']
			# product_inst.Stock = form.cleaned_data['Stock']
			# product_inst.unlimited = form.cleaned_data['unlimited']
			# product_inst.Image = form.cleaned_data['Image']
			# product_inst.save()
			form.save()

            # redirect to a new URL:
			return HttpResponseRedirect(reverse('products') )
	else:
#		order = datetime.date.today() + datetime.timedelta(weeks=3)
		form = NewProductForm()
	return render(request, 'products/create2.html', {'form': form})


def delete_p(request,id):
	prr = Product.objects.get(id = id)
	prr.delete()
	return HttpResponseRedirect(reverse('products') )

def edit_p(request,id):
	instance = Product.objects.get(id= id)
	if request.method == 'POST':
		form = NewProductForm(request.POST, request.FILES, instance=instance)
		if form.is_valid():
			form.save()
			# pr.Name = form.cleaned_data['Name']
			# pr.Category = form.cleaned_data['Category']
			# pr.Description = form.cleaned_data['Description']
			# pr.Price = form.cleaned_data['Price']
			# pr.Stock = form.cleaned_data['Stock']
			# pr.unlimited = form.cleaned_data['unlimited']
			# pr.Image = form.cleaned_data['Image']
			# pr.save()
			# myfile = request.FILES[0]
			# fs = FileSystemStorage()
			# filename = fs.save(myfile.name, myfile)
			return HttpResponseRedirect(reverse('products') )
	else:
		form = NewProductForm(initial={'Name':instance.Name,'Category':instance.Category,'Description':instance.Description,'Price':instance.Price})
	return render(request, 'products/edit.html', {'form': form})

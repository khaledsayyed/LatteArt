from django.contrib.auth.decorators import permission_required
from django.shortcuts import render
from OrdersApp.tables import OrderTable
from django.core import serializers
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Order,CATEGORY,Product
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

def products(request):
	return render(request,"index.html")

def orders(request):
	orders = OrderTable()
	return render(request, "orders/index.html",{'orders':orders})

def create(request):
	return render(request, 'orders/create.html')

def getAllProducts(request):
	products = Product.objects.all()
	data = serializers.serialize("json", products)
	return HttpResponse(data, content_type='application/json')

@csrf_exempt
def sendOrder(request):
	return HttpResponse(request, content_type='application/json')

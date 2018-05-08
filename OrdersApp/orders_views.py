from django.contrib.auth.decorators import permission_required
from django.shortcuts import render
from rest_framework.renderers import JSONRenderer
from OrdersApp.tables import OrderTable
from django.core import serializers
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import *
from .serializers import orderSerializer
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

def products(request):
	return render(request,"index.html")

def orders(request):
	edit = False
	if request.session['role'] == "manager" or request.session['role'] == "employee":
		edit = True
	return render(request, "orders/index.html",{'edit':edit})

def create(request):
	return render(request, 'orders/create.html',{'selectedOrders': request.GET.get('selected')})

def getBranches(request):
	branches = Branch.objects.only('Name').distinct()
	data = serializers.serialize("json", branches)
	return HttpResponse(data, content_type='application/json')

def getAllProducts(request):
	products = Product.objects.all()
	data = serializers.serialize("json", products)
	return HttpResponse(data, content_type='application/json')

def changeStatus(request):
	order = Order.objects.get(id=request.GET.get('id'))
	order.OrderStatus = request.GET.get('status')
	order.save()
	return HttpResponse(JSONRenderer().render("success"), content_type='application/json')

def delete(request):
	ord = Order.objects.get(id = request.GET.get('id'))
	ord.delete()
	return HttpResponseRedirect(reverse('orders') )

def edit(request):
	return render(request, 'orders/create.html',{'id': request.GET.get('id')})

def getOrder(request):
	order =Order.objects.filter(id = request.GET.get('id'))
	data  = JSONRenderer().render(orderSerializer(order, many=True).data)
	return HttpResponse(data, content_type='application/json')

def getOrders(request):
	orders = None
	if request.session['role'] == "manager":
		orders =Order.objects.all()
	elif request.session['role'] == "employee":
		orders =Order.objects.filter(Branch =request.session["branch"] )
	elif request.session['role'] == "customer":
		orders =Order.objects.filter(Customer_UserName =request.session["username"] )
	data = JSONRenderer().render(orderSerializer(orders, many=True).data)
	return HttpResponse(data, content_type='application/json')

@csrf_exempt
def sendOrder(request):
	new_order = None
	order_json =json.loads(request.body)
	if request.GET.get('id')!="-1":
		new_order = Order.objects.get(id=request.GET.get('id'))
		new_order.PaymentMethod = order_json["PaymentMethod"]
		new_order.TotalPrice = order_json["Price"]
		new_order.Description =order_json["Description"]
		new_order.OrderStatus = 0
		new_order.Branch_id=order_json["Branch"]
		new_order.PickupTime =order_json["PickupTime"]
		new_order.Customer =  CustomerProfile.objects.get(UserName=request.session['username']).UserName
		new_order.save()
		items = OrderItem.objects.filter(id=request.GET.get('id'))
		for item in items:
			item.delete()
	else:
			new_order = Order.objects.create(PaymentMethod = order_json["PaymentMethod"],TotalPrice = order_json["Price"],Description =order_json["Description"],OrderStatus = 0,Branch_id=order_json["Branch"],PickupTime =order_json["PickupTime"] )
	items = order_json["OrderItems"]
	for i in range(len(items)):
		order_item = OrderItem()
		order_item.Quantity = items[i]['Count']
		order_item.Product_id = Product.objects.get(Name = items[i]['Name']).id
		order_item.Order_id = new_order.id;
		order_item.save()

	return HttpResponse(JSONRenderer().render("success"), content_type='application/json')

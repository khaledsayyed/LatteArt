from django.shortcuts import render
from OrdersApp.tables import ProductTable

def menu(request):
	locations = ProductTable()
	return render(request, "mainpage/menu.html", {'products-menu':locations})

def home(request):
		
		return render(request, "mainpage/main.html")
		
def login(request):
	return render(request, "mainpage/login.html")
	
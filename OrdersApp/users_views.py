from django.shortcuts import render
from OrdersApp.tables import UserTable

def users(request):
	users = UserTable()
	return render(request, "users/index.html",{'users':users})

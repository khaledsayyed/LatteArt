from django.shortcuts import render
from OrdersApp.tables import ProductTable
from .models import CustomerProfile
from .models import Employee
from .models import Manager
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.contrib import messages

def menu(request):
	locations = ProductTable()
	return render(request, "mainpage/menu.html", {'products-menu':locations})

def home(request):
		if 'role' not in request.session:
			request.session['role']="guest";
		return render(request, "mainpage/main.html")

def logout(request):
	request.session.flush();
	request.session['role']="guest";
	return render(request, 'mainpage/main.html')


def login(request):


	request.session['username']=request.GET.get('uname');
	request.session['password']=request.GET.get('psw');
	try:
		request.session['role']="customer";
		user_data=CustomerProfile.objects.get(UserName=request.session['username']);
	except CustomerProfile.DoesNotExist:
		try:
			request.session['role']="employee";
			user_data=Employee.objects.get(UserName=request.session['username']);
			request.session['branch']=user_data.Branch.id
		except Employee.DoesNotExist:
			try:
				request.session['role']="manager";
				user_data=Manager.objects.get(UserName=request.session['username']);

			except Manager.DoesNotExist:
				request.session['role']="guest";
				user_data=None
	#user_data=CustomerProfile.objects.get(UserName=request.POST.get('uname'))
	if user_data is not None:
		if user_data.Password == request.session['password']:
			request.session['username']=user_data.UserName;
			request.session['password']=user_data.Password;
			return render(request, 'mainpage/main.html')
		else:
			request.session['role']="guest";
			return render(request, 'mainpage/main.html', {'wrongPass':True})

	else:
		request.session['role']="guest";
		return render(request, 'mainpage/main.html', {'wrongUname':True})

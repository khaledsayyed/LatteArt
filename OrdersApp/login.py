from django.shortcuts import render
from .models import CustomerProfile
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
 
def login(request):
 """
 :return:
 """
	user = authenticate(UserName=request.POST.get('uname'),password=request.POST.get('psw'))
 	if user is not None:
  		#login(request, user)
  		return render(request, 'mainpage.html')
 	else:
  		return HttpResponse('Error')
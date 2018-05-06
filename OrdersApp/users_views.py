from django.shortcuts import render
from OrdersApp.tables import UserTable
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import CustomerProfile		
from. forms import EditWalletForm										  

def users(request):
	users = UserTable()
	return render(request, "users/index.html",{'users':users})


def edit_wallet(request,id):
	inst_user = CustomerProfile.objects.get(id= id)
	if request.method == 'POST':
		form = EditWalletForm(request.POST)
		if form.is_valid():
			#inst_user.Name = form.cleaned_data['Name']
			inst_user.Wallet = form.cleaned_data['Wallet']
			inst_user.save()
			return HttpResponseRedirect(reverse('users') )
	else:
		form =EditWalletForm(initial={'Name':inst_user.Name,'Wallet':inst_user.Wallet })
	return render(request, 'users/edit.html', {'form': form})
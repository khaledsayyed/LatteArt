from django.contrib.auth.decorators import permission_required
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime
from .models import Employee
from .forms import NewEmpForm
from django.shortcuts import render
from .tables import EmployeeTable

def employees(request):
	employees = EmployeeTable()
	return render(request, "employees/index.html",{'employees':employees})
	
def	add(request):
	emp_inst = Employee();

	if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
		form = NewEmpForm(request.POST)

        # Check if the form is valid:
		if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            #order_inst.Customer = form.cleaned_data['renewal_date']
			emp_inst.Name = form.cleaned_data['Name']
			emp_inst.UserName = form.cleaned_data['UserName']
			emp_inst.Password = form.cleaned_data['Password']
			emp_inst.Email = form.cleaned_data['Email']
			emp_inst.save()

            # redirect to a new URL:
			return HttpResponseRedirect(reverse('employees') )
	else:
#		order = datetime.date.today() + datetime.timedelta(weeks=3)
		form = NewEmpForm()

	return render(request, 'employees/create.html', {'form': form, 'employees':emp_inst})
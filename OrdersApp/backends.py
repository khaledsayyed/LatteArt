from django.contrib.auth.models import User
from .models import CustomerProfile

class MyBackEnd(object):
	"""
 	This is the custom backend to authenticate the user in the DB.
 	if this authentication fais then django default authentication  will get called
 	"""
 
	def authenticate(self, UserName, password):

		"""
		:param username: Username of the user
		:param password: Password of the user
		:return:
		"""
		#check is user in dd

		user_data = CustomerProfile.objects.get(UserName=UserName)
		print("...%s...." % user_data)
		if UserName == CustomerProfile.UserName:
			if password == CustomerProfile.Password:
				return user_data
			else:
				return None	

		else:
			return None

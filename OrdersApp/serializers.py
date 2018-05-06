from rest_framework import serializers
from .models import *

class itemsSerializer(serializers.ModelSerializer):
    Product_Name = serializers.CharField(source='Product.Name', read_only=True)
    class Meta:
        model = OrderItem
        fields = ('id','Product','Product_Name', 'Quantity')

class orderSerializer(serializers.ModelSerializer):
    items = itemsSerializer(many=True)
    Branch_Name = serializers.CharField(source='Branch.Name', read_only=True)
    class Meta:
        model = Order
        fields = ('id','PickupTime','PaymentMethod','Branch','Branch_Name','TotalPrice','Description','OrderStatus','items')

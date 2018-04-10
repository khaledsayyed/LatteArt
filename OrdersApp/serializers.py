from rest_framework import serializers
from .models import Product
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    Category = serializers.CharField(source='get_Category_display')

    class Meta:
        model = Product

    def get_Category(self,obj):
        return obj.get_Category_display()

# Generated by Django 2.0.3 on 2018-04-29 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OrdersApp', '0002_auto_20180429_1535'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='Image',
            field=models.ImageField(default='products_images/no-img.jpg', upload_to='products_images'),
        ),
    ]

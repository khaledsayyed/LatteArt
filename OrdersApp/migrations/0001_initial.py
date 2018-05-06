# Generated by Django 2.0.3 on 2018-04-28 13:22

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Description', models.CharField(max_length=300)),
                ('ImageID', models.ImageField(upload_to='Branch_images')),
            ],
        ),
        migrations.CreateModel(
            name='CustomerProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('UserName', models.CharField(max_length=100)),
                ('Password', models.CharField(max_length=100)),
                ('Email', models.EmailField(max_length=100, unique=True)),
                ('PhoneNumber', models.CharField(max_length=8, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '--------'. Up to 8 digits allowed.", regex='^\\d{9,8}$')])),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('UserName', models.CharField(max_length=100)),
                ('Password', models.CharField(max_length=100)),
                ('Email', models.EmailField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PickupTime', models.DateTimeField(auto_now=True)),
                ('PaymentMethod', models.CharField(choices=[('Credit Card', 'Credit Card'), ('From Wallet', 'From Wallet'), ('On Pickup', 'On Pickup')], default=2, max_length=1)),
                ('TotalPrice', models.IntegerField()),
                ('Description', models.CharField(max_length=300)),
                ('OrderStatus', models.IntegerField(choices=[(0, 'Received'), (1, 'Cooking'), (2, 'Ready')], default=0)),
                ('Branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='OrdersApp.Branch')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Quantity', models.IntegerField()),
                ('Order', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='OrdersApp.Order')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Category', models.CharField(choices=[('coffee', 'Coffee product'), ('beans', 'Coffee Beans'), ('food', 'Food product')], max_length=10)),
                ('Name', models.CharField(max_length=100)),
                ('Price', models.IntegerField()),
                ('Description', models.CharField(max_length=300)),
            ],
        ),
        migrations.AddField(
            model_name='orderitem',
            name='Product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='OrdersApp.Product'),
        ),
    ]

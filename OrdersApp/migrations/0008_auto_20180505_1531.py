# Generated by Django 2.0.3 on 2018-05-05 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OrdersApp', '0007_auto_20180505_1516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='PickupTime',
            field=models.DateTimeField(),
        ),
    ]

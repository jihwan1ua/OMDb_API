# Generated by Django 4.2.3 on 2023-07-30 21:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_user_firstname_remove_user_lastname_user_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='userID',
            new_name='id',
        ),
    ]

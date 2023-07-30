# Generated by Django 4.2.3 on 2023-07-30 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Title', models.CharField(max_length=100)),
                ('Year', models.CharField(blank=True, max_length=4, null=True)),
                ('Rated', models.CharField(blank=True, max_length=20, null=True)),
                ('Released', models.CharField(blank=True, max_length=20, null=True)),
                ('Runtime', models.CharField(blank=True, max_length=20, null=True)),
                ('Genre', models.CharField(blank=True, max_length=100, null=True)),
                ('Director', models.CharField(blank=True, max_length=100, null=True)),
                ('Writer', models.CharField(blank=True, max_length=100, null=True)),
                ('Actors', models.CharField(blank=True, max_length=200, null=True)),
                ('Plot', models.TextField(blank=True, null=True)),
                ('Language', models.CharField(blank=True, max_length=100, null=True)),
                ('Country', models.CharField(blank=True, max_length=50, null=True)),
                ('Awards', models.TextField(blank=True, null=True)),
                ('Poster', models.TextField(blank=True, null=True)),
                ('Ratings', models.TextField(blank=True, null=True)),
                ('Metascore', models.CharField(blank=True, max_length=10, null=True)),
                ('imdbRating', models.CharField(blank=True, max_length=10, null=True)),
                ('imdbVotes', models.CharField(blank=True, max_length=20, null=True)),
                ('imdbID', models.CharField(blank=True, max_length=20, null=True)),
                ('Type', models.CharField(blank=True, max_length=50, null=True)),
                ('DVD', models.CharField(blank=True, max_length=20, null=True)),
                ('BoxOffice', models.CharField(blank=True, max_length=50, null=True)),
                ('Production', models.CharField(blank=True, max_length=100, null=True)),
                ('Website', models.TextField(blank=True, null=True)),
                ('Response', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('userID', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=50)),
                ('lastName', models.CharField(blank=True, max_length=50, null=True)),
                ('userName', models.CharField(max_length=50, null=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('createdOn', models.DateTimeField(editable=False)),
                ('lastModified', models.DateTimeField()),
            ],
        ),
    ]

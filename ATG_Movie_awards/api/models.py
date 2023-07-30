from django.db import models
from django.utils import timezone

# Create your models here.

class User(models.Model):
    # User requirements. FirstName, LastName, UserName,  
    userID = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=50, null=True)
    lastName = models.CharField(max_length=50, null=True)
    userName = models.CharField(max_length=50, null=True)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    # TODO: check the lastModified to let user know the password should be updated, because for fun.
    createdOn = models.DateTimeField(editable=False)
    lastModified = models.DateTimeField();

    # def save(self, *args, **kwargs):
    #     # on save, will update the createdOn. Check if new User record
    #     if not self.id:
    #         self.createdOn = timezone.now();
    #     self.modified = timezone.now();
    #     return super(User, self).save(*args, **kwargs)

    def __str__(self):
        return self.firstName + " " + self.lastName

class Movie(models.Model):
    # OMDb API returns Json with string values. Will be storing them into charfield
    id = models.AutoField(primary_key=True)
    # user = models.ForeignKey(User, on_delete = models.CASCADE)
    Title = models.CharField(max_length=100, null=False, blank=False)
    Year = models.CharField(max_length=4, null=True, blank=True)
    Rated = models.CharField(max_length=20, null=True, blank=True)
    Released = models.CharField(max_length=20, null=True, blank=True)
    Runtime = models.CharField(max_length=20, null=True, blank=True)
    Genre = models.CharField(max_length=100, null=True, blank=True)
    Director = models.CharField(max_length=100, null=True, blank=True)
    Writer = models.CharField(max_length=100, null=True, blank=True)
    # Should Actors column be TextField?
    Actors = models.CharField(max_length=200, null=True, blank=True)
    Plot = models.TextField(null=True, blank=True)
    Language = models.CharField(max_length=100, null=True, blank=True)
    Country = models.CharField(max_length=50, null=True, blank=True)
    Awards = models.TextField(null=True, blank=True)
    # Poster is the image link
    Poster = models.TextField(null=True, blank=True)
    # Dictionary
    Ratings = models.TextField(null=True, blank=True)
    Metascore = models.CharField(max_length=10, null=True, blank=True)
    imdbRating = models.CharField(max_length=10, null=True, blank=True)
    imdbVotes = models.CharField(max_length=20, null=True, blank=True)
    imdbID = models.CharField(max_length=20, null=True, blank=True)
    Type = models.CharField(max_length=50, null=True, blank=True)
    DVD = models.CharField(max_length=20, null=True, blank=True)
    BoxOffice = models.CharField(max_length=50, null=True, blank=True)
    Production = models.CharField(max_length=100, null=True, blank=True)
    Website = models.TextField(null=True, blank=True)
    Response = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.title
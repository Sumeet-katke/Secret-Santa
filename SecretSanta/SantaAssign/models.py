from django.db import models

# Create your models here.
class Santas(models.Model):
    id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length= 20, null=True)

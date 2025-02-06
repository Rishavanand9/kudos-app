from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class Organization(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, null=True, blank=True)
    kudos_remaining = models.IntegerField(default=3)  

    groups = models.ManyToManyField(Group, related_name="customer_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customer_permissions",blank=True)

    def __str__(self):
        return self.username

class Kudo(models.Model):
    sender = models.ForeignKey(CustomUser, related_name="sent_kudos", on_delete=models.CASCADE)
    receiver = models.ForeignKey(CustomUser, related_name="received_kudos", on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender} → {self.receiver}"

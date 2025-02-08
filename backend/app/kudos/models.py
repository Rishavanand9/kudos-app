from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class Organization(models.Model):
    """Represents an organization a user belongs to."""
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Organizations"
        ordering = ["name"]


class CustomUser(AbstractUser):
    """Extends Django's default User model with organization and kudos-related fields."""
    organization = models.ForeignKey(
        Organization, 
        on_delete=models.SET_NULL,  # Prevent user deletion if an organization is removed
        null=True, 
        blank=True
    )
    kudos_remaining = models.PositiveIntegerField(default=3)  

    # Override default related_name to avoid clashes with built-in Django models
    groups = models.ManyToManyField(Group, related_name="customuser_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_permissions", blank=True)

    def __str__(self):
        return f"{self.username} ({self.organization.name if self.organization else 'No Organization'})"

    class Meta:
        verbose_name_plural = "Users"
        ordering = ["username"]


class Kudo(models.Model):
    """Represents a Kudo message sent from one user to another."""
    sender = models.ForeignKey(
        CustomUser, 
        related_name="sent_kudos", 
        on_delete=models.CASCADE
    )
    receiver = models.ForeignKey(
        CustomUser, 
        related_name="received_kudos", 
        on_delete=models.CASCADE
    )
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Kudo from {self.sender} to {self.receiver}: {self.message[:30]}..."

    class Meta:
        verbose_name_plural = "Kudos"
        ordering = ["-created_at"]

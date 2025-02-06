from django.core.management.base import BaseCommand

from backend.app.kudos.models import CustomUser

class Command(BaseCommand):
    help = 'Reset kudos to 3 for all users'

    def handle(self, *args, **kwargs):
        CustomUser.objects.update(kudos_remaining=3)
        self.stdout.write(self.style.SUCCESS('Successfully reset kudos for all users'))

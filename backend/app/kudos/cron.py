from django_cron import CronJobBase, Schedule
from backend.app.kudos.models import CustomUser

class ResetKudosCronJob(CronJobBase):
    RUN_EVERY_MINS = 10080  # Run once per week

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = "kudos.reset_kudos"

    def do(self):
        CustomUser.objects.update(kudos_remaining=3)
        print("Successfully reset kudos for all users")

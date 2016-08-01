from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver

from rest_framework.authtoken.models import Token

@receiver(post_save, sender=User)
def init_new_user(sender, instance, signal, created, **kwargs):
    """
    Create an authentication token for new users
    """
    if created:
        print('Token created')
        Token.objects.create(user=instance)

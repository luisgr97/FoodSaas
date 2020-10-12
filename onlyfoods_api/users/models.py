"""Secction To Imports and Froms"""

from django.db import models  # Para la Bd
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.core.validators import RegexValidator
import datetime

""""Section to Models in the pakage"""
class UserManager(BaseUserManager):
    """This class allow manage the class user in the model auth of django"""

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a new user"""
        if not email:
            raise ValueError('Users must have a email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None):
        """Create and save a new user"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


"""Validate a field phone_number"""
phone_regex = RegexValidator(
    regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")


class TypeCustomUser(models.Model):
    """Type Custom user model that supports using email instead of username"""

    typeuser = models.CharField(max_length=255,blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    """Fields to determinate if a user es active o inactive"""
    is_active = models.BooleanField(default=True)
    

    """Class meta to define atributes tables"""
    class Meta:
        db_table = 'typecustomuser'
        verbose_name = 'typecustomuser'
        verbose_name_plural = 'typecustomusers'

    """functions by identify the model"""
    def __str__(self):
        return str(self.id)



class CustomUser(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""

    username = None
    email = models.EmailField(
        max_length=255, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    document_id = models.CharField(max_length=255, unique=True)
    profile_picture = models.CharField(max_length=2000,
                                       blank=True,
                                       null=True,
                                       default='https://res.cloudinary.com/sigeedu/image/upload/v1594776164/sigedu/1528904524_boy_1_wehjsw.svg')
    phone_number = models.CharField(validators=[
                                    phone_regex],
                                    max_length=17,
                                    blank=True,
                                    unique=True,
                                    null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    date_of_birth = models.DateField(
        default=datetime.date.today, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    typeuser = models.ForeignKey(TypeCustomUser,on_delete=models.PROTECT, related_name="typeuser")

    """Fields to determinate if a user es active o inactive"""
    is_active = models.BooleanField(default=True)
    """Fields by select a superuser and staffuser"""
    is_staff = models.BooleanField(default=False)

    """Fields requires"""
    USERNAME_FIELD = 'email'

    """"Add a user manager it model"""
    objects = UserManager()

    """Class meta to define atributes tables"""
    class Meta:
        db_table = 'customuser'
        verbose_name = 'customuser'
        verbose_name_plural = 'customusers'

    """functions by identify the model"""

    def __str__(self):
        return str(self.document_id)




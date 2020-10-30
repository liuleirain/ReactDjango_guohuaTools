from django.db import models
from django.contrib.auth.models import User


class Computer(models.Model):
    serial_number = models.CharField(max_length=50, unique=True, verbose_name='序列号')
    hostname = models.CharField(max_length=100, unique=True, verbose_name='主机名')
    model = models.CharField(max_length=100, verbose_name='型号')
    owner = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE,verbose_name='管理者')
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.serial_number

    class Meta:
        verbose_name = verbose_name_plural = '电脑'
    

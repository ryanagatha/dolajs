from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


# Create your models here.


class Client(models.Model):
  name = models.CharField(_('Nama Klien'), max_length=255, db_index=True)
  address = models.CharField(_('Alamat'), max_length=255)
  phone = models.CharField(_('No Telepon'),max_length=20, blank=True)
  email = models.EmailField(_('Email'),blank=True)
  created_by = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

class Project(models.Model):
  created_by = models.ForeignKey(User, on_delete=models.CASCADE)
  client = models.ForeignKey(Client, null=True, on_delete=models.RESTRICT)
  name = models.CharField(_('Nama Proyek'),max_length=255, db_index=True)
  project_address = models.CharField(_('Alamat Proyek'),max_length=255)
  is_active = models.BooleanField(default=True)
  start_date = models.DateField(_('Tanngal Mulai'),blank=True)
  description = models.TextField(_('Deskripsi'),blank=True)

  def __str__(self):
    return self.name

class ExpenseCat(models.Model):
  name = models.CharField(_('Pos Biaya'),max_length=50, db_index=True, unique=True)
  description = models.TextField(blank=True)

  def __str__(self):
    return self.name

class Unit(models.Model):
  name = models.CharField('Nama Satuan',max_length=50, db_index=True, unique=True)
  abbreviation = models.CharField(max_length=10, db_index=True, blank=True)

  def __str__(self):
    return self.name
  
class WorkCat(models.Model):
  name = models.CharField(_('Kategori'), max_length=255, unique=True)

  def __str__(self):
    return self.name

  class Meta:
    verbose_name = _('Kategori')
    verbose_name_plural= _('Kategori')
  
class ExpenseItem(models.Model):
  name = models.CharField(_('Item Biaya'), max_length=255)
  expense_cat = models.ForeignKey(ExpenseCat, on_delete=models.RESTRICT)
  city = models.CharField(max_length=255, blank=True)
  unit = models.ForeignKey(Unit, on_delete=models.RESTRICT)
  unit_expense = models.DecimalField(max_digits=20, decimal_places=0)
  created_by = models.ForeignKey(User, on_delete = models.CASCADE)

  def __str__ (self):
    return self.name + ' ' + self.expense_cat.name + ' ' + self.city

class WorkItem(models.Model):
  name = models.CharField(_('Nama Pekerjaan'), max_length=255, db_index=True)
  category = models.ManyToManyField(WorkCat)
  created_by = models.ForeignKey(User, on_delete= models.CASCADE)

  def __str__ (self):
    return self.name

class WorkUnitPrice(models.Model):
  work_item = models.ForeignKey(WorkItem,on_delete=models.RESTRICT)
  expense_item = models.ForeignKey(ExpenseItem, on_delete=models.RESTRICT)
  unit = models.ForeignKey(Unit, on_delete=models.RESTRICT)
  unit_price = models.DecimalField(max_digits=20, decimal_places=0)
  created_at = models.DateTimeField(auto_now_add=True, editable=False)
  updated_at = models.DateTimeField(auto_now=True)
  created_by = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.work_item.name + ' ' + self.cost_acc.name + ' ' + self.unit.name

class Rab(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  name = models.CharField('Nama RAB', max_length=255, default='RAB Total')
  phase = models.CharField(max_length=255, blank=True)

  def __str__ (self):
    return self.project.name + ' ' + self.name + ' ' + self.phase

class VolAndTime(models.Model):
  rab = models.ForeignKey(Rab, on_delete=models.CASCADE)
  work_item = models.ForeignKey(WorkItem, on_delete=models.RESTRICT)
  volume = models.DecimalField(max_digits=10, decimal_places=2)
  start_date = models.DateTimeField(blank=True, null=True)
  duration = models.IntegerField(blank=True, null=True)

  def __str__ (self):
    return self.rab.name + ' ' + self.work_item.name
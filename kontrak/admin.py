from django.contrib import admin
from .models import Client, Project, CostAcc, Unit, Category, WorkItem, PriceAndBudget, Rab, VolAndTime
# Register your models here.
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(CostAcc)
admin.site.register(Unit)
admin.site.register(Category)
admin.site.register(WorkItem)
admin.site.register(PriceAndBudget)
admin.site.register(Rab)
admin.site.register(VolAndTime)


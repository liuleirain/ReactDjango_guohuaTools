from django.contrib import admin
from .models import Computer
from import_export.admin import ImportExportModelAdmin


@admin.register(Computer)
class ComputerAdmin(ImportExportModelAdmin):
    list_display = ('serial_number', 'hostname', 'model','owner')
    list_display_links = ('serial_number', 'hostname')
    list_filter = ('model','owner')
    search_fields = ('serial_number', 'hostname', 'model', 'owner__username')


admin.site.site_header = '管理后台'
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from tastypie.api import Api
from todos.api import TodoResource


admin.autodiscover()

v1_api = Api(api_name='v1')
v1_api.register(TodoResource())


urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^about/$', TemplateView.as_view(template_name='about.html'),
        name='about'),
    (r'^api/', include(v1_api.urls)),
    (r'^$', 'todos.views.index'),
)

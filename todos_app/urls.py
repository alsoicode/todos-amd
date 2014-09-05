from django.conf.urls import patterns, include, url
from django.contrib import admin

from tastypie.api import Api
from todos.api import TodoResource


admin.autodiscover()

v1_api = Api(api_name='v1')
v1_api.register(TodoResource())


urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    (r'^api/', include(v1_api.urls)),
    (r'^$', 'todos.views.index'),
)

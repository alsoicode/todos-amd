define(['backbone', 'jquery', 'views/app', 'views/about'], function(Backbone, $, AppView, AboutView) {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'todos'
        },

        todos: function() {
            this.view = new AppView();
        }
    });

    return Router;
});

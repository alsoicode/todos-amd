define(['backbone', 'routers/router'], function(Backbone, Router) {

    $(document).ready(function($) {
        var router = new Router();

        Backbone.history.start();
    });

});
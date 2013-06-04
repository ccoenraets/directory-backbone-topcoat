app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "home",
        "employees/:id":            "employeeDetails",
        "employees/:id/reports":    "reports",
        "employees/:id/map":        "map"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },

    employeeDetails: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
            }
        });
    },

    reports: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ReportsView({model: data}).render().$el);
            }
        });
    },

    map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    }

});
app.models.Employee = Backbone.Model.extend({

    initialize:function () {
        this.reports = new app.models.ReportsCollection();
        this.reports.parent = this;
    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.employee.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.EmployeeCollection = Backbone.Collection.extend({

    model: app.models.Employee,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.employee.findByName(options.data.name).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.ReportsCollection = Backbone.Collection.extend({

    model: app.models.Employee,

    sync: function(method, model, options) {
        if (method === "read") {
            console.log("find by manager");
            app.adapters.employee.findByManager(this.parent.id).done(function (data) {
                options.success(data);
            });
        }
    }

});
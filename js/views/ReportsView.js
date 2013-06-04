app.views.ReportsView = Backbone.View.extend({

    initialize:function () {
        this.store = this.options.store;
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.model.reports.fetch();
        $(".scroller", this.el).html(new app.views.EmployeeListView({model: this.model.reports}).render().el);
        return this;
    },

    events: {
        "click .back-button": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});

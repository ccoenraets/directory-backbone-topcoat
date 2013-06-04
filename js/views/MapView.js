app.views.MapView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());

        setTimeout(function() {
            // create a map in the "map" div, set the view to a given place and zoom
            var map = L.map('map', {zoomControl:false}).setView([42.35996, -71.05579], 16);
            // add an OpenStreetMap tile layer
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // add a marker in the given location, attach some popup content to it and open the popup
            L.marker([42.35996, -71.05579]).addTo(map);
        });

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

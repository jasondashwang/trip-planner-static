function initialize_gmaps() {
        // initialize new google maps LatLng object
        var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
        // style: https://snazzymaps.com/style/63022/blue-green
        var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.land_parcel","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#69be00"},{"lightness":"0"},{"saturation":"0"},{"weight":"1.82"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"},{"weight":"3.59"},{"gamma":"0.36"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#006a4d"},{"weight":"0.14"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"geometry","stylers":[{"color":"#912e2e"},{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#00b2dd"},{"weight":"0.31"},{"lightness":"0"}]}];
        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Travel plan"});
        // set the map options hash
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };
        // get the maps div's HTML obj
        var map_canvas_obj = document.getElementById('map-canvas');
        // initialize a new Google Map with the options
        var map = new google.maps.Map(map_canvas_obj, mapOptions);
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        // Add the marker to the map
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        // Add the marker to the map by calling setMap()
        marker.setMap(map);
    }

    $(document).ready(function() {
        initialize_gmaps();
    });

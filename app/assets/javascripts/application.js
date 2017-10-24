// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery

//= require_tree .

$(document).ready(function (){

	var myLatLng = new google.maps.LatLng(33.7490, -84.3880)

	function initalize() {
		var mapOptions = {
			center: myLatLng, zoom: 12, scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var image = "https://pbs.twimg.com/profile_images/616772191900663808/cOzd5P8S_400x400.jpg"

		 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image, 
    animation: google.maps.Animation.DROP
  });

		var contentString = '<h2><center>Atlanta</center></h2>' + '<p>Where all your dreams come true</p>'	
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		google.maps.event.addDomListener(marker, 'click', function() { infowindow.open(map, marker);
		});

	}

	google.maps.event.addDomListener(window, 'load', initalize);
});

$(document).ready(function (){

	var myLatLng = new google.maps.LatLng(latitude, longitude);

	function initalize() {
		var mapOptions = {
			center: myLatLng, zoom: 12, scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

	

		 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
   	title: address
  });

		var contentString = '<h2><center>' + address + '</center></h2>' + '<p>Where all your dreams come true</p>'	
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		google.maps.event.addDomListener(marker, 'click', function() { infowindow.open(map, marker);
		});

	}

	google.maps.event.addDomListener(window, 'load', initalize);
});


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

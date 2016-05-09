function initMap() {

	var myLatLng = {
		lat: -3.1342116,
		lng: -59.9805424
	};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		disableDefaultUI: true,
	    zoom: 14
	});
	
	//create Marker
	var marker = new google.maps.Marker({
	  map: map,
	  position: myLatLng,
	  title: 'SIDIA!'
	});
}

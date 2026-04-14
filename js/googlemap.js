// JavaScript Document
geocoder = new GClientGeocoder();	

function initialize(address) {

  if (GBrowserIsCompatible()) {		  

	var map = new GMap2(document.getElementById("map_canvas"));

	if (geocoder) 

		{

			geocoder.getLatLng(address,function(point) {if (!point) {} else{map.clearOverlays();map.setCenter(point, 15);var marker = new GMarker(point,{draggable: false});map.addOverlay(marker);}});

		}

	map.setUIToDefault();

  }

}

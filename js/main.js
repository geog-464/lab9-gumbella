//Rebecca Price 2022//

//initialize function called when the script loads
function initialize(){
    loadMap();
};

//function to create a table with cities and their populations
function loadMap(){
	//create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
	
	var Stamen_Watercolor = L.tileLayer(
		'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
		{
			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			subdomains: 'abcd',
			ext: 'jpg'
		}
		);

	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"Stamen": Stamen_Watercolor
		//,...
	};
	// create the map
	var mymap = L.map('mapdiv', {
		center: [45.50, -73.58]
		,zoom: 5
		,maxZoom: 18
		,minZoom: 1
		,layers: Stamen_Watercolor
		,zoomControl: true
		,doubleClickZoom: true
		,setView: true

	});


		
	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData);
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	//add it to the map
	lcontrol.addTo(mymap);
    
};

//call the initialize function when the window has loaded
window.onload = initialize();
var GeoLocCenter = {lat:41.396482, lng: 2.193890};
var GeoLocCenterServerLocation = {lat:GeoLocLatitude, lng: GeoLocLongtitude};
//var myLocationMarker = new google.maps.LatLng(41.396482, 2.193890);
var mapOptionsGeoLoc = {
  zoom: 16,
  center:GeoLocCenter,
  styles:styles
}

function mapGeoLocMode(){
  if(geoLocToggleOnMap){
    console.log("CenterSetToGeoLocation");
    map = new google.maps.Map(document.getElementById('map'), mapOptionsGeoLoc);

    // place the marker showing your location
    GeoLocMarker = new google.maps.Marker({
      position : GeoLocCenter,
      map : map,
      title : 'You are here.'
    });

    GeoLocMarkerServerLocation = new google.maps.Marker({
      position : GeoLocCenterServerLocation,
      map : map,
      title : 'You are here.'
    });
    console.log("marker placed");
  }
  else{
    console.log("CenterSetToNormal");
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
}

function updateGeoLocMarker(marker){
    //update coordinates of marker
    var latlng = new google.maps.LatLng(GeoLocCenter.lat, GeoLocCenter.lng);
    marker.setPosition(latlng);
    //update map center
    map.setCenter(latlng);
  
}

function checkDistance(){
  distanceServerEsp = calcCrow(GeoLocLatitude,GeoLocLongtitude,ServerGeoLocLatitude,ServerGeoLocLongtitude);
  console.log("distance: " +distanceServerEsp );
  console.log("Lat: " + GeoLocLatitude);
  console.log("Lon: " + GeoLocLongtitude);
  console.log("SLat: " + ServerGeoLocLatitude);
  console.log("SLon: " + ServerGeoLocLongtitude);
}


socket.on('coordinates',function(msg){

  //console.log(e);
  var splitSocketMsg = msg.split(" ");
  console.log(splitSocketMsg);
  GeoLocLatitude = splitSocketMsg[2];
  GeoLocLongtitude = splitSocketMsg[5];
  if(GeoLocLatitude != 0){
    GeoLocCenter.lat = parseFloat(GeoLocLatitude);
  };
  if(GeoLocLatitude != 0){
    GeoLocCenter.lng = parseFloat(GeoLocLongtitude);
  };
  updateGeoLocMarker(GeoLocMarker);
  checkDistance();
});

// Get Gelocation from HTML5 API
function getBrowserGeoLoc(){
    getLocation();
    showPosition();
  }
  
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        var x = document.getElementById("browserGeoLoc");
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  


function showPosition(position) {
    var x = document.getElementById("browserGeoLoc");
    ServerGeoLocLatitude = position.coords.latitude;
    ServerGeoLocLongtitude = position.coords.longitude;
    // x.innerHTML = "Latitude: " + GeoLocLatitude + 
    // "<br>Longitude: " + GeoLocLongtitude; 
    
  }
  
  function mapVal(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  
  //Function to calculate the distance between two geolocation points
  function calcCrow(lat1, lon1, lat2, lon2) 
  {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c * 1000; // Times 1000 to convert to meters
    var x = document.getElementById("browserGeoLoc");
    x.innerHTML = d;
    sendMapedvalueOverMqtt = mapVal(d,5,1,5,40);
    console.log(sendMapedvalueOverMqtt);
    SocketClicked(String("Hypoxia level: " + sendMapedvalueOverMqtt));
  
    return d;
  }
  
  // Converts numeric degrees to radians
  function toRad(Value) 
  {
      return Value * Math.PI / 180;
  }
  
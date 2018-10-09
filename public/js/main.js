var Lyon = {lat:31.7917, lng: 7.0926};
var mode = new Boolean(false);
var map;
var mapDiv;
var displayDeadZonesToggle = true;
var displayHeatZonesToggle = false;
var displayRadiationZonesToggle = false;
var markersHypoxia = [];
var markersHeat = [];
var markersRadiation = [];
var geoLocToggleOnMap = true;
var mainbody;
var countDownDiv;
var countDownDurationMax = 20;
var countDown = 0;
//EspGeoLoc
var GeoLocLatitude = 0;
var GeoLocLongtitude = 0;
//Server
var ServerGeoLocLatitude = 0;
var ServerGeoLocLongtitude = 0;
var distanceServerEsp = 0;
var mapOptions = {
    zoom: 3,
    center:Lyon,
    styles:styles
}
// Pollution range 10 - 42
var pollutionLow = 20;
var pollutionMedium = 25;
var pollutionHigh = 35;

function initMap() {
    mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, mapOptions);
}



window.onload = function(){
  mainbody = document.getElementById("MainBody");
  countDownDiv = document.getElementById("CountDown");
  console.log("ParsingJson");
  JSONData(hotspots3vals);
  setInterval(() => {
      if(countDown > 0){
        countDown--;
        countDownDiv.innerHTML = countDown;
        if(countDown === 0){
          countDownFinished();
        }
      }
    }, 1000);
}

// $(document).ready(function() {
//   document.getElementById("buttonRadiationGeoLoc").addEventListener("touchend", function() {   
//   });
//   console.log("Added Listeners");
//   getBrowserGeoLoc();
// });

function JSONData(data){
  var positionName;
  var lon;
  var lat;
  var i;
  var pollution;
  console.log(data[0]);
  // navigate the js object to get location names and coordinates.
  for(i=0; i<data[0].hypoxia.length; i++ ){   
      //console.log("name = " + data[0].markers[i].name + "  lat  " + data[0].markers[i].location );
      positionName = data[0].hypoxia[i].name;
      pollution = data[0].hypoxia[i].pollution;
      name = data[0].hypoxia[i].name;
      lat = data[0].hypoxia[i].location[0];
      lon = data[0].hypoxia[i].location[1]
      var myLatLng = {lat: lat, lng: lon};
      displayDeadZones(positionName,pollution,myLatLng,i);
  }

  for(i=0; i<data[0].heatspots.length; i++ ){   
    //console.log("name = " + data[0].markers[i].name + "  lat  " + data[0].markers[i].location );
    positionName = data[0].heatspots[i].name;
    pollution = data[0].heatspots[i].pollution;
    lat = data[0].heatspots[i].location[0];
    lon = data[0].heatspots[i].location[1]
    var myLatLng = {lat: lat, lng: lon};
    displayHeatZones(positionName,pollution,myLatLng,i);
  }

  for(i=0; i<data[0].radiation.length; i++ ){   
    //console.log("name = " + data[0].markers[i].name + "  lat  " + data[0].markers[i].location );
    positionName = data[0].radiation[i].name;
    pollution = data[0].radiation[i].pollution;
    lat = data[0].radiation[i].location[0];
    lon = data[0].radiation[i].location[1]
    var myLatLng = {lat: lat, lng: lon};
    displayRadiationZones(positionName,pollution,myLatLng,i);
  }
  
}

function displayDeadZones(positionName,pollution, myLatLng,i){
  if(pollution[0] === 10){
      
    var icon = {
            url: "../images/Circle10.png", // url
            scaledSize: new google.maps.Size(pollution*1.6, pollution*1.6), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(35, 35) // anchor
          };

          var markerHypoxia = new google.maps.Marker({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          position: myLatLng,
          radius: pollution*4, 
          icon: icon,
          map: map,
        });
        markersHypoxia.push(markerHypoxia);
        var infowindow = new google.maps.InfoWindow({
          //content: String("Hypoxia level: " + pollution)
          content: String(name)
        });
        markerHypoxia.addListener('click',function(){
          //console.log("clicked");
          SocketClicked(String("Hypoxia level: " + pollutionLow));
          startCountdown();
        });
        google.maps.event.addListener(markerHypoxia, "mouseover", function() {
          //console.log("Hovered " + positionName);
          infowindow.open(map, markerHypoxia);
        });
        google.maps.event.addListener(markerHypoxia, "mouseout", function() {
          //console.log("Hovered-out " + i);
          infowindow.close(map, markerHypoxia);
        });   

        google.maps.event.addDomListener(markerHypoxia,'touch', function(){
          //SocketClicked(String("Hypoxia level: " + pollution));
          window.alert('Map was clicked!');
          SocketClicked(String("Hypoxia level: " + pollutionLow));
          startCountdown();
        });
  }

  if(pollution[0] === 25){
    
      var icon = {
        url: "../images/Circle25.png", // url
        scaledSize: new google.maps.Size(pollution*1.6, pollution*1.6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(35, 35) // anchor
      };

      var markerHypoxia = new google.maps.Marker({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      position: myLatLng,
      radius: pollution*4, 
      icon: icon,
      map: map,
    });
    markersHypoxia.push(markerHypoxia);
    var infowindow = new google.maps.InfoWindow({
      //content: String("Hypoxia level: " + pollution)
      content: String(name)
    });
    markerHypoxia.addListener('click',function(){
      //console.log("clicked");
      SocketClicked(String("Hypoxia level: " + pollutionMedium));
      startCountdown();
    });
    google.maps.event.addListener(markerHypoxia, "mouseover", function() {
      //console.log("Hovered " + positionName);
      infowindow.open(map, markerHypoxia);
    });
    google.maps.event.addListener(markerHypoxia, "mouseout", function() {
      //console.log("Hovered-out " + i);
      infowindow.close(map, markerHypoxia);
    });   

    google.maps.event.addDomListener(markerHypoxia,'touch', function(){
      //SocketClicked(String("Hypoxia level: " + pollution));
      window.alert('Map was clicked!');
      SocketClicked(String("Hypoxia level: " + pollutionMedium));
      startCountdown();
    });
  }

  if(pollution[0] === 40){
    var icon = {
        url: "../images/Circle40.png", // url
        scaledSize: new google.maps.Size(pollution*1.6, pollution*1.6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(35, 35) // anchor
      };

      var markerHypoxia = new google.maps.Marker({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      position: myLatLng,
      radius: pollution*4, 
      icon: icon,
      map: map,
    });
    markersHypoxia.push(markerHypoxia);
    var infowindow = new google.maps.InfoWindow({
      //content: String("Hypoxia level: " + pollution)
      content: String(name)
    });
    markerHypoxia.addListener('click',function(){
      //console.log("clicked");
      SocketClicked(String("Hypoxia level: " + pollutionHigh));
      startCountdown();
    });
    google.maps.event.addListener(markerHypoxia, "mouseover", function() {
      //console.log("Hovered " + positionName);
      infowindow.open(map, markerHypoxia);
    });
    google.maps.event.addListener(markerHypoxia, "mouseout", function() {
      //console.log("Hovered-out " + i);
      infowindow.close(map, markerHypoxia);
    });   

    google.maps.event.addDomListener(markerHypoxia,'touch', function(){
      //SocketClicked(String("Hypoxia level: " + pollution));
      window.alert('Map was clicked!');
      SocketClicked(String("Hypoxia level: " + pollutionHigh));
      startCountdown();
    });
  }
       
     
      // markerHypoxia.addListener('touch',function(){
      //   //console.log("clicked");
      //   window.alert('Map was clicked!');
      //   SocketClicked(String("Hypoxia level: " + pollution));
      // });
}

function displayHeatZones(positionName,pollution, myLatLng,i){
  var icon = {
    url: "../images/Circle.png", // url
    scaledSize: new google.maps.Size(pollution*1.6, pollution*1.6), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  var markerHeat = new google.maps.Marker({
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  position: myLatLng,
  radius: pollution*4, 
  icon: icon,
  map: map,
  });
  markersHeat.push(markerHeat);
  var infowindow = new google.maps.InfoWindow({
    content: String("Heat level: " + pollution)
  });
  markerHeat.addListener('click',function(){
    console.log("clicked");
    SocketClicked(String("Heat level: " + pollution));
  });
  google.maps.event.addListener(markerHeat, "mouseover", function() {
    console.log("Hovered " + positionName);
    infowindow.open(map, markerHeat);
  });
  google.maps.event.addListener(markerHeat, "mouseout", function() {
    console.log("Hovered-out " + i);
    infowindow.close(map, markerHeat);
  });   
  clearMarkers(markersHeat);
}

function displayRadiationZones(positionName,pollution, myLatLng,i){
  var icon = {
    url: "../images/Circle3.png", // url
    scaledSize: new google.maps.Size(pollution*1.6, pollution*1.6), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  var markerRadiation = new google.maps.Marker({
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  position: myLatLng,
  radius: pollution*4, 
  icon: icon,
  map: map,
  });
  markersRadiation.push(markerRadiation);
  var infowindow = new google.maps.InfoWindow({
    content: String("Radioactivity level: " + pollution)
  });
  markerRadiation.addListener('click',function(){
    console.log("clicked");
    SocketClicked(String("Radioactivity level: " + pollution));
  });
  google.maps.event.addListener(markerRadiation, "mouseover", function() {
    console.log("Hovered " + positionName);
    infowindow.open(map, markerRadiation);
  });
  google.maps.event.addListener(markerRadiation, "mouseout", function() {
    console.log("Hovered-out " + i);
    infowindow.close(map, markerRadiation);
  });   
  clearMarkers(markersRadiation);
}

function setMapOnAll(map,marker) {
  for (var i = 0; i < marker.length; i++) {
    marker[i].setMap(map);
  }
}

function showMarkers(marker) {
  setMapOnAll(map,marker);
}

function clearMarkers(marker) {
  setMapOnAll(null,marker);
}

function SocketClicked(msg){

  socket.emit('message', msg);

  if(msg === 'Show/Hide Hypoxia'){
    displayDeadZonesToggle =! displayDeadZonesToggle;
    if(displayDeadZonesToggle === false){clearMarkers(markersHypoxia);console.log("Hiding Hypoxia Markers");}
    if(displayDeadZonesToggle === true){showMarkers(markersHypoxia);console.log("Displaying Hypoxia Markers");}
  }

  if(msg === 'Show/Hide Radiation'){
    displayHeatZonesToggle =! displayHeatZonesToggle;
    if(displayHeatZonesToggle === false){clearMarkers(markersRadiation);console.log("Hiding Radiation Markers");}
    if(displayHeatZonesToggle === true){showMarkers(markersRadiation);console.log("Displaying Radiation Markers");}
  }

  if(msg === 'Show/Hide Heatmap'){
    displayRadiationZonesToggle =! displayRadiationZonesToggle;
    if(displayRadiationZonesToggle === false){clearMarkers(markersHeat);console.log("Hiding Heat Markers");}
    if(displayRadiationZonesToggle === true){showMarkers(markersHeat);console.log("Displaying Heat Markers");}
  }

  if(msg === 'Show/Hide Settings'){
    // currentDisplay = document.getElementById("HiddenSettings").style.display;
    // console.log(currentDisplay);
    // if(currentDisplay != "block"){
    //   document.getElementById("HiddenSettings").style.display = "block";
    // } else {
    //     document.getElementById("HiddenSettings").style.display = "none";
    // }
    if(mainbody.className != "Extended"){
      mainbody.className = "Extended";
    }else{
      mainbody.className = "";
    }
  }

  if(msg === 'SendServoCalibration'){
    var servoPos = document.getElementById("servoPosition").value;
    if(servoPos < 0 || servoPos > 180){
      window.alert("Give a value in the range 0 - 180");
    } else {
      console.log(servoPos); 
      socket.emit('servoCalibration',servoPos);
    } 
  }

  if(msg === 'StoreServoPosition'){
    console.log("here");
    var servoMin = document.getElementById("servoMin").value;
    var servoMax = document.getElementById("servoMax").value;
    var flag1,flag2 = 0;
    if(servoMin < 0 || servoMin > 180){
      window.alert("Give a value in the range 0 - 180");
    } else { flag1 = 1;}
    if(servoMax < 0 || servoMax > 180){
      window.alert("Give a value in the range 0 - 180");
    } else { flag2 = 1;}

    if(flag1 === 1  && flag2 === 1){
      var string1 = servoMin + " " + servoMax;
      socket.emit('storeServo',string1);
    }

     
     
  }


  if(msg === 'Enable/Disable GeoLoc'){
   
    if(geoLocToggleOnMap === false){
      mapGeoLocMode();
      document.getElementById("ButtonTextGeoLoc").innerHTML = "Enable GeoLoc";
      showMarkers(markersHypoxia);console.log("Displaying Hypoxia Markers");
    }
    if(geoLocToggleOnMap === true){
      mapGeoLocMode();
      document.getElementById("ButtonTextGeoLoc").innerHTML = "Disable GeoLoc";
      clearMarkers(markersHeat);console.log("Hiding Heat Markers");
      clearMarkers(markersHypoxia);console.log("Hiding Hypoxia Markers");
    }
    geoLocToggleOnMap =! geoLocToggleOnMap;
    socket.emit('GeoLoc', geoLocToggleOnMap);
  }
}




socket.on('battery',function(msg){
  var batTopercent = mapVal(msg, 3.3, 4.2,0,100);
 batteryLife = "Battery life: " + batTopercent.toFixed(0) + "%";
  //console.log("Battery life: " + batteryLife);
  document.getElementById("batteryLife").innerHTML = batteryLife;
});

function startCountdown(){
  countDown = countDownDurationMax;
}

function countDownFinished(){
   SocketClicked(String("Hypoxia level: " + 10));
}
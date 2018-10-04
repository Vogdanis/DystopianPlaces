var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mqtt = require('mqtt');
var os = require('os');
var port = 3000;
var geoLocToggle = false;
var lat = 0;
var lon = 0; 
var nodeIP = 0;



var networkInterfaces = os.networkInterfaces( );
//console.log( networkInterfaces );
nodeIP = networkInterfaces.en2[1].address;
console.log("Server IP address = " + nodeIP );

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


http.listen(port, function(){
  console.log('listening on *: ' + port);
});


///////// Socket IO //////////
//////////////////////////////


io.on('connection', function(socket){
  //console.log('a user connected');
  socket.on('message', function(msg){
    // Get Hypoxia or Heat message split the value and send it over mqtt
    console.log("message:" + msg);
    var splitMsg = msg.split(" ");
    // console.log(splitMsg[0]);
    // console.log(splitMsg[2]);
    client.publish(splitMsg[0], splitMsg[2]);
    if(msg === "Enable/Disable GeoLoc"){
      geoLocToggle =! geoLocToggle;
      if(geoLocToggle === true){
        client.publish("GeoLoc", "1");
        console.log("GeoLocMode Enabled");
      }else{
        client.publish("GeoLoc", "0");
        console.log("Disabling GeoLocMode");
      }
      //console.log(geoLocToggle);
    }
  })

  socket.on('servoCalibration',function(msg){
    console.log("Received servo calibration: " + msg);
    client.publish("Calibrate", msg);
  })

  socket.on('storeServo',function(msg){
    var splitMsg = msg.split(" ");
    console.log("Received servo Min: " + splitMsg[0]);
    console.log("Received servo Max: " + splitMsg[1]);
    client.publish("ServoMin", splitMsg[0]);
    client.publish("ServoMax", splitMsg[1]);
  })

}); 



///////// MQTT //////////////
//////////////////////////////


var MQTT_ADDR = "mqtt://" + nodeIP;
var MQTT_PORT = 1883;
var MQTT_TOPIC = "hotspots";

var client  = mqtt.connect(MQTT_ADDR,{
  clean: false,
  clientId: 'NodeJSmqtt', 
  protocolId: 'MQIsdp', 
  protocolVersion: 3, 
  connectTimeout:1000, 
  debug:true
});

client.on('connect', function () {
  client.subscribe("hotspots");
  client.subscribe("Coordinates");
  client.subscribe("CoordinatesLat");
  client.subscribe("CoordinatesLon");
  client.subscribe("GeoLocState");
  client.subscribe("debug");
  client.subscribe("Battery");
  client.subscribe("reset");
  client.publish(MQTT_TOPIC, 'Node connected');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log("Received from mqtt " + message.toString());
  //client.end();
  if(topic === "Coordinates"){
    // console.log("ParsingCoordinates");
    // cordsToStr = message.toString();
    // cords = cordsToStr.split(" ");
    //  console.log(cords);
    // console.log("Latitude = " +  cords[1] + " Longtitude = " +  cords[4]);
    // console.log("Sending Cords with socket");
    // io.emit('message',cordsToStr);
  }

  if(topic === "Battery"){
    batLife = message.toString();
    io.emit('battery',batLife);
  }

  if(topic === "CoordinatesLat"){
    //console.log("ParsingCoordinatesLat");
    lat = message.toString();
    io.emit('message',lat);
  }
  if(topic === "CoordinatesLon"){
    //console.log("ParsingCoordinatesLon");
    lon = message.toString();
    io.emit('message',lon);
    sendCordsToClient();
  }

  if(topic === "GeoLocState"){
    //console.log("CheckingGeoLocState");
    if(geoLocToggle === false){
      console.log("GeoLoc Deactivated");
      client.publish("GeoLoc", "0");
    }
    if(geoLocToggle === true){
      console.log("Getting GeoLoc");
      client.publish("GeoLoc", "1");
    }
  }
});

client.on('error', function(){
  console.log("ERROR")
  //client.end()
})



function sendCordsToClient(){
  if(lat != 0 && lon != 0){
    var cords = "Latitude = " +  lat + " Longtitude = " +  lon;
    io.emit('coordinates',cords);
  }
}



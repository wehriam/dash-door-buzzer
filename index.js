#!/usr/local/bin/node

var dash_button = require('node-dash-button');
var config = require("./config");
var twilio = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_ACCOUNT_AUTH_TOKEN);

console.log("Starting Amazon Dash Buzzer Hack.");

var send_message = function(){
  var numbers = config.PHONE_NUMBERS.slice(0);
  var _send = function(){
    if(numbers.length === 0) {
      return;
    }
    var number = numbers.pop();
    return twilio.messages.create({
      body: config.MESSAGE,
      to: number,
      from: config.TWILIO_NUMBER
    }).then(function(message){
      console.log(message);
    }, function(e){
      console.log(e);
    }).then(_send);
  };
  _send();
};

config.MAC_ADDRESSES.forEach(function(mac_address){
  var dash = dash_button(mac_address);
  var last_seen = new Date(new Date().getTime() - 90000);
  dash.on("detected", function (){
    if(new Date() - last_seen > 90000) {
      send_message();
      last_seen = new Date();
    }
  });
});

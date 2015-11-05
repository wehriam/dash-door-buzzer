#!/usr/bin/env node

var dash_button = require('node-dash-button');
var config = require("./config");
var twilio = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_ACCOUNT_AUTH_TOKEN);

console.log("Starting Amazon Dash Buzzer Hack.");

var send_message = function(){
  config.PHONE_NUMBERS.forEach(function(phone_number){
    console.log("Sending to " + phone_number + " from " + config.TWILIO_NUMBER);
    twilio.messages.create({
      body: config.MESSAGE,
      to: phone_number,
      from: config.TWILIO_NUMBER
    }, function(error, message) {
      if(error) {
        throw error;
      }
    });
  });
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

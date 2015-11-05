# Dash Door Buzzer

Amazon Dash Button hack that sends a text message via [Twilio](https://www.twilio.com/) when the button is pressed.

Based on the excellent [node-dash-button](https://github.com/hortinstein/node-dash-button) library which uses [Edward Bensen's ARP request technique](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8).

## Usage

Follow the [node-dash-button instructions](https://github.com/hortinstein/node-dash-button#first-time-dash-setup) to setup your Dash button and find it's MAC address.

1. Download the [source of this repository](https://github.com/wehriam/dash-door-buzzer/archive/master.zip).
2. Unzip the archive.
3. Copy [`config.js.sample`](https://github.com/wehriam/dash-door-buzzer/blob/master/config.js.sample) to `config.js`
4. Modify `config.js` to include your:
  * Dash button MAC address
  * Twilio account SID
  * Twilio auth token
  * Twilio number
  * Phone number
  * Custom message
5. Install dependencies: `npm install`
6. Make index.js executable: `chmod +x index.js`
7. Run [`index.js`](https://github.com/wehriam/dash-door-buzzer/blob/master/index.js) as root: `sudo ./index.js`

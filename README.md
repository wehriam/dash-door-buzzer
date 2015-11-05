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
7. Make sure the first line of [`index.js`](https://github.com/wehriam/dash-door-buzzer/blob/master/index.js) reflects the location of your node executable.
8. Run [`index.js`](https://github.com/wehriam/dash-door-buzzer/blob/master/index.js) as root: `sudo ./index.js`

If you're on OSX you may want to run this script on startup.

1. Modify [`com.wehriam.dash-door-buzzer.node.plist`](https://github.com/wehriam/dash-door-buzzer/blob/master/com.wehriam.dash-door-buzzer.node.plist) file to point to your [`index.js`](https://github.com/wehriam/dash-door-buzzer/blob/master/index.js) file
2. Copy [`com.wehriam.dash-door-buzzer.node.plist`](https://github.com/wehriam/dash-door-buzzer/blob/master/com.wehriam.dash-door-buzzer.node.plist) to `/Library/LaunchDaemons`
3. Run `sudo chgrp wheel com.wehriam.dash-door-buzzer.node.plist`
4. Run `sudo chown root com.wehriam.dash-door-buzzer.node.plist`
5. Run `sudo launchctl load /Library/LaunchDaemons/com.wehriam.dash-door-buzzer.node.plist`

#### License

The MIT License (MIT)

Copyright (c) 2015 Alex Hortin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

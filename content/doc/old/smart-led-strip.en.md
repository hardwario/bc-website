# Smart LED Strip Project

<!-- toc -->


## What is this project about

It is a very simple project, which aims at building a simple home automation.
The result of the project is a smart LED strip placed in a prominent place in the living room (in our case on TV), which you can control remotely from your phone or tablet and which changes colors according to the measured temperature and humidity.
Besides this handy alerting of inappropriate conditions, it also serves as a decent colorful decoration of the living room.
You can obviously use it for controlling other appliances, like a fan, garage door opener or a bedside lamp.

If one of these values are out of proper range, project will indicate it on a programmable LED strip by a change of color.

The color codes are as following:

* The color is green if the humidity is too high (> 60%).
* The color is yellow if the humidity is too low (< 30%).
* The color is red if the temperature is too high (> 26°C).
* The color is blue if the temperature is too low (< 22°C).

Any of these limit values can be adjusted in configuration (later we will show you how).

Smart LED Strip project consists of two units described below.


### Base unit

This unit is responsible for driving of the LED strip and receiving wireless data from Remote unit.
Wireless data are dispatched from Base unit to Raspberry Pi which decides about the color of the connected LED strip.


### Remote unit

Remote unit is a battery-operated wireless node measuring temperature and humidity and transmitting these data to Base unit in regular 30-second intervals.

The whole concept is best described by the following diagram:

![](images/workroom/block-diagram.png)


## Requirements

All items can be purchased as a [pre-installed set](https://shop.bigclown.com/products/smart-led-strip-set) in our e-shop.
If you buy core modules as a separate items, you have to program them [using this Core module tutorial](https://doc.bigclown.com/core-module-flashing.html#using-usb-cable-and-integrated-bootloader).
Firmware for Base and Remote younit is [here](https://doc.bigclown.com/core-module-flashing.html#firmware-files).
If you want to use your own Raspberry Pi, see the tutorial [Install BigClown Packages on Existing System](https://doc.bigclown.com/raspberry-pi-installation.html#install-bigclown-packages-on-existing-system) 
or use [our image](https://doc.bigclown.com/raspberry-pi-installation.html#prepare-the-microsd-card) with pre-installed system including BigClown packages.

Individual components in the set are:

* 2x Core Module
* 1x Temperature Tag
* 1x Humidity Tag
* 1x Tag Module
* 1x Power Module
* 1x Battery Module
* 1x Base Module
* 1× LED strip RGBW (1m / 144 LEDs)
* 1x Raspberry Pi 3
* 1x 8 GB MicroSD card with pre-installed system
* 1x Enclosure for Raspberry Pi 3
* 1x USB 2.0 cable A/Micro-B
* 1x Power adapter for Raspberry Pi 3
* 1x Power adapter for Power Module

![](images/workroom/workroom-set.png)

You will also need:

* Desktop/laptop computer
* Ethernet cable
* LAN router/switch with one available port
* Internet connectivity


## Installation instructions

1. *Build your Remote unit*

   ![](images/workroom/build-remote.png)

2. *Build your Base unit*

   ![](images/workroom/build-base.png)

3. *Connect LED strip to Base unit*

   ![](images/workroom/connect-led-strip.png)

4. *Connect Base unit to Raspberry Pi using MicroUSB cable*

   ![](images/workroom/connect-base-to-rpi.png)

5. *Connect Ethernet cable to Raspberry Pi*

   ![](images/workroom/connect-ethernet-to-rpi.png)

6. *Connect power adapter to Base unit and plug it to AC-line*

   ![](images/workroom/connect-power-to-base.png)

7. *Connect power adapter to Raspberry Pi and plug it to AC-line*

   ![](images/workroom/connect-power-to-rpi.png)

8. *Insert batteries to your Remote unit*

   ![](images/workroom/insert-batteries.png)

9. *Activate pairing mode on Base unit*

   Press and hold BOOT button on Core Module of Base unit until red LED on Core Module starts blinking.
   BOOT button is marked on Core Module with letter "B". Pairing mode on Base unit is now active until pairing signal is received from the Remote unit.

![](images/workroom/pairing-base.png)

10. *Transmit pairing signal on Remote unit*

    Press and hold BOOT button on Core Module of Remote unit until red LED on Core Module lights up for two seconds.
    BOOT button is marked on Core Module with letter "B".
    Now pairing signal has been sent and Remote unit should stop blinking.

    ![](images/workroom/pairing-remote.png)

11. *Turn on the light*

    Shortly press BOOT button either on Base unit or Remote unit to turn on the light.
    You can use this button any time you will want to turn the LED strip on or off.

    ![](images/workroom/turn-on-light.png)


* You can see pairing setup and testing the functionality in this short video:

  {%youtube%}3q05fJHeQrg{%endyoutube%}


## MQTT Data Playground

All messages between Linux components in the system are exchanged via MQTT broker.
MQTT broker is the heart of BigClown home automation system.

You can find more about MQTT here:

* [MQTT - Messaging via Broker](mqtt.md)

* [Mosquitto - MQTT Broker](mosquitto.md)

How-to communicate with MQTT broker:

1. Connect to your Raspberry Pi via SSH (port 22) using:

   * Windows: Use [PuTTY](http://www.putty.org)

   * Linux + macOS: Use ssh command in Terminal

2. Default username is "pi" and password "raspberry"

3. Update your existing installation:

   ```
   sudo apt update && sudo apt upgrade
   ```

4. Show measurements from remote (reported every 30 seconds):

   ```
   mosquitto_sub -v -t "nodes/remote/#"
   ```

   > Use Ctrl-C to stop measurements monitoring.

5. Use LED strip as light and set luminosity:

   ```
   mosquitto_pub -t "plugin/led-strip/data/set" -m '{"state": "color", "color": [0, 0, 0, 128]}'
   ```

6. Update and retain LED strip brightness:

   ```
   mosquitto_pub -t "plugin/led-strip/data/set" -m '{"brightness": 100}' -r
   ```

   > Notice *-r* to store topic in MQTT broker as persistent configuration

7. Use LED strip as humidity and temperature indicator:

   ```
   mosquitto_pub -t "plugin/led-strip/data/set" -m '{"state": "rules"}'
   ```


### Sensors on remote

* Measured temperature and humidity values reported by Remote unit:

  ```
  nodes/remote/thermometer/i2c0-49 {"temperature": [23.62, "\u2103"]}
  nodes/remote/humidity-sensor/i2c0-40 {"relative-humidity": [33.2, "%"]}
  ```


### Relay on base

* Relay has state true (switched on) or false (switched off)

  ```
  mosquitto_pub -t 'nodes/base/relay/-' -m '{"state": true}'
  ```


#### Examples

* Switch Relay ON:

  ```
  mosquitto_pub -t "nodes/base/relay/-/set" -m '{"state": true}'
  ```

* Switch Relay OFF:

  ```
  mosquitto_pub -t "nodes/base/relay/-/set" -m '{"state": false}'
  ```

* Request Relay state

  ```
  mosquitto_sub -v -t "nodes/base/relay/-" &
  mosquitto_pub -t "nodes/base/relay/-/get" -m '{}'
  ```


### LED strip on base

* Desired color of the LED strip connected to Base unit

  ```
  mosquitto_pub -t 'nodes/base/led-strip/-/set' -m  '{"pixels": "/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA"}'
  ```

* LED strip configuration

  ```
  mosquitto_pub -t 'nodes/base/led-strip/-/config/set' -m '{"mode": "rgb", "count": 150}'
  mosquitto_pub -t 'nodes/base/led-strip/-/config/set' -m '{"mode": "rgbw", "count": 144}'
  ```


### Plugin led-strip

Temperature and humididy limits are evaluated by Python script running on Raspberry Pi in Linux (we use Raspbian as the official Linux distribution).

Plugin serves also as comfort driver for LED strip.

* Generate data for all pixels through color attribute:

  ```
  mosquitto_pub -t "plugin/led-strip/data/set" -m '{"color": [255,0,0,0]}'
  ```

* Use data/set color attribute to generate pixels:

  ```
  mosquitto_pub -t "plugin/led-strip/data/set" -m '{"state": "color"}'
  ```

* Use rules matching to generate pixels:

  ```
  mosquitto_pub -t "plugin/led-strip/data/set" -m '{"state": "rules"}'
  ```

#### Examples

* Use LED strip as light

  ```
  mosquitto_pub -t "plugin/led-strip/data/set" -m '{"state": "color", "color": [0, 0, 0, 255], "brightness": 200}'
  ```

* Change LED strip brightness:

  ```
  mosquitto_pub -t "plugin/led-strip/data/set" -m '{"brightness": 100}'
  ```

* Switch LED strip OFF

  ```
  mosquitto_pub -t "nodes/base/light/-/set" -m '{"state": false}'
  ```

* Switch LED strip ON

  ```
  mosquitto_pub -t "nodes/base/light/-/set" -m '{"state": true}'
  ```

> Pixels are preserved.

* Request LED strip state

  ```
  mosquitto_sub -v -t "nodes/base/light/-" &
  mosquitto_pub -t "nodes/base/light/-/get" -m '{}'
  nodes/base/light/- {"state": true}
  ```


#### Change default thresholds

Everybody likes different environment so the preset thresholds for temperature and humidity might not be optimal for you.

* Change the rules (first matching rule is used to set color):

  ```
  mosquitto_pub -t "plugin/led-strip/config" -m '{
    "rules": [
        {"relative-humidity": {"from": 60}, "color": [0, 255, 0, 0]},
        {"relative-humidity": {"to": 30}, "color": [255, 255, 0, 0]},
        {"temperature": {"from":30}, "color": [255, 0, 0, 0]},
        {"temperature": {"to": 22}, "color": [0, 0, 255, 0]},
        {"color": [0, 0, 0, 255]}
    ]
   }' -r
   ```

### Plugin blynk

1. Install Blynk on your smartphone / tablet.

   > **Note** Just use Google Play or App Store.

2. Run Blynk and select **Create new project**. and give it a name (e.g. “Workroom Project”) and select **Generic Board** as a hardware.

   ![](images/workroom/blynk-create-project-1.png)
   ![](images/workroom/blynk-create-project-2.png)

3. Write down your Auth Token (or let the application to send it to you by e-mail).

* Configure Blynk Auth token via MQTT.

  ```
  mosquitto_pub -t "plugin/blynk/config" -m '{"token":"your_token"}' -r
  ```
4. Create widgets for temperature and humidity sensors

   ![](images/workroom/blynk-value-temperature.png)
   ![](images/workroom/blynk-value-humidity.png)

5. Create widgets for History Graph and slider for brightness

   ![](images/workroom/blynk-history-graph.png)
   ![](images/workroom/blynk-slider-brightness.png)

6. Create button widgets for light and relay

   ![](images/workroom/blynk-button-light.png)
   ![](images/workroom/blynk-button-relay.png)

7. Create widget zeRGBa

   ![](images/workroom/blynk-zergba.png)

8. Now you have a working Blynk dashboard.

   ![](images/workroom/blynk-dashboard.png)

   > **Note** When you click on the white dot switches back to the rules

## Virtual Pin Assignment for Blynk

| Virtual PIN  | Topic                                | Payload key       | Unit  |
| ------------ | ------------------------------------ | ----------------- | ----- |
| 0            | nodes/remote/thermometer/+           | temperature       | °C    |
| 1            | nodes/remote/humidity-sensor/+       | relative-humidity | %     |
| 2            | plugin/led-strip/data/set/ok         | brightness        |       |
| 2            | plugin/led-strip/data                | brightness        |       |
| 3            | nodes/base/light/-                   | state             |       |
| 4            | nodes/base/relay/-                   | state             |       |
| 5            | plugin/led-strip/data/set/ok         | color             |       |
| 5            | plugin/led-strip/data                | color             |       |

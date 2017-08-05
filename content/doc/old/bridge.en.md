# Bridge Project

{%youtube%}00WasmWBFjE{%endyoutube%}

<!-- toc -->


## Introduction

Bridge project is suitable for those, who would like to integrate our system with the 3rd party platforms or for those who are working on their own IoT or BigData projects.
Bridge project allows you to quickly and easily connect our environmental sensors and/or actuators to your Raspberry Pi or any other Linux-based host.
This provides a super-quick setup if you want to start processing your IoT data in the cloud or perform any data analytics.
Bridge project is also suitable to teach general principles of home automation and used standards, e.g. MQTT.

With this project you will be able to monitor environmental conditions like:

* Temperature (with Temperature Tag bundled in the set)
* Humidity (with Humidity Tag bundled in the set)
* Luminosity (with Lux Meter Tag bundled in the set)
* Atmospheric pressure/altitude (with Barometer Tag bundled in the set)
* Carbon dioxide (CO^2^) concentration (with CO2 Module which is an optional item)

You can also control relay through this web dashboard (with Relay Module) and control small appliances (LED strip, garage door opener, etc.).

The hardware concept is best described by the following diagram:

![](images/bridge/block-diagram.png)


## Requirements

All items can be purchased as [pre-installed set](https://shop.bigclown.com/products/bridge-project-collection) in our e-shop.

Individual components in the set are:

* 1× Bridge Module
* 1x Tag Module
* 1x Temperature Tag
* 1x Humidity Tag
* 1x Barometer Tag
* 1x Lux Meter Tag
* 1x Base Module
* 1x Relay Module
* 1x Raspberry Pi 3
* 1x 8 GB MicroSD card with pre-installed system
* 1x Enclosure for Raspberry Pi 3
* 1x Power adapter for Raspberry Pi 3

![](images/bridge/bridge-set.png)

You will also need:

* Desktop/laptop computer
* Ethernet cable
* LAN router/switch with one available port
* Internet connectivity


## Installation Instructions

You can either follow step-by-step instructions in the text below or watch this short video:

{%youtube%}J5jmx7RoLnY{%endyoutube%}

1. Build the Bridge node.

   ![](images/bridge/build-bridge.png)

2. Connect Bridge Module to Raspberry Pi using MicroUSB cable.

   ![](images/bridge/connect-bridge-to-rpi.png)

3. Connect Ethernet cable to Raspberry Pi.

   ![](images/bridge/connect-ethernet-to-rpi.png)

4. Connect power adapter to Raspberry Pi and plug it to AC-line.

   ![](images/bridge/connect-power-to-rpi.png)

5. Wait until the Raspberry Pi boots up (approximately 30 seconds).

6. Open in your browser http://hub.local:8080 or enter your local IP address http://x.x.x.x:8080 (how to find Raspberry Pi IP)

7. Dashboard shows all measured values, you can also control relay output with a button.

   ![](images/bridge/dashboard.png)


## Tweaking and Hacking

Next step is to login to Raspberry Pi via SSH terminal so we can later play with MQTT messages.
Again, use http://hub.local or the IP from the previous chapter.


### SSH from Windows Desktop

1. Download PuTTY.

2. Open PuTTY and open SSH session:

   * For hostname use `hub.local` or *IP address of Raspberry Pi*

   * Use username: `pi`

   * Use password: `raspberry`


### SSH from OS X or Linux Desktop

1. Open Terminal and connect to Raspberry Pi:

   * Using IP address: `ssh pi@`*IP address of Raspberry Pi*

   * Using zeroconf name: `ssh pi@hub.local`

   * Use username: `pi`

   * Use password: `raspberry`


### MQTT Playground

Look at measured values (this will subscribe to messages from MQTT broker running inside the Docker container):

```
docker exec hub mosquitto_sub -v -t 'nodes/bridge/0/#'
```

Set relay to “true” state (this will publish message to MQTT broker running inside the container):

```
docker exec hub mosquitto_pub -t nodes/bridge/0/relay/i2c0-3b/set -m '{"state": true}'
```

Set relay to “false” state:

```
docker exec hub mosquitto_pub -t nodes/bridge/0/relay/i2c0-3b/set -m '{"state": false}'
```

Turn on the LED on the bridge:

```
docker exec hub mosquitto_pub -t nodes/bridge/0/led/-/set -m '{"state": "on"}'
```

Turn off the LED on the bridge

```
docker exec hub mosquitto_pub -t nodes/bridge/0/led/-/set -m '{"state": "off"}'
```

Flashing LED on the bridge

```
docker exec hub mosquitto_pub -t nodes/bridge/0/led/-/set -m '{"state": "1-dot"}'
docker exec hub mosquitto_pub -t nodes/bridge/0/led/-/set -m '{"state": "2-dot"}'
docker exec hub mosquitto_pub -t nodes/bridge/0/led/-/set -m '{"state": "3-dot"}'
```

If you want to know more about MQTT, follow these links:

* [MQTT - Messaging via Broker](mqtt.md)

* [Mosquitto - MQTT Broker](mosquitto.md)

---
title: "Custom Setup on Turris"
menu:
  main:
    parent: 'tutorials'
    weight: 80
  doc:
    parent: 'tutorials'
    weight: 80
---

If you need more permanent solution than **BigClown Playground** you can install all the services yourself in your system. This guide will help you to install and configure these services:

* BigClown Gateway `bcg`
* BigClown Firmware Tool `bcf`
* BigClown Host Tool `bch`
* Mosquitto MQTT broker
* Node-RED
* The process manager `pm2`

## Installation

1. Update the package

        opkg update

2. Install the driver for the **BigClown Radio Dongle** and **BigClown Core module**:

        opkg install kmod-usb-serial-ftdi kmod-usb-acm
        insmod ftdi_sio
        insmod cdc_acm

3. Install **[Mosquitto](https://mosquitto.org/ "MQTT brouker")** server and clients:

        opkg install mosquitto mosquitto-client

4. Enable service for **[Mosquitto](https://mosquitto.org/ "MQTT brouker")**

        /etc/init.d/mosquitto enable

5. Start **[Mosquitto](https://mosquitto.org/ "MQTT brouker")** service

        /etc/init.d/mosquitto start

6. Install **Python 3** (required by the **BigClown Gateway** and **BigClown Firmware Tool**).

        opkg install python3 python3-pip

7. Install the **BigClown Gateway**, **BigClown Flash Tool** and **BigClown Host Tool**:

        pip3 install --upgrade --no-cache-dir bcg
        pip3 install --upgrade --no-cache-dir bcf
        pip3 install --upgrade --no-cache-dir bch

## Finishing for Radio Dongle as a gateway

Follow these steps if you have {{< shop "Radio Dongle" >}} as a gateway.

1. Finish [installation](#installation) part

2. Download configuration

        wget "https://raw.githubusercontent.com/bigclownlabs/bch-gateway/master/turris/etc/config/bc-gateway-usb-dongle" -O /etc/config/bc-gateway-usb-dongle

3. Make sure the configuration works

        uci show bc-gateway-usb-dongle

4. Download Init Script

        wget "https://raw.githubusercontent.com/bigclownlabs/bch-gateway/master/turris/etc/init.d/bc-gateway-usb-dongle" -O /etc/init.d/bc-gateway-usb-dongle

5. Add execute permission

        chmod u+x /etc/init.d/bc-gateway-usb-dongle

7. Enable service for gateway

        /etc/init.d/bc-gateway-usb-dongle enable

8. Start service

        /etc/init.d/bc-gateway-usb-dongle start

---
title: "Turris Omnia & 1.x Setup"
---

In this document we will install a set of components that are fundamental for the BigClown projects.

## Installation

1. Update the package

        opkg update

2. Install the driver for the **BigClown USB Dongle** and **BigClown Core module**:

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

7. Install the **BigClown Gateway**:

        pip3 install --upgrade --no-cache-dir bcg

## Finishing for USB Dongle

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


## Finishing for Core module

1. Finish [installation](#installation) part

2. Download configuration

        wget "https://raw.githubusercontent.com/bigclownlabs/bch-gateway/master/turris/etc/config/bc-gateway-core-module" -O /etc/config/bc-gateway-core-modul

3. Make sure the configuration works

        uci show bc-gateway-core-modul

4. Download Init Script

        wget "https://raw.githubusercontent.com/bigclownlabs/bch-gateway/master/turris/etc/init.d/bc-gateway-core-module" -O /etc/init.d/bc-gateway-core-module

5. Add execute permission

        chmod u+x /etc/init.d/bc-gateway-core-module

7. Enable service for gateway

        /etc/init.d/bc-gateway-core-module enable

8. Start service

        /etc/init.d/bc-gateway-core-module start

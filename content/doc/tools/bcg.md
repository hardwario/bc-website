---
title: "BigClown gateway"
---

This multi-platform Python tool connects USB gateway to the MQTT. USB gateway is communicating over virtual USB serial port with JSONs.

Gateway can be run in command line or by `pm2` service manager.

The installation and start-up instructions are in the [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}})

## Install & Upgrade

    sudo pip3 install --upgrade --no-cache-dir bcg

## Usage examples

Usually the `bcg` is run with `pm2` process manager, please see the [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}). This direct command line command is more for testing purporses if the service does not run correctly.

Start

        bcg --device /dev/ttyUSB0

Start with **debug**

        bcg --device /dev/ttyUSB0 --debug

## bcg --help

```
hub@hpnix:~$ bcg --help
usage: bcg [-h] [-c CONFIG] [-d DEVICE] [-H MQTT_HOST] [-P MQTT_PORT]
           [--no-wait] [--mqtt-username MQTT_USERNAME]
           [--mqtt-password MQTT_PASSWORD] [--mqtt-cafile MQTT_CAFILE]
           [--mqtt-certfile MQTT_CERTFILE] [--mqtt-keyfile MQTT_KEYFILE] [-D]
           [-v]
           COMMAND ...

BigClown gateway between USB serial port and MQTT broker

positional arguments:
  COMMAND
    devices             show devices
    help                show help

optional arguments:
  -h, --help            show this help message and exit
  -c CONFIG, --config CONFIG
                        path to configuration file (YAML format)
  -d DEVICE, --device DEVICE
                        device
  -H MQTT_HOST, --mqtt-host MQTT_HOST
                        MQTT host to connect to (default is localhost)
  -P MQTT_PORT, --mqtt-port MQTT_PORT
                        MQTT port to connect to (default is 1883)
  --no-wait             no wait on connect or reconnect serial port
  --mqtt-username MQTT_USERNAME
                        MQTT username
  --mqtt-password MQTT_PASSWORD
                        MQTT password
  --mqtt-cafile MQTT_CAFILE
                        MQTT cafile
  --mqtt-certfile MQTT_CERTFILE
                        MQTT certfile
  --mqtt-keyfile MQTT_KEYFILE
                        MQTT keyfile
  -D, --debug           print debug messages
  -v, --version         show program's version number and exit

```

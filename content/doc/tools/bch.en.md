---
title: "BigClown Host Tool"
menu:
  main:
    parent: 'tools'
    weight: 30
  doc:
    parent: 'tools'
    weight: 30
---

This multi-platform Python tool is a "Swiss knife" to control the radio and nodes.

## Install & Upgrade

    sudo pip3 install --upgrade --no-cache-dir bch

## Usage examples

Subscribe to all MQTT topics (`#`)

        bch sub

Subscribe to MQTT broker running on `hub.local` host

        bch -H hub.local sub

Subscribe to specific topic

        bch sub node/kitchen/#

Publish MQTT message on MQTT broker running localhost

        bch pub node/kitchen/thermometer/0:0/temperature 21.70

Start pairing mode

        bch pairing --start
        bch -H hub.local pairing --start

Stop pairing mode

        bch pairing --stop
        bch -H hub.local pairing --stop

Rename node

        bch node rename generic-node:0 kitchen
        bch node rename 836d19831c4a garden

List paired nodes

        bch node list

Remove node. By name or ID

        bch node remove garden
        bch node remove 836d19831c4a

## bch --help

```
Usage: bch [OPTIONS] COMMAND [ARGS]...

Options:
  --gateway TEXT                 Gateway name [default: usb-dongle].
  -H, --mqtt-host TEXT           MQTT host to connect to [default: 127.0.0.1].
  -P, --mqtt-port INTEGER RANGE  MQTT port to connect to [default: 1883].
  --mqtt-username TEXT           MQTT username.
  --mqtt-password TEXT           MQTT password.
  --mqtt-cafile PATH             MQTT cafile.
  --mqtt-certfile PATH           MQTT certfile.
  --mqtt-keyfile PATH            MQTT keyfile.
  -v, --verbosity LVL            Either CRITICAL, ERROR, WARNING, INFO or
                                 DEBUG
  -h, --help                     Show this message and exit.

Commands:
  gw       Gateway
  node
  pairing
  pub
  sub      Subscribe topic.
  version  Show program's version number and exit.


```

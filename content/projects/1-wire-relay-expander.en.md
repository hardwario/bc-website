---
title: Expander with 8 Relays
description: Control up to 8 devices via the 1-Wire bus
idea: false
tags: ["Indoor"]
levels: ["Advanced"]
places: ["Office"]
devices: ["Custom Kit"]
meta:
  title: Control up to 8 devices via the 1-Wire bus
  desciption: ""
images:
  preview: /projects/1-wire-relay-expander/preview.jpg
  main: /projects/1-wire-relay-expander/main.jpg
button:
    text: Získej vše potřebné
    link: https://shop.bigclown.com/soil-moisture-sensor-kit/
author:
  name: Martin Hubáček
  post:
  email: martin.hubacek@hardwario.com
  image: /authors/martin.jpg
  github:
    name: hubmartin
    link: https://github.com/hubmartin

---

By connecting the Denkovi **1-Wire 8 Relay Module** expander it is now possible to control power devices. The commands for turning the relays off or on is sent wirelessly by sending **MQTT message**.

### What you need

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Denkovi 1-Wire Relay" >}}


### References

* [Source code](https://github.com/blavka/bcf-denkovi-1wire-relay)
* [Communication example](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples/onewire-relay)

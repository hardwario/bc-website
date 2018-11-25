---
title: Expander with eight relays
description: Control up to 8 devices via the 1-Wire bus
tags: ["Indoor"]
levels: ["Advanced"]
places: ["Office"]
devices: ["Custom Kit"]
meta:
  title: Ovládej až 8 zařízení přes 1-Wire sběrnici
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

Připojením modulu Denkovi "1-Wire 8 Relay Module" je možné ovládat silové spotřebiče. Příkaz pro sepnutí a rozepnutí relé se potom do Core Module posílá skrz MQTT bezdrátově.

### Co budeš potřebovat

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Denkovi 1-Wire Relay" >}}


### Reference

* [Zdrojový kód](https://github.com/blavka/bcf-denkovi-1wire-relay)
* [Ukázka komunikace](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples/onewire-relay)

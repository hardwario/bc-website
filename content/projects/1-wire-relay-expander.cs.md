---
title: Expandér s osmi relé
description: Ovládej až 8 zařízení přes 1-Wire sběrnici
idea: false
tags: ["Indoor"]
levels: ["Advanced"]
places: ["Office"]
devices: ["Custom Kit"]
images_preview: /projects/1-wire-relay-expander/preview.jpg
images_main: /projects/1-wire-relay-expander/main.jpg
author: "martin_hubacek"
---

Připojením modulu Denkovi "1-Wire 8 Relay Module" je možné ovládat silové spotřebiče. Příkaz pro sepnutí a rozepnutí relé se potom do Core Module posílá skrz MQTT bezdrátově.

### Co budeš potřebovat

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Denkovi 1-Wire Relay" >}}


### Reference

* [Zdrojový kód](https://github.com/blavka/bcf-denkovi-1wire-relay)
* [Ukázka komunikace](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples/onewire-relay)

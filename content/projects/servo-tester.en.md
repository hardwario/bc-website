---
title: Servo tester
description: Test the servo motors with Core and Power Module
tags: ["Indoor"]
levels: ["Advanced"]
places: ["Home", "School"]
devices: ["Custom Kit"]
meta:
  title: Servo tester
  desciption: ""
images:
  preview: /projects/servo-tester/preview.jpg
  main: /projects/servo-tester/main.jpg
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

Místo digitálních LED pásků je možné na stejný konektor zapojit i servo motor. Další motory je možné zapojit jejich signály na GPIO piny Core Module. Celkem je možné hardwarově generovat signál až pro 9 motorů. PWM výstupy lze najít v [popisu pinů](/doc/hardware/header-pinout/).

### Co budeš potřebovat

* {{< shop "Core Module" >}}
* {{< shop "Power Module" >}}
* Libovolný servo motor


### Reference

* [Zdrojový kód](https://github.com/blavka/bcf-test-servo)
* [Jak na servo motor](https://www.bigclown.com/doc/firmware/how-to-servo-motor/)

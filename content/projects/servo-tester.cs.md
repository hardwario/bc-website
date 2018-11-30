---
title: Servo tester
description: Vyzkoušej funkčnost servo motorků s pomocí Core a Power Module
idea: false
tags: ["Indoor"]
levels: ["Advanced"]
places: ["Home", "School"]
devices: ["Custom Kit"]
image_preview: /projects/servo-tester/preview.jpg
image_main: /projects/servo-tester/main.jpg
author: "martin_hubacek"

---

Místo digitálních LED pásků je možné na stejný konektor zapojit i servo motor. Další motory je možné zapojit jejich signály na GPIO piny Core Module. Celkem je možné hardwarově generovat signál až pro 9 motorů. PWM výstupy lze najít v [popisu pinů](/doc/hardware/header-pinout/).

### Co budeš potřebovat

* {{< shop "Core Module" >}}
* {{< shop "Power Module" >}}
* Libovolný servo motor


### Reference

* [Zdrojový kód](https://github.com/blavka/bcf-test-servo)
* [Jak na servo motor](https://www.bigclown.com/doc/firmware/how-to-servo-motor/)

---
title: Servo tester
description: Test the servo motors with Core and Power Module
idea: false
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

You can connect regular servo motor instead of smart digital LED strip to the Power Module. More motors can be connected to other PWM GPIO pins on the Core Module. You can control up to 9 servo motors thanks to hardware PWM. Please see [pin description](/doc/hardware/header-pinout/).

### What you need

* {{< shop "Core Module" >}}
* {{< shop "Power Module" >}}
* Any servo motor


### References

* [Example sourcecode](https://github.com/blavka/bcf-test-servo)
* [How To: Servo motor](https://www.bigclown.com/doc/firmware/how-to-servo-motor/)

---
title: IKEA light with Motion Detection and HomeKit
description: "Turn on the lights in the night automatically with IKEA and Apple HomeKit!"
idea: false
tags: ["Indoor"]
levels: ["Beginner"]
places: ["Home", "Office", "School"]
devices: ["Motion Kit"]
meta:
  title: Monitoring vlhkosti půdy
  desciption: ""
images:
  preview: /projects/toilete-night-light-with-ikea-and-apple/preview.jpg
  main: /projects/toilete-night-light-with-ikea-and-apple/main.jpg
author:
  name: Lukáš Fabik
  email: lukas.fabik@hardwario.com
  image: /authors/lukas.jpg
  github:
    name: hubmartin
    link: https://github.com/hubmartin

---

When you get home at dark, your light can automatically turn on. Thanks to IKEA lights and Motion Detector Kit you can set the rules to control the lights.


### What you need

* [Motion Detector Kit](https://shop.bigclown.com/motion-detector-kit/)
* Smart Lights [IKEA TRÅDFRI](https://www.ikea.com/cz/cs/catalog/categories/departments/lighting/smart_lighting/)
* [Radio Dongle](https://shop.bigclown.com/radio-dongle/)

### Set-up

* Motion Detector is paired with my BigClown Hub
* In the Node-RED I set-up connection to my Apple HomeKit
* I've connected the IKEA light to my Apple HomeKit
* I've added event that turns on the light when the motion is detected

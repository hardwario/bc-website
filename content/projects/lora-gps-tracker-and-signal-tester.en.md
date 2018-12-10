---
title: LoRa GPS Tracker and Signal Tester
draft: true
date: 2018-12-10T12:06:34.786Z
description: >-
  Thanks to this tracker you can track your goods. So you know when it arrives
  and also in what shape thanks to sensors and accelemoter.
tags:
  - Outdoor
levels:
  - Advanced
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /static/uploads/gps-module.png
image_main: /static/uploads/gps-module.png
author: martin_hubacek
---
You can track your goods on the road. Thanks to temperature sensor or Climate Module you can measure all environment variables and send them in real-time. This device can be also used for The Thing Network TTN mapper to map LoRa coverage.

### Overview

The measured data are averaged and send in periodic intervals over LoRa network to your backend. It the TTN mapper mode the device sends packet every few minutes or if the GPS measured movement bigger than 50 meters.

#### Hardware

* {{< shop "GPS Module" >}}
* {{< shop "Climate Module" >}}
* {{< shop "LoRa Module" >}}
* {{< shop "Core Module" >}}
* {{< shop "Mini Battery Module" >}}

#### Software

* Custom server running in the cloud
* Grafana with map plug-in

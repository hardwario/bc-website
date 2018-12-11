---
title: Room Occupancy Detector with Infrared Sensor
draft: false
date: 2018-12-11T08:06:34.786Z
description: >-
  Check the occupancy of rooms. Thermal camera does not violate privacy and measures just the temperature trace of people in the room.
tags:
  - Indoor
levels:
  - Basic
places:
  - Office
  - School
devices:
  - Infra Grid Module
  - Custom Kit
idea: true
image_preview: /projects/room-occupancy-infrared-sensor/preview.jpg
image_main: /projects/room-occupancy-infrared-sensor/main.jpg
author: martin_hubacek
---

See how well the meeting rooms are utilized. PIR Motion detector will sense only the motion, but the thermal camera will also tell you the presence of the persons in the room. This way you can lower the ari-conditioning of the room. Also if nobody is in the room in the time the meeting was planned, you can automaticly free the room in the schedule so other people might use it.

### Overview

Infra Grid Module sends temperature image to the server or Raspberry Pi. Here the image is processed and rated for example by artificial inteligence.

#### Hardware

* {{< shop "Core Module" >}}
* {{< shop "Infra Grid Module" >}}
* {{< shop "Battery Module" >}}
* {{< shop "BigClown Hub" >}}


#### Software

* TensorFlow
* Grafana for visualizations

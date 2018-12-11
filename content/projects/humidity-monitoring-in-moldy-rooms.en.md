---
title: Humidity Monitoring in Moldy Rooms
draft: false
date: 2018-12-11T08:06:34.786Z
description: >-
  Be notified when the moisture in your bathroom is too high so you can ventilate the room.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Climate Monitor Kit
idea: true
image_preview: /projects/humidity-monitoring-in-moldy-rooms/preview.jpg
image_main: /projects/humidity-monitoring-in-moldy-rooms/main.jpg
author: martin_hubacek
---

Prevent molding by ventilating in the bathroom. If you or your kids forget to ventilate, the humidity gets high and that is ideal conditions for molds. Climate Monitor will measure humidity and Node-RED sends a notification to you or your kids.

### Overview

Climate Monitor is placed in the top corner of the room. Measured data are send to the Raspberry Pi which sends you notification over Blynk when the air is too humid for long time.

#### Hardware

* {{< shop "Climate Monitor Kit" >}}
* {{< shop "BigClown Hub" >}}


#### Software

* Node-RED to control the tresholds
* Blynk for notifications

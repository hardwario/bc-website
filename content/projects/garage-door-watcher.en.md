---
title: Garage Door Watcher
draft: false
date: 2018-12-11T08:06:34.786Z
description: >-
  Monitor your garage door and get a notification when doors are opened for a long time or they are opened at night.
tags:
  - Outdoor
levels:
  - Advanced
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/garage-door-watcher/preview.jpg
image_main: /projects/garage-door-watcher/main.jpg
author: martin_hubacek
---

Just add the magnetic contact to your garage door or place the Core Module with accelerometer to your overhead door to be notified when you forget to close them in the efvening.

### Overview

The sensor in the garage sends garage door status to your Raspberry Pi. Then Nore-RED checks if the doors are opened for long time or if it is evening and doors are still open. Then it sends notification over Blynk to your phone

#### Hardware

* {{< shop "Push Button Kit" >}}
* optionally {{< shop "Sensor Module" >}} for magnetic switch
* {{< shop "BigClown Hub" >}}


#### Software

* Node-RED with flow that checks door state and time of the day

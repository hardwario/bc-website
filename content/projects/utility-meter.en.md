---
title: Utility Meter Remote Monitoring with Pipe Damage Warning
draft: false
date: 2018-12-10T12:08:34.786Z
description: >-
  Save water, eletricity and natural gas. Get notification when the long water flow could be ruptured pipe damaging your home. With remote monitoring you will see where you waste the resources.
tags:
  - Outdoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/utility-meter/preview.jpg
image_main: /projects/utility-meter/main.jpg
author: martin_hubacek
---

Every utility meter has some option for remote monitoring. Why don't use it for you home and save on your bills.

### Overview

Optical sensor or electric pulses are measure with Sensor Module. Core Module sends these data wirelessly to the Radio Dongle in your Raspberry Pi computer. There you will use InfluxDB and Grafana to see the graphs and see the trends.

#### Hardware

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Battery Module" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Grafana
* Node-RED for thresholds
* Blynk for notifications

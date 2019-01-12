---
title: Beehive Scale Monitoring with LoRa or Sigfox
draft: false
date: 2018-12-10T12:06:34.786Z
description: >-
  Beekeeper has to check lot of things. This device helps to measure the weight of the Beehive and also amount of honey inside. He can also monitor temperature and, if neccessary, the location with GPS as a prevention for burglars.
tags:
  - Outdoor
levels:
  - Advanced
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/bee-hive-scale-monitoring/preview.jpg
image_main: /projects/bee-hive-scale-monitoring/main.jpg
author: martin_hubacek
---

Track the amount of honey collected, temperature and make sure the beehives are not stolen.

### Overview

Core Module with tensometers connected to the Sensor Module measures the weight of each beehive. Data are send every 10 minutes to the internet thanks to LoRa or Sigfox network.
Data are visualized in Grafana.

#### Hardware

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Battery Module" >}}
* {{< shop "GPS Module" >}}
* Tensometer sensor

#### Software

* Grafana
* LoRa / Sigfox backend

---
title: Flue Gas Measurement With TP100 Temperature Sensor
draft: false
date: 2018-12-11T08:06:34.786Z
description: >-
  The correct flue gas temperature in condensating boilers is neccessary for good efficiency. Use PT100 or PT1000 temperature sensor.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Sensor Module
  - Custom Kit
idea: true
image_preview: /projects/flue-gas-measurement-with-PT100-temperature-sensor/preview.jpg
image_main: /projects/flue-gas-measurement-with-PT100-temperature-sensor/main.jpg
author: martin_hubacek
---

For the best efficiency the condensating boilers have a certain temperature gradient of incoming and outgoing water temperature.

### Overview

Sensor is placed into the chimney and data are send every few minutes wirelessly to the Raspberry Pi. By connecting to the Raaspberry Pi you can use Grafana to monitor and watch history and current values.

#### Hardware

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Battery Module" >}}
* PT100 or PT1000 temperature sensor
* {{< shop "BigClown Hub" >}}


#### Software

* Node-RED to control the tresholds
* Grafana for visualizations

---
title: Weather Station
draft: false
date: 2018-12-10T12:10:36.786Z
description: >-
  Measure temperature, humidity, pressure, light, wind speed, wind direction and rainfall. Sens data to your home or further with Sigfox or LoRa.
tags:
  - Outdoor
levels:
  - Advanced
places:
  - Home
devices:
  - Sensor Module
idea: true
image_preview: /projects/weather-station/preview.jpg
image_main: /projects/weather-station/main.jpg
author: martin_hubacek
---

Connect meteo station to the Sensor Module, add Climate Module and send data to your home to the Raspberry Pi. You can also add LoRa or Sigfox Module and send data much further.

### Overview

Measured data are send wirelessly to your Rpi and Grafana.

#### Hardware

* {{< shop "Core Module" >}}
* {{< shop "Sensor Module" >}}
* {{< shop "Battery Module" >}}
* {{< shop "Climate Module" >}}
* {{< shop "BigClown Hub" >}}
* Optional {{< shop "Sigfox Module" >}} or {{< shop "LoRa Module" >}}

#### Software

* Grafana for visualizations

### References

* [Project with BigClown radio](https://github.com/owarek/BC-WindAndRainSensor/)
* [Project with Sigfox Module](https://github.com/hubmartin/bcf-sigfox-wind-station)

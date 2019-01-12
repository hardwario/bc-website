---
title: Wine Cooler Control
draft: false
date: 2018-12-10T12:06:34.786Z
description: >-
  Your wine cooler does not need to run all the time. Control cooling remotely when you are away and decide you like to taste some wine at home later in the evening.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/wine-cooler-control/preview.png
image_main: /projects/wine-cooler-control/main.png
author: martin_hubacek
---

Enable cooling remotely. It is not necessary that the wine cooler is constantly running when you dring wine twice a month.

### Overview

The phone is using Blynk application to control the cooler. Enable the cooler, the Raspberry Pi with Node-RED sends command over Radio Dongle wirelessly to the Power Controller which has a wine cooler connected to its relay.

#### Hardware

* {{< shop "Power Controller Kit" >}}
* {{< shop "BigClown Hub" >}}
* Wine Cooler

#### Software

* Node-RED
* Blynk

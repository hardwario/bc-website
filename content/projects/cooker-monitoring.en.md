---
title: Cooker Monitoring
draft: false
date: 2018-12-11T08:06:34.786Z
description: >-
  Makes sure that the cooker is turned off when there is nobody in the kitchen.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Infra Grid Module
idea: true
image_preview: /projects/cooker-monitoring/preview.jpg
image_main: /projects/cooker-monitoring/main.jpg
author: martin_hubacek
---

Get a notification when you forget to turn off the cooker. Infra Grid sensor detects high temperature in the kitchen and lets you know.

### Overview

Infra Grid Module sends temperature image to the server or Raspberry Pi. Here the image is processed and rated for example by artificial inteligence or set by a simple tresholds.

#### Hardware

* {{< shop "Core Module" >}}
* {{< shop "Infra Grid Module" >}}
* {{< shop "Battery Module" >}}
* {{< shop "BigClown Hub" >}}


#### Software

* TensorFlow
* Node-RED
* Blynk for notifications

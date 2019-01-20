---
title: Fridge/Freezer Monitoring
draft: false
date: 2018-12-10T12:06:34.786Z
description: >-
  Get notified when your freezer is freezing too much, when the doors are left opened for a long time or when it broke down or electricity is cut off.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/fridge-freezer-monitoring/preview.jpg
image_main: /projects/fridge-freezer-monitoring/preview.jpg
author: martin_hubacek
featured: true
---

Set ideal tepmperature in your fridge or freezer. Freezing too much is unnecessarily and costs you more money. You can also monitor how often and for how long the doors are opened thanks to integrated luxmeter. You can detect when the doors are not correctly closed

### Overview

The measured data are averaged and send in periodic intervals over radio do the USB Dongle to your Raspberry Pi or server. Here the thresholds and notifications are set in Node-RED. When needed, you get notification over Blynk or SMS.

#### Hardware

* {{< shop "Climate Monitor Kit" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED
* Grafana
* Blynk

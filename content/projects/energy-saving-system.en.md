---
title: Energy Saving System
draft: false
date: 2018-12-11T12:09:34.786Z
description: >-
  Automatically turn the heating temperature down a little when there is nobody in the room
tags:
  - Indoor
levels:
  - Basic
places:
  - School
devices:
  - Power Controller Kit
  - Motion Detector Kit
idea: true
image_preview: /projects/energy-saving-system/preview.jpg
image_main: /projects/energy-saving-system/main.jpg
author: martin_hubacek
---

Turn heating a little bit down when there is nobody in the room.

### Overview

Motion Detector Kit will send event to the BigClown Hub. Node-RED sends command to the Power Controller that will lower the set temperature in the boiler room.

#### Hardware

* {{< shop "Power Controller Kit" >}}
* {{< shop "Motion Detector Kit" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED with rules to control the temperature


---
title: Toilet Night Lamp
draft: false
date: 2018-12-11T12:09:34.786Z
description: >-
  Automatically turn on the light on toilet with a Motion Detector Kit in the night.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Power Controller Kit
idea: true
image_preview: /projects/toilet-night-lamp/preview.jpg
image_main: /projects/toilet-night-lamp/preview.jpg
author: martin_hubacek
featured: true
---

Motion detector turns on the LED strip so you don't have to turn on and off night main lights. Also this LED Strip light can be made very dim, so you will not be woken up by the bright light.

### Overview

Motion Detector Kit will send event to the BigClown Hub. Node-RED sends command to the Power Controller to set some dim light. After some set time the light will turn itself off. You can also set rules that only in niht the light will be turned on.

#### Hardware

* {{< shop "Power Controller Kit" >}}
* {{< shop "Motion Detector Kit" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED with rules to run the light

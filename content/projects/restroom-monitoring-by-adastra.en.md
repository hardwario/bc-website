---
title: Restroom Monitoring by ADASTRA
draft: false
date: 2018-12-10T12:09:34.786Z
description: >-
  Analyze how much the restrooms are busy and when they are free.
tags:
  - Outdoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/restroom-monitoring-by-adastra/preview.jpg
image_main: /projects/restroom-monitoring-by-adastra/main.jpg
author: martin_hubacek
---

Analyze if your restrooms are mostly empty or crowded. You can also uset this information to notifiy the offices or open-space that the restroom are empty.

### Overview

Motion Detector Kit will sense the movement. Tne number of motion detections is send every few minutes to the Raspberry Pi where the data can be analyzed. If there is no movement for some time, the restrooms are free. you can also add the door sensor so when there is motion and doors have not been opened, you can be sure that restroom is busy.

#### Hardware

* {{< shop "Motion Detector Kit" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED for notification rules


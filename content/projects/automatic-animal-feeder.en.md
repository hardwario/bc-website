---
title: Automatic Animal Feeder
draft: false
date: 2018-12-11T12:09:34.786Z
description: >-
  Teach your animal a trick to get what it likes. Triggered by a motion or a switch.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Power Controller Kit
idea: true
image_preview: /projects/automatic-animal-feeder/preview.jpg
image_main: /projects/automatic-animal-feeder/main.jpg
author: martin_hubacek
---

Animal can be trained to trigger some switch or movement sensor. Based on some rules the animal gets some tasty food. The period of food will be restricted to some amount per hour.

### Overview

Motion detector sends event to BigClown Hub, then Node-RED decides based on time of last movement event whenther the animal gets its food.

#### Hardware

* {{< shop "Power Controller Kit" >}}
* {{< shop "Motion Detector Kit" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED with rules to give food


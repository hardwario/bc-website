---
title: Table Tennis Scorekeeper
draft: false
date: 2018-12-10T12:09:34.786Z
description: >-
  Make cool effects and let the LED strip count the score for you. Use the buttons to increment the points and make a winner effect later on.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Button Kit
  - Power Controller Kit
idea: true
image_preview: /projects/table-tennis-scorekeeper/preview.jpg
image_main: /projects/table-tennis-scorekeeper/main.jpg
author: martin_hubacek
---

Make sure you don't miss any point. LED strip on teh table tennis will display current score of the game for you and your opponent.

### Overview

Every player has it's own Push Button. When you press the button then the event is send to the BigClown Hub, where the logic in Node-RED increments the value and sends number of lit LEDs to the Power Controller Kit.

Later when you reach enought points, the LED strips displays an effect with a custom colour of the winning player.

#### Hardware

* {{< shop "Power Controller Kit" >}}
* {{< shop "Push Button Kit" >}}
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED for counting the score and final effect


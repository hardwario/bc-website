---
title: Key Code Door Entry System
draft: false
date: 2018-12-10T12:10:34.786Z
description: >-
  Open the door by entering the key. You can also send the open command wirelessly over the network or with MQTT command.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/key-code-door-entry-system/preview.jpg
image_main: /projects/key-code-door-entry-system/main.jpg
author: martin_hubacek
---

This simple key code door opener can be extended by wireless capability. This way you can monitor who opened the door based on a code. You can also open the doors wirelessly over the network with Blynk or MQTT command.

### Overview

Keypad is connected to the Power Controller Kit. This kit reads the entered pin and enables the relay to open the door. By using wireless network it is possible to send the key wirelessly, compare it on the server and send appropriate command to open or lock the door. These entries could be also monitored and saved to the database for security reasons.

#### Hardware

* {{< shop "Power Controller Kit" >}}
* Matrix keypad
* {{< shop "BigClown Hub" >}}

#### Software

* Node-RED for entry control

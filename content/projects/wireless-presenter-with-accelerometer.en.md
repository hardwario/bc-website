---
title: Wireless Presenter with Accelerometer
description: "Move your slides with a wireless button, use accelerometer for gestures and use more buttons for more people if they cooperate"
idea: false
tags: ["Outdoor"]
levels: ["Advanced"]
places: ["Home"]
devices: ["Custom Kit"]
image_preview: /projects/wireless-presenter-with-accelerometer/preview.png
image_main: /projects/wireless-presenter-with-accelerometer/main.png
author: "martin_hubacek"

---

Move the slides in your presentation with a wireless button. Add gestures so you can control more than forward/back. Switch applications, play or stop music or video. If more people are presenting, they can each have it's own button.

### Overview

The wireless button press is sent wirelessly to the Radio Dongle connected to your computer. The script running in the background converts MQTT topics to the virtual keypresses.

#### Hardware

* {{< shop "Push Button Kit" >}}
* {{< shop "Radio Dongle" >}}

#### Software

* BigClown Playground on your computer
* Python script virtually pressing buttons based on MQTT messages

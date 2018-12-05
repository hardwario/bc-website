---
title: Sigfox Alarm with motion detection
description: "Protect what is yours. No need for electricity or WiFi. This alarm can work for a year just on batteries and instantly let you know about moving objects."
idea: false
tags: ["Indoor"]
levels: ["Advanced"]
places: ["Home"]
devices: ["Custom Kit"]
image_preview: /projects/sigfox-mini-alarm/preview.png
image_main: /projects/sigfox-mini-alarm/main.png
author: "martin_hubacek"

---

There are places where is not electricity or WiFi. Also adding cables to the sensors is not cheap and easy. With this Sigfox alarm you just place it, configure and every movement is instantly reported. You can extend this project with a Sensor Module which can monitor doors and windows.

### Overview

The event is sent over Sigfox network to your server where you configure what to do next. You can get notifications, emails or SMS. With our Sigfox Module you get 3 years connectivity. It's open-source so you can extend this device with more contacts and sensors.

#### Hardware

* {{< shop "PIR Module" >}}
* {{< shop "Core Module" >}}
* {{< shop "Sigfox Module with Subscription of MySigfox Platinum Service for 3 Years" >}}
* {{< shop "Mini Battery Module" >}}
* Optional {{< shop "Sensor Module" >}}

#### Software

* Server or HTTP service running in Internet which on received event creates notification, e-mail or SMS

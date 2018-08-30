---
date: "2018-08-30"
title: "Pulse Width Modulation Library"
description: "Control LED brightness and servo motors with pulse width modulation."
images:
    preview: "preview.png"
    main: "main.png"
author:
    name: "Martin Hubáček"
    post: "Firmware Designer"
    email: "martin.hubacek@hardwario.com"
    image: "martin.jpg"
---

Hello, we have published [**PWM library**](http://sdk.bigclown.com/group__bc__pwm.html) in the latest **BigClown SDK**.

Pulse Width Modulation (PWM) is a method to create analog-like signal from the microcontroller digital output. It will achieve that by fast toggling of the pin with different ratio of logic **HIGH** and **LOW**. This ratio is called **duty cycle**.

This PWM signal can be used to set brightness when connected to some low power LED. With a proper power driver you can drive lots of power LEDs and LED strips. You can have up to 9 separate PWM channels.

By configuring the period and duty cycle, you can also control up to 9 servo motors.

For more information please see the [**How to: PWM**]({{<relref "doc/firmware/how-to-pwm.md">}}) article in the Learn section.

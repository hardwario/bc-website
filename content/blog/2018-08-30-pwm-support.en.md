---
date: "2018-08-30"
title: "Servo Motor and PWM Library"
description: "Control servo motors and LED brightness with pulse width modulation."
image_preview: "preview.png"
image_main: "main.png"
author: "martin_hubacek"
---

Hello, we have published [**PWM library**](http://sdk.bigclown.com/group__bc__pwm.html) and [**servo motor library**](http://sdk.bigclown.com/group__bc__servo.html) in the latest **BigClown SDK**.

Pulse Width Modulation (PWM) is a method to create analog-like signal from the microcontroller digital output. It will achieve that by fast toggling of the pin with different ratio of logic **HIGH** and **LOW**. This ratio is called **duty cycle**.

This PWM signal can be used to set brightness when connected to some low power LED. With a proper power driver you can drive lots of power LEDs and LED strips. You can have up to 9 separate PWM channels.

By using `bc_servo` library you can connect a servo to the digital output and set the servo motor angle. You can use up to 9 servo motors.

For more information please see the [**How to: PWM**]({{< relref "/doc/firmware/how-to-pwm.en.md">}}) and [**How to: Servo motor**]({{<relref "/doc/firmware/how-to-servo-motor.en.md">}}) articles in the Learn section.

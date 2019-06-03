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
idea: false
image_preview: /projects/toilet-night-lamp/preview.jpg
image_main: /projects/toilet-night-lamp/preview.jpg
author: martin_hubacek
featured: true
modules: ["core","power","pir","led"]
---

## Introduction
I went to the bathroom yesterday night and I couldn't find the light switch. After I found it I was blinded by the strong light bulb that I have there. So I decided that I will make a more comfortable solution.

I made smart Motion controlled Night lamp with BigClown and Node-RED.

Now I just walk into my bathroom and lights are on. I can adjust the color and brightness of the light so it is not as aggressive as a normal light bulb. It triggers after a specific hour that I can change in Node-RED or Blynk any time.

## What you need

{{< modules >}}

## Step 1: Build Hardware
Connect Core Module and Power Module together last thing you need is PIR module that goes into Core Module Then connect 5V Power Adapter and LED strip to Power Module and that's it.

## Step 2: Flash firmware to Core module
Connect Core Module to your computer, open BigClown Playground and flash firmware onto it.

BigClown Playground also contains all the other functionality for pairing the wireless Core Module with the Radio Dongle on your computer. BigClown Playground also contains Node-RED with possibility to control this whole project. You can later use Raspberry Pi with BigClown Raspbian image that has all the things the BigClown Playground has - it's just running on Raspberry Pi.

## Step 3: Pair Node
You have to pair the wireless Core Module with Radio Dongle in your computer.

* Connect Radio Dongle to your computer
* In BigClown Playground go to Devices tab
* Choose the connected Radio Dongle from the list and click Connect
* Click Start pairing button
* Power up the Core Module by plugging DC Adapter to the Power Module
* The device will appear in the table with alias night-lamp:0
* Don't forget to stop pairing by clicking Stop pairing

## Step 4: Import Function
Open Node-RED in the Playground or Raspberry Pi and import this function in the Menu -> Import -> Clipboard. Do not forget to hit "Deploy" in the top right corner to apply the changes.

This flow is all set up for complete control of Night Lamp project. And ready for Blynk use. And you don't have to worry about the power outage, it saves all needed variables.

## Step 5: Blynk integration
This project is ready for Blynk integration. How to set up blynk with your BigClown Playground is described here. Start from step 2 and in step 4 scan QR code that is shown below.

Everything in Blynk project is connected to Dashboard in BigClown Playground so you can control it from both applications without any problems.

You can set brightness, color and the time for how long it will stay up after last movement was registered by the device. Also you can set when it will start registering movements and when it stops.

## Summary
You can take this project and use it at more places so you won't have to bother with any light switches at night, it will turn on and off automaticaly.

---
title: Smart Alarm System
draft: false
date: 2018-12-10T12:06:34.786Z
description: Make an affordable but smart Alarm system for your home, or any of your buildings. It can run for almost 2 years just from batteries.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: false
image_preview: /projects/smart-alarm-system/preview.jpg
author: martin_hubacek
modules: ["core","mini_battery","pir","enclosures-101"]
---
## Introduction

Make an affordable but smart Alarm system for your home, or any of your buildings. It can run for almost 2 years just from batteries.

My cabin was robbed recently, thankfully I didn't have many things there yet. But I decided that I will make some alarm system, I wanted something affordable and reliable, so I used BigClown Motion Detector Kit, it uses radio, and it runs on batteries.

I can turn my alarm on/off from my phone, so if someone is there when nobody should be I get a quick notification to my phone.

## What you need

{{< modules >}}

## Step1: Build Hardware

Connect Core Module with your Mini Battery Module, then connect PIR Module to it.

![BigClown Modules](https://res.cloudinary.com/lukasfabik/image/upload/v1559587359/projects/smart-alarm-system/image_3LoBtGnNdW.png.jpg "BigClown Modules")

![BigClown Motion Kit](https://res.cloudinary.com/lukasfabik/image/upload/v1559587358/projects/smart-alarm-system/img_1339_ywiLqhFjb8.jpg "BigClown Motion Kit")

## Step 2: Flash firmware

Connect Core Module to your computer, open BigClown Playground and flash firmware onto it.

![How to flash BigClown Core Module](https://res.cloudinary.com/lukasfabik/image/upload/v1559587359/projects/smart-alarm-system/image_ZQkx3FuIoK.png.jpg "How to flash BigClown Core Module")

## Step 3: Pair Core Module

* Connect Radio Dongle to your computer
* In BigClown Playground go to Devices tab
* Choose the connected Radio Dongle from the list and click Connect
* Click Start pairing button
* Power up the Core Module by plugging it into the computer or by inserting the batteries
* The device will appear in the table with Alias burglar-alarm:0
* Don't forget to stop pairing by clicking Stop pairing

![Playground - pairing modules](https://res.cloudinary.com/lukasfabik/image/upload/v1559587358/projects/smart-alarm-system/image_2YQdmTueMy.png.jpg "Playground - pairing modules")

![Correctly Paired BigClown node](https://res.cloudinary.com/lukasfabik/image/upload/v1559587358/projects/smart-alarm-system/image_K6rRKHxr1D.png.jpg "Correctly Paired BigClown node")

## Step 4: Import function

Open Node-RED in Playground (Functions tab) or on your Raspberry Pi and import this simple function. Just copy everything, go to Menu -> Import -> Clipboard and paste it there. With this function you can control Alarm state through Dashboard with simple switch.

![Import NODE-RED functions](https://res.cloudinary.com/lukasfabik/image/upload/v1559587358/projects/smart-alarm-system/image_MTEa4c8wwN.png.jpg "Import NODE-RED functions")

You can chage the message that will pop up on the notification in the message function.

After Import hit Deploy in the top right corner to upload the change.

## Step 5: Blynk integration

This project is ready for Blynk integration. How to set up Blynk with your BigClown Playground is described here. Start from step 2 and in step 4 scan the QR code that is shown below.

![QR code for Blynk Application](https://res.cloudinary.com/lukasfabik/image/upload/v1559587358/projects/smart-alarm-system/image_zeNVpkYDqg.png.jpg "QR code for Blynk Application")

This blynk application sends you notifications when there is movement and the alarm is on. You can also add your camera to it so you see who is triggering the alarm and maybe take a photo of him as an evidence.

## Step 6: Place your alarm

Put your alarm behind your doors, or anywhere where it can see the potential burglar and set it on. Everything else is done.

## Summary

Finished device also sends temperature every few seconds, so you can use it as a thermometer at your cabin or house, just add some graph into NODE-Red flow.

You can simply connect this device with your other devices, so it sets the lights on in the house, start a siren or anything else that comes to your mind, maybe it will scare the burglar off.

If you have a bigger building you can use multiple of these devices. It is easy to update the NODE-Red function so they work together.

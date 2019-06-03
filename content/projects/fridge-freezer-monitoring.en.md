---
title: Fridge/Freezer Monitoring
draft: false
date: 2018-12-10T12:06:34.786Z
description: >-
  Get notified when your freezer is freezing too much, when the doors are left opened for a long time or when it broke down or electricity is cut off.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Custom Kit
idea: true
image_preview: /projects/fridge-freezer-monitoring/preview.jpg
image_main: /projects/fridge-freezer-monitoring/preview.jpg
author: martin_hubacek
featured: true
idea: false
modules: ["core","mini_battery","lcd"]
---

## Introduction
Set ideal temperature in your fridge or freezer. Freezing too much is unnecessarily and costs you more money. Over-freezing you fridge is not good for your food and power saving, with this fridge monitor, you will always know the temperature in there.

## Story
My roommate sometimes leaves the doors to the fridge open, so the fridge has big power consumption and it makes the frosting. I put my smart Fridge monitor in there so I always know about the temperature in there and also get a notification if he leaves it open for too long.

I used BigClown technology, they already have firmware that is suited for this solution, so I just customised flow in the NODE-Red and it was all set up. My device runs just on two AAA batteries.

## What you need
For this project you should have prepared BigClown Hub and this modules:

{{< modules >}}

## Step1: Build Hardware
Connect Core Module with your Mini Battery Module, then connect Climate Module to it.

## Step 2: Flash firmware
Connect Core Module to your computer, open BigClown Playground and flash *bcf-radio-fridge-monitor.bin* firmware onto it.

## Step 3: Pair Core Module
* Connect Radio Dongle to your computer
* In BigClown Playground go to Devices tab
* Choose the connected Radio Dongle from the list and click Connect
* Click Start pairing button
* Power up the Core Module by plugging it into the computer or by inserting the batteries
* The device will appear in the table with Alias fridge-monitor:0
* Don't forget to stop pairing by clicking Stop pairing

## Step 4: Import function
Open Node-RED in Playground (Functions tab) or on your Raspberry Pi and import this simple function. Just copy everything, go to Menu -> Import -> Clipboard and paste it there.

After Import hit Deploy in the top right corner to upload the change.

In this function you can change the message that will appear when the doors are open for too long. You can also change the time before you are notified that they are still open. Go to Open doors checker function and change the marked value. Time will be the value times 5 seconds.

## Step 5: Blynk integration
This project is ready for Blynk integration. How to set up Blynk with your BigClown Playground is described here. Start from step 2 and in step 4 scan the QR code that is shown below.

QR code for blynk application
QR code for blynk application
In this blynk application, you see the temperature in your fridge and get a notification when the fridge is opened for too long, also if the led is on the fridge is still open.

## Step 6: Insert your device to the fridge
Just put your device into the fridge and let the temperature settle down, after a while you will see the correct numbers.

## Summary
If you have everything done you can get one of the 3D printed enclosures. You can also put this device into the freezer, it can handle sub-zero temperatures.

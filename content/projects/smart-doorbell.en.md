---
title: Smart Doorbell
description: "Don't miss any visitors when you are in garden, listening loud music or away from your home"
idea: false
tags: ["Outdoor"]
levels: ["Advanced"]
places: ["Home"]
devices: ["Custom Kit"]
image_preview: /projects/smart-doorbell/preview.jpg
image_main: /projects/smart-doorbell/preview.jpg
author: "martin_hubacek"
featured: true
idea: false
modules: ["core","mini_battery","button"]

---

## Introduction

The wireless Push Button Kit will be located at your main door. The button press information is send wirelessly to the Radio Dongle in Raspberry Pi which will notify you over Blynk.

## What you need
For this project you should have prepared BigClown Hub and this modules:

{{< modules >}}

## Step 1: Step: Get all hardware together
Prepare everything you will need on your table, plug you Radio Dongle into your Raspberry Pi or into any computer that you have. Connect Core Module with your Mini Battery Module and the Button Module.

## Step 2: Flash firmware
Connect Core Module to your computer, open BigClown Playground and flash firmware onto it.

## Step 3: Pair Core Module
* Connect Radio Dongle to your computer
* In BigClown Playground go to Devices tab
* Choose the connected Radio Dongle from the list and click Connect
* Click Start pairing button
* Power up the Core Module by plugging it into the computer or by inserting the batteries
* The device will appear in the table with Alias smart-bell:0
* Don't forget to stop pairing by clicking Stop pairing

## Step 4: Import function
Open Node-RED in Playground (Functions tab) or on your Raspberry Pi and import this simple function. Just copy everything, go to Menu -> Import -> Clipboard and paste it there.

You can change the message that will appear in the notification. Just open Message Block and change the text.

After Import hit Deploy in the top right corner to upload the change.

## Step 5: Blynk integration
This project is ready for Blynk integration. How to set up Blynk with your BigClown Playground is described here. Start from step 2 and in step 4 scan the QR code that is shown below.

This is just a simple application with the notification module in it.

## Summary
If you have everything done you can get one of the 3D printed enclosures and put this smart doorbell instead of your ordinary doorbell switch.

You can also use Blynk video stream function and take photo when someone rings the bell.

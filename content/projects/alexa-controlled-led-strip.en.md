---
title: Alexa Controlled LED strip
draft: false
date: 2018-12-11T12:09:34.786Z
description: >-
  Use your voice commands to control BigClown programmable LED strip (Neopixel compatible) by Amazon Alexa and Raspberry Pi.
tags:
  - Indoor
levels:
  - Basic
places:
  - Home
devices:
  - Power Controller Kit
idea: false
image_preview: /projects/alexa-controlled-led-strip/preview.jpg
image_main: /projects/alexa-controlled-led-strip/preview.jpg
author: martin_hubacek
featured: true
modules: ["core","power","pir","led"]
---

## Introduction

Use your voice commands to control BigClown programmable LED strip (Neopixel compatible) by Amazon Alexa and Raspberry Pi.

Probably you've seen it many times - an LED strip controlled by some kind of infrared remote controller. But how cool would it be if you could build your own voice-enabled controller and be able to give it commands to change the colors or effects? Today we will learn how to build such a thing effortlessly.

For the task, we will use Amazon Alexa and BigClown IoT Kit. We will also need a programmable LED strip. You can get a good e.g. from Adafruit (Neopixels). I have placed my LED strip under the bed and it looks awesome - just check it out!

For the software part, we will be using Node-RED (this is where the main business logic goes) and Node-RED Alexa Home Skill Bridge project for communication between Alexa and Node-RED.

BigClown is an open-source software and hardware IoT platform with a nice documentation and well-designed firmware SDK. Node-RED is a Node.js flow-based programming interface - an excellent tool for your IoT projects. It has a huge community, constantly developing new plugins.

## What you need

{{< modules >}}

## Software Setup

### BigClown Playground

Install BigClown Playground desktop application to you computer (it runs on Windows, Linux and macOS). From this application, you can flash firmware, manage wireless devices (connected using Radio Dongle) and provide logic to them through Node-RED embedded inside this application (yes, it is completely self-contained).

### BigClown Hub

BigClown Playground is great for prototyping, but I want to keep my project running even if my computer is not on. For that purpose we have BigClown Hub - it is a Raspberry Pi with the BigClown Raspbian image running on it. BigClown Hub features a running web-server with application providing the same user interface as you get in BigClown Playground desktop application.

However, BigClown Playground is extremely useful even for the Raspberry Pi setup, because it allows you to find your Raspberry Pi on the network easily - it tells you about the discovered IP addresses on the network automatically and you can click on them to open the BigClown Hub web application in your browser right away.

Click on the IP address and open Functions in the browser (not in the BigClown Playground).

## Install Alexa Skill
Click on hamburger menu in top right corner > Manage palette > Install and search for node-red-contrib-alexa-home-skill, then click on the Install button.

Now you should see Alexa home and alexa home response in the alexa category.

## Setup Alexa
First you need to create an account on Node-RED Alexa Home Skill Bridge. Then install Alexa skill called Node-RED and login in the skill with your created account. That's about it for the Alexa installation requirements.

## Hardware
All you need for this project is mentioned in the beginning of this article. Core Module is the fundamental component running firmware and communicating wirelessly to the Radio Dongle connected to the Raspberry Pi.

The LED strip is plugged to the Power Module which is stacked below the Core Module.

In the next step, we need to flash a firmware to the Core Module - for that we will use Micro USB cable and the BigClown Playground desktop application.

Connect the Core Module to a USB port on your computer. Open the BigClown Playground, navigate to the Firmware menu item and search for this firmware:

bigclownlabs/bcf-radio-power-controller

Choose the right variant depending on the LED strip you got. It is -rbw144. Finally, click on the Flash firmware button.

## Make it works
Open the BigClown Hub in the browser (if you don't know the IP address, the BigClown Playground will tell it to you). Navigate to the Devices menu item. Click on the Start pairing button. Watch the video below to assemble the hardware components together:

Now your device will talk to the BigClown Hub and you will see it in the Devices section. Don't forget to click on the Stop pairing button.

Now you need create a virtual Alexa device. So login on Node-RED Alexa Home Skill Bridge with the created account from the previous chapter.

Navigate to the Devices item and click on the Add device button and fill it like in this example:


Now go to the desktop Alexa website. Navigate to Smart Home > Devices and click Discover. You should have your created virtual device in list. Now open your BigClown Hub in browser. Click on Functions and place alexa home node (we install it in previous chapter) to the flow.


Double click on it. You should be in settings. Now click on little pencil next to the account and log in with same login as you registred account on Node-RED Alexa Home Skill Bridge. Click on done and you would be able to see available device you created. Click done. Now open again hamburger menu > Import > Clipboard and place there following text:

Connect pasted nodes with alex home node.

Click the Deploy button and say: "Alexa, turn <device> to red". Place the LED strip anywhere you want and enjoy it!

## Final Thoughts
As you can see, it is quite straightforward to connect Alexa, Raspberry Pi, and LED strip together and control the lights by your voice commands. Moreover, this setup is flexible and extensible. My next idea would be controlling the LED strip also from the Blynk application, which enables fine-grained color selection using its ZeRGBa color palette component. But that is a stretch goal for the future article on Hackster.

If you like this project, don't forget to endorse it and please, let me know if you have any suggestions and/or ideas for further improvements.

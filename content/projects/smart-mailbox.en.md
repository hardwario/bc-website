---
title: Smart mailbox
description: "In a fraction of a second you will find out that the post office has arrived."
idea: false
tags: ["Outdoor"]
levels: ["Advanced"]
places: ["Home"]
devices: ["Custom Kit"]
image_preview: /projects/smart-mailbox/preview.jpg
image_main: /projects/smart-mailbox/preview.jpg
author: "martin_hubacek"
featured: true
modules: ["core","mini_battery","sensor"]

---

## Introduction
This completely turns around the frustration of not having the mail when you every day check your mailbox into an instant joy when you get notification and you can be sure something was delivered to you :)

This solution is wireless and low-power, so you need just attach it into your mailbox. Also with sensitive 868/915 MHz radio with FSK modulation if can communicate even through the metal box!

In the mailbox you can add up to 2 magnetic or mechanical switches. One switch for top insert lid, the other optional can be on the doors where you pick out the letters from the mailbox.

When the state of any of the switches change, the radio message is send from the Core Module to the Radio Dongle in you computer, server or any Raspberry Pi like single board computer. Then you can use our BigClown Playground or bc-raspbian image with all the necessary tools to create a simple logic in Node-RED that sends a push notification over Blynk app to your phone.

### What you need

{{< modules >}}

And magnetic or mechanical switch NO or NC (normally opened/closed)

## Step 1: Prepare Mailbox
You can use any mechanical or magnetic reed switch. It does not even matter if it is normally opened (NO) or normally closed (NC) switch, we can manage that later in the configuration.

Because drilling of the top lid hole was very time consuming, I've fixed the switches with two component epoxide. Less holes = less rust and also more waterproof :)

## Step 2: Build Hardware
You will need

* Radio Dongle
* Core Module
* Battery Module
* Sensor Module
* Switch / Magnetic switch
* You will need Windows, Linux or macOS computer.
Connect all the modules on top of each other so the Sensor Module's connector aligns with the hole in the enclosure. Otherwise you can connect modules in any order you'll like.

Do not put batteries inside yet, we do that later in pairing section.

## Step 3: Flash Firmware
Download BigClown Playground multiplatform GUI tool. This tool can flash firmware and also contains gateway for Radio Dongle and Node-RED where we later graphically set the notification rules.

* Connect Core Module to your PC and wait until the FTDI driver is installed
* Run the BigClown Playground
* Go to the Firmware tab and choose bcf-radio-door-sensor firmware
* Choose the correct serial COM port and press "FLASH FIRMWARE" button
* After flashing, the Core Module will turn on red LED for 2 seconds
See troubleshooting section or visit BigClown forum if something goes wrong

The Radio Dongle comes pre-flashed and is not necessary to flash it. If you like to flash it, disconnect the Core Module, connect Radio Dongle and flash it with bcf-gateway-usb-dongle firmware

## Step 4: Pair Node
You have to pair the wireless Core Module with Radio Dongle in your computer.

* Connect Radio Dongle to your computer
* In BigClown Playground go to Devices tab
* Choose the connected Radio Dongle from the list and click Connect
* Click Start pairing button
* Make sure Core Module is disconnected from USB, now insert the batteries
* The device will appear in the table
* Don't forget to stop pairing by clicking Stop pairing

You can switch to the Messages tab and press the switches, you should see MQTT messages from Door Sensor.

## Step 5: Add Function
First we start with Blynk. Install it to your Android or iPhone and create an account. Then follow the steps in the comments of the pictures below.

Open Node-RED in the Playground or Raspberry Pi and import the flow from this link in the Menu > Import > Clipboard.

Then double-click on the green "notify" Blynk node and configure the key by clicking the pencil icon in the Connection settings

Set the URL and secret Blynk token from your e-mail

Do not forget to hit "Deploy" in the top right corner to apply the changes.

## Step 6: The Postman Always Notifies Once
Now you can connect switches to the Door Sensor and test the switches. When you open the top lid, you will get notification.

In case the logic is reverse (notification when you close the lid), then edit the top yellow switch node and replace "false" with "true". The same applies for the optional second mechanical switch and second node switch.

n the Dasboard tab you can see a switch that displays if the mailbox has something in it (top lid was opened) or if it is emply (side doors opened).

## Final Thoughts
You can use your server or single board computer like Raspberry Pi and run the Playground on it, just flash BigClown Raspbian on your SD card or install BigClown Gateway and tools on any computer with Python.

The Core Module also sends temperature and battery voltage level, so you can also add this information to the Dashboard or Blynk.

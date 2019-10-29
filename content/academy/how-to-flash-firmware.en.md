---
title: 'Instal the right firmware, or “brain”, to your box'
draft: false
date: 2019-09-20T07:29:12.756Z
weight: 30
description: >-
  Without firmware, your IoT box won’t work properly. Thanks to this article you
  will understand what is firmware for and you will learn to set it up
  correctly.
slug: how-to-flash-firmware
meta_title: How to instal firmware in your BigClown
meta_description: >-
  Without firmware, your IoT box won’t work properly. Thanks to this article you
  will understand what is firmware for and you will learn to set it up
  correctly.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1568964869/academy/how-to-flash-firmware/project_placeholder.jpg
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1568964869/academy/how-to-flash-firmware/project_placeholder.jpg
---
Without firmware, your box won’t work properly. For different projects, you need different firmware, though. See how you can set up the box correctly.

![firmware](https://res.cloudinary.com/lukasfabik/image/upload/v1571663751/academy/how-to-flash-firmware/13-infografika-firmware.png)

## What is firmware?

Imagine firmware as a “brain” of things. 🤖 It’s a programme that controls the device. You can find it in all smart devices, even in those very simple ones, for example, in a traffic light. Even the car seats have firmware to make them heated.   The legendary BIOS that turns on and off your computer, is firmware. A very advanced firmware in the form of an operating system can be found in your smartphone, whether it’s Android, iOS or any other. 👌

A programmer can set up firmware according to their needs. For example, it can change the speed at which the green light blinks at a crossing. For work and firmware settings there is a computer programme (a software). In our kits, its the [Playground]({{< ref "/download/_index.en.md" >}}) programme. 🤡

Whether you are using [Starter Kit]({{< ref "/kits/starter-kit.en.md" >}}), [Climate Monitor Kit]({{< ref "/kits/climate-monitor.en.md" >}}), [Motion Detector Kit]({{< ref "/kits/motion-detector.en.md" >}}) or [other kits]({{< ref "/kits/_index.en.md" >}}), there is **pre-installed firmware** in the Core module in your kit. Thanks to the firmware, the box knows whether to measure temperature, monitor location or anything else.

**👉 That’s why you need different firmware for different projects. 👈**

**Every firmware always needs its hardware.** You can’t expect the device to start monitoring location if you don’t have a GPS module. It just doesn’t work. The box is missing a tool that enables it to monitor location. 🤷

**You can always find out which firmware you need - it will be written in instructions for a** [**particular project**]({{< ref "/projects/_index.en.md" >}}). 🤙

## Update / set up the correct firmware

When you buy the kit, the right firmware is already in it. But if you borrow the kit from a friend, there might be a different firmware than you need. 😭 Let’s see how you can **set up firmware for the basic use** (Starter Kit) or **for your specific projects**.  In the same way, you will download **the latest firmware version**, if you haven’t used the kit for a long time and want to update it.

You can update both the **USB Dongle** and the **Core module** from your kit.

## Download a firmware to the USB Dongle

1. Insert the **USB Dongle** into your computer and open the **Playground** programme. How else? 😅
2. In the Devices tab, you can see in the top field what your dongle is doing. Based on this, you will be able to tell if you have the right firmware or not. Now we want the **Radio Dongle** there.

![BigClown Playground USB dongle](https://res.cloudinary.com/lukasfabik/image/upload/v1566161114/academy/how-to-flash-firmware/image1.png "BigClown Playground USB dongle")

3. The green Connect button next to the field is lit but **don’t press it**. You don’t want to connect yet. If necessary, disconnect.
4. Now, you will be interested in the **Firmware** tab. Here you will find lots of firmware for various projects that you can upload to your device. 🕵️
5. Type “dongle” in the field and click on the **gateway usb dongle**. On the right, select “latest version”. You also update the firmware in the same way.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image7.png" alt = "BigClown Playground USB dongle firmware" >}}
6. A little lower, you can select **the right device** in the Device section. It’s the field that contains the bc-usb-dongle.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image4.png" alt = "BigClown Playground USB dongle flash firmware" >}}
7. Now click on the red **Flash firmware** button. This will download your programme. It will take a while, but then the sign _Done_ appears on the screen, and it’s done.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image2.png" alt = "BigClown Playground USB dongle firmware flashed" >}}

## Download firmware for your project to the Core module

1. Take your kit. For the update, you will need only the heart of the box, the **Core Module** board. It’s the red board with “Core module” written on it. 🙂
2. The Core module has a **Micro USB** connector at its end. Using a cable (such as the mobile phone charger one), **connect it to your computer’s USB port**.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161114/academy/how-to-flash-firmware/image3.jpg" alt = "BigClown Kit with Core Module" >}}
3. In the Firmware tab, select the right programme. For example, for the basic use of the Starter Kit you need the **radio push button**, for other projects, upload what is necessary.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image6.png" alt = "BigClown Playground Core Module firmware" >}}
4. Below that, **select the right device** in the Device section, the right field is the one containing bc-core-module.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161114/academy/how-to-flash-firmware/image5.png" alt = "BigClown Playground Core Module choose firmware" >}}
5. Download the programme by clicking the **Flash firmware** button.
6. Disconnect the cable.

<br/><br/>
🙌 **You got it right, if:**

* The whole time the **USB dongle is disconnected** in the Devices tab and nothing else is connected (the green Connect button is lit but you are not pressing it).
* When you connect the batteries to the Kit, the **LED** on the Core module flashes red briefly. (If you have multiple boards connected to the Core module, such as a button, you have to look from the side.) That means everything works just fine. ️🎉

Now you only have to pair your Dongle with the Core module, as usual.

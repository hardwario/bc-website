---
title: Temperature monitor for your dog’s kennel
draft: false
featured: true
handbook:
modules: ["core","button","mini_battery","usb_dongle"]
date: 2019-09-26T19:09:23.404Z
description: >-
  This is an IoT project which focuses on enhancing your digital skills. With
  the BigClown Starter Kit, you can set up a device that measures the
  temperature inside your dog´s kennel.
slug: Temperature-monitor-for-your-dog-s-kennel
meta_title: Temperature monitor for your dog’s kennel
meta_description: >-
  This is an IoT project which focuses on enhancing your digital skills. With
  the BigClown Starter Kit, you can set up a device that measures the
  temperature inside your dog´s kennel.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569525812/academy/what-is-dashboard/10-ilustrace-ma-pes-v-boude-dostatek-tepla.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569525812/academy/what-is-dashboard/10-ilustrace-ma-pes-v-boude-dostatek-tepla.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
kit: ["starter-kit","button-kit"]
---
## Introduction

{{< perex >}}
Is it so cold that you can’t even get the dog out? Want to find out what temperature is the most comfortable for your best friend? Then why not monitor the temperature in their kennel? 🐶
{{< /perex >}}

This project teaches you how to **measure temperature with IoT and display it on a chart**. All you need is the basic BigClown [Starter Kit](https://shop.bigclown.com/starter-kit/). Hopefully your dog will reward you for your efforts with less unsightly mess, or something like that. 🐩

{{< modules >}}

## Prepare the box

1. Put the Starter Kit together and pair it. If you are doing this for the first time, [we’ve prepared a simple guide]({{< ref "/handbook/_index.en.md" >}}) for you. You need the **radio-push-button** firmware for the Core Module. If you don't know how to download the firmware or what it is, [you can find out more here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
2. The temperature changes are displayed in the **Messages** tab in Playground.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image5.png" alt = "MQTT messages" >}}

## Set up Node-RED

1. Start programming in Node-RED. Firstly, click the **Functions** tab in Playground.
2. From the Input section, take the light purple **MQTT** node (bubble) and place it onto the empty desktop.
3. Double-click the node. In the **Topic** line specify what you want the colour indicator to display. This now represents temperature. Copy the temperature message from the Messages tab (without a number) to the line. Alternatively, use this:


```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image1.png" alt = "MQTT topic" >}}

Confirm by clicking the **Done** button.

4. Next to the MQTT node place a second one, this time a blue **Chart** node. This node can be found in the Dashboard section. This node is used to determine how the measured temperature is displayed on screen. Link both nodes together. 👌

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image4.png" alt = "Node-RED dashboard chart" >}}

5. Double-click on the Chart node. In the **X-axis** line, you can set the period of time the data in the chart will be displayed. This can be as long as you like, you choose.
   In the **Label** line, give your chart a name.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image3.png" alt = "Chart settings" >}}

Confirm by clicking the **Done** button.

6. Now click the **Deploy** button 🚨 in the top right corner to get everything up and running.

❗ **Beware**: Every time you change the nodes you have to press Deploy again.

7. Click on **Dashboard**. Your temperature chart will be displayed. 👏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image2.png" alt = "Temperature chart from kennel" >}}

## Time for action!

1. Using duct tape, stick the box **to a wall inside your dog´s kennel**. 🏡
2. Watch **how the temperature changes** when your dog is inside and outside the kennel. When your dog is inside, they warm up the kennel a bit. 🐕
   **Tip:** When temperatures drop, put down a blanket or some straw.
3. If it is -15 °C outside, don´t wait, **let your dog inside the house**, at least in the hallway!❄
4. Your reward? **A very happy dog**! 👌

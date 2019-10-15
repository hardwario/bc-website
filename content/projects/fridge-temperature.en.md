---
title: Temperature monitor for your fridge or freezer
draft: false
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook:
date: 2019-09-26T13:58:29.753Z
description: >-
  This is an IoT project which focuses on enhancing your digital skills. With the BigClown Starter Kit, you can set up a device that measures how cold it is in your freezer.
slug: fridge-temperature
meta_title: Temperature monitor for your fridge or freezer
meta_description: >-
  This is an IoT project which focuses on enhancing your digital skills. With the BigClown Starter Kit, you can set up a device that measures how cold it is in your freezer.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569507867/projects/fridge-monitoring/8.ilustrace-zjisttim-jak-velka-zima-je-v-lednici.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569507867/projects/fridge-monitoring/8.ilustrace-zjisttim-jak-velka-zima-je-v-lednici.png
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
Do you think it's the same temperature in different places in your fridge or freezer? And how's the freezer functioning, is it freezing properly? Discover the answers to these questions through our IoT project. Using the BigClown Starter Kit, the temperature will be displayed on your mobile phone. ❄
{{< /perex >}}

This project will teach you how to **measure temperature using IoT**. All you need is the basic BigClown [Starter Kit](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Prepare the box

1. Put the Starter Kit together and pair it. If you are doing this for the first time, [we’ve prepared a simple guide for you]({{< ref "/handbook/_index.en.md" >}}). You need the **radio-push-button** firmware for the Core Module. If you don't know how to download the firmware or what it is, you can  [find out more here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
2. The temperature changes are displayed in the **Messages** tab in Playground.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image4.png" alt = "BigClown Playground MQTT messages" >}}

## Set up Node-RED

1. To see temperature changes, create your own chart using the bubbles in Node-RED. Firstly, click the **Functions** tab in Playground.
2. From the Input section, take the light purple **MQTT** node (bubble) and place it onto the empty desktop.
3. Double-click the node. In the **Topic** line specify what you want the colour indicator to display. This now represents temperature. Copy the temperature message from the Messages tab (without a number) to the line. Alternatively, use this:


```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image2.png" alt = "Node-RED dashboard chart" >}}

Confirm by clicking the **Done** button.

4. Next to the MQTT node place a second one, this time a blue **Chart** node. This node can be found in the Dashboard section. This node is used to determine how the measured temperature is displayed on screen. Link both nodes together. 👌

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image5.png" alt = "Node-RED chart settings in BigClown Playground" >}}

5. Double-click on the Chart node. In the **X-axis** line, you can set the period of time the data in the chart will be displayed. This might be, for example, for the duration of your classes.
   In the Label line, give your chart a name.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image1.png" alt = "Chart in BigClown Playground" >}}

Confirm by clicking the **Done** button.

6. Now click the **Deploy** button 🚨 in the top right corner to get everything up and running.
   ❗ **Beware**: Every time you change the nodes you have to press Deploy again.
7. Click on **Dashboard**. Your temperature chart will be displayed. 👏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image3.png" alt = "MQTT topic" >}}

## Measure as you please

1. Now run your **own experiments**. Which place **in your fridge** is the coldest? Is it in the top, the middle, or the very bottom? 👌
   Is the fridge really cooling **as promised by the manufacturer**? 🕵️
2. Try the same **in your freezer**. Move the box from the bottom to the top.
   ❓ Try to figure out where to put vegetables, meat or milk. Google what foods need to be kept colder than others. 💡

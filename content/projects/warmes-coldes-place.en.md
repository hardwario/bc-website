---
title: 'IoT game for the whole class: Measure the temperature in your school'
draft: false
featured: true
handbook: starter-kit
date: 2019-10-13T15:25:02.143Z
description: >-
  One of the IoT projects to enhance digital skills. With the BigClown Starter
  Kit, build a device that will help you find the coolest and hottest place in
  your school.
slug: the-coolest-and-the-hottest-place
meta_title: 'IoT game for the whole class: Measure the temperature in your school'
meta_description: >-
  One of the IoT projects to enhance digital skills. With the BigClown Starter
  Kit, build a device that will help you find the coolest and hottest place in
  your school.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1570982870/projects/wormest-coldest-place/7-ilustrace-zmer-nejteplejsi-misto-ve-skole.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1570982870/projects/wormest-coldest-place/7-ilustrace-zmer-nejteplejsi-misto-ve-skole.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
modules: ["core","button","mini_battery","usb_dongle"]
---
## Introduction

{{< perex >}}
 This project will reveal all the secrets of your school, whether someone hunts ghosts or just wants to find a hot place for their next date. Measure the temperature at different spots of your school with your classmates and try to be the one to discover the biggest extreme. 😱
{{< /perex >}}

With this project you will learn to **measure temperature with IoT and display it on your mobile**. All you need is the basic Big Clown kit, the [Starter Kit](https://shop.bigclown.com/starter-kit/).

**Suggest the game to a physics teacher** to add some excitement to the lesson or go for it with your friends after school.

**This game is all about winning.** Who finds the coolest or hottest place in school is **the king!** 👑 If there are several boxes in your class, either work individually or in  small groups. If you have only one, take turns.

{{< modules >}}

## Get your box ready

1. Put together the Starter Kit and pair it: if you are doing it for the first time, [we have prepared a simple guide here]({{< ref "/handbook/_index.en.md" >}}). For the Core Module, you need the **radio push button** firmware. If you don’t know how to download the firmware or what it is, [you will find out here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
2. You can see the temperature changes in the **Messages** tab in the Playground.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image10.png" alt = "MQTT messages in BigClown Playground" >}}

## Set up the Node-RED

1. Set your own indicator to record the lowest or highest temperature. On your computer, start with the bubbles in the [Node-RED]({{< ref "/academy/what-is-node-red.en.md" >}}). First, click on the **Functions** tab in the Playground.
2. Place the light purple node (a bubble) named **MQTT** in the empty desktop.  You can find the node in the Input section.
3. Double-click on the node to open it. In the **Topic** line you will specify what you want the colour indicator to display. Now it will be temperature. Therefore, copy the message with temperature from the Messages tab (without a number) into the field. Or just use this one:


```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image9.png" alt = "MQTT input topic" >}}

Confirm it with the **Done** button.

## Get the app started on your mobile

1. The box connects to your smartphone thanks to the **Blynk app**. 📱 [**Find out how to deal with Blynk**]({{< ref "/academy/how-to-connect-blynk.en.md" >}}).
2. Select **Gauge** (indicator) from the menu. So far, it looks like this:

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image6.png" alt = "Blynk - gauge" >}}
{{< /middle >}}

3. Double-click on the gauge. It will open its settings. Tap on the **PIN** button.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image4.png" alt = "Blynk - set virtual pin" >}}
{{< /middle >}}

4. The PIN setup will open. Select **Virtual** and choose **any number** you want on the right. Remember it for later.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image2.png" alt = "Blynk - set virtual pin" >}}
{{< /middle >}}

Confirm it with the **OK** button.

5. Besides the PIN button, set **from how many degrees to how many degrees** the chart will show the temperature. Make it generous, for example, try -30 to 45 °C.
   In the line below next to the text, type the /**pin**/ unit, which will show after measurement: **°C**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image8.png" alt = "Blynk - set range of values" >}}
{{< /middle >}}

6. Go back to the chart with the arrow and just click the **Play** triangle in the upper right corner.

## Connect your mobile with the box

1. Go back to your computer. In the Node-RED, add the **dark green Write node** behind both nodes. You can find it on the left, under the Blynk ws section.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png" alt = "Node-RED Blynk write" >}}

2. Open the node by double-clicking. You’ll see a **small pencil** on the right. Click on it and a new window will open. In the **Auth Token** field, copy the token you have sent to your email. Into the **URL** field, copy the Blynk Cloud Server from the bottom window: `ws://blynk-cloud.com/websockets`

Confirm the setting with the **Add** button. But don’t leave the node just yet. 👈

3. In the **Virtual Pin** line, write the number you chose as a PIN in Blynk. Do not use the letter “V”.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image7.png" alt = "Node-RED Blynk set pin" >}}

Confirm it with the **Done** button.

4.  Now **connect both nodes** and click on the red **Deploy** button at the top right. 🚨

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png" alt = "Connect Blynk" >}}

##  One-up your class

1. Alone or in a group, **guess which place might be the hottest or coolest at school**.🔥 ⛄
2. Each individual or a group has **only 15 minutes** to explore. 🔦 Let’s make it exciting.
3. Take the box to the spot and **watch the temperature on your mobile**. It may take some time for the temperature to show in the gauge.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image3.png" alt = "measure temperature and show in Blynk" >}}
{{< /middle >}}

4. Try several places and in the end, call the most extreme results. **Congrats to the winners!** 🎇

---
title: Do you have a dragon's fire or an arctic wind in you?
meta_title: Do you have a dragon's fire or an arctic wind in you?
meta_description: This is an IoT project which focuses on enhancing your digital skills. With the BigClown Starter Kit, you can set up a device to measure the temperature of your breath and that of your friends. What do you need to do to win?
slug: dragons-fire
draft: false
date: 2019-08-12
description: This is an IoT project which focuses on enhancing your digital skills. With the BigClown Starter Kit, you can set up a device to measure the temperature of your breath and that of your friends. What do you need to do to win?
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
image_preview: /upload/soutez-s-kamarady-o-nejteplejsi-vydech.png
image_main: /upload/soutez-s-kamarady-o-nejteplejsi-vydech.png
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook:
kit: "starter-kit"
---

{{< perex >}}
Have fun with your friends with IoT. Which of you has the hottest or coldest breath? You decide what will help you win. As they say, anything goes!😱
{{< /perex >}}

This project teaches you how to **measure temperature with IoT**. All you need is the basic BigClown [Starter Kit](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Prepare the box

1. Put the Starter Kit together and pair it: If you are doing this for the first time,  we’ve prepared a [simple guide for you]({{< ref "/handbook/_index.en.md" >}}). You need the **radio push button** firmware for the Core Module. If you don't know how to download the firmware or what it is, [you can find out more here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
2. In Playground, open the **Messages** tab. Here you will see temperature changes. The temperature is measured automatically, either regularly after 15 seconds, or when there is a major change. And that is what we will use.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154531/projects/dragon-fire/image4.png" alt = "BigClown Playground messages" >}}

## Set up Node-RED

1. Messages may not be enough for you.✌️ Set up your own colour temperature indicator with the bubbles in Node-RED. Firstly, click on the **Functions** tab in Playground.
2. From the Input section, take the light purple **MQTT** node (bubble) and place it onto the empty desktop.
3. Double-click the node. In the **Topic** line specify what you want the colour indicator to display. This now represents temperature. Copy the temperature message from the Messages tab (without a number) to the line. Alternatively, use this:


```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image3.png" alt = "MQTT topic" >}}

Confirm by clicking the **Done** button.

4. Next to the MQTT node place a second one, this time a blue **Gauge** node. This node can be found in the Dashboard section. This node is used to determine how the measured temperature is displayed on screen: as an indicator. Link both nodes together.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image1.png" alt = "Dashboard Gauge chart" >}}

5. Double-click on the Gauge node. In the **Type** line, set how the graph will be displayed (Gauge is best). In the **Range** line, adjust the minimum and maximum value of the indicator (try 0 and 50).

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image2.png" alt = "Gauge range settings Node-RED" >}}

Confirm by clicking the **Done** button.

**Tip**: In the **Label** line, rename your indicator.

6. Now click the **Deploy** button 🚨 in the top right corner to get everything up and running.

**❗ Beware:** Every time you change the nodes you have to press Deploy again.

7. Click on **Dashboard**. Your temperature indicator will be displayed. 😲

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image5.png" alt = "View gauge chart Node-RED dashboard" >}}

## Start the game with your friends

1. **Sit with your friends at a table.**
2. First of all, measure who's hiding their **dragons fire**. 🔥 **One by one breathe on the box**. All aids are allowed; try warming up your breath with what you have on hand. Go wild and try anything and everything. 🙌
❓ **Try**: What makes your breath warmer? Hot tea or chilli peppers?

3. After the first round, discover who has the **frostiest breath**. ❄ Who can cool their breath down the most?
❓  **Try:** What makes your breath colder? An ice cube or cool chewing gum?

4. **Write down the best results** and try to beat them the next time you play.

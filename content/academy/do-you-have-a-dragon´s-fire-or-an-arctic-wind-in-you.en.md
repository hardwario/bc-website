---
title: Do you have a dragon´s fire or an arctic wind in you?
draft: true
date: 2019-09-21T08:58:56.363Z
weight: 60
description: >-
  This is an IoT project which focuses on enhancing your digital skills. With
  the BigClown Starter Kit, you can set up a device to measure the temperature
  of your breath and that of your friends. What do you need to do to win?
meta.title: Do you have a dragon´s fire or an arctic wind in you?
meta.description: >-
  This is an IoT project which focuses on enhancing your digital skills. With
  the BigClown Starter Kit, you can set up a device to measure the temperature
  of your breath and that of your friends. What do you need to do to win?
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569055976/academy/do-you-have-dragons-fire-or-an-artic-wind-in-you/image4.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569055975/academy/do-you-have-dragons-fire-or-an-artic-wind-in-you/image5.png
---
Have fun with your friends with IoT. Which of you has the hottest or coldest breath? You decide what will help you win. As they say, anything goes!😱

This project teaches you how to measure temperature with IoT. All you need is the basic BigClown [Starter Kit](https://shop.bigclown.com/starter-kit/). 

## Prepare the box

1. Put the Starter Kit together and pair it: If you are doing this for the first time,  we’ve prepared a simple guide for you. You need the **radio push button** firmware for the Core Module. If you don't know how to download the firmware or what it is, you can find out more here.  
2. In Playground, open the **Messages** tab. Here you will see temperature changes. The temperature is measured automatically, either regularly after 15 seconds, or when there is a major change. And that is what we will use. 

{{< image >}}    

## **Set up Node-RED**

1. Messages may not be enough for you.✌️ Set up your own colour temperature indicator with the bubbles in Node-RED. Firstly, click on the **Functions** tab in Playground.
2. From the Input section, take the light purple **MQTT** node (bubble) and place it onto the empty desktop.
3. Double-click the node. In the **Topic** line specify what you want the colour indicator to display. This now represents temperature. Copy the temperature message from the Messages tab (without a number) to the line. Alternatively, use this:  


```
node/push-button:0/thermometer/0:1/temperature
```

{{< image >}}    

Confirm by clicking the **Done** button.

4. Next to the MQTT node place a second one, this time a blue **Gauge** node. This node can be found in the Dashboard section. This node is used to determine how the measured temperature is displayed on screen: as an indicator. Link both nodes together.

{{< image >}}  

5. Double-click on the Gauge node. In the **Type** line, set how the graph will be displayed (Gauge is best). In the **Range** line, adjust the minimum and maximum value of the indicator (try 0 and 50). 

{{< image >}}  

Confirm by clicking the **Done** button.

**Tip**: In the **Label** line, rename your indicator.

6. Now click the **Deploy** button 🚨 in the top right corner to get everything up and running.

**❗ Beware:** Every time you change the nodes you have to press Deploy again.

7. Click on **Dashboard**. Your temperature indicator will be displayed. 😲  

{{< image >}}  

## Start the game with your friends

1. **Sit with your friends at a table.**
2. First of all, measure who's hiding their **dragon´s fire**. 🔥 **One by one breathe on the box**. All aids are allowed; try warming up your breath with what you have on hand. Go wild and try anything and everything. 🙌 

❓ **Try**: What makes your breath warmer? Hot tea or chili peppers?

3. After the first round, discover who has the **frostiest breath**. ❄ Who can cool their breath down the most?

❓  **Try:** What makes your breath colder? An ice cube or cool chewing gum?

4. **Write down the best results** and try to beat them the next time you play. 

##

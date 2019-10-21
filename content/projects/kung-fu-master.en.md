---
title: Which of your friends is a Zen Kung Fu Master?
draft: false
featured: true
handbook: starter-kit
date: 2019-10-19T21:10:07.445Z
description: >-
  Turn your Starter Kit from BigClown IoT into a motion detector using this
  simple guide. Don't forget to test it with your friends!
slug: Zen-Kung-Fu-Master
meta_title: Which of your friends is a Zen Kung Fu Master?
meta_description: >-
  Turn your Starter Kit from BigClown IoT into a motion detector using this
  simple guide. Don't forget to test it with your friends!
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571520683/projects/kung-fu-master/11-ilustrace-chlapec-v-pozici-stromu.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571520683/projects/kung-fu-master/11-ilustrace-chlapec-v-pozici-stromu.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
modules: ["core","button","mini_battery","usb_dongle"]
kit: ["starter-kit","button-kit"]
---
## Introduction

{{< perex >}}
With this game, there's no way you and your friends will get bored! Adjust your Starter Kit to recognise even the slightest movement.
{{< /perex >}}

This project will teach you how to create a so-called **still position detector**, i.e. motion **detector**. 👈

You only need a **box with a button** and a **USB dongle**.  That's why the basic BigClown [**Starter Kit**](https://shop.bigclown.com/starter-kit/) is perfect.

{{< modules >}}

## Download the firmware

1. If you haven't already done so, put the starter kit [together]({{< ref "/handbook/_index.en.md" >}}).
2. Load the special firmware, namely **bcf-radio-still-position-detector** (you´ll find it among the other firmware in Playground) onto the Core Module. This firmware will make the box much more sensitive to movement and measure time changes. 👌
   **Our Tip:** You don’t know how to download the firmware or what it is? [Find out more here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
3. [Pair Core Module with USB Dongle]({{< ref "/academy/how-to-pair-kit.en.md" >}}). After pairing has been completed, you will see that your Core Module has changed the Alias to **still-position-detector**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image5.png" alt = "Devices list in Playground" >}}

## Make it move in Node-RED

1. In Playground, click on the **Functions tab**, where the [Node-RED]({{< ref "/academy/what-is-node-red.en.md" >}}) programming area is.
2. Start as always by first placing the **MQTT** **node** from the Input section onto the desktop.

Double-click on it and copy it to the **Topic** line through which the box calculates the time spent in one position:

```
node/still-position-detector:0/hold-time
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image2.png" alt = "MQTT node and topic" >}}

Confirm by clicking the **Done** button.

3. You need to place another bubble on the desktop for the device to work. You can find it in the Dashboard section as **Text**. This node ensures that the result is recorded.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image4.png" alt = "Dashboard text Node-RED" >}}

4. Tap the Text node twice. In the settings, edit **Label**, by writing, for example, **Still time**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image6.png" alt = "Text settings" >}}

Confirm by clicking the **Done** button.

5. **Link both nodes** together. Don't forget to click the red **Deploy** button in the top right corner to get everything up and running. ****

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image3.png" alt = "Connect and Deploy" >}}

## Time for action!

You now have a motion detector and timer in your hand. Cool, or what? Give it a go!

1. **Press the button** on the box. **⏺️**
2. After a little while, **move the box**.
3. In the **Dashboard** tab in Playground, you will see **how much** time elapsed between the moment you pressed the button and made a move. Great job! 👍

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image1.png" alt = "Kung-Fu master timer" >}}

## Compete with your friends

1. **In different positions, challenge your friends** to find out **who can hold/carry the box for the longest without moving.** For example:
   * while standing on one leg;
   * holding the plank position;
   * while doing a handstand 🙃; or
   * any other way you can think of.
   Distracting your opponent is, of course, allowed, but don't touch! 🤡
2. **Write down the results.**
3. The person who has the best times on the most occasions is the **Zen Kung Fu Master!** 🙇

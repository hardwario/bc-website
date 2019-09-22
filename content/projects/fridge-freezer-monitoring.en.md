---
title: Catch the greedy snack thief in the act
draft: true
featured: true
handbook: catch-the-greedy-snack-thief
date: 2019-09-22T19:29:41.283Z
description: >-
  Using Starter Kit by BigClown, build an IoT guard to watch over your food in
  the fridge. We have prepared an easy-to-follow instructions to do that.
meta.title: Catch the greedy snack thief in the act
meta.description: >-
  Using Starter Kit by BigClown, build an IoT guard to watch over your food in
  the fridge. We have prepared an easy-to-follow instructions to do that.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569182179/projects/Catch-the-greedy-snack-thief-in-the-act/image1.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569182179/projects/Catch-the-greedy-snack-thief-in-the-act/image7.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
---
## Úvod

{{< perex >}}
You know this for sure. In the fridge, you keep the last piece of cake from your birthday party, but when you finally get to it… it's gone. And your greedy sibling has chocolate all over her chin. Stop her with the smart box! 🎂 
{{< /perex >}}

In this project, you will learn to make a **fridge opening detector.** 👈

All you need is the box with button and the USB dongle in the basic BigClown [Starter Kit](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

##  Download new firmware

1. If you haven't done it yet, [[put together](https://www.bigclown.com/academy/how-to-flash-firmware/)]({{< ref "/handbook/_index.cs.md" >}})the Starter Kit.
2. Upload a special firmware to Core Module - **bcf-radio-x-axis-detector** (you will find it among other firmware in the Playground). Thanks to this firmware, the box will become sensitive to movement.👌
   **Our tip:** You don't know how to download firmware or what it even is? [[You can find out here](https://www.bigclown.com/academy/how-to-flash-firmware/)]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).
3. \[Pair the Core Module with the USB Dongle]({{< ref "/academy/how-to-pair-kit.cs.md" >}}). Right after pairing it, you will notice that your Core Module has changed Alias to **x-axis-detector**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154098/projects/catch-the-mist/image8.png" alt = "BigClown Playground - devices" >}}

## Get it started in the Node-RED

1. In the Playground, click on the **Functions tab**, where is the programming desktop \[Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}).
2. Start as always: first place the **MQTT node** from the Input section on the desktop.


```
node/x-axis-detector:0/accelerometer/-/event-count
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image3.png" alt = "MQTT topic" >}}

Confirm it with the **Done** button.

3. Now, upload there a small javascript. 🙌 First, place the **Function node** from the section of the same name on the desktop...

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154098/projects/catch-the-mist/image7.png" alt = "Node-RED function" >}}

4. ...and then double-click on this node. **Copy the following code to the Function field**. This code will count how many times the fridge opened: 


```
var count = flow.get("count") || 0;
count++;
flow.set("count", count);
msg.payload = count;
return msg;
```

Name the node in the Label field, e.g. **Counter**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image6.png" alt = "Node-RED counter" >}}

Confirm it the the **Done** button.

5. Next to this node, place the last one - the **Text node** from the Dashboard section.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image6.png" alt = "Node-RED dashboard text input" >}}

6. Inside the node, change its Label to a text you want to see while it’s counting. It could be, for example, **Open fridge**. 

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154098/projects/catch-the-mist/image2.png" alt = "Node-RED dashboard text input label" >}}

Confirm it with the **Done** button.

7. **Connect all three nodes**, just as you can see in the picture. In the top-right corner, remember to click on the good old **Deploy** button which will start up the entire flow. 

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image1.png" alt = "Connect and deploy flow in Node-RED" >}}

## And… action! 

1. Let’s make the little trap work. **Put a cake or any other lure in the fridge**. 🍰
2. Place the box horizontally **into the door of the fridge**. 
3. When someone opens the door, the box will send you a notification to the **Dashboard** tab.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image5.png" alt = "Node-RED dashboard results" >}}

4. **Run to subdue the wicked villain! 👮**
5. And now enjoy your sweet victory. 💘

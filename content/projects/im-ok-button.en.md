---
title: Make an IoT button to send mom a message to her mobile
draft: false
featured: true
handbook: Make an IoT button to send mom a message to her mobile
date: 2019-09-26T18:35:32.430Z
description: >-
  How to make a smart button out of the BigClown Starter Kit. It will send a
  message to your mom that you have just arrived home, safe and sound.
meta_title: Make an IoT button to send mom a message to her mobile
meta_description: >-
  How to make a smart button out of the BigClown Starter Kit. It will send a
  message to your mom that you have just arrived home, safe and sound.
modules: ["core","button","mini_battery","usb_dongle"]
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569523883/projects/button-for-mum/9-ilustrace-notifikace-tlacitkem-ze-jsem-doma.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569523883/projects/button-for-mum/9-ilustrace-notifikace-tlacitkem-ze-jsem-doma.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
---
## Introduction

{{< perex >}}
Do your parents call you every day, asking if you got home from school? It’s a drag, but they simply worry about you. Make a button with which you can always send a simple message to their mobile. 📲
{{< /perex >}}

In this project, you will learn how **to use the button to send a message to your parents’ mobile**. 👩👱

You will need the **box with the button** and the **USB dongle**. You can do with the basic BigClown set, the [Starter Kit](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Get it started in the Node-RED

1. Put together the Starter Kit and pair it: if you are doing this for the first time, [we have prepared a simple guide here]({{< ref "/handbook/_index.en.md" >}}). For the Core Module, you need the **radio push button** firmware. If you don’t know how to download the firmware or what it is, [you will find out here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
2. In the Playground, click on the **Functions tab**, where you find the  Node-RED programming desktop.
3. Place a light purple bubble, or node, in the desktop. You will find it on the left as **Input** **MQTT**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image4.png" alt = "MQTT input node" >}}

4. Inside the node you will set up a key feature - which is pressing a button. Double-click on the node and **copy this line into the Topic field**:


```
node/push-button:0/push-button/-/event-count
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image8.png" alt = "MQTT topic" >}}

Confirm it with the **Done** button.

**Tip:** Instead of copying the line from here, you can simply copy the line that appears in the **Messages tab** after pressing the button.

## Set up your message

1. You can set up your message also here in the Node-RED. Drag the **yellow node from the Functions section called Change** anywhere next to the light purple MQTT input.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image7.png" alt = "Change Node BigClown Playground" >}}

2. Double-click on the node and write the message for your parents into the **Rules** field. Just be careful, Blynk doesn’t display any diacritics. Little inspiration:
   *  _Easy. I’m home and safe._
   * _A celebrity came to visit….just kidding, it’s me._
   * _I was bitten by dogs, kidnapped by a UFO, but I made it home._

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image6.png" alt = "BigClown Playground MQTT messages" >}}

Confirm it with the **Done** button and link both nodes by dragging the mouse from one bubble to the other. 🐁

## Set up an app on your mobile

1. Borrow a smartphone from your mom or dad and make it yet a bit smarter. 🤓 They must have the [**Blynk app**]({{< ref "/academy/how-to-connect-blynk.en.md" >}}) on their phone to be able to see your message.
2. Select **Notification** in the new project. The notification will be added to your desktop.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image1.png" alt = "Blynk Notify" >}}
{{< /middle >}}

3. Just press the **Play** triangle in the upper right corner and **return the mobile to your parents**.

## Connect the mobile with the box

1. Go back to your computer. On the Node-RED desktop, add the **dark green Notify node** behind both nodes. You can find it on the left in the Blynk ws section.
2. Open the node by double-clicking it. You’ll see a **small pencil** on the right. Click on it and a new window will open. In the **Auth Token** field, copy the token you have sent to your email. Copy Blynk Cloud Server from the bottom window into the **URL** field,  `ws://blynk-cloud.com/websockets`

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image3.png" alt = "Blynk Settings" >}}

Confirm the settings by pressing the **Add** and **Done** buttons.

3. **Connect the node and Blynk with the yellow node where you have set the message**. Now you have programmed the device so that pressing the button on the box ➡️ turns into a message ➡️ that goes all the way to your parents’ mobile. **👾**

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image5.png" alt = "Connect nodes in BigClown Playground" >}}

❗ Start and confirm the entire flow with the red **Deploy** button on the top right. 🚨

## And… Action!

1. Press the button. A **message popped** up on your parents’ mobile. 💪

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image2.png" alt = "Get Notification on Phone" >}}
{{< /middle >}}

2. Not only will your parents think you are gifted but you will also avoid their daily phone calls. 🎉 **And that’s just so smart, it must be IoT**. 🕺

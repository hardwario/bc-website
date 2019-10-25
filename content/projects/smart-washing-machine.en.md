---
title: Turn your old washing machine into a smart one
draft: false
featured: true
handbook:
date: 2019-10-19T09:09:28.576Z
description: >-
  Let your parents marvel. With the BigClown Starter Kit, build a detector to
  alert you when the washing is finished.
slug: smart-washing-machine
meta_title: Turn your old washing machine into a smart one
meta_description: >-
  Let your parents marvel. With the BigClown Starter Kit, build a detector to
  alert you when the washing is finished.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571601962/projects/smart-washing-machine/hardwario-ilustrace-ochytri-pracku.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571601962/projects/smart-washing-machine/hardwario-ilustrace-ochytri-pracku.png
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
Raise the IQ of your family washing machine. 🤖 Using the IoT box, programme a notification to let your parents know that the load has been finished.
{{< /perex >}}

In this project, you will learn to set up the box so that it recognizes when the washing machine is finished and sends a notification to the mobile. 📱 👈

All you need is the box with the button and the USB dongle. You will be all set with the basic BigClown kit - the [Starter Kit](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Download new firmware

1. If you haven’t done it yet, [put together]({{< ref "/handbook/_index.en.md" >}}) the Starter Kit.
2. Upload new firmware to the Core Module - **bcf-radio-washing-machine-monitor** (you will find it among other firmware in the Playground). Thanks to this firmware, the box will be more sensitive to vibrations of the washing machine. 🔃

**Our tip:** If you don’t know how to download the firmware or what it is, [you will find out here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).

3. [Pair the Core Module with the USB Dongle]({{< ref "/academy/how-to-pair-kit.en.md" >}}). Right after pairing it, you will see that your Core Module changed Alias to **washing-machine-detector**. 👌

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368246/projects/smart-washing-machine/image4.png" alt = "BigClown Playground devices list" >}}

## Get it started in the Node-RED

1. In the Playground, click on the **Functions tab**, where the [Node-RED]({{< ref "/academy/what-is-node-red.en.md" >}}) programming desktop is located. 🤖
2. Start as usual: first, place the **MQTT node** from the Input section on the desktop.

Double-click on it and copy **Topic** in the field. With this, the box will know when the washing machine stops shaking:

```
node/washing-machine-detector:0/washing/finished
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image2.png" alt = "Check alias of BigClown kit" >}}

Confirm it with the **Done** button.

3. Place the **Change node** from the Functions section next to it.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image3.png" alt = "Add change node to flow" >}}

4. Inside the Change node, **set up a message** that will be sent to your parents’ mobile after the washing is done. The message should be free of diacritics.
   Here’s a little inspiration:
       - There’s clean laundry for you.
       - I am finished. Do I get a week holiday now?
       - Done and leave me alone. Your washing machine.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image5.png" alt = "Set message to show" >}}

Confirm it with the **Done** button.

## Set up your mobile

1. It’s time to steal your mom’s or dad’s mobile and set up their own Blynk. If you don’t know how to do it yet, [**check out the instructions**]({{< ref "/academy/how-to-connect-blynk.en.md" >}}).
2. Create a **new project** in Blynk. Now a token has been sent to your email, but don’t do anything with it just yet.
3. On the Blynk desktop, **place the notification**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368247/projects/smart-washing-machine/image11.png" alt = "Add Blynk Notify widget" >}}
{{< /middle >}}

4. **Start the project** with the Play button at the top right.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image6.png" alt = "Set Blynk Notify widget" >}}
{{< /middle >}}

## Finish the programming

1. Go back to your computer. Place the last node, **Notify** from the Blynk ws section, on the Node-RED desktop.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368247/projects/smart-washing-machine/image9.png" alt = "Add Blynk Notify node" >}}

2. Double-click on the node. Then click on the **pencil**. ✏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image1.png" alt = "Blynk Connection settings" >}}

3. A window has opened for pairing with Blynk. Set the **URL** and the **Project Token** here. As always, you copy the URL from the bottom section of the image and receive the project token to your mailbox after creating a new project in Blynk.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image8_new.png" alt = "Blynk Connection settings" >}}

**Our tip:** In the Name field, set the **name** of the project to recognize it better.

Confirm everything with the **Add** and **Done** buttons.

4. All you have to do now is **connect** and send a command to the space with the red **Deploy** button on the top right. 👏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368247/projects/smart-washing-machine/image8.png" alt = "Deploy flow in Node-RED" >}}

## Give it a spin!

1. **Put the box on the washing machine.** Stick it with a small piece of tape to prevent it from falling.
2. **The box will recognize when the washing machine finishes**, because it will stop shaking.  It will send a message to your mom’s or dad’s mobile. Cool, huh? All of a sudden, you are **living in a smart household**! 🤡

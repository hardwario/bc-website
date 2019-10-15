---
title: Make an IoT button for your parents to call you to dinner
meta_title: Make an IoT button that will send a message to your mobile
meta_description: Instructions on how to make an IoT button from the BigClown Starter Kit for your mum to call you to dinner when you are in the middle of playing games.
draft: false
date: 2019-09-23
description: Instructions on how to make an IoT button from the BigClown Starter Kit for your mum to call you to dinner when you are in the middle of playing games.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /projects/button-for-mum/1-ilustrace-devce-pari-hru-ma-pauzu.png
image_main: /projects/button-for-mum/1-ilustrace-devce-pari-hru-ma-pauzu.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
kit: ["starter-kit"]
handbook: "starter-kit"
---

## Introduction

{{< perex >}}
You know the feeling. You are deep into playing games or listening to music at full blast so when your mum calls you to dinner, you have no clue.  Let’s make a smart button for your parents to be able to alert you over the mobile without screaming their head off.
{{< /perex >}}

In this project you will learn **how to use the button to send a message to a mobile** from anywhere in the house. 👌

You will need the **box with a button** and the **USB dongle**. So you will be fine with just the basic BigClown kit, the [**Starter Kit**](https://shop.bigclown.com/starter-kit/). If it´s the first time you are holding the Starter Kit box in your hands, [get familiar with it first]({{< ref "/handbook/_index.en.md" >}}).

{{< modules >}}

## Get it started in Node-RED

1. Put together the Starter Kit and pair it. For the Core module, you need the **radio push button** firmware. If you don’t know how to download the firmware or what it even is, you can find out more here.
2. Click on the **Functions tab** in the Playground. You will find there the Node-RED programming desktop. Here you can preset your box so it does anything you want.
**If you open the programme for the first time:** clear the desktop and delete all the preset nods with the Delete button.
3. Let's program now. 🤞 Place the light purple cell, or nod, on the Node-RED desktop first. You'll find it on the left side as **MQTT in the Inputs section**.

![Get it started in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image3.png "Rozjeď to v Node-RED")


4. In the node, you will set up the key feature - clicking on the button. Click on the node twice and **copy this link into the Topic field**:

```
node/push-button:0/push-button/-/event-count
```

![MQTT Topic](https://res.cloudinary.com/lukasfabik/image/upload/v1565632595/projects/button-for-mum/image9.png "MQTT Topic")

Confirm it with the **Done** button.

**Tip:** Do you see the **Messages** tab in the Playground? Here you see all actions, line by line. Click on the box - and ta-dah, the same thing appeared:
```
node/push-button:0/push-button/-/event-count
```
What does it mean? It means that next time you can copy lines into the Topic field from the Messages tab.

## Drop there your own message

1. The message can be also set up here in the Node-RED. Place **the yellow node called Change from the Functions section** anywhere next to the light purple MQTT input.

![Node-RED Change node](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image7.png "Node-RED Change node")

2. This Change nod alters the action. For example, it can send a message. Go wild and set up your own. A little inspiration:
	- Grub!
	- Feeding time
	- BFill your belly with real mana
	- My health potion has been cooked

You can do it by clicking the node twice and writing the message in the second line of the **Rules** field.

![Node-RED Change node edit](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image5.png "Node-RED Change node edit")

Confirm it with the **Done** button.

3. On the edge of each node you can see a small grey ball. When you click on it, hold it and move the mouse to the side, you will pull out a string from the node. That's how the nodes connect.
Try it out. **Connect both nodes** by dragging the mouse from one cell to the other. Easy peasy. 🙆


![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image6.png "Node-RED")

## Set up an app in your mobile

1. Your box with the button will be connected with a smartphone thanks to the Blynk app. And that´s pretty cool. 😎 Download **the Blynk app** from [App Store](https://apps.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481) or [Google Play](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Sign in or create an account.
2. Create a new project in the app: click on **New project**.
3. In  “Choose device”, choose the **BigClown IoT Kit**.
4. Confirm with clicking on the **Create** button. Now **a token** has been sent to your email. It's an electronic key to a project with which you can later connect to your phone from the computer.  For now though, stay in the app.  📱<br/><br/>
❓ **What if I didn´t get the token?** Check the spam folder. The email is not even there? Send it again. In the Blynk app, in the Project settings tab, you will see your auth token, and the **E-mail** button right under it. Click on it and check your mailbox one more time. 👋

5. **Click on** the black desktop in new project. There you will set up what is supposed to happen in the mobile after clicking on it.
6. Choose **Notification** from the menu. A notification will appear on your display.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image1.png" alt = "Blynk Notify" >}}
{{< /middle >}}

7. Now just click on **Play** in upper right corner.


## Connect your mobile with the box

1. Go back to your computer. On Node-RED desktop, add to both nodes **the dark green Notify node**. You will find it on the left side under the Blynk ws.
2. Double-click on it to open the node. You will see **a small pencil** on the right. Click on it and settings will open.
3. Copy the Blynk Cloud Server from the bottom window to the URL field.

```
ws://blynk-cloud.com/websockets
```

4. Copy the token you have sent to your email to the **Auth Token** field.

![Node-RED Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image2.png "Node-RED Blynk")

Confirm the settings with the **Add** and **Done** buttons, respectively.

5. **Connect Node and Blynk with the node in which you set the message**. Now you have programmed the device so the clicking on the box ➡️ changes into a message ➡️ that will get all to way to your mobile. 👾

![Node-RED Blynk integration](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image4.png "Node-RED Blynk integration")

❗ Start the flow and confirm it with the red **Deploy** button top right. 🚨

## Action!

1. Push the button and ...magic happens. 🎇 **The message displays on your mobile!** 🙌
2. Give the button to your mum. Isn't she amazed?  Family peace is restored before dinner starts. 🤓

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image8.png" alt = "Blynk - notification" >}}
{{< /middle >}}

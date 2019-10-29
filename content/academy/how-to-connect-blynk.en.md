---
title: How to connect BigClown with Blynk app
draft: false
date: 2019-09-20T19:08:04.789Z
weight: 59
description: >-
  In order for your IoT invention from BigClown to send you notifications to
  your mobile, you need to pair it with Blynk. Check out our simple guide.
slug: how-to-connect-blynk
meta_title: How to connect BigClown with Blynk app
meta_description: >-
  To tune up your IoT box programme to perfection, you can use the simple
  debugger that will get the kinks out. We will give you advice on how to set it
  up and get it started.
image_preview: /upload/mobile-phone.jpg
image_main: /upload/mobile-phone.jpg
---
Besides your computer, your smart IoT box gets along with your smartphone. 🤝 After the pairing, it sends notifications to it or displays graphs showing the temperature in your room. You will connect them using the Blynk app and in this article, we will show you how.

## Start in the playground

When you are creating your invention in the Playground, you will find several nodes in the **Functions** tab, that work with **Blynk** **ws** – they are marked as Blynk ws and they are all **dark green**.

When you link these nodes to the rest of your programme, you still need to pair them with your smartypants phone. 📱

{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159868/academy/how-to-connect-blynk/image2.png" alt = "Node-RED flow" >}}

We will show you how to connect the box with Blynk on the **Notify** node example, but don’t worry, the linking procedure is the same for all Blynk nodes.

## Set up your app on your mobile

1. You can download the **Blynk App** on your mobile from the [App store](https://apps.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481), or [Google Play](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Log in or set up an account. It’s the same as when you register for online games.
2. Create a new project in the app: click on **New project**.
3. Under Choose device, select the **BigClown IoT Kit** hardware.
4. Click on the **Create** button to confirm. Now you have been sent a token (or electronic key) to a project, which you can use to connect to your mobile from your computer. For now, however, stay in the app.📱

❓**What if I haven’t received the token?** Check your spam folder. You haven’t found it there either? Just send it again. In Blynk, in the Project settings tab, you will see your auth token and the **E-Mail** button bellow it. Click on it and check your mailbox again. 👋

5. Now you can **add various features** to Blynk by pressing anywhere on the black area of your new project. For example, if you want to receive messages after pressing the button on the box, select Notification. Once you have set the features, click on the **Play** triangle at the top right.

{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159867/academy/how-to-connect-blynk/image1.png" alt = "Node-RED setup Blynk" >}}

## Connect your mobile with the box

1. Go back to the computer. Double-click on the dark green node to open it in your programme.
2. You will see a **small pencil** on the right. Tap on it and a new window will open. In the **Auth Token** field, copy the token you have sent to your email. Copy the Blynk Cloud Server from the bottom window into the **URL** field:


```
ws://blynk-cloud.com/websockets
```

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159867/academy/how-to-connect-blynk/image3.png" alt = "Node-RED get Blynk notification" >}}
{{< /middle >}}

<br/>
Confirm the settings with the **Add** and **Done** buttons, respectively. And you are all set! 🎉

So you can’t wait to try the Blynk connection out? Screw the theory. [Jump head first to a specific project, get inspired and be creative!]({{< ref "/projects/_index.en.md" >}})

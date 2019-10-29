---
title: Learn how to programme in Node-RED
draft: false
date: 2019-10-13T07:07:42.950Z
weight: 40
description: >-
  You will give your BigClown kit commands in the Node-RED programming tool. It
  is amazingly intuitive and you will learn to work in it in just a few minutes.
  See for yourself.
slug: what-is-node-red
meta_title: Learn how to programme in Node-RED
meta_description: >-
  You will give your BigClown kit commands in the Node-RED programming tool. It
  is amazingly intuitive and you will learn to work in it in just a few minutes.
  See for yourself.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image4.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image4.png
---
In order for the box to obey your commands, you have to speak its language. And the BigClown box speaks the Node-RED programming language. But don’t worry, dictionaries and textbooks aren’t necessary here - you’ll learn to use it in just a few minutes. 💪

## What is Node-RED?

Node-RED is a simple **programming tool** in which you tell your box what to do and when to do it. It works on the flow-based principle. It’s a flow for a reason - all your commands flow like a river through the Node-RED. 🌊

In your [Playground]({{< ref "/academy/what-is-bigclown-playground.en.md" >}}) you will find the Node-RED in the **Functions** tab. When you click on it, you will see a list of so-called nodes on the left. **Nodes** represent individual actions that take place in your programme. For example, pressing a button, sending a message to a mobile or displaying a chart of ambient temperature.
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image4.png" alt = "Node-RED flow" >}}

One by one, you **drag nodes from the left menu** to the empty desktop in the middle of the window and **connect them** - in this simple way you create your entire programme. Click on the dot in the right or left of the node and drag it to another node as if you were connecting it with a string.

As soon as you activate one of the nodes - for example when you press the button on the box - all the features that you have connected to the node for pressing the button, will run, just like this:
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image5.png" alt = "edit node red flow" >}}

The purple node on the left means **pressing the button**. The yellow one that follows it is for **creating a message**. And the two that are connected to them are for **sending a message to a mobile** (the green one) and **reading a message out loud** (the blue one). Thanks to the node interconnection, all actions are performed step by step after pressing the button, and faster than in a second on a top of that!

When you click on any node with your mouse, its **settings** will open, where you can modify its further behaviour in different ways.

And that’s all you need to know to programme in the Node-RED. Being a programmer is a piece of cake, isn’t it? 🤓

### Nodes that you definitely need for your invention

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image7.png" alt = "MQTT node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p><strong>MQTT</strong> is the starting point of every programme.  You can set up what it is supposed to respond to (pressing the button on the box, change in temperature or turning the box), and when this happens, all nodes that are connected to the MQTT are activated.</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image3.png" alt = "Change node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p><strong>Change</strong> Try to imagine Change as a dressing room. The programme passes through it and changes into something else. For example, into a text message. It is then sent to other nodes that are connected to it and process it further, for example, they send it to a mobile phone or read the message out loud. </p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image2.png" alt = "Notify Blynk node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p>Node <strong>Notify</strong> node has a clear mission - to send a notification to a mobile. It will be displayed in the Blynk app. [Blynk]({{< ref "/academy/how-to-connect-blynk.en.md" >}}).</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image1.png" alt = "Chart node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p>When you connect the <strong>Chart</strong> node to your programme, you will see beautifully clear charts of various features of the box in the Dashboard tab. For example, how the ambient temperature has changed or how many times you have pressed the button.</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image6.png" alt = "Audio Out node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p>S nodem <strong>Audio out</strong> you will have a lot of fun with the Audio node - it tells your computer to make some sound. For example, if you connect it to the Change node, in which you type a message, your computer will read it out loud. But no swears! 😎</p>
    </div>
</div>

Now that you know what it’s all about, programme your own project! We have prepared a bunch of cunning inventions for inspiration.
[Check them out]({{< ref "/projects/_index.en.md" >}})

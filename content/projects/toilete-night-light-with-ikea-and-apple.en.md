---
title: IKEA light with Motion Detection and HomeKit
description: "Turn on the lights in the night automatically with IKEA and Apple HomeKit!"
idea: false
tags: ["Indoor"]
levels: ["Beginner"]
places: ["Home"]
devices: ["Motion Kit"]
image_preview: /projects/toilete-night-light-with-ikea-and-apple/preview.jpg
image_main: /projects/toilete-night-light-with-ikea-and-apple/preview.jpg
author: "lukas_fabik"
modules: ["core","mini_battery","pir","enclosures-101"]
draft: true
---

## What you need
For this project you should have prepared BigClown Hub and also IKEA TRÅDFRI gateway connected with you Apple device with at least one bulb. To build your motion detector you will need this modules:

{{< modules >}}

## Step 1: Build device and connect it to Hub
At first it is important to plug all modules together. If you are building your first device it is good to see introduction [How to correctly plug BigClown modules](#).

Start with Battery Module and put Core Module onto it. After that you can put PIR Module on Core Module.

Before you insert batteries, open you BigClown playground on Hub and press "Start Pairing". Now you can insert batteries, device will automatically connect to Hub and you can click on "Stop Pairing".

Now is your device connected to Hub. In this video you can see full tutorial how to plug hardware modules for this device:

{{< youtube "U8i0Afk3XOI" >}}

## Step 2: Create a node for HomeKit motion detector
You should have connected BigClown Hub with you HomeKit. If not use [this tutorial](#) to connect it.

* Add node for HomeKit device to flow and double-click on it
* Select your HomeKit Bridge from bridge selector
* Select Motion Detector as Service
* It's up to you how you fill in Manufacturer, Serial Number, Model and Name

Now it's time to start sending data from Motion Device to this node.

## Step 3: Publish motion actions from Device to HomeKit
At first add *mqtt input node* to your flow in Playground. After that double-click on mqtt node and insert id your device to input 'Topic'. Fill also Name, for example with "Motion Detection".

Now you can look, how motion detection information look like. Add *debug node* to you flow, connect it with Motion Detection and deploy your flow.

Open *Debug messages* tab in Playground and simulate motion in front of you Device. You can see 2 types of messages you are now receiving:
* Motion detection trigger
* Total count of triggered motions

For now we will use trigger. Output is in this structure:

```
...put structure here
```

You can see, that it is saved in *msg.payload* as *put content here*.

We need to transform this output to structure which is accepted by HomeKit node, so this is required output:

```
msg.payload = {
 MotionDetected: true
};
```

### Transform function
To get required output we have to create Transform function.

* Add Function node to your flow
* Double-click this node to create add content of function

It is easy function because device just send message if motion is detected. So we just send on each input message our output message in required format. Final function can look like this:

```
msg.payload = {
 MotionDetected: true
};
return msg;
```

Now you can connect mqtt node as input of this function and HomeKit node as output of this function.

### One more function
In previous function we set motion status in HomeKit as 'true' but we also have to set this status as 'false'. Easiest way is just wait 5 seconds after sending first message and send second message with set status to 'false'.

We need 2 nodes, first one for delay and second one for function:

* Add node *Delay* to your flow and set Action as 'Delay each action' with fixed delay for 5 seconds.
* Add node *Function*. This function will be same as previous and contains 'false' value instead of 'true':

```
msg.payload = {
 MotionDetected: false
};
return msg;
```

Now we have to connect this nodes. Connect first function with 'true' value as input of *Delay* node, Delay node connect as input of function with 'false' value and at the end connect this function as input of HomeKit node.

Now you connect all required nodes and you flow is finished.

## Step 4: Light up bulb after motion
Final part of project is.....

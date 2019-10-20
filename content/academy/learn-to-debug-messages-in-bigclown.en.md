---
title: Learn to debug messages in BigClown
draft: false
date: 2019-09-21T08:02:23.137Z
weight: 60
description: >-
  To tune up your IoT box programme to perfection, you can use the simple
  debugger that will get the kinks out. We will give you advice on how to set it
  up and get it started.
slug: learn-to-debug
meta_title: Learn to debug messages in BigClown
meta_description: >-
  To tune up your IoT box programme to perfection, you can use the simple
  debugger that will get the kinks out. We will give you advice on how to set it
  up and get it started.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569052768/academy/learn-to-debug-mesagges-in-bigclown/image1.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569052768/academy/learn-to-debug-mesagges-in-bigclown/image2.png
---
A spider enjoys having a juicy fly or other insect in its web. But there is no place for a bug in your little programme. Work out all the bugs, or glitches in the code, from your BigClown projects. 🐞 We will show you how to do that.

## What is a debug?

Among programmers, a debug means **tweaking** or **error elimination** in a programme. There’s always some little flaw to be found in a code.

For tweaking, programmers use a tool called **debugger**. It monitors the flow of a programme and notifies the programmer when it detects an error. An IT guy doesn't have to dig through all the code lines, because he knows where to look. You can find a simple debugger in your Playground. You can check in it if your programme works as it should, and discover possible flaws.

## How to debug in Playground?

1. It’s easy. 😎 Click on the **Functions** tab and look for a **Debug** node. It’s the first node in the Output section and looks like this:



![debug](https://res.cloudinary.com/lukasfabik/image/upload/v1569052771/academy/learn-to-debug-mesagges-in-bigclown/image4.png)

2. Connect the Debug node right behind the initial **MQTT** node. You don’t have to connect it to anything else, so it will be this solitary point in your programme (but don’t worry, it is an introvert, he likes it 🤓).

**Our tip:** Instead of to the MQTT node, you can connect the Debug node to any other node with the output on the right. This way, you will find out how particular features of your programme work. **👍**



![mqtt](https://res.cloudinary.com/lukasfabik/image/upload/v1569052768/academy/learn-to-debug-mesagges-in-bigclown/image2.png)

3. Now, click on the **bug icon** in the upper right part of the Playground. 🐞

![deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1569052768/academy/learn-to-debug-mesagges-in-bigclown/image1.png)

4. **And now you are in the debugger!** In this bug tab you will see messages about functioning of your programme. For example, if you have the box with a button, try to press the button or put it in the fridge and watch what messages will show up in the debugger.

Based on these messages, while making future programmes, you can **verify that everything works as it should**. 👌 For example, if there is a connection between some nodes missing, debugger will alert you.

This is how the messages about what your programme does with the box look like in the debugger:

![debugger](https://res.cloudinary.com/lukasfabik/image/upload/v1569052770/academy/learn-to-debug-mesagges-in-bigclown/image3.png)

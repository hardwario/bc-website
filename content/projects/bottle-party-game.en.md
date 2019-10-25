---
title: Play Spin the Bottle electronically with IoT
draft: false
featured: true
handbook:
date: 2019-10-19T09:47:39.764Z
description: >-
  With the BigClown Starter Kit, create an IoT button that will draw a random
  member of your group of friends.
slug: play-spin-the-bottle-electronically
meta_title: Play Spin the Bottle electronically with IoT
meta_description: >-
  With the BigClown Starter Kit, create an IoT button that will draw a random
  member of your group of friends.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1568964869/academy/how-to-flash-firmware/project_placeholder.jpg
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566149309/projects/bottle-party-game/image4.png
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
Why play Spin the Bottle with a bottle if all you need is a smart box?  Set your Starter Kit to draw a random member of your group. Whether it be at a party, while drawing a winner or deciding who will clean up.
{{< /perex >}}

In this project, you will learn how to set up the box so it **draws a random member** of your group. 😱

You will need **the box with the button** and the **USB dongle**. All you need is a basic BigClown kit, the [**Starter Kit**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Get it started in the Node-RED

1. Starter Kit [put together and pair]({{< ref "/handbook/_index.en.md" >}}). If you don’t know how to download the firmware or what it is, [you will find out here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).
2. In the Playground, click on the **Functions tab** where the programming desktop is located.
3. Let’s make it happen. 🤞 Place the **MQTT** node from the Input section in the desktop.

Double click on the node and set the key feature - clicking the button. **Copy the following line into the Topic field**:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image18.png "MQTT topic")

Confirm it with the **Done** button.

## Set up a random option

1. You can programme a random option following a simple javascript. But don’t worry, we’ll help you. First, place the **Function node** from the Function section next to the MQTT.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image5.png" alt = "Node-RED function node" >}}

2. Double click on the node to open it. In the **Name** line, name the node (for example, Random option). In the **Function** line, copy this code exactly as you see it in the picture. With this code, one of the participants will be drawn.


```
var rand = Math.round( Math.random() * (flow.get("numberOfContestants") - 1));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image9.png" alt = "Node-RED Random" >}}

Confirm it with the **Done** button.

3. Add another node next to the Random option, the **Delay** one (also found in the Function section). Thanks to this node, the response will be delayed a little and it will create an atmosphere of tension. Boo! 😲

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image14.png" alt = "Node-RED delay" >}}

4. Inside the node, make it even more random, set up a **random delay**. Click on random delay and select a time between **2 and 4 seconds**. That should be just right for keeping the tension in the air.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image3.png" alt = "Node-RED random delay" >}}

Confirm it with the **Done** button.

5. Above all this, place a node that will set up a message that shows up when the box is busy picking. Use the **Change node** from the same section to do it.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image1.png" alt = "Node-RED change node" >}}

6. Open the node with a double-click and type here your message. For example, _Picking_...

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149309/projects/bottle-party-game/image4.png" alt = "Node-RED - BigClown playground" >}}

## Set the participants

1. Your lottery won’t do without a table reset button. You need it to continue playing. Under the MQTT place the **Button node**, this time from the Dashboard section.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image17.png" alt = "Node-RED dashboard button" >}}

2. Double click on the node and in the **Label** line, name it _Reset_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image13.png" alt = "BigClown Playground dashboard button" >}}

Confirm it with the **Done** button.

3. We are moving on. Now set all your buddies who will take part in the game. Anonymously, for now. Place them on the desktop using the **Text input** node in the Dashboard section. As many pieces as many you are.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image10.png" alt = "Node-RED text input" >}}

4. Within each node, rewrite the **Label** line to Participant + a number from one to as many as you are. So it will go Participant 1, Participant 2… you know the rest.
   In the **Delay** field, fill in the number 0.
   **Uncheck** the box just bellow it to really reset the fields after the reset.
   Do all this with all nodes with participants.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image6.png" alt = "BigClown Playground function" >}}

Confirm it with the **Done** button.

5. Set up another javascript next to the participants. This javascript assigns the names of the participants to the corresponding place. Again, you will insert it as a **Function** node.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image19.png" alt = "BigClown Playground function" >}}

6. Double-click on the node to open its settings. In the **Label** line, fill in the name of the node and copy this code into the **Function** field:


```
var contestants = flow.get("numberOfContestants") || 0;
var contestantArray = flow.get("contestantArr") || [msg.payload];
contestants++;
flow.set("numberOfContestants", contestants);

if(contestants != 1)
{
    contestantArray.push(msg.payload);
}

flow.set("contestantArr", contestantArray);
```

Make sure the **Output** is really just one. ❗

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image7.png" alt = "Node-RED function node" >}}

Confirm it with the **Done** button.

7. Don’t worry, we are almost finished. 🙌 Place the **Change** node on the desktop. This will ensure that everything gets restored to its original state when resetting.🖖

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image11.png" alt = "Node-RED change payload" >}}

8. In this node’s settings, fill in two **Rules** as you can see in the picture. The first one is **Delete | flow | ContestantArr**. To add another rule, click on the small **+Add** button below the field. In this Rule, set **Delete | flow | numberOfContestants.**

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image2.png" alt = "Node-RED rules" >}}

Confirm it with the **Done** button.

## Only one can be selected

1. Put the last node behind all this on the desktop. It will tell everyone who has been chosen. 🙏 You can find it simply as **Text** node in the Dashboard section.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image16.png" alt = "Node-RED dashboard text" >}}

2. In the **Label** line inside the node, set how the message will look like when randomly selecting one participant.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image12.png" alt = "Text label in dashboard Node-RED" >}}

Confirm it with the **Done** button.

3. And then **put it all beautifully together**. In the upper part, connect all the nodes that ensure the draw, in the lower part, connect the ones that form the draw table.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image15.png" alt = "BigClown Playground connect nodes in Node-RED" >}}

4. Don’t forget to click on the **Deploy** button in the top right corner! 🚨

## Let the fun begin!

1. And now, let’s get down to business! In the **Dashboard** tab, enter the names of all participants. If you haven’t selected the auto-refresh time period in the nodes for each participant, be sure to press **Enter** after each name. 👈

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image8.png" alt = "show dashboard Node-RED / BigClown Playground" >}}

2. **Who was chosen by fate**? And what for? It’s only up to you now. 😈
   You can, for example:

* draw who gives a kiss to whom (woohoo),
* pull the shortest match for the one who takes out the trash,
* draw the winner of a competition,
* assign crazy tasks chosen by chance,
* and anything else that crosses your mind!

---
title: Who has the strongest centrifugal force?
draft: false
featured: true
handbook: Who has the strongest centrifugal force? Create an IoT spintop and measure it
date: 2019-09-26T17:27:58.808Z
description: "Measure it against your friends to see who is centrifugally the strongest one! \U0001F4AA Instructions on how to build a smart spintop from the BigClown Starter Kit. "
meta_title: Who has the strongest centrifugal force? Create an IoT spintop and measure it
meta_description: "Measure it against your friends to see who is centrifugally the strongest one! \U0001F4AA Instructions on how to build a smart spintop from the BigClown Starter Kit. "
modules: ["core","button","mini_battery","usb_dongle"]
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569520617/projects/highest-centrifugal-force/5-ilustrace-hra-s-kamarady-o-nejvetsi-odstredivou-silu.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1569520617/projects/highest-centrifugal-force/5-ilustrace-hra-s-kamarady-o-nejvetsi-odstredivou-silu.png
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
Do you remember the spintop? You might have had a wooden or plastic one, but we bet it wasn't a smart one. Now you can finally make one – it will register your centrifugal force. Measure it against your friends to see who is centrifugally the strongest one! 💪
{{< /perex >}}

In this project, you will learn **to measure the fast spinning of the box**.  👈

All you need is the **box with button** and the **USB dongle** in the basic BigClown [Starter Kit](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Download new firmware

1. If you haven't done it yet, [put it together]({{< ref "/handbook/_index.en.md" >}}) the Starter Kit.
2. Upload new firmware to Core Module - **bcf radio spinning game** (you will find it among other firmware in the Playground). Thanks to this firmware, the box will become sensitive to rotation. 👌

**Our tip**: You don't know how to download firmware or what it even is? [You can find out here]({{< ref "/academy/how-to-flash-firmware.en.md" >}}).

3. [Pair the Core Module with the USB Dongle]({{< ref "/academy/how-to-pair-kit.en.md" >}}). Right after pairing it, you will notice that your Core Module has changed Alias to **rotation-g-meter**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image11.png" alt = "BigClown devices list" >}}

## Build in the Node-RED

1. In the Playground, click on the **Functions tab**, where is the programming desktop Node-RED. 🤖
2. Start as always: first place the **MQTT node** from the Input section on the desktop.

Double-click on it and copy **Topic** to the field. With this, the box will measure the centrifugal force:

```
node/rotation-g-meter:0/rotation-g
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image5.png" alt = "MQTT topic" >}}

Confirm it with the **Done** button.

3. Surprise. 😲 Under the first **MQTT node**, place a second MQTT node from the Input section. This time, save another **Topic** in its settings; with this one, the box will measure the rotation time:


```
node/rotation-g-meter:0/rotation-time
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292683/projects/highest-centrifugal-force/image14.png" alt = "MQTT input node" >}}

4. To each node, place one node for javascript. You can find them in **Function** section, under Function (original, right? 🤡).

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image2.png" alt = "javascript fuction node" >}}

5. Double-click on the **upper Function node** and insert this code into the large field. The code will register the record centrifugal force. 💪


```
var record = flow.get("record") || flow.set("record", 0.0);
var lastSpin = parseFloat(msg.payload);

if(lastSpin > flow.get("record"))
{
    flow.set("record", lastSpin);
    return msg;
}
```

In the **Name** field, name the node as _Save the record_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image10.png" alt = "javascript function Node-RED" >}}

Confirm it with the **Done** button.

6. Into the **bottom Function node**, insert the code that will register the record spin time. ⏰


```
var record = flow.get("timeRecord") || flow.set("timeRecord", 0.0);
var lastSpinTime = parseFloat(msg.payload);

if(lastSpinTime > flow.get("timeRecord"))
{
    flow.set("timeRecord", lastSpinTime);
    return msg;
}
```

In the **Name** field, name the node as _Save the record_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image3.png" alt = "Javascript Funciton BigClown Kit" >}}

Confirm it with the **Done** button.

7. Under the upper Function node, place the **text node** from the Dashboard section. You can place it elsewhere, but for the sake of clarity it will be better if they are aligned vertically.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image7.png" alt = "Text Node" >}}

In settings, name it _Last spin_. This way, it will show you the value that the box just measured.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image12.png" alt = "Edit text Node" >}}

8. Place another node under this one; thanks to the bottom one, the values will be registered into a graph. 📈 You will find it as **Chart node** in Dashboard section.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image6.png" alt = "Chart node" >}}

In the **Label** field, name it as _History_. Into the **X-asis** Label field, set  automatic, which means that the unit will be added automatically.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566334139/projects/highest-centrifugal-force/image13.png" alt = "settings of chart node in Node-RED" >}}

9. Under the second javascript, place the **Text node** from the Dashboard section.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image1.png" alt = "Dashboard text node" >}}

You will determine in it how the length of the latest rotation is displayed: _Time of last spin_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image12.png" alt = "Set text node in dashboard" >}}

10. Next to each level, place one **Text node** from the Dashboard section. Those will affect the way you see the record time registered in the graph.  Set up the **Record label** and **Record** **time**, respectively.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image4.png" alt = "BigClown playground text nodes" >}}

11. And then **connect** it all as shown in the picture. You will have two separate flows on the desktop. In the end, don’t forget to press the **Deploy** button to make it all work. 🚨

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image9.png" alt = "Deploy Node-RED flow" >}}

## Give it a spin!

1. Invite all your friends and get them worked up. Have a Coke. 😄
2. Measure your centrifugal force! One by one, spin it.
   **Our tip**: For the best spin, make the box stand on its button.
3. Follow the results in the **Dashboard tab**. So, good luck and …. **spin it like you dare!**

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566334137/projects/highest-centrifugal-force/image15.png" alt = "settings of chart node in Node-RED" >}}

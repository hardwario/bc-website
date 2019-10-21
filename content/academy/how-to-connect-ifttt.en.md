---
title: Connect IFTTT with your project in the Playground
draft: false
date: 2019-10-15T16:01:55.617Z
weight: 10
description: ' Thanks to IFTTT you can connect the Playground and various apps you use. And that’s really cool. Learn how to do it.'
slug: connect-ifttt-and-playground
meta_title: Connect IFTTT with your project in the Playground
meta_description: ' Thanks to IFTTT you can connect the Playground and various apps you use. And that’s really cool. Learn how to do it.'
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image19.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image19.png
---
Thanks to IFTTT you can connect the Playground and various apps you use. And that’s really cool. Learn how to do it.

## What is IFTTT?

This stands for _If This, Then That_. IFTTT is an online service that links **action and reaction**. So when something happens, something else reacts automatically right away. And it’s you who decides about all these things when you programme them.

As a bonus, IFTTT connects **programmes and apps**. 👌 For example, you can set up sending text messages at a certain time of the day, reminders of starred emails in your mailbox, get notifications about new tweets of a girl or a boy who you secretly admire, and so on. Amazing! 🤡

You can create your own IFTTT through a special [IFTTT.com](https://ifttt.com/) interface, which you simply **connect to the Playground**.

## How do you introduce IFTTT to the Playground? Try it on the example of a smart doorbell.

1. **Register** at [IFTTT.com](https://ifttt.com/). Fortunately, this service is free. 🤑 Here, you will start using something called **Applet**. Applet is the name for the set reaction to an action. To create a new Applet, click on **Create** under your icon.

![IFTTT registration](https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image18.png)

2. A page with large text _IF THIS THEN THAT_ will come up. **Click on THIS**.

![IFTTT and playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image13.png)

3. Lots of options will pop up on you. Select WebHooks. With the **Webhooks** service, you can create your own IFTTT projects that connect the Playground with various online apps.

![WebHooks and IFTTT](https://res.cloudinary.com/lukasfabik/image/upload/v1570985204/academy/connect-ifttt-with-your-project-with-the-playground/image1.png)

You have to click on **Connect, Receive and web request** buttons, respectively.

Then you can **name the Event**. Go crazy there, but don’t forget the name of the Event.  👀 This name will be important when connecting to your mobile and the Playground later.

![IFTTP connection with playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985205/academy/connect-ifttt-with-your-project-with-the-playground/image7.png)

Then confirm the name with the **Create trigger** button. 🙌

4. Now click on **THAT**.

![IFTTT and playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image13.png)

Choose what should happen as a reaction to an action. For now, we’ll set up notifications. So go find **Notifications**…

![IFTTT notification](https://res.cloudinary.com/lukasfabik/image/upload/v1570985204/academy/connect-ifttt-with-your-project-with-the-playground/image6.png)

… and confirm them clicking on **Connect** and **Send a notification from the IFTTT app** buttons, respectively.

You will now create the contents of the notification. **In the next field, type what you want the notification to tell you**. And because you are creating a smart doorbell 🔔, you will need a message like this:
_Somebody’s at the door {{OccurredAt}}_

![IFTTT notification](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image15.png)

Curly brackets is **a variable** that will send you information when the button was pressed. So keep them there.

**Our tip:** For further experiments, you can use the Add ingredient button to set various other variables.

Is your message ready? Confirm it with the **Create Action** button.

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image9.png)

5. Go to the **Finish** line! 👇

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image19.png)

Do you see “Connected”? You are there! 👍

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image12.png)

6. But that’s not all, the connection must also be tested. Click on the **Webhoooks icon**.

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image16.png)

7. Select **Documentation** at the top right…

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985208/academy/connect-ifttt-with-your-project-with-the-playground/image14.png)

… and you get to a page with lots of text. But don’t get scared. 😱

Click on the **Event** field and rewrite it to the name of your event, as you entered it before. In this case it will be _zmacknute_tlacitko_. Thanks to this, everything becomes identified and interconnected.

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image17.png)

8. Take your **mobile phone** 📱 and install the **IFTTT app**: a link to Google Play and a link to Apple Store.

**Sign in** with the same account as on the web. \*\*\*\*

9. **On your computer**, click on the **Test it button**. Keep the page on.

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image11.png)

You should automatically see on your mobile that it works. 👌

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985203/academy/connect-ifttt-with-your-project-with-the-playground/image3.png)

10. Now connect IFTTT with the Playground. Open the **Playground**.

At the top right, you see **the menu** (three bars). When you click on them you will see **Import and Clipboard under it**.

Copy the following text code here. This will open the preset flow.

```
[{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

![IFTTT propojení s playgroundem](https://res.cloudinary.com/lukasfabik/image/upload/v1570985205/academy/connect-ifttt-with-your-project-with-the-playground/image2.png)

You see **three nodes** in the flow:

* the first is the classic **MQTT node**,
* the second one is the **Change node** with the delete feature. This will give your HTTP request the form it is supposed to take,
* the third one is the **HTTP node** which you will otherwise find in the Function section. With this node you can connect the Playground to a web service such as IFTTT. It can process the HTTP requests.

11. Copy the code from the IFTTT web...

![MQTT node and HTTP node](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image8.png)

12. … and paste it in the Playground to properties of the HTTP request node.

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image10.png)

13. Save the node by clicking on **Done** button. Let the electronic doorbell be set.
14. Now just push the good old **Deploy** button...
15. … and celebrate **you can do yet another cool thing**. 👏 When you press the button on the box, it will show on your mobile that you have pressed it. After clicking on the notification, you will see the detailed Applet.

![IFTTT in playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985206/academy/connect-ifttt-with-your-project-with-the-playground/image4.png)

16. **Place the box instead of the doorbell** and when someone rings you will know even when visiting a neighbour. You won’t miss any friends anymore. **👋**

---
title: "Quick Start Guide"
menu: "doc"
parent: "basics"
---

### Thank you, dear maker!

If you are reading this **QUICK START GUIDE** you have probably purchased our BigClown IoT Kit. If not, go to our [**e-shop**](https://shop.bigclown.com) to do so :)

Once again THANK YOU for being our supporter, we really appreciate this. BigClown is not just about the hardware, our kits come with the **technical support**. So don't hesitate to use one of the offered channels In case you run into the trouble or something is not clear for you:

- Use the online chat icon in the bottom right corner
- Write us an email to **<a href="mailto:support@bigclown.com">support@bigclown.com</a>**
- Use Forum **<a href="https://forum.bigclown.com/">https://forum.bigclown.com/</a>**

<div class="row">
    <div class="col-sm-4">
        {{% img-zoom src="starter-kit-box.jpg"  %}}
    </div>
    <div class="col-sm-4">
        {{% img-zoom src="kit-bag.jpg"  %}}
    </div>
    <div class="col-sm-4">
        {{% img-zoom src="module-bag.jpg"  %}}
    </div>
</div>

## Be Inspired

It's always hard to build something without an inspiration. We motivate our makers to share their work with others and you can get ideas for your projects by **subscribing to our Clownsletter**. The e-mail form is in the footer of this page.

## Get Ready

In our world it means to prepare a **Hub** - a center of your system. You can use ready-made **BigClown Hub** or just plug our **{{% shop "Radio Dongle" %}}** to any computer or server (e.g. Raspberry Pi).

**QUICK START GUIDE** shows the shortest way to a very special feeling "I've&nbsp;made&nbsp;it!".

Just follow these steps:

1. In delivered box or suitcase find a **{{% shop "Radio Dongle" %}}** and plug it to any USB port of your notebook or PC.


2.  Download the latest [**BigClown Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)



3. Run the **BigClown Playground**, go to the **Device** tab.

    Choose the **{{% shop "Radio Dongle" %}}** serial port and click **Connect**

    {{% img-zoom src="playground-devices-connect.png"  %}}

4. Radio kits delivered together with your **{{% shop "Radio Dongle" %}}** are already programmed and paired, please check that out in the image below.

    {{% img-zoom src="playground-devices-connected.png"  %}}

## Build devices

By building devices we mean putting modules and enclosure together, optionally flashing a firmware and pairing devices with a Radio Dongle.

**QUICK START GUIDE** recommends to follow this steps:

1. Build delivered kits or build devices from modules (check the [**video guides**](https://www.youtube.com/playlist?list=PLfRfhTxkuiVyc9P1TWw_DnAeh2INXwpFK) how to do so). Do not put batteries to the battery modules yet and be careful how to connect **{{<shop "Mini Battery Module">}}**.

    <div style="width:50%">
    {{% img-zoom src="mini-battery-module-orientation.png"  %}}
    </div>

2. As mentioned, delivered kits are already programmed with a right firmware. If you would like to flash other firmware to the Core Module, please follow this [**firmware flash chapter**]({{<relref "doc/projects/radio-door-sensor.md#flash-door-sensor-firmware">}}).


3. As mentioned, kits delivered together with Radio Dongle are already paired and should be visible in Playground's Device tab. In case you need to pair new devices, please follow these [**radio pairing instructions**]({{< relref "doc/projects/radio-door-sensor.md#pair-the-radio-door-sensor" >}}).

4. Switch to Playground's **Messages** tab and put batteries to your kit, you should see incoming messages. Every kit sends different messages. Here the **Button kit** sends `temperature`, `voltage`, `event-count` (everytime you press the button) and other messages.

    {{% img-zoom src="playground-messages.png"  %}}

5. Put modules to the 3D-printed enclosure and fix it with O-rings.


## Add function

Now it's time to give your system a logic and connect it with desired platforms.

In **QUICK START GUIDE** we will create a simple dashboard with a temperature gauge. Again, just follow these steps:

1. Switch to the **Messages**, you should see incoming messages from the previous step. Copy the **bold** text (called **topic**) that ends with `temperature` **to the clipboard**. Make sure you copy just text and no space before or after the text. Your **topic** could be different based on your kit name. You can also copy any other topic that your module supports from the [**MQTT topics list**]({{<relref "doc/interfaces/mqtt-topics.md">}}).

    {{% img-zoom src="playground-topic-copy.png"  %}}

2. Switch to the **Function** tab and from the color blocks on the left side drag and drop **mqtt** block and **gauge** block to the **flow** in the middle of the screen. The color blocks are called **nodes**. You can use the `filter nodes` text box to find the right block. Connect the two created nodes together by the mouse.

    <div class="row">
        <div class="col-sm-6">
        {{% img-zoom src="playground-blocks.png"  %}}
        </div>
        <div class="col-sm-6">
            {{% img-zoom src="playground-flow.png"  %}}
        </div>
    </div>

3. Double click on the **mqtt** node and paste the previously copied topic from the clipboard. Make sure there are not any spaces before and after the copied text. Then click **Done** and **Deploy** button. You have to click on the **Deploy** everytime you make changes in your flow.

    {{% img-zoom src="playground-topic.png"  %}}

4. Go to Playground's **Dashboard** tab and you should see a gauge with the temperature of the selected device. The temperature can take a while to appear. You can breathe on the module or reconnect batteries for immediate update.

{{% img-zoom src="playground-dashboard.png"  %}}

## Share

Don't be shy and share your projects with others. We will reward you by a **100 EUR** discount coupon if your project will be displayed on our web.

Or just put the red nose on, make a selfie and share it on Facebook or Twitter with a hashtag **#Clownfie** and you will get a **10 EUR** discount coupon.


## Learn More

The goal of this **QUICK START GUIDE** is to show the basics in a few simple steps. Now you can learn more by browsing the **documentation** or by visiting the **links below**.

* Check out other BigClown [**projects**]({{< relref "doc/projects/radio-door-sensor.md" >}}).
* Take a look at the [**Module Overview**]({{< relref "doc/basics/module-overview.en.md" >}}).
* Learn about [**MQTT**]({{<relref "doc/interfaces/mqtt-protocol.md">}}) and [**BigClown MQTT topics**]({{<relref "doc/interfaces/mqtt-topics.md">}}) to control LEDs and relays.
* Try other [**integrations**]({{<relref "doc/integrations/grafana-for-visualization.md" >}}) with **Grafana**, **Blynk**, **IFTTT**, **Ubidots** and others.
* Use your [**Raspberry PI**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}) or other [**single board computer (SBC)**]({{< relref "doc/tutorials/raspberry-pi-installation.md#setup-on-original-raspbian">}}) as a server.
* [**Flash other firmware**]({{<relref "doc/projects/radio-door-sensor.md#flash-door-sensor-firmware">}}) or [**write your own firmware**]({{<relref "doc/firmware/basic-overview.md">}}) for the **Core Module**.
* Check the [**Core Module pinouts**]({{<relref "doc/hardware/header-pinout.md">}}) and add your own buttons, relays and sensors.


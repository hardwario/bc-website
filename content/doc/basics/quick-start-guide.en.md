---
title: "Quick Start Guide"
menu:
  doc:
    parent: 'basics'
    weight: 10
---

### Thank You, Dear Maker!

If you are reading this **QUICK START GUIDE** you have probably purchased our BigClown IoT Kit. If not, go  [**shopping**](https://shop.bigclown.com) to do so :)

<div class="row" style="padding:20px 0 30px 0;">
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

Once again **THANK YOU** for being our supporter, we really appreciate this.

BigClown is not just about the hardware but it comes with full documentation, tutorials, software tools and most importantly - it comes with the extensive **technical support**. So don't hesitate to use one of these channels In case you run in troubles or if anything is not clear to you:

- Use the online chat icon in the bottom right corner
- Write us an email to **<a href="mailto:support@bigclown.com">support@bigclown.com</a>**
- Use forum at **<a href="https://forum.bigclown.com/">https://forum.bigclown.com/</a>**

## Be Inspired

It's always hard to build something without an inspiration. We motivate our makers to share their work with others and you can get ideas for your projects by [**subscribing to our Clownsletter**](http://eepurl.com/drGLGf).


## Get Ready

In our world it means to prepare a center of your IoT system - the **Hub**.

In **QUICK START GUIDE** we will use your computer as a Hub.


Just follow these steps:

1. In delivered box or suitcase find a **{{% shop "Radio Dongle" %}}** and plug it to any USB port of your notebook or PC.

2.  Download the latest [**BigClown Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

3. Run the **BigClown Playground**, go to the **Device** tab, choose the **Radio Dongle** serial port and click **Connect**

    {{% img-zoom src="playground-devices-connect.png"  %}}

    {{% note "info" %}}If you cannot see Radio Dongle in the devices, please see the <a href="#troubleshooting">Troubleshooting</a> chapter.{{% /note %}}

4. Radio kits delivered together with your **{{% shop "Radio Dongle" %}}** are already programmed and paired, please check that out in the image below.

    {{% img-zoom src="playground-devices-connected.png"  %}}

{{< note "info" >}}
In the future we recommend to use as a Hub our ready-to-use {{< shop "BigClown Hub" >}} or just plug our Radio Dongle to [Raspberry Pi]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md">}}) or [any server]({{<relref "/doc/tutorials/raspberry-pi-installation.en.md#setup-on-original-raspbian">}}).
{{< /note >}}


## Build devices

By building devices we mean putting modules and enclosure together, optionally flashing a new firmware and pairing devices with a Radio Dongle.

**QUICK START GUIDE** recommends to follow this steps:

1. Build delivered kits or build devices from modules (check the [**video guides**](https://www.youtube.com/playlist?list=PLfRfhTxkuiVyc9P1TWw_DnAeh2INXwpFK) how to do so). Do not put batteries to the battery modules yet and be careful how to connect **{{<shop "Mini Battery Module">}}** from the right side.

    <div style="width:50%">
    {{% img-zoom src="mini-battery-module-orientation.png"  %}}
    </div>

2. As mentioned, delivered kits are already programmed with a right firmware. If you would like to change it to another firmware in the Core Module, please follow this [**firmware flash chapter**]({{< relref "/doc/projects/radio-door-sensor.en.md#flash-door-sensor-firmware">}}).

3. As mentioned, kits delivered together with Radio Dongle are already paired and should be visible in Playground's **Device** tab. In case you need to pair new devices, please follow these [**radio pairing instructions**]({{< relref "/doc/projects/radio-door-sensor.en.md#pair-the-radio-door-sensor" >}}).

4. Switch to Playground's **Messages** tab and put batteries to your kit, you should see incoming messages. Every kit sends different messages. Here the **Button kit** sends `temperature`, `voltage`, `event-count` (everytime you press the button) and other messages.

    {{% img-zoom src="playground-messages.png"  %}}

5. Put modules to the 3D-printed enclosure and fix it with O-rings.


## Add function

Now it's time to give your system a logic and connect it with desired platforms.

In **QUICK START GUIDE** we will create a simple dashboard with a temperature gauge. Again, just follow these steps:

1. Switch to the **Messages**, you should see incoming messages from the previous step. Copy the **bold** text (called **topic**) that ends with `temperature` **to the clipboard**. Make sure you copy just text and no space before or after the text. Your **topic** could be different based on your kit name. You can also copy any other topic that your module supports from the [**MQTT topics list**]({{< relref "/doc/interfaces/mqtt-topics.en.md">}}).

    {{% img-zoom src="playground-topic-copy.png"  %}}

2. Switch to the **Function** tab and from the color blocks on the left side drag and drop **mqtt** block and **gauge** block to the **flow** in the middle of the screen. The color blocks are called **nodes**. You can use the `filter nodes` text box to find the right block. Connect the two created nodes together.

    <div class="row">
        <div class="col-sm-6">
        {{% img-zoom src="playground-blocks.png"  %}}
        </div>
        <div class="col-sm-6">
            {{% img-zoom src="playground-flow.png"  %}}
        </div>
    </div>

3. Double click on the **gauge** node. Change **Label**, **Units** and **Range** to your needs. Then click **Done**.

    {{% img-zoom src="playground-gauge.png"  %}}


4. Double click on the **mqtt** node and paste the previously copied topic from the clipboard. Make sure there are not any spaces before and after the copied text. Then click **Done** and **Deploy** button. You have to click on the **Deploy** everytime you make changes in your flow.

    {{% img-zoom src="playground-topic.png"  %}}

5. Go to Playground's **Dashboard** tab and you should see a gauge with the temperature of the selected device. The temperature can take a while to appear. You can breathe on the module or reconnect batteries for immediate update.

{{% img-zoom src="playground-dashboard.png"  %}}

## Share

Don't be shy and share your projects with others. We will reward you by a **100 EUR** discount coupon if your project will be displayed on our web.

Or just put the red nose on, make a selfie and share it on Facebook or Twitter with a hashtag **#Clownfie** and you will get a **10 EUR** discount coupon.


## Learn More

The goal of this **QUICK START GUIDE** is to show the basics in a few simple steps. Now you can learn more by browsing the **documentation** or by visiting the **links below**.

* Check out other BigClown [**projects**]({{< relref "/doc/projects/radio-door-sensor.en.md" >}}).

* Take a look at the [**Module Overview**]({{< relref "/doc/basics/module-overview.en.md" >}}).

* Learn about [**MQTT**]({{< relref "/doc/interfaces/mqtt-protocol.en.md">}}) and [**BigClown MQTT topics**]({{<relref "/doc/interfaces/mqtt-topics.en.md">}}) to control LEDs and relays.
* Try other [**integrations**]({{< relref "/doc/integrations/grafana-for-visualization.en.md" >}}) with **Grafana**, **Blynk**, **IFTTT**, **Ubidots** and others.
* Use your [**Raspberry PI**]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md" >}}) or other [**single board computer (SBC)**]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md#setup-on-original-raspbian.en.md">}}) as a server.
* [**Flash other firmware**]({{< relref "/doc/projects/radio-door-sensor.en.md#flash-door-sensor-firmware.en.md">}}) or [**write your own firmware**]({{<relref "/doc/firmware/basic-overview.en.md">}}) for the **Core Module**.
* Check the [**Core Module pinouts**]({{< relref "/doc/hardware/header-pinout.en.md">}}) and add your own buttons, relays and sensors.

## Troubleshooting

Cannot find the Radio Dongle or Core Module in the device list

- On Windows 7 and macOS please install the [FTDI VCP drivers](https://www.ftdichip.com/Drivers/VCP.htm)
- On Ubuntu you need to be in `dialout` user group. Please use command `sudo usermod -a -G dialout $USER` and restart computer
- BigClown Playground cannot flash older Core Module Revision 1. Please use the `bcf` tool. See [version comparison]({{<relref "/doc/hardware/core-module-1-and-2-comparison.en.md">}})

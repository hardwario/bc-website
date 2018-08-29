---
title: "Start"
menu: "doc"
parent: "basics"
---

Thank you for choosing **BigClown IoT kit for makers**. This page will help you with the first steps. Starter kits are pre-programmed and already paired with the **{{<shop "Radio Dongle" >}}** for the easiest start. In this guide you use your computer to get BigClown up and running. Later you can connect the **{{<shop "Radio Dongle" >}}** to the **{{<shop "BigClown HUB" >}}** or any server and run the Playground permanently.

## Support

With BigClown IoT kit you also get the technical support. In case you run into the trouble or something is not clear for you, let us know. We are here to help you. You have many options to contact us:

- Use the online chat icon in the bottom right corner
- Write us an email to **<a href="mailto:support@bigclown.com">support@bigclown.com</a>**
- Use Forum **<a href="https://forum.bigclown.com/">https://forum.bigclown.com/</a>**

## Get Ready

When you open the BigClown package, you see that we've prepared each kit to be assembled in the separate bag. Please open each bag and build the kit with the modules. In the each bag the **Core Module** is also pre-programmed.

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


## Build devices

Check the [**video guides**](https://www.youtube.com/playlist?list=PLfRfhTxkuiVyc9P1TWw_DnAeh2INXwpFK) how to put kits together.

Do not put batteries to the Battery Module yet. We will do that later in the next chapter.

Be careful how to connect **{{<shop "Mini Battery Module">}}**.
<div style="width:40%">
{{% img-zoom src="mini-battery-module-orientation.png"  %}}
</div>

## Software guide

1.  **Download the latest BigClown Playground**

    [**BigClown Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

2. Connect the **{{% shop "Radio Dongle" %}}** to your computer

    The drivers will install automatically (FTDI drivers).

3. Run the **BigClown Playground**, go to the **Device** tab.

    Choose the **{{% shop "Radio Dongle" %}}** serial port and click **Connect**

    {{% img-zoom src="playground-devices-connect.png"  %}}

4. The **radio nodes** from your kit should be already programmed and paired with your **{{% shop "Radio Dongle" %}}**, please check that out in the image below.

    {{% img-zoom src="playground-devices-connected.png"  %}}

    In case you need to pair new nodes, please follow these [**radio pairing instructions**]({{< relref "doc/projects/radio-door-sensor.md#pair-the-radio-door-sensor" >}}).
    If you would like to flash other firmware to the Core Module, follow this [**firmware flash chapter**]({{<relref "doc/projects/radio-door-sensor.md#flash-door-sensor-firmware">}}).

5. Switch to the **Messages** tab and put batteries to your kit, you should see incoming messages.

    Every kit sends different messages. Here the **Button kit** sends `event-count` everytime you press the button.

    {{% img-zoom src="playground-messages.png"  %}}

6. In **Function** tab you can create a **flow** that displays temperature on the **Dasboard** tab.

    You can follow [**Radio VOC Sensor Project**]({{< relref "doc/projects/radio-voc-sensor.md#dashboard-setup" >}}) steps to create your **Dashboard**.

    {{% img-zoom src="playground-flow.png"  %}}

    {{% img-zoom src="playground-dashboard.png"  %}}


## Next steps

The goal of this page is to show the basics in a few simple steps. Now you can learn more by browsing the documentation or by visiting the links below.

* Check out other BigClown [**projects**]({{< relref "doc/projects/radio-door-sensor.md" >}}).
* Take a look at the [**Module Overview**]({{< relref "doc/basics/module-overview.en.md" >}}).
* Learn about [**MQTT**]({{<relref "doc/interfaces/mqtt-protocol.md">}}) and [**BigClown MQTT topics**]({{<relref "doc/interfaces/mqtt-topics.md">}}) to control LEDs and relays.
* Try other [**integrations**]({{<relref "doc/integrations/grafana-for-visualization.md" >}}) with **Grafana**, **Blynk**, **IFTTT**, **Ubidots** and others.
* Use your [**Raspberry PI**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}) or other [**single board computer (SBC)**]({{< relref "doc/tutorials/raspberry-pi-installation.md#setup-on-original-raspbian">}}) as a server.
* [**Flash other firmware**]({{<relref "doc/projects/radio-door-sensor.md#flash-door-sensor-firmware">}}) or [**write your own firmware**]({{<relref "doc/firmware/basic-overview.md">}}) for the **Core Module**.
* Check the [**Core Module pinouts**]({{<relref "doc/hardware/header-pinout.md">}}) and add your own buttons, relays and sensors.


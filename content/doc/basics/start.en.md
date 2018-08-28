---
title: "Start"
menu: "doc"
parent: "basics"
---

When you open the BigClown package, you'll see that we've prepared each kit to be assembled in the separate bag. Please open each bag and build the kit with the modules. Each bag of **Core Module** is also labeled with firmware name and version.

## Build the kits

Check the [**video guides**](https://www.youtube.com/playlist?list=PLfRfhTxkuiVyc9P1TWw_DnAeh2INXwpFK) how to put kits together.

Do not put batteries to the Battery Module yet. We will do that later in the next chapter.

Be careful how to connect **{{<shop "Mini Battery Module">}}**.
<div style="width:40%">
{{% img-zoom src="mini-battery-module-orientation.png"  %}}
</div>

## Software guide

1.  **Download the latest BigClown Playground**

    [**BigClown Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

2. Connect the {{% shop "USB Dongle" %}} to your computer

    The drivers will install automatically (FTDI drivers).

3. Run the **BigClown Playground**, go to the **Device** tab.

    Choose the **USB Dongle** serial port and click **Connect**

    {{% img-zoom src="playground-devices-connect.png"  %}}

4. The **radio nodes** from your kit should be already programmed and paired with your **USB Dongle**, please check that out in the image below.

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


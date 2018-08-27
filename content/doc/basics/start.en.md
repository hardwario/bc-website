---
title: "Start"
menu: "doc"
parent: "basics"
---

## Starter Kit quick guide

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

* Check out other BigClown [**projects**]({{< relref "doc/projects/radio-door-sensor.md" >}})
* Use your [**Raspberry PI**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}) or other [**single board computer (SBC)**]({{< relref "doc/tutorials/raspberry-pi-installation.md#setup-on-original-raspbian">}}) as a server.
* Learn about [**MQTT**]({{<relref "doc/interfaces/mqtt-protocol.md">}}) and [**BigClown MQTT topics**]({{<relref "doc/interfaces/mqtt-topics.md">}})
* Try other [**integrations**]({{<relref "doc/integrations/grafana-for-visualization.md" >}}) with **Grafana**, **Blynk**, **IFTTT**, **Ubidots** and others.

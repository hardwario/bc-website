---
title: "Wireless LCD Thermostat"
---

This document will guide you through the **Wireless LCD Thermostat** project.
With this gadget you will be able to control remotly you temperature.

## Block Concept

{{% img-zoom src="block-diagram.svg" %}}

## Requirements

* Either **BigClown Wireless LCD Thermostat Kit**, or individual components:

    * 1x **BigClown LCD Module**

    * 1x **BigClown Core Module**

    * 1x **BigClown Mini Battery Module**

    * 1x **BigClown USB Dongle**

* One of these options:

    * **BigClown Playground** installed

        You can find more information in the document [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}).

    * **Raspberry Pi** with the **BigClown Raspbian** distribution

        You can find more information in the document [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}).

* **BigClown Firmware Tool** installed

    You can find more information in the document [**Toolchain Setup**]({{< relref "doc/tutorials/toolchain-setup.md" >}}).

    {{% note "info" %}}`bcf` is part of Windows Playground Setup already.{{% /note %}}


## Firmware Upload

In this procedure we will use the **BigClown Firmware Tool** to upload firmware to the **Core Module**.

{{< note "note" "Firmware upload to USB Dongle was done in Playground Setup." />}}

1. Connect the Micro USB cable to the **Core Module** and your computer.

2. Upload the firmware to the **Core Module**:

    {{% note "info" %}}You may want to update available firmwares by `bcf update` if the installation has been prolonged for a longer time after Playground Setup{{% /note %}}

    {{% note "warning" %}}You must first [**switch the Core Module to the DFU mode**]({{< relref "doc/tutorials/toolchain-guide.md#switching-core-module-into-dfu-mode" >}}).{{% /note %}}

    {{< note "info" "In case of assembled Button stack without batteris inserted, you can press and hold Button, then connect the USB cable into PC and release Button." />}}

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-lcd-thermostat:latest

3. Remove the Micro USB cable from the **Core Module** and your computer.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}


## Hardware Assembling

1. Start with the **Mini Battery Module**.

    {{% note "warning" %}}Make sure the **Mini Battery Module** does not have batteries inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Mini Battery Module**.

3. Plug the **LCD Module** on top of the **Core Module**.

## Playground Bootstrap

1. Open **Node-RED** in your web browser:

    **http://localhost:1880/**

2. You should see the empty workspace with **Flow 1**.

3. Insert the following snippet in the flow (using **Menu >> Import**) and click in **Flow 1** tab:

    ```json
    [{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

    It will look like this:

    {{% img-zoom src="node-red-gw-controls.png" %}}

    {{% note "info" %}}This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.{{% /note %}}

4. Deploy the flow using the **Deploy** button in the top-right corner.

5. Open the **debug** tab:

    {{% img-zoom src="node-red-gw-debug.png" %}}

    {{% note "info" %}}In the **debug** tab, you will be able to see all the MQTT messages.{{% /note %}}

6. Click on the **List all gateways** button. You should see a response like this in the **debug** tab:

    {{% img-zoom src="node-red-gw-list.png" %}}

{{% note "success" %}}At this point, you've got working **Node-RED**, **MQTT**, **BigClown USB Dongle** and **BigClown Gateway**.{{% /note %}}

## Radio Pairing

In this section, we will create a radio link between the **USB Dongle** and the **Wireless LCD Thermostat**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    {{% img-zoom src="node-red-gw-pair-start.png" %}}

2. Insert the batteries into the **Wireless LCD Thermostat** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

3. Click on the **Stop node pairing** button.

    {{% img-zoom src="node-red-gw-pair-stop.png" %}}

{{% note "success" %}}At this point, you've got established a radio link between the node (**Wireless LCD Thermostat** and the gateway (**USB Dongle**).{{% /note %}}

## Communication Test

Follow these steps in **Node-RED**:

1. Switch to **debug** tab on the right.

2. Insert the following snippet in the flow (using **Menu >> Import**) and click in **Flow 1** tab:

    ```json
    [{"id":"12b3deae.bbbdf1","type":"mqtt in","z":"f2f80e07.95983","name":"","topic":"node/kit-lcd-thermostat:0/#","qos":"2","broker":"25b87ea5.743312","x":390,"y":320,"wires":[["7694514b.9b64d"]]},{"id":"7694514b.9b64d","type":"debug","z":"f2f80e07.95983","name":"","active":true,"console":"false","complete":"false","x":630,"y":320,"wires":[]},{"id":"25b87ea5.743312","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

3. If you see some messages in debug log (like temperature) your kit works correctly.

{{% note "success" %}}At this point, you've got verified radio communication.{{% /note %}}

## Integration with Blynk

Now we have assembled our kit and let's start with some basic integration with **Blynk**. We will start without describing what **Blynk** is. If you want get some information about what **Blynk** is. The best thing you can do is visit their [**page**](https://www.blynk.cc/). In our example we will be showing you how monitor your temperature in time graph.

Firstly we need to configure our **Node-RED** app.

1. If you are using BigClown raspi version you should be fine, but still check that **Blynk** nodes are installed. (You can view them on the left side menu in **Node-RED**). Otherwise you will need to install **Node-RED** package `node-red-contrib-blynk-ws`. You can follow [**this**]({{< relref "doc/tutorials/nodered-library-installation.md" >}}) example for installing libraries to **NodeRED**.

    {{% img-zoom src="nodered-1.png" height="300" width="120" %}}

2. Add another flow (you can add them by big plus button next to the flow name).

3. Insert the following snippet in the flow (using **Menu >> Import**) and click in Flow 3 tab:

    ```json
    [{"id":"4b7b87ba.4d63e8","type":"blynk-ws-out-write","z":"a037b5dc.0a06a8","name":"","pin":"1","pinmode":0,"client":"444c74b2.0e07ac","x":500,"y":380,"wires":[]},{"id":"79791e81.a656f","type":"mqtt in","z":"a037b5dc.0a06a8","name":"","topic":"node/kit-lcd-thermostat:0/thermometer/0:1/temperature","qos":"2","broker":"b8503ac7.122c58","x":220,"y":300,"wires":[["9d2c4798.e734e8"]]},{"id":"9d2c4798.e734e8","type":"function","z":"a037b5dc.0a06a8","name":"Save data","func":"flow.set(\"temp\", parseFloat(msg.payload));\n\nreturn msg;","outputs":1,"noerr":0,"x":520,"y":300,"wires":[[]]},{"id":"ef4f8e35.ba8b8","type":"inject","z":"a037b5dc.0a06a8","name":"","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"x":110,"y":380,"wires":[["f7be3fcf.757a5"]]},{"id":"f7be3fcf.757a5","type":"function","z":"a037b5dc.0a06a8","name":"Load data","func":"msg.payload = flow.get(\"temp\")||0;\nreturn msg;","outputs":1,"noerr":0,"x":300,"y":380,"wires":[["4b7b87ba.4d63e8"]]},{"id":"444c74b2.0e07ac","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com:8080/websockets","key":"2dc85fe6f8124b589557c53196798bb4","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_low":false,"dbg_pins":""},{"id":"b8503ac7.122c58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

    It will look like this:

    {{% img-zoom src="nodered-2.png" %}}

4. Configure MQTT node to connect it on you broker. It will propably connect on localhost if you are using Raspberry Pi. After that you will need to configure **Blynk** node. Just fill in URL `ws://blynk-cloud.com:8080/websockets`. The secret key we will configure later after obtaining one.

    {{% img-zoom src="nodered-screen-2.png" width="400" %}}

5. Now download the **Blynk** app from [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) or [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en).

6. After installing, you should create account, login and you should see something like that:

    {{% img-zoom src="blynk-1.png" width="300" %}}

7. Now click a button on the top right to scan QR code.

    {{% img-zoom src="blynk-2.png" width="300" %}}

8. Now you should scan following QR code to get everything preconfigured.

    {{% img-zoom src="blynk-qr.png" width="400" %}}

9. You should see something like this:

    {{% img-zoom src="blynk-3.png" width="300" %}}

10. Click the settings wheel and you should see settings for your project. Wee need to get *auth-token* which we will copy to our **Node-RED** in **Blynk** node configuration.

    {{% img-zoom src="blynk-4.png" width="300" %}}

11. Now deploy your **Node-RED** app and hit play button in your **Blynk** project and you should be done!

## Related Documents

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}})

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}})

* [**Toolchain Setup**]({{< relref "doc/tutorials/toolchain-setup.md" >}})

* [**Toolchain Guide**]({{< relref "doc/tutorials/toolchain-guide.md" >}})

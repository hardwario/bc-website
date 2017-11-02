---
title: "Wireless Push Button"
---

This document will guide you through the **Wireless Push Button** project. You will be able to interact with your push button in **Node-RED** and trigger the **IFTTT** push notification service when the button gets pressed. You will get the push notification on your smart phone.

## Block Concept

{{% img src="block-diagram.png" %}}

## Requirements

* Either **BigClown Wireless Push Button Kit**, or individual components:

    * 1x **BigClown Button Module**

    * 1x **BigClown Core Module**

    * 1x **BigClown Mini Battery Module**

    * 1x **BigClown USB Dongle**

* One of these options:

    * **BigClown Playground** installed

        You can find more information in the document [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.en.md" >}}).

    * **Raspberry Pi** with the **BigClown Raspbian** distribution

        You can find more information in the document [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}}).

* **BigClown Firmware Tool** installed

    You can find more information in the document [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.en.md" >}}).

## Firmware Upload

In this procedure we will use the **BigClown Firmware Tool** to upload firmware to the **USB Dongle** and the **Core Module**.

1. Insert the **USB Dongle** to your computer.

2. Open the **BigClown Toolchain** prompt (Windows) or **Terminal** application (macOS and Ubuntu).

3. Update the firmware package list:

        bcf update

4. Upload the firmware to the **USB Dongle**:

        bcf flash bigclownlabs/bcf-gateway-usb-dongle:latest

5. Once finished, remove the **USB Dongle** from the computer.

6. Connect the Micro USB cable to the **Core Module** and your computer.

7. Upload the firmware to the **Core Module**:

    {{% note "warning" %}}You must first [**switch the Core Module to the DFU mode**]({{< relref "doc/firmware/toolchain-guide.en.md#switching-core-module-into-dfu-mode" >}}).{{% /note %}}

        bcf flash --dfu bigclownlabs/bcf-kit-push-button:latest

8. Remove the Micro USB cable from the **Core Module** and your computer.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}

## Hardware Assembling

1. Start with the **Mini Battery Module**.

    {{% note "warning" %}}Make sure the **Mini Battery Module** does not have batteries inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Mini Battery Module**.

3. Plug the **Button Module** on top of the **Core Module**.

4. Insert the batteries and test if the LED on the **Core Module** flashes when the button gets pressed.

5. Optionally put the assembly into the appropriate enclosure, if you have one.

    {{% note "info" %}}You can find more information about the enclosures in the document  [**Enclosures**]({{< relref "doc/basics/enclosures.en.md" >}}).{{% /note %}}

6. Insert the **USB Dongle** to your computer.

{{% note "success" %}}At this point your hardware is ready for boostrapping.{{% /note %}}

## Playground Bootstrap

1. Start the **BigClown Gateway**:

        bcg --device <DEVICE>

    {{% note "warning" %}}Replace `DEVICE` with the device in your system, where the **USB Dongle** is connected. It could be `COM1` on Windows, `/dev/ttyUSB0` on Ubuntu or `/dev/cu.*` on macOS.{{% /note %}}

1. Open **Node-RED** in your web browser:

    **http://localhost:1880/**

2. You should see the empty workspace with **Flow 1**.

3. Insert the following snippet in the flow (using **Menu >> Import**):

    ```json
    [{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

    It will look like this:

    {{% img src="node-red-gw-controls.png" width="500" %}}

    {{% note "info" %}}This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.{{% /note %}}

4. Deploy the flow using the **Deploy** button in the top-right corner.

5. Open the **debug** tab:

    {{% img src="node-red-gw-debug.png" width="500" %}}

    {{% note "info" %}}In the **debug** tab, you will be able to see all the MQTT messages.{{% /note %}}

6. Click on the **List all gateways** button. You should see a response like this in the **debug** tab:

    {{% img src="node-red-gw-list.png" width="500" %}}

{{% note "success" %}}At this point, you've got working **Node-RED**, **MQTT**, **BigClown USB Dongle** and **BigClown Gateway**.{{% /note %}}

## Radio Pairing

In this section, we will create a radio link between the **USB Dongle** and the **Wireless Push Button**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    {{% img src="node-red-gw-pair-start.png" width="500" %}}

2. Press and hold the push button for about 3 seconds, the pairing request from the node will be sent.

3. Click on the **Stop node pairing** button.

    {{% img src="node-red-gw-pair-stop.png" width="500" %}}

{{% note "success" %}}At this point, you've got established a radio link between the node (**Wireless Push Button**) and the gateway (**USB Dongle**).{{% /note %}}

## Communication Test

Follow these steps in **Node-RED**:

1. Switch to **debug** tab on the right.

2. Press the button and you should see the counting messages.

    {{% img src="radio-test.png" width="500" %}}

{{% note "success" %}}At this point, you've got verified radio communication.{{% /note %}}

## Integration with IFTTT

In this section, we will create an **Applet** in the **IFTTT** service. The **Applet** is a sort of event-trigger mechanism.

1. Open the web-browser and go to [**IFTTT**](https://ifttt.com):

    {{% img src="ifttt-01.png" width="500" %}}

2. Log in to IFTTT service. You can sign up using your Google or Facebook identity:

    {{% img src="ifttt-02.png" width="500" %}}

3. Go to **My Applets** in the menu and click on the **New Applet** button:

    {{% img src="ifttt-03.png" width="500" %}}

4. Click on **+this** in the `if this then that` sentence:

    {{% img src="ifttt-04.png" width="500" %}}

5. Find a service with the name **Webhooks** and select it:

    {{% img src="ifttt-05.png" width="500" %}}

6. Click on **Receive a web request**:

    {{% img src="ifttt-06.png" width="500" %}}

7. Type `button` in the **Event Name** field and click on **Create Trigger**:

    {{% img src="ifttt-07.png" width="500" %}}

8. Find action service with the name **Notifications** and select it:

    {{% img src="ifttt-08.png" width="500" %}}

9. Click on **Send a notification from the IFTTT app**:

    {{% img src="ifttt-09.png" width="500" %}}

10. Edit the **Notification** field and insert the text `The button has been pressed on {{OccurredAt}}` and push the **Create action** button:

    {{% img src="ifttt-10.png" width="500" %}}

11. Click on the **Finish** button:

    {{% img src="ifttt-11.png" width="500" %}}

12. Click on the **Webhooks** button:

    {{% img src="ifttt-12.png" width="500" %}}

13. Click on the **Documentation** button:

    {{% img src="ifttt-13.png" width="500" %}}

14. Click on the **event** field:

    {{% img src="ifttt-14.png" width="500" %}}

15. Insert the name `button` in the **event** field and keep the window open:

    {{% img src="ifttt-15.png" width="500" %}}

16. Install the **IFTTT** app on your smart phone and sign in using the same account as you just used to create the applet. Allow the app to use the push notifications when asked.

17. Click on the **Test It** button in the web-browser window:

    {{% img src="ifttt-16.png" width="500" %}}

18. You should receive the push notification on your smart phone within a few seconds:

19. Copy this URL to the clipboard for later use:

    {{% img src="ifttt-17.png" width="500" %}}

## Connect IFTTT in Node-RED

In this section, we will create a link between the button event on MQTT and HTTP request to **IFTTT** which will trigger the push notification.

1. Switch to your **Node-RED** flow.

2. Insert the following snippet in the flow (using **Menu >> Import**):

    ```json
    [{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/kit-push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

    It will look like this:

    {{% img src="node-red-ifttt-snippet.png" width="500" %}}

    {{% note "info" %}}This snippet creates a connection between the MQTT topic `node/kit-push-button:0/push-button/-/event-count` and an HTTP request. Before passing the message to the HTTP request, we remove the `payload` parameter since it would be used in the HTTP request body.{{% /note %}}

3. Double click on **http request** node and edit the IFTTT URL obtained in the previous section:

    {{% img src="node-red-ifttt-url.png" width="500" %}}

4. Save the URL by clicking on the **Done** button.

5. Deploy the flow using the **Deploy** button in the top-right corner.

{{% note "success" %}}At this point, you should get a push notification when you press the button.{{% /note %}}

## Related Documents

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.en.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.en.md" >}})

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}})

* [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.en.md" >}})

* [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}})

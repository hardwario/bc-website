---
title: "Radio Flood Detector"
menu:
  main:
    parent: 'projects'
    weight: 20
  doc:
    parent: 'projects'
    weight: 20
---

This document will guide you through the **Radio Flood Detector** project. You will be able to interact with your flood detector in **Node-RED** and trigger the **IFTTT** push notification service when the water leakage gets detected. You will get the push notification on your smart phone.

## Block Concept

{{% img-zoom src="block-diagram.svg" %}}

## Requirements

* Either **BigClown Radio Flood Detector Kit**, or individual components:

    * 1x **BigClown LD-81**

    * 1x **BigClown Sensor Module**

    * 1x **BigClown Core Module**

    * 1x **BigClown Mini Battery Module**

    * 1x **BigClown Radio Dongle**

* One of these options:

    * **BigClown Playground** installed (recommended)

        You can find more information in the [**Quick Start Guide**]({{< relref "/doc/basics/quick-start-guide.en.md" >}}) document.

    * **Raspberry Pi** with the **BigClown Raspbian** distribution

        You can find more information in the document [**Raspberry Pi Installation**]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md" >}}).

    * **BigClown Firmware Tool** installed

        You can find more information in the document [**Toolchain Setup**]({{< relref "/doc/firmware/toolchain-setup.en.md" >}}).



## Firmware Upload

In this procedure we will use the **BigClown Playground** to upload firmware to the **Core Module**.

1. Connect the Micro USB cable to the **Core Module** and your computer.

2. Run the BigClown Playground. In the Firmware tab choose and upload the `bcf-radio-flood-detector` firmware to the **Core Module**:

    {{% core-module-2 %}}

3. Remove the Micro USB cable from the **Core Module** and your computer.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}

## Hardware Assembling

See short video with easy step by step demonstration:

{{< youtube pLUBDdo_niE >}}

1. Start with the **Mini Battery Module**.

    {{% note "warning" %}}Make sure the **Mini Battery Module** does not have batteries inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Mini Battery Module**.

3. Plug the **Sensor Module** on top of the **Core Module**.

4. Connect the red wire of **LD-81** to the **Channel A** of the **Sensor Module**.

5. Connect the black wire of **LD-81** to the **Sensor Module**.

## Playground Bootstrap

{{% note "danger" %}}If you are using the new **BigClown Playground**, then use the **Functions** tab instead of using **http://localhost:1880/**. Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.{{% /note %}}

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

{{% note "success" %}}At this point, you've got working **Node-RED**, **MQTT**, **BigClown Radio Dongle** and **BigClown Gateway**.{{% /note %}}

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio Flood Detector**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    {{% img-zoom src="node-red-gw-pair-start.png" %}}

2. Insert the batteries into the **Radio Flood Detector** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

3. Click on the **Stop node pairing** button.

    {{% img-zoom src="node-red-gw-pair-stop.png" %}}

{{% note "success" %}}At this point, you've got established a radio link between the node (**Radio Flood Detector**) and the gateway (**Radio Dongle**).{{% /note %}}

## Communication Test

Follow these steps in **Node-RED**:

1. Switch to **debug** tab on the right.

2. Put the **LD-81** water leakage sensor into the glass of water to trigger a radio transmission.

    You should then see similar messages:

    {{% img-zoom src="radio-test.png" %}}

{{% note "success" %}}At this point, you've got verified radio communication.{{% /note %}}

## Enclosure

Optionally put the assembly into the appropriate enclosure, if you have one.

{{% note "info" %}}You can find more information about the enclosures in the document [**Enclosures**]({{< relref "/doc/basics/enclosures.en.md" >}}).{{% /note %}}

## Integration with IFTTT

In this section, we will create an **Applet** in the **IFTTT** service. The **Applet** is a sort of event-trigger mechanism.

1. Open the web-browser and go to [**IFTTT**](https://ifttt.com):

    {{% img-zoom src="ifttt-01.png" %}}

2. Log in to IFTTT service. You can sign up using your Google or Facebook identity:

    {{% img-zoom src="ifttt-02.png" %}}

3. Go to **My Applets** in the menu and click on the **New Applet** button:

    {{% img-zoom src="ifttt-03.png" %}}

4. Click on **+this** in the `if this then that` sentence:

    {{% img-zoom src="ifttt-04.png" %}}

5. Find a service with the name **Webhooks** and select it:

    {{% img-zoom src="ifttt-05.png" %}}

6. Click on **Receive a web request**:

    {{% img-zoom src="ifttt-06.png" %}}

7. Type `flood` in the **Event Name** field and click on **Create Trigger**:

    {{% img-zoom src="ifttt-07.png" %}}

8. Click on **+that** in the `if this then that` sentence:

    {{% img-zoom src="ifttt-08.png" %}}

9. Find action service with the name **Notifications** and select it:

    {{% img-zoom src="ifttt-09.png" %}}

10. Click on **Send a notification from the IFTTT app**:

    {{% img-zoom src="ifttt-10.png" %}}

11. Edit the **Notification** field and insert the text `The flood detector has been flooded on {{OccurredAt}}` and push the **Create action** button:

    {{% img-zoom src="ifttt-11.png" %}}

12. Click on the **Finish** button:

    {{% img-zoom src="ifttt-12.png" %}}

13. Click on the **Webhooks** button:

    {{% img-zoom src="ifttt-13.png" %}}

14. Click on the **Documentation** button:

    {{% img-zoom src="ifttt-14.png" %}}

15. Click on the **event** field:

    {{% img-zoom src="ifttt-15.png" %}}

16. Insert the name `flood` in the **event** field and keep the window open:

    {{% img-zoom src="ifttt-16.png" %}}

17. Install the **IFTTT** app on your smart phone and sign in using the same account as you just used to create the applet. Allow the app to use the push notifications when asked.

18. Click on the **Test It** button in the web-browser window:

    {{% img-zoom src="ifttt-17.png" %}}

19. You should receive the push notification on your smart phone within a few seconds:

20. Copy this key to the clipboard for later use:

    {{% img-zoom src="ifttt-18.png" %}}

{{% note "success" %}}At this point, you've got working notification **Applet** in the **IFTTT** service.{{% /note %}}

## Connect IFTTT in Node-RED

In this section, we will create a link between the button event on MQTT and HTTP request to **IFTTT** which will trigger the push notification.

1. Switch to your **Node-RED** flow.

2. Insert the following snippet in the flow (using **Menu >> Import**):

    ```json
    [{"id":"c6ce743.f65db88","type":"mqtt in","z":"d5a82106.8d3fa","name":"","topic":"node/flood-detector:0/flood-detector/a/alarm","qos":"2","broker":"29fba84a.b2af58","x":240,"y":140,"wires":[["7d9c308c.edf04"]]},{"id":"7d9c308c.edf04","type":"switch","z":"d5a82106.8d3fa","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"true","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":510,"y":140,"wires":[["e2287fd0.90124"]]},{"id":"e2287fd0.90124","type":"ifttt out","z":"d5a82106.8d3fa","eventName":"flood","key":"40c1e6be.8cb228","x":670,"y":140,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"40c1e6be.8cb228","type":"ifttt-key","z":""}]
    ```

    It will look like this:

    {{% img-zoom src="node-red-ifttt-snippet.png" %}}

    {{% note "info" %}}This snippet creates a connection between the MQTT topic `node/flood-detector:0/flood-detector/a/alarm` and and IFTTT service. Before passing the message to the IFTTT we have to filter only `true` events.{{% /note %}}

3. Double click on **IFTTT node** node and edit the IFTTT key obtained in the previous section:

    {{% img-zoom src="node-red-ifttt-key.png" %}}

4. Save the settings by clicking on the **Done** button.

5. Deploy the flow using the **Deploy** button in the top-right corner.

{{% note "success" %}}At this point, you should get a push notification when you connect flood sensor with moist fingers or put flood sensor contacts to the water.{{% /note %}}

## Related Documents
basics
* [**Raspberry Pi Installation**]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md" >}})

* [**Toolchain Setup**]({{< relref "/doc/firmware/toolchain-setup.en.md" >}})

* [**Toolchain Guide**]({{< relref "/doc/firmware/toolchain-guide.en.md" >}})

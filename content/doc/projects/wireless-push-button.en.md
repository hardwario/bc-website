---
title: "Wireless Push Button"
---

This document will guide you through the **Wireless Push Button** project. You will be able to interact with your push button in **Node-RED** and trigger the **IFTTT** push notification service when the button gets pressed.

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

        bcf flash bigclownlabs/bcf-usb-dongle:latest

5. Once finished, remove the **USB Dongle** from the computer.

6. Connect the Micro USB cable to the **Core Module** and your computer.

7. Upload the firmware to the **Core Module**:

    {{% note "warning" %}}You must first [**switch the Core Module to the DFU mode**]({{< relref "doc/firmware/toolchain-guide.en.md#switching-core-module-into-dfu-mode" >}}).{{% /note %}}

        bcf flash --dfu bigclownlabs/bcf-kit-push-button:latest

8. Remove the Micro USB cable from the **Core Module** and your computer.

## Hardware Assembling

1. Start with the **Mini Battery Module**.

    {{% note "warning" %}}Make sure the **Mini Battery Module** does not have batteries inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Mini Battery Module**.

3. Plug the **Button Module** on top of the **Core Module**.

4. Insert the batteries and test if the LED on the **Core Module** flashes when the button gets pressed.

5. Optionally put the assembly into the appropriate enclosure, if you have one.

    {{% note "info" %}}You can find more information about the enclosures in the document  [**Enclosures**]({{< relref "doc/basics/enclosures.en.md" >}}).{{% /note %}}

## Playground Integration

1. Open the **Terminal** application.

2. Start the **BigClown Gateway** in the background:

    bcg --device /dev/cu.* &

3. Start Node-RED web service:

    node-red

4. Open the web-browser:

**http://localhost:1880/**

5. You should see the empty workspace with **Flow 1**.

6. Insert the following snippet in the flow (using **Menu >> Import**):

```json
[{"id":"1f72ea23.0cada6","type":"mqtt in","z":"a36dd54f.bb9088","name":"","topic":"#","qos":"2","broker":"ec80d5ef.3f7b48","x":129.5,"y":206,"wires":[["529a17df.d6a6b8"]]},{"id":"529a17df.d6a6b8","type":"debug","z":"a36dd54f.bb9088","name":"","active":true,"console":"false","complete":"false","x":330,"y":160,"wires":[]},{"id":"9673805d.c97a","type":"mqtt in","z":"a36dd54f.bb9088","name":"","topic":"node/push-button/push-button/-/event-count","qos":"2","broker":"ec80d5ef.3f7b48","x":250,"y":280,"wires":[["c1ab91fa.4665e"]]},{"id":"c1ab91fa.4665e","type":"ifttt out","z":"a36dd54f.bb9088","eventName":"button","key":"2fdbd53b.dcf5fa","x":550,"y":340,"wires":[]},{"id":"e1914519.ccf9a8","type":"inject","z":"a36dd54f.bb9088","name":"Get info about all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":200,"y":380,"wires":[["14b136a6.3d6419"]]},{"id":"14b136a6.3d6419","type":"mqtt out","z":"a36dd54f.bb9088","name":"","topic":"","qos":"","retain":"","broker":"aa1a5e49.66a25","x":550,"y":500,"wires":[]},{"id":"217cc3ca.160a0c","type":"inject","z":"a36dd54f.bb9088","name":"Start node enrollment","topic":"gateway/dongle/enrollment/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":180,"y":500,"wires":[["14b136a6.3d6419"]]},{"id":"dcf841d5.4c148","type":"inject","z":"a36dd54f.bb9088","name":"Stop node enrollment","topic":"gateway/dongle/enrollment/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":180,"y":560,"wires":[["14b136a6.3d6419"]]},{"id":"a4f261d0.28e5c","type":"inject","z":"a36dd54f.bb9088","name":"List paired nodes in the dongle","topic":"gateway/dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":210,"y":440,"wires":[["14b136a6.3d6419"]]},{"id":"cfac07fb.a21b58","type":"inject","z":"a36dd54f.bb9088","name":"Delete all nodes from the dongle","topic":"gateway/dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":210,"y":620,"wires":[["14b136a6.3d6419"]]},{"id":"ec80d5ef.3f7b48","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"2fdbd53b.dcf5fa","type":"ifttt-key","z":""},{"id":"aa1a5e49.66a25","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

## Radio Enrollment

Follow these steps in Node-RED:

1. Click on the **Start node enrollment** button.

2. Press and hold the push button for about 3 seconds, the pairing request from the node will be sent.

3. Click on the **Stop node enrollment** button.

## Communication Test

Follow these steps in Node-RED:

1. Switch to **debug** tab on the right.

2. Press the button and you should see the counting messages.

**TODO**

## Integration with IFTTT

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

## Related Documents

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.en.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.en.md" >}})

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}})

* [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.en.md" >}})

* [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}})

---
title: "Radio Door Sensor"
---

**Radio Door Sensor** will notify you to your phone anytime someone opens the door, window or cookie jar! It is also usable as a notification when you forget to close garage or gate in the evening.

It can be equiped with magnet for easy attach enclosure and works for many years on batteries. Really easy installation!

<div style="display:grid;grid-gap: 10px;">

<div style="grid-column: 1; grid-row:1; border-radius:5px">
{{% img-zoom src="preview.jpg"  %}}
</div>

<div style="grid-column: 2; grid-row:1" >
{{% img-zoom src="overview.jpg"  %}}
</div>

<div style="grid-column: 1; grid-row:2" >
{{% img-zoom src="phone-notification.jpg" width="100%" %}}
</div>

<div style="grid-column: 2; grid-row:2" >
{{% img-zoom src="block-diagram.svg"  %}}
</div>

</div>


## Project Intro Video

{{<youtube "cvO_tXcAvZ8">}}

## Requirements

* **{{% shop "Radio Dongle" %}}**
* **{{% shop "Core Module" %}}**
* **{{% shop "Battery Module" %}}**
* **{{% shop "Sensor Module" %}}**
* **{{% shop "Magnetic Switch" %}}** (for screw SA-201A, self-adhesive SA-203A)

* You will need **Windows**, **Linux** or **macOS** computer.

{{< note "info">}}
You can also connect Radio Dongle to the Raspberry Pi or other single board computer. Please see [**Raspberry Pi Installation**]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md" >}}) document.
{{< /note  >}}

## Download BigClown Playground

Download the latest [BigClown Playground](https://github.com/bigclownlabs/bch-playground/releases) for your operating system.

After download run the Playground application.

{{% img-zoom src="playground-run.jpg" width="100%" %}}

Now we need to make sure that modules use the latest firmware. You need to flash your **{{% shop "Radio Dongle" %}}** and the remote node **{{% shop "Core Module" %}}**.


## Flash Door Sensor firmware

1. Connect **just** the {{% shop "Door Sensor" %}} to the USB of your computer.

2. In Playground go to **Firmware tab**, select the firmware `bigclownlabs/bcf-radio-door-sensor`, choose the device's serial port in **Device** and click **FLASH FIRMWARE**.

    {{% img-zoom src="playground-flash-door-sensor.jpg" width="100%" %}}

3. Disconnect **Door Sensor** from your computer. Disconnect the batteries and keep the Door Sensor unpowered for pairing process later.



## Flash Radio Dongle firmware

1. Connect **just** the {{% shop "Radio Dongle" %}} to the USB of your computer.

2. In Playground go to **Firmware tab**, select the firmware `bigclownlabs/bcf-gateway-usb-dongle`, choose the device's serial port in **Device** and click **FLASH FIRMWARE**.

    {{% img-zoom src="playground-flash-dongle.jpg" width="100%" %}}

3. Keep **{{% shop "Radio Dongle" %}}** connected to your computer

## Start the gateway

In the bottom left corner, click on **Gateway** and select device's serial port. The **Gateway** text should change to **green**.

{{% img-zoom src="playground-gateway-connect.jpg" width="100%" %}}

## Pair the Radio Door Sensor

1. In the **Radio** tab click on the **Pairing start** button.

    {{% img-zoom src="playground-pairing-start.jpg" width="100%" %}}

2. Now insert the batteries to the Door Sensor. The pairing command is send every time you put batteries to the remote module.

3. Stop the pairing by clicking **Pairing stop**.

    {{% img-zoom src="playground-pairing-stop.jpg" width="100%" %}}

## Test the Door Sensor

1. Switch to **MQTT** tab and subscribe to `#` topic.

2. Now put the magnet to and away from the sensor, you should see MQTT messages in the top window.

3. Other messages are button press and temperature change. Try it!

    {{% img-zoom src="playground-mqtt-test.jpg" width="100%" %}}

{{% note "success" %}}Perfect! You have created radio network which is receiving events and measured temperature.{{% /note %}}

## IFTTT integration

In this section, we will create an **Applet** in the **IFTTT** service. The **Applet** is a sort of event-trigger mechanism.

1. Open the web-browser and go to [**IFTTT**](https://ifttt.com):

    {{% img-zoom src="ifttt-01.png" width="50%" %}}

2. Log in to IFTTT service. You can sign up using your Google or Facebook identity:

    {{% img-zoom src="ifttt-02.png" width="50%"  %}}

3. Go to **My Applets** in the menu and click on the **New Applet** button:

    {{% img-zoom src="ifttt-03.png" width="50%"  %}}

4. Click on **+this** in the `if this then that` sentence:

    {{% img-zoom src="ifttt-04.png" width="50%"  %}}

5. Find a service with the name **Webhooks** and select it:

    {{% img-zoom src="ifttt-05.png" width="50%" %}}

6. Click on **Receive a web request**:

    {{% img-zoom src="ifttt-06.png"  width="50%" %}}

7. Type `door` in the **Event Name** field and click on **Create Trigger**:

    {{% img-zoom src="ifttt-07.svg" width="50%"  %}}

8. Click on **+that** in the `if this then that` sentence:

    {{% img-zoom src="ifttt-08.png" width="50%"  %}}

9. Find action service with the name **Notifications** and select it:

    {{% img-zoom src="ifttt-09.png" width="50%"  %}}

10. Click on **Send a notification from the IFTTT app**:

    {{% img-zoom src="ifttt-10.png" width="50%"  %}}

11. Edit the **Notification** field and insert the text `Door Sensor Alarm at {{OccurredAt}} !` and push the **Create action** button:

    {{% img-zoom src="ifttt-11.png" width="50%"  %}}

12. Click on the **Finish** button:

    {{% img-zoom src="ifttt-12.png" width="50%"  %}}

13. Click on the **Webhooks** button:

    {{% img-zoom src="ifttt-13.png" width="50%"  %}}

14. Click on the **Documentation** button:

    {{% img-zoom src="ifttt-14.png" width="50%"  %}}

15. Now you have your notification key. **Keep this page open so you can copy this key to the Node-RED later.**

    {{% img-zoom src="ifttt-15.png" width="50%"  %}}

16. Install the **IFTTT** app on your smart phone and sign in using the same account as you just used to create the applet. Allow the app to use the push notifications when asked.

{{% note "success" %}}At this point, you've got working notification **Applet** in the **IFTTT** service.{{% /note %}}

## Node-RED plug-in for IFTTT

To use IFTTT in Node-RED, we can use simple plug-in which will send notifications.

1. Click on **MQTT** tab, then on the menu in the top right corner and select **Manage palette**

    {{% img-zoom src="node-red-manage-palette.jpg" width="100%" %}}

2. Switch to **Install** tab, search for `ifttt` and click on the **install** button. In the pop-up window, click again on **Install**.

    {{% img-zoom src="node-red-install-ifttt.jpg" width="100%" %}}

3. After installation you see confirmation that new nodes has beed addded to the Node-RED.

    {{% img-zoom src="node-red-installed-confirmation.jpg" width="50%" %}}

{{% note "success" %}}Perfect! Node-RED plugin for IFTTT will allow to send notification directly to you phone.{{% /note %}}

## Import Node-RED notification flow

1. Copy the text below to the clipboard.

    ```
    [{"id":"5ca15197.aef91","type":"mqtt in","z":"49c6b66c.16eaf8","name":"","topic":"node/door-sensor:0/door-sensor/a/state","qos":"2","broker":"67b8de4a.029d3","x":210,"y":100,"wires":[["ccd36bb4.eccae8"]]},{"id":"ccd36bb4.eccae8","type":"switch","z":"49c6b66c.16eaf8","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"false","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":210,"y":220,"wires":[["6cb9da01.6abab4"]]},{"id":"6cb9da01.6abab4","type":"ifttt out","z":"49c6b66c.16eaf8","eventName":"door","key":"","x":210,"y":320,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
    ```

2. Click on the top right **menu**, then select **Import** and **Clipboard**.

    {{% img-zoom src="node-red-menu-import.jpg" width="100%" %}}

3. Paste the text from clipboard to the textbox and press **Import**.

    {{% img-zoom src="node-red-dialog-import.jpg" width="100%" %}}

## Set IFTTT key

1. You have imported the flow. Now you need to fill in your own **IFTTT key**. Double click on the **IFTTT** node.

    {{% img-zoom src="node-red-doubleclick-ifttt.jpg" width="100%" %}}

2. Click on a **pencil symbol** and copy and **paste the key** from the last step of IFTTT integration chapter. Check that the **Event name** is set to the **door** event. Then click **Done**.

    {{% img-zoom src="node-red-config-ifttt.jpg" width="100%" %}}

## Run and test your flow!

1. Everytime you change the flow, you have to click on the **Deploy** button in the right top corner. **Please do that now.**

    {{% img-zoom src="node-red-deploy.jpg" width="100%" %}}

2. Now put the magnet near the magnetic sensor and away on your Radio Door Sensor. You should get IFTTT notification in a few seconds later!

    You should see "true" and "false" messages in the right **debug** tab and during **false** there will be a **Sent!** green flag near the IFTTT node for a while.

    {{% img-zoom src="node-red-test.jpg" width="100%" %}}

    If you would like be notified on "true" messages instead of **false**, just open the **switch node** and change the `false` text in the rules to `true`.

    {{% img-zoom src="phone-notification.jpg" width="100%" %}}

{{% note "success" %}}Now find the right spot for the **Radio Door Sensor** and enjoy the notifications you get!{{% /note %}}

## More functionality

Import this flow to Node-RED that will be able to:

- Show current door state with a graphical padlock
- Display the stopwatch for opened doors. Also get an event after the doors are opened for set amount of seconds
- Check the state of the door at the set time and generate event

```
[{"id":"6f038501.0d3aec","type":"mqtt in","z":"84faeffa.c3a93","name":"","topic":"node/door-sensor:0/door-sensor/a/state","qos":"2","broker":"29fba84a.b2af58","x":290,"y":260,"wires":[["27a2954e.e0ee9a"]]},{"id":"968704d7.760558","type":"ui_switch","z":"84faeffa.c3a93","name":"","label":"Doors","group":"57ff470b.93fdf8","order":0,"width":"0","height":"0","passthru":false,"decouple":"true","topic":"","style":"","onvalue":"true","onvalueType":"str","onicon":"fa-lock","oncolor":"green","offvalue":"false","offvalueType":"str","officon":"fa-unlock","offcolor":"red","x":750,"y":260,"wires":[[]]},{"id":"cd19b231.5a539","type":"inject","z":"84faeffa.c3a93","name":"","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":0.1,"x":210,"y":420,"wires":[["90766ef0.cb081"]]},{"id":"ec67f171.3a0db","type":"ui_text","z":"84faeffa.c3a93","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"name":"","label":"Opened (sec)","format":"{{msg.payload}}","layout":"row-spread","x":580,"y":380,"wires":[]},{"id":"90766ef0.cb081","type":"function","z":"84faeffa.c3a93","name":"human time","func":"var human = {payload : \"\"};\nvar seconds = {payload : 0};\n\nif(flow.get(\"state\") == \"true\")\n{\n    human.payload = \"CLOSED\";\n} else\n{\n    diff = parseInt((Date.now() - flow.get(\"timestamp\")));\n    human.payload = new Date(diff).toString().slice(16,24);\n    seconds.payload = parseInt(diff/1000);\n}\n\n\nreturn [human, seconds];","outputs":2,"noerr":0,"x":390,"y":420,"wires":[["ec67f171.3a0db"],["fa64f9a0.2e58e8"]],"outputLabels":["human time","seconds"],"icon":"node-red/timer.png"},{"id":"27a2954e.e0ee9a","type":"change","z":"84faeffa.c3a93","name":"","rules":[{"t":"set","p":"state","pt":"flow","to":"payload","tot":"msg"},{"t":"set","p":"timestamp","pt":"flow","to":"","tot":"date"}],"action":"","property":"","from":"","to":"","reg":false,"x":580,"y":260,"wires":[["968704d7.760558"]]},{"id":"3ed1d655.049fda","type":"inject","z":"84faeffa.c3a93","name":"at 22:00","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 22 * * *","once":false,"onceDelay":0.1,"x":200,"y":600,"wires":[["66b56029.25196"]]},{"id":"66b56029.25196","type":"switch","z":"84faeffa.c3a93","name":"","property":"state","propertyType":"flow","rules":[{"t":"eq","v":"false","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":370,"y":600,"wires":[["bf5ca77b.366198"]]},{"id":"94e19310.ac12e","type":"debug","z":"84faeffa.c3a93","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":600,"wires":[]},{"id":"bf5ca77b.366198","type":"change","z":"84faeffa.c3a93","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"Door opened at night","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":580,"y":600,"wires":[["94e19310.ac12e"]]},{"id":"fa64f9a0.2e58e8","type":"switch","z":"84faeffa.c3a93","name":"opened for 5 s","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"5","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":580,"y":440,"wires":[["e3ba7f50.53703"]]},{"id":"e3ba7f50.53703","type":"debug","z":"84faeffa.c3a93","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":440,"wires":[]},{"id":"cd9712a1.91c45","type":"comment","z":"84faeffa.c3a93","name":"Save state to flow and show it on dasboard","info":"","x":300,"y":200,"wires":[]},{"id":"21a591a0.10411e","type":"comment","z":"84faeffa.c3a93","name":"Opened doors stopwatch","info":"","x":250,"y":360,"wires":[]},{"id":"6752875e.0092b8","type":"comment","z":"84faeffa.c3a93","name":"Check door state at 22:00","info":"","x":250,"y":540,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","z":"","name":"Default","tab":"11207769.c31889","disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

{{% img-zoom src="node-red-more-flows.png" %}}

---
title: "Radio Soil Sensor"
---

**Radio Door Sensor** will notify you to your phone anytime someone opens the door, window or cookie jar! It is also usable as a notification when you forget to close garage or gate in the evening.

<div style="display:grid;grid-gap: 10px;">

<div style="grid-column: 1; grid-row:1; border-radius:5px">
{{% img-zoom src="preview.jpg"  %}}
</div>

<div style="grid-column: 2; grid-row:1" >
{{% img-zoom src="overview.jpg"  %}}
</div>

<div style="grid-column: 3; grid-row:1" >
{{% img-zoom src="block-diagram.svg"  %}}
</div>

</div>

<!--
## Video tutorial
#F3CB1D
{{<youtube "_6kU-_ldaGOw">}}
-->
## Requirements

* **{{% shop "USB Dongle" %}}**
* **{{% shop "Core Module" %}}**
* **{{% shop "Battery Module" %}}**
* **{{% shop "Sensor Module" %}}**
* **{{% shop "Magnetic Switch" %}}**

* You will need **Windows**, **Linux** or **macOS** computer.

{{< note "info">}}
You can also connect USB Dongle to the Raspberry Pi or other single board computer. Please see [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}) document.
{{< /note  >}}

## BigClown Playground

Download the latest [BigClown Playground](https://github.com/bigclownlabs/bch-playground/releases) for your operating system.

After download run the Playground application.

{{% img-zoom src="playground-run.jpg" width="50%" %}}

Now we need to make sure that modules use the latest firmware. You need to flash your **{{% shop "USB Dongle" %}}** and the remote node **{{% shop "Core Module" %}}**.


## Flashing Door Sensor

1. Connect **just** the {{% shop "Door Sensor" %}} to the USB of your computer.

2. In Playground go to **Firmware tab**, select the firmware `bigclownlabs/bcf-radio-door-sensor`, choose the device's serial port in **Device** and click **FLASH FIRMWARE**.

    {{% img-zoom src="playground-flash-door-sensor.jpg" width="100%" %}}

3. Disconnect **Door Sensor** from your computer. Disconnect the batteries and keep the Door Sensor unpowered for pairing process later.



## Flashing USB Dongle

1. Connect **just** the {{% shop "USB Dongle" %}} to the USB of your computer.

2. In Playground go to **Firmware tab**, select the firmware `bigclownlabs/bcf-gateway-usb-dongle`, choose the device's serial port in **Device** and click **FLASH FIRMWARE**.

    {{% img-zoom src="playground-flash-dongle.jpg" width="100%" %}}

3. Keep **{{% shop "USB Dongle" %}}** connected to your computer

## Start the gateway

In the bottom left corner, click on **Gateway** and select device's serial port. The **Gateway** text should change to **green**.

{{% img-zoom src="playground-gateway-connect.jpg" width="50%" %}}

## Pair the Radio Door Sensor

1. In the **Radio** tab click on the **Pairing start** button.

    {{% img-zoom src="playground-pairing-start.jpg" width="50%" %}}

2. Now insert the batteries to the Door Sensor. The pairing command is send every time you put batteries to the remote module.

3. Stop the pairing by clicking **Stop pairing**.

    {{% img-zoom src="playground-pairing-stop.jpg" width="50%" %}}

## Test the Door Sensor

1. Switch to **MQTT** tab and subscribe to `#` topic.

2. Now put the magnet to and away from the sensor, you should see MQTT messages in the top window.

3. Other messages are button press and temperature change. Try it!

    {{% img-zoom src="playground-mqtt-test.jpg" width="50%" %}}

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

    {{% svg-zoom src="ifttt-07.svg" width="50%"  %}}

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

15. Copy your key to the clipboard for later use:

    {{% img-zoom src="ifttt-15.png" width="50%"  %}}

{{% note "success" %}}At this point, you've got working notification **Applet** in the **IFTTT** service.{{% /note %}}

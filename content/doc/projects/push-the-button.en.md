---
title: "Push The Button"
menu:
  main:
    parent: 'projects'
    weight: 10
  doc:
    parent: 'projects'
    weight: 10
---

**Push Button Kit** can interact with your world. Get phone notification, play next Spotify song, control your smart lights, trigger the egg timer or send a Tweet to the world.

In this tutorial you create a simple project with a button, that sends you push notification to your phone everytime you press it.

<div style="display:grid;grid-gap: 10px;">

<div style="grid-column: 1; grid-row:1; border-radius:5px">
{{% img-zoom src="button-garage.jpg"  %}}
</div>

<div style="grid-column: 2; grid-row:1" >
{{% img-zoom src="button-dining-table.jpg"  %}}
</div>

</div>

## Build Hardware

You will need the {{< shop "Push Button Kit" >}} and {{< shop "Radio Dongle" >}}.

1. Put all three modules together to build the **Push Button Kit**. Note the orientation of the Mini Battery Module on the image below.

    <div style="width:50%">
        {{% img-zoom src="mini-battery-module-orientation.png"  %}}
    </div>

2. Put the batteries in.

{{% note "info" %}}The red LED on the Core Module will light up for 2 seconds when the batteries are inserted. This way you know that batteries are fine and kit is running ok.{{% /note %}}

## Playground Set-Up

In this step you run the **Playground** application that manages Radio Dongle, Push Button and thanks to the **Node-RED** connects everything together.

1. Download and run the latest [**BigClown Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

    <div style="width:20%;">
        {{% img src="playground-logo.png"  %}}
    </div>

2. Connect {{< shop "Radio Dongle" >}} to your computer.

    <div style="width:20%;">
        {{% img src="connect-usb-dongle.png"  %}}
    </div>

3. Go to the **Devices** tab, check that the Radio Dongle is detected and click **Connect**.

    {{% note "info" %}}If you cannot see Radio Dongle in the devices, please see the <a href="#troubleshooting">Troubleshooting</a> chapter.{{% /note %}}

    {{% img-zoom src="playground-devices-connect.png"  %}}


4. When connected. The already flashed and paired Push Button Kit will be in the paired devices.

    {{% img-zoom src="playground-devices-connected.png"  %}}

5. Switch to the **Functions** tab and make sure you see the flow on the image below.

    {{% img-zoom src="node-red-flow.png"  %}}

    In case you don't see the flow, you can copy the text below and paste it into the Node-RED's Menu > Import > Clipboard.

    ```
    [{"id":"103c675c.c81139","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"29fba84a.b2af58","x":270,"y":360,"wires":[["ff41c7e0.06eba8"]]},{"id":"f507ecc3.8f82b","type":"blynk-ws-out-notify","z":"2c41a2bd.aa36ae","name":"Blynk notification","client":"fc4bbabb.9bb1b8","queue":false,"rate":5,"x":790,"y":360,"wires":[]},{"id":"ff41c7e0.06eba8","type":"change","z":"2c41a2bd.aa36ae","name":"Set message","rules":[{"t":"set","p":"payload","pt":"msg","to":"Button pressed, you're the best!","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":570,"y":360,"wires":[["f507ecc3.8f82b"]]},{"id":"c131dd35.bb855","type":"comment","z":"2c41a2bd.aa36ae","name":"Push Button Kit flow","info":"","x":190,"y":300,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"fc4bbabb.9bb1b8","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"5cf554e34caf4d49a1b24cd07c5e2c13","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_sync":false,"dbg_bridge":false,"dbg_low":false,"dbg_pins":"","multi_cmd":false,"proxy_type":"no","proxy_url":""}]
    ```

## Blynk Mobile App Set-Up

In this step you configure **Blynk** application on your phone so you can get notifications from the **BigClown Playground**.

1. Now download the **Blynk** app from [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) or [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Create an account and log-in.

2. Click on the **QR icon**.

    {{% img-zoom src="blynk-copy.png" width="300" %}}

3. Scan following QR code to get everything preconfigured.

    <div style="width:20%;">
        {{% img-zoom src="blynk-qr-code-push.button-kit.png" %}}
    </div>

4. You will see this imported **project** with a single **Notification Widget**.

    Click on the **Settings icon**.

    {{% img-zoom src="blynk-config.png" width="300" %}}

5. Scroll down and click on **Email all** tokens. We use this token from you email later.

    {{% img-zoom src="blynk-token.png" width="300" %}}

6. Now you need start the Blynk project. Click on the **Play** symbol.

    {{% img-zoom src="blynk-play.png" width="300" %}}

## Putting it all together

The final step is to connect Node-RED and Blynk together, so you can get the notifications.

1. In the **Playground** **Functions** tab doubleclick on the **Blynk notification** node.

2. Click on the **pencil icon** and paste the token you've received in the email. Click **Done**.

3. Click the **Deploy** button. Everytime you edit the Node-RED flow you have to apply changes!

{{% img-zoom src="node-red-token.png" %}}


## Action !

The time has come to <span style="font-size:190%; font-weight:bold;">PUSH THE BUTTON</span>

{{% img-zoom src="push-the-button.png" width="200" %}}

{{% img-zoom src="button-pressed.png" width="300" %}}



## Learn More

The goal of this **Push Button Project** is to show the basics in a few simple steps. Now you can learn more by browsing the **documentation** or by visiting the **links below**.

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

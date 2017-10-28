---
title: Quick tutorial
slug: tutorial
---

This document is a practical guide of using BigClown IoT system. We will guide you how  **Raspberry Pi** can read temperature from **Core Module**, control the LED, measure relative humidity from **Humidity Tag**, control small electronic devices using **Relay Module** or create wireless network using **USB Dongle**. Measurement and control is configurable by user-friendy **Node-RED** web application which is running inside the **Raspberry Pi** and allows an easy task automation in your web browser.
<!--
Tento dokument slouží jako praktická ukázka práce s IoT sadou BigClown. Ukážeme si, jak lze v **Raspberry Pi** vyčítat teplotu z **Core Module**, ovládat LED diodu, měřit relativní vlhkost vzduchu z **Humidity Tag**, řídit malý spotřebič pomocí **Relay Module** nebo vytvořit rádiovou síť prostřednictvím **USB Dongle**. Měření i ovládání je demonstrované pomocí nástroje **Node-RED**, který běží v **Raspberry Pi** a umožňuje uživateli snadnou automatizaci úloh přes webové rozhraní.-->

This tutorial is divided to several chapters. We suggest you to study them one by one. The subsequent chapter builds on the knowledge of the previous chapters. At the end of the every chapter there is a link to more detailed instructions, which can help you in case of confusion.
<!--
Tento tutoriál je rozdělený do několika kapitol. Doporučujeme je prostudovat postupně, protože následující kapitoly staví na znalostech z předchozích kapitol. Na konci téměř každé kapitoly je odkaz na detailní postup, který vám pomůže v případě nejasností.
-->
First we will demonstrate basic functionality without a wireless network. We use just a single **Core Module** connected to the **Raspberry Pi** by a USB cable.
<!--
Nejprve si pro jednoduchost předvedeme základní funkčnost bez rádia s jedním Core Module připojeným USB kabelem do Raspberry Pi. Všechny získané znalosti pak lze bez rozdílu použít i u bezdrátové sítě, která je popsána v pozdějších kapitolách tohoto tutoriálu.
-->

What would we need:

  * {{< shop "Raspberry Pi" >}} + {{< shop "MicroSDHC Memory Card 8GB" >}}
  * {{< shop "Core Module" >}}

Optionally for wireless network you need:

  * {{< shop "USB Dongle" >}} (or second one {{< shop "Core Module" >}})
  * {{< shop "Mini Battery Module" >}}
  * {{< shop "Humidity Tag" >}}
  * {{< shop "Relay Module" >}}

## Raspberry Pi installation

The easiest way to start is to download [pre-configured BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). This image already has pre-installed [needed services and tools]({{< relref "doc/tutorials/raspberry-pi-installation.en.md#odlišnosti-od-originální-distribuce-raspbian" >}}). It contaions USB gateway, MQTT broker, Node-RED and **bcf** firmware flash utility. The downloaded Raspberry Pi image has to be flashed to the MicroSD card with `dd` command or by **Win32DiskImager** tool. You can also download official Raspbian and install necessary packages by yourself.

[Detailed Raspberry Pi instructions]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}})

## Connecting to the Raspberry Pi

Please insert the flashed MicroSD card to the Raspberry Pi. Then connect the Ethernet cable and the **Core Module** or **USB Dongle**. After the **Raspberry Pi** boots up you should be able to find it at address `hub.local`. You can try the command `ping hub.local`.

{{< note "warning" >}}
If the Raspberry Pi is not visible on the network, there's something wrong with your network or your system don't support **mDNS** and you have to find Raspberry Pi IP address in your router's **DHCP** configuration.
{{< /note >}}

Please log on the Raspberry Pi shell by typing `ssh pi@hub.localhost` command or use the Windows program **putty**.

[Detailed Raspberry Pi login instructions]({{< relref "doc/tutorials/raspberry-pi-login.en.md" >}})

## Firmware upload

For quick start we've create a Python command-line utility **bcf**, which automatically downloads latest released firmwares from GitHub and will flash the modules. On the Raspberry Pi you need first to update the list of releases by typing `sudo bcf update`. Then by typing `sudo bcf list` you get the list of pre-compiled firmwares.

We'll flash the **bcf-usb-gateway** firmware. This firmware for the gateway contains functions for all BigClown sensors and modules. After the start the **Core Module** automatically detects connected sensors and sends the measured values by USB to the **Raspberry Pi**.

Before flashing is necessary to switch the **Core Module** to the programming **DFU** mode. First connect the **Core Module** to the **Raspberry Pi** by the micro USB cable. Then set the module to the **DFU** mode by pressing and holding `B` boot button, the shortly press the `R` reset button. Then you can release the `B` boot button. Now you can flash the **Core Module** by typing the command below.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

After the firmware flashing the **Core Module** will automatically restart and the flashed firmware will be run.

[Detailed firmware flashing instructions]({{< relref "doc/tutorials/firmware-upload.en.md" >}}).

## USB-MQTT communication bridge

**USB Dongle** or **Core Module** with the **gateway** firmware is using virtual serial port over USB to exchange the data. This communication is then redirected on the **Raspberry Pi** to the **MQTT** messages thanks to the **bch-gateway** service.

All the messages from modules go through the gateway to the MQTT broker. The MQTT is an open standard and also our back-bone system for passing the messages both ways.
In the middle of this communication system is the MQTT broker. Which is a server that accepts client connections. Between the broker and clients are flowing MQTT messages. Each of them contains **topic** and **payload**. Topic is a text string and has directory-like structure with the `/` delimeter (eg. `gateway/dongle/temperature/get`). Payload isn't defined by a MQTT standard and BigClown is sending these data types: numbers, strings, boolean values and JSONs.

Other services can easily connect to the MQTT broker and extend the functionality. Like Node-RED, MQTT-Spy or Android MQTT Dash application.

Another option is to enaable port-formwarding of the MQTT port (1883) on you NAT/network router. Then you can connect to your broker from anywhere in the world. It is also possible to set-up a **bridge** with other Mosquitto MQTT brokers. All the brokers then share the same messages between each other. Both of these described methods needs proper security settings. For example by TLS connection.

## Subscribing and publishing MQTT messages

This chapter is there for completion. Reading of the measured values is explained also in the next chapter with graphical Node-RED application.

There's a **Core Module** connected to the **Raspberry Pi**. Now we display the measured data which are send by the MQTT broker.

First we try to subscribe to the topic with `mosquitto_sub` command-line utility. For publishing MQTT messages there's another utility `mosquitto_pub`. Pelase write the command below to your **Raspberry Pi**

```
mosquitto_sub -t "#" -v
```

After a while you should see a messages from the temperature sensor on the **Core Module**. You can also see the button events when you press the `B` button on the **Core Module**.

{{< note "info" >}}
For battery saving reasons the temperature is only send when there's a change. For testing purporses it is appropriate make the temperature sensor cooler or warmer.
{{< /note >}}

```
pi@hub:~ $ mosquitto_sub -t "#" -v
node/836d19821664/thermometer/0:1/temperature 24.69
node/836d19821664/thermometer/0:1/temperature 24.94
node/836d19821664/push-button/-/event-count 5
```

The `-t` parameter if for **topic** which we would like to subscribe. The hash symbol `#` means that we would like to subscribe to all topics. The parameter `-v` displays more verbose output to the console, so we can see not only values but also messages topics.

Another MQTT wildcard symbol is question mark `?`, which has the similar functionality like `#`, but it can be used only in one MQTT topic level (topic to read all thermometers `node/?/thermometer`).

We'll try to turn on an LED on the **Core Module**. In the next command you have to edit `{id}` based on your own module ID. The ID can be obtained from the messages you've received previously.

```
mosquitto_pub -t "node/{id}/led/-/state/set" -m true
```

## Opening the Node-RED

**Node-RED** is a web application pre-installed in **BigClown Raspbian** which runs on **Raspberry Pi**. You can run it in your web browser and display, process measured values and then send commands to other modules like **Relay Module**, **Power Module**, **LCD Module**.

Please type the `hub.local:1800` address to your web browser.

<img alt="Node-RED" src="node-red-mqtt.png" style="max-width:100%;" />

On the left panel you choose the building blocks which you place by dragging and dropping to the middle to the **flow**. Blocks are divided to several sections, the most important are **input**, **output**, **function** and **dashboard**. After the placement of the blocks you can connect them with wires and create a **flow**.

On the right side of the screen there are tabs **info** and very important tab **debug**. Later we will use also the **dashboard** tab to open our own designed page with gauges, switches and buttons.

When you create any change in the flow or configuration, you have to apply the changes by pressing the **deploy** button at the top right corner of the screen.

**TODO** link to the article Integration > Node-RED

## Subscribing to the MQTT messages in Node-RED

First we will output all the incoming MQTT messages to the **debug** output. The following procedure will explain how to create basic flow printing all MQTT messages to the **debug** tab. You can follow this instructions or import the flow below by the **Import** option in the top right menu.

{{% syntax copy="true" %}}
```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"#","qos":"2","broker":"ba3b2e25.7c8b7","x":170,"y":100,"wires":[["2dbd1aa6.284476"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":390,"y":100,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
{{% /syntax %}}

If you would like to create this flow manually, please follow these instructions. From the **input** section drag and drop the **mqtt** block to the empty flow. After that select and place from the **output** section the **debug** block.
Now you need to connect these blocks by the mouse. This way you have created your first flow.

<img src="mqtt-all-flow.png" style="max-width:100%" />

Now it is necessary to configure **mqtt** block. By double clicking on the block open the setting and set these parameters:

  * server: localhost:1883
  * topic: #

<img src="mqtt-configure.png" style="max-width:100%" />

After you save the block settings you have to apply the changes by the **deploy** button. After deploying switch to the **debug** tab and after few moments you'll see incoming messages from connected **Core Module**. You can also press `B` button on the **Core Module** and this event will also appear in the **debug** log.

<img src="mqtt-all-debug.png" style="max-width:100%" />

## Displaying the temperature

Now you can see all the incoming messages. In case we would like to receive only temperature from one module, we have to change the topic in the **mqtt** block. We need to change `#` to the `node/836d19821664/thermometer/0:1/temperature`. The address `836d19821664` needs to be replaced by your own **ID** which you can get from the **debug** tab from other messages.

For the graphical representation of received values you can use **Node-RED dasboard**. Please insert the **gauge** block, which is in the left list of the block at the bottom. This block needs to be configured.

<img src="gauge-flow.png" style="max-width:100%" />

Double click on the **gauge** block for configuration. First create the new dashboard group by clicking the pencil symbol at the **Add new ui_group** field.
In the next opened dialog again click the pencil symbol at the **Add new ui_tab**. Now confirm both opened dialogs and the default dashboard tab and group is created. Before closing the **gauge** settings change the **Range** of the **gauge** to values from **0** to **40** and confirm this last opened dialog. Press the **deploy** to apply the changes and open the dasboard.

<img src="temperature-mqtt-dashboard.gif" style="max-width:100%;" />


{{< note "info" >}}
For battery saving reasons the temperature is only send when there's a change. For testing purporses it is appropriate make the temperature sensor cooler or warmer.
{{< /note >}}

Dashboard can be opened in the right **dashboard** tab by clicking on the arrow symbol or by typing the `hub.local:1880/ui` address to your browser.

<img src="gauge-dashboard.png" style="max-width:100%" />

Here's the complete flow in case of any issues.

{{% syntax copy="true" %}}
```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"node/836d19821664/thermometer/0:1/temperature","qos":"2","broker":"ba3b2e25.7c8b7","x":290,"y":160,"wires":[["2dbd1aa6.284476","5ed6f4cf.a598fc"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":630,"y":140,"wires":[]},{"id":"5ed6f4cf.a598fc","type":"ui_gauge","z":"2c3b9c0.ff19564","name":"","group":"6f264394.22341c","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":10,"colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":639.1000366210938,"y":229.20001220703125,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"6f264394.22341c","type":"ui_group","z":"","name":"Default","tab":"255de32f.157b0c","disp":true,"width":"6"},{"id":"255de32f.157b0c","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```
{{% /syntax %}}

## Control the LED based on the temperature

**TODO** Describe creation of the conditions with **if** block. Connecting the subscribe/publish

## Extending to relative humidity measurement

Now we try to connect the relative humidity sensor to the **Core Module**. It's possible to connect the {{< shop "Humidity Tag" >}} directly to the **Core Module** as displayed in the picture (**TODO**) or you can use also {{< shop "Tag Module" >}} which can hold many more sensor tags. Also the {{< shop "Battery Module" >}} contains spare connector for sensor tag.

<img src="humidity-added.jpg" style="max-width:50%;" />

{{< note "info" >}}
This procedure can be used also for other conencted sensors or {{< shop "Climate Module" >}}. You only need to change **topic** to the MQTT broker you are subscribing to.
{{< /note >}}

Then you can use debug nodes in **Node-RED** to get the right MQTT topic and copy and paste it to your new flow.

The MQTT topic will have the format `node/{id}/hygrometer/0:2/relative-humidity`. Replace the `{id}` with your node's address.

<img src="humidity-tag-node-animation.gif" style="max-width:100%;" />

## Extending to control the relay

Now let's add the relay control. You can use {{< shop "Relay Module" >}} or {{< shop "Power Module" >}}. Connect the module to the Core Module. Based on selected module with relay you have to change the topic.

{{< shop "Power Module" >}} has topic `node/{id}/relay/-/state/set`

{{< shop "Relay Module" >}} has topic `node/{id}/relay/0:0/state/set`

Then you send `true` or `false` as a payload.

<img src="power-module-animation.gif" style="max-width:100%;" />

The {{< shop "Relay Module" >}} has also command to make a single pulse with set duration and relay direction.

Topic is `node/{id}/relay/0:0/pulse/set` and you have to publish this JSON `{ "duration": 500, "direction": true}`. Duration is time in milliseconds.

<img src="relay-pulse-animation.gif" style="max-width:100%;" />


## Conversion to the battery operated node

BigClown building kit is from the ground-up designed for the efficient battery operation. Battery powered module with **bcf-generic-node** firmware will automatically scan connected sensors and modules when powered-up. In the regular intervals the measured values are sent by wireless radio to the gateway.

Place two AAA batteries to the {{< shop "Mini Battery Module" >}} and connect the **Core Module** to it.

{{< note "info" >}}
**Core Module** contains active control circuit which selects the best power source available. So in case you use the **Battery Module** and at the same time you are flashing/debugging the **Core Module** by USB, then the whole is powered by USB to save the battery power.
{{< /note >}}

## Creation of the wireless network

Currently it is possible to create a wireless network with a star topology. The middle of the star is the device called the **gateway** which handles communication to all wireless nodes. Gateway can be **Core Module** or **USB Dongle**.

All other wireless devices we call as a **node**.

The used radio module **SPIRIT** is comunicating at 868 MHz frequency and with its reach will cover a larger family house and its surroundings.

## Flashing gateway firmware

Connect the **USB Dongle** to the **Raspberry Pi**. The **USB Dongle** will switch to the programming mode automatically. Just execute the next command:
```
sudo bcf bigclownlabs/bcf-usb-dongle:firmware.bin
```

**In case you would like to use Core Module as a gateway, then you need to flash a different firmware**. Also it is necessary to switch the **Core Module** to the DFU flash mode. First co nnect the **Core Module** to the **Raspberry Pi** by a micro USB cable. Then set the module to the **DFU** mode by pressing and holding `B` boot button, the shortly press the `R` reset button. Then you can release the `B` boot button. Now you can flash the **Core Module** by typing the command below.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

## Flashing the remote node

Upload the `bcf-generic-node` firmware to the remote node unit. This universal firmware contains drivers for all BigClown sensors, tags and modules. After start-up all the connected devices are automatically detected and their values are sent by wireless network to the **gateway**.

Connect the **Core Module** to the **Raspberry Pi** and enable the **DFU** flashing mode as explained in the previous chapter. Upload the `generic-node` with `firmware-battery-mini` option.

```
sudo bcf flash --dfu bigclownlabs/bcf-generic-node:firmware-battery-mini.bin
```

In case you would power the remote note with a power adapter, you can flash `power module` firmware for a corresponding number of LED diodes (RGB or RGBWhite) `bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin`. This firmware is also always listening on the radio and can receive commands co control the LED pixels, relay and display the measured data on the connected **LCD Module**. Moreover it is possible to display custom texts on the display with various sized fonts.

[List of bcf-generic-node released firmwares](https://github.com/bigclownlabs/bcf-generic-node/releases)

[Detailed flashing instructions]({{< relref "doc/tutorials/firmware-upload.en.md" >}}).


## Pairing process

We need to pair the **gateway** with the **node**. In case you are using **Core Module** as a **gateway** you can start the pairing by long press of the `B` button.

USB Dongle do not have pairing button and the pairing process needs to be started by a MQTT message. The same works also for the **Core Module** in case you cannot physically press the `B` button.

In the next commands replace the `{id}` by the IP address of your **Raspberry Pi**. The pairing process needs to be started on the **gateway**.
For **USB Dongle** or **Core Module** you need to send MQTT message with console command or by using the flow in the **Node-RED** which sends the pairing start message.

```
mosquitto_pub -t 'gateway/{id}/enrollment/start' -n
```

After enabling the pairing the red LED on the **USB Dongle**/**Core Module** will start to blink. Now its the time to send pairing command from the **remote node**. This can be done by long press of the `B` button on the **remote node**. If you are subscribed to the `#` topic, you will see a message with new paired address.

{{< note "info" >}}
If you have **LCD Module**, **Button Module** or **Encoder Module** and it is not physically possible to press the `B` button you can long press any button/encoder to send the pairing command. The buttons on these modules are physically connected also to the `B` button on the **Core Module**.
{{< /note >}}

Now it is possible to pair other **remote** nodes, just long press the `B` button on the other **remote** nodes.

After the pairing of the remotes is completed, disable the pairing process on the **gateway** by command:

```
mosquitto_pub -t 'gateway/{id}/enrollment/stop' -n
```

## Measuring and controlling over radio

Remote nodes which has **battery** in the firmware name just transmitts measured data and then they sleep. They cannot receive the commands over the wireless radio while they sleep.

Remote nodes which has **power module** in the firmware name are powered by power adapter or USB and can transmit measured data and also receive commands send from the **gateway**. Thanks to this it is possible to control practically all the connected modules over the radio:

  * Power Module - control the relay, colors and effects on the LED strip
  * Relay Module - control bistable relay with commands to toggle, switch or make a pulse
  * LCD Module - display text on the display on any position with different font sizes
  * Control red LED on the **Core Module**

**TODO** Zpátky k Node-RED - s pomocí poznamenaného device ID navádět jak pub/sub do rádiového nodu.

## Conclusion and further steps

**TODO** Wrap up of what we've learned. Link to the reference to MQTT topics. Different libraries to connect tot he MQTT broker, Python, C#..

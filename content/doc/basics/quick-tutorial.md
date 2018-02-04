---
title: "Quick Tutorial"
---

This document is a practical guide of using the **BigClown IoT Kit**. It will guide you how **Raspberry Pi** can read the temperature from **Core Module**, control the LED, measure the relative air humidity from **Humidity Tag**, control small electronic devices using **Relay Module**.

You will also be able to create a wireless network using **USB Dongle**. Data acqusition and control process is demonstrated using **Node-RED**, a web application that will run inside the **Raspberry Pi**. This application allows intuitive graphical automation flow editing directly in your web browser.

This tutorial is divided into several chapters. We suggest to study them one by one. The subsequent chapter builds on the knowledge from the previous chapters. At the end of each chapter there is a link to more detailed instructions, which can help you in case of confusion.

First we will demonstrate basic functionality without a wireless network. We use just a single **Core Module** connected to the **Raspberry Pi** by a USB cable.

What will we need at minimum:

  * {{< shop "Raspberry Pi" >}} + {{< shop "MicroSDHC Memory Card 8GB" >}}
  * {{< shop "Core Module" >}}

Optionally for establishing a wireless network, you will need:

  * {{< shop "USB Dongle" >}} (or second one {{< shop "Core Module" >}})
  * {{< shop "Mini Battery Module" >}}
  * {{< shop "Humidity Tag" >}}
  * {{< shop "Relay Module" >}}

## Video tutorial

In case you like video tutorials, you can watch this one. Otherwise please continue to next paragraph. This video is very similar step-by-step guide how to quickly get started with Raspberry Pi, Core Module, USB Dongle and many other BigClown modules.

{{< youtube FRRhleRNstg >}}

## Raspberry Pi Installation

{{% note "warning" %}}Detailed instructions can be found in the document [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}).{{% /note %}}

The easiest way to start is to download the [**BigClown Raspbian**](https://github.com/bigclownlabs/bc-raspbian/releases) image. This image has already pre-installed necessary components. It contains **BigClown Gateway**, **Mosquitto** MQTT broker, **Node-RED** and **BigClown Firmware Tool (bcf)**.

The downloaded **Raspberry Pi** image has to be written to a MicroSD card using the `dd` command or using the **Win32DiskImager** tool.

You can also download the official **Raspbian** and install necessary packages yourself.

## Raspberry Pi Login

{{% note "warning" %}}Detailed instructions can be found in the document [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}}).{{% /note %}}

1. Insert the MicroSD card with the **Raspbian**  image to the **Raspberry Pi**.
2. Connect the Ethernet cable to the **Raspberry Pi**.
3. Connect the **Core Module** or the **USB Dongle** to the **Raspberry Pi**.
4. Connect the power adapter to the **Raspberry Pi**.

After the **Raspberry Pi** boots up you should be able to find it at address `hub.local`. You can try the command `ping hub.local` and see the response.

{{< note "warning" >}}If the Raspberry Pi is not visible on the network, there's something wrong with your network setup or your system doesn't support **mDNS** and you have to find the IP address of the **Raspberry Pi** in your router's **DHCP** configuration.{{< /note >}}

Please log on the Raspberry Pi shell by typing `ssh pi@hub.local` command or use the Windows program **PuTTY**.

## Firmware Upload

{{% note "warning" %}}Detailed instructions can be found in the document [**Toolchain Guide**]({{< relref "doc/tutorials/toolchain-guide.md" >}}).{{% /note %}}

For quick start we've create a Python command-line utility **bcf**, which automatically downloads latest released firmwares from **GitHub** and will flash the modules. On the Raspberry Pi you need first to update the list of releases by typing `bcf update`. Then by typing `bcf list` you get the list of pre-compiled firmwares.

We'll flash the **bcf-gateway** firmware. This firmware for the gateway contains functions for all BigClown sensors and modules. After the start the **Core Module** automatically detects connected sensors and sends the measured values by USB to the **Raspberry Pi**.

Before flashing is necessary to switch the **Core Module** to the [programming **DFU** mode]({{< relref "doc/tutorials/toolchain-guide.md#switching-core-module-into-dfu-mode" >}}).
```
bcf flash --dfu bigclownlabs/bcf-gateway-core-module:latest
```

After the firmware flashing the **Core Module** will automatically restart and the flashed firmware will be run.

## USB-MQTT communication bridge

**USB Dongle** or **Core Module** with the **gateway** firmware is using virtual serial port over USB to exchange the data. This communication is then redirected on the **Raspberry Pi** to the **MQTT** messages thanks to the **bch-gateway** service.

All the messages from modules go through the gateway to the MQTT broker. The MQTT is an open standard and also our back-bone system for passing the messages both ways.
In the middle of this communication system is the MQTT broker. Which is a server that accepts client connections. Between the broker and clients are flowing MQTT messages. Each of them contains **topic** and **payload**. Topic is a text string and has directory-like structure with the `/` delimeter (eg. `node/core-module:0/thermometer/0:1/temperature`). Payload isn't defined by a MQTT standard and BigClown is sending these data types: numbers, strings, boolean values and JSONs.

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
node/core-module:0/thermometer/0:1/temperature 24.69
node/core-module:0/thermometer/0:1/temperature 24.94
node/core-module:0/push-button/-/event-count 5
```

The `-t` parameter if for **topic** which we would like to subscribe. The hash symbol `#` means that we would like to subscribe to all topics. The parameter `-v` displays more verbose output to the console, so we can see not only values but also messages topics.

Another MQTT wildcard symbol is question mark `?`, which has the similar functionality like `#`, but it can be used only in one MQTT topic level (topic to read all thermometers `node/?/thermometer`).

We'll try to turn on an LED on the **Core Module**.

```
mosquitto_pub -t "node/core-module:0/led/-/state/set" -m true
```

Perfect! That was simple, right? Now let's learn the Node-RED.

## Opening the Node-RED

**Node-RED** is a web application pre-installed in **BigClown Raspbian** which runs on **Raspberry Pi**. You can run it in your web browser and display, process measured values and then send commands to other modules like **Relay Module**, **Power Module**, **LCD Module**.

Please type the `hub.local:1800` address to your web browser.

<img alt="Node-RED" src="node-red-mqtt.png" style="max-width:100%;" />

On the left panel you choose the building blocks which you place by dragging and dropping to the middle to the **flow**. Blocks are divided to several sections, the most important are **input**, **output**, **function** and **dashboard**. After the placement of the blocks you can connect them with wires and create a **flow**.

On the right side of the screen there are tabs **info** and very important tab **debug**. Later we will use also the **dashboard** tab to open our own designed page with gauges, switches and buttons.

When you create any change in the flow or configuration, you have to apply the changes by pressing the **deploy** button at the top right corner of the screen.

More information is in the [Node-RED for Automation]({{< relref "doc/integrations/node-red-for-automation.md" >}}).

## Subscribing to the MQTT messages in Node-RED

First we will output all the incoming MQTT messages to the **debug** output. The following procedure will explain how to create basic flow printing all MQTT messages to the **debug** tab. You can follow this instructions or import the flow below by the **Import** option in the top right menu.

```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"#","qos":"2","broker":"ba3b2e25.7c8b7","x":170,"y":100,"wires":[["2dbd1aa6.284476"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":390,"y":100,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

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

Now you can see all the incoming messages. In case we would like to receive only temperature from one module, we have to change the topic in the **mqtt** block. We need to change `#` to the `node/core-module:0/thermometer/0:1/temperature`.

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

```
[{"id":"3bfb0014.c8ac9","type":"mqtt in","z":"e2a5ec72.0af0b","name":"","topic":"node/core-module:0/thermometer/0:1/temperature","qos":"2","broker":"86ef748c.0f3de8","x":290,"y":160,"wires":[["ba582285.dd04c","17d59ad8.cfa925"]]},{"id":"ba582285.dd04c","type":"debug","z":"e2a5ec72.0af0b","name":"","active":true,"console":"false","complete":"false","x":630,"y":140,"wires":[]},{"id":"17d59ad8.cfa925","type":"ui_gauge","z":"e2a5ec72.0af0b","name":"","group":"761dfbba.bd8604","order":0,"width":0,"height":0,"gtype":"gage","title":"Temperature","label":"°C","format":"{{value}}","min":0,"max":"40","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":630,"y":220,"wires":[]},{"id":"86ef748c.0f3de8","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"761dfbba.bd8604","type":"ui_group","z":"","name":"Default","tab":"bf26a25d.84e25","disp":true,"width":"6"},{"id":"bf26a25d.84e25","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

## Extending to relative humidity measurement

Now we try to connect the relative humidity sensor to the **Core Module**. It's possible to connect the {{< shop "Humidity Tag" >}} directly to the **Core Module** as displayed in the picture or you can use also {{< shop "Tag Module" >}} which can hold many more sensor tags. Also the {{< shop "Battery Module" >}} contains spare connector for sensor tag.

<img src="humidity-added.jpg" style="max-width:50%;" />

{{< note "info" >}}
This procedure can be used also for other conencted sensors or {{< shop "Climate Module" >}}. You only need to change **topic** to the MQTT broker you are subscribing to.
{{< /note >}}

Then you can use debug nodes in **Node-RED** to get the right MQTT topic and copy and paste it to your new flow.

The MQTT topic will have the format `node/core-module:0/hygrometer/0:2/relative-humidity`.

<img src="humidity-tag-node-animation.gif" style="max-width:100%;" />

## Extending to control the relay

Now let's add the relay control. You can use {{< shop "Relay Module" >}} or {{< shop "Power Module" >}}. Connect the module to the Core Module. Based on selected module with relay you have to change the topic.

{{< shop "Power Module" >}} has topic `node/core-module:0/relay/-/state/set`

{{< shop "Relay Module" >}} has topic `node/core-module:0/relay/0:0/state/set`

Then you send `true` or `false` as a payload.

<img src="power-module-animation.gif" style="max-width:100%;" />

The {{< shop "Relay Module" >}} has also command to make a single pulse with set duration and relay direction.

Topic is `node/core-module:0/relay/0:0/pulse/set` and you have to publish this JSON `{ "duration": 500, "direction": true}`. Duration is time in milliseconds.
```
mosquitto_pub -t "node/core-module:0/relay/0:0/pulse/set" -m "{ \"duration\": 500, \"direction\": true}"
```

<img src="relay-pulse-animation.gif" style="max-width:100%;" />


## Creation of the wireless network

Currently it is possible to create a wireless network with a star topology. The middle of the star is the device called the **gateway** which handles communication to all wireless nodes. Gateway can be **Core Module** or **USB Dongle**.

All other wireless devices we call as a **node**.

The used radio module **SPIRIT** is comunicating at 868 MHz frequency and with its reach will cover a larger family house and its surroundings.

## Flashing gateway firmware

If you don't have {{< shop "USB Dongle" >}} you can use **Core Module** you have already connected to your **Raspberry Pi**. This module with already flashed firmware can act also as a wireless gateway.

If you own the {{< shop "USB Dongle" >}} then disconnect the **Core Module** from **Raspberry Pi** and connect the **USB Dongle**. Then follow next steps to flash the latest firmware.
Connect the **USB Dongle** to the **Raspberry Pi**. The **USB Dongle** will switch to the programming mode automatically. Just execute the next command:

```
bcf flash --device /dev/ttyUSB0 bigclownlabs/bcf-gateway-usb-dongle:latest
```
{{< note "info" >}}
In case you get `[Errno 11] Resource temporarily unavailable` error, that means that the `bcg` gateway service is running and uses the same virtual serial port. Yo need to stop bcg temporarily by `pm2 stop bcg`, then do the `bcf flash` and start the service again by `pm2 start bcg`.
{{< /note >}}

## Conversion to the battery operated node

BigClown building kit is from the ground-up designed for the efficient battery operation. Battery powered module with **bcf-generic-node** firmware will automatically scan connected sensors and modules when powered-up. In the regular intervals the measured values are sent by wireless radio to the gateway.

Place two AAA batteries to the {{< shop "Mini Battery Module" >}} and connect the **Core Module** to it.

{{< note "info" >}}
**Core Module** contains active control circuit which selects the best power source available. So in case you use the **Battery Module** and at the same time you are flashing/debugging the **Core Module** by USB, then the whole is powered by USB to save the battery power.
{{< /note >}}


## Flashing the remote node

Upload the `bcf-generic-node` firmware to the remote node unit. This universal firmware contains drivers for all BigClown sensors, tags and modules. After start-up all the connected devices are automatically detected and their values are sent by wireless network to the **gateway**.

Connect the **Core Module** to the **Raspberry Pi** and enable the **DFU** flashing mode as explained in the previous chapter. Upload the `generic-node` with `firmware-battery-mini` option.

```
bcf flash --dfu bigclownlabs/bcf-generic-node-battery-mini:latest
```

In case you would power the remote note with a power adapter, you can flash `power module` firmware for a corresponding number of LED diodes (RGB or RGBWhite) `bigclownlabs/bcf-generic-node-power-module-rgbw144:latest`. This firmware is also always listening on the radio and can receive commands co control the LED pixels, relay and display the measured data on the connected **LCD Module**. Moreover it is possible to display custom texts on the display with various sized fonts.

[List of bcf-generic-node released firmwares](https://github.com/bigclownlabs/bcf-generic-node/releases)

[Detailed flashing instructions]({{< relref "doc/tutorials/toolchain-guide.md" >}}).

## Pairing process

We need to pair the **gateway** with the remote **node**. In case you are using **Core Module** as a **gateway** you can start the pairing by long press of the `B` button. Then the red LED will start blinking.

USB Dongle do not have pairing button and the pairing process needs to be started by a MQTT message. The same works also for the **Core Module** in case you cannot physically press the `B` button.

For **USB Dongle** or **Core Module** you need to send start pairing MQTT message with console command or by using the flow in the **Node-RED** which sends the pairing start message.

```
For USB Dongle:
mosquitto_pub -t 'gateway/usb-dongle/pairing-mode/start' -n
For Core Module:
mosquitto_pub -t 'gateway/core-module/pairing-mode/start' -n
```

After enabling the pairing the red LED on the **USB Dongle**/**Core Module** will start to blink. Now its the time to send pairing command from the **remote node**. This is done by power cycling or reseting the **remote node**.

  * **Power Cycle** - unplug and then plug again the power to the Core Module. USB cable, battery or Battery Module.
  * **Reset the Core Module** - short press of the `R` Reset button on the Core Module.

When the node is booting it sends pairing command. If you are subscribed to the `#` topic, you will see a message with new paired address.

{{< note "info" >}}
Older firmwares send remote pairing packet by long-press of `B` button. Current firmwares are sending remote pairing packet by **power cycling** or **reseting** the module.
{{< /note >}}

Now it is possible to pair other **remote** nodes, by power cycling or reset of other **remote** nodes.

After the pairing of the remotes is completed, stop the pairing process on the **gateway** by command:

```
For USB Dongle:
mosquitto_pub -t 'gateway/usb-dongle/pairing-mode/stop' -n
For Core Module:
mosquitto_pub -t 'gateway/core-module/pairing-mode/stop' -n
```

## Measuring and controlling over radio

Remote nodes which has **battery** in the firmware name just transmits measured data and then they sleep. They cannot receive the commands over the wireless radio while they sleep.

Remote nodes which has **power module** in the firmware name are powered by power adapter or USB and can transmit measured data and also receive commands send from the **gateway**. Thanks to this it is possible to control practically all the connected modules over the radio:

  * Power Module - control the relay, colors and effects on the LED strip
  * Relay Module - control bistable relay with commands to toggle, switch or make a pulse
  * LCD Module - display text on the display on any position with different font sizes
  * Control red LED on the **Core Module**

[List of all MQTT topics]({{< relref "doc/integrations/mqtt-topics.md" >}}).

## Conclusion and further steps

This tutorial explained how to lean BigClown basics with single a module connected to the Raspberry Pi. The principle is the same with other nodes which you can connect wirelessly. Now you can extend your home automation and create new rules thanks to **Node-RED**.

---
title: "Wireless Smart LED Strip"
---

This document will guide you through the **Wireless Smart LED Strip** project. You will be able to interact with your LED strip in **Node-RED** and Blynk and control Power appliance using 16A Relay.

## Block Concept

{{% img-zoom src="block-diagram.svg" %}}

## Requirements

* Either **BigClown Wireless Power Controller Kit**, or individual components:

    * 1x **BigClown Cover Module**

    * 1x **BigClown Core Module**

    * 1x **BigClown Power Module**

    * 1x AC/DC ADAPTER 5V/3A (or higher current rating)

    * 1x 3D printed enclosure BCE301

* Other components:

    * 1x **BigClown USB Dongle** (not included in the kit)

    * 1x RGB or RGBW Digital LED strip (not included in the kit)

    * Micro USB cable (not included in the kit)

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

    If your LED strip is **144 LEDs RGBW**:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-power-controller-rgbw144:latest

    If your LED strip is **150 LEDs RGB**:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-power-controller-rgb150:latest

    If your LED strip is **72 LEDs RGBW**:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-power-controller-rgbw72:latest

    Firmware upload is successfully done when the status reaches 100%:

    {{% img-zoom src="bcf.png" %}}

3. Remove the Micro USB cable from the **Core Module** and your computer.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}

## Hardware Assembling

1. Start with the **Power Module**.

    {{% note "warning" %}}Make sure the **Power Module** does not have power adapter inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Power Module**.

3. Plug the **Cover Module** on top of the **Core Module**.

4. Put assembled modules into the enclosure BCE301 and fix it with O-rings.

    {{% img-zoom src="project-thermostat-relay-bc.png" %}}

5. Connect the LED strip to the pluggable socket on the right side.

6. Connect the 5V DC Power Jack.

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

In this section, we will create a radio link between the **USB Dongle** and the **Wireless Smart LED strip**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    {{% img-zoom src="node-red-gw-pair-start.png" %}}

2. Connect the power adapter into the **Wireless Power Controller** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

3. Click on the **Stop node pairing** button.

    {{% img-zoom src="node-red-gw-pair-stop.png" %}}

{{% note "success" %}}At this point, you've got established a radio link between the node (**Wireless Smart LED Strip**) and the gateway (**USB Dongle**).{{% /note %}}

## Communication Test

Follow these steps in **Node-RED**:

1. Switch to **debug** tab on the right.

2. Insert the following snippet in the flow (using **Menu >> Import**) and click in **Flow 1** tab:

    ```json
    [{"id":"db116c59.5a67c","type":"inject","z":"5017d9d5.7c8758","name":"led true","topic":"node/kit-power-controller:0/led/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"x":410,"y":680,"wires":[["f0bac098.51d7f"]]},{"id":"b848ab03.624af8","type":"inject","z":"5017d9d5.7c8758","name":"led false","topic":"node/kit-power-controller:0/led/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"x":420,"y":720,"wires":[["f0bac098.51d7f"]]},{"id":"38263e39.3505c2","type":"inject","z":"5017d9d5.7c8758","name":"relay true","topic":"node/kit-power-controller:0/relay/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"x":420,"y":820,"wires":[["f0bac098.51d7f"]]},{"id":"5521793d.1b5258","type":"inject","z":"5017d9d5.7c8758","name":"relay false","topic":"node/kit-power-controller:0/relay/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"x":420,"y":860,"wires":[["f0bac098.51d7f"]]},{"id":"56dea076.222d6","type":"inject","z":"5017d9d5.7c8758","name":"led get","topic":"node/kit-power-controller:0/led/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"x":410,"y":760,"wires":[["f0bac098.51d7f"]]},{"id":"8a0d6314.2369e","type":"inject","z":"5017d9d5.7c8758","name":"relay get","topic":"node/kit-power-controller:0/relay/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"x":420,"y":900,"wires":[["f0bac098.51d7f"]]},{"id":"b1fc074.41dcbf8","type":"inject","z":"5017d9d5.7c8758","name":"led-strip set color #ff0000","topic":"node/kit-power-controller:0/led-strip/-/color/set","payload":"\"#ff0000\"","payloadType":"str","repeat":"","crontab":"","once":false,"x":470,"y":960,"wires":[["f0bac098.51d7f"]]},{"id":"bbf235aa.9831d8","type":"inject","z":"5017d9d5.7c8758","name":"led-strip set color #008000","topic":"node/kit-power-controller:0/led-strip/-/color/set","payload":"\"#008000\"","payloadType":"str","repeat":"","crontab":"","once":false,"x":470,"y":1000,"wires":[["f0bac098.51d7f"]]},{"id":"104ecd34.d61173","type":"inject","z":"5017d9d5.7c8758","name":"led-strip compound","topic":"node/kit-power-controller:0/led-strip/-/compound/set","payload":"[20, \"#ff0000\", 20, \"#ff7f00\", 20, \"#ffff00\", 20, \"#00ff00\", 20, \"#0000ff\", 20, \"#960082\", 24, \"#D500ff\"]","payloadType":"json","repeat":"","crontab":"","once":false,"x":450,"y":1200,"wires":[["f0bac098.51d7f"]]},{"id":"5442d5f6.62b70c","type":"inject","z":"5017d9d5.7c8758","name":"led-strip effect test","topic":"node/kit-power-controller:0/led-strip/-/effect/set","payload":"{\"type\":\"test\"}","payloadType":"json","repeat":"","crontab":"","once":false,"x":450,"y":1240,"wires":[["f0bac098.51d7f"]]},{"id":"ab83a4c8.2033d8","type":"inject","z":"5017d9d5.7c8758","name":"led-strip effect rainbow","topic":"node/kit-power-controller:0/led-strip/-/effect/set","payload":"{\"type\":\"rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"x":460,"y":1280,"wires":[["f0bac098.51d7f"]]},{"id":"ed708d44.40e4f","type":"inject","z":"5017d9d5.7c8758","name":"led-strip effect rainbow-cycle","topic":"node/kit-power-controller:0/led-strip/-/effect/set","payload":"{\"type\":\"rainbow-cycle\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"x":480,"y":1320,"wires":[["f0bac098.51d7f"]]},{"id":"4fd84621.0565d8","type":"inject","z":"5017d9d5.7c8758","name":"led-strip effect theater-chase-rainbow","topic":"node/kit-power-controller:0/led-strip/-/effect/set","payload":"{\"type\":\"theater-chase-rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"x":510,"y":1360,"wires":[["f0bac098.51d7f"]]},{"id":"31daf9aa.bb20a6","type":"inject","z":"5017d9d5.7c8758","name":"led-strip set brightness 50%","topic":"node/kit-power-controller:0/led-strip/-/brightness/set","payload":"50","payloadType":"str","repeat":"","crontab":"","once":false,"x":480,"y":1100,"wires":[["f0bac098.51d7f"]]},{"id":"7209f723.daab18","type":"inject","z":"5017d9d5.7c8758","name":"led-strip set brightness 100%","topic":"node/kit-power-controller:0/led-strip/-/brightness/set","payload":"100","payloadType":"str","repeat":"","crontab":"","once":false,"x":480,"y":1140,"wires":[["f0bac098.51d7f"]]},{"id":"47499ff2.997a","type":"inject","z":"5017d9d5.7c8758","name":"led-strip effect color-wipe","topic":"node/kit-power-controller:0/led-strip/-/effect/set","payload":"{\"type\":\"color-wipe\", \"wait\":50, \"color\": \"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"x":470,"y":1400,"wires":[["f0bac098.51d7f"]]},{"id":"55ec12ff.e0018c","type":"inject","z":"5017d9d5.7c8758","name":"led-strip set color #000000(00)","topic":"node/kit-power-controller:0/led-strip/-/color/set","payload":"\"#000000(00)\"","payloadType":"str","repeat":"","crontab":"","once":false,"x":490,"y":1040,"wires":[["f0bac098.51d7f"]]},{"id":"f0bac098.51d7f","type":"mqtt out","z":"5017d9d5.7c8758","name":"","topic":"","qos":"","retain":"","broker":"a0dc8e22.104d9","x":970,"y":1040,"wires":[]},{"id":"a0dc8e22.104d9","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

3. Press **led-strip set color #ff0000**.

    {{% img-zoom src="radio-test.png" %}}

## Integration with Blynk

Now we have assembled our kit and let's start with some basic integration with **Blynk**. We will start without describing what **Blynk** is. If you want get some information about what **Blynk** is. The best thing you can do is to visit their [**page**](https://www.blynk.cc/). In our example we will be showing you how to control LED strip colours in **Blynk**'s mobile application.

Firstly we need to configure our **Node-RED** app.

1. If you are using BigClown raspi version you should be fine, but still check that **Blynk** nodes are installed. (You can view them on the left side menu in **Node-RED**). Otherwise you will need to install **Node-RED** package `node-red-contrib-blynk-ws`. You can follow [**this**]({{< relref "doc/tutorials/nodered-library-installation.md" >}}) example for installing libraries to **NodeRED**.

    {{% img-zoom src="nodered-1.png" height="300" width="120" %}}

2. Add another flow (you can add them by big plus button next to the flow name).

3. Insert the following snippet in the flow (using **Menu >> Import**) and click in Flow 3 tab:

    ```json
    [{"id":"702c9447.9b790c","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"1","client":"746d7fe1.2a0be","x":330,"y":280,"wires":[["4da0fdbd.a3c614"]]},{"id":"4da0fdbd.a3c614","type":"function","z":"aaf5722e.dfdca","name":"Convert to BC format","func":"var finalString = '\"#'\nvar colorToSave = \"\";\nmsg.arrayOfValues.forEach((color) => {\n    var carry = (parseInt(color)).toString(16)\n    if(carry.length == 1) carry = \"0\" + carry;\n    finalString += carry;\n    colorToSave += carry;\n});\n\nflow.set(\"color\", colorToSave);\n\nif((flow.get(\"ledstrip\")) == false){\n    msg.payload = '\"#000000(00)\"'\n}\nelse{\n    var white = flow.get(\"white\");\n    if(white == null) white = \"00\";\n    msg.payload = finalString + '(' + white + ')\"'; \n}\n\n\nmsg.topic = \"node/kit-power-controller:0/led-strip/-/color/set\";\nreturn msg;\n","outputs":1,"noerr":0,"x":600,"y":280,"wires":[["a7ef9db0.cc602"]]},{"id":"a7ef9db0.cc602","type":"mqtt out","z":"aaf5722e.dfdca","name":"","topic":"","qos":"","retain":"","broker":"71afb0a.14d505","x":870,"y":420,"wires":[]},{"id":"b596fcc7.b5206","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"4","client":"746d7fe1.2a0be","x":330,"y":460,"wires":[["80140f23.46bf6"]]},{"id":"80140f23.46bf6","type":"function","z":"aaf5722e.dfdca","name":"String to bool parser","func":"if(msg.payload == true)\n{\n    msg.payload = true;\n}\nelse{\n    msg.payload = false;\n}\nmsg.topic = \"node/kit-power-controller:0/relay/-/state/set\";\nreturn msg;","outputs":1,"noerr":0,"x":600,"y":460,"wires":[["a7ef9db0.cc602"]]},{"id":"62416cd0.a6dbf4","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"3","client":"746d7fe1.2a0be","x":330,"y":400,"wires":[["3bce27cc.257308"]]},{"id":"3bce27cc.257308","type":"function","z":"aaf5722e.dfdca","name":"Handler","func":"var lastColor = flow.get(\"color\")|| \"000000(00)\";\n\nif(msg.payload == false) {\n    msg.payload = '\"#000000(00)\"';\n    flow.set(\"ledstrip\", false);\n}\nelse {\n    msg.payload = '\"#' + '' + lastColor + '\"';\n    flow.set(\"ledstrip\", true);\n}\nmsg.topic = \"node/kit-power-controller:0/led-strip/-/color/set\";\n\nreturn msg;","outputs":1,"noerr":0,"x":640,"y":400,"wires":[["a7ef9db0.cc602"]]},{"id":"d619d828.3e1bf8","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"5","client":"746d7fe1.2a0be","x":330,"y":520,"wires":[["9b87dc69.53d55"]]},{"id":"e267bf2d.7e292","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"6","client":"746d7fe1.2a0be","x":330,"y":580,"wires":[["81fcc52c.023c08"]]},{"id":"3121623b.8b75de","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"2","client":"746d7fe1.2a0be","x":330,"y":340,"wires":[["99a36ea2.e29bf"]]},{"id":"9b87dc69.53d55","type":"function","z":"aaf5722e.dfdca","name":"Rainbow","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = '{\"type\":\"rainbow\", \"wait\":50}';\n    msg.topic = \"node/kit-power-controller:0/led-strip/-/effect/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":640,"y":520,"wires":[["a7ef9db0.cc602"]]},{"id":"81fcc52c.023c08","type":"function","z":"aaf5722e.dfdca","name":"Theater chase","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = '{\"type\":\"theater-chase-rainbow\", \"wait\":50}';\n    msg.topic = \"node/kit-power-controller:0/led-strip/-/effect/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":620,"y":580,"wires":[["a7ef9db0.cc602"]]},{"id":"99a36ea2.e29bf","type":"function","z":"aaf5722e.dfdca","name":"White color handler","func":"var carry = (parseInt(msg.payload)).toString(16)\nif(carry.length == 1) carry = \"0\" + carry;\n\nflow.set(\"white\", carry);\n\nvar color = flow.get(\"color\");\nif(color == null) color = \"000000\";\n\nmsg.payload = '\"#' + color +'(' + carry + ')\"';\nmsg.topic = \"node/kit-power-controller:0/led-strip/-/color/set\";\nreturn msg;","outputs":1,"noerr":0,"x":610,"y":340,"wires":[["a7ef9db0.cc602"]]},{"id":"d40dc7b0.acf648","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"7","client":"746d7fe1.2a0be","x":330,"y":640,"wires":[["a03ff4eb.de9fd8"]]},{"id":"a03ff4eb.de9fd8","type":"function","z":"aaf5722e.dfdca","name":"Brightness handler","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = msg.payload;\n    msg.topic = \"node/kit-power-controller:0/led-strip/-/brightness/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":610,"y":640,"wires":[["a7ef9db0.cc602"]]},{"id":"746d7fe1.2a0be","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com:8080/websockets","key":"","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_low":false,"dbg_pins":""},{"id":"71afb0a.14d505","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
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

---
title: "Wireless Smart LED Strip"
---

This document will guide you through the **Wireless Smart LED Strip** project. You will be able to interact with your LED strip in **Node-RED** and Blynk.

## Block Concept

**TODO**

## Requirements

* Either **BigClown Wireless Power Controller Kit**, or individual components:

    * 1x **BigClown Cover Module**

    * 1x **BigClown Core Module**

    * 1x **BigClown Power Module**

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

    If your LED strip is **144 LEDs RGBW**:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-power-controller-rgbw144:latest

    If your LED strip is **150 LEDs RGB**:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-power-controller-rgb150:latest

    If your LED strip is **72 LEDs RGBW**:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-power-controller-rgbw72:latest

3. Remove the Micro USB cable from the **Core Module** and your computer.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}

## Hardware Assembling

1. Start with the **Power Module**.

    {{% note "warning" %}}Make sure the **Power Module** does not have power adapter inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Power Module**.

3. Plug the **Cover Module** on top of the **Core Module**.

4. Connect the LED strip to the pluggable socket on the right side.

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

In this section, we will create a radio link between the **USB Dongle** and the **Wireless Push Button**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    {{% img-zoom src="node-red-gw-pair-start.png" %}}

2. Connect the power adapter into the **Wireless Power Controller** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

3. Click on the **Stop node pairing** button.

    {{% img-zoom src="node-red-gw-pair-stop.png" %}}

{{% note "success" %}}At this point, you've got established a radio link between the node (**Wireless Push Button**) and the gateway (**USB Dongle**).{{% /note %}}

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

**TODO**

## Related Documents

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}})

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}})

* [**Toolchain Setup**]({{< relref "doc/tutorials/toolchain-setup.md" >}})

* [**Toolchain Guide**]({{< relref "doc/tutorials/toolchain-guide.md" >}})

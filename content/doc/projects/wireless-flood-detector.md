---
title: "Wireless Flood Detector"
---

This document will guide you through the **Wireless Flood Detector** project. You will be able to interact with your flood detector in **Node-RED** and trigger the **IFTTT** push notification service when the water leakage gets detected. You will get the push notification on your smart phone.

## Block Concept

**TODO**

## Requirements

* Either **BigClown Wireless Flood Detector Kit**, or individual components:

    * 1x **BigClown LD-81**

    * 1x **BigClown Sensor Module**

    * 1x **BigClown Core Module**

    * 1x **BigClown Mini Battery Module**

    * 1x **BigClown USB Dongle**

* One of these options:

    * **BigClown Playground** installed

        You can find more information in the document [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}).

    * **Raspberry Pi** with the **BigClown Raspbian** distribution

        You can find more information in the document [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}).

* **BigClown Firmware Tool** installed

    You can find more information in the document [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.md" >}}).

    {{% note "info" %}}`bcf` is part of Windows Playground Setup already.{{% /note %}}

## Firmware Upload

In this procedure we will use the **BigClown Firmware Tool** to upload firmware to the  **Core Module**.

{{< note "note" "Firmware upload to USB Dongle was done in Playground Setup." />}}

1. Connect the Micro USB cable to the **Core Module** and your computer.

2. Upload the firmware to the **Core Module**:

    {{% note "info" %}}You may want to update available firmwares by `bcf update` if the installation has been prolonged for a longer time after Playground Setup{{% /note %}}

    {{% note "warning" %}}You must first [**switch the Core Module to the DFU mode**]({{< relref "doc/firmware/toolchain-guide.md#switching-core-module-into-dfu-mode" >}}).{{% /note %}}

    {{< note "info" "In case of assembled Button stack without batteris inserted, you can press and hold Button, then connect the USB cable into PC and release Button." />}}

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-climate-monitor:latest

3. Remove the Micro USB cable from the **Core Module** and your computer.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}

## Hardware Assembling

1. Start with the **Mini Battery Module**.

    {{% note "warning" %}}Make sure the **Mini Battery Module** does not have batteries inserted.{{% /note %}}

2. Plug the **Core Module** on top of the **Mini Battery Module**.

3. Plug the **Sensor Module** on top of the **Core Module**.

4. Connect the red wire of **LD-81** to the **Channel A** of the **Sensor Module**.

5. Connect the black wire of **LD-81** to the **Sensor Module**.

## Playground Bootstrap

1. Open **Node-RED** in your web browser:

    **http://localhost:1880/**

2. You should see the empty workspace with **Flow 1**.

3. Insert the following snippet in the flow (using **Menu >> Import**) and click in **Flow 1** tab:

    **TODO**

    It will look like this:

    {{% img-zoom src="node-red-gw-controls.png" %}}

    {{% note "info" %}}This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.{{% /note %}}

4. Deploy the flow using the **Deploy** button in the top-right corner.

5. Open the **debug** tab:

    **TODO**

    {{% note "info" %}}In the **debug** tab, you will be able to see all the MQTT messages.{{% /note %}}

6. Click on the **List all gateways** button. You should see a response like this in the **debug** tab:

    **TODO**

{{% note "success" %}}At this point, you've got working **Node-RED**, **MQTT**, **BigClown USB Dongle** and **BigClown Gateway**.{{% /note %}}

## Radio Pairing

In this section, we will create a radio link between the **USB Dongle** and the **Wireless Flood Detector**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    **TODO**

2. Insert the batteries into the **Wireless Flood Detector** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

3. Click on the **Stop node pairing** button.

    **TODO**

{{% note "success" %}}At this point, you've got established a radio link between the node (**Wireless Flood Detector**) and the gateway (**USB Dongle**).{{% /note %}}

## Communication Test

Follow these steps in **Node-RED**:

1. Switch to **debug** tab on the right.

2. Put the **LD-81** water leakage sensor into the glass of water to trigger a radio transmission.

    You should then see similar messages:

    **TODO**

{{% note "success" %}}At this point, you've got verified radio communication.{{% /note %}}

## Enclosure

Optionally put the assembly into the appropriate enclosure, if you have one.

    {{% note "info" %}}You can find more information about the enclosures in the document  [**Enclosures**]({{< relref "doc/basics/enclosures.md" >}}).{{% /note %}}

## Integration with IFTTT

**TODO**

## Related Documents

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}})

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}})

* [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.md" >}})

* [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.md" >}})

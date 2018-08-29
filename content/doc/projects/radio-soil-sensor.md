---
title: "Radio Soil Sensor"
---

This document will guide you through the **Radio Soil Sensor** project. You will be able to see, save and analyze moisture level and temperature in **Node-RED** and **Grafana** visualization tool.

{{% img-zoom src="project-image.png" %}}

## Video tutorial

{{<youtube "6kU-_ldaGOw">}}

## Block Concept

{{% img-zoom src="block-diagram.svg" %}}

## Requirements

* Either **BigClown Radio Soil Sensor Kit**, or individual components:

    * 1x **BigClown {{% shop "Soil Sensor" %}}**

    * 1x **BigClown {{% shop "Sensor Module" %}}**

    * 1x **BigClown {{% shop "Core Module" %}}**

    * 1x **BigClown {{% shop "Battery Module" %}}**

    * 1x **BigClown {{% shop "Radio Dongle" %}}**

* You will need **Raspberry Pi** with the **BigClown Raspbian** distribution installed. Please see [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}}) document.

Measured data will be saved and visualized in Grafana on **{{% shop "Raspberry Pi" %}}**. It is also possible to use your computer. Just follow [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}) document.

## Connecting to Raspberry Pi

All the configuration, services and flashing firmware will be done on the **Raspberry Pi**. You use your computer only to connect to the **Raspberry Pi SSH** server and **Grafana** web page.

Please follow the [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}}) document where you find how to discover **Raspberry Pi IP address** on your network and connect to the **SSH server**.

## Firmware Upload

In this procedure we will use the **BigClown Firmware Tool** to upload firmware to the **Core Module**.
You will connect and flash firmware with **Raspberry Pi**

{{< note "info">}}
Firmware upload to Radio Dongle was done in [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}).
{{< /note  >}}

Now it's time to write firmware to the **Core Module**.

1. Connect the Micro USB cable to the **Core Module** and **Raspberry Pi**.

2. Upload the firmware to the **Core Module**:

    {{% note "info" %}}You may want to update available firmwares by `bcf update` if the installation has been prolonged for a longer time after Playground Setup{{% /note %}}

    {{% note "warning" %}}You must first [**switch the Core Module to the DFU mode**]({{< relref "doc/firmware/toolchain-guide.md#switching-core-module-into-dfu-mode" >}}).{{% /note %}}

    {{< note "info" "In case of assembled Button stack without batteris inserted, you can press and hold Button, then connect the USB cable into PC and release Button." />}}

    {{% core-module-2 %}}

    Write this command to the **Raspberry Pi** SSH command line.

        bcf flash --device /dev/ttyUSB0 bigclownlabs/bcf-radio-soil-sensor:latest

3. Remove the Micro USB cable from the **Core Module** and **Raspberry Pi**.

{{% note "success" %}}At this point your firmware is successfully uploaded.{{% /note %}}

## Hardware Assembling

1. Start with the **{{< shop "Battery Module" >}}**.

    {{% note "warning" %}}Make sure the **Battery Module** does not have batteries inserted.{{% /note %}}

2. Plug the **{{< shop "Core Module" >}}** on top of the **{{< shop "Battery Module" >}}**.

3. Plug the **{{< shop "Sensor Module" >}}** on top of the **{{< shop "Core Module" >}}**.

3. Plug the **{{< shop "Soil Sensor" >}}** connector to the **{{< shop "Sensor Module" >}}**.

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio Climate Monitor**.

Follow these steps in **Node-RED**:

1. Click on the **Start node pairing** button.

    {{% note "warning" %}}Make sure, that after pressing the **Start node pairing** button in the right **debug** tab you have two messages. One is command and the second one with **""start""** is the response from **Radio Dongle**.{{% /note %}}

    {{% img-zoom src="node-red-gw-pair-start.png" %}}

2. Insert the batteries into the **Radio Climate Monitor** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

    In the **Node-RED** debug tab, there is a message about name and firmware version of the new paired module.

    {{% img-zoom src="node-red-gw-pair-paired-mqtt-message.png" %}}

3. Click on the **Stop node pairing** button.

    {{% img-zoom src="node-red-gw-pair-stop.png" %}}

{{% note "success" %}}At this point, you've got established a radio link between the node (**Radio Moisture Sensor**) and the gateway (**Radio Dongle**).{{% /note %}}

## Communication Test

Follow these steps in **Node-RED**:

1. Switch to **debug** tab on the right.

2. Start breathing on the temperature sensor on the **Soil Sensor** to invoke a change of temperature and hence trigger a radio transmission.

    You should then see similar messages:

    {{% img-zoom src="radio-test.png" %}}

{{% note "success" %}}At this point, you've got verified radio communication.{{% /note %}}

## Enclosure

Optionally put the assembly into the appropriate enclosure, if you have one.

{{% note "info" %}}You can find more information about the enclosures in the document [**Enclosures**]({{< relref "doc/basics/enclosures.en.md" >}}).{{% /note %}}

## Integration Grafana

Now we have assembled our kit and let's start with some basic integration with **Grafana**.


1. Install **Grafana** and **InfluxDB** database to your **Raspberry Pi**. This is explained in **[Grafana for Visualization
]({{< relref "doc/integrations/grafana-for-visualization.md" >}})** document.

2. Add these lines to the /etc/bigclown/mqtt2influxdb.yml configuration file which you had created in the **Grafana for Visualization** tutorial. This adds support for new topics that Soil Sensor sends.

    {{% note "info" %}}
For text editing, we use **nano** editor. You can save changes by pressing key combination `Ctrl + O` and exit editor by pressing `Ctrl + X`.
    {{% /note %}}

    Open mqtt2influxdb configuration in **nano** text editor.

        sudo nano /etc/bigclown/mqtt2influxdb.yml

    And append these lines at the end of the existing file:

```yaml
- measurement: moisture
    topic: node/+/soil-sensor/+/moisture
    fields:
        value: $.payload
    tags:
        id: $.topic[1]
        channel: $.topic[3]

- measurement: temperature
    topic: node/+/soil-sensor/+/temperature
    fields:
        value: $.payload
    tags:
        id: $.topic[1]
        channel: $.topic[3]
```

3. Test that the configuration is valid. Otherwise there is some formating error in the YAML file.

        mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml --test

4. Restart MQTT2InfluxDB service, because we've changed the configuration

        pm2 restart mqtt2influxdb

5. Open **Grafana** page which is running on **Raspberry Pi** on port `3000`.

    [http://hub.local:3000](http://hub.local:3000)

6. Now you can see temperature and battery voltage on the bottom. We need to add a moisture graph. Because we added `- measurement: moisture` to the config file, we need to duplicate existing graph and change its `measurement` data source to `moisture`.

    <img src="grafana-duplicate.png" />

    Now click on **Edit** in the **duplicated** graph.

    <img src="grafana-edit.png" />

    Now in **Metrics** tab change the **FROM** item from value **temperature** to **moisture**.

    {{% img-zoom src="grafana-from-moisture.png" %}}

7. Now click on the **Save** button in the **Grafana** so all your configuration stays the same next time you open the page.

    {{% img-zoom src="grafana-save.png" %}}

{{% note "success" %}}
At this point, you should have a temperature and moisture monitoring of your plants int a garden or flowerpot.{{% /note %}}

## Related Documents

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}})

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}})

* [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}})


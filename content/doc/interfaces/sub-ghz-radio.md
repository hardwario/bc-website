---
title: "Sub-GHz Radio"
---

<div style="float:right;width:30%;text-align:center;">
{{% img-zoom src="SPIRIT1.jpg" %}}
</div>


The radio communication technology is the heart of the **BigClown IoT Kit**. This document describes the basic operation of the radio.

With **BigClown**, you can build your own network in the Sub-GHz band.

The radio frequency **868 MHz** (for Europe) or **915 MHz** (for the U.S.) allows long distance communication and offers low-power operation. Since this frequency band is used for signal messages, you will not encounter interference with streaming protocols like WiFi, Bluetooth, etc.

{{% note "info" %}}BigClown uses **SPIRIT1** radio transceiver from **STMicroelectronics**.{{% /note %}}

## Communication Range

We have done several radio communication tests. We claim, that from a single point, you are typically able to provide a full-house radio coverage.

On the other hand, several factors influence the communication distance - the most important is the building material from which you have built your house, obstacles in the path, interference from other appliances, etc.

The only objective radio communication range measurement is a so-called **line-of-sight** distance measured outdoor.

{{% note "success" %}}
We've achieved [more than 500 meters line-of-sight](https://youtu.be/6zdQQdwV3GQ) communication range between two **Core Modules**.

Also the single USB Dongle / Core Module is enough to [cover three-story house and whole garden around it](https://youtu.be/JplQxCYSClA).
{{% /note %}}

On the other hand, if the radio communication range is not sufficient, the network can be expanded on IP level thanks to MQTT message replication to a master server.

{{% note "info" %}}You will need to search for `connection`, `address` and `topic` directives in the `mosquitto.conf` configuration file.{{% /note %}}

## Radio Topology

**BigClown** supports only **star network topology**. Such configuration offers high reliability, easy troubleshooting and deterministic service time from batteries.

There are two types of devices in the **BigClown** radio network:

* **Gateway Device**

    There can be only one gateway device per network. The gateway device can be either:

    * BigClown **USB Dongle** (it can handle up to **32 devices**)
    * BigClown **Core Module** (it can handle up to **16 devices**)

* **Node Device**

    There can be one to several node devices in the network. Every node has to be paired to the gateway. A node device can be some sensor (e.g. temperature, humidity, CO2) or actuator (power relay, LCD display, LED strip controller).

## Radio Pairing

Pairing process is very straightforward procedure:

1. The **gateway device** needs to be in the **pairing mode**.

    {{% note "info" %}}The MQTT command for this operation is described in the document [**MQTT Topics**]({{< relref "doc/interfaces/mqtt-topics.md" >}}).{{% /note %}}

2. The **node device** has to transmit the **pairing request**.

    This is done by cycling the power on the **node device**. On battery-operated node, you simple remove the batteries, wait a few seconds (to get the capacitors discharged) and insert the batteries back. The pairing request is sent on the boot.

3. Once all **node devices** are enrolled, you have to exit the **pairing mode**.

    {{% note "info" %}}The MQTT command for this operation is described in the document [**MQTT Topics**]({{< relref "doc/interfaces/mqtt-topics.md" >}}).{{% /note %}}

## Radio Parameters

| Parameter                        | Value                      |
|----------------------------------|----------------------------|
| Communication frequency (Europe) | 868.0 MHz                  |
| Communication frequency (U.S.)   | 915.0 MHz                  |
| Modulation Type                  | GFSK                       |
| Modulation Rate                  | 19.2 kbps                  |
| TX Frequency Deviation           | 20 kHz                     |
| TX Transmit Power                | 11.6 dBm                   |
| RX Filter Bandwidth              | 100 kHz                    |

## Using 915 MHz for US, Canada & others

For parts of the world where the ISM band is 915 MHz, you cannot use default 868 MHz communication frequency.
During the code compilation you have to pass `BAND` parameter to the `make` like this:

```
make BAND=915
```

Right now it is not possible to use `bcf` tool because all the firmwares are pre-compiled with 868 MHz band.
Make sure you also compile **USB Dongle** firmware with this parameter.

## Packet Structure

```
+--------+--------+--------+--------+-------------+--------+
| PRE(4) | SYN(4) | LEN(1) | DST(1) | DATA(0..60) | CRC(2) |
+--------+--------+--------+--------+-------------+--------+
```

Explanation of the fields:

* **PRE(4)**

    This part is called **preamble** and consists of alternating sequence of zeroes and ones (32 bits).

* **SYN(4)**

    This part is called **synchronization word** and has a fixed value of `0x88888888`.

* **LEN(1)**

    This part determines the length of the `DATA` plus 1 (`DST` field is also counted).

* **DST(1)**

    This is destination address (for logic network addressing).

* **DATA(0..60)**

    Variable length payload data field.

* **CRC(2)**

    Checksum calculated over all fields excluding `PRE` and `SYN` fields. The polynomial of the CRC engine is `0x1021`.

## Related Documents

* [**SPIRIT1 Resources**](http://www.st.com/en/wireless-connectivity/spirit1.html)

* [**MQTT Protocol**]({{< relref "doc/interfaces/mqtt-protocol.md" >}})

* [**MQTT Topics**]({{< relref "doc/interfaces/mqtt-topics.md" >}})

---
title: "Serial port JSON"
menu:
  main:
    parent: 'interfaces'
    weight: 30
  doc:
    parent: 'interfaces'
    weight: 30
---

This article explains communication with Radio Dongle or Core Module over USB virtual serial port. This JSON messages are passed between microcontroller and `bcg` gateway. The `bcg` is passing these messages between MQTT broker and connected microcontroller. These informations are necessary in case you create your own gateway or integrate bigclown hardware to some other systems without the MQTT broker as a message bus.

## JSON format

Every command over USB is an JSON array of length two. The first item contains **topic**, the second item contains **payload**. The JSON on UART needs to be confirmed by `\n` newline.

`["topic", "payload"]\n`

**Topic** is a string. **Payload** has to be **JSON** or `null`.

## MQTT <=> JSONs

BigClown gateway `bcg` can manage multiple gateways. But wht gateway basically does is removing or adding device name prefix to the topic.

This documentation explains basic commands, but you can use all the supported gateway and node commands in [**MQTT Topics**]({{< relref "/doc/interfaces/mqtt-topics.en.md" >}}) article. You just have to convert the MQTT topic and payload to the serial port JSON.

### Pairing

When you send MQTT pairing command:

`gateway/{id}/pairing-mode/start`

Then gateway based on gateway `{id}` sends this JSON command to the right serial port:

`["/pairing-mode/start", null]`

The device confirms start of pairing by sending:

`["/pairing-mode", "start"]`

And gateway converts this JSON to the MQTT message:

`gateway/{id}/pairing-mode` with payload `"start"`.

### Incoming data

After pairing the incoming data from remote nodes are send over tje serial port.

Here are the values from node with ID `836d1983718a`, but you can set the name alias so the dongle will also do renaming of physical addresses to the human-readable names. Commands for aliases are in [**MQTT Topics**]({{< relref "/doc/interfaces/mqtt-topics.en.md" >}}).

```
["836d1983718a/info", {"firmware": "generic-node-battery-standard", "version": "v1.7.4"} ]
["836d1983718a/battery/-/voltage", 2.31]
["836d1983718a/thermometer/0:0/temperature", 22.25]
["836d1983718a/thermometer/0:1/temperature", 21.62]
["836d1983718a/hygrometer/0:4/relative-humidity", 0.0]
["836d1983718a/lux-meter/0:0/illuminance", 22.2]
["836d1983718a/thermometer/0:0/temperature", 22.44]
["836d1983718a/hygrometer/0:4/relative-humidity", 43.6]
["836d1983718a/lux-meter/0:0/illuminance", 129.2]
["836d1983718a/lux-meter/0:0/illuminance", 277.4]
["836d1983718a/barometer/0:0/pressure", 96934.00]
["836d1983718a/barometer/0:0/altitude", 372.62]
```

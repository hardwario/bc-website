---
title: "MQTT topics"
---

## Generic Node Topics

Detailed list of topics is in **README** in GitHub repository [**bcf-gateway**](https://github.com/bigclownlabs/bcf-gateway).

| Explanation   | MQTT Topic    |
| ------------- |---------------|
| Firmware info | node/{id}/info |
|    | `{"firmware": "kit-motion-detector", "version": "v1.3.0"}`|
| **Battery**    |
| Battery Module voltage | node/{id}/battery/standard/voltage |
|           | `3.12` |
| Mini Battery Module voltage | node/{id}/battery/mini/voltage |
|           | `6.21` |
| **Sensors** |
| Illuminance | node/{id}/lux-meter/0:0/illuminance |
| Relative humidity | node/{id}/hygrometer/0:2/relative-humidity |
| Pressure | node/{id}/barometer/0:0/pressure |
| Altitude | node/{id}/barometer/0:0/altitude |
| Temperature | node/{id}/thermometer/0:1/temperature |
| CO2 meter | node/{id}/co2-meter/-/concentration |
| **Relays** |
| Allowed values | `true`/`false` |
| Power Module relay set | node/{id}/relay/-/state/set |
|       | response: `node/{id}/relay/-/state` |
| Power Module relay get | node/{id}/relay/-/state/get |
|       | response: `node/{id}/relay/-/state` |
| Relay Module | node/{id}/relay/0:0/state/set |
|       | response: `node/{id}/relay/0:0/state` |
| Relay Module get | node/{id}/relay/0:0/state/get |
|       | response: `node/{id}/relay/0:0/state` |
| Relay Module pulse | node/{id}/relay/0:0/pulse/set |
|        |  `{"duration":200, "direction":true}` |
| **LED** |
| LED on the Core Module | node/{id}/led/-/state/set  |
| **Button** |
| Button press | node/{id}/push-button/-/event-count |
| **PIR** |
| Object movement detection | node/{id}/pir/-/event-count |
| **LED Strip** on the Power Module ||
| Set brightness 0-100% | node/{id}/led-strip/-/brightness/set |
| Set color "#250000" or RGBW "#250000(80)"| node/{id}/led-strip/-/color/set |
| Set compound | node/{id}/led-strip/-/compound/set |
|             | `[20, "#ff0000", 20, "#00ff00"]` |
| Set effect | node/{id}/led-strip/-/effect/set' |
|        |  `{"type":"test"}` |
|        |  `{"type":"rainbow", "wait":50}` |
|        |  `{"type":"rainbow-cycle", "wait":50}` |
|        |  `{"type":"theater-chase-rainbow", "wait":50}` |
|        |  `{"type":"color-wipe", "wait":50, "color":"#800000"}` |
| **LCD Module** |
| left button | node/{id}/push-button/lcd:left/event-count |
| right button | node/{id}/push-button/lcd:right/event-count |
| clear screen | node/{id}/lcd/-/screen/clear |
| write text | node/{id}/lcd/-/text/set |
|         | `{"x": 5, "y": 10, "text": "BigClown"}` |
|         | `{"x": 5, "y": 40, "text": "BigClown", "font": 28}`|

## Gateway Topics

### Radio Pairing

Start/stop radio pairing mode on gateway, get paired nodes, delete all pairing.

**Request**

| MQTT Topic | Explanation |
|------------|-------------|
| `gateway/{id or name}/pairing-mode/start` | Start pairing, led starts blinking |
| `gateway/{id or name}/pairing-mode/stop` | Stop pairing, led stops blinking |
| `gateway/{id or name}/nodes/get` | List of paired nodes |
| `gateway/{id or name}/nodes/purge` | Purge all paired nodes |

* `{id or name}` - id or name of gateway, use "all" for request to all gateways

Examples:
<pre>`mosquitto_pub -t gateway/all/pairing-mode/start -n`</pre>
<pre>`mosquitto_pub -t gateway/all/pairing-mode/stop -n`</pre>
<pre>`mosquitto_pub -t gateway/all/nodes/get -n`</pre>
<pre>`mosquitto_pub -t gateway/all/nodes/purge -n`</pre>

Gateway named *"usb-dongle"*:
<pre>`mosquitto_pub -t gateway/usb-dongle/pairing-mode/start -n`</pre>
<pre>`mosquitto_pub -t gateway/usb-dongle/pairing-mode/stop -n`</pre>

Gateway named *"core-module"*:
<pre>`mosquitto_pub -t gateway/core-module/pairing-mode/start -n`</pre>
<pre>`mosquitto_pub -t gateway/core-module/pairing-mode/stop -n`</pre>

**Response**

To see responses execute:
<pre>`mosquitto_sub -t gateway/#`</pre>

* `gateway/{id or name}/pairing-mode "start"`
* `gateway/{id or name}/pairing-mode "stop"`
* `gateway/{id or name}/nodes ["{id-node-0}", "{id-node-id1}", "{id-node-id2}"]`
* `gateway/{id or name}/nodes []`

**Message notifications**

| MQTT Topic MQTT Payload | Explanation |
|------------|-------------|
| `gateway/{gw id or name}/attach "{node id}"` | Notification node {node id} paired |

Example:

* `gateway/pc-gw/attach "836d19839c3a"`


For details have a look into implementation in GitHub repository [**bch-gateway**](https://github.com/bigclownlabs/bch-gateway).

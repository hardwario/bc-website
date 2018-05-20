---
title: "MQTT topics"
---

## Generic Node Topics

Detailed list of topics is in **README** in GitHub repository [**bcf-generic-node**](https://github.com/bigclownlabs/bcf-generic-node).

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

Detailed list of topics is in **README** in GitHub repository [**bch-gateway**](https://github.com/bigclownlabs/bch-gateway)

{{< note "info" >}}
Replace `{id}` with **id** or **name** of gateway, use "all" for request to all. \\
Also to see the MQTT responses open the Node-RED debug tab or run this console command `mosquitto_sub -t gateway/#`.
{{< /note >}}

| Explanation | MQTT Topic |
|------------|-------------|
| **Pairing** |
| start | `gateway/{id}/pairing-mode/start` |
|       | response: `gateway/{id}/pairing-mode "start"` |
| stop | `gateway/{id}/pairing-mode/stop` |
|       | response: `gateway/{id}/pairing-mode "stop"` |
| **Paired nodes** |
| list | `gateway/{id}/nodes/get`  |
|       | response: `gateway/{id}/nodes`<br/> `[{"id": "a7c8b05762dd", "alias": "generic-node:0"},` <br/>`{"id": "836d1983718a", "alias": "kit-lcd-thermostat:0"}]` |
| purge all nodes| `gateway/{id}/nodes/purge`  |
| | response: `gateway/{id}/nodes []` |
| **Manual add/remove**|
| add | `gateway/{id}/nodes/add` <br /> `"{id-node}"` |
| | response: `gateway/{id}/attach "{id-node}"` |
| remove | `gateway/{id}/nodes/remove` <br /> `"{id-node}"` |
| | response: `gateway/{id}/detach "{id-node}"` |
| **Aliases**|
| set | `gateway/{id}/alias/set` <br /> `{"id": "id-node", "alias": "new-name"}` |
| remove | `gateway/{id}/alias/remove` <br /> `"{id-node}"` |
| remove | `gateway/{id}/alias/set` <br /> `{"id": "id-node", "alias": null}` |
| **Scan wireless**|
| start | `gateway/{id}/scan/start` |
| | response: `gateway/{id}/scan "start"` |
| | found node: `gateway/{id}/found "{id-node}"` |
| stop | `gateway/{id}/scan/stop` |
| | response: `gateway/{id}/scan "stop"` |


## Mosquitto command examples
Send to all connected gateways:
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

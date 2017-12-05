---
title: "MQTT topics"
---

## Generic Node Topics

Detailed list of topics is in **README** in GitHub repository [**bcf-gateway**](https://github.com/bigclownlabs/bcf-gateway).

| Explanation   | MQTT Topic    |
| ------------- |---------------|
| Firmware info | node/{id}/info |
|    | `{"firmware": "bcf-generic-node-battery-mini-v1.5.6"}`|
| **Battery**    |
| Battery Module voltage | node/{id}/battery/standard/voltage |
| Mini Battery Module voltage | node/{id}/battery/mini/voltage |
| **Sensors** |
| Illuminance | node/{id}/lux-meter/0:0/illuminance |
| Relative humidity | node/{id}/hygrometer/0:2/relative-humidity |
| Pressure | node/{id}/barometer/0:0/pressure |
| Altitude | node/{id}/barometer/0:0/altitude |
| Temperature | node/{id}/thermometer/0:1/temperature |
| CO2 meter | node/{id}/co2-meter/-/concentration |
| **Relays** |
| Power Module relay | node/{id}/relay/-/state/set |
| Relay Module | node/{id}/relay/0:0/state/set |
| **LED** |
| LED on the Core Module | node/{id}/led/-/state/set |
| **Button** |
| Button press | node/{id}/push-button/-/event-count |
| **LED Strip** on the Power Module |
| Set brightness 0-100% | node/{id}/led-strip/-/brightness/set |
| Set color "#250000" or RGBW "#250000(80)"| node/{id}/led-strip/-/color/set |
| Set compound | node/{id}/led-strip/-/compound/set |
|             | `[20, "#ff0000", 20, "#00ff00"]` |
| Set effect | node/{id}/led-strip/-/effect/set' |
|        |  `{"type":"test"}` |
| **LCD Module** |
| left button | node/{id}/push-button/lcd:left/event-count |
| right button | node/{id}/push-button/lcd:right/event-count |
| clear screen | node/{id}/lcd/-/screen/clear |
| write text | node/{id}/lcd/-/text/set |
|         | `{"x": 5, "y": 40, "text": "BigClown", "font": 28}`|

## Gateway Topics

| Explanation   | MQTT Topic    |
|---------------|---------------|
| **Retrieve informations** |
| Get info about all connected gateways | <pre>`gateway/all/info/get`</pre><bl/>`gateway/pc-gw/info {"id": "836d19839c3b", ...}`|
| List of paired nodes | gateway/*{name}*/nodes/get<bl/><pre>`gateway/all/nodes/get`</pre><bl/>`gateway/gw-pc/nodes ["study-room", "living-room", "workshop"]`|
| **Pairing commands** |
| Start pairing | gateway/*{name}*/pairing-mode/start<bl/><pre>`gateway/all/pairing-mode/start`</pre><bl/>`gateway/pc-gw/pairing-mode "start"` |
| During pairing - Notification node added | `gateway/pc-gw/attach "836d19839c3a"` |
| Stop pairing | gateway/*{name}*/pairing-mode/stop<bl/><pre>gateway/all/pairing-mode/stop</pre><bl/>`gateway/pc-gw/pairing-mode "stop"` |
| Purge all nodes | gateway/*{name}*/nodes/purge<bl/><pre>`gateway/pc-gw/nodes/purge`</pre><bl/>`gateway/pc-gw/nodes []`

For details have a look into implementation in GitHub repository [**bch-gateway**](https://github.com/bigclownlabs/bch-gateway).

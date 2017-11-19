---
title: "MQTT topics"
---

## Generic node firmware topics

[Complete list in bcf-gateway repository](https://github.com/bigclownlabs/bcf-gateway)

| Explanation   | MQTT Topic    |
| ------------- |:-------------|
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

## Gateway command topics

[Detailed actual list on GitHub bch-usb-gateway](https://github.com/bigclownlabs/bch-usb-gateway)

| Explanation   | MQTT Topic    |
| ------------- |:-------------|
| **Pairing** |
| Start pairing | gateway/{name}/enrollment/start |
| Stop pairing | gateway/{name}/enrollment/start |

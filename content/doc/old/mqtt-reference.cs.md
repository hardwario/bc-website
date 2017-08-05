# MQTT Reference

---

## Commands

Example command invocation using `mosquitto_pub` command:

`mosquitto_pub -t "node/<id>/led/-/state/set" -m true`

**Common fields:**

* `<id>` - 6 byte long node ID as lowercase hexadecimal number
* `<m>` - Tree node major number
* `<n>` - Tree node minor number

##### Set LED on Core Module

**Topic:** `node/<id>/led/-/state/set`

**Payload:** `<state:boolean>`

##### Set relay on Power Module

**Topic:** `node/<id>/relay/-/state/set`

**Payload:** `<state:boolean>`

---

## Notifications

Example notification reception using `mosquitto_sub` command:

`mosquitto_sub -t "node/<id>/thermometer/<m>:<n>/temperature" -v`

**Common fields:**

* `<id>` - 6 byte long node ID as lowercase hexadecimal number
* `<m>` - Tree node major number
* `<n>` - Tree node minor number

##### Temperature from thermometer

**Topic:** `node/<id>/thermometer/<m>:<n>/temperature`

**Payload:** `<temperature:[number|null]>`

##### Humidity from hygrometer

**Topic:** `node/<id>/hygrometer/<m>:<n>/humidity`

**Payload:** `<humidity:[number|null]>`

##### Illuminance from lux meter

**Topic:** `node/<id>/lux-meter/<m>:<n>/illuminance`

**Payload:** `<illuminance:[number|null]>`

##### Pressure from barometer

**Topic:** `node/<id>/barometer/<m>:<n>/pressure`

**Payload:** `<pressure:[number|null]>`

##### Altitude from barometer

**Topic:** `node/<id>/barometer/<m>:<n>/altitude`

**Payload:** `<altitude:[number|null]>`

##### Concentration from CO2 sensor

**Topic:** `node/<id>/co2-meter/-/concentration`

**Payload:** `<concentration:[number|null]>`

---
title: "I²C Address Space"
---

The following table lists the I²C addresses used across the BigClown system.

All addresses are provided in a 7-bit format.

| Address | Chip         | BigClown product                                                         | Remark                                  |
| :------ | :----------- | :-------------------                                                     | :-------------------------------------- |
| 0x08    | NT3H2011     | {{% shop "NFC Tag" %}}                                                   | Changed from default to avoid collision |
| 0x19    | LIS2DH12     | {{% shop "Core Module" %}}                                               | Channel I2C0                            |
| 0x38    | TCA9534A     | {{% shop "CO2 Module" %}}                                                |                                         |
| 0x3B    | TCA9534A     | {{% shop "Relay Module" %}}                                              | Default address                         |
| 0x3C    | TCA9534A     | {{% shop "LCD Module" %}}                                                |                                         |
| 0x3E    | TCA9534A     | {{% shop "Sensor Module" %}}                                             | Default address                         |
| 0x3F    | TCA9534A     | {{% shop "Relay Module" %}}                                              | Alternate address                       |
| 0x40    | SHT20        | {{% shop "Humidity Tag" %}} (R3.x+), {{% shop "Climate Module" %}}       |                                         |
| 0x40    | HDC2080      | {{% shop "Humidity Tag" %}} (R2.x+)                                      | Default address                         |
| 0x41    | HDC2080      | {{% shop "Humidity Tag" %}} (R2.x+)                                      | Alternate address                       |
| 0x44    | OPT3001      | {{% shop "Lux Meter Tag" %}}, {{% shop "Climate Module" %}}              | Default address                         |
| 0x45    | OPT3001      | {{% shop "Lux Meter Tag" %}}                                             | Alternate address                       |
| 0x48    | TMP112       | {{% shop "Temperature Tag" %}}, {{% shop "Climate Module" %}}            | Default address                         |
| 0x49    | TMP112       | {{% shop "Temperature Tag" %}}                                           | Alternate address                       |
| 0x49    | TMP112       | {{% shop "Core Module" %}}, {{% shop "Cloony" %}}                        | Channel I2C0                            |
| 0x58    | SGP30        | {{% shop "VOC Tag" %}}                                                   | Default address                         |
| 0x5F    | HTS221       | {{% shop "Humidity Tag" %}} (R1.x)                                       |                                         |
| 0x60    | MPL3115A2    | {{% shop "Barometer Tag" %}}, {{% shop "Climate Module" %}}              |                                         |
| 0x64    | ATSHA204A    | {{% shop "Core Module" %}}, {{% shop "USB Dongle" %}}, {{% shop "Cloony" %}}| Channel I2C0                         |
| 0x64    | ATSHA204A    | {{% shop "USB Dongle" %}}                                                | Channel I2C1                            |
| 0x9A    | SC16IS740    | {{% shop "CO2 Module" %}} I2C to UART bridge                             | Channel I2C0                            |

{{< note "info" >}}
Addresses 0x00-0x07 and 0x78-0x7F are I2C reserved addresses and cannot be used.
{{< /note >}}


## References

* [**Adafruid I2C address compilation**](https://learn.adafruit.com/i2c-addresses/the-list)

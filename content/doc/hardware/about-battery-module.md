---
title: About Battery Module
---

{{< hardware_intro "Battery Module" battery-module >}}

Battery Module is designed as a power supply source for battery-operated nodes. Using a low-power buck converter provides excellent efficiency and long battery lifetime from four AAA 1.5 V Alkaline cells.

Load disconnect circuit can bypass batteries if any other power supply source is connected in the system (e.g. AC adapter or USB cable). Battery voltage can be measured on one of the analog inputs of the standardized header.

Battery Module also provides an extra 5-pin socket allowing to connect a BigClown tag (I2C peripheral in a common form factor).

Another useful feature is a prototyping area for soldering your own circuits.
{{< /hardware_intro >}}

## Features

  * High efficiency buck converter TPS62745
  * Ultra low quiescent current: 400 nA
  * Recommended battery types:
    * 4x AAA 1.5 V Alkaline or
    * 4x AAA Eneloop NiMH
  * Output supply voltage 3.1 V
  * Battery disconnect circuit
  * Input voltage measurement using an ADC input
  * Prototyping soldering area for soldering custom circuits
  * One extra position for BigClown tag
  * Ready for NFC Module (coming in 2017)
  * Operating temperature range: -20 to 70 °C
  * Mechanical dimensions: 88 x 55 mm
  * 10-year warranty

{{< hardware "Battery Module" >}}

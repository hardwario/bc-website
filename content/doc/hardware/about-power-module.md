---
title: About Power Module
---
{{< hardware_intro "Power Module" power-module >}}
This module allows to connect 5 V DC wall adapter via a standard 2.1 mm power jack socket. With this module a BigClown node can be powered using its integrated LDO which generates 3.3 V output from a 5 V input.

Another feature is a high-current relay (230 V AC / 16 A). Moreover you can directly connect (via a 3-terminal block) a programmable RGB(W) LED strip with 5V interface (voltage translation logic is implemented) which is great for driving WS2812B-compatible LEDs.

Reliability is as important for us as it is for you. That’s why we have implemented smart overvoltage, undervoltage and reverse polarity protection on the power jack input to guarantee the input voltage range to always stay within the proper limits.

Last but not least feature of this module are two extra 5-pin sockets allowing to connect a BigClown tags (I2C peripheral in a common form factor).
{{< /hardware_intro >}}


## Features

  * 5 V DC adapter input (2.1mm jack) (1)
  * Input voltage range from 4.2 V to 5.8 V
  * High-current relay output (230 V AC / 16 A)
  * Integrated LDO with 3.3 V output voltage
  * Addressable RGB(W) LED strip output (1) (2)
  * 2x position for BigClown tag
  * Overvoltage, undervoltage and reverse polarity protection
  * Pluggable 3-pin terminal block for relay output
  * Pluggable 3-pin terminal block for LED strip
  * Operating temperature range: -20 to 70 °C
  * Mechanical dimensions: 88 x 55 mm
  * 10-year warranty

## Notes
(1) Maximum allowed is 6 A (2) Core Module is required to drive an addressable LED strip

{{< hardware "Power Module" >}}

---
title: About 1-Wire Module
---

<style>
.module-pitch img {
    margin: 50px;
}
.module-pitch p {
    margin-top: 50px;
}
</style>

<div class="clearfix module-pitch">
<img class="pull-left" src="1-wire-module.png" alt="1-Wire Module" width="300">
<p>{{< include "shop/pitch-1-wire-module.md" >}}</p>
</div>

{{< include "shop/body-1-wire-module.md" >}}

As The Wikipedia says [1-Wire](https://en.wikipedia.org/wiki/1-Wire) is a "legendary" peripheral bus invented by [Dallas Semiconductors](https://en.wikipedia.org/wiki/Dallas_Semiconductor) for data exchange with low power slow peripherals. It is usually compared with I2C bus by Philips Semiconductors (today NXP). Compared to that bus the 1W has better solution for addressing where each and every device gets its own unique address (compare Ethernet MAC addresing within [OUI](https://en.wikipedia.org/wiki/Organizationally_unique_identifier)). This wise idea built into the concept since its birth has actually eliminated the need for bus multiplexing and reduced also the need for extra wires for powering the devices. As an example the DS18S20 (digital thermometer) can be powered by parasitic energy from data communication and with acceptable precision can measure over just 2 wires temperature at parallelly connected sensors across a smaller distances.

Therefore this module brings those two worlds together by bridging using [DS2482](https://www.maximintegrated.com/en/products/interface/controllers-expanders/DS2482-100.html).

![fig. DS2482-100](https://www.maximintegrated.com/images/qv/4382.gif)

While connected to I2C it offers those commands (for details refer to the [datasheet](https://datasheets.maximintegrated.com/en/ds/DS2482-100.pdf)):

| code | Command/function    |
|:---- |:------------------- |
| 0xf0 | Device reset        |
| 0xd2 | Write configuration |
| 0xb4 | 1-Wire reset        |
| 0x87 | 1-Wire single bit   |
| 0xa5 | 1-Wire write byte   |
| 0x96 | 1-Wire read byte    |
| 0x78 | 1-Wire triplet      |

For your convenience it was wrapped into simple function in the SDK.

{{< hardware "1-Wire Module" >}}

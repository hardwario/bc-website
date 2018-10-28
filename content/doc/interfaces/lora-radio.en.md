---
title: "LoRa IoT radio"
menu:
  main:
    parent: 'interfaces'
    weight: 60
  doc:
    parent: 'interfaces'
    weight: 60
---

<div style="float:right;width:30%;text-align:center;">
BigClown {{< shop "LoRa Module" >}}
<br /><br />
{{% img-zoom src="lora-module.jpg" %}}
</div>

LoRa is a proprietary radio technology that allows sending small data packets both directions (uplink & downlink). Radio modulation was designed by the Semtech company and allows long range and long lifetime when powering device from the batteries. The message can contain 52 bytes and you can send/receive data about every 10 minutes. Radio is using ISM band 868 MHz in Europe and 915 MHz in the US.

Advantage of LoRa is that it's possible to build/buy your own personal gateway, use some community-based networks like [The Things Network](https://www.thethingsnetwork.org/), [LORIOT](https://www.loriot.io/) or many others. It's also possible to use commercial provider's already established LoRa network.

BigClown has {{< shop "LoRa Module" >}} which you can use to create battery operated nodes that are sending or receiving data. Module supports LoRaWAN Class A and Class C.

# References

* {{<shop "LoRa Module" >}} in the BigClown shop
* [About LoRa Module]({{< relref "/doc/hardware/about-lora-module.en.md" >}})
* [LoRa Module in SDK library](https://sdk.bigclown.com/group__bc__cmwx1zzabz.html)

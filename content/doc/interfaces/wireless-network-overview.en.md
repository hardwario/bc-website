---
title: "Wireless Network Overview"
menu:
  doc:
    parent: 'interfaces'
    weight: 30
---

## BigClown radio, LoRa, Sigfox, NB-IoT

This article compares the wireless technologies you can use with BigClown. BigClown supports not just generic 868 MHz communication, bud can communicate also by other Low Power Wide Area Networks (LPWAN):

* BigClown 868/915 MHz FSK radio
* LoRa
* Sigfox
* NB-IoT

More information could be found in this [LPWAN comparison article](https://www.iotforall.com/iot-connectivity-comparison-lora-sigfox-rpma-lpwan-technologies/).

## BigClown 868/915 MHz FSK radio

[BigClown 868/915 MHz radio article]({{< relref "/doc/interfaces/sub-ghz-radio.en.md" >}})

Every Core Module has a SPIRIT1 radio module on it. This radio works up to 400 meters in open area or convers regular family house.

**Parameters:**

* Range in open area: 400 m
* Packet size: 50 bytes

**References:**

* [BigClown Radio Projects]({{< relref "/doc/projects/push-the-button.en.md" >}})
* [BigClown Radio Projects on GitHub](https://github.com/bigclownlabs?&q=radio)

## LoRa Network

[BigClown LoRa Module article]({{< relref "/doc/interfaces/lora-radio.en.md" >}})

This is a network build by companies, municipalities and public. You can try to google if some company in your country/area provides this network ([CRA](https://www.cra.cz/iot-services), [Starnet](https://www.starnet.cz/iot)). You can also buy your own gateway and create your own network for school or city, or use the community [The Things Network](https://www.thethingsnetwork.org/) ([coverage map](https://www.thethingsnetwork.org/map)).

**Gateways:**

* [IMST IC880A Lite Gateway](https://shop.imst.de/wireless-modules/lora-products/36/lite-gateway-demonstration-platform-for-lora-technology)
* [Multitech](https://www.multitech.com/brands/multiconnect-conduit)
* and many others - just google

**Parameters:**

* Range in open area: 10 km
* Packet size: 50 - 200 bytes

**References:**

* [LoRa Climate Monitor Project]({{< relref "/doc/projects/lora-climate-monitor.en.md" >}})
* [LoRa Module Hardware]({{< relref "/doc/hardware/about-lora-module.en.md" >}})
* [How To: LoRa Module Firmware]({{< relref "/doc/firmware/how-to-lora-module.en.md" >}})
* [LoRa Projects on GitHub](https://github.com/bigclownlabs?&q=lora)

## Sigfox Network

[BigClown Sigfox Module article]({{< relref "/doc/interfaces/sigfox-radio.en.md" >}})

Because Sigfox is global network, you don't have to deal with SIM cards or roaming. You do not have to buy or manage gateway. You just use already working infrastructure.

For SigFox you can buy [Sigfox Module with 3 years subscription](https://shop.bigclown.com/bundle-sigfoxmodule-mysigfoxplatinum3y) from our shop. You can also buy just the Sigfox Module and manage the subscription yourself.
Check [Sigfox coverage map](https://www.sigfox.com/en/coverage) to see if your area is covered.

**Parameters:**

* Range in open area: 10 km
* Packet size: 12 bytes

**References:**

* [Sigfox Module Hardware]({{< relref "/doc/hardware/about-sigfox-module.en.md" >}})
* [How To: Sigfox Module Firmware]({{< relref "/doc/firmware/how-to-sigfox-module.en.md" >}})
* [MySigfox.com service]({{< relref "/doc/tutorials/mysigfox-com-service.en.md" >}}) to receive your data
* [Sigfox Projects on GitHub](https://github.com/bigclownlabs?&q=sigfox)


## NB-IoT network

For this network you can use our platform [CHESTER](https://www.hardwario.com/chester).

NB-IoT Module for BigClown is in the development.

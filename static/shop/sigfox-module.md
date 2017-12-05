The **Sigfox Module** allows you to communicate to the **Sigfox wireless network**, a global network made for the IoT. This technology makes it possible to communicate from a battery-powered device directly to server, even for several years. The **Sigfox Module** uses radio frequency 868 MHz.

**Signed agreement with your Sigfox network operator is a must.**

Thanks to narrow band transmission, the device can communicate with the operator cell over a distance of more than 100 km.

This network has a wide range of applications. Its use is particularly useful in energy consumption meters (e.g. water meters, gas meters, etc.), environmental sensors (e.g. a CO₂ sensor), but also in applications for early reports of accidents or defects (e.g. water leak detector).

However, there are some limitations on the transmitted data. In the Sigfox network, only **140 messages a day** with the maximum data **payload of 12 bytes** (96 bits) can be transferred from a device.

The Sigfox network is data-agnostic. That means it is up to you to define the structure of the data. On a Sigfox backend, you can specify the so-called callback, the service that will be called when data arrive from a device. For example, you can define a webhook to your server - the HTTP POST call with JSON body.

## Features

* Officialy certified Sigfox module
* Sigfox module WSSFM10R1AT (Wisol)
* Sigfox zone RCZ1 (Europe and Middle East)
* Communication using UART and AT commands
* SMA antenna ANT-SS900
* Standby power consumption 2 μA
* Power consumption of 65 mA for about 6 seconds
* Operating voltage range: 1.8 to 3.6 V
* Operating temperature range: -20 to 70 °C
* Dimensions: 33 x 55 mm

## Resources

* [**Documentation**](https://www.bigclown.com/doc/hardware/about-sigfox-module/)
* [**Schematic drawing**](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-sigfox)

The load disconnect circuit can disconnect the batteries if any other power supply source is connected to the system (e.g. AC adapter or USB cable). The **battery voltage can be measured** on one of the analog inputs of the standardized header (P0/A0/TXD0).

If the for AAA batteries are not suitable for your application, you can use the **external voltage input**, which can handle up to 10 V. You can find the external input on the two pins in the middle. These pins are compatible with the popular JST connector used for Lithium batteries.

Another useful feature is a **prototyping area** for soldering your own circuits.

## Features

* High-efficiency buck converter TPS62745 (TI)
* Ultra-low quiescent current: 400 nA
* Recommended battery types:
    * 4x AAA 1.5 V Alkaline or
    * 4x AAA Eneloop NiMH
* Output supply voltage: 3.1 V
* Battery disconnect circuit
* Battery voltage measurement using an ADC input
* Prototyping area for soldering custom circuits
* One extra position for BigClown tag
* Operating voltage range: 3.3 to 10 V
* Operating temperature range: -20 to 70 °C
* Mechanical dimensions: 88 x 55 mm

## Resources

* [**Documentation**](https://www.bigclown.com/doc/hardware/about-battery-module/)
* [**Schematic drawing**](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-battery)

The two terminals - A on the left, B on the right - are connected to the BigClown header signals P4/A4/DAC0 and P5/A5/DAC1.

The C pin is in default configuration connected also to the ground GND. It is possible to remove zero-ohm resistor R20 and solder it to the place R21. This way the C signal is directly connected to P7 and can be used as extra input.

The VCC middle pin is possible to control by software. You can enable 3 V on this pin.

## Features

Configurable terminal modes:

* Analog input or output
* Digital input or output
* Pull-up resistor none/4.7 kΩ/56 Ω

Examples interfaces:

* Digital temperature sensor on a 1-Wire bus (DS18B20)
* Resistance temperature sensor (Pt 100, Pt 1000, etc.)
* Analogue temperature sensor (LM35, TMP37, etc.)
* NTC temperature sensor
* Control of digital 1-Wire relay block
* Button or any type of switch
* Voltage measurement
* Plug-in 4-pin screw terminal block
* Operating voltage range: 1.65 V to 5.5 V
* Operating temperature range: -20 to 70 °C
* Dimensions: 33 x 55 mm

## Resources

* [**Documentation**](https://www.bigclown.com/doc/hardware/about-sensor-module/)
* [**Schematic drawing**](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-sensor)

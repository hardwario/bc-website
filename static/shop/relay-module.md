The **Relay Module** is suitable for switching small power appliances - e.g. LED strip, cooling fan, siren, buzzer, garage door opener, etc. It features a **bistable (or latching) relay** and that makes it suitable for battery-operated applications - the relay simply remembers its state.

The energy is needed only during transition state. Once the new state has been set, it is not necessary to energize the relay's coil anymore. Switching period is indicated using the green LED (in software referred as "true state"), or red LED (in software referred as "false state").

## Features

* Bistable (latching) relay for switching loads up to 60 W:
    * 12 V DC / 5 A
    * 24 V DC / 2.5 A
* Control using I²C bus
* Suitable for battery-operated applications
* Energy for coil is needed only during the transition states
* Red and green LEDs indicate the coil energizing
* Operating voltage range: 3.0 to 3.6 V
* Operating temperature range: -20 to 70 °C
* Mechanical dimensions: 33 x 55 mm

## Resources

* [**Documentation**](https://www.bigclown.com/doc/hardware/about-relay-module/)
* [**Schematic drawing**](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-relay)

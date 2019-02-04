---
title: "About Sensor Module"
menu:
  doc:
    parent: 'hardware'
    weight: 20
---

{{< img-float src="sensor-module.png" alt="Sensor Module" width="300" >}}

{{< include "shop/pitch-sensor-module.md" >}}

{{< hw-shop "sensor-module" >}}
{{< hw-sch "bc-module-sensor" >}}
{{< hw-sdk "group__bc__module__sensor" >}}
{{< hw-h-file "bc_module_sensor.h" >}}
{{< hw-c-file "bc_module_sensor.c" >}}

{{< /img-float >}}

{{< include "shop/body-sensor-module.md" >}}


## Firmware Projects

* [**Radio Flood Detector**](https://github.com/bigclownlabs/bcf-radio-flood-detector/releases) [**(documentation)**](https://www.bigclown.com/doc/projects/radio-flood-detector/)
* [**Radio Pool Sensor**](https://github.com/hubmartin/bcf-kit-wireless-pool-sensor)


## 1-Wire Connection

This connection is used for {{< shop "Soil Moisture Sensor" >}}, {{< shop "DS18B20 Temperature Sensor" >}} or {{< shop "Denkovi 1-Wire Relay" >}}

{{< img-zoom src="1-wire.png" width="40%" >}}

## Buttons, Magnetic Switches, Phototransistors

This connection is used for example in [Radio Door Sensor project]({{< relref "/doc/projects/radio-door-sensor.en.md" >}}).

{{< img-zoom src="sensor-module-buttons.png" width="24%" >}}

## LEDs

You can connect 3 LEDs in default configuration. (Or up-to 4 LEDs in case of channel C rewiring). Every LED has to have a resistor in series. All cathodes are connected to the GND pin. The channels A and B are controlled directly by setting pins P4, P5 high by using `bc_gpio` functions. The third LED connected to the VDD is controlled by `bc_module_sensor_set_vdd` function.

{{< img-zoom src="sensor-module-leds-output.png" width="30%" >}}

## Potentiometers

Potentiometers are connected between VDD and GND. It is needed that VDD output is powered on by `bc_module_sensor_set_vdd` function. Then by using `bc_adc` you can read analog values from pins P4, P5.

{{< img-zoom src="sensor-module-potentiometers.png" width="30%" >}}


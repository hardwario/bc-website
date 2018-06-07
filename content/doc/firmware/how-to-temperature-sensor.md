---
title: "How to: Temperature sensor"
---

Core module comes with integrated temperature sensor TMP112. It is high accuracy and low power sensor connected via I2C bus (see [address space](../../hardware/i2c-address-space/)).
If you want to take a look how TMP112 is connected, please take a look at [schematic](https://github.com/bigclownlabs/bc-hardware/blob/master/out/bc-module-core/bc-module-core-rev-1-3-sch.pdf).

{{< note "info" "As always..." >}}
... all available SDK functions for temperature sensor can be found [here](https://sdk.bigclown.com/group__bc__tmp112.html).{{< /note >}}

## How Does it Work?
- TMP112 is instantiated
- when measurement happens, event handler can be triggered
- last measured temperature can be retrieved anytime
- SDK provides functions to get temperature in:
  - raw format (`int16_t`)
  - Celsius degrees (`float`)
  - Fahrenheit degrees (`float`)
  - kelvin (`float`)

### Types of Measurements
**Manual** - we can make manual measurement whenever we want to. This is achieved by calling the `bc_tmp112_measure(bc_tmp112_t *self)` function from SDK.

**With Scheduler, repeatedly** - thanks to the [Scheduler](../timing-and-scheduler/) you can define, when the periodic measurement should happen. For this, we have the `bc_tmp112_set_update_interval(bc_tmp112_t *self, bc_tick_t interval)` function.

- `*self` is an address to an TMP112 instance
- `interval` is number of milliseconds, defining time between measurements


### Recognizable TMP112 Events
- `BC_TMP112_EVENT_ERROR` - an error occurred during a measurement
- `BC_TMP112_EVENT_UPDATE` - a measurement was completed successfully

## Example
In this example we make measurement every 5 seconds and send data over USB in format:
```
12.3456 °C
123
```

Place code below in *application.c* file and flash. Use of *application.h* file is not required here.

{{< note "danger" >}}Please note that in this particular example, the microcontroller never goes to sleep, even though the Scheduler is properly used for measurements - this is caused by USB communication running all the time. This cause the chip to heat up a bit which may affect temperature measurements. Therefore using Temperature tag is recommended for these situations. {{< /note >}}

```
#include <bcl.h>
#include <bc_usb_cdc.h>

bc_tmp112_t temp;

void tmp112_event_handler(bc_tmp112_t *self, bc_tmp112_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_TMP112_EVENT_UPDATE)
    {
        float temperature = 0.0;
        int16_t rawTemperature = 0;
        bc_tmp112_get_temperature_celsius(&temp, &temperature);
        bc_tmp112_get_temperature_raw(&temp, &rawTemperature);
        char buffer[30];
        sprintf(buffer, "%.4f °C\r\n%d\r\n", temperature, rawTemperature);
        bc_usb_cdc_write(buffer, strlen(buffer));
    }
}

void application_init(void)
{
    // initialize USB communication
    bc_usb_cdc_init();

    // initialize TMP112 sensor
    bc_tmp112_init(&temp, BC_I2C_I2C0, 0x49);

    // set measurement handler (call "tmp112_event_handler()" after measurement)
    bc_tmp112_set_event_handler(&temp, tmp112_event_handler, NULL);

    // automatically measure the temperature every 5 seconds
    bc_tmp112_set_update_interval(&temp, 5000);
}
```

---
title: "How to: CO2 Module"
---

With [CO2 Module](../../hardware/about-co2-module/) you can easily measure the concentration of carbon dioxide. It is low power device which can be used with battery power. Remember that the device can require calibration and **to get best results it has to be in active state for few days**.


## How It Works
Technically it uses infrared light for measurements. More information on [Wikipedia](https://en.wikipedia.org/wiki/Carbon_dioxide_sensor)

And how it works within the SDK? As any other BigClown module. There are init, periodical + manual measurements and calibration functions available in the [SDK](http://sdk.bigclown.com/group__bc__module__co2.html)


## Recognizable CO2 Module Events
For now there are just two events - *error* and *update*.

- `BC_MODULE_CO2_EVENT_ERROR`
- `BC_MODULE_CO2_EVENT_UPDATE`

## Usage
You can measure the CO2 level manually or periodically. Every measure can trigger function within event handler.

To set periodic measurements, just use this function in your *application_init*:
`bc_module_co2_set_update_interval (bc_tick_t interval)`. *interval* is time between measurements, in milliseconds.

To make a manual measurement, just use `bc_module_co2_measure(void)`.

To get CO2 concentration from last measurement you have to use this function:
`bc_module_co2_get_concentration_ppm (float *ppm)`.

## Calibration
TODO

## Example
In this example, CO2 levels will be measured and sent to computer every time button is pressed.

```c
#include "bcl.h"
#include "bc_usb_cdc.h"

bc_button_t button;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    float ppm = 0.0;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_module_co2_measure();
        bc_module_co2_get_concentration_ppm(&ppm);

        char buffer[50];
        sprintf(buffer, "CO2 level: %.4fppm\r\n", ppm);
        bc_usb_cdc_write(buffer, strlen(buffer));
    }
}

void application_init(void)
{
    bc_usb_cdc_init();
    bc_module_co2_init();

    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);
}

```
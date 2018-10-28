---
title: "How to: Battery Module"
menu:
  main:
    parent: 'firmware'
    weight: 20
  doc:
    parent: 'firmware'
    weight: 20
---

[Battery module](../../hardware/about-battery-module/) and [Mini Battery module](../../hardware/about-mini-battery-module/) allows you to power your product with four or two **AAA** batteries. It automatically recognizes if external power is applied (AC module, USB, ...) and disconnects batteries from the circuit. With this module you can check battery voltage (manually or periodically with Scheduler) and schedule appropriate actions for certain voltage levels.

{{< note "info" "As always..." >}}
... all available SDK functions for Battery module can be found [here](https://sdk.bigclown.com/group__bc__module__battery.html).{{< /note >}}

## How Does it Work?
This module uses high efficiency buck converter which provides 3.1 V output voltage. Voltage level is measured on the analog input.

SDK provides function to

  - manually and periodically (with Scheduler) trigger battery voltage measurement
  - get exact battery voltage (*float* value)
  - get voltage charge level (percentage, *int* value)
  - create event handler
  - define voltage threshold levels

## Battery Module Types
There are two types of modules - [Standard](../../hardware/about-battery-module/) and [Mini](../../hardware/about-mini-battery-module/).

The type of the connected module is detected automatically. In your `application_init()` function you have to init the module by calling:

```c
bc_module_battery_init();
```

## Recognizable Battery Module Events
- `BC_MODULE_BATTERY_EVENT_LEVEL_LOW` - battery crossed "low voltage threshold"
- `BC_MODULE_BATTERY_EVENT_LEVEL_CRITICAL` - battery crossed "critical voltage threshold"
- `BC_MODULE_BATTERY_EVENT_UPDATE` - voltage measurement happened

## Usage
Because SDK can inform your application about *low* and *critical* level, you can easily modify it, so it will adapt to the "insufficient power" mode.

Let's say you are building a battery powered climate/weather station with Sigfox connectivity. You know that it won't be possible to change batteries immediately when they will be "soon dead". For that, you can use the *low voltage* trigger. Program your app to send warning message that will alert you about the need to change batteries. The interval for sending climate data report over Sigfox can also be made higher to prolong battery life.

And when the voltage level goes critical (*critical voltage* trigger), just send warning message that batteries are almost dead and disable other transmissions.

You can set [your own threshold levels](https://sdk.bigclown.com/group__bc__module__battery.html#gae316b29ba7391e57703b4e0e01a69f9f), so with a bit of research, you can know that when "critical level warning occurs at *x.y* voltage, there is enough power to make *m* Sigfox transmissions".

## Voltage over USB example
In this example, voltage and charge levels will be sent to your computer over USB every time you press a button.

```c
#include <bcl.h>
#include "bc_usb_cdc.h"

bc_button_t button;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_module_battery_measure();

        float voltage = 0.0;
        bc_module_battery_get_voltage(&voltage);
        char volt[25];
        sprintf(volt, "Voltage: %.3f\r\n", voltage);

        int chargePercentage = -1;
        bc_module_battery_get_charge_level(&chargePercentage);
        char charge[25];
        sprintf(charge, "Charge: %d\r\n", chargePercentage);

        bc_usb_cdc_write(volt, strlen(volt));
        bc_usb_cdc_write(charge, strlen(charge));
    }
}

void application_init(void)
{
    bc_usb_cdc_init();
    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);

    bc_module_battery_init();
}

```

## Voltage on LCD example
For this example, we are going to use LCD module to show voltage level. Place code below in application.c file and flash. Use of application.h file is not required here. Values on your LCD panel will be updated every time you press any of LCD's buttons.

```c
#include <application.h>

void application_init(void)
{
    bc_module_battery_init();
    bc_module_lcd_init();
}

void application_task()
{
    bc_module_battery_measure();

    bc_module_lcd_clear();
    bc_module_lcd_set_font(&bc_font_ubuntu_15);

    float voltage = 0.0;
    bc_module_battery_get_voltage(&voltage);
    static char volt[25];
    sprintf(volt, "Voltage: %.3f", voltage);

    int charge_percentage = -1;
    bc_module_battery_get_charge_level(&charge_percentage);
    static char charge[25];
    sprintf(charge, "Charge: %d%c", charge_percentage, 37);

    static char format[50];
    static const char* battery_format_text[] = {"unknown", "standard", "mini"};
    sprintf(format, "Format: %s", battery_format_text[bc_module_battery_get_format()]);

    bc_module_lcd_draw_string(10, 5, volt, true);
    bc_module_lcd_draw_string(10, 25, charge, true);
    bc_module_lcd_draw_string(10, 45, format, true);

    bc_module_lcd_update();

    bc_scheduler_plan_current_relative(500);
}

```

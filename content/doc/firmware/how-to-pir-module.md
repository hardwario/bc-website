---
title: "How to: PIR Module"
---

The PIR module is mostly used as motion detector. Thanks to its low power consumption it can safely be used with batteries acting as the only power source.


## How It Works
Thanks to the [SDK](https://sdk.bigclown.com/group__bc__module__pir.html), setting up and using the PIR module is very simple. You have to do only two things:
- initialize the PIR module and set its sensitivity
- program the event handler (what should happen when PIR senses movement)

Initialization is as simple as for other modules from BigClown ecosystem. You have to instantiate variable with type `bc_module_pir_t` which represents the PIR module for SDK.

Inside your *application_init* function comes the initialization and first setting of sensitivity (can be later changed in the code).

Example of initialization:
```c
bc_module_pir_t pir;

void application_init(void)
{
    bc_module_pir_init(&pir);
    bc_module_pir_set_sensitivity(&pir, BC_MODULE_PIR_SENSITIVITY_MEDIUM);
    bc_module_pir_set_event_handler(&pir, pir_event_handler, NULL);
}

```

## Sensitivity
SDK offers you four types of sensitivity defined as enum type, so you can use simple names:

- `BC_MODULE_PIR_SENSITIVITY_LOW`
- `BC_MODULE_PIR_SENSITIVITY_MEDIUM`
- `BC_MODULE_PIR_SENSITIVITY_HIGH`
- `BC_MODULE_PIR_SENSITIVITY_VERY_HIGH`


It is very hard to predict how exactly the PIR sensor will act in your particular use case, it is always a good idea to testy every type of sensitivity to find out which one to use for best results.


## Recognizable PIR Module Events
For now there are only two events - *error* and *motion* detection.

- `BC_MODULE_PIR_EVENT_ERROR` - occurs when error was encountered
- `BC_MODULE_PIR_EVENT_MOTION` - occurs when motion is detected


## Example
This example uses **medium** sensitivity. When movement is detected, message `Movement!` is sent to your computer.

```c
#include "bcl.h"
#include "bc_usb_cdc.h"

bc_module_pir_t pir;
bc_button_t button;

void pir_event_handler(bc_module_pir_t *self, bc_module_pir_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_MODULE_PIR_EVENT_MOTION)
    {
        bc_usb_cdc_write("Movement!\r\n", strlen("Movement!\r\n"));
    }
}

void application_init(void)
{
    bc_usb_cdc_init();

    bc_module_pir_init(&pir);
    bc_module_pir_set_sensitivity(&pir, BC_MODULE_PIR_SENSITIVITY_MEDIUM);
    bc_module_pir_set_event_handler(&pir, pir_event_handler, NULL);
}

```
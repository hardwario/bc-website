---
title: "How to: Power Module"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

[Power module](../../hardware/about-power-module/) provides two features - you can control high power device with robust relay (230 V / 16 A) and you can also connect 5V addressable LEDs (*WS2812B*) and control them.

{{< note "info" "As always..." >}}
... all available SDK functions for Power module can be found [here](https://sdk.bigclown.com/group__bc__module__power.html).{{< /note >}}


## Relay Control
Controlling the relay is very simple. First you have to initialize the power module in your *application_init* function by calling `bc_module_power_init()`. It is always good to set initial state immediately after the initialization, like `bc_module_power_relay_set_state(false)`.

When the relay is *switched on*, you will see a small green LED light near to the relay.

You can set the relay state anywhere in your code by calling `bc_module_power_relay_set_state(bool state)`.
The SDK holds actual state internally, you can always retrieve it by calling `bc_module_power_relay_get_state()`. So if you are going to switch relay state, you don't have to create any variable, just use this function within function:
`bc_module_power_relay_set_state(!bc_module_power_relay_get_state())`


In the example below we set the relay to *off* state after initialization. To switch the state, just use the button.

```c
#include <bcl.h>

bc_button_t button;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_module_power_relay_set_state(!bc_module_power_relay_get_state());
    }
}

void application_init(void)
{
    bc_module_power_init();
    bc_module_power_relay_set_state(false);

    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);
}
```


## LED / LED Strip Control
We have [separate tutorial](../../firmware/how-to-smart-led-strip/) how to control our LED strip.

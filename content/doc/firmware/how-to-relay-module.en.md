---
title: "How to: Relay Module"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

With our Relay module you can easily control high voltage/current circuits. This module is specially designed to consume low levels of power. The relay also consumes power when changing state only.


## Initialization and Simple Control
[SDK](https://sdk.bigclown.com/group__bc__module__relay.html) provides simple functions to control your relay.
First you have to instantiate variable typed `bc_module_relay_t` which represents the relay and use the *relay init* function. I2C address of the module is `0x3B`. It is also a good practice to tell the SDK about actual relay state. Inside you *application_init* function you can do something like this to give it OFF state:

```c
bc_module_relay_init(&relay, 0x3B);
bc_module_relay_set_state(&relay, false);
```

### Manual toggle
You can toggle the states manually. That is achieved by calling the `bc_module_relay_toggle(bc_module_relay_t *self)`, where the *self* parameter is an address to instantiated variable of type `bc_module_relay_t`.

SDK holds the information about relay state internally, which means that on every call of this function it will switch the state.


### Pulse Control
More interesting is control with the `bc_module_relay_pulse(bc_module_relay_t *self, bool direction, bc_tick_t duration)` function. When called, the relay will be switched to given state for time defined in its last parameter and then automatically switches back. You can see this in simple working example (after pressing the button, relay is switched to ON state for 1500 milliseconds and then back to OFF).


**Example:**

```c
#include "bcl.h"

bc_module_relay_t relay;
bc_button_t button;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_module_relay_pulse(&relay, true, 1500);
        bc_module_relay_toggle(&relay);
    }
}

void application_init(void)
{
    bc_module_relay_init(&relay, 0x3B);
    bc_module_relay_set_state(&relay, false);

    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);
}

```

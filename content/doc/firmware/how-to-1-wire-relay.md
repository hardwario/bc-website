---
title: "How to: 1-Wire Relay"
---

To make it easier to work with certain 1-Wire devices we implemented module called *bc_onewire_relay* which allows you to control relay modules connected via 1-Wire bus, for example the Relay module developed by Denkovi.


## Requirements
For this tutorial you need:

- Core module
- Sensor module
- relay module controlled over 1-Wire bus

## SDK

Documentation for this SDK module can be found [here](http://sdk.bigclown.com/group__bc__onewire__relay.html).

There is very simple workflow for controlling the relay:

- you have to instantiate a variable representing the relay ```bc_onewire_relay_t relay;```
- relay connection has to be initiated in *application_init()* function by calling 
```bc_onewire_relay_init(&relay, BC_GPIO_P4, 0x00);```

 - the second parameter represents ports **A** and **B** on the Sensor module. Use _P4 for A and _P5 for B.
 - the third parameter represents number of connected device represented as *uint64_t* value
- now you only have to use the `bc_onewire_relay_set_state()` function to set desired state of every relay


## Example
In this example we allow the relays to be controlled with button integrated to Core module. On every press of the button one more relay will be activated. When all relays are active, the next push of button will switch off all of them and the cycle repeats.


```c
#include <application.h>
#include <bc_onewire_relay.h>
#include <bc_button.h>

bc_onewire_relay_t relay;
bc_button_t button;

bc_onewire_relay_channel_t relays[] = {
        BC_ONEWIRE_RELAY_CHANNEL_Q1,
        BC_ONEWIRE_RELAY_CHANNEL_Q2,
        BC_ONEWIRE_RELAY_CHANNEL_Q3,
        BC_ONEWIRE_RELAY_CHANNEL_Q4,
        BC_ONEWIRE_RELAY_CHANNEL_Q5,
        BC_ONEWIRE_RELAY_CHANNEL_Q6,
        BC_ONEWIRE_RELAY_CHANNEL_Q7,
        BC_ONEWIRE_RELAY_CHANNEL_Q8
};

int activated = 0;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        if (activated == 8) {
            for (int i = 0; i < 8; ++i) {
                bc_onewire_relay_set_state(&relay, relays[i], false);
            }

            activated = 0;
        } else {
            bc_onewire_relay_set_state(&relay, relays[activated], true);
            activated++;
        }
    }
}

void application_init(void)
{
    bc_onewire_relay_init(&relay, BC_GPIO_P4, 0x00);

    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, 0);
    bc_button_set_event_handler(&button, button_event_handler, NULL);
}


```

## Example 2
You can find similar example on [GitHub](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples/onewire-relay)
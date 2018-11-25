---
title: "How to: Push Button"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

You can control your device in many ways - you can add switches, sensors, Wi-Fi connection, etc. But the most simple way is to use button(s) integrated in Core module.

## Requirements
- Core module
- USB cable
- [Example code](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples/button)

## Integrated Buttons
Core module comes with two buttons - Reset and Boot. You can take a look at [schematics](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-core). *Reset (R)* button is used for resetting the Core module - which is de facto equal to unplugging and replugging the power/USB cable. *Boot (B)* button can be used as you wish.

This tutorial shows how to work with integrated button, but it can be used for your own buttons or switches.

{{< note "info" "As always..." >}}
... all available SDK functions for buttons can be found [here](https://sdk.bigclown.com/group__bc__button.html).{{< /note >}}


## Recognizable Button Events
*BC_BUTTON_EVENT_PRESS* and *BC_BUTTON_EVENT_RELEASE* are pretty straightforward - the first one stands for pressing the button and the second one for releasing the button.

*BC_BUTTON_EVENT_CLICK* event is recognized, when button is **pressed and held** for period of time **shorter than defined** (can be defined by *[bc_button_set_click_timeout](https://sdk.bigclown.com/group__bc__button.html#ga88fd3c911e2feb4f5ea8e1eb511ad8e5)*)

*BC_BUTTON_EVENT_HOLD* event is recognized, when button is **pressed and held** for period of time **longer than defined** (can be defined by *[bc_button_set_hold_timeout](https://sdk.bigclown.com/group__bc__button.html#ga3ec362aaaa409c85170310074cc5a320)*)


## Example
First, an instance of button is needed. You can achieve this by adding this line:
`bc_button_t button;`

Button is initiated by function
```bc_button_init (bc_button_t *self, bc_gpio_channel_t gpio_channel, bc_gpio_pull_t gpio_pull, int idle_state)```

- `*self` is an address to the instantiated button
- `gpio_channel` is GPIO channel number - defined as *enum*, more in [SDK](https://sdk.bigclown.com/group__bc__gpio.html)
- `gpio_pull` stands for GPIO pull up/down settings
- `idle_state` - state of a GPIO pin, when button **is not** pressed

In our example, we call init function this way:
```
bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, 0);
```

Then we need to define *event handler* - what function to call when something happens with the button.
```
bc_button_set_event_handler(&button, button_event_handler, NULL);
```

In other words: *when button is triggered, call function called 'button_event_handler' with no additional parameters*

In the *button_event_handler* function we mainly compare the *event* parameter with callback events defined in [bc_button_event_t](https://sdk.bigclown.com/group__bc__button.html#ga6584b74ad24dd2ca8048fd72c73426fa).

In this example we will use *_HOLD* and *_PRESS* events for better understanding. Programmed Core module will work by these rules:

  - when button is **held for 1.5 seconds** (or more), LED starts to blink fast
  - when button is **pressed** (simple short press), LED goes off

To set the 1.5 second interval we can use *bc_button_set_hold_time* function (inside *application_init()*)
```bc_button_set_hold_time(&button, 1500);```

Everything else is defined in the *button_event_handler* function.
```
void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_led_set_mode(&led, BC_LED_MODE_OFF);
    } else if (event == BC_BUTTON_EVENT_HOLD ) {
        bc_led_set_mode(&led,  BC_LED_MODE_BLINK_FAST);
    }
}
```
Full *ready-to-flash* code for this example can be found at [Github](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples/button).

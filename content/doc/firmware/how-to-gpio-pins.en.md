---
title: "How to: GPIO pins"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

You can use many GPIOs (General Purpose Input/Output pins) to connect the **Core Module** with the outside world.
The pins are described in the [Header Pinout]({{< relref "/doc/hardware/header-pinout.en.md" >}}). The pins in SDK has names `BC_GPIO_P0` to `BC_GPIO_P17`. There are also two special pins dedicated to `BC_GPIO_LED` and `BC_GPIO_BUTTON`.

{{< note "info" "As always..." >}}
... all available functions can be found in [GPIO section in generated SDK documentation](https://sdk.bigclown.com/group__bc__gpio.html).{{< /note >}}


## GPIO Configuration ##

First important task is to enable clock to the GPIO peripheral by calling `bc_gpio_init`. ARM Cortex micros have **clock gating** which disables the peripheral clock and saves more power. Then you need to configure the pin mode by calling `bc_gpio_set_mode`. The Mode can be input, output, analog, open-drain or alternate mode which is used when configuring UART or SPI peripheral. Then it is possible to configure internal **pull-up** or **pull-down** resistor by calling `bc_gpio_set_pull` so can define the default logic level when there's nothing connected to the GPIO pin.

### GPIO as output

This example will turn on the LED on the **Core Module**. The usual and more comfort way to control LED is to use `bc_led` code, but we use the `bc_gpio` for now to explain the GPIO basics.

```c
#include <application.h>

void application_init(void)
{
    bc_gpio_init(BC_GPIO_LED);
    bc_gpio_set_mode(BC_GPIO_LED, BC_GPIO_MODE_OUTPUT);
    bc_gpio_set_output(BC_GPIO_LED, 1);
}
```

### GPIO as Input

This example will read the button state and the read value will be written to the LED.

```c
#include <application.h>

void application_init(void)
{
    bc_gpio_init(BC_GPIO_LED);
    bc_gpio_set_mode(BC_GPIO_LED, BC_GPIO_MODE_OUTPUT);

    bc_gpio_init(BC_GPIO_BUTTON);
    bc_gpio_set_mode(BC_GPIO_BUTTON, BC_GPIO_MODE_INPUT);
    // The Core Module has hardware pull-down so next call is commented
    // bc_gpio_set_pull(BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN);
}

void application_task()
{
    uint8_t button_state = bc_gpio_get_input(BC_GPIO_BUTTON);
    bc_gpio_set_output(BC_GPIO_LED, button_state);

    // Repeat this task again after 10 ms
    bc_scheduler_plan_current_relative(10);
}
```

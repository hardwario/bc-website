---
title: "How to: Smart LED Strip"
---

Our [Smart LED Strips](https://shop.bigclown.com/collections/led-strips) provides you easy way to show values like temperature as a color range, blinking etc.

You need to use a [Power Module](../../hardware/about-power-module/) which takes care of power and communication between Core module and the LED strip. 

{{< note "info" "If you need cool white light only" >}}...you can use standard 5V white LED strip connected to the relay on the Power Module.{{< /note >}}


There are some functions available in SDK which can "do things" with your LED strip - changing color to imitate rainbow, representing temperate or some score, etc... But they are not yet commented which means you can not find them in the SDK documentation. You can find them directly in [SDK at Github](https://github.com/bigclownlabs/bcf-sdk/blob/master/bcl/inc/bc_led_strip.h) or in this article (some of them).


## Prerequisites
- in examples bellow we expect that the variable `bc_led_strip_t led_strip;` is instantiated and available for all code.
- remember that single LED is called *a pixel* in this document an so as in the SDK

## Basic Usage
### Available colors
LEDs featured on our [strip](https://shop.bigclown.com/led-strip-rgbw-1m-144-leds/) are **RGBW**. Which means they include separate light source for Red, Green, Blue and White (warm white) colors. 

*TIP*: To get *almost* cool white light, you have to set every single color to the same value as the other ones.

### Initialization

First you have to instantiate a variables with type `bc_led_strip_t` and `bc_led_strip_buffer_t` somewhere in your code. 

The buffer is de facto a place where you tell the SDK how your LED strip looks like. This is an example for our 144 LEDs strip:

```c
const bc_led_strip_buffer_t _led_strip_buffer =
        {
                .type = BC_LED_STRIP_TYPE_RGBW,
                .count = 144,
                .buffer = _dma_buffer
        };
```

Initialization of power module WITH LED strip connected is achieved by calling these function inside *application_init*:
```c
bc_module_power_init();
bc_led_strip_init(&led_strip, bc_module_power_get_led_strip_driver(), &_led_strip_buffer);
```

### Writing Changes and Reading the State
Like with the LCD module you have to *write* every change you make (change color of one led, change brightness, ...). You can write changes by calling `bc_led_strip_write(&led_strip)`

You can also find out if the LED strip is ready for making changes/going to next step of programmed process. Just call this function, which returns *bool*: `bc_led_strip_is_ready(&led_strip)`.


### Set one pixel at a time
The most basic thing you can do is to set the color for every pixel at a time. To do this, you need to use function
`bc_led_strip_set_pixel_rgbw(bc_led_strip_t *self, int position, uint8_t r, uint8_t g, uint8_t b, uint8_t w)`

with parameters:

- `*self` - pointer to instantiated LED strip (*in our example it is `&led_strip`*)
- `position` - pixel which should change the color, starting from 0 (not 1)
- `r, g, b, w` - representation of how strongly every color should shine, values must be between 0 and 255

**Example:** this code will switch on 35 LEDs, making them brighter 5 points per LED (0 to 175). Blue color was chosen.

```c
#include <bcl.h>

bc_led_strip_t led_strip;
static uint32_t _dma_buffer[144 * 4 * 2]; // count * type * 2
const bc_led_strip_buffer_t _led_strip_buffer =
        {
                .type = BC_LED_STRIP_TYPE_RGBW,
                .count = 144,
                .buffer = _dma_buffer
        };

void application_init(void)
{
    bc_module_power_init();
    bc_led_strip_init(&led_strip, bc_module_power_get_led_strip_driver(), &_led_strip_buffer);

    uint8_t blue = 0;
    for (int i = 0; i < 35; ++i) {
        bc_led_strip_set_pixel_rgbw(&led_strip, i, 0, 0, blue, 0);
        blue += 5;
    }

    bc_led_strip_write(&led_strip);
}
```


### LED Brightness
You can limit maximum brightness of the entire led strip with function `bc_led_strip_set_brightness(bc_led_strip_t *self, uint8_t brightness)`.

Always remember that the brightness needs to be set before lighting up any LEDs. If you set it after making any changes, nothing will happen.
---
title: "How to: LCD Module"
---

Our [LCD Module](../../hardware/about-lcd-module/) provides simple way to show needed information without connecting to computer or any network. It is *ultra-low-power device* - its using should not bring you much trouble when powered with batteries.

It may be a bit hard to get used to draw things or show text at the beginning, but little bit of training (and reading through this article) should help you.
**Note:** Printing dots, writing strings and drawing lines - everything means `draw` in SDK.


{{< note "info" "As always..." >}}
... all available SDK functions for LCD module can be found [here](https://sdk.bigclown.com/group__bc__module__lcd.html).{{< /note >}}

## What you need to know

### LCD Module Life Cycle

**First step:**  LCD module initialization - happens once, possibly inside ```application_init()```

**Cycle:**

- LCD module On
- drawing, setting font, clearing, rotating
- LCD module Update - *makes all changes (like drawing) visible on LCD*
- LCD module Off - *switches off the LCD module for power saving*

### Remember to Update
Every change you make - draw a string or a line, rotate the display, etc is done internally and no changes are visible until you call the ```bc_module_lcd_update()``` function.

This has a simple purpose - if every change you make would cause an update, it would increase the power consumption rapidly.


### LCD Module Power
The module can be *switched on* and *off* for power saving (mostly used to prolong battery life when used).

It is as simple as calling

`bc_module_lcd_off()`

and

`bc_module_lcd_on()`

functions. **Remember that LCD needs to be switched ON if you want to show something and *bc_module_lcd_off()* was called. It is not enough to call the update function.**

### Pixel State / Color
When (for example) a string is drawn, the SDK will not draw only requested characters pixel by pixel, but entire "block" of pixels around the chars. You can choose, which part of the block will be black and which one will be not. This can be achieved with a function parameter *bool color*.

In the *draw string* example, for this code

```c
bc_module_lcd_draw_string(5, 5, "false", false);
bc_module_lcd_draw_string(5, 20, "true", true);
bc_module_lcd_update();
```
the block containing the "false" string will be black and the text itself will be white and the "true" string vice versa.


### Clear the LCD
You can clear the LCD panel (which means set all pixels to show nothing) by calling the ```bc_module_lcd_update()``` function.

You have to call the update function (```bc_module_lcd_update()```) to make the clear process visible on LCD panel.


### Rotation
Because the LCD is a square panel (128x128 pixels), you can always rotate the displayed information for 0, 90, 180 and 270 degrees without the need to re-draw anything.

This is done by calling `void bc_module_lcd_set_rotation(bc_module_lcd_rotation_t rotation)`.
You can use one of these enums as the parameter:

- `BC_MODULE_LCD_ROTATION_0`
- `BC_MODULE_LCD_ROTATION_90`
- `BC_MODULE_LCD_ROTATION_180`
- `BC_MODULE_LCD_ROTATION_270`


**Remember that rotating LCD will not clear the display nor update it.** So if you want to create function that will draw string "Hello" rotated for 90 degrees you would create something like this:
```c
void helloDraw()
{
    bc_module_lcd_clear();
    bc_module_lcd_draw_string(5, 5, "Hello", false);
    bc_module_lcd_set_rotation(BC_MODULE_LCD_ROTATION_90);
    bc_module_lcd_update();
}
```


**Relative and absolute rotation**

Unfortunately the SDK does not offer any function to do rotation relative to actual position - so if you would repeatedly call ```bc_module_lcd_set_rotation(BC_MODULE_LCD_ROTATION_90);``` the display would be rotated **absolutely** to the right for 90 degrees. You have to implement the relative rotation yourself.


## Drawing
Now you should know everything you need to use the LCD module so we can take a look at drawing.

As we said earlier, everything you display on your LCD is called drawing. Let's begin.


### Draw a String
To draw a string you need to use function

```int  bc_module_lcd_draw_string (int left, int top, char *str, bool color)```
with parameters:

- `left` - number of pixels from left edge (you can set this to `2` for better readability - the text won't stick to the left edge of LCD)
- `top` - number of pixels from the top edge
- `*str` - string to be printed
- `color` - in other words - what should be black (see *Pixel state* above)


### Draw a Line
Drawing a line is as simple as calling function form [SDK](https://sdk.bigclown.com/group__bc__module__lcd.html#ga9eb9b7c644a7cdec4be4e97fffb6be2a). **Remember that parameters for this function are not absolute coordinates, but a relative distance from top and left edges.**

**Examples**

```c
// draws a line from the bottom left to the top right corner
bc_module_lcd_draw_line(0, 128, 128, 0, true);

// draws a line from the bottom left to the top right corner
bc_module_lcd_draw_line(0, 0, 128, 128, true);

```

## LCD integrated LEDs
LCD includes 6 small RGB LEDs. They usually serve as a notifier for some action that happened. There is no way to use them as a backlight for the LCD panel.

You can control them with standard functions from *bc\_led\_\** from [SDK](https://sdk.bigclown.com/group__bc__led.html) right after you get their driver.

To get the driver you have to use function `const bc_led_driver_t* bc_module_lcd_get_led_driver(void)` which returns pointer to the driver. Then you have to init the virtual LED with `void bc_led_init_virtual(bc_led_t *self, int channel, const bc_led_driver_t *driver, int idle_state)`.

The `channel` parameter is equal to LED color:

- 0 is RED light
- 1 is GREEN light
- 2 is BLUE light

The `idle_state` sets the *default on/off* behavior.

- 0 means that LEDs are default on
- 1 means that LEDs are default off

**Example**

This example prints out some text and line and, which is the most important - lights up LCD LEDs with **blue color** for 1500 milliseconds after any LCD button is pressed.

```c
#include <bcl.h>
#include <bc_led.h>

bc_button_t button;
bc_led_t lcdLed;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_led_pulse(&lcdLed, 1500);

        char hello[6] = "Hello";
        bc_module_lcd_draw_string(10, 5, hello, true);
        bc_module_lcd_draw_line(0, 21, 128, 23, true);

        bc_module_lcd_update();
    }
}

void application_init(void)
{
    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);

    const bc_led_driver_t* driver = bc_module_lcd_get_led_driver();
    bc_led_init_virtual(&lcdLed, 2, driver, 1);

    bc_module_lcd_init();
    bc_module_lcd_set_font(&bc_font_ubuntu_15);
}

```

## LCD Buttons
LCD module gives you two separate buttons you can use for controlling your application. Usage is similar to LED mentioned above: first you need to get a driver and make an initialization of "virtual button". Then you are free to use any *bc\_button\_\** functions from the [SDK](https://sdk.bigclown.com/group__bc__button.html).

To get the button driver you can use `const bc_button_driver_t* bc_module_lcd_get_button_driver(void)` which returns pointer to the driver.

The initialization is achieved by calling `void bc_button_init_virtual(bc_button_t *self, int channel, const bc_button_driver_t *driver, int idle_state)` function.

The `channel` parameter tells which button you want to assign:

- 0 is the left button
- 1 is the right button

**Example**

In this example we are going to switch the LCD integrated LEDs on and off. You can switch then on by pressing the left button and switch them of by pressing the one on the right.

```c
#include <bcl.h>
#include <bc_led.h>
#include <bc_button.h>

bc_button_t button_left;
bc_button_t button_right;
bc_led_t lcdLed;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;

    if (event == BC_BUTTON_EVENT_PRESS && (int) event_param == 0) {
        bc_led_set_mode(&lcdLed, BC_LED_MODE_ON);
    } else if (event == BC_BUTTON_EVENT_PRESS && (int) event_param == 1) {
        bc_led_set_mode(&lcdLed, BC_LED_MODE_OFF);
    }

}

void application_init(void)
{
    const bc_led_driver_t* driver = bc_module_lcd_get_led_driver();
    bc_led_init_virtual(&lcdLed, 2, driver, 1);

    const bc_button_driver_t* lcdButtonDriver =  bc_module_lcd_get_button_driver();
    bc_button_init_virtual(&button_left, 0, lcdButtonDriver, 0);
    bc_button_init_virtual(&button_right, 1, lcdButtonDriver, 0);

    bc_button_set_event_handler(&button_left, button_event_handler, (int*)0);
    bc_button_set_event_handler(&button_right, button_event_handler, (int*)1);

    bc_module_lcd_init();
    bc_module_lcd_set_font(&bc_font_ubuntu_15);
}



```

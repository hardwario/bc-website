---
title: "How to: LCD Module"
---

Our [LCD Module](../../hardware/about-lcd-module/) provides simple way to show needed information without connecting to computer or any network. It is *ultra-low-power device* - its using should not bring you much trouble when powered with batteries. 

It may be a bit hard to get used to draw things or show text at the beginning, but little bit of training (and reading through this article) should help you.
**Note:** Printing dots, writing strings and drawing lines - everything means `draw` in SDK.  


{{< note "info" "As always..." >}}
... all available SDK functions for LCD module can be found [here](http://sdk.bigclown.com/group__bc__module__lcd.html).{{< /note >}}

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

This has a simple purpose - if every change you make would cause an update it would increase the power consumption rapidly. 


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
Drawing a line is as simple as calling function form [SDK](http://sdk.bigclown.com/group__bc__module__lcd.html#ga9eb9b7c644a7cdec4be4e97fffb6be2a). **Remember that parameters for this function are not absolute coordinates, but a relative distance from top and left edges.**

**Examples**

```
// draws a line from the bottom left to the top right corner
bc_module_lcd_draw_line(0, 128, 128, 0, true);

// draws a line from the bottom left to the top right corner
bc_module_lcd_draw_line(0, 0, 128, 128, true);

```
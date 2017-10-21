---
title: "TODO"
---

Controlling LED diode integrated with Core module is like printing *Hello world*. In this tutorial, we will go through available functions for controlling LED diode provided by [SDK](http://sdk.bigclown.com).

## Requirements 
- Core module
- USB cable


## Available functions
Everything you need to control integrated LED can be found within SDK *bc_led* [module](http://sdk.bigclown.com/group__bc__led.html)

Let's see it in action.

## Example
First, an instance of led is needed. You can achieve this by adding this line:
```
bc_led_t led;
```
Now, we can decide between two options how to control the diode. 

1) synchronous way: "*LED ON -> wait -> LED OFF -> REPEAT*". This way is similar to using ```delay()``` functions with Arduino.

2) **asynchronous way** (the right way). BigClown SDK has been built with goal to provide simple-to-use but robust tasking mechanism, which will be completely asynchronous. This is the best way to program your microcontroller, because you are not limited to doing one thing all the time + power consumption can be decreased (because controller sleeps most of the time).


### Asynchronous LED blinking
For this simple task, we do not even have to declare the ```application_task()``` function. More information about where to place your code can be found [here]({{< relref "doc/basics/project-workflow.en.md">}})

1) We need to tell to the SDK, that we are going to use on-board LED
```
bc_led_init(&led, BC_GPIO_LED, false, false);
```




2) Now we use function that will tell the [Scheduler]({{< relref "doc/firmware/timing-and-scheduler.en.md">}}) to plan toggling of LED mode periodically.
```
bc_led_set_mode(&led, BC_LED_MODE_BLINK);
```

Thanks to those simple lines, our microcontroller will toggle led mode periodically and between toggling, it can do whatever you want to do - measuring, sending data, ...

**Complete example** of *application.c* file:
```
#include <application.h>

bc_led_t led;

void application_init(void)
{
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_BLINK);
}
```
*TIP - function ```application_task``` is not used here - it is simply not needed. Scheduler takes care of entire blinking process: it toggles actual LED status, then makes the controller sleep, after defined time wakes it up and repeats entire process.*

### Predefined blinking patterns
Four blinking patterns are available in SDK. Ordered from slowest to fastest.
```
BC_LED_MODE_BLINK_SLOW
BC_LED_MODE_BLINK_SLOW
BC_LED_MODE_BLINK_FAST
BC_LED_MODE_FLASH 
```

### Custom blinking pattern
*--TBD--*

---
title: "Debugging"
---

The debugging of embedded system has been a headache for many insomnia nights of many generations of developers. There are many funny stories about debugging and how to do things right. Here we share some ideas how we have tackled this topic and it is up to you to decide your own approach. This is alway learning the hard way.

> **Note:** Physics tends to show the bad side here in hardware. And remember there is no garbage collector watching your wild dreams spawn hundreds of threads or allocating gigs of RAM. Good luck anyway, citing the flattened battery statement :-)

## Zero approach

Welcome all prodigi programmers be sure that you are not alone in [not using debugger](https://lemire.me/blog/2016/06/21/i-do-not-use-a-debugger/). This is a way of being wholly emerged in the system and thus you do not need a debuger. The debugger is replaced by your own imaginaniton and external manifestations of the system you developing.

With all the respect to computer pioneers and experienced experts, there are situations when some help or tool might come handy.

> *It is said that [Saymour Cray](https://en.wikipedia.org/wiki/Seymour_Cray) was able to program his computer from scratch using just a front pannel in machine code ~ no compiler.*

## Starting simple

The easiest way to debug and also the way how all the things started was just print out what ever you consider important to know. Wait the embedded system does not have any screen or printer connected. Well you are right, but there used to be a serial port. And if it is hopefully free to use and can be connected to real PC then you have your first **poor man's debugger**.

To be able to receive UART data from Core Module you need USB UART and terminal emulator on PC (e.g. [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)) on Microsoft Windows or picocom on Linux)

### Core Module

For example USB UART from SparkFun:

* [FTDI Basic Breakout - 3.3V](https://www.sparkfun.com/products/9873)
* [Jumper Wires](https://www.sparkfun.com/products/11709)

Or another example USB UART from Mouser:

* [FTDI cable TTL-232R-3V3](https://eu.mouser.com/search/ProductDetail.aspx?qs=Xb8IjHhkxj627GFcejHp0Q%3d%3d)
* [Jumper Wires](https://eu.mouser.com/search/ProductDetail.aspx?R=0virtualkey0virtualkeyMIKROE-513)

Connect USB UART and Core Module into one PC's USB host sockets and interconnect Core Module with USB UART by single wire USB UART RX (YELLOW wire on cable) and Core Module TXD2 (header pin 22) - have a look at [Core Module Header drawing]({{< relref "doc/hardware/header-pinout.md#module-drawing" >}}).

{{< note "danger" "Beware of groud loop and ground voltage difference in case you do not use same PC to power Core Module and to connect USB UART." />}}

You need to add just two function calls into your application:

* `bc_log_init` into `application_init`
* `bc_log_debug` or `bc_log_info` or `bc_log_warning` or `bc_log_error` into handlers

Have a look into [BigClown SDK bc_log](https://sdk.bigclown.com/group__bc__log.html).

Example of modified `app/application.c` from default project code after `bcf create`:
```C
#include <application.h>

// LED instance
bc_led_t led;

// Button instance
bc_button_t button;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_led_set_mode(&led, BC_LED_MODE_TOGGLE);
    }
    // Logging in action
    bc_log_info("Button event handler - event: %i", event);
}

void application_init(void)
{
    // Initialize logging
    bc_log_init(BC_LOG_LEVEL_DEBUG, BC_LOG_TIMESTAMP_ABS);

    // Initialize LED
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_ON);

    // Initialize button
    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);
}
```

After flashing of Core Module (`make dfu`) execute terminal emulator, open serial port with USB UART and set communication parameters:

* speed: 115200 b/s
* bits, parity: 8N

Example of output:
```
# 4.54 <I> Button event handler - event: 0
# 4.84 <I> Button event handler - event: 1
# 4.84 <I> Button event handler - event: 2
# 10.24 <I> Button event handler - event: 0
# 12.24 <I> Button event handler - event: 3
# 13.64 <I> Button event handler - event: 1
```

For mapping number to event type have a look into [BigClown SDK documentation for bc_button](https://sdk.bigclown.com/bc__button_8h_source.html#l00013)

### USB Dongle

There is USB UART FTDI chip on USB Dongle (you do not need any additional HW) but there is not button, so we will use slightly modified example with time as messages trigger:
```C
#include <application.h>

void application_init(void)
{
    // Initialize logging
    bc_log_init(BC_LOG_LEVEL_DEBUG, BC_LOG_TIMESTAMP_ABS);
}

void application_task(void)
{
    // Logging in action
    bc_log_info("In application task");
    // Shedule this function to be called 2000 ms later
    // during the 2000 ms the MCU will sleep and conserve power
    bc_scheduler_plan_current_relative(2000);
}
```

Example of output:
```
# 0.50 <I> In application task
# 2.50 <I> In application task
# 4.50 <I> In application task
# 6.50 <I> In application task
# 8.50 <I> In application task
```

## Getting more

Sooner or later when you are in troubles you might come to the idea that you **want to look inside** the CPU check the current values of registers or memory areas. Good news, you are not alone! Bad news, it's not that easy as on x86 Borland Pascal compiler with embedded debugger and profiler. Nevertheless there is a standard for that by IEEE IEEE Standard 1149.1-1990 shortly called [JTAG](https://en.wikipedia.org/wiki/JTAG) after the group that made the standard. This standard is intended for those situations when you need to look inside. It is kind of periscope for your desktop PC into the MCU.
It builds up on the other standard (fast) bus called SPI it adds some requirements for device (or function block inside device) to comply with. But not to overwhelm you with unnecessary details it gives you exactly that key hole view with capability to stop "time(r)" in order to give you a snapshot of the MCU. Last but not least point to mention, that even JTAG has undergone evolution and ARM architecture has adopted the JTAG in "less wires* option named *Single Wire Debug* (aka
[SWD](https://www.pls-mc.com/serial-wire-debug-swd-support/features-a-958.html)) which available in ARM based architectures including ARM Cortex M4 ~ STM32L series of MCUs.

From the developer's point of view you should have working USB adapter that is recognized by your debugger (PC software like OpenOCD/Gdb/DDD or [Segger's Ozone](https://www.segger.com/products/development-tools/ozone-j-link-debugger/)). If I would simplify that even more you can connect any kind of interpret into the debugging abstraction that has capability to map your original C/C++ source code to code and data addresses if the target (MCU) and then on demand read the program counter (PC), stack poiter (SP) and pull the data from target and display them conveniently decoded for your elaboration.

Its is worth to note that the debugger is also capable of setting data watch or instruction interrrupt set at particulat address to let you stop your programm and check registers/variables.

> **Note:** Compared to PC where the debugger tends to be invasive i.e. single byte INT 3 instruction injection.

## Growing beyond

The debugger might not be enough for dynamic or real-time debugging and certification. In such case you might need a tracing capability.
The tracing compared to simple break debugging does not actually stop at the trace point. It rather collects data for later (off-line) analysis and continues in execution. Those traces can also be optional or enabled just for a short period. Well this is because it might add some non-negligible overhead to power, CPU or memory consumption on heavy loaded system. Unfortunately these tools does not come for free and as they are not used that often they come little pricy.

> *For those who have encoutered [instrumentation](https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)) in a PC form like [SystemTap](https://en.wikipedia.org/wiki/SystemTap) on Linux or [DTrace](https://en.wikipedia.org/wiki/DTrace) at Solaris, BSD, Linux, these things might sound familiar*

[1](https://www.youtube.com/watch?v=cDaG1CdP5Ew) - youtube notes on debugging
[2](https://mcuoneclipse.com/2015/04/04/poor-mans-trace-free-of-charge-function-entryexit-trace-with-gnu-tools/) - poor man's debugger and tracer
[3](http://www.lauterbach.com) - The Lauterbach company

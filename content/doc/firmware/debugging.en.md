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

---
date: "2018-07-12"
title: "Hello to Core Module 2"
description: "Evolving the fundamental component and enhancing UX"
image_preview: "/blog/2018-07-12-hello-to-core-module-2/preview.png"
image_main: "/blog/2018-07-12-hello-to-core-module-2/main.png"
author: "pavel_hubner"
---

Hi everyone,

today I am glad to write a post about an incremental upgrade to the **BigClown IoT Kit**, however, a very crucial one for the overall user's experience. I will discuss the new version of the fundamental component in the **BigClown** system - the **{{< shop "Core Module" >}}** version 2. The first version of the **{{< shop "Core Module" >}}** has been with us for more than 2 years already and it has done an incredible job, providing brain and communication to thousands of wireless nodes.

So what's this upgrade about?

First, let me briefly jump back in the history... We released similar product called **{{< shop "Radio Dongle" >}}** to the market in summer 2017. This item had implemented USB to UART chip from FTDI (FT231X) that is connected between the USB connector and the STM32 microcontroller. The purpose of this chip was dead simple - to provide a reliable serial communication on the host system (and without drivers issues). And that worked really well. But there was a problem - the form factor was a pen drive which did not offer any space for buttons. And we needed buttons to put the microcontroller into the bootloader mode as we did it in the **{{< shop "Core Module" >}}** version 1, right? So there was a need to implement RESET and BOOT signal control over the FTDI chip. Controlling these signals is all you need to invoke the MCU's ROM bootloader. It was possible with a bit of help with a few discretes in the circuitry. There are several bootloader communication possibilities - the one used on the **{{< shop "Core Module" >}}** version 1 is called **USB DFU Bootloader**. Another possibility is the **UART Bootloader** - and that is what we have been using in the **{{< shop "Radio Dongle" >}}**.

<div>
<img src="ftdi.png" align="center" style="margin: 0 0 20px 0; width:100%"/>
</div>

After the very first verification, not only we have solved the problem - the absence of the mechanical buttons - but we have also observed increased speed in the firmware programming. It is worh noting that we have also avoided issues with the USB DFU drivers on the Windows platform. Obviously that was a must-have feature we had to bring to the **{{< shop "Core Module" >}}** and unify the programming technique.

So here we go! The primary reason for the **{{< shop "Core Module" >}}** version 2 is the unified programming and communication interface. But it brings **more advantages** than just button-less programming...

Let's talk about the BigClown tools for a while. Around the same time we finished the **{{< shop "Radio Dongle" >}}** development, we decided to create a CLI tool that will simplify the workflow with the BigClown firmware in general. The [**BigClown Firmware Tool**](https://developers.bigclown.com/tools/bigclown-firmware-flashing-tool) (**bcf**) was born. It is a simple Python application distributed through PyPI and available to all platforms (it takes one command to set it up on your machine). This tool works like a package manager for the pre-compiled binaries available nt our GitHub, but also allows you to program custom firmware, search in firmware repository, list available serial devices and much more.

But there is one feature many people are not yet aware of and that is the **logging facility**. Thanks to the fact we have all the time available serial port, we can use it in a comfortable way for reading logs from firmware. We have support for this in the [**bc_log API**](https://sdk.bigclown.com/group__bc__log.html) and in the [**BigClown Firmware Tool**](https://developers.bigclown.com/tools/bigclown-firmware-flashing-tool). You can hook to your firmware log with the simple **bcf log --device &lt;DEVICE&gt;** command. But you can also chain commands together, e.g. **bcf flash --device &lt;DEVICE&gt; &lt;FIRMWARE&gt; --log**, which will flash the device and immediately connect it to your logging console after releaseing the device from reset. The logging API has support for four log levels (DEBUG, INFO, WARNING, ERROR) and each log level has its appropriate color. Also, there is an option to switch the colors off, or record it to a file (see the **bcf log --help** for more details). Besides the log level information, you also know the timestamp of the logged event. This you can configure from your firmware whethere it should be in the absolute format (number of milliseconds from the reset), or in the relative format (number of milliseconds from the last logged event). This greatly enhances firmware debugging!

Here you can see output from the [**bc_log example code**](https://github.com/bigclownlabs/bcf-sdk/blob/master/_examples/bc-log/application.c) from SDK

        bc_log_init(BC_LOG_LEVEL_DEBUG, BC_LOG_TIMESTAMP_ABS);
        bc_log_debug("Debug output using %s", "bc_log_debug()");
        bc_log_info("Info output using bc_log_info()");
        bc_log_warning("Warning output using bc_log_warning()");
        bc_log_error("Error output using bc_log_error()");

<div>
<img src="bc_log.png" align="center" style="margin: 0 0 20px 0; width:100%"/>
</div>

There are more enhancements than that. There is just one push button (for application purposes) that is more easily accessible right above the Micro USB connector. Also we have center-aligned the red LED, debug connector and the push button. The PCB layout is now using 6 layers (instead of 4) and better ground plane design has slightly improved the radio communication range.

The good news is that the **{{< shop "Core Module" >}}** version 2 is fully compatible with the version 1 and we are in no way abandoning support for the old good friend. On the other hand, our aim is to make the user's experience as much seamless as possible and therefore we are updating the documentation with the main focus on the new version of the **{{< shop "Core Module" >}}**. However, we have a dedicated page comparing
[**Core Module 1 and Core Module 2 differences**](https://developers.bigclown.com/hardware/core-module-r1-and-r2-comparison) altogether with the instructions how to work with the USB DFU mode on the old one.

Despite increased component cost on the new version, the **price remains the same** as for the old version.

That's it for the moment and stay tuned!

Cheers, Pavel

## References

* [**Core Module in E-shop**](https://shop.bigclown.com/core-module/)
* [**Core Module Differences**](https://www.bigclown.com/doc/hardware/core-module-1-and-2-comparison/)
* [**BigClown Firmware Tool**](https://www.bigclown.com/doc/tools/bcf/)
* [**BigClown Firmware SDK**](http://sdk.bigclown.com/group__bc__log.html)
* [**FTDI FT321X**](http://www.ftdichip.com/Products/ICs/FT231X.html)

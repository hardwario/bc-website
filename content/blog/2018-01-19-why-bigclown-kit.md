---
date: "2018-01-19"
title: "Why BigClown Kit"
description: "Why Did We Create BigClown?"
images:
    preview: "preview.jpg"
    main: "main.jpg"
author:
    name: "Michal Mühlpachr"
    post: "System Architect"
    email: "michal.muhlpachr@hardwario.com"
    image: "michal.jpg"
---

Reading some discussions under the articles about the BigClown IoT Kit inspired me to write about reasons why we started and keep developing the BigClown IoT Kit. I would like to use this article for future references  to avoid repeating myself. Just as many others - this contribution is driven by a laziness ;-)

## Build Electronics, Start Smoothly

People who want to build their own electronic devices discover that they have to "invest" dozens or hundreds of hours of their time to start and build a  useful device. Our mission is to lower this starting barrier and allow them to make a ready-to-use home automation electronics in less a few hours even for newcomers.

There are plenty of [STEM](https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics) kits focused on education but they usually do not allow to make the final device easily (e.g. they do not have a suitable enclosure, they do not feature wireless communication or they are not powered from batteries). The primary focus of BigClown  is to make such things easily, have fun, and - if you like - educate yourself.

Try to find 5 differences - just Google how an [Arduino PIR motion detector](https://www.google.com/search?q=Arduino+PIR&tbm=isch) looks like and compare it with the one made using [BigClown PIR Kit](https://www.google.com/search?q=BigClown+PIR&tbm=isch).

That's right, BigClown PIR motion detector does not have any wires and no soldering is required - we have pluggable modules:

{{< youtube "ophRx1tAmfA" >}}

You do not need to write the code or copy/paste the examples and compile the firmware. We maintain the pre-prepared firmware images who can be programmed to BigClown products directly from GitHub repositories using the BigClown Firmware Tool.

For quick start at client/user interface side we provide either various local (offline) integrations as well as those connected to cloud solutions - just look into the [BigClown documentation](https://www.bigclown.com/doc/).

We also want to allow the maker to dig as deep as he/she wants to and discover how the hardware and software works under the hood. That's why BigClown hardware and software is open, coming with documentation, tutorials and personal support (and you bet we are really good at this).

## Best Kit for Our Own Stuff

The second motivation comes from our need to have a "perfect" kit for our own home automation projects.

I am very much biased by collecting and exploring various development boards, kits, hot new parts, etc.. I have a pretty large collection (just a small fraction of it is on photo below), but I always miss some property in every single kit.

    {{% img src="desk.jpg" width="1024" %}}

The selection of following properties are based on the "experience" with the other kits. To be more specific, these are the features that are not available "together" (till BigClown ;-):

* Extensibility - MQTT publish/subscribe message bus.

* Low-power hardware design to allow years of operation from batteries.

* Event-based firmware API SDK with prevention of dynamic memory allocation during operation (less prone to operation errors).

* Smart power management in the firmware SDK.

* Security included out-of-the-box.

## Answers for Frequently Asked Questions

### Why another electronics kit?

There is not any other kit with all the above defined properties AFAIK.

### Why BigClown hardware is not as cheap as clones?

* We are focused for hardware long life and low 10 years [TCO](https://en.wikipedia.org/wiki/Total_cost_of_ownership) - including total batteries used, minimized operation troubleshooting and low hardware fix/replace/renew rate.

* BigClown products are not optimized for low initial hardware purchase price that leads to hardware instability and malfunctions (especially when they are operated outside the work desk) caused by scrap components, cloned chips, low quality designs with obvious flaws, failures to comply with the chip maker recommendations, etc.

* We do provide individual technical support. 

* We do provide 3 years of warranty on the hardware.

* BigClown products are made from genuine industrial-grade components.

* BigClown products are manufactured in the EU.

* We invest almost everything to [R&D](https://en.wikipedia.org/wiki/Research_and_development) - new features and products are coming on regular basis.

* We maintain documentation, tools, pre-built firmware images, GitHub repositories, etc.

### Why BigClown hardware is not as cheap as single-purpose products?

* Have a look at reasons for previous question.

* Quality has higher priority than quantity for us.

* BigClown is not manufactured in million series yet.

* BigClown uses top low-power sensors and prevents communication technology with high power consumption (e.g. WiFi)

* BigClown is transparent (open sourced, documented) - you can get to know and learn.

* BigClown is modular (e.g. by swapping top module you can change from PIR motion sensor to climate monitor) and extensible - both hardware and software. You are free to modify, add features, use in unintended ways.

### Why BigClown is not Arduino compatible?

* Arduino is great for many purposes and have the biggest maker community, but have some issues also:

* Wireless communication is not natural part of Arduino ecosystem (HW, firmware, IDE, integrations).

* Low-power design is hard on Arduino platform (both HW and SW perspective).

* Arduino lacks the event API.

* Arduino lacks the security.

* Arduino lacks the pre-built firmware images and their management

* Arduino UNO has a lack of MCU resources (flash and RAM, [TRNG](https://en.wikipedia.org/wiki/Hardware_random_number_generator), [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) hw acceleration).

* The Size of the [standardized BigClown Module format](https://cdn.myshoptet.com/usr/shop.bigclown.com/user/shop/big/117-1.png?5a1af104) is defined by 2 AAA batteries.

* Arduino suffers from schizophrenia of 5V / 3.3V power.

* Many Arduino products are not suitable to be used in industry environment or do not even guarantee the temperature span (e.g. for a low temperature operation).

### Why WiFi is not used for wireless communication?

Low-power 868 MHz radio allows BigClown better signal penetration through the walls and 2 years of battery life from 2 AAA Alkaline cells. With WiFi and the same communication requirements the battery operation life would shrink to a month or less.

### Why some network standard is not used for wireless communication?

There is not open, secure (authentication & encryption, automatic encyption key update), license fees free and simple (no mesh/routing, no IPv6, no >100 pages protocol specification) communication protocol standard available AFAIK. BigClown use [hub and spoke](https://en.wikipedia.org/wiki/Spoke%E2%80%93hub_distribution_paradigm) network topology.

### How BigClown hardware can be extended?

There are several levels for extensions, you can:

* Connect simple sensors and actuators through the connector on Sensor Module. Use a breadboard or wires and I/O brought to the [HEADER](https://www.bigclown.com/doc/hardware/headers-and-signals/#module-drawing-standard) with GPIO, I2C, UART, SPI, PWM, ADC, DAC etc ([Beadboard Module](https://www.bigclown.com/doc/hardware/about-breadboard-module/) may help you).

* Design your own Module - just use the Module size and HEADER signals on your PCB.

* Design your own product using [Cloony](https://www.bigclown.com/doc/hardware/about-cloony/).

Or you can discover other ways unintended by us, we will be really excited! There are not any obstacles in hardware and software licenses.

### How can I extend integration or add software features ?

On firmware level you can implement your application or features in ANSI C with help of BigClown SDK (have a look at [SDK examples](https://github.com/bigclownlabs/bcf-sdk/tree/master/_examples)) and pre-prepared [BigClown Toolchain](https://www.bigclown.com/doc/tutorials/toolchain-guide/).

On PC/Server/Cloud interoperability have several levels:

* For minimum software/services dependency use BigClown Gateway text protocol (topic, JSON message pairs) over USB CDC (UART) to receive states, measurements and send actuator state updates.

* For generic integration use MQTT publish/subscribe API. Use your favourite language and communicate with BigClown components through the MQTT client API. We do provide examples in Python and JavaScript.

* [Node-RED](https://nodered.org/) orchestration. Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.

* For the cloud services API/UI use one of our cloud services integration and implement your application/feature in selected cloud service. Or implement another cloud service integration yourself.

### Why the substance who keeps you in the sprint is not in the shop?

Self motivation based on above mentioned targets provide us passion. Try it yourself and contribute! Some ingredients are available. You can start with shared projects, feedback, continue with issues reporting and get the most of endorphins from documentation, software, hardware contributions.

### I would do it in 2 weeks (or 2 months) why I would use BigClown Kit?

We love to see all the new open-source kits with similar features. We will be happy to learn from other designs also. Go on - share your solution with the world, please! Maybe you can even join our team. We did it in 2 years of hard work, we are 12+ people team now and we are committed to&nbsp;continue to develop the BigClown IoT Kit. You can use effort already invested by us and future enhancements from community or us to save your time and resources.
 
### Platforms Comparison

|  | [Arduino Uno R3](https://store.arduino.cc/arduino-uno-rev3) | [BigClown Core Module](https://shop.bigclown.com/core-module/) | [WEMOS D1 mini Lite](https://www.aliexpress.com/store/product/WEMOS-D1-mini-Lite-V1-0-0-WIFI-Internet-of-Things-development-board-based-ESP8285-1MB/1331105_32795857574.html) | [Raspberry Pi 3 + MicroSD](http://cpc.farnell.com/mksp2-raspberry-pi3) |
|--------------------|----------------|----------------------|--------------------|--------------------------|
| Price in USD       | [US $25](https://www.sparkfun.com/products/11021) | [US $28](https://shop.bigclown.com/modules/core-module/?currency=USD) | [US $3](https://www.aliexpress.com/store/product/WEMOS-D1-mini-Lite-V1-0-0-WIFI-Internet-of-Things-development-board-based-ESP8285-1MB/1331105_32795857574.html) | [US $35 + $16](http://www.newark.com/buy-raspberry-pi) |
| Warranty | 1 year | **3 years** | 2 months | 1 year |
| Operating temperature | Not specified | -20 to +70 °C | Not specified | Not specified |
| CPU architecture | 8-bit AVR<br>Microchip | 32-bit ARM<br>Cortex-M0+ | 32-bit<br>Tensilica L106 | 64-bit ARM<br>Cortex-A53 (4x) |
| CPU/SOC part number | ATmega328P | STM32L083CZ | ESP8285<br>(ESP8266 based) | BCM2837 |
| CPU clock | 16 MHz | 32 MHz | 80 MHz | 1.2 GHz |
| RTC crystal and unit | No | Yes | No | No |
| Flash memory size | 32 kB | 192 kB | 1 MB | 16 GB (MicroSD card) |
| RAM memory size | 2 kB | 20 kB | 96 kB | 1 GB |
| Idle power consumption | 10 mW | 0.05 mW | 100 mW | 1 000 mW |
| Battery life \*0) | 5 days \*7) | **2 years** | 12 hours | 1 hour |
| USB host/device | Yes, device | Yes, device | Yes, device | Yes, 4x host |
| Ethernet interface | No | No | No | Yes |
| Wireless communication | No | Yes \*1)<br>(868 / 915 MHz) | Yes<br>(WiFi 2.4 GHz) | Yes<br>(WiFi 2.4 GHz + Bluetooth) |
| Communication range | N/A | 500 m | 50 m | 50 m |
| Radio certification | N/A | Yes | No | Yes |
| Security chip | No | Yes | No | No |
| Communication security | N/A | Yes \*2),<br>proprietary | Reduced TLS and TCP/IP | Yes *3) |
| Temperature sensor | No | Yes | No | Yes (only for CPU) |
| 3-axis accelerometer | No | Yes | No | No |
| Programming | Synchronous | Event-driven \*4) | Synchronous / Event-driven | Synchronous / Event-driven |
| Scripting support | No | No | Yes | Yes |
| Real-time processing | Yes | Yes | No | No \*6) |
| ROM bootloader | No (bootloader in flash) | Yes | Yes | N/A |
| Debug connector | No | Yes (SWD standard) | No | No |
| Multiple power sources | No (rail collision possible) | Yes (*5) | No | No (USB power only) |
| Hardware extensions | Yes (shields) | Yes (modules + tags) | Yes (mini shields) | Yes (hats) |
| Extensions need soldering | No | No | Yes | No |
| Mounting holes | Yes, irregular | Yes, symmetrical | No | Yes, symmetrical |
| Number of GPIO channels | 14 | 18 | 10 | 27 |
| Number of UART channels | 1 | 3 | 1 | 1 |
| Number of I²C channels | 1 | 2 | 1 | 2 |
| Number of SPI channels | 1 | 1 | - | 1 |
| Number of ADC channels | 6 | 6 | 1 | - |
| Number of DAC channels | - | 2 | - | - |
| Support from vendor | No | Yes | No | No |
| Dimensions | 53 x 69 mm | 33 x 55 mm | 26 x 34 mm | 56 x 85 mm |

| Notes: |
| -------|
| \*0) All benchmarks have been performed with a four AAA size Alkaline batteries 1.5V connected in series, powering the devices through a buck regulator |
| \*1) Lower radio frequency provides longer communication range, consumes less power and enhances link reliability |
| \*2) Encrypted communication with message authentication; datagrams optimized for low-power operation |
| \*3) Linux environment with full stack TLS and TCP/IP implementation; stateful packet firewall |
| \*4) SDK with full API documentation; optimized for low-power operation |
| \*5) Implemented special circuit for intelligent power switching; battery source is never discharged when the power supply from mains is connected |
| \*6) Real Time Linux kernel patch is available |
| \*7) Tutorials how to run ATmega328P in low-power mode with Arduino software platform are available, but default configuration has been considered |

<br>Do not hesitate to comment at https://forum.bigclown.com/ or feel free to send us an email, please.


















 










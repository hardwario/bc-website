---
title: "Resources"
---

The hard part of learning is to get to know the things. Fortunately you can rely on work done for you by Big Clowns but still there is a little bit to add and read when you want to dive deeper and
understand more.

## Hardware

SPIRIT1
: [ST-Micro SPIRIT1](http://www.st.com/en/wireless-connectivity/spirit1.html) sub GHz radio used for interconnecting **core modules** wirelessly, operating on 868MHz frequency which is free to use under general license in EU. Similarly 915MHz in the US.


Core module
: the heart of the core module, ST-Micro [STM32L082CZ](http://www.st.com/en/microcontrollers/stm32l083cz.html) low power ARM Cortex-M4 CPU with embedded flash memory.

OpenOCD
: [Open On-Chip Debugging](http://openocd.org/) open-source project aiming to unify the way various software acceses he debugging interfaces of the chip and chipsets.

SWD/JTAG
: Single Wire Debug and attempt to make debugging simple on small MCU reducing the original JTAG approach in tandem with reducing the number of wires needed (down to 9-wire cable but absolute minimum is 4-wires).

DFU
: Device Firmware Upgrade - an USB function that let end-user upgrade the firmware in the USB connected device by standard way.

I2C
: Inter Integrated Circuit bus proposed by Philips Semiconductors (later renamed to NXP) for, as the name suggests, communication among various chips. Usually there is one master, the CPU/MCU, and peripherals that can exchange information. Basic example is reading value from a sensor, or tranceiving information to different bus like UART or 1-Wire.

868MHz
: A frequency used in EU for short and long range networks. Also used as communication aid in **core module**, where SPIRIT1 by ST-Micro is used.

SigFox
: A name for Low Power Wide Area Network (LPWAN) which has simple GFSK modulation and uses various "free" frequencies (868 MHz/EU, 915MHz/US, .../JP). This network has a global coverage and single subscription world-wide. Has a limit for 140 messeges of 12 bytes per day per device upstream and 4 messages of xx bytes per day and device downstream.

CO2 sensor
: A sensor for measuring the amount of CO2 in air. This Gas is responsible for human air quality perception and ability to react. Also has significant influence on feeling tires (need cite source...)

BMP820
: Bosh pressure sensor, also used in the car industry for tires pressure wirelessly transmited to the car computer.

## Software

GCC Toolchain
: GNU C compiler and relatedtools: preprocessor(cpp), compiler for **C** (gcc) and **C++** (g++), Assembler (gas), Linker (ld), Archive/Library manager (ar), Object manager (obj), ... 

Python
: A scripting language made by Guido van Rossum, it has become the scripting language of 21st century (similarly as Ruby, JS and some others). Large number of ready made libraries (eggs). Providing project separation by its **virtualenv**. Used as a glue language for many other tools. Running usually as an bytecode interpretter (VM) but also has a binary versions. And worth to mention that a Jython exists for those that felt in love with JVM (Java virtual machine) and wants to unite them all.

Eclipse
: Originaly IBM java development environment (IDE) that has exploded into omnipresent little heavy weight piece of software (built upon OSGi - dependency class loader and maintainer). This IDE is often used when cross platform tool is requires (runs in JVM on Lin/Win/Mac). Has connectivity to debugger and can handle OpenOCD or other debug interfaces (Segger J-Link).

Atom
: A new generation editor, or editor of 21st century. Built upon two internet projects melted in one. The first component is Google V8 javascript engine embedded inside Chrome and Node.js for backend serving. Both running in one application. The Atom has given a birth to the Electron project which provides similar capabilities: HTML+JavaScript for desktop application, for your own app (again running Win/Lin/Mac). Heavily inspired by Sublime.

Microsoft Visual Studio Code
: An opensource project from Microsoft utilizing Atom IDE and packing it into more developer utility form. Thus offering among others javascript, PHP, C, C++, Rust and other languages, packed together with debugging capabilities, source code highlighting, editor goodies.

Docker
: Virtualization and isolation tool. Today's buzzword that brought a simple way to properly test, isolate testing and separate various versions of particular software. The Docker is PC world or Server world thing that helps us to remain sane when flipping back and forth with mix of software that might not always work together.

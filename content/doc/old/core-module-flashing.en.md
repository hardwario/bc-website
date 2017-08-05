

# Firmware Programming


<!-- toc -->

Firmware of Core Module is a program stored in an internal flash memory of the microcontroller.
In this chapter we will call *programming* a process of writing firmware into this internal flash memory.

There are several options how Core Module can be programmed:

* Using USB cable and integrated bootloader
* Using Serial-Wire-Debug (SWD) interface

These interfaces are further explained in the chapters below.


## Using USB cable and integrated bootloader


Bootloader is a small program delivered by STMicroelectronics during microcontroller production.
This program is stored in read-only memory (ROM) and always co-exists next to the application firmware.
The most important feature of the bootloader is the internal flash memory programming.

The bootloader is started after the microcontroller's reset when the BOOT signal is in log. 1.
The reason why Core Module has both RESET signal and BOOT signal connected to push buttons, is to allow the user to enter this bootloader program manually.
It can be also done programatically because both of these signals are connected to pin header as well.

There are several communication interfaces that can be used to talk to the bootloader:

* USART1 & USART2 (serial port)

* USB using a DFU class (Device Firmware Upgrade)

We will describe the later one in the chapter below.


## Programming using USB DFU Bootloader


Invoking USB DFU bootloader can be done in just a few simple steps:

1. Make sure the **USB cable** is connected to your desktop (host).

2. Press the **BOOT button** on Core Module and keep it pressed.

   BOOT button is on the right side and is marked with letter "B".

3. Press the **RESET button** on Core Module while BOOT button is still held.

   BOOT button is on the left side and is marked with letter "R".

4. Release the **RESET button**.

5. Release the **BOOT button**.

At this moment Core Module should enumerate to host as USB DFU-capable device.

This procedure can be done very quickly after some practicing.

In the chapters below we will show you how to program the firmware on individual host platforms.


### On Windows 10 64-bit Desktop


1. Open Command Prompt (command `cmd`).

2. Change directory (command `cd`) to folder with `firmware.bin` file.

3. Download and execute [Zadig 2.2](http://zadig.akeo.ie/downloads/zadig_2.2.exe).

   1. Select "Options" -> "List All Devices".

   2. Select "STM32 BOOTLOADER" device.

   3. Select "WinUSB" driver for installation.

   4. Click "Reinstall Driver" button.

4. Download [dfu-util-0.9-win64.zip](http://dfu-util.sourceforge.net/releases/dfu-util-0.9-win64.zip).

5. Extract (unzip) `dfu-util-static.exe` into directory with firmware.

6. Program the firmware to Core Module by the following command:

    dfu-util-static -s 0x08000000 -d 0483:df11 -a 0 -D firmware.bin

. Press the RESET button to start the program.

> Core Module must be in bootloader DFU mode prior executing last command.
> For more information, please refer to [Programming using USB DFU bootloader](#programming-using-usb-dfu-bootloader).


### On macOS Desktop


1. Open Terminal application.

2. Change directory (command `cd`) to folder with `firmware.bin` file.

3. Make sure [Homebrew](http://brew.sh) is installed in the system.

4. Install `dfu-util` package by the following command:

   `brew install dfu-util`

5. Program the firmware to Core Module by the following command:

   `dfu-util -s 0x08000000 -d 0483:df11 -a 0 -D firmware.bin`

6. Press the RESET button to start the program.

> Core Module must be in bootloader DFU mode prior executing last command.
> For more information, please refer to [Programming using USB DFU bootloader](#programming-using-usb-dfu-bootloader).


### On Ubuntu Desktop


1. Open Terminal application.

2. Change directory (command `cd`) to folder with `firmware.bin` file.

3. Install `dfu-util` package by the following command:

   `sudo apt install dfu-util`

4. Program the firmware to Core Module by the following command:

   `dfu-util -s 0x08000000 -d 0483:df11 -a 0 -D firmware.bin`

5. Press the RESET button to start the program.

> Core Module must be in bootloader DFU mode prior executing last command.
> For more information, please refer to this [Programming using USB DFU bootloader](#programming-using-usb-dfu-bootloader)


## Using Serial-Wire-Debug Interface


This interface allows not only programming but also program debugging.

A special hardware tool is needed if you want to go this way - a debugger.
BigClown recommends J-Link from Segger but other tools will work as well.

The debugger is connected via a 10-pin connector on Core Module.

> Please, pay attention to a proper debug cable orientation.

TODO: Insert the picture of Core Module with debug cable connected.


# Firmware Files

It is possible to build your own firmware.
But not until we release the source codes on our [GitHub account](https://github.com/bigclownlabs).
We still want to polish a few things to provide you with a proper start.

So far you can download two binary files for [Smart LED Strip (Workroom) project](smart-led-strip.md):

* [Base unit a Remote unit](https://github.com/bigclownlabs/bcp-wireless-circus/releases/latest)


## Smart LED Strip (Workroom) Remote Firmware Features

* Automatic sending of temperature and humidity every 30 seconds

* Sends message when button pressed

* Sends message when pin P8 is grounded or released


# Development Setup


Please, click [here](core-module-setup.md) for more details about development setup.

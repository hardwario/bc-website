---
title: USB Interface
---

The Core Module or USB Dongle is connected via USB interface. There is a virtual serial port used. There are some slight differences in implementation but messages and commands conveyed are the same.

> **Note:** The core module also uses Device Firmware Upload (aka DFU) usb function for firmware loading, this is solely for the purpose of firmware flashing thus not detailed here (ref [Firmware Upload](../../tutorials/firmware-upload/))

## Core Module

The Core module has an USB interface directly connected to the application MCU `STM32L083CZ`. Thanks that fact we can change how would be the device recognized by PC. We are using virtual serial line aka [USB CDC](https://en.wikipedia.org/wiki/USB_communications_device_class) - communication device class. For windows you have to install the driver manually or as a part of **Windows IDE** or **BigClown Toolchain**. Other platforms recognizes it automatically.

> on **Linux** by default as /dev/ttyAMAx where x is index - you can of course change the device name by udev rules and on MacOSX it pops up as /dev/tty.usbserial-DNxxxxx**

In order to set the MCU into flashing mode you have to do the button magic. More is described in Firmware Upload](../../tutorials/firmware-upload/) section but in short:

1. press and hold `B` button
2. press and release `R` button
3. release `B` button

After that sequence the ```dfu-tool -l``` or ```bcf devices``` should show your device.

> **Note:** if you have more devices be careful when selecting which device you wanna flash.

If you are using the ```bcf``` utility do not forget ```--dfu``` paramater to switch to **DFU** way of flashing. This switches on the fall back to use dfu-utils behind the scene.

## USB Dongle

The USB Dongle is actually and alternative version of core module which has additional FTDI FT231X chip that brings some benefits like **no button magic**. The switchover to flashing mode is done using `DTR` a `RTS` ~ remember the old school [UART/RS232](http://wilbo666.pbworks.com/w/page/49320712/RS232). This is similar to Arduino or ESP8266/32 approach. 

> **Note:** There are even Over the Air flashers using cheap Bletooth serial adapters [RN42](https://blogs.gnome.org/desrt/2012/04/29/arduino-remote-programming-with-the-bluetooth-mate-rn-42/) or HC-05 and so, but many of those bluetooth serial does not have `DTR` and `RTS` signals available on pins of the breakout boards.

The second chip approach has also one another benefit that when the CPU is reset then the USB connection is not cut (because or USB descriptor reset). Therefore you do not have to think about how ensure wait and restart of the bridge software and how to handle missing serial device for a while.

[FT231X](http://madeintheusb.blogspot.cz/2016/02/ft232-versus-ft231.html) the chip providing the USB to serial conversion for USB dongle and soon also for the Core module 2

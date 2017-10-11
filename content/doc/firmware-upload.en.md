---
title: Firmware upload
slug: firmware-upload
---

There are several ways to upload firmware to {{<shop} Core Module ">}}. Let's start with the simple and later on we will extend the description. The options vary according to the version {{<shop "Core Module">}}, or if it is SoM Cloony {{<shop "Cloony">}}.

## Python utility `bcf`

The BigClown Firmware utility automatically downloads list of ready-made firmwares from Git Hub all projects and offers an easy way to upload it to your device.

### Instalation

If you are using the BigClown Raspbian image for Raspberry Pi, the utility should be already installed. Otherwise, install the utility using:

```bash
pip install bcf
```

{{% note "info" %}}Systems with both python v2 and v3, you might need `pip3` instead of the plain `pip` (the 3 denotes pip belonging to python3). Eventually you might use `python -mpip install bcf`{{% /note %}}

Utility `bcf` displays shor help when you do not provide any parameters:

```bash
$ bcf
usage: bcf [-h] [-v] COMMAND ...
bcf: error: too few arguments
```

If you want more extensive help use `--help` parameter.

```bash
# bcf version should be printed also in help screen
$ bcf -h
usage: bcf [-h] [-v] COMMAND ...

BigClown Firmware Flasher

positional arguments:
  COMMAND
    update       update list of available firmwares
    list         list firmwares
    flash        flash firmware
    devices      show devices
    search       search in firmwares names and descriptions
    pull         pull firmware to cache
    clean        clean cache
    create       create new firmware
    clone        download firmware to file
    help         show help

optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```

### Update of firmwares

Before you start flashing firwares it is necessary to initialize or update the list of available firmware images:

```bash
# done like this
bcf update
```

{{% note "info" %}}In case you would be using DFU mode of the flashing it is necessary to first switch to super user. Thus every `bcf` command shall be prefixed by `sudo -H ...`, including the `bcf update` which then becomes `sudo -H bcf update`. Please note that the `-H` is needed in order to avoid cluttering the home of non-privileged user with directories readable only by super user.{{% /note %}}

The result of the update might look like this:

```bash
> bcf update
update data for repo bigclownlabs/bcf-car-proximity-sensor
update data for repo bigclownlabs/bcf-color-kid-game
update data for repo bigclownlabs/bcf-generic-node
update data for repo bigclownlabs/bcf-usb-gateway
update data for repo bigclownlabs/bcf-reloading-robot-node
update data for repo bigclownlabs/bcf-scissor-lift-node
...
```

### List available firmwares

At any moment you can list all available firmwares:

> **Note:** To-Do list local and remote, fail-save download 

```bash
> bcf list
bigclownlabs/bcf-climate-station:firmware-144pixel.bin:v1.0.1
bigclownlabs/bcf-generic-node:firmware-battery-mini.bin:v1.3.0
bigclownlabs/bcf-generic-node:firmware-battery.bin:v1.3.0
bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin:v1.3.0
bigclownlabs/bcf-skeleton-core-module:firmware.bin:v1.0.0
bigclownlabs/bcf-usb-dongle:firmware.bin:v0.0.0-test
bigclownlabs/bcf-usb-gateway:firmware.bin:v1.3.0
...
```

### Flashing the device

When you have readily available firmware image you can start flashing the devices ({{<shop} Core Module ">}}).

**TODO** Jak přehledně vysvětlit kdy je potřeba použít DFU, kdy FTDI UART flash?? Jak do toho zakomponovat core module s nativním usb, core module s FTDI a cloony s externím převodníkem?

## dfu-util

This is the utilitty

## Debugger with flashing capabilities

By nature there is also an alternative way to load a firmware either into RAM of FLASH of the target device. This principle benefits from the fact that the JTAG (SWD) does support code loading into target device. It can be loaded transiently (into RAM) or persistently (into FLASH memory). There are two options that we can utilize.

? OpenOCD ?

### Ozone

> **ToDo:** move away from here...

The J-Link (JTAG/SWD) debugging utility for SEGGER hardware.
[OZone Debugger](https://www.segger.com/products/development-tools/ozone-j-link-debugger/)

### GDB

> **ToDo:** move away from here...

Use of DDD or Eclipse or ... Atom as a debugger (?che/c9/platform.io)

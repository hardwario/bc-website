---
title: "BigClown firmware flashing tool"
---

This multi-platform Python tool can flash {{<shop "USB Dongle">}} and {{<shop "Core Module">}} with local binary or latest released firmwares from GitHub.

The installation and usage instructions are in the [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}), [**Quick Tutorial**]({{< relref "doc/basics/quick-tutorial.md" >}}) and **Projects** section.


```
hub@hpnix:~$ bcf --help
usage: bcf [-h] [-v] COMMAND ...

BigClown Firmware Tool

positional arguments:
  COMMAND
    update       update list of available firmware
    list         list firmware
    flash        flash firmware
    devices      show devices
    search       search in firmware names and descriptions
    pull         pull firmware to cache
    clean        clean cache
    create       create new firmware
    read         download firmware to file
    log          show log
    reset        reset core module, not work for r1.3
    help         show help

optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit

```

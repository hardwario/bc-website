---
title: Toolchain Guide
---

{{% note "danger" %}}This document assumes that you have necessary tools installed according to the document [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.en.md" >}}).{{% /note %}}

{{% note "warning" %}}All of the steps below assume work with **BigClown Toolchain** in Windows or with the **Terminal** application in macOS or Ubuntu.{{% /note %}}

## Program BigClown Firmware Tool

The program BigClown Firmware Tool (**bcf**) simplifies the firmware workflow.

This tool allows to:

* Manipulate with firmware packages:

    * Update package database (`bcf update`)

    * Listing from package database (`bcf list`)

    * Search in package database (`bcf search`)

    * Download package for offline use (`bcf pull`)

* Upload firmware (`bcf flash`)

* Create empty project for firmware development (`bcf create`)

We will show the individual operations in the following chapters.

{{% note "info" %}}BigClown projects offer pre-compiled firmware binary images in the section **Releases** of the given GitHub repository.{{% /note %}}

The **bcf** tool has a built-in help system. You can see the basic list of commands by using `bcf help`:

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
        help         show help

    optional arguments:
      -h, --help     show this help message and exit
      -v, --version  show program's version number and exit

Detailed usage of a given command using e.g. `bcf help flash`:

    usage: bcf flash
           bcf flash <firmware>
           bcf flash <file>
           bcf flash <url>

    optional arguments:
      -h, --help            show this help message and exit
      --device {/dev/ttyUSB0}
                            device
      --dfu                 use dfu mode

## Firmware Package Listing

Use this command to update the list of available firmware packages:

    bcf update

{{% note "warning" %}}Always use this command before listing the available packages.{{% /note %}}

Use this command to list the available firmware packages:

    bcf list

Example output:

    ...
    bigclownlabs/bcf-ping-pong-table:firmware.bin:v1.0.0
    bigclownlabs/bcf-sigfox-button:bcf-sigfox-button-v1.0.0.bin:v1.0.0
    bigclownlabs/bcf-sigfox-climate-monitor:firmware.bin:v1.0.1
    bigclownlabs/bcf-sigfox-co2-monitor:firmware.bin:v1.0.0
    bigclownlabs/bcf-sigfox-motion-detector:firmware.bin:v1.0.1
    bigclownlabs/bcf-sigfox-pulse-counter:firmware.bin:v1.1.0
    ...

Use this command to list all the versions of the available firmware packages:

    bcf list --all

Use this command to search in the available packages (in their title and description):

    bcf search <searched term>

## Firmware Upload

{{% note "warning" %}}In case you need to upload the firmware into the Core Module, you must first [**put it in the DFU mode**]({{< relref "#switching-core-module-into-dfu-mode" >}}). Moreover, the flash command must be in the `bcf flash --dfu` format.{{% /note %}}

Firmware upload can be done using the `bcf flash` command. The firmware can be obtained from 3 different sources:

1. Source **firmware package**, for instance:

        bcf flash bigclownlabs/bcf-sigfox-co2-monitor:latest

2. Source **local disk file**, for instance:

        bcf flash firmware.bin

3. Source **file from the specified URL**, for instance:

        bcf flash https://github.com/bigclownlabs/bcf-sigfox-co2-monitor/releases/download/v1.0.0/firmware.bin

In case you have multiple devices connected to your host, you can list the with the command:

    bcf devices

...and then use the device from the list altogether with the `--device` parameter, e.g.:

    bcf flash --device /dev/ttyUSB0 bigclownlabs/bcf-sigfox-co2-monitor:latest

If you need to download the firmware package and work with it later offline, you can download it using the command `bcf pull`, for instance:

    bcf pull bigclownlabs/bcf-sigfox-co2-monitor:latest

If you want to purge the cache of the downloaded packages, use this command:

    bcf clean

## Create Blank Firmware Project

1. Go to the directory where you want to create a firmware directory.

2. Run the following command:

        bcf create <firmware-name>

3. The **bcf** program cloned the basic firmware skeleton, which is ready to build immediately (see description below).

{{% note "info" %}}The starting point for developing your own firmware is the file `app/application.c`.{{% /note %}}

## Build Firmware

Firmware build is done using the traditional traditional build system **GNU Make**, which follows the recipe given in the file `Makefile` (found in the firmware root directory).

There are 2 target configurations to build the firmware:

* `debug`

    This configuration is implicit and is suitable for firmware development. The built-in firmware is ready for debugging.

* `release`

    This configuration is suitable for final deployment. It has build some optimizations turned on and is not suitable for firmware debugging due to these optimizations. The resulting program in this configuration can run faster and show lower power consumption than the one in `debug` configuration.

You can build the firmware by following these steps:

1. Go to the firmware directory you want to build.

2. Run the build command:

        make

    {{% note "info" %}}Build process can be accelerated by specifying the number of parallel compiler processes through the parameter `-j<number>`. The number should match the number of cores in your processor. Example: `make -j4`{{% /note %}}

3. Upon **successful completion** of the build process, you will receive a similar listing at the end:

        Linking object files...
        Size of sections:
           text    data     bss     dec     hex filename
          74332    2776    7328   84436   149d4 out/debug/firmware.elf
        Creating out/debug/firmware.bin from out/debug/firmware.elf...

4. The program called **linker** created two important files:

    * `out/debug/firmware.elf`

        This is the file in ELF format containing symbols necessary for a debugger.

    * `out/debug/firmware.bin`

        This is the binary image necessary for programming (the ELF file also contains this binary image).

5. In order to build the firmware in `release` configuration, use this command:

        make release

    This command generates the file `out/release/firmware.bin`.

## Switching Core Module into DFU Mode

To program the Core Module, we must first enter the DFU mode.

We can do this by following this procedure:

1. Check that the USB cable is plugged into the Core Module and your computer.

2. Press and hold the **BOOT** button on the Core Module.

    {{% note "info" %}}The **BOOT** button is on the right and is marked with a letter `B`.{{% /note %}}

3. Press and release the **RESET** button on the Core Module. At this point, you still have to hold the **BOOT** button.

    {{% note "info" %}}The **RESET** button is on the left and is marked with a letter `R`.{{% /note %}}

4. Release the **BOOT** button.

5. Now the Core Module is connected to your computer as a DFU USB device and is ready for programming.

## Related Documents

* [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.en.md" >}})

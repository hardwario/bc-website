---
title: "Core Module R1 and R2 comparison"
menu:
  main:
    parent: 'hardware'
    weight: 12
  doc:
    parent: 'hardware'
    weight: 12
---

We have released the new Core Module 2. Everything is the same, only the flash process is now easier and faster.

## Technical and visual differences

The most significant change is that R2 has only single button. This is the `B` button. It has moved and you can use it for your program. The `R` reset button is not necessary anymore because communication and firmware flashing is now done automatically over **FTDI** chip.

|   Model  | Core R1  |  Core R2 |
|----------|----------|----------|
|   Look   | {{% img-zoom src="core-module-1.png" width="220" %}} | {{% img-zoom src="core-module-2.png" width="220" %}} |

The new <strong>Core Module 2</strong> is not using DFU mode anymore. We have added new flashing over FTDI chip and virtual serial port over USB.
This means that the flashing procedure is now the same as with the Radio Dongle. Please, use the <strong>--device &lt;PORT&gt;</strong> (e.g. COM4 or /dev/ttyUSB0) parameters instead of the former <strong>--dfu</strong> or <strong>--device dfu</strong> parameter.

## Improvements

- No need to press any button to start firmware update.
- Faster firmware uploads over **FTDI** chip
- Smaller firmwares because USB stack is now handled by **FTDI** chip.
- Simple debugging over serial port. The UART2 is connected to the FTDI so you can use [**bc\_log\_\***](http://sdk.bigclown.com/group__bc__log.html) functions.
- No issues with DFU drivers on Windows.

## Flashing Core Module R1

1. Connect the Micro USB cable to the Core Module and your computer.
2. You have to switch to [Core Module to the DFU mode](https://www.bigclown.com/doc/firmware/toolchain-guide/#switching-core-module-into-dfu-mode).
3. Upload firmware with following command

        bcf flash --device dfu [firmware]:[version]

    Example which flashing wireless-motion-detector firmware from [Wireless Motion Detector](https://www.bigclown.com/doc/projects/radio-motion-detector/) project:

        bcf flash --device dfu bigclownlabs/bcf-radio-motion-detector:latest

## Flashing Core Module R2

1. Run following command to see connected devices

    ```
    bcf devices
    ```
    You should see as output something as following. On Windows instead of `/dev/ttyS4` will be for example `COM13`. Following device list is same on macOS and Linux.

     `/dev/ttyS4` \
     `/dev/ttyACM2` \

2. Connect the Micro USB cable to the Core Module and your computer

     Again run `bcf devices` command and you should see one added.

     `/dev/ttyS4` \
     `/dev/ttyUSB0` \
     `/dev/ttyACM2` \

     It is the `/dev/ttyUSB0`

3. Flash firmware with following command

        bcf flash --device [device] [firmware]:[version]

    Example which flashing wireless-motion-detector firmware from [Radio Motion Detector](https://www.bigclown.com/doc/projects/radio-motion-detector/) project:

        bcf flash --device /dev/ttyUSB0 bigclownlabs/bcf-radio-motion-detector:latest

4. Print bc_log debug messages over UART2 serial to your computer with `bcf`

        bcf log --device [device]

    Flash firmware and immediatelly start logging after upload

        bcf flash --device [device] [firmware]:[version] --log

## References

  * [**`bcf` tool**]({{< relref "/doc/tools/bcf.en.md" >}})
  * [**About Core Module**]({{< relref "/doc/hardware/about-core-module.en.md" >}})

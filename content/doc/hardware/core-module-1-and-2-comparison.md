---
title: "Core Module R1 and R2 comparison"
---

## Technical differences

{{< note "info" "Click for zoom on images" >}}{{< /note >}}

|   Model  | Core R1  |  Core R2 |
|----------|----------|----------|
|   Look   | {{% img-zoom src="core-module-1.png" width="70" height="70" %}} | {{% img-zoom src="core-module-2.png" width="70" height="70" %}} |

## Flashing differences

### Core Module R1

1. Connect the Micro USB cable to the Core Module and your computer.
2. You have to switch to [Core Module to the DFU mode](https://www.bigclown.com/doc/projects/wireless-motion-detector/).
3. Upload firmware with following command

        bcf flash --dfu [firmware]:[version]

    Example witch flashing wireless-motion-detector firmware from [Wireless Motion Detector](https://www.bigclown.com/doc/projects/wireless-motion-detector/) project:

        bcf flash --dfu bigclownlabs/bcf-kit-wireless-motion-detector:latest

### Core Module R2

1. Run following command to see connected devices

    ```
    bcf devices
    ```
    You should see as output something as following. On Windows instead of `/dev/ttyS4` will be for example `COM13`. Following device list is same on macOS and Linux.

     `/dev/ttyS4` \
     `/dev/ttyACM2` \
     `/dev/ttyACM1` \
     `/dev/ttyACM1` \

2. Connect the Micro USB cable to the Core Module and your computer

     Again run `bcf devices` command and you should see one added.

     `/dev/ttyS4` \
     `/dev/ttyUSB0` \
     `/dev/ttyACM2` \
     `/dev/ttyACM1` \
     `/dev/ttyACM1` \

     It is the `/dev/ttyUSB0`

3. Flash firmware with following command

        bcf flash --device [device] [firmware]:[version]

    In my situation if I want to flash same firmware as on my Core R1 like in first part. I use following command

        bcf flash --device /dev/ttyUSB0 bigclownlabs/bcf-kit-wireless-motion-detector:latest

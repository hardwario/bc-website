The **Core Module - NR** is a lite version of the **Core Module** without the radio module assembled. The rest is fully compatible with its ancestor. It has a **32-bit ARM microcontroller** with 192 kB of flash memory and 20 kB of RAM. Also, it has an integrated digital temperature sensor, 3D accelerometer, and security chip.

You can upload firmware by a Micro USB cable using the **BigClown Firmware Tool** (works on Windows, macOS, and Linux). It is easy to start development on this platform using the **BigClown Firmware SDK** (Software Development Kit). The SDK offers clean and consistent APIs which allow event-driven programming. These APIs are designed for **low-power and battery-operated applications**. If you need to debug your application and the logging API is not sufficient, you can use an SWD debugger and the onboard 10-pin connector.

## Features

-   ARM Cortex M0+ 32-bit MCU STM32L083CZ
-   192 kB Flash / 20 kB RAM
-   Security chip ATSHA204A
-   Digital temperature sensor TMP112
-   3-axis accelerometer LIS2DH12
-   Red color LED
-   Push button RESET and BOOT (BOOT is available to MCU)
-   Easily programmable via USB (DFU bootloader)
-   10-pin SWD connector for debugging
-   Micro-USB for host communication and/or power
-   18x GPIO (completely free for application)
-   3x UART, 2x I²C, 1x SPI, 5x ADC, 2x DAC
-   Deep sleep mode: < 5 µA
-   Operating voltage range: 2.0 V to 3.6 V
-   Operating temperature range: -20 to 70 °C
-   Mechanical dimensions: 33 x 55 mm

## Resources

-   [**Documentation**](https://www.bigclown.com/doc/hardware/about-core-module/)
-   [**Schematic**](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-core)

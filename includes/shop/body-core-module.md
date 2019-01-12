Core Module **R2** is the new revision. It has added **FTDI FT231XQ** chip which allows faster flashing and no need to press buttons for DFU mode. This **FTDI** chip is acting as a USB to UART bridge and is connected to UART2. This way you can use it during debugging or logging using the **bc\_log\_\*** functions.

You can upload firmware by a Micro USB cable using the **BigClown Firmware Tool** (works on Windows, macOS, and Linux). It is easy to start development on this platform using the **BigClown Firmware SDK** (Software Development Kit). The SDK offers clean and consistent APIs which allow event-driven programming. These APIs are designed for **low-power and battery-operated applications**. If you need to debug your application and the logging API is not sufficient, you can use an SWD debugger and the onboard 10-pin connector.

The **Core Module** can communicate wirelessly with another **Core Module**, or you can create your wireless network using the **Radio Dongle**.


## Features

* ARM Cortex M0+ 32-bit MCU STM32L083CZ (ST)
* 192 kB Flash / 20 kB RAM
* Radio module (868/915 MHz) based on SPIRIT1 (ST)
* Security chip ATSHA204A (Microchip)
* Digital temperature sensor TMP112 (TI)
* 3-axis accelerometer LIS2DH12 (ST)
* Red color LED
* Push button RESET and BOOT (BOOT is available to MCU)
* Easily programmable via USB (DFU bootloader)
* 10-pin SWD connector for debugging
* Micro-USB for host communication and/or power
* 18x GPIO (completely free for application)
* 3x UART, 2x I²C, 1x SPI, 5x ADC, 2x DAC
* Deep sleep mode: < 5 µA
* Operating voltage range: 2.0 V to 3.6 V
* Operating temperature range: -20 to 70 °C
* Mechanical dimensions: 33 x 55 mm

## Resources

* [**Pinout signals**](https://www.bigclown.com/doc/hardware/header-pinout)
* [**Documentation**](https://www.bigclown.com/doc/hardware/about-core-module/)
* [**Schematic drawing**](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-core)

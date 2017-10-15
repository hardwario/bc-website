---
title: About Core Module
---

{{< hardware_intro "Core Module" core-module >}}

This module is a fundamental element of every BigClown node. The two most important components are ARM microcontroller and 868 MHz radio module.

Core Module can be programmed using USB DFU bootloader which is stored in ROM memory of the microcontroller or it can be debugged via a standard 10-pin SWD probe.

Combination of these features, integrated security chip, temperature sensor and accelerometer makes this an unrivaled solution for today’s connected home automation nodes.

{{< /hardware_intro >}}

## Features

  * ARM Cortex M0+ 32-bit MCU STM32L083CZ
  * 192 kB Flash / 20 kB RAM
  * Radio module (868 MHz) based on SPIRIT1
  * Security chip ATSHA204A
  * Digital temperature sensor TMP112
  * 3-axis accelerometer LIS2DH12
  * Red color LED
  * Push button RESET and BOOT (BOOT is available to MCU)
  * 10-pin SWD connector for debugging
  * Micro-USB for host communication and/or power
  * Integrated USB DFU bootloader (no need for pre-programmed chip)
  * 18x GPIO (completely free for application)
  * 3x UART, 2x I2C, 1x SPI, 5x ADC, 2x DAC
  * Deep sleep mode: < 5 µA
  * Operating voltage range: 2.0 V to 3.6 V
  * Operating temperature range: -20 to 70 °C
  * Mechanical dimensions: 33 x 55 mm
  * 10-year warranty

{{< hardware "Core Module" >}}

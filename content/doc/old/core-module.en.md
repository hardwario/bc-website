# Core Module


<!-- toc -->


This tutorial will guide you through some fundamental insights about Core Module.


## Block Diagram


![](images/core-module/core-module.png)


## GPIO Mapping


The following table lists GPIO mapping to microcontroller (MCU) pins [STM32L083CZ](http://www.st.com/en/microcontrollers/stm32l083cz.html):


| Pin | Signal     | MCU Pin      | 5 V Tolerant |
| --- | :--------- | :----------- | :----------- |
|   1 | P0/A0/TXD0 | PA0  (10)    | -            |
|   2 | P1/A1/RXD0 | PA1  (11)    | Yes          |
|   3 | P2/A2/TXD1 | PA2  (12)    | Yes          |
|   4 | P3/A3/RXD1 | PA3  (13)    | Yes          |
|   5 | P4/A4/DAC0 | PA4  (14)    | -            |
|   6 | P5/A5/DAC1 | PA5  (15)    | -            |
|   7 | P6/RTS1    | PB1  (19)    | Yes          |
|   8 | P7/CTS1    | PA6  (16)    | Yes          |
|   9 | P8         | PB0  (18)    | Yes          |
|  10 | P9         | PB2  (20)    | Yes          |
|  21 | P10/RXD2   | PA10 (31)    | Yes          |
|  22 | P11/TXD2   | PA9  (30)    | Yes          |
|  23 | P12/MISO   | PB14 (27)    | Yes          |
|  24 | P13/MOSI   | PB15 (28)    | Yes          |
|  25 | P14/SCLK   | PB13 (26)    | Yes          |
|  26 | P15/CS     | PB12 (25)    | Yes          |
|  27 | P16/SCL1   | PB8  (45)    | Yes          |
|  28 | P17/SDA1   | PB9  (46)    | Yes          |


The following electrical limitations apply for GPIO pins:


* Maximum sink current for any GPIO is 16 mA.

* Maximum source current for any GPIO is -16 mA.

* Maximum total output current sunk / sourced by all GPIOs is 90 / -90 mA.


## Hardware Schematic Drawing


Core Module schematic drawing can be downloaded by clicking on [this link](https://github.com/bigclownlabs/bc-hardware/raw/master/out/bc-module-core/bc-module-core-rev-1-3-sch.pdf).

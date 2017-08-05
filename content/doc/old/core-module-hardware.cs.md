# Core Module - Hardware

<!-- toc -->

Tady ti naši grafici připravili přehled pojmenování pinů a znázornění základních bloků.
Popis pinů budeš potřebovat, pokud budeš zapojovat nějaké vlastní externí senzory a součástky.
Pokud budeš používat tagy a moduly, tak ty mají v SDK své vlastní piny a nemusíš se o ně starat.


![](images/core-module/core-module.png)

Piny označené jako **Px** jsou zapojeny pouze k mikrokontroléru.
Nejsou připojené k žádným jiným obvodům na Core Module a jsou tedy k dispozici pro tvoji aplikaci.


## Mapování GPIO pinů


V následující tabulce je popis pinů a periferií mikrokontroléru [STM32L083CZ](http://www.st.com/en/microcontrollers/stm32l083cz.html):


| Pin | Signál     | MCU Pin      | Toleruje 5 V |
| --- | :--------- | :----------- | :----------- |
|   1 | P0/A0/TXD0 | PA0  (10)    | -            |
|   2 | P1/A1/RXD0 | PA1  (11)    | Ano          |
|   4 | P3/A3/RXD1 | PA3  (13)    | Ano          |
|   3 | P2/A2/TXD1 | PA2  (12)    | Ano          |
|   5 | P4/A4/DAC0 | PA4  (14)    | -            |
|   6 | P5/A5/DAC1 | PA5  (15)    | -            |
|   7 | P6/RTS1    | PB1  (19)    | Ano          |
|   8 | P7/CTS1    | PA6  (16)    | Ano          |
|   9 | P8         | PB0  (18)    | Ano          |
|  10 | P9         | PB2  (20)    | Ano          |
|  21 | P10/RXD2   | PA10 (31)    | Ano          |
|  22 | P11/TXD2   | PA9  (30)    | Ano          |
|  23 | P12/MISO   | PB14 (27)    | Ano          |
|  24 | P13/MOSI   | PB15 (28)    | Ano          |
|  25 | P14/SCLK   | PB13 (26)    | Ano          |
|  26 | P15/CS     | PB12 (25)    | Ano          |
|  27 | P16/SCL1   | PB8  (45)    | Ano          |
|  28 | P17/SDA1   | PB9  (46)    | Ano          |


Pro jednotlivé GPIO piny platí následující omezení:

* Maximální proud na jeden GPIO pin je 16 mA.
* Maximální součet proudů všech GPIO je 90 mA.


## Schéma hardwaru


Kompletní schéma Core Module je [ke stažení v PDF](https://github.com/bigclownlabs/bc-hardware/raw/master/out/bc-module-core/bc-module-core-rev-1-3-sch.pdf).

# Konektory & Signály


V našem systému klademe důraz na hardwarovou modularitu a znovupoužitelnost.
Proto jsme zvolili pro systém propojování našich komponent dobře známý a hojně používaný standard konektorů s 2.54 mm (0.1 palce) roztečí.


Náš systém konektorů pak sestává ze dvou typů komponent - **pinů** a **dutinek**.


A abychom zajistili kompatibilitu mezi různými hardwarovými komponenty, tak jsme přišli se dvěma našimi standardy - elektromechanickými formáty - **Module** a **Tag**.


## Formát Module


Formát **Module** je definován:


* Mezerami a signály mezi dvěmi řadami 14pinových konektorů
* Čtyřmi montážními otvory a jejich průměrem
* Pozicí zaslepené dutinky a vynechaného pinu na konektorech bránící opačnému spojení modulů
* Pozicí dutinek na horní části modulů
* Pozicí pinů na spodní části modulů
* Doporučenou výškou DPS 55 mm
* Doporučenou tloušťkou DPS 1.5 mm
* Poloměrem zaoblených rohů 3.8 mm


### Schéma Module


![](images/headers/module.png)


### Signály Module


Zde je soupis základních periferií dostupných na konektoru modulu:


* 18x **GPIO** channels (General Purpose Input/Output)
* 5x **ADC** channels (Analog-to-Digital Converter)
* 2x **DAC** channels (Digital-to-Analog Converter)
* 3x **UART** channels (Universal Asynchronous Receiver Transmitter)
* 2x **I²C** bus (Inter-Integrated Circuit)
* 1x **SPI** bus (Serial Peripheral Interface)


Následující tabulka definuje přiřazení signálů na konektoru modulu:


|     | Signal   | Popis                       |
| --- | :------- | :-------------------------------- |
| 1   | P0       | GPIO channel 0                    |
|     | A0       | ADC channel 0                     |
|     | TXD0     | UART channel 0 - TXD signal       |
| 2   | P1       | GPIO channel 1                    |
|     | A1       | ADC channel 1                     |
|     | RXD0     | UART channel 0 - RXD signal       |
| 3   | P2       | GPIO channel 2                    |
|     | A2       | ADC channel 2                     |
|     | TXD1     | UART channel 1 - TXD signal       |
| 4   | P3       | GPIO channel 3                    |
|     | A3       | ADC channel 3                     |
|     | RXD1     | UART channel 1 - RXD signal       |
| 5   | P4       | GPIO channel 4                    |
|     | A4       | ADC channel 4                     |
|     | DAC0     | DAC channel 0                     |
| 6   | P5       | GPIO channel 5                    |
|     | A5       | ADC channel 5                     |
|     | DAC1     | DAC channel 1                     |
| 7   | P6       | GPIO channel 6                    |
|     | RTS1     | UART channel 1 - RTS signal       |
| 8   | P7       | GPIO channel 7                    |
|     | CTS1     | UART channel 1 - CTS signal       |
| 9   | P8       | GPIO channel 8                    |
| 10  | P9       | GPIO channel 9                    |
| 11  | RESET    | System reset                      |
|     |          | _Also button "R" on Core Module_  |
| 12  | BOOT     | Boot mode                         |
|     |          | _Also button "B" on Core Module_  |
| 13  | VDD_OFF  | From top side: VDD_OFF output     |
|     |          | From bottom side: VDD_OFF input   |
| 14  | BAT_OFF  | Battery disconnect signal         |
| 15  | GND      | System GND (ground)               |
| 16  | VDD      | System VDD (positive rail)        |
| 17  | SCL0     | I²C bus 0 - SCL signal            |
| 18  | SDA0     | I²C bus 0 - SDA signal            |
| 19  | INT      | System interrupt signal           |
| 20  |          | System interrupt signal           |
| 21  | P10/RXD2 | UART channel 2 - RXD signal       |
| 22  | P11/TXD2 | UART channel 2 - TXD signal       |
| 23  | P12/MISO | SPI bus - MISO signal             |
| 24  | P13/MOSI | SPI bus - MOSI signal             |
| 25  | P14/SCLK | SPI bus - SCLK signal             |
| 26  | P15/CS   | SPI bus - CS signal               |
| 27  | P16/SCL1 | I²C bus 1 - SCL signal            |
| 28  | P17/SDA1 | I²C bus 1 - SDA signal            |


## Formát Tag


Primárním cílem formátu **Tag** je poskytnout výstup signálu pro I²C periferie v kompaktním formát.
Může to být cokoliv I²C-related - např. sensory, paměti, RTC ad.


Formát **Tag** je definován:


* Signály na 5pinovém konektoru
* Tvarem DPS v podobě písmena "D"
* Mechanickými rozměry 16 x 16 mm.
* Doporučenou tloušťkou DPS 1.5 mm.
* Poloměrem zaoblených rohů 3.8 mm.


### Schéma Tagu


![](images/headers/tag.png)


### Signály Tagu


Následující tabulka definuje signály přiřazené na konektoru Tagu:


|     | Signal | Popis                |
| --- | :----- | :------------------------- |
| 1   | GND    | System GND (ground)        |
| 2   | VDD    | System VDD (positive rail) |
| 3   | SCL    | I²C bus - SCL signal       |
| 4   | SDA    | I²C bus - SDA signal       |
| 5   | INT    | System interrupt signal    |

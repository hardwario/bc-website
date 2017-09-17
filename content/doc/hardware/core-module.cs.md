---
title: Popis k Core Module
slug: core-module
---

Core Module je klíčovým prvkem každého BigClown nodu. Jeho dvěma nejdůležitějšími komponentami jsou ARM mikroprocesor a 868 MHz rádiový modul.

Core Module může být naprogramován pomocí USB DFU bootloaderu, který je uložen v ROM paměti mikrokontroleru, nebo může být debugován skrze standardní 10-pin SWD konektor.

Kombinace těchto funkcí společně s integrovaným bezpečnostní čipem, teplotním čidlem a akcelerometrem, dělají tento modul bezkonkurenčním řešením v oblasti nodů pro domácí automatizaci.

E-shop: {{<shop "Core Module">}}

# Vlastnosti

  * ARM Cortex M0+ 32-bit MCU STM32L083CZ
  * 192 kB Flash / 20 kB RAM
  * Rádiový modul (868 MHz) založený na SPIRIT1
  * Security čip ATSHA204A
  * Digitální čidlo teploty TMP112
  * 3-osý akcelerometr LIS2DH12
  * Červená LEDka
  * Tlačítka RESET a BOOT (BOOT je k dispozici MCU)
  * 10 pinový SWD konektor pro debugging
  * Micro-USB pro komunikaci s hostitelem a/nebo napájení
  * Integrovaný USB DFU bootloader (bez potřeby předprogramovaného čipu)
  * 18x GPIO (kompletně volné pro aplikace)
  * 3x UART, 2x I2C, 1x SPI, 5x ADC, 2x DAC
  * Režim hlubokého spánku: < 5 µA
  * Rozsah provozního napětí: 2.0 V až 3.6 V
  * Rozsah provozních teplot: -20 až 70 °C
  * Rozměry: 33 x 55 mm
  * 10 let záruky

{{< hardware "Core Module" >}}

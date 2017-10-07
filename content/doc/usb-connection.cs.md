---
title: Rozhraní USB
---

Core Module nebo USB Dongle se připojuje přes USB rozhraní. Využívá se virtuální sériové linky. Mezi oběmi zařízeními jsou v USB implementaci drobné rozdíly, ale zprávy a přenášené příkazy jsou stejné.

# Core Module

Tento modul má USB rozhraní přímo napojeno na aplikační mikrokontrolér `STM32L083CZ`. Lze tedy softwarově změnit jak se bude zařízení pro počítač hlásit. Využíváme Virtuální sériové linky USB CDC. Na windows je třeba doinstalovat ručně ovladač, nebo lze použít naše `Windows IDE` nebo `BigClown Toolchain`, kdy se instalátor sám o vše postará. Na Linuxu se zařízení objeví pod názvem `/dev/ttyAMA0`.

Pro naprogramování je nutné přepnout mikrokontrolér ručně stiskem tlačítek do DFU módu, kdy se provede odpojení USB a zařízení se připojí jako DFU device.

Pokud programujete tuto revizi Core Module utilitou `bcf`, nesmíte zapomenout po přepnutí do DFU módu přidat při flashování ještě parametr `--dfu`.

**TODO** odkaz na flash a bcf

# USB Dongle

Dongle na sobě navíc obsahuje druhý čip od firmy FTDI. Ten vytváří trvale virtuální sériový port a při resetu mikrokontroléru se USB spojení nepřeruší. Přepnutí do programovacího módu se taky nově děje automaticky přes stavové signály `DTR` a `RTS`.

/dev/ttyUSB0

---
title: Battery Module + Mini Battery Module
---

Oba moduly slouží pro napájení BigClown komponent z baterií. Jelikož jsou všechny naše komponenty low-power a bezproblémový chod z baterií je základní stavební kámen BigClown produktů, tak budou tyto moduly potřeba téměř pro všechny rádiové jednotky (remote node). Součástí modulu je obvod pro měření vstupního napětí, lze tak jednoduše zjišťovat stav vybití baterií. Navíc díky dalšímu pinu se měření jen krátkodobě zapíná, takže nikde zbytečně neutíká proud.

**Základní vlastnosti**:
- Používají se články typu AAA, lze použít alkalické nebo nabíjecí (NiMH)
- Možnost připojení vlastní baterie pomocí pinů + a - na desce
- Při zapojení jiného napájecího zdroje se baterie odpojí (díky obvodu připojenému k pinu BAT_OFF)
- Ochrana proti přepólování baterie (zajišťuje MOSFET Q1)
- Měření vstupního napětí (stavu baterií)
- Výstupní napětí 3.1 V
- Rozsah provozních teplot: -20 až 70 °C

**Obsazené piny na Core Module, které nelze dále použít**:
- P0 - měření napětí baterií
- P1 - připojení/odpojení odporového děliče pro účely tohoto měření

## Battery Module

![](battery-module.png)

**Specifické vlastnosti**:
- Vstup 4x AAA (6.0 V)
- Step-down TPS62745, klidový proud pouze 400 nA
- Jedna extra zásuvka pro BigClown tag
- Prototypovací prostor k pájení vlastních obvodů
- Rozměry: 88 x 55 mm

> **Note**
Ze spodní strany jsou vyvedeny piny pouze pro NFC Module, jiné komponenty do nich nelze zasunout.

**Ke stažení**:
- <a href="files/modules/bc-module-battery-rev-1-3-sch.pdf" target="_blank">Schéma modulu</a>
- <a href="files/modules/tps62745.pdf" target="_blank">Datasheet pro step-down TPS62745</a>

## Mini Battery Module

![](mini-battery-module.png)

**Specifické vlastnosti**:
- Vstup 2x AAA (3.0 V)
- Step-up TPS61099, klidový proud < 5 μA
- O cca 2x až 3x menší výdrž než normálního Battery Module
- Rozměry: 33 x 55 mm

> **Note**
Ostatní komponenty se do tohoto modulu zasouvají pouze z horní strany.

**Ke stažení**:
- <a href="files/modules/bc-module-battery-mini-rev-1-1-sch.pdf" target="_blank">Schéma modulu</a>
- <a href="files/modules/tps61099.pdf" target="_blank">Datasheet pro step-up TPS61099</a>

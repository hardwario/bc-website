---
title: Tutoriál
slug: tutorial
---

Tento dokument slouží jako praktická ukázka práce s IoT sadou BigClown. Ukážeme si, jak lze v **Raspberry Pi** vyčítat teplotu z **Core Module**, ovládat LED diodu, měřit relativní vlhkost vzduchu z **Humidity Tag**, řídit malý spotřebič pomocí **Relay Module** nebo vytvořit rádiovou síť prostřednictvím **USB Dongle**. Měření i ovládání je demonstrované pomocí nástroje **Node-RED**, který běží v **Raspberry Pi** a umožňuje uživateli snadnou automatizaci úloh přes webové rozhraní.

Co budeme potřebovat:

* Raspberry Pi + napájecí adaptér + MicroSD kartu
* USB Dongle
* {{< shop "Core Module" >}}
* Mini Battery Module
* Humidity Tag (nepovinně)
* Relay Module (nepovinně)

## Instalace Raspberry Pi

Nejjednodušší způsob jak začít je [stáhnout si připravený BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). Tento obraz má již předinstalované [potřebné služby a nástroje]({{< relref "doc/raspberry-pi-installation.cs.md#odlišnosti-od-originální-distribuce-raspbian" >}}). Obsahuje USB gateway, MQTT broker, Node-Red a flashovací utilitu `bcf`. Obraz nahrajete na kartu z pomocí příkazu `dd` nebo `Win32DiskImager`. Můžete však použít i oficiální image a balíčky si sami doinstalovat.

[Detailní návod zprovoznění Raspberry Pi]({{< relref "doc/raspberry-pi-installation.cs.md" >}})

## Připojení k Raspberry Pi

**TODO** Popsat SSH. Odkaz na plný návod.
[Přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}})

## Nahrání firmware do Core Module

**TODO** Stručně představit bcf. Flashnutí generic node. Odkaz na plný návod.

## Připojení k aplikaci Node-RED

**TODO** Stručně představit Node-RED a nejzákladnější práci s prostředím.

## Práce se zprávami na MQTT

**TODO** Popsat zapnutí debug logu a ukázka ručního ovládání LED.

## Přihlášení k odběru zpráv o teplotě

**TODO** Popsat demonstraci subscripe na topic se zobrazením hodnoty teploty v debug.

## Řízení LED v závislosti na teplotě

**TODO** Popsat vytvoření podmínky - propojení subscribe/publish.

## Rozšíření o měření vlhkosti

**TODO** Popsat způsob instalace Humidity Tagu a subscribe k dalšímu topic.

## Rozšíření o ovládání reléového výstupu

**TODO** Popsat způsob instalace Relay Module a publish topicu.

## Přeměna v bateriové zařízení

**TODO** Popsat výhodu low-power a instalaci Mini Battery Module. Odpojení USB kabelu.

## Vytvoření rádiové sítě

**TODO** Stručně popsat koncept node/gateway. Výhody 868 MHz rádia (dosah/spotřeba).

## Nahrání firmware do USB Dongle

**TODO** Zasunutí do Raspberry Pi + bcf.

## Spárování Core Module s USB Dongle

**TODO** Možná už bude existovat webový nástroj pro párování? Uživatel si musí poznamenat ID zařízení.

## Ovládání a měření přes rádio

**TODO** Zpátky k Node-RED - s pomocí poznamenaného device ID navádět jak pub/sub do rádiového nodu.

## Závěr a další kroky

**TODO** Odehrát shrnutí co jsme se naučili. Neměl by chybět odkaz na referenci MQTT topiců generic nodu a inspirace jaký další HW může číst / ovládat. Taky bych sem dal link na MQTT v Python pokud někdo nebude chtít Node-RED a chce začít kódovat.

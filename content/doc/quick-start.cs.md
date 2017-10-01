---
title: Tutoriál
slug: tutorial
---

Tento dokument slouží jako praktická ukázka práce s IoT sadou BigClown. Ukážeme si, jak lze v **Raspberry Pi** vyčítat teplotu z **Core Module**, ovládat LED diodu, měřit relativní vlhkost vzduchu z **Humidity Tag**, řídit malý spotřebič pomocí **Relay Module** nebo vytvořit rádiovou síť prostřednictvím **USB Dongle**. Měření i ovládání je demonstrované pomocí nástroje **Node-RED**, který běží v **Raspberry Pi** a umožňuje uživateli snadnou automatizaci úloh přes webové rozhraní.

Co budeme potřebovat:

* Raspberry Pi + napájecí adaptér + MicroSD kartu
* {{< shop "USB Dongle" >}} (nebo druhý {{< shop "Core Module" >}})
* {{< shop "Core Module" >}}
  * {{< shop "Mini Battery Module" >}} (nebo 5V microUSB adaptér)
  * {{< shop "Humidity Tag" >}} (nepovinně)
  * {{< shop "Relay Module" >}} (nepovinně)

## Instalace Raspberry Pi

Nejjednodušší způsob jak začít je [stáhnout si připravený BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). Tento obraz má již předinstalované [potřebné služby a nástroje]({{< relref "doc/raspberry-pi-installation.cs.md#odlišnosti-od-originální-distribuce-raspbian" >}}). Obsahuje USB gateway, MQTT broker, Node-Red a flashovací utilitu `bcf`. Obraz nahrajete na kartu z pomocí příkazu `dd` nebo `Win32DiskImager`. Můžete však použít i oficiální image a balíčky si sami doinstalovat.

[Detailní návod zprovoznění Raspberry Pi]({{< relref "doc/raspberry-pi-installation.cs.md" >}})

## Připojení k Raspberry Pi

Nahranou kartu vložte do Raspberry Pi, připojte ethernet kabel, Core Module nebo USB Dongle a napájení. Po nabootování byste měli Raspberry Pi najít na adrese `hub.local`. Můžete vyzkoušet příkaz `ping hub.local`.

Pokud se Raspberry Pi nehlásí, je buď něco špatně se sítí nebo vás systém nepodporuje `mDNS` a budete muset najít IP adresu Raspberry Pi ve všem routeru v nastavení `DHCP`.

Pro přihlášení použijte příkaz `ssh pi@hub.localhost` nebo na Windows program `putty`.

[Detailní návod přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}})

## Nahrání firmware do Core Module

Pro snadný začátek jsme vytvořili command-line Python utilitu `bcf`, která stáhne poslední verzi firmware a naprogramuje modul. Na připojeném Raspberry Pi si nejprve aktualizujte všechny firmware release s pomocí `sudo bcf update`. Potom si s pomocí `sudo bcf list` vypiště seznam všech předkompilovaných firmwarů.

V následujícíh krocích je postup flashování pro USB Dongle a Core Module. Pokud nemáte USB Dongle, pak lze jako gateway použít i Core Module, jen je třeba nahrát jiný firmware.

### Nahrání firmware do USB Dongle

Připojte USB Dongle do Raspberry Pi. USB Dongle se do programovacího módu přepne automaticky. Stačí spustit následující příkaz.
```
sudo bcf bigclownlabs/bcf-usb-dongle:firmware.bin
```

**Pokud chcete jako gateway namísto USB Dongle použít Core Module, je to možné, ale třeba nahrát jiný firmware.** Taky je třeba přepnout Core Module ručně do programovacího DFU módu. Nejprve připojte Core Module k Raspberry Pi přes micro USB. Pak modul přepněte do programovacího módu tak, že stisknete a držíte tlačítko `B`, mezitím krátce stisknete tlačítko `R` a pak můžete pustit tlačítko `B`. Poté můžete Core Module naprogramovat následujícím příkazem.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

### Nahrání firmware do Core Module

Do bezdrátové bateriové jednotky nahrajte `bcf-generic-node`. Tento univerzální firmware obsahuje funkce pro všechny senzory a většinu ostatních modulů. Po startu nadetekuje připojené senzory a posílá jejich hodnoty na rádiovou gateway.

Připojte Core Module do Raspberry Pi a přepněte Core Module do **DFU** módu viz. předchozí kapitola. Nahrajte firmware `generic-node` ve verzi s `firmware-battery-mini`.

```
sudo bcf flash --dfu bigclownlabs/bcf-generic-node:firmware-battery-mini.bin
```

Pokud budete bezdrátový node napájet např. adaptérem s Power Module, můžete použít firmware `bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin`, který zprávy z gateway-e i přijímá a může ovládat barvy na LED pásku, relé a zobrazovat naměřená data i na připojeném LCD Module. Navíc je možné na LCD Module zapisovat i vlastní texty.

[Detailní návod k nahrávání firmware]({{< relref "doc/firmware-upload.cs.md" >}}).

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

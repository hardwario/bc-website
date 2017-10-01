---
title: Tutoriál
slug: tutorial
---

Tento dokument slouží jako praktická ukázka práce s IoT sadou BigClown. Ukážeme si, jak lze v **Raspberry Pi** vyčítat teplotu z **Core Module**, ovládat LED diodu, měřit relativní vlhkost vzduchu z **Humidity Tag**, řídit malý spotřebič pomocí **Relay Module** nebo vytvořit rádiovou síť prostřednictvím **USB Dongle**. Měření i ovládání je demonstrované pomocí nástroje **Node-RED**, který běží v **Raspberry Pi** a umožňuje uživateli snadnou automatizaci úloh přes webové rozhraní.

Tento tutoriál je rozdělený do několika kapitol. Doporučujeme je prostudovat postupně, protože následující kapitoly staví na znalostech z předchozích kapitol. Na konci téměř každé kapitoly je odkaz na detailní postup, který vám pomůže v případě nejasností.

Co budeme potřebovat:

  * Raspberry Pi + napájecí adaptér + MicroSD kartu
  * {{< shop "Core Module" >}}

Volitelně pak pro bateriovou bezdrátovou síť:

  * {{< shop "USB Dongle" >}} (nebo druhý {{< shop "Core Module" >}})
  * {{< shop "Mini Battery Module" >}}
  * {{< shop "Humidity Tag" >}}
  * {{< shop "Relay Module" >}}

## Instalace Raspberry Pi

Nejjednodušší způsob jak začít je [stáhnout si připravený BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). Tento obraz má již předinstalované [potřebné služby a nástroje]({{< relref "doc/raspberry-pi-installation.cs.md#odlišnosti-od-originální-distribuce-raspbian" >}}). Obsahuje USB gateway, MQTT broker, Node-Red a flashovací utilitu `bcf`. Obraz nahrajete na kartu z pomocí příkazu `dd` nebo `Win32DiskImager`. Můžete však použít i oficiální image a balíčky si sami doinstalovat.

[Detailní návod zprovoznění Raspberry Pi]({{< relref "doc/raspberry-pi-installation.cs.md" >}})

## Připojení k Raspberry Pi

Nahranou kartu vložte do Raspberry Pi, připojte ethernet kabel, Core Module nebo USB Dongle a napájení. Po nabootování byste měli Raspberry Pi najít na adrese `hub.local`. Můžete vyzkoušet příkaz `ping hub.local`.

Pokud se Raspberry Pi nehlásí, je buď něco špatně se sítí nebo vás systém nepodporuje `mDNS` a budete muset najít IP adresu Raspberry Pi ve všem routeru v nastavení `DHCP`.

Pro přihlášení použijte příkaz `ssh pi@hub.localhost` nebo na Windows program `putty`.

[Detailní návod přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}})

## Nahrání firmware

Pro rychlý start jsme vytvořili command-line Python utilitu `bcf`, která automaticky stáhne poslední release firmware z GitHubu a naprogramuje modul. Na připojeném Raspberry Pi si nejprve aktualizujte všechny firmware release s pomocí `sudo bcf update`. Potom si s pomocí `sudo bcf list` vypište seznam všech předkompilovaných firmwarů.

Do Core Module nahrajeme firmware `bcf-usb-gateway`. Tento firmware pro gateway obsahuje i funkce pro všechny senzory a většinu ostatních modulů. Po startu nadetekuje připojené senzory a posílá jejich hodnoty po USB do Raspberry Pi.

Taky je třeba přepnout Core Module ručně do programovacího **DFU** módu. Nejprve připojte Core Module k Raspberry Pi přes micro USB. Pak modul přepněte do programovacího módu tak, že stisknete a držíte tlačítko `B`, mezitím krátce stisknete tlačítko `R` a pak můžete pustit tlačítko `B`. Poté můžete Core Module naprogramovat následujícím příkazem.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

Po naprogramování se Core Module sám restartuje a automaticky se spustí nahraný firmware.

[Detailní návod k nahrávání firmware]({{< relref "doc/firmware-upload.cs.md" >}}).

## Komunikace mezi USB a MQTT

Core Module nebo i USB Dongle komunikují přes USB po virtuálním sériovém portu. Tato komunikace je dále na Raspberry Pi přesměrovaná službou `bch-gateway`, která tyto zprávy přepošle na MQTT brokera Mosquitto. Na tento broker se pak můžou připojovat další služby a aplikace jako Node-RED, nebo např. Android aplikace MQTT Dash. Dále je možné si například promapovat port na routeru a můžete se k vašim MQTT zprávám dostat i z internetu. Další možností u brokeru Mosquitto je nastavit tzv. bridge, kdy lze propojit několik brokerů mezi sebou. Ty pak sdílejí všechny zprávy mezi sebou. Oba tyto popsané způsoby zpřístupnění MQTT zpráv je však potřeba vhodně zabezpečit, např. TLS spojením.

## Připojení k aplikaci Node-RED

**Node-RED** je webová aplikace běžící Raspberry Pi, kterou si můžete otevřít v internetovém prohlížeči. Díky ní lze zobrazit, zpracovávat naměřené hodnoty a následně odesílat příkazy pro moduly jako například Relay Module, Power Module (relé a digitální RGBW pásky), LCD Module (zobrazovat texty).

Do webového prohlížeče zadejte adresu `hub.local:1800`.

![Node-RED](node-red-mqtt.png)

V levé části máte na výběr stavební bloky, které přetažením můžete umístnit na prostřední plochu. Bloky jsou rozděleny do několika sekcí a nejdůležitější jsou `input`, `output`, `function` a `dashboard`. Po rozmístnění lze bloky mezi sebou spojovat a vytvářet tzv. `flow`.

V pravé části jsou záložky `info` a pro nás později důležitá záložka `debug`.

Po jakékoliv změně `flow` je třeba tyto změny aplikovat. To se provede vpravo nahoře tlačítkem `deploy`.

**TODO** Odkaz na článek Integrace > Node-RED

## Práce se zprávami na MQTT

BigClown používá
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

## Nahrání firmware do gateway

Připojte USB Dongle do Raspberry Pi. USB Dongle se do programovacího módu přepne automaticky. Stačí spustit následující příkaz.
```
sudo bcf bigclownlabs/bcf-usb-dongle:firmware.bin
```

**Pokud chcete jako gateway namísto USB Dongle použít Core Module, je to možné, ale třeba nahrát jiný firmware.** Taky je třeba přepnout Core Module ručně do programovacího DFU módu. Nejprve připojte Core Module k Raspberry Pi přes micro USB. Pak modul přepněte do programovacího módu tak, že stisknete a držíte tlačítko `B`, mezitím krátce stisknete tlačítko `R` a pak můžete pustit tlačítko `B`. Poté můžete Core Module naprogramovat následujícím příkazem.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

## Nahrání firmware do node

Do bezdrátové bateriové jednotky nahrajte `bcf-generic-node`. Tento univerzální firmware obsahuje funkce pro všechny senzory a většinu ostatních modulů. Po startu nadetekuje připojené senzory a posílá jejich hodnoty na rádiovou gateway.

Připojte Core Module do Raspberry Pi a přepněte Core Module do **DFU** módu viz. předchozí kapitola. Nahrajte firmware `generic-node` ve verzi s `firmware-battery-mini`.

```
sudo bcf flash --dfu bigclownlabs/bcf-generic-node:firmware-battery-mini.bin
```

Pokud budete bezdrátový node napájet např. adaptérem z Power Module, můžete použít firmware `bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin`, který zprávy z gateway-e i přijímá a může ovládat barvy na LED pásku, relé a zobrazovat naměřená data i na připojeném LCD Module. Navíc je možné na LCD Module zapisovat i vlastní texty.

[Detailní návod k nahrávání firmware]({{< relref "doc/firmware-upload.cs.md" >}}).


## Spárování Core Module s USB Dongle

**TODO** Možná už bude existovat webový nástroj pro párování? Uživatel si musí poznamenat ID zařízení.

## Ovládání a měření přes rádio

**TODO** Zpátky k Node-RED - s pomocí poznamenaného device ID navádět jak pub/sub do rádiového nodu.

## Závěr a další kroky

**TODO** Odehrát shrnutí co jsme se naučili. Neměl by chybět odkaz na referenci MQTT topiců generic nodu a inspirace jaký další HW může číst / ovládat. Taky bych sem dal link na MQTT v Python pokud někdo nebude chtít Node-RED a chce začít kódovat.

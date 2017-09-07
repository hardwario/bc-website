---
title: GitHub repozitáře
slug: github-repositories
---

Všechna uvolněná data publikujeme na GitHub na adrese https://github.com/bigclownlabs/.
Tento odkaz je taky na každé stránce v horním menu.

Pro lepší přehlednost má každý repozitář ve svém názvu předponu, která určuje co má za obsah.
# Typy repozitářů

## **bcf** - BigClown Firmware
Repozitáře s prefixem [bcf](https://github.com/bigclownlabs?q=bcf) obsahují firmwarové projekty pro Core Module, Cloony nebo USB Dongle.

Nejdůležitější repozitáře:

  * [bcf-generic-node](https://github.com/bigclownlabs/bcf-generic-node) - Univerzální firmware do bezdrátových nodů.
  * [bcf-usb-gateway](https://github.com/bigclownlabs/bcf-usb-gateway) - Firmware do Core Module pro funkci gateway.
  * [bcf-skeleton-core-module](https://github.com/bigclownlabs/bcf-skeleton-core-module) - Prázná kostra aplikace pro váš nový projekt. Obsahuje application.c a sub-repozitář s SDK.
  *  [bcf-sdk-core-module](https://github.com/bigclownlabs/bcf-sdk-core-module) - Submodul s SDK, který se jinak automaticky klonuje do podsložky `/sdk`. Pokud stahujete repozitáře **bcf** jako ZIP soubor, musíte ručně tento repozitář rozbalit do podsložky `/sdk` s vaším projektem.
  
## **bch** - BigClown Hub

Repozitáře s prefixem [bch](https://github.com/bigclownlabs?q=bch) obsahují software pro Hub nebo vývojový systém.

Nejdůležitější repozitáře:

  * [bch-usb-gateway](https://github.com/bigclownlabs/bch-usb-gateway) - Gateway běžící na pozadí, která propojuje fyzické USB zařízení s MQTT brokerem. Standardně nainstalovaná v image [BigClown Raspbian]({{< relref "doc/raspberry-pi-installation.cs.md" >}}).
  * [bch-firmware-flasher](https://github.com/bigclownlabs/bch-firmware-flasher) - Command-line nástroj **bcf** napsaný v Pythonu pro snadné nahrávání předpřipravených firmwarů do Core Module nebo USB Dongle. Standardně nainstalovaný v image [BigClown Raspbian]({{< relref "doc/raspberry-pi-installation.cs.md" >}}).
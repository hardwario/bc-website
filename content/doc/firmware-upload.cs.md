---
title: Nahrávání firmware
slug: firmware-upload
---

Je několik způsobů jak do {{<shop "Core Module">}} nahrát firmware. Začneme tím nejjednodušším a postupně si popíšeme všechny možnosti. Možnosti se liší podle verze {{<shop "Core Module">}}, nebo pokud se jedná o SoM Cloony.

# Python utilita `bcf`

Utilita BigClown Firmware automaticky stáhne z GitHubu zkompilované firmwary všech projektů a nabídne snadný způsob jak jej nahrát do zařízení.

Pokud používáte BigClown Raspbian obraz pro Raspberry Pi, utilita by měla být již předinstalovaná. V opačném případě utilitu nainstalujte za pomocí:

        pip install bcf

{{% note "info" %}}V některých systémech a verzí Pythonu použijte příkaz pip3 pro Python3 namísto obyčejného pip.{{% /note %}}

Utilita `bcf` zobrazí základní napovědu, pokud neuvedete žádný parametr.

Jako první je potřeba aktualizovat seznam firmwarů

        bcf update

{{% note "info" %}}Pokud budete používat DFU flashování, je potřeba abyste všechny `bcf` příkazy včetně prvního `bcf update` volali vždy se `sudo bcf update`. {{% /note %}}

        > bcf update
        update data for repo bigclownlabs/bcf-car-proximity-sensor
        update data for repo bigclownlabs/bcf-color-kid-game
        update data for repo bigclownlabs/bcf-generic-node
        update data for repo bigclownlabs/bcf-usb-gateway
        update data for repo bigclownlabs/bcf-reloading-robot-node
        update data for repo bigclownlabs/bcf-scissor-lift-node
        ...

Nyní si příkazem můžeme vypsat všechny firmwary:

        > bcf list
        bigclownlabs/bcf-climate-station:firmware-144pixel.bin:v1.0.1
        bigclownlabs/bcf-generic-node:firmware-battery-mini.bin:v1.3.0
        bigclownlabs/bcf-generic-node:firmware-battery.bin:v1.3.0
        bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin:v1.3.0
        bigclownlabs/bcf-skeleton-core-module:firmware.bin:v1.0.0
        bigclownlabs/bcf-usb-dongle:firmware.bin:v0.0.0-test
        bigclownlabs/bcf-usb-gateway:firmware.bin:v1.3.0
        ...

A provedeme nahrání

**TODO** Jak přehledně vysvětlit kdy je potřeba použít DFU, kdy FTDI UART flash?? Jak do toho zakomponovat core module s nativním usb, core module s FTDI a cloony s externím převodníkem?

# dfu-util

# Ozone

# GDB

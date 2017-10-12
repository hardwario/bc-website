---
title: Přihlášení k Raspberry Pi
slug: prihlaseni-k-raspberry-pi
---

Tento návod popisuje způsob přihlášení k Raspberry Pi pomocí vzdáleného terminálu prostřednictvím protokolu SSH.

{{% note "info" %}}Zkratka SSH znamená "Secure Shell". Zjednodušeně to lze vnímat jako zabezpečené připojení do příkazové řádky Raspberry Pi po síti.{{% /note %}}

Pokud ještě nemáte nainstalované Raspberry Pi, přejděte nejdříve do návodu [Instalace Raspberry Pi]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}}).

Přihlásit se lze 2 způsoby:

1. **Použitím IP adresy**

    V tomto případě si musíte zjistit, jakou adresu přidělil DHCP server vašemu Raspberry Pi.

    {{% note "info" %}}IP adresu klienta lze obvykle zjistit prostřednictvím konfiguračního administrátorského rozhraní vašeho routeru v sekci `DHCP Clients`, případně `LAN Status`, apod.{{% /note %}}

2. **Použitím DNS názvu**

    Ten může být buď:

    * `hub.local` v případě BigClown Raspbian distribuce, nebo:
    * `raspberry.local` v případě originální Raspbian distribuce.

## Návod pro Windows

1. Stáhněte si program [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

2. Spusťte PuTTY a vytvořte SSH relaci:

    * Použijte hostname `hub.local` (případně `raspberry.local` pokud používáte originální distribuci Raspbian), nebo IP adresu Raspberry Pi.
    * Zadejte login `pi`.
    * Zadejte heslo `raspberry`.
    * Relaci si pojmenujte a uložte pro budoucí opětovné přihlášení.

## Návod pro macOS a Linux

1. Spusťte aplikaci `Terminal` a připojte se k Raspberry Pi buď:

    * použitím IP adresy místo `...`:

            ssh pi@...

    * nebo v případě BigClown Raspbian distribuce použitím DNS názvu `hub.local`:

            ssh pi@hub.local

    * případně DNS názvu `raspberry.local` pokud používáte originální distribuci Raspbian:

            ssh pi@raspberry.local

2. Zadejte heslo `raspberry`.

## Změna hesla

Po prvním přihlášení nezapomeňte změnit výchozí heslo. Změnu lze provést následujícím příkazem:

    passwd

## Aktualizace systému

Z důvodu bezpečnosti a stability je důležité mít systém aktualizovaný. Systém se skládá z tzv. balíčků a ty lze aktualizovat následujícím příkazem:

    sudo apt update && sudo apt upgrade

## Závěr

{{% note "success" %}}V tomto návodu jsme si ukázali, jak se lze do Raspberry Pi přihlásit prostřednictvím protokolu SSH, jak si změnit heslo a také proč a jak lze aktualizovat balíčky v systému.{{% /note %}}

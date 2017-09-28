---
title: Instalace Raspberry Pi
slug: instalace-raspberry-pi
---

{{% note "warning" %}}Pokud už máte Raspberry Pi, na kterém běží originální distribuce Raspbian, přejděte do kapitoly [Instalace v originální distribuci Raspbian]({{< relref "#instalace-v-originální-distribuci-raspbian" >}}).{{% /note %}}

Tento návod vás krok za krokem provede instalací Raspberry Pi. Návod je odzkoušený pro Raspberry Pi 3 (Model B), ale měl by fungovat i pro starší Raspberry Pi 2.

{{% note "info" %}} Raspberry Pi je malý, dostupný, jednodeskový počítač, který umožňuje provoz  operačního systému Linux. BigClown využívá tento systém pro zpracování informací ze senzorů, ovládání aktorů, rozhodovací logiku pro automatizaci, ukládání dat, nebo slouží jako brána pro připojení případných cloudových služeb.{{% /note %}}

V následujícím postupu budeme instalovat Linuxovou distribuci BigClown Raspbian. Raspbian je oficiální a nejrozšířenější distribucí Linuxu pro Raspberry Pi. BigClown udržuje modifikovanou verzi této distribuce, která usnadňuje některé kroky a obsahuje předinstalované balíčky, které jsou pro BigClown klíčové.

## Požadavky

* Raspberry Pi 3 (Model B)
* MicroSD karta s minimální kapacitou 4 GB
* MicroSD čtečka karet (+ případně adaptér pro SD karty)
* Ethernetový kabel
* Desktop PC nebo notebook
* Router (nebo LAN switch) s nastaveným DHCP serverem
* Jeden z následujících operačních systémů:
    * Windows 7, 8.x, 10 (32bitová nebo 64bitová verze)
    * macOS (otestováno na verzi 10.12.x)
    * Ubuntu (otestováno na verzi 16.04)

## Příprava SD karty

V následujících krocích si připravíme MicroSD kartu pro Raspberry Pi. Přejděte na postup jedné z podporovaných platforem:

* [Návod pro Windows]({{< relref "#návod-pro-windows" >}})
* [Návod pro macOS]({{< relref "#návod-pro-macos" >}})
* [Návod pro Ubuntu]({{< relref "#návod-pro-ubuntu" >}})

## Návod pro Windows

1. Vložte MicroSD kartu do čtečky karet.

2. Stáhněte si aktuální verzi obrazu BigClown Raspbian:

    {{% download "Stažení" "https://github.com/bigclownlabs/bc-raspbian/releases" %}}

3. Rozbalte stažený obraz.

    {{% note "info" %}}Pro tento krok můžete použít nástroj [7-Zip](http://www.7-zip.org).{{% /note %}}

4. Zapište stažený obraz `bc-raspbian-VER-armhf-rpi.img` na MicroSD kartu (nahraďte `VER` skutečnou verzí staženého obrazu).

    {{% note "info" %}}Pro tento krok můžete použít nástroj [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/files/latest/download).{{% /note %}}

    {{% note "warning" %}}Nástroj Win32 Disk Imager musí běžet s právy správce operačního systému.{{% /note %}}

5. Vložte MicroSD kartu do Raspberry Pi.

6. Připojte Ethernet kabel k Raspberry Pi.

7. Připojte USB napájecí adaptér k Raspberry Pi.

8. Přihlašte se pomocí SSH do Raspberry Pi. Postup tohoto kroku je popsaný v návodu [Přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}}).

## Návod pro macOS

1. Vložte MicroSD kartu do čtečky karet.

2. Stáhněte si aktuální verzi obrazu BigClown Raspbian:

    {{% download "Stažení" "https://github.com/bigclownlabs/bc-raspbian/releases" %}}

3. Otevřete aplikaci `Terminal` a přejděte do složky, kde máte stažený obraz, např.:

        cd ~/Downloads

4. Rozbalte stažený obraz (nahraďte `VER` skutečnou verzí staženého obrazu):

        unzip bc-raspbian-VER-armhf-rpi.zip

5. Najděte identifikátor disku (ten je ve tvaru `/dev/diskX`):

        diskutil list

6. Musíte odpojit disk (nahraďte `X` správným identifikátorem disku):

        diskutil unmountDisk /dev/diskX

7. Zapište stažený obraz na MicroSD kartu (nahraďte `VER` skutečnou verzí staženého obrazu a `X` správným identifikátorem disku):

        sudo dd if=bc-raspbian-VER-armhf-rpi.img of=/dev/rdiskX bs=1m

    {{% note "info" %}}`sudo` znamená že proces začne s oprávněním správce a může vyžadovat zadání tvého hesla (pokud máte práva správce).{{% /note %}}

    {{% note "warning" %}}Tento proces může trvat několik minut.{{% /note %}}

    {{% note "warning" %}}Pokud narazíte na chybu `Permission denied`, ujistěte se, že vaše MicroSD karta není chráněna proti zápisu (např. přepínačem na adaptéru SD karty).{{% /note %}}

8. Vysuňte MicroSD kartu z operačního systému (nahraďte `X` správným identifikátorem disku):

        diskutil eject /dev/diskX

9. Vložte MicroSD kartu do Raspberry Pi.

10. Připojte Ethernet kabel k Raspberry Pi.

11. Připojte USB napájecí adaptér k Raspberry Pi.

12. Přihlašte se pomocí SSH do Raspberry Pi. Postup tohoto kroku je popsaný v návodu [Přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}}).

## Návod pro Ubuntu

1. Vložte MicroSD kartu do MicroSD čtečky karet.

2. Stáhněte si aktuální verzi obrazu BigClown Raspbian:

    {{% download "Stažení" "https://github.com/bigclownlabs/bc-raspbian/releases" %}}

3. Otevřete aplikaci `Terminal` a přejděte do složky, kde máte stažený obraz, např.:

        cd ~/Downloads

4. Rozbalte stažený obraz (nahraďte `VER` skutečnou verzí staženého obrazu):

        unzip bc-raspbian-VER-armhf-rpi.zip

5. Najděte identifikátor disku (ten je ve tvaru `/dev/diskX`):

        lsblk

6. Musíte odpojit diskové oddíly (nahraďte `X` správným identifikátorem):

        sudo umount /dev/sdX?

    {{% note "info" %}}`sudo` znamená že proces začne s oprávněním správce a může vyžadovat zadání tvého hesla (pokud máte práva správce).{{% /note %}}

7. Zapište stažený obraz na MicroSD kartu (nahraďte `VER` verzí staženého obrazu a `X` správným identifikátorem disku):

        sudo dd if=bc-raspbian-VER-armhf-rpi.img of=/dev/sdX bs=1M status=progress

    {{% note "warning" %}}Tento proces může trvat několik minut.{{% /note %}}

    {{% note "warning" %}}Pokud narazíte na chybu `Permission denied`, ujistěte se, že vaše MicroSD karta není chráněna proti zápisu (např. přepínačem na adaptéru SD karty).{{% /note %}}

8. Vysuňte MicroSD kartu z operačního systému (nahraďte `X` správným identifikátorem disku):

        eject /dev/sdX

9. Vložte MicroSD kartu do Raspberry Pi.

10. Připojte Ethernet kabel k Raspberry Pi.

11. Připojte USB napájecí adaptér k Raspberry Pi.

12. Přihlašte se pomocí SSH do Raspberry Pi. Postup tohoto kroku je popsaný v návodu [Přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}}).

## Odlišnosti od originální distribuce Raspbian

Toto je stručný seznam odlišností:

* Hostname je `hub` místo `raspberrypi`.

* Časová zóna je nastavená na Europe/Prague.

* Do seznamu APT repozitářů byly doplněny následující záznamy:

    * https://repo.bigclown.com
    * https://apt.dockerproject.org/repo

* Implicitně jsou také nainstalované tyto balíčky:

    * mosquitto
    * mosquitto-clients
    * docker
    * htop
    * git
    * python3.4
    * python3-paho-mqtt
    * python3-venv
    * python3-pip
    * bc-common
    * bc-gateway
    * bc-workroom-led-strip
    * bc-workroom-blynk

## Instalace v originální distribuci Raspbian

{{% note "warning" %}}Následující postup aplikujte pouze v případě, že používáte Raspberry Pi, na kterém běží originální distribuce Raspbian. Jedná se o alternativní způsob instalace k předchozímu postupu.{{% /note %}}

1. Přihlašte se pomocí SSH do Raspberry Pi. Postup tohoto kroku je popsaný v návodu [Přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}}).

2. Nainstalujte tyto závislosti:

        sudo apt install apt-transport-https wget

3. Přidejte BigClown APT repositáře do seznamu zdrojů:

        sudo sh -c 'echo "deb https://repo.bigclown.com/debian jessie main" > /etc/apt/sources.list.d/bigclown.list'

4. Přidejte PGP klíč APT repozitáře:

        wget https://repo.bigclown.com/debian/pubkey.gpg -O - | sudo apt-key add -

5. Proveďte aktualizaci indexu balíčku a jejich upgrade:

        sudo apt update && sudo apt upgrade

6. Nyní je možné instalovat jednotlivé balíčky:

    * Základní balíček pro Smart LED Strip (Workroom) projekt (hardware interface):

            sudo apt install bc-workroom-gateway

    * LED strip plugin pro Smart LED Strip (Workroom) projekt:

            sudo apt install bc-workroom-led-strip

    * Blynk plugin pro Smart LED Strip (Workroom) projekt:

            sudo apt install bc-workroom-blynk

## Připojení Raspberry Pi 3 k WiFi

Od Raspberry Pi verze 3 přibyla možnost připojení k WiFi síti.

Postup připojení je následující:

1. Otevřete pro editaci soubor `wpa_supplicant.conf`:

        sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

2. Do souboru vložte následující šablonu a upravte příslušné položky:

        network={
            ssid="jméno_wifi_sítě"
            psk="heslo_pro_wifi"
        }

4. Uložte soubor (`Ctrl+X`) a potvrďte jméno souboru (`y` + `Enter`).

5. Restartujte Raspberry Pi:

        sudo reboot

6. Přihlašte se a ověřte si pomocí příkazu `iwlist`, že je připojení aktivní.

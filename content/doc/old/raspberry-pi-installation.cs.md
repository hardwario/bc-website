# Raspberry Pi - Instalace

<!-- toc -->

{% set raspbian_zip = "bc-raspbian-v1.0.1-armhf-rpi.zip" %}
{% set raspbian_img = "bc-raspbian-v1.0.1-armhf-rpi.img" %}
{% set note_sudo = "**Note** “sudo” znamená že proces začne s oprávněním správce a může vyžadovat zadání tvého hesla (pokud máš práva správce)." %}

> **Important** Pokud už máš své Raspberry Pi a na něm běží Raspbian, pak přeskoč na [Instalace BigClown balíčků na existující systém](#instalace-bigclown-balíčků-na-existující-systém) kde se dozvíš, jak nainstalovat BigClown balíčky na existující systém.

Tento návod tě krok za krokem provede instalací Raspberry Pi.
Návod byl otestován na Raspberry Pi 3 (Model B), ale měl by fungovat i pro Raspberry Pi 2.

Budeme instalovat BigClown verzi Raspbianu - oficiální a nejpopulárnější distribuci Linuxu pro Raspberry Pi.


## Požadavky

* Raspberry Pi 3 (Model B)
* Minimálně 4 GB MicroSD card
* MicroSD čtečka karet
* Ethernetový kabel
* Desktopový PC nebo notebook
* Router (nebo LAN switch) s nastaveným DHCP serverem
* Jeden z těchto operačních systémů:
  * Windows 7, 8.x, 10 (32-bit nebo 64-bit verze)
  * macOS (otestována verze 10.12.1)
  * Linux (otestováno na Ubuntu 16.04 LTS)


## Příprava MicroSD karty

1. Vlož MicroSD kartu do MicroSD čtečky karet.

2. Stáhni si aktuální verzi BigClown Raspbian image z https://github.com/bigclownlabs/bc-raspbian/releases.


### Návod pro Windows

3. Rozbal si stažený image.

   Můžeš pro to použít [7-Zip](http://www.7-zip.org).

4. Zapiš `{{ raspbian_img }}` na MicroSD kartu.

   Můžeš pro to použít [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/files/latest/download).

   > **Poznámka** Win32 Disk Imager musí běžet s právy správce.


### Návod pro macOS

3. Otevři si Terminal a přejdi do složky stahování, např.:

   ```
   cd ~/Downloads
   ```

4. Rozbal stažený image:

   ```
   unzip {{ raspbian_zip }}
   ```

5. Vlož MicroSD kartu do svého Macu a najdi identifikátor disku (může to být /dev/diskX):

   ```
   diskutil list
   ```

6. Musíš odpojit disk (nahraď X správným identifikátorem):

   ```
   diskutil unmountDisk /dev/diskX
   ```

7. Zapiš image na MicroSD kartu (nahraď X správným identifikátorem):

   ```
   sudo dd if={{ raspbian_img }} of=/dev/rdiskX bs=1m
   ```

   > {{ note_sudo }}

  > **Info** Bude to chvíli trvat.
  > **Tip** Pokud se objeví hláška “permission denied”, ujisti se, že tvá MicroSD karta není chráněna proti zápisu (např. adaptérem SD karty).

8. Vysuň kartu (nahraď X správným identifikátorem):

   ```
   diskutil eject /dev/diskX
   ```


### Návod pro Linux

3. Otevři si Terminal a přejdi do složky stahování, např.:

   ```
   cd ~/Downloads
   ```

4. Rozbal stažený image:

   ```
   unzip {{ raspbian_zip }}
   ```

5. Vlož MicroSD kartu do svého PC a najdi identifikátor disku (bude to /dev/diskX):

   ```
   lsblk
   ```

6. Musíš odpojit všechny diskové oddíly (nahraď X správným identifikátorem):

   ```
   sudo umount /dev/sdX?
   ```

   > {{ note_sudo }}

7. Zapiš image na MicroSD kartu (nahraď X správným identifikátorem):

   ```
   sudo dd if={{ raspbian_img }} of=/dev/sdX bs=1M status=progress
   ```

   > **Info** Bude to chvíli trvat.

   > **Tip** Pokud se objeví hláška “permission denied”, ujisti se, že tvá MicroSD karta není chráněna proti zápisu (např. adaptérem SD karty).

8. Vysuň kartu (nahraď X správným identifikátorem):

   ```
   eject /dev/sdX
   ```


## Nastartuj Raspberry Pi

1. Vlož MicroSD kartu do Raspberry Pi.

2. Připoj Ethernet kabel k Raspberry Pi.

3. Připoj USB napájecí adaptér k Raspberry Pi.


## Připojení k Raspberry Pi

V dalším kroku se připojíme k Raspberry Pi přes SSH terminál.

Můžeš se k němu připojit dvěmi způsoby:

 1. Použitím IP adresy (musíš si zjistit jakou adresu přidělil DHCP server tvému Raspberry Pi).

 2. Použitím zeroconf mechanismu skrze přístup k `hub.local` hostu (tento způsob by měl být funkční pro všechny typy PC).


### Návod pro Windows

1. Stáhni si [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

2. Otevři PuTTY a SSH relaci:

   * Použij hostname: `hub.local` nebo *IP adresu Raspberry Pi*

   * Zadej login: `pi`

   * Zadej heslo: `raspberry`


### Postup pro macOS a Linux

1. Otevři si Terminal a připoj se k Raspberry Pi:

   1. Použij IP adresu:

      ```
      ssh pi@(IP adresa Raspberry Pi)
      ```

   2. nebo použij zeroconf název:

      ```
      ssh pi@hub.local
      ```

   3. Zadej heslo: `raspberry`


## Proveď update tvé instalace

V případě prvního připojení NEZAPOMEŇ ZMĚNIT DEFAULTNÍ HESLO.
Můžeš to provést následujícím příkazem:

```
passwd
```

Z bezpečnostních důvodů a pro zajištění stability je důležité mít systém aktuální.

Pro update systému použij tento příkaz:

```
sudo apt update && sudo apt upgrade
```


## Rozdíly oproti oficiálnímu Raspbianu

Poč jsme vůbec vytvořili vlastní implementaci Raspbian distribuce?
Chtěli jsme ti usnadnit proces instalace a zautomatizovat některé naše věci (pro automatizaci používáme Travis CI).

Toto je stručný výpis změn:

* Hostname je `hub` místo `raspberrypi`.

* Timezone je nastavena na Europe/Prague.

* Následující repozitáře byly doplněny do APT zdrojů:

  * https://repo.bigclown.com
  * https://apt.dockerproject.org/repo

* Nainstalované balíčky:

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


## Instalace BigClown balíčků na existující systém

> **Important** Tento postup použij pouze pokud máš vlastní Raspberry Pi a na něm běžící Raspbian distribuci a pokud jsi vynechal všechny předcházející kroky.

1. Připoj se k SSH terminálu.

2. Nainstaluj závislosti:

   ```
   sudo apt install apt-transport-https wget
   ```

3. Přidej BigClown APT repositáře do seznamu zdrojů:

   ```
   sudo sh -c 'echo "deb https://repo.bigclown.com/debian jessie main" >/etc/apt/sources.list.d/bigclown.list'
   ```

4. Přidej APT PGP klíč:

   ```
   wget https://repo.bigclown.com/debian/pubkey.gpg -O - | sudo apt-key add -
   ```

5. Proveď update tvé instalace:

   ```
   sudo apt update && sudo apt upgrade
   ```

6. Nyní si můžeš jednotlivě nainstalovat balíčky:

   * Základní balíček pro Smart LED Strip (Workroom) projekt (hardware interface):

     ```
     sudo apt install bc-workroom-gateway
     ```

   * LED strip plugin pro Smart LED Strip (Workroom) projekt:

     ```
     sudo apt install bc-workroom-led-strip
     ```

   * Blynk plugin pro Smart LED Strip (Workroom) projekt:

     ```
     sudo apt install bc-workroom-blynk
     ```

## Připojení Raspberry Pi 3 na WiFi

S verzí Raspberry Pi 3 přibyla možnost připojení k WiFi síti.

Pro editaci nastavení připojení k WiFi síti použij příkaz:

```
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```

Do tohoto souboru ulož následující strukturu:

```
network={
    ssid="jméno_WiFi_sítě"
    psk="heslo_pro_WiFi"
}
```

Po uložení (Ctrl+X), potvrzení (y) a Enter se obsah uloží a restartuj Raspberry Pi:

```
sudo reboot
```

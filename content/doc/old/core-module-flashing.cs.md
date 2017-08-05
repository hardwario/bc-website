# Nahrávání firmware


<!-- toc -->


Firmware je zkompilovaný program, který nahraješ do flash paměti mikrokontroléru.

Je několik možností jak do Core Module nahrát firmware:

* Pomocí USB kabelu přes micro USB konektor
* S pomocí Serial-Wire-Debug (SWD) programátoru s možností ladění

Oba tyto postupy jsou vysvětlené v kapitolách níže.


## Nahrávání přes USB bootloader

Bootloader je malý program, který i do prázdného mikrokontroléru dovede nahrát požadovaný program.
Bootloader je uložen v paměti pouze pro čtení (ROM) a nezabírá tak cenné místo ve flash paměti a ani jej nelze omylem vymazat.
Díky bootloaderu můžeme náš vlastní zkompilovaný program nahrát přes USB přímo do flash paměti.

Bootloader je spuštěn po resetu nebo po připojení napájení k procesoru pokud je signál na pinu BOOT v logické 1.
To je také důvodem, proč Core Module má dvě tlačítka `RESET` a `BOOT` - aby jsi mohl tento bootloader snadno spustit.
Skok do bootloaderu je možný také programově přes `bc_dfu` module nebo pomocí pinů `RESET` a `BOOT`, které jsou vlevo dole na 14 pinovém konektoru.

Bootloader umí nahrát program přes USB, kdy se zařízení chová jako DFU class (device firmware upgrade). Toto USB rozhraní budeme při nahrávání programu používat.
Další možnost je naprogramovat jej přes sériovou linku USART1 nebo USART2. Tuto možnost využívat nebudeme, primární je pro nás USB update.


## Nahrávání programu přes USB DFU Bootloader


Spuštění USB DFU bootloaderu provedeme následovně:

1. Zkontroluj, že **USB kabel** je zapojený do tvého počítače.

* Stiskni a **stále drž** tlačítko **BOOT** na Core Module.

   BOOT tlačítko je napravo a je označeno písmenem **B**.

* Krátce stiskni tlačítko **RESET** na Core Module. V tomto okamžiku musíš stále držet druhé tlačítko **BOOT**.

   Tlačítko RESET je na levé straně a je označeno písmenem **R**.

* Uvolni tlačítko **RESET**

* Uvolni tlačítko **BOOT**

V tomto okamžiku se Core Module připojí k počítači jako USB DFU zařízení.

Následující kapitoly níže popisují postup nahrávání firmware na různých operačních systémech.


### Windows 10 64-bit Desktop

Pokud budeš používat náš instalační balíček s Visual Studio Code, pak stačí nainstalovat ovladač přes Zadig. Program dfu-utils není třeba stahovat.

1. Otevři příkazový řádek (příkaz `cmd`).

* Změň aktuální adresář (s pomocí `cd`) do složky se souborem `firmware.bin`.

* Stáhni a spusť [Zadig 2.2](http://zadig.akeo.ie/downloads/zadig_2.2.exe).

   1. Vyber "Options" -> "List All Devices".

   * Vyber ze seznamu zařízení "STM32 BOOTLOADER".

   * Vyber "WinUSB" Ovladač k instalaci.

   * Klikni na tlačítko "Reinstall Driver". Při první instalaci "Replace Driver".
    Tímto jsme nainstalovali správný ovladač pro následující program dfu-util.

* Stáhni [dfu-util-0.9-win64.zip](http://dfu-util.sourceforge.net/releases/dfu-util-0.9-win64.zip).

* Rozbal `dfu-util-static.exe` do složky s firmwarem.

* **Ujisti se, že Core Module je v DFU módu** viz. předchozí kapitola.

* Nahraj firmware do Core Module zadáním příkazu:

    `dfu-util-static -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware.bin`

. Po úspěšném nahrání se Core Module automaticky spustí náš program (příkaz `:leave`)

> Core Module musí být přepnut do DFU módu před provedením příkazu `dfu-util`.
> Postup je v kapitole [Nahrávání programu přes USB DFU Bootloader](#nahravani-programu-pres-usb-dfu-bootloader).


### macOS Desktop

1. Otevři terminál.

2. Změň aktuální adresář (příkazem `cd`) do složky s programem `firmware.bin`.

3. Ujisti se, že máš nainstalovaný [Homebrew](http://brew.sh) .

4. Nainstaluj `dfu-util` balíček příkazem:

   `brew install dfu-util`

* **Ujisti se, že Core Module je v DFU módu** viz. předchozí kapitola.

5. Nahraj program do Core Module příkazem:

   `dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware.bin`

. Po úspěšném nahrání se Core Module automaticky spustí náš program (příkaz `:leave`)

> Core Module musí být přepnut do DFU módu před provedením příkazu `dfu-util`.
> Postup je v kapitole [Nahrávání programu přes USB DFU Bootloader](#nahravani-programu-pres-usb-dfu-bootloader).


### Ubuntu Desktop

1. Otevři terminál.

2. Změň aktuální adresář (příkazem `cd`) do složky s programem `firmware.bin`.

3. Nainstaluj `dfu-util` balíček příkazem:

   `sudo apt install dfu-util`

* **Ujisti se, že Core Module je v DFU módu** viz. předchozí kapitola.

5. Nahraj program do Core Module příkazem:

   `dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware.bin`

   . Po úspěšném nahrání se Core Module automaticky spustí náš program (příkaz `:leave`)

> Core Module musí být přepnut do DFU módu před provedením příkazu `dfu-util`.
> Postup je v kapitole [Nahrávání programu přes USB DFU Bootloader](#nahravani-programu-pres-usb-dfu-bootloader).



## Programování přes SWD (Serial-Wire-Debug)


Programováním přes SWD konektor můžeš program nejen nahrát, ale i krokovat a sledovat proměnné přímo za běhu programu.
Je potřeba speciální hardwarový nástroj nazývaný **debugger**.
BigClown používá a doporučuje J-Link od firmy Segger, ale je možné použít i jiný SWD debugger.

Debugger se na Core Module připojuje na 10 pinový programovací konektor.

> Buď opatrný, jakým směrem konektor zapojuješ.

TODO: Vložit obrázek.


# Firmware Files

Firmware si můžeš naprogramovat s pomocí [BigClown API](http://sdk.bigclown.com) a zkompilovat sám.
SDK nalezneš na našem [GitHub](https://github.com/bigclownlabs) účtu.

Můžeš si stáhnout předkompilované binární soubory pro [ Smart LED Strip (Workroom) project](smart-led-strip.md):

* [Base unit a Remote unit](https://github.com/bigclownlabs/bcp-wireless-circus/releases/latest)


## Popis funkčnosti Remote unit pro Smart LED Strip (Workroom) project

* Automatické posílání naměřené teploty a vlhkosti každých 30 sekund.

* Odeslání zprávy při stisku tlačítka.

* Odeslání zprávy při změně logické hodnoty na pinu P8. Pin má nastaven pull-up, takže reaguje pokud jej propojíš se zemi (GND)


# Nastavení vývojového prostředí


Pro nastavení vývojového prostředí a SDK [postupuj podle tohoto návodu](core-module-setup.md).

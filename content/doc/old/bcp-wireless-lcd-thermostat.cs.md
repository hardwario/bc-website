

# Bezdrátový LCD termostat

<!-- toc -->

## Popis funkce

Praktická ukázka jak s BigClown vytvořit základní termostat.
Tento projekt se skládá z bezdrátové části `Remote` a základní jednotky `Base`.
Remote jednotka je bateriově napájená.
V pravidelných intervalech měří teplotu a zobrazuje ji na svém displeji.
Na displeji lze taky nastavit enkodérem požadovanou teplotu.
Naměřená a nastavená teplota se bezdrátově posílá na Base jednotku každé 3 vteřiny.

Na Base jednotce je Power Module s výkonovým relé, které sepne v případě, že je potřeba zapnout vytápění.

Zároveň je možné Base jednotku připojit přes USB například do Raspberry Pi nebo jiného počítače a veškeré veličiny sledovat i na dálku.

![Remote jednotka](images\bcp-wireless-lcd-thermostat\placeholder.jpg)


## Popis zařízení


1. Remote obsahuje
    * [Core Module](https://obchod.bigclown.cz/products/core-module)
    * [LCD Module](https://obchod.bigclown.cz/collections/moduly)
    * [Encoder Module](https://obchod.bigclown.cz/collections/moduly)
    * [Battery Module](https://obchod.bigclown.cz/products/battery-module)

* Base obsahuje
    * [Core Module](https://obchod.bigclown.cz/products/core-module)
    * [Power Module](https://obchod.bigclown.cz/products/power-module)
    * Volitelně [Raspberry Pi](https://obchod.bigclown.cz/products/raspberry-pi-3-set) s [USB kabelem](https://obchod.bigclown.cz/products/usb2-0-cable-am-b-micro-0-6m) pro vzdálené sledování


## Firmware


Projekt naleznete na GitHubu. Každá jednotka má svou vlastní podsložku `base` a `remote`.

https://github.com/bigclownlabs/bcp-wireless-lcd-thermostat


## Sestavení a programování modulů


1. Sestavte Remote jednotku podle obrázku
* Sestavte Base jednotku podle obrázku
* Naprogramujte firmware pro obě jednotky z repozitářů z předchozí kapitoly. Můžete postupovat [podle návodu jak nastavit vývojové prostředí](core-module-setup.md) a [jak naprogramovat firmware](core-module-flashing.md).
* Po zapnutí je třeba obě jednotky spárovat. Stiskněte na 3 vteřiny tlačítko `B` na Base jednotce. Rozbliká se rychle červená LED. Nyní je Base jednotka ve stavu párování. Remote jednotku spárujete tak, že stisknete enkodér taky na 3 vteřiny (nebo tlačítko `B`).
* Nyní začnou z Remote jednotky chodit rádiové pakety. Každý paket je signalizován krátkým bliknutím červené LED na Base jednotce.


## Integrace s Raspberry Pi


1. Připojte Base jednotku USB kabelem do Raspberry Pi.
* *TBD*


## Testování


Nyní vyzkoušejte funkci termostatu.
Enkodérem nastavte požadovanou teplotu na vyšší, než je aktuálně naměřená.
Na Base jednotce sepne relé a vedle něj se rozsvítí zelená signalizační LED.

Poté nastavte enkodérem nižší teplotu, než je naměřená. Za pár vteřin signalizační LED na Base jednotce zhasne a relé vypne.


## Tipy a triky


Jednoduchou úpravou v kódu je možné projekt využít i na spouštění klimatizace. Nebo lze ke měření teploty využít senzoru na Base jednotce a na Remote budete jen nastavovat požadovanou teplotu.

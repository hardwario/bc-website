# SDK, ukázky a projekty

Zde je seznam míst, kde najdeš funkce a zdrojové kódy na kterých můžeš stavět své projekty.
Dokumentace máme hodně a ne vše je na jednom místě.

<!-- toc -->


## Generovaná dokumentace SDK


V [SDK](http://sdk.bigclown.com/) v sekci [Modules](http://sdk.bigclown.com/modules.html) najdeš seznam všech modulů a jejich funkcí.
Každá periferie MCU, senzor, tag nebo modul má zde své hotové API.


## Krátké ukázky v SDK dokumentaci


V SDK taky můžou být krátké ukázky na pár řádků jak určitý modul použít.
Například [bc_led](http://sdk.bigclown.com/group__bc__led.html#details) obsahuje malou ukázku jak rozblikat LED.


## Složka \_examples v repozitáři bc-core-module-sdk


Pokročilé ukázky najdeš v repozitáři s SDK a v jeho složce [\_examples](https://github.com/bigclownlabs/bc-core-module-sdk/tree/master/_examples).
Jedná se o komplexnější příklady kdy je někdy potřeba i více souborů.
Obsah ukázky stačí překopírovat do tvé _app_ složky a ukázku zkompilovat.


## Projekty na GitHub


Veškeré repozitáře začínající na **bcf** jsou **BigClown Firmware**.
Jedná se o hotový projekt připravený ke klonování a zkompilování.
Firmware zde znamená, že projekt je mikrokontrolér, ale projekt obsahuje samozřejmě i zdrojové kódy.
[Odkaz na GitHub s filtrem nastaveným na firmwary](https://github.com/bigclownlabs?&q=bcf)

Repozitáře s prefixem bch (BigClown Host) jsou aplikace pro Raspberry Pi, nebo pro PC.


## Ukázky na fóru


Na [BigClown fóru](http://forum.bigclown.com) můžeš také nalézt cenné rady a ukázky.
Například [USB CDC komunikaci](http://forum.bigclown.com/t/bigclown-core-module-hello-world-app-lets-try-to-find-the-shortest-yet-still-understandable/61)


# Popis SDK knihovny (API)


Core Module SDK (nebo-li Software Development Kit) je soubor driverů, examplů, hlavičkových souborů, apod.
Ve firmwarovém projektu ho najdeš v adresáři `sdk`.
Tento adresář je ve skutečnosti Git submodul a jeho zdrojový GitHub repozitář najdeš tady:

**https://github.com/bigclownlabs/bc-core-module-sdk**

To, že je to Git submodul má tu výhodu, že se dá "zamknout" na konkrétní verzi knihoven vůči firmware aplikaci.
Také ho můžeš kdykoliv aktualizovat na poslední (nebo konkrétní verzi).

Než se pustíš do vývoje firmware, měl by jsi vědět o tomhle referenčním manuálu pro SDK:

**http://sdk.bigclown.com**

Na výše uvedeném odkazu najdeš kompletní API referenci BigClown knihoven.


**Tohle jsou principy, kterých se držíme při vývoji API:**


* Jednoduchý přístup ke spodním vrstvám hardwaru.

* Okamžitý deklarativní způsob použití hardwarových produktů BigClown.

* Konzistentní a čistý API návrh napříč celou SDK knihovnou.

* Modulární a objektově orientovaný přístup.

* Samovysvětlující názvy pro funkce, datové typy, proměnné, apod.


## Automatické sestavování dokumentace


Všechny API jsou dokumentovaný pomocí **Doxygen komentářů přímo ve zdrojových kódech**.
Dokumentace se pak generuje automaticky pomocí Travis CI (z větve `master`).
Vygenerovaný obsah se hostuje přes GitHub Pages (z větve `gh-pages`).


Než začneš vývoj firmwaru, [zprovozni si vývojové prostředí](core-module-setup.md).


Více informací o základech Core Module najdeš na [tomto odkaze](core-module.md).

> **Poznámka:** Klidně můžeš používat Core Module jako low-level platformu bez našeho SDK-čka.
>               Tenhle přístup ale vyžaduje hlubší znalosti o embedded vývoji.

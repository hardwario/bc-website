# Blynk - Ovládej moduly BigClown z mobilu

<!-- toc -->

V tomto návodu si ukážeme, jak napojit BigClowní prvky na mobilní aplikaci Blynk.
Blynk ti umožní ovládat všechny funkce pohodlně ze smartphonu nebo tabletu pomocí grafických widgetů. Tlačítkem tak budeš schopen přepnout relé nebo rozsvítit LED pásek, sliderem měnit intenzitu světla a pomocí grafu zobrazit průběh teploty i dalších veličin.

   ![](images/blynk/blynk-on-mobile.png)

## Jak funguje Blynk

Blynk není jen mobilní aplikace, ale také IoT cloud server, který ti umožní ovládat nebo číst data ze senzorů BigClown pomocí mobilu odkudkoliv s připojením k internetu.
Stačí se přihlásit pod svým uživatelským účtem.
Stanice Bigclown si vyměňuje data se serverem i když není mobilní aplikace připojena.
V aplikaci tak lze např. zobrazit historii naměřené teploty za poslední týden nebo nastavit časový spínač na stanovenou hodinu.
Blynk nabízí i "off-line" možnost nainstalovat si server lokálně, ale sami jsme byli překvapení, jak rychlá je odezva při sepnutí relé i při připojení přes vzdálený server.
Zpoždění je při běžném internetovém připojení takřka nepostřehnutelné!
Více o Blynku lze nalézt v [oficiální dokumentaci](http://docs.blynk.cc/).

   ![](images/blynk/blynk-architecture-1.png)


## Potřebné SW/HW vybavení
* telefon / tablet s OS Android 4.0.3 a vyšší nebo iOS 8.0 a vyšší
* minimálně jednu pevnou stanici BigClown tvořenou Core Modulem popř. dalšími prvky, připojenou k Raspberry Pi nebo jinému Linuxovému počítači s nainstalovaným SW balíčkem BigClown Hub s připojením k internetu
* samozřejmě lze napojit i další bezdrátové stanice (Nody)

Podrobný postup zapojení prvků BigClown je popsán ve vzorovém projektu [Smart LED Strip](https://doc.bigclown.cz/smart-led-strip.html).
Kompletní sadu lze také zakoupit ve [zvýhodněném setu](https://obchod.bigclown.cz/products/smart-led-strip-set).
Tento návod doplňuje vzorový projekt Smart LED strip, ale slouží také jako obecný návod pro všechny ostatní BigClowní projekty s Blynkem.

## Instalace a založení účtu v programu Blynk

1. Nainstaluj Blynk na svoje zařízení (aplikace je dostupná na Google Play a App Store).
2. Spusť Blynk.
3. Vytvoř si uživatelský účet (Create New Account).

## Vytvoření Blynk projektu

4. Vytvoř nový projekt:

   ![](images/blynk/blynk-create-project-1.png)

5. Zvol název projektu (*Project Name*) a jako HW *Generic Board*.
Vyber způsob komunikace a stiskni *Create*.

   ![](images/blynk/blynk-create-project-2.png)


## Přidávání widgetů v Blynku

Každý vložený prvek (widget) v Blynku “stojí” nějakou energii, po zaregistrování a přihlášení do aplikace je k dispozici zdarma 2000 bodů, což postačí pro přidání většiny potřebných funkcí pro základní projekty s prvky typu tlačítko nebo slider.
Pokud budeš chtít vytvořit větší projekty s mnoha prvky a využít užitečné funkce jako graf historie pro sledování hodnot ze senzorů, doporučujeme dobít si další energii.
Výhodou je, že volná i zakoupená energie se po odstraněním prvku nebo celého projektu vrací a zároveň ji lze využít nezávisle na platformě (Android, IOS) souběžně na více zařízeních.
Stačí se jen přihlásit pod svým uživatelským účtem.
**Pozor.** Za widgety, které přidáš na pracovní plochu telefonu se energie po jejich odstranění již nevrací!

   ![](images/blynk/blynk-add-widget-1.png)
   ![](images/blynk/blynk-add-widget-2.png)
   ![](images/blynk/blynk-add-widget-3.png)

## Tlačítko

   ![](images/blynk/blynk-add-button.png)

Widget *Button* se hodí pro ovládání relé spínání LED pásku nebo aktivaci různých funkcí.
Tlačítko přidej dotykem na prázdnou plochu v Blynk projektu (popř. ikonou *+Add*).
Do nastavení tlačítka vstoupíš dotykem na něj.
Lze nastavit popis, mapování výstupu (viz níže), stavové hodnoty (typicky 0 / 1), dále logiku (*PUSH* generuje pouze pulz, *SWITCH* trvale drží stav).
Lze si také navolit barvu tlačítka a popisky pro stavy *ON* / *OFF*.

   ![](images/blynk/blynk-button.png)
   ![](images/blynk/blynk-button-relay-setup.png)

## Napojení widgetu na prvky BigClown

   ![](images/blynk/blynk-select-pin-cut.png)

Na tlačítku si ukážeme propojení widgetu se systémem BigClown.
Spojení mezi Blynkem a jednotlivými prvky obstarává blynk-plugin který je součástí SW balíčku BigClown Hub.
Výstup (*OUTPUT*) lze namapovat na tzv. *Virtual Pin* *V0* až *V99*. Konkrétní hodnoty najdeš vždy u vzorových projektů
Např. v projektu Smart LED strip jsou Virtuální Piny přiřazeny následovně:

| Virtual PIN | Popis                                        | Rozsah         | Jednotka |
|:-----------:| -------------------------------------------- |:--------------:|:--------:|
| 0           | senzor teploty                               | -40 až 125     | °C       |
| 1           | senzor relativní vlhkosti                    | 0 až 100       | %        |
| 2           | intenzita světla LED pásku                   | 0 až 1023      |          |
| 3           | zapnutí / vypnutí LED pásku                  | 1 / 0          |          |
| 4           | zapnutí / vypnutí relé                       | 1 / 0          |          |
| 5           | zeRGBa, volba barvy                          | 0 až 1023      |          |
| 6           | Widget Menu: nastavení režimu LED pásku      | 1, 2, 3, 4     |          |
| 7           | ovládání bílé složky LED pásku               | 0 až 1023      |          |
| 8-20        | uživatelské předvolby pro tlačítka           | color          |          |


## Spárování Blynk projektu s BigClownem

Pro jednoznačnou identifikaci Blynk projektu slouží autorizační token.
Token si vygeneruj v Blynku a zadej pomocí SSH v Raspberry Pi, kde běží BigClown Hub.
Postupu dle kroků:

1. Vstup do nastavení projektu:

   ![](images/blynk/blynk-project-setting-cut.png)

2. Nech si poslat autorizační token na email.
   *Tip*: Budou-li se zasláním emailu potíže, zkopíruj token do schránky (ikona “Copy all”) a následně si jej pošli např. emailem ručně:

   ![](images/blynk/blynk-send-auth-token.png)

3. Připoj se k Raspberry Pi a nastav autorizační token pomocí MQTT příkazu:
   ```
   mosquitto_pub -t "plugin/blynk/config/set" -m '{"token":"your_token"}' -r
   ```

   **Pozor.** Závorky uvozující autorizační token jsou součástí příkazu:

  ![](images/blynk/blynk-auth-token.png)

  Poznámka: parametr *-r* (remain) v MQTT zaručí, že se nastavení uchová i po restartu Raspberry Pi

4. Spusť projekt a vyzkoušej funkci tlačítka!

  ![](images/blynk/blynk-project-start-cut.png)

5. Pro přidání dalších prvků nejprve zastav běžící Blynk projekt:

  ![](images/blynk/blynk-project-stop-cut.png)

**První pomoc:**
Pokud se po spuštění projektu Blynk vypíše hláška “Device is offline” zkontroluj:
* připojení k internetu svého telefonu nebo tabletu
* připojení Raspberry Pi k internetu
* zda jsi zadal správný autorizační token


## Slider a Step

  ![](images/blynk/blynk-add-step.png)
  ![](images/blynk/blynk-add-slider.png)

Pro regulaci hodnoty ve vetším rozsahu (např. změna intenzity světla), lze vyžít widget *Slider* nebo alternativně *Step H/V* pro změnu hodnot pomocí tlačítek +/-.

  ![](images/blynk/blynk-slider-brightness-setting.png)


## zeRGBa - ovládání RGB složek

  ![](images/blynk/Blynk-add-zergba.png)

Widget zeRGBa je ideální pro ovládání RGB složek vícebarevných LED pásků.
Pro napojení na adresovatelný RGB pásek zvol v nastavení volbu MERGE a namapuj jej na Virtual PIN 5.
Doporučujeme vypnout volbu *SEND ON RELEASE*, poté je změna barev obnovována průběžně při pohybu po ploše zebry.

Poznámka: Rozsahy hodnot pro ovládání LED pásku jsou zvoleny na výchozích 0 až 1023 (blynk-plugin tyto hodnoty přepočítá na 00 až ff hexa).

  ![](images/blynk/blynk-zergba-setting.png)

## Menu

Prvek Menu může sloužit pro výběr předvoleb.
Ve vzorovém projektu [Smart LED Strip](https://doc.bigclown.cz/smart-led-strip.html) je menu použito pro výběr režimů LED pásku.

  ![](images/blynk/blynk-menu-setting.png)

## Value Display a Labeled Value - čtení hodnot

  ![](images/blynk/blynk-add-value-display-labeled-value.png)

Oba prvky ti umožní sledovat aktuální hodnoty ze senzorů. U widgetu Labeled Value (stojí více energie) si lze navíc přidat i jednotku, která se zobrazuje za hodnotou.
Nastavit lze název, barvu widgetu, rozsah hodnot a frekvenci čtení.

**Tip.** Pokud frekvenci nastavíš na *PUSH*, hodnoty se budou obnovovat automaticky při obdržení dat z jednotek.

  ![](images/blynk/blynk-value-dysplay-temperature.png)

## History Graph - průběhy veličin
Widget History Graph ti umožní sledovat průběhy měřených veličin.
V jednom grafu můžeš zobrazit až čtyři různé veličiny.
Nastavit lze automatický nebo uživatelský rozsah v ose y, zobrazení legendy a časovou osu.

   ![](images/blynk/blynk-history-graph-setting.png)

**Tip.** Pro zvětšení plochy grafu stopni projekt, stiskni a drž prst na ploše widgetu a poté ho pohybem roztáhni.
Zvětšování plochy widgetů je zatím funkční pouze ve verzi pro Android.

## Tab - rozdělení projektu na více záložek
Pokud se ti všechny prvky nevejdou na jednu plochu, lze ji rozšířit pomocí widgetu *Tab*.

   ![](images/blynk/blynk-tab-setting.png)

## Rychlé naklonování projektu

Blynk umožňuje sdílet vytvořené projekty pomocí QR kódu.

Pro vytvoření QR kódu stiskni *Clone* v menu nastavení:

   ![](images/blynk/blynk-clone-project-1.png)

Pro naklonování existujícího projektu postupuj následovně:

1. Stopni projekt a ujisti se, že máš dostatek volné energie:

   ![](images/blynk/blynk-clone-project-2.png)

2. Stiskni horní pravé tlačítko a naskenujte QR kód vybraného projektu:

   ![](images/blynk/blynk-clone-project-3.png)

    Zkus si naklonovat projekt ze vzorového projektu [Smart LED Strip](https://doc.bigclown.cz/smart-led-strip.html):

   ![](images/blynk/blynk-project-smart-led-1-QR.png)

3. Po naklonování každého projektu je nutné aktualizovat autorizační token v Raspberry Pi (každý projekt je v rámci jednoho účtu identifikován unikátním tokenem).



# MySigfox.com tutoriál


<!-- toc -->


## Úvod


V tomto návodu najdeš popsané jak oživit svůj Sigfox modul a snadno otestuješ jeho funkčnost.


## Co budeš potřebovat


* 1x BigClown [Core Module](https://obchod.bigclown.cz/products/core-module)

* 1x BigClown [Sigfox Module](https://obchod.bigclown.cz/products/sigfox-module)

_Sigfox Module musí být včetně [předplacené konektivity na 3 roky](https://obchod.bigclown.cz/products/sigfox-module-predplatne-na-3-roky)._


## Vytvoření HTTP endpointu


Pro zpracování dat potřebuješ vytvořit svou vlastní službu, na kterou bude MySigfox.com posílat JSON metodou HTTP POST.
Pro rychlé otestování je možné použít jednu z mnoha služeb, které tento testovací endpoint dočasně vytvoří.
Využijeme službu https://requestb.in/, ve které si vytvoř testovací Request Bin.
Vytvoří se ti RequestBin URL ve tvaru https://requestb.in/1fbaq5d1.
Tvoje URL bude samozřejmě jiná.
Tuto URL si zkopíruj například do schránky. **Otevřenou stránku nezavírej, později se nám na ní budou zobrazovat příchozí Sigfox zprávy.**


## Nasměrování Sigfox WebHooku


Otevři https://www.mysigfox.com/ a klikni na zaregistrovat zařízení.
Do formuláře přepiš položky


  * ID zařízení - je šestimístný kód na nálepce vedle čárového kódu

![](images/mysigfox.com-tutorial/device_id.jpg)

  * Token - je bezpečnostní heslo, které najdeš na obalu SigFox modulu

![](images/mysigfox.com-tutorial/token.jpg)


  * E-mail - zde zadej svůj email
  * Webhook URL - tady vyplň předchozí URL kterou jsi získal z RequestBin

![](images/mysigfox.com-tutorial/mysigfox.png)

Formulář odešli, zobrazí se ti potvrzení změny údajů.


## Nahrání testovacího firmware


Nyní stačí do Core Module jen nahrát firmware, který pošle nějakou zprávu.
Můžeš vyjít z kódu pro Sigfox detektor pohybu z adresy https://github.com/bigclownlabs/bcf-sigfox-motion-detector
Můžeš si stáhnout i přímo zkompilovaný kód ze záložky release na GitHubu a tuto binárku přes [DFU naprogramovat](core-module-flashing.md) do Core Module.
Pokud nemáš PIR Module, nezoufej. Firmware automaticky po startu odešle testovací paket bez ohledu, zda je PIR Module zapojený.
Po nahrání firmware spuštěný firmware rozsvítí červenou stavovou LED a po odeslání zprávy LED zhasne. Tím je odeslání první zprávy dokončeno.


## Kontrola přijaté zprávy


Nyní se přepni zpět do webového prohlížeče na stránku RequestBin.
Dej obnovit stránku a pokud jsi vše nastavil správně, měl bys vidět přijatý JSON.

![](images/mysigfox.com-tutorial/requestbin.png)

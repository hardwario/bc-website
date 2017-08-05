# Sigfox Detektor Pohybu

![Obrázek BigClown Sigfox Detektor Pohybu - krabička](images//sigfox-motion-detector/sigfox-motion-detector-enclosures.png)


## Úvod


### K čemu projekt slouží


Tento projekt popisuje jednoduchý detektor pohybu osob připojený do sítě Sigfox.
Detekce osob je založená na principu pasivního snímání tepla z pohybujícího se objektu.
K tomu se používá tzv. PIR snímač (zkratka Passive InfraRed).
Výhoda tohoto detektoru spočívá v tom, že je napájený ze dvou alkalických baterií typu AAA (tzv. "mikrotužky").
Detektor nepotřebuje v místě instalace žádný přijímač.

Informace o detekci pohybu se přenáší rádiově přímo do sítě Sigfox.
V internetové službě [MySigfox](https://www.mysigfox.cz) je nastavená webhook URL adresa aplikace [BigClown Motion](https://motion.bigclown.cz), která umožňuje jednoduché propojení na službu Twilio.
Služba Twilio umožňuje odeslat SMS zprávu s libovolným textem na zadané telefonní číslo.


### Příklady použití


* Sledování pohybu osob v hlídaném prostoru
* Monitorování vytíženosti zasedacích místností
* Domácí automatizace (spuštění akce na průchod chodbou, apod.)


![Obrázek detekce PIR](images/sigfox-motion-detector/fresnel-lens.jpg)


### Co je to Sigfox


Sigfox je mezinárodní bezdrátová síť pracující v pásmu 868 MHz (EU), případně 915 MHz (USA).
Hlavní předností této sítě je velmi nízká spotřeba při vysílání ve srovnání s technologií jako je GSM/3G/LTE.
S tím souvisí možnost provozu zařízení z alkalických baterií po dobu i několika let.

Na druhou stranu je tato technologie vhodná pouze pro krátké zprávy (max. 12 bytů) s omezením vysílání ze zařízení na maximálně 140 zpráv za posledních 24 hodin.

Tato technologie je tedy vhodná např. pro monitoring kvality ovzduší, upozornění na vzniklou událost (pohyb, prasklé potrubí, stisk tlačítka), odečet spotřeby energií, apod.
Není vhodná tam, kde je potřeba často vysílat aktualizovaný stav nebo posílat větší objemy dat.

Díky narrow-band technologii a nízké modulační rychlosti je možné zprávy mezi zařízením a základnovou stanicí Sigfox přenášet i na vzdálenost přes 100 km.


### Co budeme potřebovat


#### Hardwarové komponenty


* 1x BigClown [PIR Module](https://obchod.bigclown.cz/products/pir-module)

* 1x BigClown [Core Module](https://obchod.bigclown.cz/products/core-module)

* 1x BigClown [Sigfox Module](https://obchod.bigclown.cz/products/sigfox-module)

* 1x BigClown [Mini Battery Module](https://obchod.bigclown.cz/products/mini-battery-module)

_Sigfox Module musí být včetně [předplacené konektivity na 3 roky](https://obchod.bigclown.cz/products/sigfox-module-predplatne-na-3-roky)._


![Obrázek BigClown Sigfox Detektor Pohybu - rozložené moduly](images//sigfox-motion-detector/sigfox-motion-detector-set.png)

#### Internetové účty


* [Twilio](https://www.twilio.com) - Služba pro posílání SMS


#### Ostatní


* PC nebo laptop s operačním systémem Windows, macOS nebo Linux
* MicroUSB kabel pro připojení PC nebo laptopu ke Core Module
* Internetovou konektivitu


## Sestavení detektoru


1. Našroubujte anténu do SMA konektoru na Sigfox Module.

2. Začněte s Mini Battery Module.

   ![Obrázek Mini Battery Module](images//sigfox-motion-detector/sf-md-mbm.png)

3. Připojte Sigfox Module.

   ![Obrázek Mini Battery Module, Core Module, Sigfox Module](images//sigfox-motion-detector/sf-md-mbm-sf.png)

4. Připojte Core Module.

   ![Obrázek Mini Battery Module a Core Module](images//sigfox-motion-detector/sf-md-mbm-sf-core.png)


5. Připojte PIR Module.

   ![Obrázek Mini Battery Module, Core Module, Sigfox Module, PIR Module](images//sigfox-motion-detector/sf-md-mbm-sf-core-pir.png)

6. Připojte USB kabel do Core Module.

   ![Obrázek Sigfox Detektor Pohybu - zapojení USB](images//sigfox-motion-detector/sf-md-mbm-sf-core-pir-usb.png)

7. Nahrajte firmware do Core Module.

   Stáhněte si [zkompilovaný firmware](https://github.com/bigclownlabs/bcp-sigfox-motion-detector/releases/latest) pro tento projekt (soubor `firmware.bin`).

   V dokumentaci najdete podrobný návod pro [nahrání firmware do Core Module](core-module-flashing.md).

   Zdrojové kódy firmware obsahuje GitHub repozitář [bcp-sigfox-motion-detector](https://github.com/bigclownlabs/bcp-sigfox-motion-detector).

   Více se o firmware a jeho principech dozvíte v dokumentaci v sekci [Firmware SDK tutoriál](core-module-sdk.md).

8. Vložte alkalické baterie do Mini Battery Module.

   ![Obrázek Sigfox Detektor Pohybu - vložení baterií](images//sigfox-motion-detector/sf-md-mbm-sf-core-pir-bat.png)

9. Zkontrolujte, že se LED na Core Module na 30 sekund rozsvítí.

_Poznámka: Pokud se Core Module rychle rozbliká, potom to indikuje poruchu - například se nezadařilo inicializovat spojení se Sigfox Module.
V takovém případě zkontrolujte, že jste postupovali správně při sestavení.
Pokud jste provedli vše správně, obraťte se prosím na naši technickou podporu._


## Popis funkce


Po založení baterií se do sítě Sigfox odvysílá událost o resetu zařízení.

Při detekci pohybu od PIR čidla se do sítě Sigfox odvysílá událost o pohybu.

V okamžiku odvysílání pohybu se nastaví tzv. "mrtvá doba" PIR čidla a po dalších 15 minut se pohyb záměrně nevysílá.
To je z důvodu omezení častého vysílání a rychlého vybití baterií.

Při detekci pohybu se červená LED na Core Module rozsvítí po celou dobu vysílání.
Pokud je detekován pohyb a ještě neuplynula "mrtvá doba" PIR čidla, LEDka pouze krátce blikne.

Každých 24 hodin se odvysílá stav baterie.
Tato zpráva zároveň indikuje funkční spojení v případě, že se nevyskytuje aktivace PIR čidla pohybu.


## Zprovoznění služby


Podle těchto kroků zprovozníte odesílání SMS pro pohybový detektor:


1. Založte si účet na službě Twilio

   Služba Twilio umožňuje odeslat SMS zprávu na zvolené telefonní číslo pomocí REST API.
   Jedná se o placenou službu a platí se za cenu odeslané SMS.
   Službu Twilio budeme ovládat pomocí aplikace [BigClown Motion](motion.bigclown.cz), na kterou jsou data zasílána ze služby [MySigfox](https://www.mysigfox.cz).

   Abychom mohli Twilio napojit, budeme potřebovat znát z účtu Twilio tyto údaje:

     * **Twilio SID** - unikátní identifikátor účtu
     * **Twilio Token** - autentizační token
     * **Twilio Phone Number** - telefonní číslo ze kterého je možné odesílat SMS

   ![Obrázek služby Twilio - účet](images/sigfox-motion-detector/twilio-account.png)

   ![Obrázek služby Twilio - čísla](images/sigfox-motion-detector/twilio-numbers.png)

2. Aktivujte aplikaci BigClown Motion

   Aplikace BigClown Motion jednoduše propojí službu MySigfox s SMS službou Twilio.

   Přejděte do aplikace [BigClown Motion](https://motion.bigclown.cz) a vyplňte následující údaje:

   * **BigClown Sigfox Module ID** - unikátní číslo Sigfox Module vytištěné přímo na modulu (obvykle 6místné)
   * **Twilio SID** (viz předchozí krok)
   * **Twilio Token** (viz předchozí krok)
   * **Twilio Phone Number** - číslo ze kterého se odesílá SMS (viz předchozí krok)
   * **To Phone Number** - číslo kam se má odeslat SMS
   * **Message Text** - požadovaný text odesílané zprávy

   _Používejte pouze mezinárodní formát telefonního čísla bez mezer.
   Příklad: +447481342988_

   ![Obrázek aplikace BigClown Motion](images/sigfox-motion-detector/application-bigclown-motion.png)

3. Nastavte službu MySigfox

   Služba MySigfox propojuje Sigfox backend s uživatelem definovanou webovou službou prostřednictvím požadavku HTTP POST - tzv. webhooku.
   Samozřejmě je možné použít zabezpečenou variantu HTTPS.

   Přejděte do [formuláře služby MySigfox](https://www.mysigfox.cz/form) a vyplňte následující údaje:

   * **ID zařízení** - unikátní číslo Sigfox Module vytištěné přímo na modulu (obvykle 6místné)
   * **Token** - 10ti místný token který jste obdrželi se zakoupeným Sigfox Module do služby MySigfox
   * **E-mail** - váš e-mail (pro využití v případě nutnosti kontaktu provozovatele služby s vámi)
   * **Webhook URL** - vyplňte adresu `https://motion.bigclown.com/update`

   ![Obrázek služby MySigfox](images/sigfox-motion-detector/service-mysigfox.png)


## Závěr


Tento projekt názorně demonstruje snadné použití BigClown prvků k sestavení bezdrátového PIR detektoru pohybu komunikující prostřednictvím sítě SigFox.

Po následování výše uvedeného postupu byste měli dostávat na nastavené telefonní číslo SMS zprávy o pohybu před detektorem pohybu.
Nezapomeňte, že minimální perioda mezi zprávami je 15 minut.

Dále jsme si ukázali integraci služby [Twilio](https://www.twilio.com) s aplikací [BigClown Motion](https://motion.bigclown.cz) a službou [MySigfox](https://www.mysigfox.cz).

# Sigfox Počítadlo Impulzů

## 1.1. O čem projekt je a co ti přinese

Jde o velice jednoduchý projekt jehož cílem je sestavit bezdrátové počítadlo pulzů připojené do sítě sigfox. Počítadlo je mimo jiné vybaveno bateriovým modulem s dvěmy alkalických bateriemi typu AAA (tzv. "mikrotužky"), takže nevyžaduje žádné další napájení.

Informace o počtu pulzů (a stavu baterií) se přenáší přímo do sítě sigfox, každých 15 minut (ale to si můžeš upravit v kódu pomocí SIGFOX_REPORT_INTERVAL_SECONDS, kdybys chtěl natáhnout výdrž baterie ;-) ).

Výstup je ve formě dat (grafu) v google sheetu.

   ![Obrázek sestavy](sf-ic-v1.png)

## Popis funkce

Po založení baterií se po uplynutí 10 sekund odvysílají do sítě sigfox první data obsahující počty pulzů a stav baterie, což se zvenku projevý bliknutím LED diody na core modulu.

## 1.2. Příklady použití

* Odečítání spotřeby elektřiny
* Odečítání spotřeby vody

## 1.3. Co je to Sigfox

Sigfox je mezinárodní bezdrátová síť pracující v pásmu 868 MHz (EU), případně 915 MHz (USA).
Hlavní předností této sítě je velmi nízká spotřeba při vysílání ve srovnání s technologií jako je GSM/3G/LTE.
S tím souvisí možnost provozu zařízení z alkalických baterií po dobu i několika let.

Na druhou stranu je tato technologie vhodná pouze pro krátké zprávy (max. 12 bytů) s omezením vysílání ze zařízení na maximálně 140 zpráv za posledních 24 hodin.

Tato technologie je tedy vhodná např. pro monitoring kvality ovzduší, upozornění na vzniklou událost (pohyb, prasklé potrubí, stisk tlačítka), odečet spotřeby energií, apod.
Není vhodná tam, kde je potřeba často vysílat aktualizovaný stav nebo posílat větší objemy dat.

Díky narrow-band technologii a nízké modulační rychlosti je možné zprávy mezi zařízením a základnovou stanicí Sigfox přenášet i na vzdálenost přes 100 km.

## 1.4. Co všechno k projektu potřebuješ

* 1x BigClown [Sensor Module](https://obchod.bigclown.cz/products/sensor-module)

* 1x BigClown [Core Module](https://obchod.bigclown.cz/products/core-module)

* 1x BigClown [Sigfox Module](https://obchod.bigclown.cz/products/sigfox-module)

* 1x BigClown [Mini Battery Module](https://obchod.bigclown.cz/products/mini-battery-module)

Dále budeš potřebovat:

![Obrázek BigClown Sigfox Počítadla Impulzů - rozložené moduly](sigfox-impulse-counter-set.png)

## 2. Sestavení počítadla

1. Našroubujte anténu do SMA konektoru na Sigfox Module.

2. Začněte s Mini Battery Module.

   ![Obrázek Mini Battery Module](sf-ic-mbm.png)

3. Připojte Sigfox Module.

   ![Obrázek Mini Battery Module, Core Module, Sigfox Module](sf-ic-mbm-sf.png)

4. Připojte Core Module.

   ![Obrázek Mini Battery Module a Core Module](sf-ic-mbm-sf-core.png)

5. Připojte Sensor Module.

   ![Obrázek Mini Battery Module, Core Module, Sigfox Module, Sensor Module](sf-ic-mbm-sf-core-sen.png)

6. Vložte baterie

   ![Obrázek Sigfox Počítadlo pulzů - vložené baterie](sf-ic-mbm-sf-core-sen-bat.png)

7. Připojte USB kabel do Core Module.

  ![Obrázek Sigfox Počítadlo pulzů - zapojení USB](sf-ic-mbm-sf-core-sen-usb.png)

8. Nahrajte firmware do Core Module.

   Stáhněte si [zkompilovaný firmware](https://github.com/bigclownlabs/bcf-releases/latest) pro tento projekt (soubor `firmware.bin`).

   V dokumentaci najdete podrobný návod pro [nahrání firmware do Core Module]({{< relref "doc/old/core-module-flashing.cs.md" >}}).

   Zdrojové kódy firmware obsahuje GitHub repozitář [bcp-sigfox-pulse-counter](https://github.com/bigclownlabs/bcf-sigfox-pulse-counter).

   Více se o firmware a jeho principech dozvíte v dokumentaci v sekci [Firmware SDK tutoriál]({{< relref "doc/old/core-module-sdk.cs.md" >}}).

## 3. Propojení služby sigfox a google sheetu pomocí webhooku.

1. Vytvoř si účet na google, abys měl možnost využívat google disk

2. Vytvoř google sheet, klikni pravím tlačítkem a vyber "Google Sheets" (nezáleží na tom jak ho pojmenuješ)

   ![Obrázek sestavy](sf-ic-t1.png)

3. Teď je potřeba přidat Google Apps Script. Klikni pravím tlačítkem myši a vyber "Connect more apps" (viz. obrázek)

   ![Obrázek sestavy](sf-ic-t2.png)

4. Pomocí vyhledávacího pole najdi "Google Apps Script"

   ![Obrázek sestavy](sf-ic-t3.png)

5. Vytvoř nový script

   ![Obrázek sestavy](sf-ic-t5.png)

6. kopíruj do něj následující kód místo výchozího

```javascript
function doPost(e) {
  var spreadsheets_id = "";
  var device_id = "";

  var content = e.postData.getDataAsString();
  var payload = JSON.parse(content);

  if (payload.device != device_id) {
    return;
  }

  var data = payload.data;
  var buffer = [];

  for (var i=0; i<24; i+=2) {
    buffer.push(payload.data.slice(i, i+2));
  }

  var head = parseInt(buffer[0], 16);

  if (head != 0x00) {
    return;
  }

  var overflow = parseInt(buffer[1], 16);
  var channel_count_a =  parseInt(buffer[5] + buffer[4] + buffer[3] + buffer[2], 16);
  var channel_count_b =  parseInt(buffer[9] + buffer[8] + buffer[7] + buffer[6], 16);
  var battery_voltage_mv = parseInt(buffer[11] + buffer[10], 16) / 1000;

  if (overflow > 0) {
    channel_count_a += (overflow >> 4) * Math.pow(2, 32);
    channel_count_b += (overflow && 0x0f) * Math.pow(2, 32);
  }

  var ts = new Date(payload.time * 1000);
  var date_time = Utilities.formatDate(ts, "Europe/Prague", "yyyy-MM-dd HH:mm:ss");

  var doc = SpreadsheetApp.openById(spreadsheets_id);
  var list = doc.getSheets()[0];
  list.appendRow([date_time, channel_count_a, channel_count_b, battery_voltage_mv]);

  return "ok";
}
```

mezi uvozovky

```javascript
var spreadsheets_id = "";
```

vlož ID tebou vytvořeného google sheetu (tabulky)

   ![Obrázek sestavy](sf-ic-t6.png)

například:

```javascript
var spreadsheets_id = "1xCeXDupv_JWxAdIlWNHDRqCnv_Qi6D_STsMaEjIOljI";
```

mezi uvozovky

```javascript
var device_id = "";
```

vlož ID tvého Sigfox Modulu, které je napsané přímo na modulu, například:

```javascript
var device_id = "25D010";
```

Pomocí CTRL + S ulož (na názvu nezáleží).

Klikni na publikovat a vyber zprovoznit jako webovou aplikaci.

   ![Obrázek sestavy](sf-ic-t7.png)

Je potřeba nastavit, že k aplikaci má přístup kdokoli

   ![Obrázek sestavy](sf-ic-t8.png)

a klikni na zprovoznit.

Proklikej se a výsledkem bude "Aktuální adresa URL webové aplikace:".

   ![Obrázek sestavy](sf-ic-t9.png)

## Nastavte službu MySigfox

   Služba MySigfox propojuje Sigfox backend s uživatelem definovanou webovou službou prostřednictvím požadavku HTTP POST - tzv. webhooku.
   Samozřejmě je možné použít zabezpečenou variantu HTTPS.

   Přejděte do [formuláře služby MySigfox](https://www.mysigfox.cz/form) a vyplňte následující údaje:

   * **ID zařízení** - unikátní číslo Sigfox Module vytištěné přímo na modulu (obvykle 6místné)
   * **Token** - 10ti místný token který jste obdrželi se zakoupeným Sigfox Module do služby MySigfox
   * **E-mail** - váš e-mail (pro využití v případě nutnosti kontaktu provozovatele služby s vámi)
   * **Webhook URL** - vyplňte adresu na váš google script. (Aktuální adresa URL webové aplikace)

   ![Obrázek služby MySigfox](service-mysigfox.png)

## 4. Instalace

Když máš připravenou sestavu a nejuniverzálnější nástroj na světě (izolačku libovolné barvy).

   ![Obrázek sestavy](sf-ic-i2.jpg)

Ještě je potřeba připravit fotoprvek, ideálně fototranzistor (použil jsem
OED-PCC-9P5-1L)

   ![Obrázek fototranzistoru s vodiči](sf-ic-i1.jpg)

Fototranzistor se zapojí do vstupní svorky Sensor modulu a přilepí se pomocí izolačky tak aby snímal LED diodu elektroměru. Kanál si můžeš zvolit.

   ![Obrázek kompletní instalace](sf-ic-i3.jpg)

## 5. Datový rámec - pro zvídavé

Abyste správně pochopili co google skript vlastně dělá.

|   Bajt  |                           |              |      Typ       |
|:-------:|:-------------------------:|:------------:|:--------------:|
|    1    |           Header          |      8b      |                |
|    2    |Přetečení na kanálech A a B|   4b + 4b    | 2 x "uint4_t"  |
| 3 ... 6 |  Počet pulzů na kanálu A  |     32b      |    uint32_t    |
| 7 ... 10|  Počet pulzů na kanálu B  |     32b      |    uint32_t    |
|11 ... 12|  Napětí na baterii v mV   |     16b      |    uint16_t    |

Data se aktualizují každých 60 minut.

## Závěr

Poměrně lehce si tak uděláš představu kolik co potřebuje elektřiny a bude tě bolet každá otáčku bubnu pračky, zapnutí bojleru a pečení kuřete v troubě.

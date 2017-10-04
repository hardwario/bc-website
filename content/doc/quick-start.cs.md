---
title: Tutoriál
slug: tutorial
---

Tento dokument slouží jako praktická ukázka práce s IoT sadou BigClown. Ukážeme si, jak lze v **Raspberry Pi** vyčítat teplotu z **Core Module**, ovládat LED diodu, měřit relativní vlhkost vzduchu z **Humidity Tag**, řídit malý spotřebič pomocí **Relay Module** nebo vytvořit rádiovou síť prostřednictvím **USB Dongle**. Měření i ovládání je demonstrované pomocí nástroje **Node-RED**, který běží v **Raspberry Pi** a umožňuje uživateli snadnou automatizaci úloh přes webové rozhraní.

Tento tutoriál je rozdělený do několika kapitol. Doporučujeme je prostudovat postupně, protože následující kapitoly staví na znalostech z předchozích kapitol. Na konci téměř každé kapitoly je odkaz na detailní postup, který vám pomůže v případě nejasností.

Nejprve si pro jednoduchost předvedeme základní funkčnost bez rádia s jedním Core Module připojeným USB kabelem do Raspberry Pi. Všechny získané znalosti pak lze bez rozdílu použít i u bezdrátové sítě, která je popsána v pozdějších kapitolách tohoto tutoriálu.

Co budeme potřebovat:

  * Raspberry Pi + napájecí adaptér + MicroSD kartu
  * {{< shop "Core Module" >}}

Volitelně pak pro bateriovou bezdrátovou síť:

  * {{< shop "USB Dongle" >}} (nebo druhý {{< shop "Core Module" >}})
  * {{< shop "Mini Battery Module" >}}
  * {{< shop "Humidity Tag" >}}
  * {{< shop "Relay Module" >}}

## Instalace Raspberry Pi

Nejjednodušší způsob jak začít je [stáhnout si připravený BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). Tento obraz má již předinstalované [potřebné služby a nástroje]({{< relref "doc/raspberry-pi-installation.cs.md#odlišnosti-od-originální-distribuce-raspbian" >}}). Obsahuje USB gateway, MQTT broker, Node-Red a flashovací utilitu `bcf`. Obraz nahrajete na kartu z pomocí příkazu `dd` nebo `Win32DiskImager`. Můžete však použít i oficiální image a balíčky si sami doinstalovat.

[Detailní návod zprovoznění Raspberry Pi]({{< relref "doc/raspberry-pi-installation.cs.md" >}})

## Připojení k Raspberry Pi

Nahranou kartu vložte do Raspberry Pi, připojte ethernet kabel, Core Module nebo USB Dongle a napájení. Po nabootování byste měli Raspberry Pi najít na adrese `hub.local`. Můžete vyzkoušet příkaz `ping hub.local`.

Pokud se Raspberry Pi nehlásí, je buď něco špatně se sítí nebo vás systém nepodporuje `mDNS` a budete muset najít IP adresu Raspberry Pi ve všem routeru v nastavení `DHCP`.

Pro přihlášení použijte příkaz `ssh pi@hub.localhost` nebo na Windows program `putty`.

[Detailní návod přihlášení k Raspberry Pi]({{< relref "doc/raspberry-pi-login.cs.md" >}})

## Nahrání firmware

Pro rychlý start jsme vytvořili command-line Python utilitu `bcf`, která automaticky stáhne poslední release firmware z GitHubu a naprogramuje modul. Na připojeném Raspberry Pi si nejprve aktualizujte všechny firmware release s pomocí `sudo bcf update`. Potom si s pomocí `sudo bcf list` vypište seznam všech předkompilovaných firmwarů.

Do Core Module nahrajeme firmware `bcf-usb-gateway`. Tento firmware pro gateway obsahuje i funkce pro všechny senzory a většinu ostatních modulů. Po startu nadetekuje připojené senzory a posílá jejich hodnoty po USB do Raspberry Pi.

Taky je třeba přepnout Core Module ručně do programovacího **DFU** módu. Nejprve připojte Core Module k Raspberry Pi přes micro USB. Pak modul přepněte do programovacího módu tak, že stisknete a držíte tlačítko `B`, mezitím krátce stisknete tlačítko `R` a pak můžete pustit tlačítko `B`. Poté můžete Core Module naprogramovat následujícím příkazem.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

Po naprogramování se Core Module sám restartuje a automaticky se spustí nahraný firmware.

[Detailní návod k nahrávání firmware]({{< relref "doc/firmware-upload.cs.md" >}}).

## Komunikace mezi USB a MQTT

USB Dongle nebo Core Module v roli **gateway** komunikují s počítačem přes USB po virtuálním sériovém portu. Tato komunikace je dále na Raspberry Pi přesměrovaná službou `bch-gateway`, která tyto zprávy přepošle na MQTT brokera Mosquitto.

Všechny zprávy z modulů putují přes gateway na MQTT broker. MQTT je náš páteřní systém na předávání zpráv a to z modulů i do nich.
Uprostřed tohoto komunikačního systému je MQTT broker, což je server na který se lze připojit z klientů. Po MQTT se předávají zprávy. Každá zpráva obsahuje **topic** (téma) a **payload** (obsah). Topic je textový řetězce a může tvořit jakoby adresářovou strukturu s použitím lomítek `/`. Payload není standardem MQTT definován a BigClown v něm posílá textově čísla, řetězce, boolean hodnoty a JSONy.

Na MQTT broker se pak můžou připojovat další služby a aplikace jako Node-RED, MQTT-Spy nebo např. Android aplikace MQTT Dash.

Dále je možné si například promapovat port na routeru a můžete se k vašim MQTT zprávám dostat i z internetu. Další možností u brokeru Mosquitto je nastavit tzv. bridge, kdy lze propojit několik brokerů mezi sebou. Ty pak sdílejí všechny zprávy mezi sebou. Oba tyto popsané způsoby zpřístupnění MQTT zpráv je však potřeba vhodně zabezpečit, např. TLS spojením.

## Práce se zprávami na MQTT

Tato kapitola je zde pouze pro úplnost. Vyčítání hodnot je vysvětlené i v další kapitole v grafickém nástroji Node-RED.

Do Raspberry Pi máme připojený Core Module. Teď si zobrazíme naměřená data, která posílá MQTT broker.

Nejprve vyzkoušíme přihlásit se s pomocí command-line utility `mosquitto_sub`. Pro publikování zpráv slouží druhá utilita `mosquitto_pub`. Do příkazové řádky Raspberry Pi tedy napíšeme:

```
mosquitto_sub -t "#" -v
```

A měly by nám po chvíli chodit zprávy od čidla teploty na desce Core Module. Teplota se odesílá jen při změně, tím se šetří baterie. Pro účely testování je tedy vhodné zkusit čidlo ochladit, nebo zahřát. Ve výpisu se zobrazí i stisky tlačítka `B` na Core Module.

```
pi@hub:~ $ mosquitto_sub -t "#" -v
node/836d19821664/thermometer/0:1/temperature 24.69
node/836d19821664/thermometer/0:1/temperature 24.94
node/836d19821664/push-button/-/event-count 5
```

Parametr `-t` říká, jaký `topic` chceme odebírat. Mřížka `#` znamená, že chceme odebírat všechny zprávy. Parametr `-v` neboli verbose do konzole vypisuje kromě hodnot i topic.

Dalším zástupným symbolem je otazník `?`, který má podobnou funkci jako `#`, jen jej lze použít pouze v jedné úrovni topicu, mezi lomítky.

Zkusíme nyní rozsvítit LED na Core Module. V následujícím příkazu si musíte upravit `{id}` podle Vašeho ID modulu. To vyčtete z předchozích příchozích zpráv.
**TODO** ověřit

```
mosquitto_pub -t "node/{id}/led/-/state/set" -m true
```

**TODO** Popsat zapnutí debug logu a ukázka ručního ovládání LED.

## Připojení k aplikaci Node-RED

**Node-RED** je webová aplikace běžící Raspberry Pi, kterou si můžete otevřít v internetovém prohlížeči. Díky ní lze zobrazit, zpracovávat naměřené hodnoty a následně odesílat příkazy pro moduly jako například Relay Module, Power Module (relé a digitální RGBW pásky), LCD Module (zobrazovat texty).

Do webového prohlížeče zadejte adresu `hub.local:1800`.

![Node-RED](node-red-mqtt.png)

V levé části máte na výběr stavební bloky, které přetažením můžete umístnit na prostřední plochu. Bloky jsou rozděleny do několika sekcí a nejdůležitější jsou `input`, `output`, `function` a `dashboard`. Po rozmístnění lze bloky mezi sebou spojovat a vytvářet tzv. `flow`.

V pravé části jsou záložky `info` a pro nás později důležitá záložka `debug`.

Po jakékoliv změně `flow` je třeba tyto změny aplikovat. To se provede vpravo nahoře tlačítkem `deploy`.

**TODO** Odkaz na článek Integrace > Node-RED

## Přihlášení k odběru zpráv v Node-RED

Nejprve si v Node-RED budeme vypisovat všechny příchozí zprávy. Následující postup vysvětlí, jak vytvořit základní flow vypisující všechny zprávy do záložky **debug**. Je však možné tento popis přeskočit a přes menu v Node-RED vpravo nahoře importovat text, který naleznete níže.

```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"#","qos":"2","broker":"ba3b2e25.7c8b7","x":170,"y":100,"wires":[["2dbd1aa6.284476"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":390,"y":100,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Pokud chcete flow vytvořit ručně, pak postupujte podle těchto instrukcí. Ze sekce **input** přetáhněte myší blok **mqtt** do prázdného flow. Poté přetáhněte myší ze sekce **output** blok **debug**.
Teď oba bloky propojte myší mezi sebou. Tím vytvoříte váš první flow.

<img src="mqtt-all-flow.png" style="width:auto;" />

Teď je třeba nakonfigurovat blok **mqtt**. Dvojklikem otevřete nastavení a nastavte tyto parametry:

  * server: localhost:1883
  * topic: #

<img src="mqtt-configure.png" style="width:auto;" />

Po uložení je třeba aplikovat změny tlačítkem **Deploy** vpravo nahoře. Poté se přepněte vpravo do záložky **debug** a po chvíli začnou chodit zprávy z připojeného Code Module. Můžete stisknout i tlačítko `B` a tato událost se také zobrazí v **debug** logu.

<img src="mqtt-all-debug.png" style="width:auto;" />

## Zobrazení teploty

Nyní se zobrazují všechny příchozí zprávy. Pokud bysme chtěli přijímat jenom teplotu od jednoho zařízení, změníme v bloku **mqtt** v jeho nastavení topic z hodnoty `#` na `node/836d19821664/thermometer/0:1/temperature`. Adresu `836d19821664` nahraďte svým vlastním **ID**, které získáte ze záložky **debug**.

Pro grafické znázornění hodnot můžeme využít v Node-RED **dashboard**. Vložte blok Gauge, najdete jej v seznamu bloků úplně dole, nebo můžete zadat **gauge** vlevo nahoře do vyhledávacího políčka. Propojte jej s MQTT blokem. Blog **gauge** je třeba ještě nakonfigurovat.

<img src="gauge-flow.png" style="width:auto;" />

Poklepejte na něj. Nejprve vytvořte novou skupinu kliknutím na sybol tužky u **Add new ui_group**. Zde v dalším dialogu klikněte opět na symbol tužky u **Add new ui_tab**. Potvrďte otevřené dialogy a vytvoří se vám výchozí záložka i skupina. Upravte ještě rozsah hodnot **Range** na rozsah **0** až **40** a potvrďte i poslední otevřený dialog. Stiskněte **Deploy** a otevřete dashboard.

Dashboard otevřete buď v pravo v záložce **dashboard** klinkutím na symbol se šipkou, nebo na adrese `hub.local:1880/ui`.

<img src="gauge-dashboard.png" style="width:auto;" />

Zde ještě flow, pokud jej chcete přímo importovat

```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"node/836d19821664/thermometer/0:1/temperature","qos":"2","broker":"ba3b2e25.7c8b7","x":290,"y":160,"wires":[["2dbd1aa6.284476","5ed6f4cf.a598fc"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":630,"y":140,"wires":[]},{"id":"5ed6f4cf.a598fc","type":"ui_gauge","z":"2c3b9c0.ff19564","name":"","group":"6f264394.22341c","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":10,"colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":639.1000366210938,"y":229.20001220703125,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"6f264394.22341c","type":"ui_group","z":"","name":"Default","tab":"255de32f.157b0c","disp":true,"width":"6"},{"id":"255de32f.157b0c","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

**TODO** Popsat demonstraci subscripe na topic se zobrazením hodnoty teploty v debug.

## Řízení LED v závislosti na teplotě

**TODO** Popsat vytvoření podmínky - propojení subscribe/publish.

## Rozšíření o měření vlhkosti

**TODO** Popsat způsob instalace Humidity Tagu a subscribe k dalšímu topic.

## Rozšíření o ovládání reléového výstupu

**TODO** Popsat způsob instalace Relay Module a publish topicu.

## Přeměna v bateriové zařízení

**TODO** Popsat výhodu low-power a instalaci Mini Battery Module. Odpojení USB kabelu.

## Vytvoření rádiové sítě

**TODO** Stručně popsat koncept node/gateway. Výhody 868 MHz rádia (dosah/spotřeba).

## Nahrání firmware do gateway

Připojte USB Dongle do Raspberry Pi. USB Dongle se do programovacího módu přepne automaticky. Stačí spustit následující příkaz.
```
sudo bcf bigclownlabs/bcf-usb-dongle:firmware.bin
```

**Pokud chcete jako gateway namísto USB Dongle použít Core Module, je to možné, ale třeba nahrát jiný firmware.** Taky je třeba přepnout Core Module ručně do programovacího DFU módu. Nejprve připojte Core Module k Raspberry Pi přes micro USB. Pak modul přepněte do programovacího módu tak, že stisknete a držíte tlačítko `B`, mezitím krátce stisknete tlačítko `R` a pak můžete pustit tlačítko `B`. Poté můžete Core Module naprogramovat následujícím příkazem.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

## Nahrání firmware do node

Do bezdrátové bateriové jednotky nahrajte `bcf-generic-node`. Tento univerzální firmware obsahuje funkce pro všechny senzory a většinu ostatních modulů. Po startu nadetekuje připojené senzory a posílá jejich hodnoty na rádiovou gateway.

Připojte Core Module do Raspberry Pi a přepněte Core Module do **DFU** módu viz. předchozí kapitola. Nahrajte firmware `generic-node` ve verzi s `firmware-battery-mini`.

```
sudo bcf flash --dfu bigclownlabs/bcf-generic-node:firmware-battery-mini.bin
```

Pokud budete bezdrátový node napájet např. adaptérem z Power Module, můžete použít firmware `bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin`, který zprávy z gateway-e i přijímá a může ovládat barvy na LED pásku, relé a zobrazovat naměřená data i na připojeném LCD Module. Navíc je možné na LCD Module zapisovat i vlastní texty.

[Detailní návod k nahrávání firmware]({{< relref "doc/firmware-upload.cs.md" >}}).


## Spárování Core Module s USB Dongle

**TODO** Možná už bude existovat webový nástroj pro párování? Uživatel si musí poznamenat ID zařízení.

## Ovládání a měření přes rádio

**TODO** Zpátky k Node-RED - s pomocí poznamenaného device ID navádět jak pub/sub do rádiového nodu.

## Závěr a další kroky

**TODO** Odehrát shrnutí co jsme se naučili. Neměl by chybět odkaz na referenci MQTT topiců generic nodu a inspirace jaký další HW může číst / ovládat. Taky bych sem dal link na MQTT v Python pokud někdo nebude chtít Node-RED a chce začít kódovat.

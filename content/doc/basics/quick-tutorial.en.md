---
title: Quick tutorial
slug: tutorial
---

This document is a practical guide of using BigClown IoT system. We will guide you how  **Raspberry Pi** can read temperature from **Core Module**, control the LED, measure relative humidity from **Humidity Tag**, control small electronic devices using **Relay Module** or create wireless network using **USB Dongle**. Measurement and control is configurable by user-friendy **Node-RED** web application which is running inside the **Raspberry Pi** and allows an easy task automation in your web browser.
<!--
Tento dokument slouží jako praktická ukázka práce s IoT sadou BigClown. Ukážeme si, jak lze v **Raspberry Pi** vyčítat teplotu z **Core Module**, ovládat LED diodu, měřit relativní vlhkost vzduchu z **Humidity Tag**, řídit malý spotřebič pomocí **Relay Module** nebo vytvořit rádiovou síť prostřednictvím **USB Dongle**. Měření i ovládání je demonstrované pomocí nástroje **Node-RED**, který běží v **Raspberry Pi** a umožňuje uživateli snadnou automatizaci úloh přes webové rozhraní.-->

This tutorial is divided to several chapters. We suggest you to study them one by one. The subsequent chapter builds on the knowledge of the previous chapters. At the end of the every chapter there is a link to more detailed instructions, which can help you in case of confusion.
<!--
Tento tutoriál je rozdělený do několika kapitol. Doporučujeme je prostudovat postupně, protože následující kapitoly staví na znalostech z předchozích kapitol. Na konci téměř každé kapitoly je odkaz na detailní postup, který vám pomůže v případě nejasností.
-->
First we will demonstrate basic functionality without a wireless network. We use just a single **Core Module** connected to the **Raspberry Pi** by a USB cable.
<!--
Nejprve si pro jednoduchost předvedeme základní funkčnost bez rádia s jedním Core Module připojeným USB kabelem do Raspberry Pi. Všechny získané znalosti pak lze bez rozdílu použít i u bezdrátové sítě, která je popsána v pozdějších kapitolách tohoto tutoriálu.
-->

What would we need:

  * {{< shop "Raspberry Pi" >}} + {{< shop "MicroSDHC Memory Card 8GB" >}}
  * {{< shop "Core Module" >}}

Optionally for wireless network you need:

  * {{< shop "USB Dongle" >}} (or second one {{< shop "Core Module" >}})
  * {{< shop "Mini Battery Module" >}}
  * {{< shop "Humidity Tag" >}}
  * {{< shop "Relay Module" >}}

## Raspberry Pi installation

The easiest way to start is to download [pre-configured BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). This image already has pre-installed [needed services and tools]({{< relref "doc/tutorials/raspberry-pi-installation.en.md#odlišnosti-od-originální-distribuce-raspbian" >}}). It contaions USB gateway, MQTT broker, Node-RED and **bcf** firmware flash utility. The downloaded Raspberry Pi image has to be flashed to the MicroSD card with `dd` command or by **Win32DiskImager** tool. You can also download official Raspbian and install necessary packages by yourself.

[Detailed Raspberry Pi instructions]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}})

## Connecting to the Raspberry Pi

Please insert the flashed MicroSD card to the Raspberry Pi. Then connect the Ethernet cable and the **Core Module** or **USB Dongle**. After the **Raspberry Pi** boots up you should be able to find it at address `hub.local`. You can try the command `ping hub.local`.

{{< note "warning" >}}
If the Raspberry Pi is not visible on the network, there's something wrong with your network or your system don't support **mDNS** and you have to find Raspberry Pi IP address in your router's **DHCP** configuration.
{{< /note >}}

Please log on the Raspberry Pi shell by typing `ssh pi@hub.localhost` command or use the Windows program **putty**.

[Detailed Raspberry Pi login instructions]({{< relref "doc/tutorials/raspberry-pi-login.en.md" >}})

## Firmware upload

For quick start we've create a Python command-line utility **bcf**, which automatically downloads latest released firmwares from GitHub and will flash the modules. On the Raspberry Pi you need first to update the list of releases by typing `sudo bcf update`. Then by typing `sudo bcf list` you get the list of pre-compiled firmwares.

We'll flash the **bcf-usb-gateway** firmware. This firmware for the gateway contains functions for all BigClown sensors and modules. After the start the **Core Module** automatically detects connected sensors and sends the measured values by USB to the **Raspberry Pi**.

Before flashing is necessary to switch the **Core Module** to the programming **DFU** mode. First connect the **Core Module** to the **Raspberry Pi** by the micro USB cable. Then set the module to the **DFU** mode by pressing and holding `B` boot button, the shortly press the `R` reset button. Then you can release the `B` boot button. Now you can flash the **Core Module** by typing the command below.

```
sudo bcf flash --dfu bigclownlabs/bcf-usb-gateway:firmware.bin
```

Po naprogramování se Core Module sám restartuje a automaticky se spustí nahraný firmware.
After the firmware flashing the **Core Module** will automatically restart and the flashed firmware will be run.

[Detailed firmware flashing instructions]({{< relref "doc/tutorials/firmware-upload.en.md" >}}).

## USB-MQTT communication bridge

**USB Dongle** or **Core Module** with the **gateway** firmware is using virtual serial port over USB to exchange the data. This communication is then redirected on the **Raspberry Pi** to the **MQTT** messages thanks to the **bch-gateway** service.

All the messages from modules go through the gateway to the MQTT broker. The MQTT is an open standard and also our back-bone system for passing the messages both ways.
In the middle of this communication system is the MQTT broker. Which is a server that accepts client connections. Between the broker and clients are flowing MQTT messages. Each of them contains **topic** and **payload**. Topic is a text string and has directory-like structure with the `/` delimeter (eg. `gateway/dongle/temperature/get`). Payload isn't defined by a MQTT standard and BigClown is sending these data types: numbers, strings, boolean values and JSONs.

Other services can easily connect to the MQTT broker and extend the functionality. Like Node-RED, MQTT-Spy or Android MQTT Dash application.

Another option is to exnable port-formwarding of 1883 MQTT port on you router. Then you can connect to your broker from anywhere in the world. It is also possible to set-up a **bridge** with other Mosquitto MQTT brokers. All the brokers then share the same messages between each other. Both of these described methods needs proper security settings. For example by TLS connection.

## Subscribing and publishing MQTT messages

This chapter is there for completion. Reading of the measured values is explained also in the next chapter with graphical Node-RED application.

There's a **Core Module** connected to the **Raspberry Pi**. Now we display the measured data which are send by the MQTT broker.

First we try to subscribe to the topic with `mosquitto_sub` command-line utility. For publishing MQTT messages there's another utility `mosquitto_pub`. Pelase write the command below to your **Raspberry Pi**

```
mosquitto_sub -t "#" -v
```

After a while you should see a messages from the temperature sensor on the **Core Module**. You can also see the button events when you press the `B` button on the **Core Module**.

{{< note "info" >}}
For battery saving reasons the temperature is only send when there's a change. For testing purporses it is appropriate make the temperature sensor cooler or warmer.
{{< /note >}}

```
pi@hub:~ $ mosquitto_sub -t "#" -v
node/836d19821664/thermometer/0:1/temperature 24.69
node/836d19821664/thermometer/0:1/temperature 24.94
node/836d19821664/push-button/-/event-count 5
```

Parametr `-t` říká, jaký **topic** chceme odebírat. Mřížka `#` znamená, že chceme odebírat všechny zprávy. Parametr `-v` neboli verbose do konzole vypisuje kromě hodnot i topic.

Dalším zástupným symbolem je otazník `?`, který má podobnou funkci jako `#`, jen jej lze použít pouze v jedné úrovni topicu, mezi lomítky.

Zkusíme nyní rozsvítit LED na Core Module. V následujícím příkazu si musíte upravit `{id}` podle Vašeho ID modulu. To vyčtete z předchozích příchozích zpráv.

```
mosquitto_pub -t "node/{id}/led/-/state/set" -m true
```

## Připojení k aplikaci Node-RED

**Node-RED** je webová aplikace běžící Raspberry Pi, kterou si můžete otevřít v internetovém prohlížeči. Díky ní lze zobrazit, zpracovávat naměřené hodnoty a následně odesílat příkazy pro moduly jako například Relay Module, Power Module (relé a digitální RGBW pásky), LCD Module (zobrazovat texty).

Do webového prohlížeče zadejte adresu `hub.local:1800`.

![Node-RED](node-red-mqtt.png)

V levé části máte na výběr stavební bloky, které přetažením můžete umístnit na prostřední plochu. Bloky jsou rozděleny do několika sekcí a nejdůležitější jsou **input**, **output**, **function** a **dashboard**. Po rozmístnění lze bloky mezi sebou spojovat a vytvářet tzv. **flow**.

V pravé části jsou záložky **info** a pro nás později důležitá záložka **debug**.

Po jakékoliv změně **flow** je třeba tyto změny aplikovat. To se provede vpravo nahoře tlačítkem **deploy**.

**TODO** Odkaz na článek Integrace > Node-RED

## Přihlášení k odběru zpráv v Node-RED

Nejprve si v Node-RED budeme vypisovat všechny příchozí zprávy. Následující postup vysvětlí, jak vytvořit základní flow vypisující všechny zprávy do záložky **debug**. Je však možné tento popis přeskočit a přes menu v Node-RED vpravo nahoře importovat text, který naleznete níže.

{{% syntax copy="true" %}}
```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"#","qos":"2","broker":"ba3b2e25.7c8b7","x":170,"y":100,"wires":[["2dbd1aa6.284476"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":390,"y":100,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
{{% /syntax %}}

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

{{% syntax copy="true" %}}
```
[{"id":"2c3b9c0.ff19564","type":"tab","label":"Flow 0","disabled":false,"info":""},{"id":"fda6ba0.64ecb48","type":"mqtt in","z":"2c3b9c0.ff19564","name":"","topic":"node/836d19821664/thermometer/0:1/temperature","qos":"2","broker":"ba3b2e25.7c8b7","x":290,"y":160,"wires":[["2dbd1aa6.284476","5ed6f4cf.a598fc"]]},{"id":"2dbd1aa6.284476","type":"debug","z":"2c3b9c0.ff19564","name":"","active":true,"console":"false","complete":"false","x":630,"y":140,"wires":[]},{"id":"5ed6f4cf.a598fc","type":"ui_gauge","z":"2c3b9c0.ff19564","name":"","group":"6f264394.22341c","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":10,"colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":639.1000366210938,"y":229.20001220703125,"wires":[]},{"id":"ba3b2e25.7c8b7","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"6f264394.22341c","type":"ui_group","z":"","name":"Default","tab":"255de32f.157b0c","disp":true,"width":"6"},{"id":"255de32f.157b0c","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```
{{% /syntax %}}


**TODO** Popsat demonstraci subscribe na topic se zobrazením hodnoty teploty v debug.

## Řízení LED v závislosti na teplotě

**TODO** Popsat vytvoření podmínky - propojení subscribe/publish.

## Rozšíření o měření vlhkosti

Nyní si zkusíme připojit ke Core module senzor vlhkosti. {{< shop "Humidity Tag" >}} lze zapojit přímo do Core Module jak je znázorněno na obrázku, nebo lze použít i {{< shop "Tag Module" >}} do kterého lze připojit více senzorů. Také {{< shop "Battery Module" >}} obsahuje volný konektor pro připojení senzorového tagu.

{{< note "info" >}}
Tento postup lze použít i pro jiné připojené senzory nebo {{< shop "Climate Module" >}}, je třeba jen změnit **topic** ke kterému se připojujete k MQTT brokeru.
{{< /note >}}

**TODO** Popsat způsob instalace Humidity Tagu a subscribe k dalšímu topic.

## Rozšíření o ovládání reléového výstupu

**TODO** Popsat způsob instalace Relay Module a publish topicu.

## Přeměna v bateriové zařízení

BigClown stavebnice je od základu navržena pro úsporný bateriový provoz. Bateriově napájené bezdrátové moduly s univerzálním firmwarem po svém startu automaticky nadetekují přpojené seznory a v pravidelných intervalech jsou naměřené veličiny odesílané na gateway.

Do Core Module nyní zapojte Mini Battery Module a vložte do něj dvě AAA baterie.

{{< note "info" >}}
Core Module obsahuje logiku, která vybere nejvhodnější zdroj napájení. Pokud tedy máte zapojen Mini Battery Module, ale například pro účely programování připojíte USB, pak se celé zařízení začne napájet z USB a šetří se tak baterie.
{{< /note >}}

## Vytvoření rádiové sítě

V současné době je možné vytvořit bezdrátovou topologii hvězda. Středem hvězdy je zařízení nazývané **gateway**, které se stará o příjem a odesílání všech zpráv z node zařízení. Gateway může být Core Module nebo USB Dongle.

Ostatní bezdrátová zařízení označujeme jako **node**.

Použitý rádiový modul **SPIRIT1** komunikuje na frekvenci 868 MHz a svým výkonem spolehlivě pokryje větší rodinný dům i jeho blízké okolí.

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

Pokud budete bezdrátový node napájet např. adaptérem z Power Module, můžete použít firmware `power module` pro odpovídající typ a počet LEDek na pásku `bigclownlabs/bcf-generic-node:firmware-power-module-RGBW-144.bin`, který zprávy z gateway-e i přijímá a může ovládat barvy na LED pásku, relé a zobrazovat naměřená data i na připojeném LCD Module. Navíc je možné na LCD Module zapisovat i vlastní texty.

[Release firmwarů bcf-generic-node](https://github.com/bigclownlabs/bcf-generic-node/releases)

[Detailní návod k nahrávání firmware]({{< relref "doc/tutorials/firmware-upload.en.md" >}}).


## Spárování Core Module s USB Dongle

Nyní oba moduly musíme spárovat. Pro Core Module lze navíc proces párování aktivovat a deaktivovat jednoduchým způsobem - dlouhým stiskem tlačítka `B`.

USB Dongle tlačítko nemá a párování je třeba aktivovat MQTT příkazem, stejný postup však funguje i pro Core Module, pokud z nějakého důvodu například nemůžete držet tlačítko.

V následujících příkazech nahraďte `{id}` IP adresou vaší Raspberry Pi. Párování se nejprve aktivuje na gateway. Pro USB Dongle nebo Core Module je třeba aktivovat proces párování posláním MQTT zprávy buď následujícím příkazem z konzole, nebo si lze udělat v Node-RED flow, který odešle tuto zprávu.

```
mosquitto_pub -t 'gateway/{id}/enrollment/start' -n
```

Po aktivaci se na gateway rozbliká červená LED. Nyní je čas vyslat párovací příkaz z remote nodu. To se provede dlouhým stiskem tlačítka `B` na remote node. Pokud máte v konzoli nebo v Node-RED subscribe na topic `#`, zobrazí se zpráva s ID nového spárovaného zařízení.

Je možné párovat další node, stačí na všech dalších remote node provést dlouhý stisk tlačítka `B`.

Pokud nebudete párovat další remote node, ukončete proces párování na gateway příkazem.

```
mosquitto_pub -t 'gateway/{id}/enrollment/stop' -n
```

## Ovládání a měření přes rádio

Remote nody, které mají v názvu firmware **battery** pouze vysílají naměřená data a pak se uspí. Nedovedou zatím přijímat příkazy, protože rádio se po odeslání vždy uspává.

Remote nody, které mají v názvu firmware **power module** a jsou napájeny z adaptéru nebo USB umí vysílat naměřená data na gateway, ale zároveň dovedou i přijímat příkazy z gateway. Díky tomu je možné ovládat prakticky všechny připojené moduly:

  * Power Module - ovládat relé a posílat barvy a efekty na LED pásek
  * Relay Module - ovládat bistabilní relé příkazy pro přepnutí, nebo pro krátké pulzy
  * LCD Module - zobrazovat na displeji texty různých velikostí na požadované souřadnice
  * Ovládat červenou LED na Core Module

**TODO** Zpátky k Node-RED - s pomocí poznamenaného device ID navádět jak pub/sub do rádiového nodu.

## Závěr a další kroky

**TODO** Odehrát shrnutí co jsme se naučili. Neměl by chybět odkaz na referenci MQTT topiců generic nodu a inspirace jaký další HW může číst / ovládat. Taky bych sem dal link na MQTT v Python pokud někdo nebude chtít Node-RED a chce začít kódovat.

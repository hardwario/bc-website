# Tweetovací zvonek


<!-- toc -->


## Úvod

Tento jednoduchý projekt tě snadno seznámí, jak použít BigClown Core Modul.
Cílem projektu bude zaslání tweetu po stisku tlačítka na Core Module, nebo jakéhokoliv externího tlačítka.
Core Module bude připojen USB kabelem na Raspberry Pi, nebo k jakémukoliv jinému počítači, kde spustíš naši Python gateway.
Můžete monitorovat vaše návštěvy a zjisti, jestli jste někoho nezmeškali!


Využijeme grafického rozhraní Node-Red pro nastavení pravidla, kdy MQTT zpráva po stisku tlačítka pošle tweet.
[Zde je ukázková výsledná tweetovací stránka](https://twitter.com/bcDoorbell)


## Co potřebujeme


* 1x [Core Module](https://obchod.bigclown.cz/products/core-module)
* 1x [Raspberry Pi 3](https://obchod.bigclown.cz/products/raspberry-pi-3-set)
* 1x Micro SD kartu ([stáhni obraz pro Rpi](http://doc.bigclown.com/tutorial/install-rpi.html) nebo [objednej předinstalovanou kartu](https://obchod.bigclown.cz/products/apacer-industrial-microsdhc-card-4gb))
* 1x [Micro USB kabel](https://obchod.bigclown.cz/products/usb2-0-cable-am-b-micro-0-6m)


## Core Module

Následující kód níže přidej do souboru `app/application.c`.
Protože je veškerá logika programu v callback funkci tlačítka, není nutné používat nebo vytvářet funkci `application_taks()`.

Místo tlačítka můžeš použít externí spínač, stačí jen změnit GPIO pin ve funkci pro inicializaci tlačítka.
Více na [GPIO SDK stránce](http://sdk.bigclown.com/group__bc__gpio.html).

```c
#include <application.h>


// Instance LED
bc_led_t led;

// Instance tlačítka
bc_button_t button;

// Vstupní bod aplikace
void application_init(void)
{
    // Inicializuj USB
    usb_talk_init();

    // Inicializuj tlačítko a nastav callback funkci
    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);

    // Inicializuj LED a nastav blikání
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_BLINK);
}

// Callback funkce volaná při události tlačítka
void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    // Skryj varování kompilátoru o nepoužité proměnné
    (void) self;

    // Pokud je tlačítko stisknuto
    if (event == BC_BUTTON_EVENT_PRESS)
    {
        static uint16_t event_count = 0;

        // Ukázka práce s LED. KAždý druhý stisk tlačítka rozsvítí LED
        bc_led_set_mode(&led, (event_count & 1) != 0 ? BC_LED_MODE_ON : BC_LED_MODE_OFF);

        // Publiku usb_talk zprávu. Na počítači z ní vznikne MQTT zpráva
        usb_talk_publish_push_button("", &event_count);

        // Počítej stisky tlačítka
        event_count++;
    }
}

```

Ukázku zkompiluj zadáním příkazu `make` do konzole.
Poté nahraj zkompilovaný binární kód přes J-link Ozone debugger zadáním `make ozone` nebo nahrej binární soubor přes [interní USB DFU bootloader](core-module-flashing.md).

Po nahrání můžeš vyzkoušet funkčnost MQTT zpráv přes Mosquitto.
V následující ukázce nahraď `xxx` za svoji IP adresu MQTT brokeru - Raspberry pi.

Pokud voláš Mosquitto příkazy rovnou z počítače, kde ti běží broker, můžeš vynechat parametr `-h`.

`mosquitto_sub.exe -h xxx.xxx.xxx.xxx -t # -v`

Pokud stiskneš tlačítko na Core Module, v konzoli uvidíš příchozí zprávy:

`nodes/push-button/- {"event-count": 5}`


## Konfigurace Raspberry Pi


### Instalace a konfigurace

Pro zprovoznění Raspberry Pi [postupuj podle připraveného instalačního návodu](raspberry-pi-installation.md).
Připoj se na konzoli Raspberry Pi přímo, nebo přes SSH.
Na Raspberry Pi musí být nainstalované balíčky od BigClown - buď jsi použil předinstalovaný image, nebo musíš [balíčky doinstalovat](raspberry-pi-installation.md#instalace-bigclown-balíčků-na-existující-systém).

Pak ještě budeme potřebovat Node-RED, abychom propojili tlačítko Core Module s Twitterem. [Instalace Node-RED na Raspberry Pi](node-red.md)


## Konfigurace Node RED

Pokud jsi nainstaloval a spustil Node-RED, otevři internetový prohlížeč na
URL &lt;adresa-rpi&gt;:1880 a vytvoř následující flow:

* MQTT in blok
* JSON blok
* Message blok
* Twitter out blok


![](images/doorbell/flow.png)

Můžeš také importovat celou ukázku zkopírováním kódu níže. V Node-RED potom v menu zvol import ze schránky.
V tomto případě můžeš přeskočit následující popis jak vytvářet jednotlivé bloky.


```json
[{"id":"4f1ddaf2.8d8ff4","type":"tab","label":"Flow 1"},{"id":"3adfde65.667022","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"856fe615.8f1008","type":"twitter-credentials","z":"","screen_name":"@bcDoorbell"},{"id":"b9060d89.926bd","type":"mqtt in","z":"4f1ddaf2.8d8ff4","name":"","topic":"nodes/push-button/-","qos":"0","broker":"3adfde65.667022","x":275,"y":133,"wires":[["aab295ba.d087e8"]]},{"id":"1eb962d4.06a4ad","type":"twitter out","z":"4f1ddaf2.8d8ff4","twitter":"856fe615.8f1008","name":"Tweet","x":739,"y":133,"wires":[]},{"id":"62d4fc7.ea3b104","type":"template","z":"4f1ddaf2.8d8ff4","name":"Message","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"Somebody is at the door! ({{payload.event-count}})","x":597,"y":133,"wires":[["1eb962d4.06a4ad"]]},{"id":"aab295ba.d087e8","type":"json","z":"4f1ddaf2.8d8ff4","name":"","x":451,"y":133,"wires":[["62d4fc7.ea3b104"]]}]
```


### MQTT in blok

Tento blok se připojí na MQTT brokera a přijímá příchozí zprávy.
Nastav adresu serveru a téma (topic).

![](images/doorbell/mqtt.png)


### JSON blok


Není nutná žádní konfigurace.


### Message blok


Tento blok změní MQTT zprávu na řetězec, kterou pak lze poslat na Twitter.

![](images/doorbell/message.png)


### Twitter out blok


Zde nastav své přihlášení do Twitter účtu.


## Testování


Nyní můžeš stisknout `Deploy` tlačítko v pravém horním rohu Node-RED.
Teď když na Core Module stiskneš tlačítko `B`, uvidíš na zlomek sekundy text `tweeting` vedle Tweet bloku.

![](images/doorbell/tweeting.png)

Gratulujeme k úspěšnému projektu.

![Twitter screenshot](images/doorbell/twitter_screenshot.png)


## Ladění a hledání chyb

V případě, že něco nefunguje, použij `Debug` blok a zapoj jej někde do řetězce.
Poté udělej znova `Deploy` a ujisti se, že `Debug` blok má vpravo zakliknutou zelenou barvu a je aktivní. Poté v pravém panelu přepni na `Debug` záložku a uvidíš ladící zprávy.

![Debugging](images/doorbell/debug.png)

## Konfigurace pro Windows

### Propojení Core Module a gateway

Po zkompilování a nahrání kódu do Core Module (viz. bod 3. Core Module) si stáhni a nainstaluj [Python 3](https://www.python.org/downloads/), který je potřebný ke spuštění gateway.

Také si stáhni [GitHub repozitář pro gateway](https://github.com/bigclownlabs/bch-gateway).
Otevři si příkazový řádek (příkaz `cmd`). Poté změň aktuální adresář (s pomocí `cd`) do složky se souborem `bc-gateway.py`, který se nachází v

`bch-gateway-master/gateway`

Nainstaluj pomocí zadání příkazu do `cmd`

`pip3 install docopt`

Instalace pomocí textového souboru `requirements.txt`

`pip3 install -r requirements.txt`

Zadej příkaz pro zjištění USB portu (např.`COM3`), kterým je připojen Core Module k počítači.

`python bc-gateway.py --list`

Virtuální propojení USB portu (`COM3`) s gateway.

`python bc-gateway.py -d COM3 -D`

Pokud stiskneš tlačítko `B` na Core Module, v konzoli uvidíš příchozí zprávy:

`DEBUG: b'["push-button/-", {"event-count": 0}]\n'`


### Propojení Mosquitto a gateway

Otevři si příkazový řádek (příkaz `cmd`). Poté změň aktuální adresář (s pomocí `cd`) do složky se souborem `mosquitto_sub.exe`, který se nachází v

`C:\Program Files (x86)\mosquitto`

Otevři soubor `mosquitto_sub.exe` pomocí příkazového řádku příkazem:

`mosquitto_sub.exe -t "node/push-button/-" -v
`
Následně se zobrazí po stisnutí tlačíta `B` na Core module: 

`node/push-button/- {"event-count": 0}` 




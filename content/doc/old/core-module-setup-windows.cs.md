# Vývoj s BigClown na Windows


<!-- toc -->


## Úvod


Náš balík software a SDK může být jednoduše provozovatelný také na Windows s naším vývojovým prostředím (IDE).
Stačí pár jednoduchých kroků a můžeš programovat a testovat firmware, pracovat s MQTT zprávami atd.
Tento návod jsme testovali na Windows 7 Professional x64.


## Jak si stáhnout IDE


<a href="https://github.com/bigclownlabs/bc-windows-ide/releases">
<img src="images/core-module-setup-windows/download.png" width="50"/>
Stáhnout BigClown IDE
</a>

Náš instalátor se postará o instalaci následujícího:

* Visual Studio Code IDE
* GIT pro příkazový řádek k automatickému stažení nejnovějšího SDK
* ARM-GCC kompilátor pro Windows
* Ovladače pro zařízení USB CDC a USB DFU
* dfu-util pro nahrávání firmware přes USB


<a href="images/core-module-setup-windows/vscode.png">
<img src="images/core-module-setup-windows/vscode.png" width="400" alt="Visual studio code" />
</a>

## Jak zkompilovat SDK


Spusť BigClown IDE a otevře se kostra jednoduchého programu.
Pak můžeš zkompilovat kód pomocí klávesové zkratky `Ctrl + Shift + B`.

Stažený firmware z GitHubu obsahuje jednoduchý kód, který přepíná stav LED při stisku tlačítka `B` na Core Module. Můžeš se taky podívat na [výchozí ukázkový kód na GitHubu](https://github.com/bigclownlabs/bc-core-module/blob/master/app/application.c). Prosím prostuduj si návody a přidej další logiku do `app/application.c`.

Gratulujeme k tvému prvnímu zkompilovanému firmware!


## Jak nahrát firmware přes USB


Po zkompilování firmware zmáčkni `Ctrl + P` ve Visual Studio Code. Kurzor přeskočí do dialogového okénka pro příkazy. Nyní napiš `task` a zobrazí se seznam úkolů, které obsahuje Makefile. Nyní nás zajímá úkol `dfu`, takže spusť příkaz `task dfu`.


<img src="images/core-module-setup-windows/task-dfu.png" alt="Visual studio code" />


Pomocí Device Firmware Update utility (`dfu-util`) můžeš nahrát zkompilovaný firmware jednoduše přes USB. Prosím přečti si dokumentaci [jak nainstalovat ovladač USB a používat DFU Util na Windows](https://doc.bigclown.cz/core-module-flashing.html#windows-10-64-bit-desktop).

[Nezapomeň nastavit zařízení do DFU módu](https://doc.bigclown.cz/core-module-flashing.html#nahrávání-programu-přes-usb-dfu-bootloader).

Pokud používáš příkazový řádek, tak nastav zařízení do DFU módu a nahraj firmare pomocí příkazu `make dfu`.


## Jak debugovat Core Module


K ladění běžícího kódu na Core Module můžeš použít Ozone debugger s J-Link debug sondou. Také je možné použít GDB/OpenOCD s ostatními debug sondami, ale toto není ještě zdokumentováno.

Stáhni si [Ozone debugger](https://www.segger.com/downloads/jlink#Ozone).
Složku s Ozone je potřeba vložit do systémové proměnné PATH nebo můžeš jednoduše upravit Makefile a nastavit do něj absolutní cestu k souboru Ozone.exe.

Pro spuštění debugu napiš `make ozone` do příkazového řádku nebo ve Visual Studio Code zmáčkni `Ctrl+P` a napiš `task ozone`.


## Jak vygenerovat API dokumentaci


Naše SDK požívá Doxygen pro automaticky generovanou API dokumentaci z hlavičkových souborů jazyka C.
Tento nástroj není potřeba instalovat.
Vygenerovaná API dokumentace je dostupná na http://sdk.bigclown.com.

Pokud chceš mít tuto dokumentaci offline, tak si stáhni [poslední verzi Doxygen](http://www.stack.nl/~dimitri/doxygen/download.html) a spusť příkaz `make doc`.


## Jak nainstalovat ovladač virtuálního COM portu

Pokud jsi už použil instalátor BigClown IDE, tak můžeš tento krok přeskočit.
Stáhni si a nainstaluj [ovladač pro STM32 virtuální COM port](https://drive.google.com/open?id=0B5pXL_JAACMvczQ0MVM1eUZILXc). Také můžeš stáhnout poslední verzi ovladače [přímo z webu ST](http://www.st.com/en/development-tools/stsw-stm32102.html), ale budeš se muset zaregistrovat.


## Jak nainstalovat Mosquitto MQTT broker


Mosquitto není potřebný k vývoji firmware, ale pokud chceš posílat zprávy přes USB do svého počítače nebo do sítě, bude nutné ho nainstalovat a spustit.

[Mosquitto MQTT Broker](https://mosquitto.org/download/) je MQTT server, který tvoří centrální bod všech zpráv v našem systému. Tento broker si prosím stáhni, nainstaluj a spusť. Je nutné ho mít spuštěného na pozadí po celou dobu, kdy používáš naši Python Gateway.

Ke spuštění MQTT brokera jdi do nainstalované složky a napiš `mosquitto.exe -v`.
Parametr `-v` je pro verbose režim, ve kterém se zobrazují všechny zprávy.


## Jak spustit gateway


Stáhni si a nainstaluj [Python 3](https://www.python.org/downloads/), který je potřebný ke spuštění gateway. Gateway je malý skript v pythonu, který propojuje virtuální USB sériový port Core Module a MQTT broker.

Připojený Core Module se na tvém počítači objeví jako USB sériové zařízení.
Spuštěním gateway dojde k propojení Core Module s MQTT brokerem.
Pojďme se podívat, jak to jednoduše provést.

Stáhni si [GitHub repozitář pro gateway](https://github.com/bigclownlabs/bch-gateway).

`git clone https://github.com/bigclownlabs/bch-gateway.git`

Potom spusť skript se správným COM portem.

`python bc-gateway.py -d COM2`


## Gratulujeme!


Úspěšně jsi nainstaloval SDK s gateway. Nyní můžeš začít vytvářet nové zajímavé projekty.

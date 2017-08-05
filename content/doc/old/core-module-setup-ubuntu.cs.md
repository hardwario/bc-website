# Core Module vývojové nástroje - Ubuntu Desktop


<!-- toc -->


## Požadavky


* Čistá instalace 32-bitového nebo 64-bitového Ubuntu 16.04 LTS.


## Instalace toolchainu


Tato sekce tě provede instalací GCC ARM Embedded toolchainu na tvůj Ubuntu desktop.


1. Otevři Terminál a přidej PPA repozitář:

   ```
   sudo add-apt-repository ppa:team-gcc-arm-embedded/ppa
   ```

   > **Note** Tento PPA umožní jednoduchou instalaci [GNU ARM Embedded toolchainu](https://launchpad.net/gcc-arm-embedded).

2. Aktualizuj seznamy balíčků:

   ```
   sudo apt update
   ```

3. Stáhni a nainstaluj balíček s ARM GCC kompilátorem:

   ```
   sudo apt install gcc-arm-embedded
   ```

4. Zkontroluj, že je ARM GCC kompilátor nainstalován správně:

   ```
   arm-none-eabi-gcc --version
   ```

   Měl bys dostat tento výstup v Terminálu:

   ```
   arm-none-eabi-gcc (GNU Tools for ARM Embedded Processors) 6.2.1 20161205 (release) [ARM/embedded-6-branch revision 243739]
   Copyright (C) 2016 Free Software Foundation, Inc.
   This is free software; see the source for copying conditions.  There is NO
   warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
   ```


## Zkompilování firmware


Tato sekce tě provede procesem zkompilování firmware pro BigClown Core Module.


1. Nainstaluj potřebné balíčky (`git` + `make`):

   ```
   sudo apt install git build-essential
   ```

2. Stáhni hlavní repozitář pro BigClown Core Module:

   ```
   git clone --recursive https://github.com/bigclownlabs/bc-core-module.git
   ```

3. Přesuň se do staženého repozitáře:

   ```
   cd bc-core-module
   ```

4. Spusť kompilaci:

   ```
   make
   ```

5. Zkontroluj, že byl vytvořen soubor `firmware.elf`:

   ```
   ls -l out
   ```


## Instalace Mosquitto


[Mosquitto MQTT Broker](https://mosquitto.org/download/) je MQTT server, který tvoří centrální bod všech zpráv v našem systému. Prosím přečti si dokumentaci [jak nainstalovat Mosquitto](https://doc.bigclown.cz/mosquitto.html#instalace-mqtt-brokera).


## Instalace gateway


Gateway je malý skript v pythonu, který propojuje USB sériový port Core Module a MQTT broker. Stáhni si repozitář `bch-gateway`

``https://github.com/bigclownlabs/bch-gateway``

A spusť skript `bc-gateway.py` ve složce gateway.

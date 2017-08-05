# Core Module vývojové nástroje - macOS Desktop


<!-- toc -->


## Požadavky


* Čistá instalace macOS (testováno s verzí 10.12 Sierra).


## Instalace toolchainu


Tato sekce tě provede instalací GCC ARM Embedded toolchainu na tvůj macOS desktop.


1. Otevři Terminál.

2. Nainstaluj Homebrew, pokud ho ještě nemáš.

   Pro více informací se podívej na web: http://brew.sh

3. Stáhni a nainstaluj balíček s ARM GCC kompilátorem:

   ```
   brew install Caskroom/cask/gcc-arm-embedded
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
   brew install git
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

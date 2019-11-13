---
title: Jak nainstalovat BigClown Playground na Raspberry Pi
draft: false
date: 2019-11-09T12:57:09.976Z
weight: 90
description: >-
  Aby tvé projekty běžely, i když budeš mít vypnutý notebook, potřebuješ pomoc
  Raspberry Pi. Tenhle článek ti poradí, jak do něj BigClown Playground
  nainstaluješ.
slug: starter-kit
meta_title: Jak nainstalovat BigClown Playground na Raspberry Pi
meta_description: >-
  Aby tvé projekty běžely, i když budeš mít vypnutý notebook, potřebuješ pomoc
  Raspberry Pi. Tenhle článek ti poradí, jak do něj BigClown Playground
  nainstaluješ.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1573641721/academy/jak-nainstalovat-playground-na-raspberry-pi/pouzivani-bigclown-playground.jpg
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1573641721/academy/jak-nainstalovat-playground-na-raspberry-pi/pouzivani-bigclown-playground.jpg
---

Vytvořil sis cool projekty, ale mrzí tě, že když vypneš notebook, krabička přestane fungovat? Pomůže ti chytrý minipočítač Raspberry Pi, na kterém Playground pofrčí nonstop. 🌃 Povíme ti, co je to Raspberry Pi a jak na něj Playground nainstalovat.

Jestli zatím Raspberry Pi doma nebo ve škole nemáš, [pořiď si ho z e-shopu BigClown](https://obchod.bigclown.cz/raspberry-pi-3-set/) a můžeš celý tenhle návod přeskočit a rovnou se pustit do programování. Do rukou ti totiž dorazí předem nastavený, vyladěný a s nainstalovaným Playgroundem.

## Co je to Raspberry Pi

Raspberry Pi je malý **jednodeskový počítač**, který je velký zhruba jako mobil. Na rozdíl od klasických počítačů nemá obrazovku ani velkou skříň. Po jeho stranách najdeš **porty pro připojení dalších zařízení**. K Raspberry Pi můžeš napojit třeba svůj notebook nebo myš. 🐭

![jednodeskový počítač](https://res.cloudinary.com/lukasfabik/image/upload/v1573304484/academy/jak-nainstalovat-playground-na-raspberry-pi/image1.jpg)

_Takto Raspberry Pi vypadá. Kdo by to byl řekl, že tenhle prcek je kompletní počítač, že?_

Kromě domácností a firem, kde Raspberry Pi ovládá IoT sítě, se používá i v hodinách informatiky, kde na něm učitelé ukazují, jak mohou studenti **pomocí počítače řídit elektroniku kolem sebe** – třeba pračku, toustovač nebo celou chytrou domácnost.

Tahle výkonná mašinka neslouží k tomu, abys na ní surfoval po internetu nebo hrál hry, ale aby celé dny a noci **řídila chytrá zařízení**.

Takže pokud sis v Playgroundu naprogramoval třeba [hlídače ledničkových zlodějů](/cs/projects/chyt-mlsouna/), na Raspberry Pi poběží nonstop a ty nemusíš mít kvůli chytání zlodějů zapnutý svůj osobní počítač – přece jenom mají vykradači ledniček největší žně v noci. 🎂

Teď už víš, k čemu Raspberry Pi slouží, tak do něj **pojďme nainstalovat** [BigClown Playground](/cs/academy/co-je-to-bigclown-playground/). 💪 Vzhledem k tomu, že nejde o klasický počítač, bude postup trochu odlišný, než když instaluješ na svůj počítač třeba videohru.

Jestli už máš vlastní Raspberry Pi, pokračuj dál podle návodu. Pokud ho ale ještě nemáš, můžeš si Raspberry Pi koupit z [klauního e-shopu](https://obchod.bigclown.cz/raspberry-pi-3-set/) a celý tento návod přeskočit – pošleme ti ho totiž **kompletně nastavený a vyladěný**.

## K instalaci Playgroundu na Raspberry Pi budeš potřebovat:

* [Raspberry Pi 3 (Model B)](https://obchod.bigclown.cz/bigclown-hub/)
* MicroSD kartu s kapacitou minimálně 4 GB
* Síťový kabel k připojení do Wi-Fi routeru (stačí ten, co máte doma)
* Stolní počítač nebo notebook s operačním systémem Windows, macOS nebo Ubuntu (prostě tvůj počítač)
* A pak ještě tvůj neohrožený BigClown kit

Už jsi kompletně vyzbrojen? ⚔️ **Paráda, jde se instalovat**!

## Postup instalace operačního systému s BigClown Playgroundem

1. Nejprve si na svém počítači stáhni **dva programy**: [balenaEtcher](https://www.balena.io/etcher/) a [BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). **BigClown Raspbian** je operační systém, na kterém běží vše potřebné pro rozjetí BigClowna včetně Playgroundu. A pomocí **balenaEtcher** nahraješ Raspbian na MicroSD kartu.
2. Vlož MicroSD kartu do svého počítače. Pokud na ni tvůj počítač nemá dírku, použij externí čtečku SD karet.
3. Stažený soubor s balenaEtcher **otevři a nainstaluj**. Zabere to maximálně minutku.
4. Až bude hotovo, balenaEtcher spusť a klikni na **Select Image**. Najdi složku, do které jsi stáhl BigClown Raspbian, a otevři ho.

![nstalace](https://res.cloudinary.com/lukasfabik/image/upload/v1573304484/academy/jak-nainstalovat-playground-na-raspberry-pi/image3.png)

_S programem balenaEtcher si hravě poradíš. Má jen tři tlačítka, na která postupně klikneš._

1. Klikni na **Select target** a vyber MicroSD kartu, kterou jsi do počítače vložil.
2. A pak už jen klikni na **Flash**! ⚡ Zablýskne se, zahřmí a BigClown Raspbian se nahraje na tvou MicroSD kartu (ty první dvě věci se stanou, jen když je venku správné počasí).
3. Teď vlož MicroSD do slotu v **Raspberry Pi**.

**A je hotovo**! Teď už jen připojit Raspberry Pi k internetu, aby vše fungovalo, jak má.

## Jak připojit Raspberry Pi k internetu

Jestli máš doma volný síťový kabel, bude to hračka. Dost ale záleží na tom, jestli se doma k internetu připojujete právě přes **síťové kabely**, nebo přes **Wi-Fi router**. Pokud přes síťové kabely, zeptej se doma, jestli máte nějaký volný. Když jo, Raspberry Pi k němu připoj **a je hotovo**!

Jestli nemáte volné síťové kabely, ale jenom Wi-Fi router, bude to trošku složitější. Ale neboj, zmákneme to. 💪 Koukni na návod v samostatném článku.

Do USB portu v Raspberry Pi ještě připoj **Radio Dongle** ze svého BigClown kitu a vznikne ti tvůj vlastní, do puntíku vyladěný **BigClown Hub**. 🤡

## A je nainstalováno!

Vždycky, když budeš chtít na Raspberry Pi makat, jednoduše zadej do internetového prohlížeče adresu **hub.local**. Otevře se ti rozhraní, které vypadá úplně stejně jako Playground, akorát nemá záložku Firmware ([firmware](/cs/academy/jak-nahrat-firmware/) si proto do Core Module nebo Donglu nahrávej vždy u sebe na počítači).

![firmware](https://res.cloudinary.com/lukasfabik/image/upload/v1573304484/academy/jak-nainstalovat-playground-na-raspberry-pi/image2.png)

Takže v Raspberry Pi programuješ úplně **stejně, jak jsi zvyklý na svém počítači**. 🤓 Otevřeš [Node-RED](/cs/academy/co-je-node-red/) a jedeš.

A až budeš chtít svůj projekt na Raspberry Pi rozjet, nezapomeň do něj **připojit USB Dongle** ze svého BigClown kitu. Stačí ho vložit do kteréhokoliv USB portu.

Jo a gratulujeme! 🎉 Právě sis ze svého obydlí vytvořil **chytrou domácnost**.

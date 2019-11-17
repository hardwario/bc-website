---
title: Co jsou to proměnné a konstanty
draft: true
date: 2019-11-17T19:29:03.083Z
description: >-
  Proměnné a konstanty jsou základem každého programování. Jednoduše ti
  vysvětlíme, jak fungují a jak je využiješ při tvorbě vynálezů s BigClown IoT
  kitem.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image2.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image2.png
author: lukas_fabik
---
{{< perex >}}
Ať už s BigClownem programuješ domovní zvonek, detektor lupičů nebo stroj času, nevyhneš se při tom proměnným a konstantám – tyhle hodnoty jsou totiž základem každého programování. Prozradíme ti, jak proměnné a konstanty fungují a jak si je při programování ochočíš. 🐕
{{< /perex >}}

## Co jsou to konstanty? 

Konstanty si v programování představ jako **značky**, pod kterými se skrývají určité hodnoty. Na rozdíl od proměnných jsou konstanty neměnné – to znamená, že jsou pevně dané a **v průběhu programu nejdou změnit**. ⛔

Při běžném programování je nastavíš na začátku programování a fungují jako pravidla, podle kterých se program řídí. 

Konstanty, které znáš ze života:

Pi = 3,14

daň = 15 %

kůň = zvíře

## Co jsou to proměnné? 

Stejně jako konstanty, i proměnné představují značky, pod kterými se skrývají hodnoty. Rozdíl je ale v tom, že proměnné se **mohou v průběhu programu měnit**. 👍

Koukni se třeba na kalendář ve svém počítači. 📅 Je to program plný proměnných. Aktuální rok, den nebo hodina jsou všechno proměnné – označují hodnoty, které se **za určitých podmínek mění** (například den se mění každých 24 hodin).

Proměnné, které znáš ze života:

den = pondělí

teplota v místnosti = 22 °C

hlasitost hudby = 35

## Jak v BigClownu pracovat s proměnnými

Práce s konstantami a proměnnými je v BigClownu hračka. Oproti klasickému programování (třeba v JavaScriptu) totiž programovací nástroj [Node-RED](https://www.bigclown.com/cs/academy/co-je-node-red/) udělá spoustu kroků za tebe. S konstantami prakticky nepřijdeš do styku, protože jsou už součástí [firmwaru](https://www.bigclown.com/cs/academy/jak-nahrat-firmware/), který si natáhneš do Core modulu.

S proměnnými si ale užiješ spoustu zábavy. V Playgroundu s nimi budeš pracovat hlavně v nodech **Change** a **Switch** ze sekce Function.

![change a switch](https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image2.png)

## Node Change

V nodu Change si proměnnou pojmenuješ a nastavíš její hodnotu. Když node rozklikneš, uvidíš okýnko s nápisem **Rules** (Pravidla). Každé pravidlo určuje hodnotu jedné proměnné a můžeš si jich přidat několik pomocí tlačítka **Add** ve spodní části.

![rules](https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image5.png)

1. Když u jednoho pravidla rozklikneš rozbalovací lištu hned pod nápisem Rules, uvidíš tam 4 možnosti: **Set**, **Change**, **Delete** a **Move**.

**Set** – nastavuje hodnotu konkrétní proměnné

**Change** – mění hodnotu existující proměnné

**Delete** – odstraní proměnnou

**Move** – přesune hodnotu z jedné proměnné do druhé

2. Hned vedle rozbalovacího menu najdeš řádek, ve kterém nastavuješ jméno proměnné. 

![jméno proměnné](https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image6.png)

Na výběr máš ze tří předpon: **flow**., **global**. a **msg**.

**flow**. – Hodnota této proměnné bude platit jen ve tvém aktuálním flow., to znamená v jedné záložce Node-RED.

![flow](https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image4.png)

**global**. – Tato proměnná bude platit nejen v aktuálním flow, ale v úplně všech záložkách. Když máš třeba v jedné záložce flow pro domovní zvonek a ve druhé flow pro detektor pohybu, můžeš s touto proměnnou pracovat v obou projektech.

**msg**. – Tato proměnná má formu textové zprávy. Slouží například k tomu, abys mohl pojmenovat notifikace, které ti vyskočí v Blynku nebo na Dashboardu.

Jakmile si vybereš jeden ze tří druhů proměnných, musíš ho **pojmenovat**. Jen tak budeš moct s proměnnou pracovat v jiných nodech. Jméno proměnné jednoduše napiš za její předponu, takže třeba flow.optimum.

3. V řádku pod tím si nastavíš hodnotu proměnné. Na výběr tam máš hodně možností, ale pro začátek stačí, když budeš používat dvě – **Number** a **String**. Do Number zadáváš číselné hodnoty a do String píšeš text.

![number a string](https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image3.png)

Tak. Teď už umíš nastavovat proměnné. 🎉

## Node Switch

Switch je trochu jako vrátný. Kontroluje, zda mají proměnné konkrétní hodnotu, a pokud ano, pošle je v programu dál.

![Node Switch](https://res.cloudinary.com/lukasfabik/image/upload/v1574019399/blog/co-jsou-promenne-a-konstanty/image1.png)

Do řádku **Property** napíšeš jméno proměnné a hned pod něj, jakou má mít hodnotu. V obrázku nahoře to třeba znamená, že tahle větev programu se spustí jen v případě, že proměnná flow.optimum má hodnotu 22. 

Pomocí nodů Switch můžeš tvořit i **rozcestníky**. Například pokud má proměnná hodnotu 22, spustí se jedna varianta programu, pokud méně než 22, spustí se druhá, a pokud víc jak 22, spustí se třetí. Nové cesty přidáš tlačítkem **Add**.

A to je všechno! Teď už znáš základy proměnných a můžeš s nimi experimentovat. Pusť se do tvorby vlastního projektu a sleduj při tom, jak se v něm pracuje s proměnnými v nodech Change a Switch. 🤓

[Prohlédnout si projekty](https://www.bigclown.com/cs/projects/)

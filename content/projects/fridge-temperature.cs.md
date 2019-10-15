---
title: Změř teplotu ve vaší lednici nebo mrazáku
meta_title: IoT projekt, hlídač teploty pro domácí lednici
meta_description: Nauč se jeden z IoT projektů na rozšíření digitálních dovedností. Sestav se Starter Kitem od BigClownu zařízení, se kterým změříš, jak moc je u vás v mrazáku zima.
slug: teplota-v-lednici
draft: false
date: 2019-08-12
description: Nauč se jeden z IoT projektů na rozšíření digitálních dovedností. Sestav se Starter Kitem od BigClownu zařízení, se kterým změříš, jak moc je u vás v mrazáku zima.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
image_preview: /upload/ilustrace-zjisttim-jak-velka-zima-je-v-lednici.png
image_main: /upload/ilustrace-zjisttim-jak-velka-zima-je-v-lednici.png
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook:
kit: ["starter-kit","button-kit"]
---

## Úvod

{{< perex >}}
Myslíš si, že je v celé lednici stejná zima? A jak je na tom mrazák, mrazí dobře? Odhal to s IoT projektem pro Starter Kit – teplotu uvidíš přímo ve svém mobilu. ❄
{{< /perex >}}

S tímhle projektem se naučíš **měřit teplotu s IoT**. Postačí ti základní BigClown sada, tedy [**Starter Kit**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Připrav si krabičku

1. Starter Kit sestav a spáruj: jestli to děláš poprvé, [připravili jsme k tomu jednoduchou příručku]({{< ref "/handbook/_index.cs.md" >}}). Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

2. Změny teploty uvidíš v Playgroundu v záložce **Messages**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image4.png" alt = "BigClown Playground MQTT messages" >}}

## Nastav si Node-RED

1. Abys viděl změny teploty, vytvoř si vlastní graf, a to pomocí bublin v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.

2. Na čistou plochu přetáhni světle fialový node (bublinu) s názvem MQTT. Najdeš ho v sekci Input.

3. Node rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tuhle:

```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image2.png" alt = "Node-RED dashboard chart" >}}

Potvrď tlačítkem **Done**.

4. Vedle nodu postav druhý, světle modrý s názvem **Chart** (graf). Najdeš ho v sekci Dashboard. Tímhle nodem určíš, jak bude naměřená teplota znázorněná na obrazovce. Oba nody propoj. 👌

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image5.png" alt = "Node-RED chart settings in BigClown Playground" >}}

5. Na node Chart dvakrát klikni. V řádku **X-axis** nastavíš, za jakou dobu data v grafu uvidíš. Napiš sem, kolik potřebuješ, třeba délku celého vyučování.
V řádku Label svůj graf libovolně pojmenuj.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image1.png" alt = "Chart in BigClown Playground" >}}

Potvrď tlačítkem **Done**.

6. Teď můžeš zmáčknout červené tlačítko **Deploy** v pravém horním rohu obrazovky. 🚨 Tím celý flow aktivuješ.
❗ **Pozor:** Při každé změně v nodech musíš Deploy mačkat znovu.

7. Překlikni se do jiné záložky, do **Dashboardu**. Tady je tvůj graf. 👏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image3.png" alt = "MQTT topic" >}}

## Měř dle libosti

1. A teď podnikej **vlastní experimenty**. Které místo **v ledničce** je nejchladnější? Je to nahoře, veprostřed, nebo úplně dole? 👌
Přitom otestuj, jestli lednička vážně chladí **tak, jak výrobce sliboval**. 🕵️

2. To samé zkoušej v **mrazáku**. Přemisťuj krabičku nahoru dolu.
❓ Zkus přijít na to, kam dávat zeleninu, maso nebo mléko. Vygoogli si, jaká potravina potřebuje větší zimu, a která naopak menší. 💡

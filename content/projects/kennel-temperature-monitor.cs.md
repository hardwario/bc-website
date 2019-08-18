---
title: Hlídač teploty pro chlupatého hlídače, kontroluj teplotu v boudě svého psa
meta:
    title: IoT projekt, hlídač teploty do psí boudy
    description: Jeden z IoT projektů na rozšíření digitálních dovedností. Sestav se Starter Kitem od BigClownu zařízení, se kterým uvidíš, jakou má tvůj pes v boudě teplotu.
slug: hlidac-teploty-psi-boudy
draft: false
date: 2019-08-12
description: Vytvoř si ze Starter Kitu od BigClown IoT detektor změny pohybu s tímhle jednoduchým návodem. A nezapomeň ho s kámoši otestovat v cool hře.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /upload/project_placeholder.jpg
image_main:
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook: "starter-kit"
---

## Úvod

{{< perex >}}
Zima, že bys ani psa nevyhnal? Hlídej teplotní komfort svého nejlepšího kámoše a sleduj teplotu v jeho boudě. 🐶
{{< /perex >}}

S tímhle projektem se naučíš **měřit teplotu s IoT a zobrazit ji na grafu**. Postačí ti základní BigClown sada, tedy **Starter Kit**. Uvidíš, že ti hafan poděkuje. Třeba míň bobky. Nebo tak něco. 🐩

{{< modules >}}

## Připrav si krabičku

1. Starter Kit sestav a spáruj: jestli to děláš poprvé, připravili jsme k tomu jednoduchou příručku. Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, zjistíš to tady.

2. Změny teploty uvidíš v Playgroundu v záložce **Messages**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image5.png" alt = "MQTT messages" >}}

## Nastav si Node-RED

1. Programování začni v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.

2. Na čistou plochu přetáhni světle fialový nod (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

3. Nod rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tuhle:

```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image1.png" alt = "MQTT topic" >}}

Potvrď tlačítkem **Done**.

4. Vedle nodu postav druhý, světle modrý s názvem **Chart** (graf). Najdeš ho v sekci Dashboard. Tímhle nodem určíš, jak bude naměřená teplota znázorněná na obrazovce. Oba nody propoj. 👌

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image4.png" alt = "Node-RED dashboard chart" >}}

5. Na nod Chart dvakrát klikni. V řádku **X-axis** si nastavíš, za jak dlouhou dobu bude graf teplotu ukazovat. Nastav, kolik potřebuješ.
Na řádku **Label** si graf libovolně přejmenuj.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image3.png" alt = "Chart settings" >}}

Potvrď tlačítkem **Done**.


6. Teď můžeš zmáčknout červené tlačítko **Deploy** v pravém horním rohu obrazovky. 🚨 Tím celý flow aktivuješ.

❗ **Pozor:** Při každé změně v nodech musíš Deploy mačkat znovu.

7. Překlikni se do jiné záložky, do **Dashboardu**. Tady je tvůj graf. 👏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image2.png" alt = "Temperature chart from kennel" >}}

## A akce!

1. Krabičku přilep kobercovou páskou **dovnitř boudy na stěnu**. 🏡

2. Sleduj, **jak se mění teplota**, když je hafan venku a když je uvnitř. Pes totiž boudu trochu zahřívá. 🐕
**Náš tip:** Až teploty klesnou, vylož boudu dekou nebo slámou.

3. Když je pod −15 °C na nic nečekej a **pusť psa dovnitř domu**. Ubytuj ho alespoň v předsíni. ❄

4. Uvidíš, že **hafan bude spoko**! 👌
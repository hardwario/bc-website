---
title: Který z tvých kámošů je zenový kung-fu mástr? 🐉
meta_title: Který z tvých kámošů je zenový kung-fu mástr? 🐉
meta_description: Vytvoř si ze Starter Kitu od BigClown IoT detektor změny pohybu s tímhle jednoduchým návodem. A nezapomeň ho s kámoši otestovat v cool hře.
slug: kung-fu-mastr
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
image_preview: /upload/ilustrace-chlapec-v-pozici-stromu.png
image_main: /upload/ilustrace-chlapec-v-pozici-stromu.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
kit: ["starter-kit"]
handbook: "starter-kit"
---

## Úvod

{{< perex >}}
S touhle hrou se s kámoši nudit nebudete. Nastav si svůj Starter Kit tak, aby dokázal rozeznat i ten nejjemnější pohyb.
{{< /perex >}}

V tomhle projektu se naučíš vytvořit takzvaný **still position detector**, tedy **detektor pohybu**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou – [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Stáhni si nový firmware

1. Pokud to ještě nemáš, Starter Kit [sestav]({{< ref "/handbook/_index.cs.md" >}}).

2. Na Core Module potřebuješ nahrát speciální firmware, a to **bcf radio still position detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). S tímhle firmwarem bude krabička mnohem citlivější na pohyb a změny pohybu časově změří. 👌
**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

3. [Core Module spáruj s USB Donglem]({{< ref "/academy/how-to-pair-kit.cs.md" >}}). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **still-position-detector**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image5.png" alt = "Devices list in Playground" >}}

## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}).

2. Začni jako vždycky: na plochu nejdřív umísti **MQTT** node ze sekce Inputs.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým bude krabička počítat čas strávený v jedné poloze:

```
node/still-position-detector:0/hold-time
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image2.png" alt = "MQTT node and topic" >}}

Potvrď tlačítkem **Done**.

3. Aby zařízení fungovalo, na plochu musíš umístit ještě další bublinu. Najdeš ji v sekci Dashboard jako **Text**. Tenhle node zajistí zapisování výsledku.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image4.png" alt = "Dashboard text Node-RED" >}}

4. Na node Text dvakrát ťukni. V nastavení uprav jeho **Label**, tedy popisek. Napiš tam třeba **Still time**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image6.png" alt = "Text settings" >}}

Potvrď tlačítkem Done.

5. **Oba nody propoj.** V pravém horním rohu nezapomeň ťuknout na červené **Deploy**, kterým celé flow rozjedeš.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image3.png" alt = "Connect and Deploy" >}}

## A… akce!

Wow, v ruce máš časovač pohybu. Nezní to cool? Zkus si to!

1. **Zmáčkni tlačítko** na krabičce. ⏺️

2. Po malé chvilce s **krabičkou pohni**.

3. Na záložce **Dashboard** v Playgroundu uvidíš, **kolik času** od zmáčknutí tlačítka a pohybu uběhlo. Mazec! 👍

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image1.png" alt = "Kung-Fu master timer" >}}

## Soupeř s kámoši

1. **Vyzvi kámoše na souboj** a zjisti, **kdo krabičku nejdýl udrží bez jediného pohybu v různých polohách**, třeba:
    - na jedné noze,
    - v planku,
    - ve stojce 🙃,
    - jakkoli jinak vás napadne.

    Slovní rušení protivníka je samozřejmě povoleno, ale nesahat! 🤡

2. **Výsledky zapisuj**.

3. Ten, kdo má nejvíckrát nejlepší čas, je **zenový kung-fu mástr**! 🙇

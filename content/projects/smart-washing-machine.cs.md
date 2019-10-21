---
title: Přeměň vaši starou pračku na chytrou
meta_title: Proměň vaši starou pračku na chytrou
meta_description: Nechej rodiče žasnout. Postav ze Starter Kitu od BigClown IoT detektor, který upozorní, až pračka dopere.
slug: chytra-pracka
draft: false
date: 2019-08-12
description: Nechej rodiče žasnout. Postav ze Starter Kitu od BigClown IoT detektor, který upozorní, až pračka dopere.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571601962/projects/smart-washing-machine/hardwario-ilustrace-ochytri-pracku.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571601962/projects/smart-washing-machine/hardwario-ilustrace-ochytri-pracku.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
kit: ["starter-kit","button-kit"]
handbook:
---

## Úvod

{{< perex >}}
Zvedni rodinné pračce IQ. 🤖 Naprogramuj pomocí krabičky IoT upozornění, díky kterému se tví rodiče dozvědí, že várka doprala.
{{< /perex >}}

V tomhle projektu se naučíš **nastavit krabičku tak, že pozná, až pračka dopere**, a pošle o tom **upozornění na mobil**.📱 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou – [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Stáhni si nový firmware

1. Pokud to ještě nemáš, Starter Kit [sestav]({{< ref "/handbook/_index.cs.md" >}}).

2. Na Core Module nahraj nový firmware, a to **bcf-radio-washing-machine-monitor** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivěji vnímat otřesy pračky. 🔃

**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

3. [Core Module spáruj s USB Donglem]({{< ref "/academy/how-to-pair-kit.cs.md" >}}). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **washing-machine-detector**. 👌

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368246/projects/smart-washing-machine/image4.png" alt = "BigClown Playground devices list" >}}

## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}). 🤖

2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.
Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička změří, kdy se pračka přestane otřásat:

```
node/washing-machine-detector:0/washing/finished
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image2.png" alt = "Check alias of BigClown kit" >}}

Potvrď tlačítkem **Done**.

3. Vedle postav **node Change** ze sekce Functions.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image3.png" alt = "Add change node to flow" >}}

4. Uvnitř nodu Change **nastavíš zprávu**, která se rodičům po doprání pošle do mobilu. Mysli na to, že by měla být bez háčků a čárek.
Malá inspirace:
    - Mate tam cisty pradlo.
    - Doprala jsem. Dostanu ted tyden dovolene?
    - Doprano a uz me nechte bejt. Vase pracka.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image5.png" alt = "Set message to show" >}}

Potvrď tlačítkem **Done**.

## Nastav si mobil

1. Čas ukrást mámě nebo tátovi mobil a nastavit jim jejich vlastní Blynk. Pokud s Blynkem neumíš, [**podívej se na návod**]({{< ref "/academy/how-to-connect-blynk.cs.md" >}}).

2. V Blynku vytvoř **nový projekt**. Teď se ti na e-mail poslal token, který ale ještě nechej chvíli v klidu.

3. Na plochu Blynku **umísti notifikaci**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368247/projects/smart-washing-machine/image11.png" alt = "Add Blynk Notify widget" >}}
{{< /middle >}}

4. **Projekt spusť** tlačítkem Play vpravo nahoře.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image6.png" alt = "Set Blynk Notify widget" >}}
{{< /middle >}}

## Dokonči programování

1. Vrať se k počítači. Na plochu Node-RED umísti poslední node, **Notify** ze sekce Blynk ws.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368247/projects/smart-washing-machine/image9.png" alt = "Add Blynk Notify node" >}}

2. Dvakrát na node klikni. Pak klikni na **tužku**. ✏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image1.png" alt = "Blynk Connection settings" >}}

3. Otevřelo se ti okno pro párování s Blynkem. Tady nastav **URL** a **Token** projektu. URL zkopíruješ jako vždycky ze spodní sekce obrazu a token projektu jsi dostal na e-mail po vytvoření nového projektu v Blynku.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image8_new.png" alt = "Blynk Connection settings" >}}

**Náš tip:** V řádku **Name **nastav jméno projektu, abys ho lépe poznal.

Všechno postupně potvrď tlačítky **Add** a **Done**.

4. Už ti to zbývá jenom **propojit** a poslat příkaz do vesmíru červeným tlačítkem **Deploy** vpravo nahoře. 👏

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566368247/projects/smart-washing-machine/image8.png" alt = "Deploy flow in Node-RED" >}}

## Roztoč to!

1. **Krabičku polož na pračku**. Přilep ji malým kouskem izolepy, aby nespadla.

2. **Krabička pozná, že pračka dopere**, protože se přestane otřásat. Pošle o tom zprávu mámě nebo tátovi na mobil.
Hustý, co? A rázem žiješ v **chytré domácnosti**! 🤡

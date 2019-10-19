---
title: Proměň vaši starou pračku na chytrou
draft: true
featured: true
handbook: starter-kit
date: 2019-10-19T08:04:37.657Z
description: >-
  Nechej rodiče žasnout. Postav ze Starter Kitu od BigClown IoT detektor, který
  upozorní, až pračka dopere.
slug: premen-pracku-na-chytrou
meta_title: Proměň vaši starou pračku na chytrou
meta_description: >-
  Nechej rodiče žasnout. Postav ze Starter Kitu od BigClown IoT detektor, který
  upozorní, až pračka dopere.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571473593/projects/Turn-your-old-washing-machine-into-a-smart-one/6-ilustrace-ochytri-pracku.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571473593/projects/Turn-your-old-washing-machine-into-a-smart-one/6-ilustrace-ochytri-pracku.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
---
## Úvod

{{< perex >}}
Zvedni rodinné pračce IQ. 🤖 Naprogramuj pomocí krabičky IoT upozornění, díky kterému se tví rodiče dozvědí, že várka doprala.
{{< /perex >}}

V tomhle projektu se naučíš nastavit krabičku tak, že pozná, až pračka dopere, a pošle o tom upozornění na mobil. 📱 👈 

Budeš potřebovat jen krabičku s tlačítkem a USB dongle. Proto si vystačíš se základní BigClown sadou – [Starter Kitem](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## 1. Stáhni si nový firmware

1. Pokud to ještě nemáš, Starter Kit [sestav](https://www.bigclown.com/cs/handbook/?utm_source=handbook&utm_medium=print&utm_campaign=starter-kit-handbook&utm_content=cz). 
2. Na Core Module nahraj nový firmware, a to **bcf-radio-washing-machine-monitor** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivěji vnímat otřesy pračky. 🔃
   **Náš tip**: Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady.](https://www.bigclown.com/cs/academy/jak-nahrat-firmware/?utm_source=handbook&utm_medium=print&utm_campaign=starter-kit-handbook&utm_content=cz) 
3. [Core Module spáruj s USB Donglem](https://www.bigclown.com/cs/academy/jak-sparovat-kit/). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **washing-machine-detector**. 👌 

![vnimej-otresy-pracky](https://res.cloudinary.com/lukasfabik/image/upload/v1571473473/projects/Turn-your-old-washing-machine-into-a-smart-one/image1.png)

## **Rozjeď to v Node-RED**

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://www.bigclown.com/cs/academy/co-je-node-red/). 🤖
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička změří, kdy se pračka přestane otřásat: 

```
node/washing-machine-detector:0/washing/finished
```

![node-red](https://res.cloudinary.com/lukasfabik/image/upload/v1571473473/projects/Turn-your-old-washing-machine-into-a-smart-one/image3.png)

Potvrď tlačítkem **Done**.

3. Vedle postav **node Change** ze sekce Functions.

![node-change](https://res.cloudinary.com/lukasfabik/image/upload/v1571473473/projects/Turn-your-old-washing-machine-into-a-smart-one/image2.png)

4. Uvnitř nodu Change **nastavíš zprávu**, která se rodičům po doprání pošle do mobilu. Mysli na to, že by měla být bez háčků a čárek.
   Malá inspirace:
   * Mate tam cisty pradlo.
   * Doprala jsem. Dostanu ted tyden dovolene?
   * Doprano a uz me nechte bejt. Vase pracka.

![nastav-zpravu](https://res.cloudinary.com/lukasfabik/image/upload/v1571473473/projects/Turn-your-old-washing-machine-into-a-smart-one/image5.png)

Potvrď tlačítkem **Done**.

## Nastav si mobil

1. Čas ukrást mámě nebo tátovi mobil a nastavit jim jejich vlastní **Blynk**. Pokud s Blynkem neumíš, [podívej se na návod](https://www.bigclown.com/cs/academy/jak-pripojit-blynk/).
2. V Blynku vytvoř **nový projekt**. Teď se ti na e-mail poslal token, který ale ještě nechej chvíli v klidu.
3. Na plochu Blynku **umísti notifikaci**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1571473473/projects/Turn-your-old-washing-machine-into-a-smart-one/image4.png" alt = "Node-RED Blynk notifikace" >}}
{{< /middle >}}

4. **Projekt spusť** tlačítkem Play vpravo nahoře.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1571473474/projects/Turn-your-old-washing-machine-into-a-smart-one/image7.png" alt = "Node-RED Blynk notifikace" >}}
{{< /middle >}}

## Dokonči programování

1. Vrať se k počítači. Na plochu Node-RED umísti poslední node, **Notify** ze sekce Blynk ws. 

![node-notify](https://res.cloudinary.com/lukasfabik/image/upload/v1571473474/projects/Turn-your-old-washing-machine-into-a-smart-one/image10.png)

2. Dvakrát na node klikni. Pak klikni na tužku. ✏

![dokonceni-programovani](https://res.cloudinary.com/lukasfabik/image/upload/v1571473474/projects/Turn-your-old-washing-machine-into-a-smart-one/image9.png)

3. Otevřelo se ti okno pro párování s Blynkem. Tady nastav **URL** a **Token** **projektu**. URL zkopíruješ jako vždycky ze spodní sekce obrazu a token projektu jsi dostal na e-mail po vytvoření nového projektu v Blynku.

![url-a-token-projektu](https://res.cloudinary.com/lukasfabik/image/upload/v1571473474/projects/Turn-your-old-washing-machine-into-a-smart-one/image8.png)

**Náš tip**: V řádku **Name** nastav jméno projektu, abys ho lépe poznal.

Všechno postupně potvrď tlačítky **Add** a **Done**.

4. Už ti to zbývá jenom **propojit** a poslat příkaz do vesmíru červeným tlačítkem **Deploy** vpravo nahoře. 👏

![deploy-tlacitko](https://res.cloudinary.com/lukasfabik/image/upload/v1571473473/projects/Turn-your-old-washing-machine-into-a-smart-one/image6.png)

## Roztoč to!

1. **Krabičku polož na pračku**. Přilep ji malým kouskem izolepy, aby nespadla.
2. **Krabička pozná, že pračka dopere**, protože se přestane otřásat. Pošle o tom zprávu mámě nebo tátovi na mobil. 
   Hustý, co? A rázem žiješ v **chytré domácnosti**! 🤡

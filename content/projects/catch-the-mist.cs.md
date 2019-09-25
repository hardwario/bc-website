---
title: Chyť nenasytného vykradače ledniček
meta_title: Chyť nenasytného vykradače ledniček
meta_description: Vytvoř si ze Starter Kitu od BigClown IoT hlídač svého jídla v lednici. Připravili jsme pro tebe jednoduchý návod.
slug: chyt-mlsouna
draft: false
date: 2019-08-12
description: Vytvoř si ze Starter Kitu od BigClown IoT hlídač svého jídla v lednici. Připravili jsme pro tebe jednoduchý návod.
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
handbook:
---

## Úvod

{{< perex >}}
Určitě to znáš. V lednici si necháváš poslední kousek dortu ze svojí oslavy narozenin, ale když se k němu konečně dostaneš… Je pryč. A nenasytný sourozenec má čokoládu na bradě. Zastav ho s chytrou krabičkou! 🎂
{{< /perex >}}

V tomhle projektu se naučíš vytvořit **detektor otevírání ledničky**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou – [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Stáhni si nový firmware

1. Pokud to ještě nemáš, Starter Kit [sestavj]({{< ref "/handbook/_index.cs.md" >}}).
2. Na Core Module nahraj speciální firmware, a to **bcf-radio-x-axis-detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivější na pohyb. 👌
**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).
3. [Core Module spáruj s USB Donglem]({{< ref "/academy/how-to-pair-kit.cs.md" >}}). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **x-axis-detector**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154098/projects/catch-the-mist/image8.png" alt = "BigClown Playground - devices" >}}

## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}).
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.
Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička odhalí změnu pohybu:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image3.png" alt = "MQTT topic" >}}

Potvrď tlačítkem **Done**.

3. Teď si tam nahraj malý javascript. 🙌 Nejdřív na plochu polož node Function ze stejnojmenné sekce…

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154098/projects/catch-the-mist/image7.png" alt = "Node-RED function" >}}

4. ...a pak na tenhle node dvakrát ťukni. **Do pole Function zkopíruj tenhle kód**, který bude počítat, kolikrát se lednice otevřela:

```
var count = flow.get("count") || 0;
count++;
flow.set("count", count);
msg.payload = count;
return msg;
```

Node si ještě pojmenuj v řádku Label, třeba na **Počítadlo**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image6.png" alt = "Node-RED counter" >}}

Potvrď tlačítkem **Done**.


5. Vedle tohohle nodu postav ještě poslední, a to **node Text** ze sekce Dashboard.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image6.png" alt = "Node-RED dashboard text input" >}}

6. Uvnitř nodu změň jeho Label na text, který chceš, aby se ti při počítání ukazoval. Takže třeba **Otevřená lednice**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154098/projects/catch-the-mist/image2.png" alt = "Node-RED dashboard text input label" >}}

Potvrď tlačítkem **Done**.

7. **Všechny tři nody propoj** tak, jak to vidíš na obrázku. V pravém horním rohu nezapomeň ťuknout na staré známé tlačítko **Deploy**, kterým celé flow rozjedeš.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image1.png" alt = "Connect and deploy flow in Node-RED" >}}

## A… akce!

1. Pojď pastičku zprovoznit. **Dej do lednice dort nebo jiné lákadlo**. 🍰
2. Krabičku vlož naležato **do dvířek lednice**.
3. Když se dvířka otevřou, krabička ti pošle upozornění na záložku **Dashboard**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154097/projects/catch-the-mist/image5.png" alt = "Node-RED dashboard results" >}}

4. **Utíkej zpacifikovat zlotřilého zloducha!** 👮
5. A vychutnej si svou sladkou odměnu ty sám. 💘

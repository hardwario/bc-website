---
title: Kdo má největší odstředivou sílu? Vytvoř si IoT káču a změř to
draft: false
date: 2019-08-12T00:00:00.000Z
description: "Poměř pak s kámoši, kdo z vás je odstředivě nejsilnější! \U0001F4AA Návod na to, jak si ze Starter Kitu od BigClown postavíš chytrou káču."
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /upload/ilustrace-hra-s-kamarady-o-nejvetsi-odstredivou-silu.png
image_main: /upload/ilustrace-hra-s-kamarady-o-nejvetsi-odstredivou-silu.png
author: lukas_fabik
modules: ["core","button","mini_battery","usb_dongle"]
handbook:

---
## Úvod

{{< perex >}}
Pamatuješ si ještě káču? Asi jsi měl dřevěnou nebo plastovou, ale vsadíme se, že nebyla chytrá. Teď si ji konečně vyrobíš – zaznamená tvou odstředivou sílu. Poměř pak s kámoši, kdo z vás je odstředivě nejsilnější! 💪
{{< /perex >}}

V tomhle projektu se naučíš vytvořit **změřit rychlé točení krabičky**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou – [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Stáhni si nový firmware

1. Pokud to ještě nemáš, Starter Kit [sestav]({{< ref "/handbook/_index.cs.md" >}}).
2. Na Core Module nahraj nový firmware, a to **bcf radio spinning game** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivě vnímat rotace. 👌

**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

3. [Core Module spáruj s USB Donglem]({{< ref "/academy/how-to-pair-kit.cs.md" >}}). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **rotation-g-meter**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image11.png" alt = "BigClown devices list" >}}

## Stavěj v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}). 🤖
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička změří odstředivou sílu:

```
node/rotation-g-meter:0/rotation-g
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image5.png" alt = "MQTT topic" >}}

Potvrď tlačítkem **Done**.

3. Překvápko. 😲 Pod první MQTT nod umísti ještě druhý **MQTT node** ze sekce Input. Tentokrát do jeho nastavení ulož jiný **Topic**, se kterým krabička změří čas rotace:


```
node/rotation-g-meter:0/rotation-time
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292683/projects/highest-centrifugal-force/image14.png" alt = "MQTT input node" >}}

4. K oběma nodům umísti po jednom nodu pro javascript. Najdeš je v sekci **Function** pod jménem Function (originální 🤡).

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image2.png" alt = "javascript fuction node" >}}

5. Na **horní node Function** dvakrát klikni a do velkého políčka vlož tenhle kód, který bude zapisovat rekordní odstředivou sílu. 💪


```
var record = flow.get("record") || flow.set("record", 0.0);
var lastSpin = parseFloat(msg.payload);

if(lastSpin > flow.get("record"))
{
    flow.set("record", lastSpin);
    return msg;
}
```

V řádku **Name** nod pojmenuj jako _Uložení rekordu_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image10.png" alt = "javascript function Node-RED" >}}

Potvrď tlačítkem **Done**.

6. Do **spodního nodu Function** vlož kód, který bude zapisovat rekordní čas točení. ⏰


```
var record = flow.get("timeRecord") || flow.set("timeRecord", 0.0);
var lastSpinTime = parseFloat(msg.payload);

if(lastSpinTime > flow.get("timeRecord"))
{
    flow.set("timeRecord", lastSpinTime);
    return msg;
}
```

V řádku **Name** nod pojmenuj jako _Uložení rekordu_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image3.png" alt = "Javascript Funciton BigClown Kit" >}}

Potvrď tlačítkem **Done**.

7. Pod horní Function nod vlož **textový node** ze sekce Dashboard. Můžeš ho vložit i jinam, ale pro přehlednost bude lepší, když budou pod sebou.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image7.png" alt = "Text Node" >}}

V nastavení ho pojmenuj jako _Poslední točení_. Takhle se ti bude zobrazovat hodnota, kterou krabička právě naměřila.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image12.png" alt = "Edit text Node" >}}

8. Pod tenhle nod polož ještě jeden, díky kterému se budou hodnoty zapisovat do grafu. 📈 Najdeš ho jako **node Chart** v sekci Dashboard.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image6.png" alt = "Chart node" >}}

Pojmenuj ho v řádku **Label** jako _Historie_. Do řádku **X-asis Label** nastav automatic, to znamená, že se jednotka přidá automaticky.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566334139/projects/highest-centrifugal-force/image13.png" alt = "settings of chart node in Node-RED" >}}

9. Pod druhý javascript vlož textový **node Text** ze sekce Dashboard.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image1.png" alt = "Dashboard text node" >}}

V něm pojmenuješ, jak se bude zobrazovat délka nejnovější rotace: _Doba posledního točení_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image12.png" alt = "Set text node in dashboard" >}}

10. Za obě úrovně umísti po jednom textovém **nodu Text** ze sekce Dashboard. Ty ovlivní, jak v grafu uvidíš zapsaný rekordní čas. Nastav v nich proto postupně Label **Rekord** a **Rekordní čas**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image4.png" alt = "BigClown playground text nodes" >}}

11. A pak to všechno **propoj** podle obrázku. Na ploše ti tak vyjdou dvě samostatné flow. Nezapomeň nakonec zmáčknout tlačítko **Deploy**, kterým to celé zprovozníš. 🚨

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image9.png" alt = "Deploy Node-RED flow" >}}

## Roztoč to!

1. Sezvi všechny kámoše a pořádně je vyhecuj. Dejte si třeba kolu. 😄
2. Změřte svou odstředivou sílu! Jeden po druhém točte.
   **Náš tip:** Nejlíp se ti bude točit, když krabičku postavíš na tlačítko.
3. Výsledky sleduj na záložce **Dashboard**. Tak hodně štěstí a… **Roztoč to jak roztoč!**

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566334137/projects/highest-centrifugal-force/image15.png" alt = "settings of chart node in Node-RED" >}}

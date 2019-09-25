---
title: Chyť zvědavce, co ti leze do šuplíku
meta_title:  Chyť zvědavce, co ti leze do šuplíku
meta_description: Vytvoř si ze Starter Kitu od BigClown IoT hlídač svého šuplíku a nechej si posílat upozornění do mobilu. Připravili jsme pro tebe jednoduchý návod.
slug: ohlidej-tajny-suplik
draft: false
date: 2019-08-12
description: Vytvoř si ze Starter Kitu od BigClown IoT hlídač svého šuplíku a nechej si posílat upozornění do mobilu. Připravili jsme pro tebe jednoduchý návod.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /upload/12-ilustrace-ohlidej-si-svuj-tajny-suplik.png
image_main: /upload/12-ilustrace-ohlidej-si-svuj-tajny-suplik.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook:
---

## Úvod

{{< perex >}}
Máš v šuplíku deníček, básničky nebo tajný vládní dokument? Pokud je to něco, co by nikdo neměl vidět, zabezpeč to. 🔒 Vytvoř si ze Starter Kitu IoT hlídače šuplíku, který ti pošle upozornění na mobil. 📲
{{< /perex >}}

V tomhle projektu se naučíš vytvořit **detektor otevírání šuplíku, který ti pošle upozornění na mobil**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou – [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Stáhni si nový firmware

1. Pokud to ještě nemáš, Starter Kit [sestav]({{< ref "/handbook/_index.cs.md" >}}).
2. Na Core Module nahraj speciální firmware, a to **bcf-radio-x-axis-detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivější na pohyb. 👌

**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

3. [Core Module spáruj s USB Donglem]({{< ref "/academy/how-to-pair-kit.cs.md" >}}). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **x-axis-detector**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image26.png" alt = "BigClown Playground - devices" >}}

## Rozjeď appku na mobilu

1. **Pokračuj na svém mobilu**. Krabička se propojí se smartphonem díky **appce Blynk**. 📱 [**Zjisti, jak na Blynk**]({{< ref "/academy/how-to-connect-blynk.cs.md" >}}).

2. Z nabídky zvol **Styled button** (vyšperkované tlačítko). 🚨 Tlačítko se ti umístí na plochu projektu.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image20.png" alt = "Add style button to blynk app" >}}
{{< /middle >}}

3. Když na tlačítko klikneš, dostaneš se do nastavení. Teď dávej bacha.
V horním řádku si detektor **pojmenuj**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image12.png" alt = "Settings of styled button in Blynk App" >}}
{{< /middle >}}

Hned pod tím zvolíš **PIN**. Klikni na něj. Vyber si **virtuální** a **číslo zvol dle libosti**. Ale zapamatuj si ho, budeš ho pak zadávat na počítači. PIN ulož a pokračuj v nastavování tlačítka.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364978/projects/safe-drawer/image25.png" alt = "Styled button in Blynk App" >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364965/projects/safe-drawer/image14.png" alt = "Styled button in Blynk App" >}}
{{< /middle >}}

Přepni tlačítko z módu push na **switch**, abys mohl detektor pohodlně spouštět a vypínat.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image18.png" alt = "Settings of styled button in Blynk App" >}}
{{< /middle >}}

A dál už jsou jenom takové ty **dyzajnové blbůstky**. 💄 Můžeš si navolit barvu tlačítka, když je vypnuté a zapnuté, jeho tvar a další nezbytnosti.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image13.png" alt = "Settings of styled button in Blynk App" >}}
{{< /middle >}}

Až všechno budeš mít, **vrať se na plochu** skrz šipku vlevo nahoře.

4. Klepni na plochu, abys přidal další prvek na plochu. Bude to notifikace.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364964/projects/safe-drawer/image1.png" alt = "Add Blynk Notification node" >}}
{{< /middle >}}

5. Celá tvoje plocha teď vypadá takhle.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png" alt = "Your Blynk App" >}}
{{< /middle >}}

6. Poťukej na tlačítko, mělo by se přepínat z módu ON (zapnuto) do módu OFF (vypnuto).

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image4.png" alt = "Your Blynk App" >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png" alt = "Your Blynk App" >}}
{{< /middle >}}

## Nastav v Node-RED zprávu

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}).

2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička odhalí změnu pohybu:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364963/projects/safe-drawer/image6.png" alt = "Set MQTT input in Bigclown Playground" >}}

3. Vedle tohohle nodu umísti **node Switch** ze sekce **Function**. Díky tomuhle nodu můžeš detekci vypnout, když jsi doma a otvíráš šuplík sám.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364972/projects/safe-drawer/image16.png" alt = "Add Switch node to Playground" >}}

4. Uvnitř nodu změň řádek Property na **flow. active**. Do řádku níž číslici **1**. S touhle jedničkou se notifikace pošle, když je tlačítko zapnuté, jinak se zahodí. Mrkej na obrázek.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364968/projects/safe-drawer/image19.png" alt = "Set Switch node in Node-RED Playground" >}}

5. Za tohle postav ještě **node Change** ze sekce Function.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364962/projects/safe-drawer/image2.png" alt = "Add Switch node in Node-RED Playground" >}}

6. V něm si nastav **zprávu, která se ti pošle do mobilu**. Dávej bacha, čárky a háčky Blynk neumí. 🤷

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364965/projects/safe-drawer/image10.png" alt = "Set the message for mobile app" >}}

7. Na konec tohohle potravního řetězce umísti **node Notify** ze sekce Blynk ws.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364969/projects/safe-drawer/image15.png" alt = "Send mobile notification with this node" >}}

8. Když na něj dvakrát klikneš, otevře se ti nastavení. Tady klepni na **malou tužtičku**. Dostaneš se do ještě hlubšího nastavení.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364971/projects/safe-drawer/image23.png" alt = "Blynk App Settings" >}}

9. Zajímat tě budou první dva řádky. **URL** zkopíruj z odkazu níž a **token** zkopči z e-mailu, který se ti poslal, když jsi vytvořil projekt v Blynku.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364968/projects/safe-drawer/image17.png" alt = "Blynk App connection with Token and URL" >}}

**Náš tip:** V řádku Name projekt pojmenuj. V dalších nodech ho pak jednoduše rozeznáš.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364971/projects/safe-drawer/image22.png" alt = "Blynk App settings in Node-RED" >}}

10. Teď tenhle řetězec **pospojuj**. A jdeme dál.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364963/projects/safe-drawer/image11.png" alt = "Connect flow in Node-RED" >}}

## Nastav v Node-RED detektor pohybu

1. Načni další řetězec. Polož na plochu **node Write event** ze sekce Blynk WS. Ten ovládá tlačítko.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364963/projects/safe-drawer/image5.png" alt = "Send an event to Blynk App" >}}

2. Když na něj dvakrát klikneš, do řádku **Virtual Pin** vyplň číslo, které jsi zadával jako PIN na Blynku (bez písmene V).

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364976/projects/safe-drawer/image21.png" alt = "Set Virtual PIN in Blink node" >}}

Na řádku **Connection** pak vyber projekt, který jsi pojmenoval u nodu Notify.

3. A poslední node do party. Polož na plochu **node Change** ze sekce Function.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364962/projects/safe-drawer/image3.png" alt = "Add change node to flow in Node-RED" >}}

4. Node nastavíš tak, aby reagoval na vypnutí a zapnutí tlačítka na Blynku. Dvojklikem ho otevři a nastav do políček Rules postupně **flow. active** a **msg. payload** (mrkej na obrázek).

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image9.png" alt = "Settings of change node in flow of Node-RED" >}}

5. Teď tyhle dva hezouny **spoj**. Nezapomeň taky kliknout na tlačítko **Deploy** vpravo nahoře, aby se všechno zprovoznilo.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364975/projects/safe-drawer/image24.png" alt = "Deploy your flow in Node-RED | BigClown Playground" >}}

## Spusť pastičku

1. **Krabičku polož do šuplíku** naležato.

2. Všechno ostatní už ovládej z mobilu. 📱 Projekt v Blynku **zapni** (klikni na tlačítko, aby se dostalo do pozice ON).

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image4.png" alt = "Blynk Mobile App with Button" >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png" alt = "Blynk Mobile App with Button" >}}
{{< /middle >}}

3. Celý flow v Blynku spusť skrze **tlačítko Play** vpravo nahoře. ▶️

4. A čekej, až se myška chytí. 🥁 Mezitím **naplánuj, co s nenechavým neřádem uděláš**.️ Doporučujeme nechat ho týden dělat domácí práce za tebe. Však si to zaslouží.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image8.png" alt = "Get mobile notification when someone open your drawer" >}}
{{< /middle >}}

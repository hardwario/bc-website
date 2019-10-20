---
title: Hra pro celou třídu, Najděte nejchladnější a nejžhavější místo ve vaší škole
meta_title: IoT hra pro celou třídu, Změřte teplotu ve vaší škole
meta_description: Jeden z IoT projektů na rozšíření digitálních dovedností. Sestavte se Starter Kitem od BigClownu zařízení, se kterým najdete nejchladnější a nejžhavější místo ve škole.
slug: nejteplejsi-nejchladnejsi-misto
draft: false
date: 2019-08-12
description: Jeden z IoT projektů na rozšíření digitálních dovedností. Sestavte se Starter Kitem od BigClownu zařízení, se kterým najdete nejchladnější a nejžhavější místo ve škole.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /upload/ilustrace-zmer-nejteplejsi-misto-ve-skole.png
image_main: /upload/ilustrace-zmer-nejteplejsi-misto-ve-skole.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook:
---

## Úvod

{{< perex >}}
Tenhle projekt odhalí všechna tajemství tvojí školy, ať už někdo loví duchy nebo chce najít žhavé místo pro svoje příští rande. Změř se svojí třídou teplotu v různých koutech školy a zkus být ten, kdo objeví ten největší extrém. 😱
{{< /perex >}}

S tímhle projektem se naučíš měřit teplotu s IoT a zobrazit ji na svém mobilu. Postačí ti základní BigClown sada, tedy [**Starter Kit**](https://obchod.bigclown.com/starter-kit/).

Hru **navrhni učiteli fyziky** jako super zpestření hodiny, nebo ji s kamarády podnikni jenom tak, po škole.

**Tahle hra je o vítězství**. Kdo najde nejchladnější nebo nejteplejší místo ve škole, je **king**! 👑 Pokud máš ve třídě krabiček několik, pracujte buď samostatně, nebo v malých skupinkách. A pokud máte jenom jednu, postupně se střídejte.

{{< modules >}}

## Připrav si krabičku

1. Starter Kit sestav a spáruj: jestli to děláš poprvé, [připravili jsme k tomu jednoduchou příručku]({{< ref "/handbook/_index.cs.md" >}}). Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

2. Změny teploty uvidíš v Playgroundu v záložce **Messages**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image10.png" alt = "MQTT messages in BigClown Playground" >}}

## Nastav si Node-RED

1. Pro záznam nejnižší nebo nejvyšší teploty si nastav vlastní ukazatel. Začni v počítači s pomocí bublin v [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}). Nejdřív v Playgroundu klikni na záložku **Functions**.

2. Na čistou plochu polož světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

3. Node rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tuhle:

```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image9.png" alt = "MQTT input topic" >}}

Potvrď tlačítkem **Done**.

## Rozjeď appku na mobilu

1. Krabička se propojí se smartphonem díky **appce Blynk**. 📱 [**Zjisti, jak na Blynk**]({{< ref "/academy/how-to-connect-blynk.cs.md" >}}).

2. Z nabídky zvol **Gauge** (ukazatel). Zatím to vypadá takhle:

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image6.png" alt = "Blynk - gauge" >}}
{{< /middle >}}

3. Na ukazatel dvakrát ťukni. Otevře se ti jeho nastavení. Ťukni na tlačítko s nápisem **PIN**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image4.png" alt = "Blynk - set virtual pin" >}}
{{< /middle >}}

4. Otevře se ti nastavování PINu. Zvol **Virtual** a vpravo si natoč **jakékoli číslo**, které budeš chtít. Ale zapamatuj si ho.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image2.png" alt = "Blynk - set virtual pin" >}}
{{< /middle >}}

Potvrď tlačítkem **OK**.

5. Vedle tlačítka PIN ještě nastav, **od kolika do kolika stupňů** bude graf teplotu ukazovat. Nastav si tam pořádnou rezervu, zkus třeba −30 a 45.
Do řádku níž napiš vedle textu **/pin/** jednotku, která se ti po naměření zobrazí: **°C**.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image8.png" alt = "Blynk - set range of values" >}}
{{< /middle >}}

6. Vrať se šipkou zpátky ke grafu a už jenom klikni na trojúhelníček **Play** v pravém horním rohu.


## Propoj mobil s krabičkou

1. Vrať se k počítači. Na ploše Node-RED přidej za oba nody tmavě zelený **node Write**. Najdeš ho v levé části pod sekcí Blynk ws.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png" alt = "Node-RED Blynk write" >}}

2. Node otevři dvojklikem. Vpravo uvidíš **malou tužku**. Klikni na ni a otevře se ti nové okno. Do pole **Auth Token**** zkopíruj token, který sis poslal na e-mail. Do pole **URL** zkopíruj Blynk Cloud Server ze spodního okna, tedy ```ws://blynk-cloud.com/websockets```

Nastavení potvrď tlačítem **Add**. Z nodu ale ještě neodcházej. 👈

3. Do řádku **Virtual Pin** napiš číslo, které sis zvolil jako PIN v Blynku. Písmeno “V” nepoužívej.
Potvrď tlačítkem **Done**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image7.png" alt = "Node-RED Blynk set pin" >}}

4. Teď **oba nody propoj** a klikni na červené tlačítko **Deploy** vpravo nahoře. 🚨

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png" alt = "Connect Blynk" >}}

## Trumfni svou třídu

1. Sám nebo ve skupině **vytipuj, které místo může být ve škole nejteplejší, nebo nejchladnější**. 🔥 ⛄

2. Každý jednotlivec nebo skupina má na průzkum **jenom 15 minut**. 🔦 Ať je to trochu vzrůšo.

3. Na místo vezmi krabičku a **teplotu sleduj na mobilu**. Může chvíli trvat, než se na ukazateli teplota projeví.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image3.png" alt = "measure temperature and show in Blynk" >}}
{{< /middle >}}

4. Vyzkoušej několik míst a na závěr vyhlašte ty nejextrémnější výsledky. **Congrats vítězům!** 🎇

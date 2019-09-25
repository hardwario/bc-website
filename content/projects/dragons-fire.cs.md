---
title: IoT párty hra, máš v sobě dračí oheň, nebo mrazivý dech?
meta_title: IoT párty hra, máš v sobě dračí oheň, nebo mrazivý dech?
meta_description: Jeden z IoT projektů na rozšíření tvých digitálních dovedností. Sestav se Starter Kitem od BigClownu zařízení, se kterým si s kamarády změříte teplotu dechu. Jak si pomůžeš, abys vyhrál?
slug: draci-dech
draft: false
date: 2019-08-12
description: Jeden z IoT projektů na rozšíření tvých digitálních dovedností. Sestav se Starter Kitem od BigClownu zařízení, se kterým si s kamarády změříte teplotu dechu. Jak si pomůžeš, abys vyhrál?
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /upload/soutez-s-kamarady-o-nejteplejsi-vydech.png
image_main: /upload/soutez-s-kamarady-o-nejteplejsi-vydech.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook: "starter-kit"
---

## Úvod

{{< perex >}}
Bav se s kámoši díky IoT. Kdo z vás bude mít nejžhavější, nebo nejchladnější dech? Je na tobě, čím si k vítězství pomůžeš. Smí se všechno. 😱
{{< /perex >}}

S tímhle projektem se naučíš **měřit teplotu s IoT**. Postačí ti základní BigClown sada, tedy [**Starter Kit**](https://obchod.bigclown.cz/starter-kit/).

{{< modules >}}

## Připrav si krabičku

1. Starter Kit sestav a spáruj: jestli to děláš poprvé, [připravili jsme k tomu jednoduchou příručku]({{< ref "/handbook/_index.cs.md" >}}). Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

2. Otevři v Playgroundu záložku **Messages**. Tady uvidíš změny teploty. Teplota se měří automaticky, a to buď pravidelně po 15 sekundách, nebo když dojde k větší změně. A právě toho využijeme.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154531/projects/dragon-fire/image4.png" alt = "BigClown Playground messages" >}}

## Nastav si Node-RED

1. Messages jsou pro tebe možná málo. ✌️ Nastav si rovnou svůj vlastní barevný ukazatel teploty, a to pomocí bublin v [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}). Nejdřív v Playgroundu klikni na záložku **Functions**.

2. Na čistou plochu polož světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

3. Node rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tuhle:
```
node/push-button:0/thermometer/0:1/temperature
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image3.png" alt = "MQTT topic" >}}

Potvrď tlačítkem **Done**.

4. Vedle nodu postav druhý, tentokrát modrý s názvem **Gauge**. Najdeš ho v sekci Dashboard. Tímhle nodem určíš, jak bude naměřená teplota znázorněná na obrazovce: jako ukazatel. Oba nody propoj.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image1.png" alt = "Dashboard Gauge chart" >}}

5. Na node Gauge dvakrát klikni. V řádku **Type** si nastavíš, jak se bude graf zobrazovat (nejlepší bude Gauge). V řádku **Range** upravíš minimální a maximální hodnotu ukazatele (zkus 0 a 50).

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image2.png" alt = "Gauge range settings Node-RED" >}}

Potvrď tlačítkem **Done**.
**Náš tip:** V záložce **Label** si svůj ukazatel libovolně přejmenuj.

6. Teď můžeš zmáčknout červené tlačítko **Deploy** v pravém horním rohu obrazovky. 🚨 Tím celý flow aktivuješ.
❗ **Pozor**: Při každé změně v nodech musíš Deploy mačkat znovu.

7. Překlikni se do jiné záložky, do **Dashboardu**. Tvůj ukazatel žije právě tady. 😲

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image5.png" alt = "View gauge chart Node-RED dashboard" >}}

## Rozjeď hru s kámoši

1. **Sedněte si s kamarády ke stolu.**

2. Nejdřív změřte, kdo v sobě skrývá **dračí oheň**. 🔥 **Jeden po druhém na krabičku dýchejte**. Pomůcky dovoleny, zkuste si dech zahřát s tím, co máte po ruce. Go wild a zkoušej všechno možné i nemožné. 🙌
❓ **Vyzkoušej:** Co dech zahřeje víc – čaj, nebo pálivé papričky?

3. Po skončení prvního kola následuje **mrazivé kolo**. ❄ Kdo zvládne svůj dech ochladit tak, aby ho měl **nejchladnější**?
❓ **Vyzkoušej:** Ochladí dech víc kostka ledu, nebo chladivé žvýkačky?

4. **Rekordy zapište** a při příští hře je zkuste překonat.

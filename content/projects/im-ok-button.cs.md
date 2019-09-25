---
title: Pošli mámě do mobilu zprávu, že jsi v pohodě přišel domů
meta_title: Vyrob si IoT tlačítko, se kterým pošleš mámě zprávu do mobilu
meta_description: Návod na to, jak si ze Starter Kitu od BigClown vytvoříš chytré tlačítko. To pošle do mobilu zprávu tvojí mámě, že jsi v pohodě dorazil domů.
slug: jsem-ok-tlacitko
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
image_preview: /upload/ilustrace-notifikace-tlacitkem-ze-jsem-doma.png
image_main: /upload/ilustrace-notifikace-tlacitkem-ze-jsem-doma.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
handbook:
---

## Úvod

{{< perex >}}
Rodiče ti každý den volají, jestli jsi ze školy dorazil domů? Je to sice otrava, ale prostě o tebe mají starosti. Vyrob si proto tlačítko, se kterým jim pokaždé pošleš jednoduchou zprávu do mobilu. 📲
{{< /perex >}}

V tomhle projektu se naučíš, **jak tlačítkem poslat zprávu do mobilu svých rodičů**. 👩👱

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíš si se základní BigClown sadou, tedy [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Rozjeď to v Node-RED

1. Starter Kit sestav a spáruj: jestli to děláš poprvé, [připravili jsme k tomu jednoduchou příručku]({{< ref "/handbook/_index.cs.md" >}}). Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).

2. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}).

3. Na plochu Node-RED postav světle fialovou bublinu, neboli nod. Najdeš ho vlevo jako **MQTT** v sekci Inputs.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image4.png" alt = "MQTT input node" >}}

4. Uvnitř nodu nastavíš klíčovou funkci – a tou je stisknutí tlačítka. Na node dvakrát klikni a **do pole Topic zkopíruj tenhle řádek**:

```
node/push-button:0/push-button/-/event-count
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image8.png" alt = "MQTT topic" >}}

Potvrď pomocí tlačítka **Done**.

**Tip:** Místo kopírování řádku odsud můžeš příště jednoduše zkopírovat řádek, který se ti po stisknutí tlačítka ukáže **v záložce Messages**.


## Nastav svoji zprávu

1. Zprávu si nastavíš taky tady v Node-RED. Kamkoli vedle světle fialového inputu MQTT přetáhni **žlutý node ze sekce Functions s názvem Change**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image7.png" alt = "Change Node BigClown Playground" >}}

2. Na node dvakrát klikni a do pole **Rules** (pravidla) napiš svou zprávu pro rodiče. Jenom pozor, na Blynku se nezobrazují háčky a čárky. Malá inspirace:
	- *Klidek. Jsem doma a v bezpeci.*
	- *Mame doma celebritu… Delam si srandu. To jsem ja.*
	- *Pokousali me psi, uneslo me UFO, ale uz jsem doma.*

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image6.png" alt = "BigClown Playground MQTT messages" >}}

Potvrď tlačítkem **Done** a oba nody propoj táhnutím myší od jedné bubliny k druhé. 🐁


## Nastav si appku na mobilu

1. Půjč si od mámy nebo od táty jejich smartphone a ještě trochu jim ho nachytři. 🤓 Aby se jim tvoje zpráva zobrazila, musí mít na mobilu [**appku Blynk**]({{< ref "/academy/how-to-connect-blynk.cs.md" >}}).

2. Na novém projektu zvol **Notification**. Upozornění se ti přidá na plochu.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image1.png" alt = "Blynk Notify" >}}
{{< /middle >}}

3. Už jenom zmáčkni trojúhelníček **Play** v pravém horním rohu a **rodičům mobil vrať**.


## Propoj mobil s krabičkou

1. Vrať se k počítači. Na ploše Node-RED přidej za oba nody **tmavě zelený node Notify**. Najdeš ho v levé části v sekci Blynk ws.

2. Node otevři dvojklikem. Vpravo uvidíš **malou tužku**. Klikni na ni a otevře se ti nové okno. Do pole **Auth Token** zkopíruj token, který sis poslal na e-mail. Do pole **URL** zkopíruj Blynk Cloud Server ze spodního okna, tedy ```ws://blynk-cloud.com/websockets```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image3.png" alt = "Blynk Settings" >}}

Nastavení potvrď postupně tlačítky **Add** a **Done**.

3. **Node s Blynkem propoj se žlutým nodem, do kterého jsi nastavil zprávu.** Teď jsi zařízení naprogramoval tak, aby se stisknutí tlačítka na krabičce ➡️ proměnilo ve zprávu, ➡️ která doputuje až do mobilu tvých rodičů. 👾

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image5.png" alt = "Connect nodes in BigClown Playground" >}}

❗ Celý flow odstartuj a potvrď červeným tlačítkem **Deploy** vpravo nahoře. 🚨

## A… Akce!

1. Zmáčkni tlačítko. Rodičům na mobilu **vyskočila zpráva**. 💪

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image2.png" alt = "Get Notification on Phone" >}}
{{< /middle >}}

2. Nejenom, že si o tobě budou tví rodičové myslet, že jsi nadaný, ale ještě si ušetříš jejich každodenní telefonáty. 🎉 **A to je prostě tak chytré, až je to IoT.** 🕺

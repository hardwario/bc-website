---
title: 'IoT projekt: vytvoř si monitoring výtahu'
draft: false
featured: false
handbook: starter-kit
date: 2019-11-15T13:23:02.652Z
description: >-
  Sleduj pomocí Climate modulu od BigClown, jak výtah mění výšku a v jakém je
  zrovna patře.
slug: monitoring-vytahu
meta_title: 'IoT projekt: vytvoř si monitoring výtahu'
meta_description: >-
  Sleduj pomocí Climate modulu od BigClown, jak výtah mění výšku a v jakém je
  zrovna patře.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1574106355/projects/monitoring-vytahu/1149944623084661.TPLqIamQYHtJT9mBrQDs_height640_2.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1574106355/projects/monitoring-vytahu/1149944623084661.TPLqIamQYHtJT9mBrQDs_height640_2.png
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
Géniové nepotřebují displej výtahu, aby poznali, v jakém patře jejich výtah zrovna je. Vytvoří si na to raději vlastní IoT zařízení. Přidej se mezi chytré a měř nadmořskou výšku výtahu. 🤖
{{< /perex >}}

S tímhle projektem se naučíš **měřit atmosférický tlak a s jeho pomocí určit přibližnou nadmořskou výšku, ve které zrovna jsi.** 👆

Pokud máš Starter Kit, budeš k němu potřebovat ještě [Climate Module](https://obchod.bigclown.cz/climate-module/). Kompletní výbavu najdeš v sadě [Climate Monitor Kit](https://obchod.bigclown.cz/climate-monitor-kit/).

{{< modules >}}

## Připrav si krabičku

1. [Sestav svůj Kit podobně jako Starter Kit](https://www.bigclown.com/cs/handbook/), ale místo Button Modulu použij Climate Module.

Na Core Module potřebuješ firmware **monitor-vytahu**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady](https://www.bigclown.com/cs/academy/jak-nahrat-firmware/).

2. Při správně nainstalovaném firmware uvidíš v Playgroundu na záložce Devices Alias jako **elevator-monitor**.

![Elevator monitor](https://res.cloudinary.com/lukasfabik/image/upload/v1573824579/projects/monitoring-vytahu/image6.png)

## Nastav si Node-RED

1. Programování odstartuj v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.
2. Na volnou plochu si přetáhni světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

![MQTT](https://res.cloudinary.com/lukasfabik/image/upload/v1573824582/projects/monitoring-vytahu/image9.png)

3. Node rozklikni dvojklikem. V řádku **Topic** určíš klíčovou hodnotu. Teď to bude nadmořská výška 🏔 (anglicky _altitude_): _node/elevator-monitor:0/barometer/0:0/altitude_

![Topic](https://res.cloudinary.com/lukasfabik/image/upload/v1573824582/projects/monitoring-vytahu/image10.png)

Potvrď tlačítkem **Done**.

4. Za tenhle node umísti **node Text** ze sekce Dashboard. S ním si ukazatel pojmenuješ.

![node Text](https://res.cloudinary.com/lukasfabik/image/upload/v1573824584/projects/monitoring-vytahu/image17.png)

5. V nodu vyplň **Label** jako _Current Altitude_ (Aktuální nadmořská výška).

![Label jako Current Altitude](https://res.cloudinary.com/lukasfabik/image/upload/v1573824580/projects/monitoring-vytahu/image4.png)

Potvrď tlačítkem **Done**.

6. Oba nody pak spoj a zmáčkni tlačítko **Deploy**.

![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573824587/projects/monitoring-vytahu/image16.png)

7. Tím se z tvé krabičky stal barometr – zařízení, které měří atmosférický tlak (tlak vzduchu). 🌤️ **Naměřený tlak vidíš v záložce Dashboard** – krabička začne měřit vždycky po krátkém zatřesení.

## Změř tlak ve výtahu

1. V tomhle kroku potřebuješ změřit, **jaký tlak je v jakém patře výtahu u vás doma nebo ve škole**. 🕵️

Tlak se mění podle výšky každého patra. U země je nižší než o kousek výš. Tlak se taky mění v závislosti na místě nebo na počasí, každý den tedy může být hodnota trochu jiná i ve stejné výtahové šachtě.

Jak to změříš? **Běž do výtahu**. Vezmi s sebou notebook, papír s tužkou a krabičku.

2. Jeď do prvního patra. Zatřes krabičkou a v Playgroundu na záložce Dashboard **sleduj, jaký tlak zaznamenala**.
3. Naměřené číslo zapiš na papír společně s číslem patra. ✍️
4. Vyjeď do druhého patra a **postup zopakuj**. Tlak zapiš postupně na všech patrech, která v budově jsou. 🏡
5. Z čísel pak **vytvoř graf**: postav je na přímku jedno za druhým a čárami vyznač polovinu mezi každým číslem. Tím zhruba získáš číselné rozmezí pro každé patro. Pokud jsi tedy ve druhém patře naměřil hodnotu 230, platí pro něj rozmezí 229 až 231, protože patra jsou vysoká a jeden bod pro ně nestačí. Nemusí to být přesné – pokud později narazíš na chybu, můžeš to kdykoli změnit.

![vytvoření grafu](https://res.cloudinary.com/lukasfabik/image/upload/v1573824581/projects/monitoring-vytahu/image11.png)

6. **Vrať se k počítači** a pokračuj v programování.

## Nastav hlásič pater

1. Běž znovu do Node-RED a pokračuj v upravování projektu. Postavíš ještě jedno flow, které bude fungovat jako hlásič patra.

Začni tím, že pod první flow umístíš **stejný MQTT node** jako předtím. Můžeš ho jednoduše zkopírovat pomocí CRTL+C a CTRL+V.

![MQTT Node](https://res.cloudinary.com/lukasfabik/image/upload/v1573824585/projects/monitoring-vytahu/image15.png)

2. Za nový node umísti **node Switch** ze sekce Function. Díky tomuto nodu nastavíš, aby krabička poznala patro podle zvyšujícího se atmosférického tlaku.

![Switch](https://res.cloudinary.com/lukasfabik/image/upload/v1573824583/projects/monitoring-vytahu/image12.png)

3. Teď to bude trošku tricky. Uvnitř nodu nastav postupně **tolik různých pravidel, kolik má budova pater + jedno navíc** (viz obrázek). Pokud nevíš, jak přidat další pravidlo, dělá se to pomocí malého tlačítka **Add** pod oknem.

Každé z pravidel určuje atmosférický tlak jednoho patra. Pro všechna patra nastav podmínku is between a přidej rozmezí dvou čísel, které jsi vytvořil při cestování výtahem.

**Poslední pravidlo**, to jedno navíc, má podmínku „otherwise”, tedy jiný.

![nastavení pravidel](https://res.cloudinary.com/lukasfabik/image/upload/v1573824580/projects/monitoring-vytahu/image2.png)

![nastavení pravidel](https://res.cloudinary.com/lukasfabik/image/upload/v1573824583/projects/monitoring-vytahu/image13.png)

![nastavení pravidel](https://res.cloudinary.com/lukasfabik/image/upload/v1573824583/projects/monitoring-vytahu/image7.png)

Všechno potvrď tlačítkem **Done**.

4. Na každé jedno pravidlo navaž zprávu, která bude oznamovat, ve kterém patře krabička je. Uděláš to pomocí **stejného počtu Change nodů, kolik jsi nastavil pravidel**. Change node najdeš v sekci Function.

![Change node](https://res.cloudinary.com/lukasfabik/image/upload/v1573824584/projects/monitoring-vytahu/image14.png)

5. Uvnitř nich postupně a shora dolů nastav sedm zpráv: _First Floor_ pro první patro, _Second Floor_ pro druhé patro… A tak dál. U posledního nastav zprávu _Unknown Floor_, neznámé patro. Nebo klidně Nebe, pokud chceš. 😄

![First Floor](https://res.cloudinary.com/lukasfabik/image/upload/v1573824583/projects/monitoring-vytahu/image8.png)

6. Na závěr přidej další **Text node** se zprávou _Actual Floor_.

![Text node](https://res.cloudinary.com/lukasfabik/image/upload/v1573824581/projects/monitoring-vytahu/image5.png)

7. A pak to všechno krásně **spoj**. Pozor na to, aby jednotlivé ťuplíky ze Switch nodu odpovídaly jednotlivému patru, tedy aby se žádný nekřižoval.

Tuhle nádheru pak znovu odstartuj tlačítkem **Deploy** vpravo nahoře.

![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573824583/projects/monitoring-vytahu/image3.png)

## A... akce!

1. Teď nastane zábava. Vlez si znovu **do výtahu** a vezmi si notebook s sebou. 💻
2. Jakmile se výtah rozjede, **mávni krabičkou**, která hned změří atmosférický tlak. Tadá, zpráva o aktuálním patře ti svítí v Playgroundu na záložce Dashboard! 🤡

![výtah](https://res.cloudinary.com/lukasfabik/image/upload/v1573824579/projects/monitoring-vytahu/image1.png)

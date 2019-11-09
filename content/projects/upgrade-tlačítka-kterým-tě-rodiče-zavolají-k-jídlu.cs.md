---
title: 'Upgrade tlačítka, kterým tě rodiče zavolají k jídlu'
draft: true
featured: true
handbook: Starter Kit
date: 2019-11-09T12:09:03.400Z
description: >-
  Vytvoř si ze Starter Kitu od BigClown IoT tlačítko, kterým tě rodiče přivolají
  k snídani, obědu nebo večeři podle denní doby. Vyšší level pro všechny, kdo se
  nebojí!
slug: starter-kit
meta_title: 'Upgrade tlačítka, kterým tě rodiče zavolají k jídlu'
meta_description: >-
  Vytvoř si ze Starter Kitu od BigClown IoT tlačítko, kterým tě rodiče přivolají
  k snídani, obědu nebo večeři podle denní doby. Vyšší level pro všechny, kdo se
  nebojí!
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1573302989/projects/dalsi-level-projekt-tlacitko-pro-mamku/05.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1573302989/projects/dalsi-level-projekt-tlacitko-pro-mamku/05.png
tags:
  - Indoor
levels:
  - Advanced
places:
  - Home
devices:
  - Starter Kit
---
## Úvod

{{< perex >}}
Máš už hotovou základní verzi tlačítka, kterým tě máma zavolá k večeři? Tak to gratulki. 👍 S tímhle vylepšením projekt posuneš dál – zpráva se změní podle denní doby, a ještě na ni můžeš zareagovat.
{{< /perex >}}

V tomhle projektu se naučíš **nastavit jinou zprávu na jiný čas**, odeslat speciální notifikaci **dlouhým podržením tlačítka** a naprogramovat možnost jednoduché **reakce**. 👌 

Základní verzi tohohle projektu najdeš tady: [Vyrob si IoT tlačítko, se kterým tě máma zavolá k večeři](https://www.bigclown.com/cs/projects/tlacitko-pro-rodice/).

Budeš potřebovat **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou, tedy [**Starter Kitem**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## Připrav si Node-RED

1. Starter Kit sestav a spáruj. Na Core Module potřebuješ zase ten starý známý firmware **bcf-radio-push-button**.

![sestavení-starter-kitu](https://res.cloudinary.com/lukasfabik/image/upload/v1573301763/projects/dalsi-level-projekt-tlacitko-pro-mamku/image2.png)

## Nastav si notifikaci

1. Nastav si flow pro notifikaci podobně jako u [základní verze tohohle projektu](https://www.bigclown.com/cs/projects/tlacitko-pro-rodice/). 

Na plochu polož **MQTT node** ze sekce Input, který má v Topicu počítání kliknutí. Vedle něj hoď **notifikaci na mobil** propojenou s Blynkem. 

❗ **Change nod zatím vynechej**, hned se dozvíš proč. 

Zatím to vypadá takto:

![MQTT node](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image10.png)

2. Mezi oba nody tentokrát vlož jiný node, do kterého zkopíruješ javascript. Najdeš ho jako **node Function** pod stejnojmennou sekcí. 

![node Function](https://res.cloudinary.com/lukasfabik/image/upload/v1573301763/projects/dalsi-level-projekt-tlacitko-pro-mamku/image1.png)

3. Do tohohle nodu vložíš **kód, se kterým ovládneš čas**. ⏳ Nastavíš si, od kolika do kolika hodin ti má chodit zpráva o snídani 🍳, obědu 🍗 a večeři 🍕. Chytrý javascript, co?

Následující kód zkopíruj do řádku **Function** v nastavení nodu. Když se na kód podíváš, uvidíš, že některé části jsou barevně zvýrazněné. V nich nastavíš **dobu jídla** a **svoji vlastní zprávu**. Barevné části kódu si libovolně přizpůsob, jenom mysli na to, že čárky a háčky nebudou fungovat.

```
var date = new Date();
var hour = date.getHours();

if(hour >= 8 && hour < 11)
{
 msg.payload = "Pojd na snidani, ospalce";
 return msg;
}
else if(hour >= 11 && hour < 17)
{
 msg.payload = "Obidek na tebe uz ceka";
 return msg;
}
else if(hour >= 17 && hour < 21)
{
 msg.payload = "Podava se vrchol dne, vecere";
 return msg;
}
```

![nastavení vlastní zprávy](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image8.png)

4. Ve stejném okně ještě tenhle node pojmenuj, a to v řádku **Name**. Třeba jako _Nastavení času a zprávy_.

![nastavení času a zprávy](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image6.png)

Potvrď tlačítkem **Done**.

## Nastav dlouhé stisknutí tlačítka

1. A jedeme dál. Teď si nastav, co tlačítko provede, když ho rodiče **dlouho podrží**. To se totiž taky dá ovládnout. 👌

Na plochu polož **další MQTT** node ze sekce Input.

![MQTT](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image7.png)

2. Nastav do něj ale jiný **Topic**, díky kterému tlačítko zareaguje právě na dlouhé stisknutí. 


```
node/push-button:0/push-button/-/hold-count
```

![Topic](https://res.cloudinary.com/lukasfabik/image/upload/v1573301763/projects/dalsi-level-projekt-tlacitko-pro-mamku/image4.png)

3. Za něj hoď **Change node**, který jsi používal už u basic verze. V něm nastav svoji vlastní zprávu, která se pošle, když rodiče tlačítko dlouho podrží. Dá se to využít třeba na zavolání k čemukoliv jinému než k jídlu 🙂 Takže třeba: _Pojd dolu, lenochu!_

![Change node](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image5.png)

4. Za tenhle node hoď ještě jeden, kterým zprávu odklikneš. Navíc ti vyskočí nejenom v mobilu, ale i na počítači. 

Je to **node Notification** pod sekcí Dashboard.

![node Notification](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image11.png)

5. Uvnitř vyber na řádku **Layout** OK / Cancel Dialog a potvrď tlačítkem **Done**.

![Layout](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image9.png)

6. Všechno propoj podle obrázku a zmáčkni **Deploy**.

![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573301763/projects/dalsi-level-projekt-tlacitko-pro-mamku/image3.png)

## Akce!

1. Stejně jako předtím, vylepšenou krabičku **dej do správy mamce a taťkovi**. 
2. Nauč je, že **krátkým stisknutím** tě zavolají k jídlu…

![vylepšená krabička](https://res.cloudinary.com/lukasfabik/image/upload/v1573301764/projects/dalsi-level-projekt-tlacitko-pro-mamku/image12.png)

3. A pokud tě chtějí zavolat kvůli čemukoli jinému, musí tlačítko **zmáčknout déle**. 👇 

![zmáčknutí tlačítka](https://res.cloudinary.com/lukasfabik/image/upload/v1573301765/projects/dalsi-level-projekt-tlacitko-pro-mamku/image13.png)

Aspoň tě nezklame, když na talíř nedostaneš jídlo, ale rodinnou diskuzi. No fuj, jiné menu, prosím!

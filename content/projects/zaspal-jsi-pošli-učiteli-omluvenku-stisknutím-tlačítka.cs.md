---
title: Zaspal jsi? Pošli učiteli omluvenku stisknutím tlačítka
draft: true
featured: true
handbook: Starter Kit
date: 2019-11-09T15:06:49.642Z
description: >-
  Návod na to, jak si ze Starter Kitu od BigClown vytvoříš chytré tlačítko.
  Pošle tvému učiteli omluvenku, když tě náhodou zradí budík. 
slug: starter-kit
meta_title: Zaspal jsi? Pošli učiteli omluvenku stisknutím tlačítka
meta_description: >-
  Návod na to, jak si ze Starter Kitu od BigClown vytvoříš chytré tlačítko.
  Pošle tvému učiteli omluvenku, když tě náhodou zradí budík. 
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1573312453/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image9.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1573312453/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image9.png
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
Ani mobil není neomylný. Občas tě třeba zapomene vzbudit. Když se ti to náhodou stane, nezoufej. Zmáčkni tlačítko 👇 a omluvíš se dřív, než učitel začne volat tvým rodičům.
{{< /perex >}}

V tomhle projektu se naučíš, **jak tlačítkem odeslat e-mail**. 📩

Vystačíš si přitom se základní BigClown sadou, tedy [**Starter Kitem**](https://shop.bigclown.com/starter-kit/). 

## Rozjeď to v Node-RED

1. Starter Kit sestav a spáruj: jestli to děláš poprvé, [připravili jsme k tomu jednoduchou příručku](https://www.bigclown.com/cs/handbook/). Na Core Module potřebuješ firmware radio push button. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady](https://www.bigclown.com/cs/academy/jak-nahrat-firmware/).
2. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://www.bigclown.com/cs/academy/co-je-node-red/). 🤖
3. Na plochu Node-RED postav node **MQTT** ze sekce Input. 

![MQTT](https://res.cloudinary.com/lukasfabik/image/upload/v1573312451/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image6.png)

4. Uvnitř nodu nastavíš klíčovou funkci – a tou je stisknutí tlačítka. Na node dvakrát klikni a **do pole Topic zkopíruj tenhle řádek**: 


```
node/push-button:0/push-button/-/event-count 
```

Potvrď tlačítkem **Done**.

## Nastav obsah omluvenky

1. Samotnou omluvenku taky nastavíš v Node-RED. Kamkoli vedle MQTT nodu umísti **Change node** ze sekce Functions. Ten určí, jaký e-mail se odešle.

![Change](https://res.cloudinary.com/lukasfabik/image/upload/v1573312451/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image5.png)

2. Na node dvakrát klikni a do pole **Rules** (pravidla) nastav dvě pravidla (viz obrázek níž).

První pravidlo bude **msg. payload**: tím nastavíš obsah zprávy. Mysli na to, že node si s českými čárkami a háčky nerozumí, a nezapomeň se podepsat. Zpráva tak může znít třeba takhle: 

_Dobry den, pane Datle, omlouvam se, ale bohuzel mi pes sezral budika. Prijdu co nevidet. Vas oblibeny zak, ktery si nezaslouzi poznamku, Evzen_

V druhém pravidle, které přidáš tlačítkem **+add** dole, vyplníš **msg. topic**. To bude předmět e-mailu. Takže třeba _Omluva_ za _pozdni prichod_.

![Rules](https://res.cloudinary.com/lukasfabik/image/upload/v1573312453/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image11.png)

Potvrď to tlačítkem **Done**. 👏

## Rozjeď appku na mobilu

1. **Pokračuj na svém mobilu**. E-mail se totiž učiteli po stisknutí tlačítka odešle prostřednictvím appky **Blynk**. 📱 Pokud Blynk ještě neznáš z jiných projektů, [zjisti, jak ho rozjet](https://www.bigclown.com/cs/academy/jak-pripojit-blynk/).
2. Z nabídky zvol **E-mail**. ✉️ Tlačítko se ti umístí na plochu projektu. 

![E-mail](https://res.cloudinary.com/lukasfabik/image/upload/v1573312453/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image4.jpg)

3. Když na tlačítko ťukneš, dostaneš se do nastavení. Tady už jen nastav e-mail svého učitele, na který budeš chtít omluvenky odesílat. 

![nastavení e-mailu](https://res.cloudinary.com/lukasfabik/image/upload/v1573312451/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image1.jpg)

Až to budeš mít, vrať se na plochu skrz šipku vlevo nahoře a aktivuj Blynk tlačítkem Play vpravo nahoře.

## Nastav zasílání e-mailu

1. A teď hurá zpátky do Playgroundu. Za svůj flow přidej **node Email** ze sekce Blynk ws. 📮

![node email](https://res.cloudinary.com/lukasfabik/image/upload/v1573312453/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image9.png)

2. Na node dvakrát klikni a na řádek **Email** vyplň učitelovu e-mailovou adresu. 

![email](https://res.cloudinary.com/lukasfabik/image/upload/v1573312453/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image8.png)

3. Potom klikni **na tužtičku** vedle řádku **Connection** a nastav ještě pár drobností. Do políčka **Auth Token** zkopíruj kód, který ti Blynk poslal na e-mail. 

**Do pole Url zkopíruj adresu** ze spodní části okna (checkuj obrázek) a v poli Name si funkci nějak pojmenuj, třeba _Omluvenka_.

![URL](https://res.cloudinary.com/lukasfabik/image/upload/v1573312452/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image7.png)

4. Nody spoj, zmáčkni tlačítko **Deploy** a raduj se: pojistka pro případ zaspání je na světě! 🙏

![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573312452/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image2.png)

## A… Akce!

1. Chceš si to vyzkoušet? **Změň pro testovací účely e-mailovou adresu na tu svou**. 
2. Potvrď znovu Deploy, pak prostě zmáčkni tlačítko a… Jůů, **někdo ti píše**! 💌

![e-mail](https://res.cloudinary.com/lukasfabik/image/upload/v1573312452/projects/poslani-e-mailu-uciteli-s-omluvenkou-z-vyucovani/image10.png)

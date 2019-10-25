---
title: Hraj párty hru „flaška” elektronicky
draft: false
featured: false
handbook:
date: 2019-08-12T00:00:00.000Z
description: >-
  Vytvoř si ze Starter Kitu od BigClown IoT tlačítko, se kterým vylosuješ
  náhodného člena vaší party.
slug: party-hra-flaska
meta_title: Hraj párty hru „flaška” elektronicky díky IoT
meta_description: >-
  Vytvoř si ze Starter Kitu od BigClown IoT tlačítko, se kterým vylosuješ
  náhodného člena vaší party.
image_preview: /upload/project_placeholder.jpg
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566149309/projects/bottle-party-game/image4.png
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
modules: ["core","button","mini_battery","usb_dongle"]
kit: ["starter-kit","button-kit"]
---
## Úvod

{{< perex >}}
Proč hrát flašku s flaškou, když ti na to stačí chytrá krabička? Nastav svůj Starter Kit tak, aby vylosoval náhodného člena vaší party. Ať už to bude na párty, při losování výherce nebo rozhodování o tom, kdo uklidí.
{{< /perex >}}

V tomhle projektu se naučíš, jak nastavit krabičku tak, aby **vylosovala náhodného člena** z vaší skupiny. 😱

Budeš potřebovat **krabičku s tlačítkem** a **USB dongle**. Vystačíš si tedy se základní BigClown sadou, [**Starter Kitem**](https://obchod.bigclown.com/starter-kit/).

{{< modules >}}

## Rozjeď to v Node-RED

1. Starter Kit [sestav a spáruj]({{< ref "/handbook/_index.cs.md" >}}). Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).
2. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha.
3. Jdeme na to. 🤞 Na plochu postav node **MQTT** ze sekce Input.
   Na node dvakrát klikni a nastav v něm klíčovou funkci – klikání na tlačítko. **Do pole Topic zkopíruj tenhle řádek:**


```
node/x-axis-detector:0/accelerometer/-/event-count
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image18.png "MQTT topic")

Potvrď tlačítkem **Done**.

## Hoď tam náhodu

1. Náhodnou volbu naprogramuješ podle jednoduchého javascriptu. Ale neboj, pomůžeme ti. Nejdřív vedle MQTT postav **node Function**, který najdeš ve stejnojmenné sekci.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image5.png" alt = "Node-RED function node" >}}

2. Dvojklikem node otevři. Na řádku **Name** node pojmenuj (třeba Náhoda). Do řádku **Function** zkopíruj tenhle kód, přesně jak to vidíš na obrázku. Díky tomuhle kódu se vylosuje jeden z účastníků.


```
var rand = Math.round( Math.random() * (flow.get("numberOfContestants") - 1));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image9.png" alt = "Node-RED Random" >}}

Potvrď tlačítkem **Done**.

3. Vedle Náhody přidej další node, **Delay** (ten taky najdeš v sekci Function). Díky tomuhle nodu se odezva trochu opozdí a vyvolá to pocit napětí. Fu! 😲

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image14.png" alt = "Node-RED delay" >}}

4. Uvnitř nodu nastav ještě víc náhody, a to náhodné zpoždění. Překlikni na **random delay** a zvol dobu mezi **2 a 4 sekundami**. To by mělo být pro napětí tak akorát.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image3.png" alt = "Node-RED random delay" >}}

Potvrď tlačítkem **Done**.

5. Nad tohle všechno umísti node, se kterým nastavíš hlášku, která se ukáže, když bude krabička zrovna pilně vybírat. Použij na to **node Change** ze stejné sekce.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image1.png" alt = "Node-RED change node" >}}

6. Dvojklikem node otevři a napiš sem svoji **hlášku**. Třeba _Vybírám…_

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149309/projects/bottle-party-game/image4.png" alt = "Node-RED - BigClown playground" >}}

## Nastav účastníky

1. Tvoje loterie se neobejde bez tlačítka na resetování tabulky. To abys pak mohl pokračovat dál ve hře. Pod MQTT tedy umísti **node Button**, tentokrát ze sekce Dashboard.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image17.png" alt = "Node-RED dashboard button" >}}

2. Na node dvakrát klikni a v řádku **Label** ho pojmenuj jako _Reset_.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image13.png" alt = "BigClown Playground dashboard button" >}}

Potvrď tlačítkem **Done**.

3. Jdeme dál. Teď nastav všechny kámoše, kteří se hry zúčastní. Zatím anonymně. Umísti je na plochu skrz node **Text input** v sekci Dashboard. Celkem tolik kousků, kolik vás je.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image10.png" alt = "Node-RED text input" >}}

4. Uvnitř jednotlivých nodů přepiš řádek **Label** na Účastník + číslo od jedné až do tolika, kolik vás je. Takže Účastník 1, Účastník 2… A dál to znáš.
   V okně **Delay** vyplň číslo 0.
   Zaškrtnuté okno hned pod tím **odškrtni**, aby se po resetu pole opravdu resetovala.
   Všechno tohle udělej u všech nodů s účastníky.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image6.png" alt = "BigClown Playground function" >}}

Potvrď tlačítkem **Done**.

5. Vedle účastníků nastav další javascript. Tenhle javascript přiřazuje jména účastníků na odpovídající místo. I tentokrát ho vložíš jako node **Function**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image19.png" alt = "BigClown Playground function" >}}

6. Dvojklikem na node otevřeš jeho nastavení. Do řádku **Label** vyplň jméno nodu a do pole **Function** zkopíruj tenhle kód:


```
var contestants = flow.get("numberOfContestants") || 0;
var contestantArray = flow.get("contestantArr") || [msg.payload];
contestants++;
flow.set("numberOfContestants", contestants);

if(contestants != 1)
{
    contestantArray.push(msg.payload);
}

flow.set("contestantArr", contestantArray);
```

Dej si pozor, aby **Output** byl fakt jen jeden. ❗

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image7.png" alt = "Node-RED function node" >}}

Potvrď tlačítkem **Done**.

7. Neboj, už to skoro bude. 🙌 Postav na plochu **Change node**. Ten zajistí, aby se při resetu všechno obnovilo do původního stavu. 🖖

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image11.png" alt = "Node-RED change payload" >}}

8. V nastavení tohohle nodu vyplň dvě **Rules**, jak to vidíš na obrázku. První z nich je **Delete | flow | ContestantArr**. Další rule přidáš malým tlačítkem **+Add** dole pod polem. V tomhle Rule nastav **Delete | flow | numberOfContestants**.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image2.png" alt = "Node-RED rules" >}}

Potvrď tlačítkem **Done**.

## Vylosovaný je jen jeden

1. Za tohle všechno polož na plochu poslední node, který všem sdělí, koho osud zvolil. 🙏 Najdeš ho jednoduše jako **Text** node v sekci Dashboard.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image16.png" alt = "Node-RED dashboard text" >}}

2. Na řádku **Label** uvnitř nodu nastav, jak bude vypadat hláška při náhodném výběru jednoho účastníka.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image12.png" alt = "Text label in dashboard Node-RED" >}}

Potvrď tlačítkem **Done**.

3. A pak to všechno takhle krásně **spoj**. V horní části pospojuješ všechny nody, které zajišťují losování, ve spodní části pak nody, které vytvářejí losovací tabulku.

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149307/projects/bottle-party-game/image15.png" alt = "BigClown Playground connect nodes in Node-RED" >}}

4. Nezapomeň zmáčknout tlačítko **Deploy** v pravém horním rohu! 🚨

## Nechť zábava započne!

1. A teď už to rozjeďte! V záložce **Dashboard** vyplň všechny účastníky. Pokud sis v nodech pro jednotlivé účastníky nevolil dobu pro automatické obnovení, nezapomeň za každým jménem zmáčknout **Enter**. 👈

{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566149306/projects/bottle-party-game/image8.png" alt = "show dashboard Node-RED / BigClown Playground" >}}

2. **Koho osud zvolí?** A na co? To je teď jenom na tobě. 😈
   Takhle můžeš třeba:

* losovat, kdo dá pusu komu (woohoo),
* tahat nejkratší sirku na vynášení koše,
* losovat výherce soutěže,
* zadávat bláznivé úkoly, které přiřadí náhoda,
* a cokoli dalšího tě napadne!

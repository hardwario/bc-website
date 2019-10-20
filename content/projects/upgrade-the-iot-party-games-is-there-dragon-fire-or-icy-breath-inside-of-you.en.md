---
title: 'Upgrade the IoT party games: is there dragon fire or icy breath inside of you?'
draft: true
featured: true
handbook: starter-kit
date: 2019-10-20T10:57:29.483Z
description: >-
  IoT Starter Kit game from BigClown. Create two types of contest in one project
  and switch between them. It’s the highest level for all who are not scared!
slug: upgrate-iot-party-dragon-fire-icy-breath
meta_title: 'Upgrade the IoT party games: is there dragon fire or icy breath inside of you?'
meta_description: >-
  IoT Starter Kit game from BigClown. Create two types of contest in one project
  and switch between them. It’s the highest level for all who are not scared!
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571563534/projects/hardcore-upgrade-of-iot-party-game/4-soutez-s-kamarady-o-nejteplejsi-vydech-se-stickerem.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1571563534/projects/hardcore-upgrade-of-iot-party-game/4-soutez-s-kamarady-o-nejteplejsi-vydech-se-stickerem.png
tags:
  - Indoor
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
---
## Introduction

{{< perex >}}
Are you up for the task? Build one project in which you run two types of your favourite contest at once and switch between them as you please! There will be all kinds of fun at the party. 🕺
{{< /perex >}}

With this project you will learn **to save the highest measured value and set up several types of contest in one project and switch between them**. 

You'll find the basic version of this project here: [IoT party game: is there dragon fire or icy breath inside of you?](https://www.bigclown.com/projects/dragons-fire/)

Střední obtížnost zase tady: 

I tentokrát ti postačí základní BigClown sada, tedy [**Starter Kit**](https://shop.bigclown.com/starter-kit/).

{{< modules >}}

## **Prepare the Node-RED**

1. Build and pair the Starter Kit. For the Core Module, you need the good old **bcf-radio-push-button firmware**.

![firmware for the core module](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image6.png)

## Measure the hottest breath

Put together this flow which will reveal **the hottest dragon** from your squad. 🐉 The highest temperature will be measured **by briefly pressing the button**. 

![zmer nejzhavejsi dech](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image9.png)

**Do you need advice on how to do that?**

\- Topic in **MQTT node** from the Input section contains brief pressing on the button: 

```
node/push-button:0/push-button/-/event-count
```

\- the javascript code from the **Function node** looks like this

```
var hottestTemp = flow.get("hottestTemp");
var pressed = flow.get("pressed") || false;

flow.set("holded", false);flow.set("pressed", !pressed);

if(!flow.get("pressed"))
{ 
 if(flow.get("contestantTemp") > hottestTemp) 
 {  
 flow.set("hottestTemp", flow.get("contestantTemp"));  
 msg.payload = flow.get("hottestTemp");  
 return msg; 
 }
}
```

\- the bottom **node Text** registers the highest temperature, don’t forget to fill in the value {{msg.payload}}°C to the Value format field

\- **Change node** lists the hottest contestant, you have to set up flow in it. contestantName

![change node](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image8.png)

\- flow is closed by a simple **Text node**

## Measure the iciest breath

Under the previous flow, place another one. With this, you can measure which one of you breathes so coldly they could **compete with the Night King**. ❄ The coldest temperature will be measured by **pressing the button longer**.

**Our tip:** Avoid creating such flow from scratch by simply copying and rewriting the nodes. Copy and paste it with the simple **CRTL+C & CTRL+V**, it can also be done with several nodes at once. Hooray **🙌**

![zmer nejmrazivejsi dech](https://res.cloudinary.com/lukasfabik/image/upload/v1571551046/projects/hardcore-upgrade-of-iot-party-game/image1.png)

**Do you need advice on how to do it?**

\- Topic in **MQTT node** contains a long pressing on the button:

```
node/push-button:0/push-button/-/hold-count
```

\- the javascript code in the **Function node** looks like this: 

```
var coldestTemp = flow.get("coldestTemp");
var holded = flow.get("holded") || false;

flow.set("pressed", false);

flow.set("holded", !holded);

if(!flow.get("holded"))
{ 
if(flow.get("contestantTemp") < coldestTemp) 
 {  
  flow.set("coldestTemp", flow.get("contestantTemp"));  

  msg.payload = flow.get("coldestTemp");  
  return msg; 
 }
}
```

\- **both Text nodes are the same as in previous flow**, just change the hottest for the coldest

\- **Change node is the same as in previous flow**

❗ **Debug node** is the new thing here; it will get rid of potential bugs **🐞**

## Set continuous measurements

Create new flow and place it under the previous ones. With this flow, you will be able to measure every try and the table will remember the names of contestants.

![prubezna mereni flow](https://res.cloudinary.com/lukasfabik/image/upload/v1571551048/projects/hardcore-upgrade-of-iot-party-game/image15.png)

**Do you need advice on how to do it?**

\- Topic in **MQTT node** contains the measuring of temperature:

```
node/push-button:0/thermometer/0:1/temperature
```

\- the javascript code in the **Function node** looks like this:

```
var temp = msg.payload;

if(flow.get("pressed"))
{ 
 if(flow.get("contestantTemp") < temp) 
 {  
  flow.set("contestantTemp", temp);  
  return msg; 
  }
}
else if(flow.get("holded"))
{ 
  if(flow.get("contestantTemp") > temp) 
  {  
   flow.set("contestantTemp", temp);  
   return msg; 
 }
}
```

\- the dark blue **Text node** with the temperature the box will measure for the current contestant, contains degrees Celsius: {{msg.payload}}°C

\- **Text input node** (the light blue one) has a zero in the Delay field (the name of the contestant must be confirmed with Enter in the table)

\- **Change node** má dvě pravidla. Jedno nechává prázdnou hodnotu, dokud nezaregistruje první teplotu. A druhé nastaví jako průměrnou teplotu 30 °C, to znamená, že teplejší výsledky budou nad 30 °C, chladnější zase pod.

Change node contains two rules; one sets the xxx, the other one sets the xxx

![prubezne mereni](https://res.cloudinary.com/lukasfabik/image/upload/v1571551046/projects/hardcore-upgrade-of-iot-party-game/image3.png)

\- The **Function node** with javascript code for saving the names looks like this: 

```
flow.set("contestantName", msg.payload);
return msg;
```

\- and the last **Text node** is simply a text node that announces the current contestant. Voilà!

## Set the type of contest

Easy peasy? Throw in a **timestamp flow** with which you can change the type of game! Brief pressing on the button will measure the hottest breath and holding the button for a longer time will measure the iciest one. a dlouhé podržení tlačítka změří nejmrazivější dech. Rad 👍

![timestamp flow](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image4.png)

**Do you need advice on how to do it?**

\- the first node is called **Inject** and you will find it in the Input section.

![inject](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image12.png)

Set up in it a repetition after one second.  

![nastaveni intervalu](https://res.cloudinary.com/lukasfabik/image/upload/v1571551046/projects/hardcore-upgrade-of-iot-party-game/image5.png)

\- **the upper Switch node** reacts to a brief pressing of the button and contains _is true_

![switch node](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image7.png)

\- **the bottom Switch node** reacts to holding the button and also contains _is true_

![spodni switch node](https://res.cloudinary.com/lukasfabik/image/upload/v1571551046/projects/hardcore-upgrade-of-iot-party-game/image2.png)

\- all three Change nodes contain the message: the upper one contains a message that announces **a contest for the hottest breath**,

![soutez o nejzhavejsi dech](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image13.png)

the middle one says **there’s currently no contest running**,

![zprava soutez nebezi](https://res.cloudinary.com/lukasfabik/image/upload/v1571551048/projects/hardcore-upgrade-of-iot-party-game/image14.png)

and the bottom one announces a **contest for the iciest breath**

![soutez o nejmrazivejsi dech](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image10.png)

\- the final **Text node** announces the type of contest

## Nastav výchozí hodnoty

Drž si klobouk, frčíme do finále. Poslední flow nastaví **výchozí hodnoty**: 30 °C jako optimální teplotu, hoooodně chladnou nejnižší teplotu a hoooodně horkou nejvyšší teplotu. S těmito teplotami se pak skutečně naměřené teploty porovnávají.

![timestamp nastaveni hodnot](https://res.cloudinary.com/lukasfabik/image/upload/v1571551048/projects/hardcore-upgrade-of-iot-party-game/image17.png)

**Do you need advice on how to do it?**

\- **Inject node** obsahuje zaškrtnuté políčko, se kterým se nastaví výchozí hodnoty jen malou chvilku po stisknutí tlačítka Deploy.

![inject node](https://res.cloudinary.com/lukasfabik/image/upload/v1571551047/projects/hardcore-upgrade-of-iot-party-game/image11.png)

\-  a **node Function** obsahuje javascript, který nastavuje výchozí hodnoty.

```
flow.set("contestantTemp", 30);
flow.set("hottestTemp", 0);
flow.set("coldestTemp", 100);
return msg;
```

**Podívej se na tu nádheru**

Takhle sexy teď vypadá tvoje plocha. Vychutnej si to, jako když jsi poprvé viděl moře… 🌊 Ještě chvilku… A ještě chvilku… A pak už jenom zmáčkni starýho dobrýho kamaráda **Deploy** vpravo nahoře.

![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1571551049/projects/hardcore-upgrade-of-iot-party-game/image18.png)

## Jdeme soutěžit!

1. Jak už sis asi všiml, krabička reaguje na dva typy zmáčknutí: při obyčejném krátkém se spustí **soutěž o nejteplejší dech**, při dlouhém podržení tlačítka se spustí **soutěž o nejmrazivější dech**.

Jak soutěžit?

\- Otevři záložku **Dashboard** v Playgroundu.

\- Nejdřív napiš jméno soutěžícího, 

\- potvrď ho pomocí **Enter**, 

\- a potom **dlouhým nebo krátkým stisknutím tlačítka** zvol typ soutěže. 👇 

\- Až soutěžící zkusí, co umí, **stejně dlouhým stisknutím tlačítka** aktuální soutěž ukončíš a uložíš. 

\- U dalšího soutěžícího postupujte stejně, jedno po druhém.

---
title: Vyrob si IoT tlačítko, se kterým tě rodiče zavolají k večeři
meta_title: Vyrob si IoT tlačítko, které ti pošle zprávu do mobilu
meta_description: Návod na to, jak si ze Starter Kitu od BigClown vytvoříš IoT tlačítko, se kterým tě rodiče zavolají k večeři, když zrovna paříš.
slug: tlacitko-pro-rodice
draft: false
date: 2019-08-19
description: Návod na to, jak si ze Starter Kitu od BigClown vytvoříš IoT tlačítko, se kterým tě rodiče zavolají k večeři, když zrovna paříš.
tags:
  - Starter Project
levels:
  - Beginner
places:
  - Home
devices:
  - Starter Kit
idea: false
image_preview: /projects/button-for-mum/1-ilustrace-devce-pari-hru-ma-pauzu.png
image_main: /projects/button-for-mum/1-ilustrace-devce-pari-hru-ma-pauzu.png
author: lukas_fabik
featured: true
modules: ["core","button","mini_battery","usb_dongle"]
kit: ["starter-kit","button-kit"]
handbook: "starter-kit"
---

## Úvod

{{< perex >}}
Znáš to? Paříš jak drak nebo posloucháš hudbu na plné pecky, a když tě máma volá k večeři, vůbec o ničem nevíš. Sestav proto pro rodiče chytré tlačítko, se kterým tě upozorní přes mobil a nevyřvou si hlasivky.
{{< /perex >}}

V tomhle projektu se naučíš, **jak tlačítkem poslat zprávu do mobilu** odkudkoli v domě. 👌

Budeš potřebovat krabičku s **tlačítkem** a **USB dongle**. Proto si vystačíš se základní BigClown sadou, tedy [**Starter Kitem**](https://shop.bigclown.com/starter-kit/). Pokud máš v ruce krabičku Starter Kit poprvé, [nejdřív se s ní dobře seznam]({{< ref "/handbook/_index.cs.md" >}}).

{{< modules >}}

## Rozjeď to v Node-RED

1. Starter Kit sestav a spáruj. Na Core module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady]({{< ref "/academy/how-to-flash-firmware.cs.md" >}}).
2. V Playgroundu klikni na **záložku Functions**. Tady najdeš programovací plochu [Node-RED]({{< ref "/academy/what-is-node-red.cs.md" >}}). Na ní si přednastavíš krabičku, aby dělala všechno, co chceš.
3. Jde se programovat. 🤞 Na plochu Node-RED postav světle fialovou bublinu, neboli nod. Najdeš ho vlevo jako **MQTT** v sekci **Input**.

![Rozjeď to v Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image3.png "Rozjeď to v Node-RED")

**Pokud program otevíráš poprvé:** tenhle node máš na ploše přednastavený jako **node/#**. Druhou, tmavězelenou, bublinu můžeš smazat.

4. Uvnitř nodu nastavíš klíčovou funkci – a tou je klikání na tlačítko. Na node dvakrát klikni a **do pole Topic zkopíruj tenhle řádek**:

```
node/push-button:0/push-button/-/event-count
```

![MQTT Topic](https://res.cloudinary.com/lukasfabik/image/upload/v1565632595/projects/button-for-mum/image9.png "MQTT Topic")

Potvrď pomocí tlačítka **Done**.

**Tip:** Vidíš v Playgroundu záložku **Messages**? Tady se zobrazují všechny akce, řádek po řádku. Klikni na krabičce – a tadá, zobrazilo se ti to stejné:
```
node/push-button:0/push-button/-/event-count
```
Co to znamená? Že můžeš příště do pole Topic kopírovat řádky ze záložky Messages.

## Hoď tam vlastní zprávu

1. Zprávu si nastavíš taky tady v Node-RED. Kamkoli vedle světle fialového inputu MQTT umísti **žlutý node ze sekce Functions s názvem Change**.

![Node-RED Change node](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image7.png "Node-RED Change node")

2. Tenhle Change node mění, jak se akce projeví. Takže třeba pošle zprávu. Go wild a nastav si svoji vlastní (jenom pozor, na Blynku se nezobrazují háčky a čárky). Malá inspirace:
	- Zranice!
	- Cas krmeni
	- Bez doplnit realnou manu
	- Muj health potion byl prave uvaren

Uděláš to tak, že na node dvakrát klikneš a v poli **Rules** (pravidla) zprávu napíšeš do druhého řádku.

![Node-RED Change node edit](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image5.png "Node-RED Change node edit")

Potvrď tlačítkem **Done**.

3. Na kraji každého nodu uvidíš malou šedou kuličku. Když na ni klikneš, klik podržíš a myš zatáhneš do strany, vytáhneš z nodu provázek. Tím se nody propojují.
Zkus si to. **Oba nody propoj** táhnutím myší od jedné bubliny k druhé. Easy peasy. 🙆

![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image6.png "Node-RED")

## Nastav si appku na mobilu

1. Tvoje krabička s tlačítkem se propojí se smartphonem díky appce Blynk. A to je cool. 😎 Stáhni si na mobil **appku Blynk** z [App Store](https://apps.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481), nebo [Google Play](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Přihlas se do ní, nebo si vytvoř účet.
2. Vytvoř v appce nový projekt: klikni na **New project**.
3. Pod “Choose device” vyber hardware **BigClown IoT Kit**.
4. Potvrď kliknutím na tlačítko Create. Teď se ti na mail odeslal **token** (neboli elektronický klíč) k projektu, pomocí kterého se pak k mobilu připojíš z počítače. Prozatím ještě ale zůstaň v appce. 📱<br/><br/>
❓ **Co když mi token nepřišel?** Zkontroluj si složku se spamem. E-mail není ani tu? Pošli si ho znovu. V Blynku na záložce Project settings uvidíš svůj auth token, pod ním je tlačítko **E-Mail**. Klikni na něj a checkni svou schránku ještě jednou. 👋

5. **Klikni** na černou plochu v novém projektu. Tam nastavíš, co se má na mobilu po kliknutí stát.
6. Z nabídky zvol **Notification**. Upozornění se ti přidá na plochu.

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image1.png" alt = "Blynk Notify" >}}
{{< /middle >}}

7. Už jenom klikni na **Play** v pravém horním rohu.


## Propoj mobil s krabičkou

1. Vrať se k počítači. Na ploše Node-RED přidej za oba nody **tmavě zelený node Notify**. Najdeš ho v levé části pod sekcí Blynk ws.
2. Node otevři dvojklikem. Vpravo uvidíš **malou tužku**. Klikni na ni a otevře se ti nové okno.
3. Do pole **URL** zkopíruj Blynk Cloud Server ze spodního okna, tedy:<br/>
```
ws://blynk-cloud.com/websockets
```

4. Do pole **Auth Token** zkopíruj token, který sis poslal na e-mail.

![Node-RED Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image2.png "Node-RED Blynk")

Nastavení potvrď postupně tlačítky **Add** a **Done**.

3. **Node s Blynkem propoj s nodem, do kterého jsi nastavil zprávu**. Teď jsi zařízení naprogramoval tak, aby se kliknutí na krabičce ➡️ proměnilo ve zprávu, ➡️ která doputuje až do tvého mobilu. 👾

![Node-RED Blynk integration](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image4.png "Node-RED Blynk integration")

❗ Celý flow odstartuj a potvrď červeným tlačítkem **Deploy** vpravo nahoře. 🚨

## Akce!

1. Zmáčkni tlačítko a… magic. 🎇 **Zpráva se ti ukáže na mobilu!** 🙌
2. Tlačítko dej mámě nebo tátovi. Ti koukají, co? Rodinný mír a klid před večeří je zachráněn. 🤓

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image8.png" alt = "Blynk - notification" >}}
{{< /middle >}}

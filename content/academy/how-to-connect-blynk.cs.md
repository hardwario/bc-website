---
date: "2019-08-12"
title: "Jak propojíš Blynk s krabičkou"
slug: jak-pripojit-blynk
meta_title: Jak propojit BigClown s aplikací Blynk
meta_description: Aby ti tvůj IoT vynález od BigClowna posílal notifikace na mobil, potřebuješ ho spárovat s Blynkem. Koukni na náš jednoduchý návod.
description: Aby ti tvůj IoT vynález od BigClowna posílal notifikace na mobil, potřebuješ ho spárovat s Blynkem. Koukni na náš jednoduchý návod.
image_preview: /upload/mobile-phone.jpg
image_main: /upload/mobile-phone.jpg
weight: 60
---

Tvá chytrá IoT krabička se kromě počítače ráda kámoší i se smartphonem. 🤝 Po spárování do něj posílá notifikace nebo v něm třeba zobrazuje grafy s teplotou ve tvém pokoji. Propojíš je pomocí aplikace Blynk a v tomhle článku ti ukážeme, jak na to.


## Začni v Playgroundu
Když v Playgroundu vytváříš svůj vynález, najdeš v záložce **Functions** několik nodů, které s Blynkem pracují – jsou označené sekcí **Blynk ws** a jsou všechny **tmavě zelené**.

Když tyhle nody propojíš se zbytkem svého programu, potřebuješ je ještě spárovat se svým chytrým founem. 📱
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159868/academy/how-to-connect-blynk/image2.png" alt = "Node-RED flow" >}}

Jak krabičku propojit s Blynkem ti ukážeme na nodu **Notify**, ale neboj, postup propojení je u všech Blynk nodů stejný.


## Nastav si appku na mobilu

1. **Appku Blynk** si na mobil stáhneš z [App store](https://apps.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481), nebo [Google Play](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Přihlas se do ní, nebo si vytvoř účet. Je to stejné, jako když se třeba registruješ do on-line hry.
2. Vytvoř v appce nový projekt: klikni na **New project**.
3. Pod Choose device vyber hardware **BigClown IoT Kit**.
4. Potvrď kliknutím na tlačítko **Create**. Teď se ti na mail odeslal token (neboli elektronický klíč) k projektu, pomocí kterého se pak k mobilu připojíš z počítače. Prozatím ještě ale zůstaň v appce. 📱

❓ **Co když mi token nepřišel?** Zkontroluj si složku se spamem. Ani sem e-mail nezapadl? Pošli si ho znovu. V Blynku na záložce Project settings uvidíš svůj auth token, pod ním je tlačítko E-Mail. Klikni na něj a checkni svou schránku znovu. 👋

5. Teď si můžeš do Blynku **přidat různé funkce** stisknutím kteréhokoliv místa na černé ploše nového projektu. Třeba když chceš dostávat po stisknutí tlačítka na krabičce zprávy, vyber si Notification. Až si funkce nastavíš, klikni na trojúhelníček **Play** vpravo nahoře.

{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159867/academy/how-to-connect-blynk/image1.png" alt = "Node-RED setup Blynk" >}}

## Propoj mobil s krabičkou
1. Vrať se k počítači. Tmavě zelený node ve svém programu si rozklikni dvojklikem.
2. Vpravo uvidíš **malou tužku**. Ťukni na ni a otevře se ti nové okno. Do pole **Auth Token** zkopíruj token, který sis poslal na e-mail. Do pole **URL** zkopíruj Blynk Cloud Server ze spodního okna, tedy

```
ws://blynk-cloud.com/websockets
```

{{< middle >}}
{{< img src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159867/academy/how-to-connect-blynk/image3.png" alt = "Node-RED get Blynk notification" >}}
{{< /middle >}}

<br/>
Nastavení potvrď postupně tlačítky **Add** a **Done**. A máš propojeno! 🎉

Už tě svědí prsty, až si propojení s Blynkem vyzkoušíš? Kašli na teorii. [Skoč šipku do konkrétního projektu, inspiruj se a tvoř!]({{< ref "/projects/_index.cs.md" >}})

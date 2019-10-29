---
title: 'Nainstaluj si do krabičky správný firmware, tedy „mozek”'
date: '2019-08-12'
weight: 30
description: >-
  Bez firmware ti IoT krabička nebude fungovat správně. Díky tomuhle článku
  pochopíš, na co firmware slouží a správně si ho nastavíš.
slug: jak-nahrat-firmware
meta_title: Jak si do BigClownu nainstaluješ firmware
meta_description: >-
  Bez firmware ti IoT krabička nebude fungovat správně. Díky tomuhle článku
  pochopíš, na co firmware slouží a správně si ho nastavíš.
image_preview: /upload/project_placeholder.jpg
image_main: /upload/project_placeholder.jpg
---
Bez firmware ti krabička nebude fungovat správně. Na různé projekty přitom potřebuješ různý firmware. Podívej se, jak si krabičku správně nastavíš.

![firmware](https://res.cloudinary.com/lukasfabik/image/upload/v1571663751/academy/how-to-flash-firmware/13-infografika-firmware.png)

## Co je to firmware?

Firmware si představ jako **„mozek” věcí**. 🤖 Je to program, který zařízení řídí. Najdeš ho ve všech chytrých zařízeních, a to i v těch úplně nejjednodušších, třeba v semaforu. Svůj firmware mají i sedadla v autě, aby se dala vyhřívat. Firmwarem je i legendární BIOS, který ti zapíná a vypíná počítač. Hodně pokročilý firmware máš i na svém smartphonu v podobě operačního systému. Ať už je to Android, iOS nebo jakýkoli jiný. 👌

Programátor může firmware **nastavit podle své potřeby**. Třeba může změnit rychlost, s jakou na přechodu blikne zelená. K práci a nastavení firmware slouží počítačový program (software). U našich kitů je to program [Playground]({{< ref "/download/_index.cs.md" >}}). 🤡

Na Core module ze svého kitu máš **předinstalovaný firmware**, ať už používáš [Starter Kit]({{< ref "/kits/push-button.cs.md" >}}), [Climate Monitor Kit]({{< ref "/kits/climate-monitor.cs.md" >}}), [Motion Detector Kit]({{< ref "/kits/motion-detector.cs.md" >}}) nebo [další kity]({{< ref "/kits/_index.cs.md" >}}). Díky firmware krabička ví, jestli má měřit teplotu, monitorovat polohu nebo cokoliv dalšího.
👉 **Na každý typ projektu proto potřebuješ jiný firmware.** 👈

**Firmware vždy potřebuje svůj hardware**. Nemůžeš čekat, že zařízení začne měřit polohu, když nemáš GPS module. To prostě nejde. Krabičce totiž chybí nástroj, se kterým by mohla polohu měřit. 🤷

**Jaký firmware potřebuješ, najdeš napsané vždycky u** [**konkrétního projektu**]({{< ref "/projects/_index.cs.md" >}}). 🤙

## Updatuj / nastav si správný firmware

Když si koupíš kit, správný firmware v něm už je. Ale pokud si kit půjčíš od kamaráda, může se stát, že je v zařízení jiný kit, než potřebuješ. 😭 Pojď se tedy podívat, **jak si nastavíš firmware pro základní použití** (Starter kit) nebo **pro svoje konkrétní projekty**. Stejným způsobem si stáhneš **nejnovější verzi firmware**, pokud jsi třeba kit dlouho nepoužíval a chceš ho aktualizovat.

Aktualizovat můžeš jak **USB Dongle**, tak **Core Module** svého kitu.

Stáhni si firmware na USB Dongle

1. Vlož **USB Dongle** do počítače a otevři program **Playground**. Jak jinak 😅
2. V záložce Devices vidíš v horním řádku, co tvůj dongle dělá. Z toho poznáš, jestli máš správný firmware, nebo ne. Teď tam chceme mít **Radio Dongle**.

{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161114/academy/how-to-flash-firmware/image1.png" alt = "BigClown Playground USB dongle" >}}

3. Vedle řádku svítí zelené tlačítko Connect, ale **nemačkej ho**. Zatím se připojovat nechceš. Případně se odpoj (Disconnect).
4. Teď tě bude zajímat záložka **Firmware**. Tady najdeš spoustu firmwarů na různé projekty, které můžeš do zařízení nahrát. 🕵️
5. Do řádku napiš dongle a klikni na **gateway usb dongle**. Vpravo si zvol “latest version”, tedy nejnovější verzi. Stejným způsobem si taky firmware aktualizuješ.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image7.png" alt = "BigClown Playground USB dongle firmware" >}}
6. O kousek níž si v sekci Device zvolíš **správné zařízení**. Je to řádek, který obsahuje bc-usb-dongle.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image4.png" alt = "BigClown Playground USB dongle flash firmware" >}}
7. Teď klikni na červené tlačítko **Flash firmware**. Tím se ti program stáhne. Chvíli to potrvá, ale pak se na obrazovce objeví nápis _Done_, tedy hotovo.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image2.png" alt = "BigClown Playground USB dongle firmware flashed" >}}

## Stáhni si firmware na svůj projekt do Core module

1. Vezmi si svůj kit. Na aktualizaci ti bude stačit jenom srdce krabičky, tedy destička **Core Module**. Poznáš ji tak, že je červená a je to na ní napsané. 🙂
2. Core module má na svém konci **microUSB konektor**. Kabelem (třeba od nabíječky na mobil) ji **propoj s USB portem** svého počítače.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161114/academy/how-to-flash-firmware/image3.jpg" alt = "BigClown Kit with Core Module" >}}
3. V záložce Firmware vyber ten správný program. Třeba pro základní použití Starter Kitu potřebuješ **radio push button**, pro jiný projekt nahraj, co je potřeba.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161115/academy/how-to-flash-firmware/image6.png" alt = "BigClown Playground Core Module firmware" >}}
4. Pod tím si v sekci Device **zvol správné zařízení**, tedy řádek, který obsahuje bc-core-module.
   {{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566161114/academy/how-to-flash-firmware/image5.png" alt = "BigClown Playground Core Module choose firmware" >}}
5. Stažení programu provedeš kliknutím na tlačítko **Flash firmware**. Tím se ti program stáhne. Chvíli to potrvá, ale pak se na obrazovce objeví nápis _Done_, tedy hotovo.
6. Kabel odpoj.


🙌 **Máš to dobře, když:**

* Po celou dobu je v záložce Devices odpojený **USB dongle** a není připojené ani nic jiného (svítí zelené tlačítko Connect, které ale nemačkáš).
* Když ke kitu připojíš baterky, **Led dioda** na Core modulu krátce červeně blikne. (Pokud máš na Core module napojeno více desek, třeba tlačítko, musíš se podívat ze strany.) To znamená, že všechno funguje správně. ️🎉

A teď ti už jen zbývá [spárovat Dongle s Core modulem]({{< ref "/academy/how-to-pair-kit.cs.md" >}}), jako obvykle.

---
title: Co je to dashboard a jak ho vytvoříš
date: '2019-08-13'
weight: 50
description: >-
  Chceš vidět data ze své BigClown krabičky v barevných grafech a ukazatelích?
  Vytvoř pro ni šikovný dashboard. Poradíme ti, jak na to.
slug: co-je-dashboard
meta_title: Vytvoř si pro BigClown vlastní dashboard
meta_description: >-
  Chceš vidět data ze své BigClown krabičky v barevných grafech a ukazatelích?
  Vytvoř pro ni šikovný dashboard. Poradíme ti, jak na to.
image_preview: /upload/dashboard.jpg
image_main: /upload/dashboard.jpg
---
Chceš sledovat barevné grafy měnící se teploty ve svém pokoji? Nebo vidět v počítači vyskakovací okno pokaždé, když někdo zmáčkne tlačítko? 🤓 Tohle a mnohem víc dokáže chytré rozhraní jménem Dashboard. Povíme ti, jak na něj.

## Co je to dashboard?

Dashboard si představ jako svou **virtuální nástěnku**, na které po troše nastavení uvidíš vše, co se kolem tvé krabičky šustne. Chceš třeba vidět barevný graf toho, jak se za uplynulou hodinu měnila teplota v tvém pokoji? Žádný problém! Je jen na tobě, co všechno si do dashboardu dáš. 💪

Jinými slovy vše, co tvoje krabička naměří, se ti **zobrazí právě zde**.

Ve svém Playgroundu ho najdeš v levém menu pod záložkou **Dashboard**. Když ještě nemáš nic naprogramované a klikneš na ni, uvidíš jenom bílou plochu. Pojďme to změnit!
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160234/academy/what-is-dashboard/image6.png" alt = "Node-RED Dashboard" >}}

## Čím dashboard naplnit?

Podobu dashboardu ovlivníš pomocí nodů, které najdeš v levém menu v záložce **Functions**. Jsou oddělené hlavičkou Dashboard a mají **tyrkysovou barvu**.
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image1.png" alt = "Node-RED dashboard nodes" >}}

A teď ti ukážeme **tři chytré nody**, kterými si dashboard vytuníš:

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image2.png" alt = "Node-RED Dashboard gauge" >}}
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image4.png" alt = "Node-RED Dashboard gauge" >}}
    </div>
    <div class = "col-md-8">
        <p>Díky nodu <strong>Gauge</strong> se ti v dashboardu objeví „budík” podobný tomu, který najdeš třeba v autě pro měření rychlosti. 🏎️</p>
        <p>Nastavíš si minimální a maximální hodnotu a šipka mezi nimi ti bude ukazovat, jaká je současná hodnota.</p>
        <p>Gauge využiješ třeba při měření okolní teploty. Zkus dát krabičku do lednice a sleduj, jak se šipka posouvá doleva.</p>
    </div>
</div>

<div class = "row content-justify-center">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image5.png" alt = "Node-RED Dashboard chart" >}}
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image8.png" alt = "Node-RED Dashboard chart" >}}
    </div>
    <div class = "col-md-8">
        <p>Připoj do svého programu node <strong>Chart</strong> a tvůj dashboard navštíví barevný graf, ve kterém uvidíš postupný vývoj naměřené hodnoty.</p>
        <p>Určíš si, jak dlouhý časový úsek má graf zobrazovat, a pak už jen měříš teplotu nebo mačkáš tlačítko. Graf ti rád zobrazí hromadu různých statistik – záleží jen na tom, jak si ho nastavíš. 📈</p>
    </div>
</div>

<div class = "row">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image7.png" alt = "Node-RED Dashboard notification" >}}
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image3.png" alt = "Node-RED Dashboard notification" >}}
    </div>
    <div class = "col-md-8">
        <p>Do dashboardu ti můžou chodit také různá upozornění. Když svůj projekt propojíš s nodem <strong>Notification</strong>, uvidíš žhavé novinky ohledně dění ve tvé krabičce.</p>
        <p>Nastav si třeba, že když někdo zmáčkne tlačítko, objeví se vyskakovací okno s textovou zprávou. Takhle vytvoříš například jednoduchý zvonek u dveří svého pokoje.🔔</p>
    </div>
</div>

Už se ti honí hlavou, co všechno s dashboardem vymyslíš? [Mrkni na naše projekty a inspiruj se!]({{< ref "/projects/_index.cs.md" >}})

---
title: Create your own dashboard for the BigClown
draft: true
date: 2019-09-26T18:53:49.915Z
weight: 60
description: >-
  Do you want to see data from your BigClown box in colour charts and
  indicators? Create a handy dashboard, we’ll tell you how.
slug: Create-your-own-dashboard
meta_title: Create your own dashboard for the BigClown
meta_description: >-
  Do you want to see data from your BigClown box in colour charts and
  indicators? Create a handy dashboard, we’ll tell you how.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566160234/academy/what-is-dashboard/image6.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566160234/academy/what-is-dashboard/image6.png
---
## What is a dashboard and how to create one

Do you want to follow colour charts of changing temperature in your room? Or to see a pop-up window on your computer every time someone presses a button? 🤓 This and much more can be done by a smart interface called Dashboard. We’ll tell you how to make it happen.

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

Už se ti honí hlavou, co všechno s dashboardem vymyslíš? \[Mrkni na naše projekty a inspiruj se!]({{< ref "/projects/_index.cs.md" >}})

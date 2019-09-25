---
date: "2019-08-12"
title: "Co je to Node-RED a jak se v něm programuje"
slug: co-je-node-red
meta_title: Nauč se programovat v Node-RED
meta_description: Svému BigClown kitu zadáš příkazy v programovacím nástroji Node-RED. Ten je úžasně intuitivní a pracovat se v něm naučíš za pár minut. Přesvědč se sám.
description: Svému BigClown kitu zadáš příkazy v programovacím nástroji Node-RED. Ten je úžasně intuitivní a pracovat se v něm naučíš za pár minut. Přesvědč se sám.
image_preview: /upload/pouzivani-bigclown-playground.jpg
image_main: /upload/pouzivani-bigclown-playground.jpg
weight: 40
---

Aby krabička poslouchala tvoje příkazy, musíš mluvit jejím jazykem. A krabička BigClown mluví programovacím jazykem Node-RED. Ale neboj, slovníky a učebnice nejsou potřeba – naučíš se ho používat za pár minut. 💪


## Co je to Node-RED?
Node-RED je jednoduchý **programovací nástroj**, ve kterém své krabičce řekneš, co a kdy má dělat. Funguje na flow-based principu – flow v angličtině znamená tok, takže všechny tvé příkazy přes Node-RED postupně tečou jako řeka. 🌊

Ve svém [Playgroundu]({{< ref "/academy/what-is-bigclown-playground.cs.md" >}}) najdeš Node-RED v záložce Functions. Když na ni klikneš, uvidíš vlevo seznam takzvaných nodů (uzlů). **Nody** představují jednotlivé akce, které se odehrávají v tvém programu. Třeba stisknutí tlačítka, odeslání zprávy na mobil nebo zobrazení grafu s okolní teplotou.
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image4.png" alt = "Node-RED flow" >}}

Nody postupně **přetahuješ z nabídky vlevo** na volnou plochu uprostřed okna a **spojuješ je** – tímto jednoduchým způsobem vytvoříš celý svůj program. Klikneš na puntík v pravé nebo levé části nodu a přetáhneš ho k jinému nodu, jako bys je spojoval provázkem.

Jakmile pak jeden z nodů aktivuješ – třeba zmáčkneš tlačítko na krabičce – spustí se všechny funkce, které jsi spojil s nodem pro stisknutí tlačítka, třeba takto:
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image5.png" alt = "edit node red flow" >}}

Fialový node vlevo znamená **stisknutí tlačítka**. Žlutý, který na něj navazuje, **vytvoření zprávy**. A ty dva, které z něj vedou, **odeslání zprávy na mobil** (zelený) a **přečtení zprávy nahlas** (modrý). Díky propojení nodů se po stisknutí tlačítka všechny akce postupně provedou a navíc rychleji než za jednu vteřinu!

Když na libovolný node poklikáš myší, otevře se ti jeho **nastavení**, ve kterém si můžeš jeho chování dál různě upravovat.

A to je vše, co k programování v Node-RED potřebuješ vědět. Být programátorem je hračka, co? 🤓


### Nody, které pro svůj vynález stopro využiješ

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image7.png" alt = "MQTT node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p><strong>MQTT</strong> je startovní čára každého programu. Nastavíš si, na co má reagovat (stisknutí tlačítka na krabičce, změnu teploty nebo otočení krabičky), a až k tomu dojde, aktivují se všechny nody, které jsou na MQTT napojené.</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image3.png" alt = "Change node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p><strong>Change</strong> si zkus představit jako šatnu. Program přes něj projde a převleče se do něčeho jiného. Například do textové hlášky. Tu potom odešle do dalších nodů, které na něj navazují a dál ho zpracují, třeba ho pošlou na mobil nebo nahlas přečtou.</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159446/academy/what-is-node-red/image2.png" alt = "Notify Blynk node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p>Node <strong>Notify</strong> má jasnou misi – odeslat notifikaci do mobilu. Ta se ti zobrazí v aplikaci [Blynk]({{< ref "/academy/how-to-connect-blynk.cs.md" >}}).</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image1.png" alt = "Chart node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p>Když do svého programu napojíš node <strong>Chart</strong>, uvidíš v záložce Dashboard krásně přehledné grafy různých funkcích krabičky – třeba o tom, jak se měnila okolní teplota nebo kolikrát jsi stiskl tlačítko.</p>
    </div>
</div>

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566159445/academy/what-is-node-red/image6.png" alt = "Audio Out node - Node-RED" >}}
    </div>
    <div class = "col-md-8">
        <p>S nodem <strong>Audio out</strong> si užiješ spoustu srandy – přikazuje totiž, že má tvůj počítač vydat nějaký zvuk. Například když ho napojíš na node change, do kterého napíšeš nějakou zprávu, tvůj počítač ji nahlas přečte. Ale žádné sprosťárny! 😎</p>
    </div>
</div>

A když už teď víš, o co go, naprogramuj si svůj vlastní projekt! Připravili jsme ti ranec mazaných vynálezů pro inspiraci.
[Koukni na ně]({{< ref "/projects/_index.cs.md" >}})

---
title: Nauč se v BigClownu debugovat zprávy
draft: false
date: 2019-09-21T07:16:22.362Z
weight: 60
description: >-
  Abys svůj program pro IoT krabičku vyladil k dokonalosti, pomůže ti jednoduchý
  debugger, se kterým vychytáš mouchy. Poradíme ti, jak ho nastavíš a rozjedeš.
slug: jak-debugovat
meta_title: Nauč se v BigClownu debugovat zprávy
meta_description: >-
  Abys svůj program pro IoT krabičku vyladil k dokonalosti, pomůže ti jednoduchý
  debugger, se kterým vychytáš mouchy. Poradíme ti, jak ho nastavíš a rozjedeš.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1572800473/academy/learn-to-debug-mesagges-in-bigclown/2E73DFEE-13B1-4CB1-9D3A-1B190D94C8FC.jpg
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1572800473/academy/learn-to-debug-mesagges-in-bigclown/2E73DFEE-13B1-4CB1-9D3A-1B190D94C8FC.jpg
---
Pavouk je rád, když má v síti šťavnatou mouchu nebo jiný hmyz. Do prográmku ale brouci (bugy) nepatří. Vychytej všechny bugy (tak se v angličtině označují hmyzáci i chyby v kódu) ze svých BigClowních projektů. 🐞 Ukážeme ti, jak na to.

## Co je to debug?

Debug znamená v programátorské hantýrce **ladění** či **odstranění chyb** v programu. Protože nějaká ta chybička se do kódu vždycky vloudí.

Pro ladění používají programátoři nástroj jménem **debugger**. Ten sleduje průběh (flow) programu a programátora na chyby upozorňuje. Ajťák se potom nepřehrabuje řádky kódu, protože ví, kam sáhnout. Jednoduchý debugger najdeš i ve svém [Playgroundu](/cs/academy/co-je-to-bigclown-playground/). Zkontroluješ si v něm, zda tvůj program šlape tak, jak má, a odhalíš případné chybky.

## Jak debugovat v Playgroundu?

1. Je to easy. 😎 Klikni na záložku **Functions** a najdi si node **Debug**. Je to hned první nod v sekci Output a vypadá takhle:

![debug](https://res.cloudinary.com/lukasfabik/image/upload/v1569052771/academy/learn-to-debug-mesagges-in-bigclown/image4.png)

2. Debug node připoj přímo za startovní node **MQTT**. K ničemu jinému ho připojovat nemusíš, takže to bude ve tvém programu takový osamělý výběžek (ale neboj, je to introvert, takže mu to vyhovuje 🤓).

**Náš tip**: Debug node můžeš místo MQTT napojit ke kterémukoliv jinému nodu s výstupem vpravo. Zjistíš tak, jak fungují konkrétní funkce tvého programu. 👍

![mqtt](https://res.cloudinary.com/lukasfabik/image/upload/v1569052768/academy/learn-to-debug-mesagges-in-bigclown/image2.png)

3. Teď klikni na **ikonu brouka** v pravé horní části Playgroundu.🐞

![deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1569052768/academy/learn-to-debug-mesagges-in-bigclown/image1.png)

4. **A jsi v debuggeru!** V téhle broučí záložce uvidíš zprávy o chodu svého programu. Máš-li třeba krabičku s tlačítkem, zkus tlačítko mačkat nebo ho dát do ledničky a sleduj, jaké zprávy ti tu budou v debuggeru vyskakovat.

Na základě těchto zpráv si v budoucnu během sestavování programů **ověříš, že vše funguje tak, jak má**. 👌 Bude-li ti třeba chybět propojení některých nodů, debugger tě na to upozorní.

Takto v debuggeru vypadají zprávy o tom, co tvůj program s krabičkou dělá:

![debugger](https://res.cloudinary.com/lukasfabik/image/upload/v1569052770/academy/learn-to-debug-mesagges-in-bigclown/image3.png)

---
title: Základní přehled
slug: zakladni-prehled
---

V této sekci si vysvětlíme základní filozofii firmware konceptů v systému BigClown. Naučíme se instalovat a používat nástroje pro práci s firmware. Formou praktických příkladů si ukážeme, jak používat jednotlivé periferie a API z **BigClown SDK**.

## Programovací jazyk

Firmware je implementovaný **v jazyce C**, což je obecně přijímaný standard pro systémový jazyk. Toto jsou hlavní důvody pro zvolení této technologie:

* Efektivní využití hardwarových prostředků

* Stabilita a ověřenost vývojového prostředí

* Jednoduchost a srozumitelnost syntaxe

{{% note "info" %}}Efektivní využítí hardwarových prostředků je  důležitý faktor pro vývoj zařízení s nízkou spotřebou, což je primární doména ekosystému BigClown.{{% /note %}}

BigClown klade velký důraz na přenositelnost a možnost volby vývojového prostředí. Podporovaný operační systém je Windows, macOS a Ubuntu. Více se dozvíte v článku [**Instalace nástrojů**]({{< relref "doc/firmware/toolchain-setup.cs.md">}}). Jejich používání je pak popsáno v článku [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md">}}).

## Představení SDK

Základním pilířem každého BigClown firmware projektu je ekosystém knihoven, ovladačů a hlavičkových souborů - tzv. **SDK** (zkratka **S**oftware **D**evelopment **K**it).

SDK se nachází v následujícím repozitáři:

**https://github.com/bigclownlabs/bc-core-module-sdk**

Hlavičkové soubory SDK mají integrovanou dokumentaci pomocí nástroje **Doxygen**. Dokumentace se automaticky publikuje na adrese:

**http://sdk.bigclown.com**

Na výše uvedeném odkazu najdeš kompletní API referenci BigClown SDK. Toto jsou principy, kterých se držíme při vývoji API:

* Konzistentní a čistý API návrh napříč celým SDK

* Modulární a objektově orientovaný přístup

* Preference asynchronního, event-driven stylu programování

* Srozumitelné názvy pro funkce, datové typy, proměnné, apod.

* Jednoduchý přístup ke spodním vrstvám hardwaru

* Deklarativní použití hardwarových produktům BigClown

## Integrace SDK do projektu

Do firmware projektu je SDK integrovaný jako **Git submodul**. Tato skutečnost má tu výhodu, že se dá konkrétní verze SDK "zamknout" na danou aplikaci. Jinými slovy máte jistotu, že váš firmware projekt bude možné přeložit v budoucnosti i v okamžiku, že aktuální verze SDK nebude kompatibilní s vaší aplikací. Samozřejmě lze SDK kdykoliv aktualizovat jednoduše, nebo se přepnout na konkrétní verzi.

{{% note "danger" %}}Neintegrujte SDK do svého firmware projektu jako rozbalený ZIP soubor stažený z GitHub. Ačkoliv vám bude sestavení firmware bez problémů fungovat, je nutné pro využití technické podpory k firmware znát verzi používaného SDK (číslo commitu).{{% /note %}}

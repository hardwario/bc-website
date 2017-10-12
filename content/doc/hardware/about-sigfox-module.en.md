---
title: Popis k Sigfox Module
---

{{< hardware_intro "Sigfox Module" sigfox-module >}}

Certifikovaný Sigfox Module umožňuje systému BigClown komunikovat do bezdrátové sítě Sigfox. Tato síť patří do skupiny tzv. LPWAN sítí (Low-power Wide-Area Network). Bezdrátová komunikace probíhá v pásmu 868 MHz.

Pokud nemáš podepsanou smlouvu s operátorem sítě Sigfox, pak si tento modul zakup v balíčku s 3letým předplatným naší služby MySigfox Platinum, která zajišťuje přenos dat z backendu Sigfox na váš server. V takovém případě získáš tento modul zdarma!

Služba MySigfox.com zajišťuje Sigfox konektivitu a umožňuje připojit BigClown zařízení na vlastní server, aniž by bylo nutné provádět jakoukoliv registraci uživatele, či podepisovat smlouvu se společností Sigfox.

V České Republice síť Sigfox provozuje společnost SimpleCell, nicméně funguje v mnoha dalších zemích v Evropě. V síti Sigfox se nemusí řešit roaming zařízení. Tato technologie umožňuje komunikovat z bateriově napájeného zařízení přímo na server, a to i po dobu několika let. Díky využití úzkého pásma (narrow-band) dokáže zařízení s buňkou operátora komunikovat i na vzdálenost více než 100 km. Modulační rychlost je pouhých 100 bps, která umožňuje využít velmi úzkou šířku frekvenčního pásma, a tedy komunikovat na dlouhé vzdálenosti i při velmi nízkých energetických nárocích.

Tato síť má široké spektrum aplikací. Její použití je vhodné zejména v zařízeních pro odečet spotřebované energie (např. vodoměry, plynoměry, atd.), environmentálních senzorů (např. CO2 monitor), ale také například v aplikacích pro včasné hlášení havárií či závad (např. detektor úniku vody).

Je však nutné upozornit na důležitou vlastnost této sítě, která se týká omezení přenášených dat. V síti Sigfox je možné ze zařízení přenést pouze 140 zpráv denně o maximální délce datového rámce 12 bytů (96 bitů). Toto omezení vychází z evropské legislativy pro pásmo 868 MHz, která říká, že zařízení nesmí vysílat více než 1% času z posledního 24hodinového časového úseku. Síť Sigfox neřeší formát datového rámce - pouze zaručuje jeho přenos na uživatelem stanovený cíl (většinou serverová služba).

Díky BigClown už není síť Sigfox dostupná pouze pro firmy a aplikace s velkým množstevním potenciálem, ale je dostupná opravdu pro každého bastlíře, ajťáka, či malý podnik.
{{< /hardware_intro >}}

## Vlastnosti

  * Oficiální certifikace od firmy Sigfox
  * Modem Wisol WSSFM10R1AT
  * Komunikace přes UART prostřednictvím AT příkazů
  * SMA anténa ANT-SS900
  * Spotřeba v pohotovostním režimu 2 μA
  * Spotřeba při vysílání 65 mA po dobu cca 6 sekund
  * Rozsah provozních teplot: -20 až 70 °C
  * Rozměry: 33 x 55 mm
  * 10letá záruka

{{< hardware "Sigfox Module" >}}

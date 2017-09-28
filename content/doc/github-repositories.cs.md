---
title: GitHub repozitáře
slug: github-repozitare
---

Systém BigClown je open-source a jeho vývoj probíhá prostřednictvím platformy GitHub, kde můžete v jednotlivých repozitářích najít zdrojová data, případně stáhnout předkompilované balíčky ze sekce `Releases`.

Adresa GitHub organizace `bigclownlabs `je **https://github.com/bigclownlabs**.

Pro lepší přehlednost má každý repozitář ve svém názvu předponu, která určuje co má za obsah.

## Základní repozitáře

| Repozitář                                                            | Popis                                                         | Releases |
|----------------------------------------------------------------------|---------------------------------------------------------------|----------|
| [bc&#8209;enclosures](https://github.com/bigclownlabs/bc-enclosures) | Krabičky a jejich 3D modely ve formátu STL                    | -        |
| [bc&#8209;hardware](https://github.com/bigclownlabs/bc-hardware)     | Uvolněná data pro hardware - schémata, osazovací plánky, atd. | -        |
| [bc&#8209;raspbian](https://github.com/bigclownlabs/bc-raspbian)     | Upravená Linuxová distribuce Raspbian pro Raspberry Pi        | Ano      |
| [bc&#8209;website](https://github.com/bigclownlabs/bc-website)       | Zdrojový repozitář pro web, dokumentace, blog. atd.           | -        |

## Hub/Host repozitáře

Repozitáře s prefixem **[bch](https://github.com/bigclownlabs?q=bch)** obsahují aplikační software pro hub nebo vývojový systém (host).

| Repozitář                                                                                  | Popis                                                                  | Releases |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------|----------|
| [bch&#8209;dashboard](https://github.com/bigclownlabs/bch-dashboard)                       | Webová aplikace pro usnadnění rádiového párování a upgrade firmware    | Ano      |
| [bch&#8209;windows&#8209;toolchain](https://github.com/bigclownlabs/bch-windows-toolchain) | Balíček aplikací pro práci na platformě Windows                        | Ano      |
| [bch&#8209;usb&#8209;gateway](https://github.com/bigclownlabs/bch-usb-gateway)             | Gateway běžící na pozadí, která propojuje USB gateway a MQTT           | -        |
| [bch&#8209;firmware&#8209;utility](https://github.com/bigclownlabs/bch-firmware-utility)   | CLI nástroj pro snadnou práci s firmware - vytváření, flashování, atd. | Ano      |

## Firmwarové repozitáře

Repozitáře s prefixem **[bcf](https://github.com/bigclownlabs?q=bcf)** obsahují firmwarové projekty pro Core Module, Cloony nebo USB Dongle.

| Repozitář                                                                                              | Popis                                                                  | Releases |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|----------|
| [bcf&#8209;generic&#8209;node](https://github.com/bigclownlabs/bcf-generic-node)                       | Univerzální firmware do bezdrátových nodů                              | Ano      |
| [bcf&#8209;sdk&#8209;core&#8209;module](https://github.com/bigclownlabs/bcf-sdk-core-module)           | Kompletní SDK pro vývoj firmware - součástí projektů jako Git submodul | -        |
| [bcf&#8209;skeleton&#8209;core&#8209;module](https://github.com/bigclownlabs/bcf-skeleton-core-module) | Prázná kostra firmware pro váš nový projekt                            | -        |
| [bcf&#8209;usb&#8209;dongle](https://github.com/bigclownlabs/bcf-usb-dongle)                           | Firmware do USB Dongle pro funkci gateway                              | Ano      |
| [bcf&#8209;usb&#8209;gateway](https://github.com/bigclownlabs/bcf-usb-gateway)                         | Firmware do Core Module pro funkci gateway                             | Ano      |

## Projektové repozitáře

Repozitáře s prefixem **[bcp](https://github.com/bigclownlabs?q=bcp)** obsahují pro daný projekt firmware a/nebo aplikaci pro hub/host.

| Repozitář                                                                                  | Popis                                                      | Releases |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------|----------|
| [bcp&#8209;sigfox&#8209;button](TODO)                                                      | Sigfox tlačítko                                            | Ano      |
| [bcp&#8209;sigfox&#8209;climate&#8209;monitor](TODO)                                       | Sigfox environmentální monitor                             | Ano      |
| [bcp&#8209;sigfox&#8209;co2&#8209;monitor](TODO)                                           | Sigfox monitor CO2                                         | Ano      |
| [bcp&#8209;sigfox&#8209;flood&#8209;detector](TODO)                                        | Sigfox detektor úniku vody                                 | Ano      |
| [bcp&#8209;sigfox&#8209;motion&#8209;detector](TODO)                                       | Sigfox detektor pohybu                                     | Ano      |
| [bcp&#8209;sigfox&#8209;shock&#8209;detector](TODO)                                        | Sigfox detektor otřesu                                     | Ano      |
| [bcp&#8209;sigfox&#8209;energy&#8209;meter](TODO)                                          | Sigfox monitor spotřeby energie                            | Ano      |
| [bcp&#8209;sigfox&#8209;button](TODO)                                                      | Bezdrátové tlačítko                                        | Ano      |
| [bcp&#8209;wireless&#8209;climate&#8209;monitor](TODO)                                     | Bezdrátový environmentální monitor                         | Ano      |
| [bcp&#8209;wireless&#8209;co2&#8209;monitor](TODO)                                         | Bezdrátový monitor CO2                                     | Ano      |
| [bcp&#8209;wireless&#8209;flood&#8209;detector](TODO)                                      | Bezdrátový detektor úniku vody                             | Ano      |
| [bcp&#8209;wireless&#8209;motion&#8209;detector](TODO)                                     | Bezdrátový detektor pohybu                                 | Ano      |
| [bcp&#8209;wireless&#8209;shock&#8209;detector](TODO)                                      | Bezdrátový detektor otřesu                                 | Ano      |
| [bcp&#8209;wireless&#8209;energy&#8209;meter](TODO)                                        | Bezdrátový monitor spotřeby energie                        | Ano      |
| [bcp&#8209;wireless&#8209;lcd&#8209;thermostat](TODO)                                      | Bezdrátový LCD termostat                                   | Ano      |
| [bcp&#8209;smart&#8209;led&#8209;strip](TODO)                                              | Ovládání chytrého LED pásku pomocí aplikace Blynk          | Ano      |
| [bcp&#8209;ping&#8209;pong&#8209;table](TODO)                                              | Ping-pongový stůl s chytrým LED páskem                     | Ano      |
| [bcp&#8209;ultrasonic&#8209;proximity&#8209;sensor](TODO)                                  | Ultrazvukový detektor vzdálenosti s chytrým LED páskem     | Ano      |

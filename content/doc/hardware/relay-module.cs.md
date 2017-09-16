---
title: Popis Relay Module
slug: relay-module
---

Relay Module je vhodný pro spínání malých spotřebičů, např. LED pásků, ventilátorů, bzučáků, apod.

Zajímavou vlastností tohoto modulu je použití bistabilního relátka, díky čemuž je modul vhodný pro aplikace napájené z baterií. U bistabilních relátek je totiž zapotřebí energie pouze během přepínání. Po přepnutí není nutné cívku napájet, protože si pamatuje svůj stav. Integrované LEDky indikují změnu stavu cívky (zelená LED = true, červená = false).

Tento modul je I2C-only periferie, takže nezabírá další extra signály z BigClown headeru.

**TODO** Vzhledem k většímu množství odkazů bych se chtěl zeptat, zda by generování stránky nebo odkazů nešlo nějak zautomatizovat, jestli do hlavičky dát proměnnou "bc_module_relay". Nebo jestli tyto .MD dokumenty generovat dávkově?

**TODO** je ok zvolený název souboru? Nebo tam přidat i `popis-`?

**TODO** Z e-shopu sem na každý modul musí vést odkaz, zde můžeme daleko flexibilněji doplňovat aktuální ifnromace, než v e-shopu.

{{< hardware "Relay Module" >}}

# Obrázek


**TODO** Obrázek bych nejraději dal hned doprava nahoru do popisu, ale nevím jak jej zmenšit v Hugo



# Funkce 
  * Bistabilní relé pro přepínání výkonů do 60 W:
    * 12 V DC / 5 A
    * 24 V DC / 2.5 A
  * Vhodné pro aplikace napájené z baterií
  * Energie je zapotřebí pouze během změny stavu cívky
  *I2C-only periferie
  * Červená a zelená LEDka indikující změnu stavu cívky
  * Rozsah napájecího napětí: 3.0 až 3.6 V
  * Rozsah provozních teplot: -20 až 70 °C
  * Rozměry: 33 x 55 mm
  * 10letá záruka

# Schéma

  * [Schéma PDF](https://github.com/bigclownlabs/bc-hardware/blob/master/out/bc-module-relay/bc-module-relay-rev-1-3-sch.pdf)
  * [Schéma Eagle](https://github.com/bigclownlabs/bc-hardware/tree/master/out/bc-module-relay)


# Projekty používající modul

  * [bcf-generic-node](https://github.com/bigclownlabs/bcf-generic-node) - Univerzální firmware do bezdrátových nodů.
  * [bcf-usb-gateway](https://github.com/bigclownlabs/bcf-usb-gateway) - Firmware do Core Module pro funkci gateway.
  
# Odkaz na SDK referenci
**TODO** Které odkazy vkládat? na github i na exportovaný doxygen?

## Doxygen
[Vygenerovaná dokumentace](http://sdk.bigclown.com/group__bc__module__relay.html)

## GitHub
[bc_module_relay.c](https://github.com/bigclownlabs/bcf-sdk-core-module/blob/master/bcl/src/bc_module_relay.c) \
[bc_module_relay.h]
(https://github.com/bigclownlabs/bcf-sdk-core-module/blob/master/bcl/inc/bc_module_relay.h)

## Ukázka v `/sdk/_examples`

[Example Relay Module (TODO)](https://github.com/bigclownlabs/bcf-sdk-core-module/tree/master/_examples)


---
title: Popis k Relay Module
---
{{< hardware_intro "Relay Module" relay-module >}}

Relay Module je vhodný pro spínání malých spotřebičů, např. LED pásků, ventilátorů, bzučáků, apod.

Zajímavou vlastností tohoto modulu je použití bistabilního relátka, díky čemuž je modul vhodný pro aplikace napájené z baterií. U bistabilních relátek je totiž zapotřebí energie pouze během přepínání. Po přepnutí není nutné cívku napájet, protože si pamatuje svůj stav. Integrované LEDky indikují změnu stavu cívky (zelená LED = true, červená = false).

Tento modul je I2C-only periferie, takže nezabírá další extra signály z BigClown headeru.

{{< /hardware_intro >}}


## Vlastnosti
  * Bistabilní relé pro přepínání výkonů do 60 W:
    * 12 V DC / 5 A
    * 24 V DC / 2.5 A
  * Vhodné pro aplikace napájené z baterií
  * Energie je zapotřebí pouze během změny stavu cívky
  * I2C-only periferie
  * Červená a zelená LEDka indikující změnu stavu cívky
  * Rozsah napájecího napětí: 3.0 až 3.6 V
  * Rozsah provozních teplot: -20 až 70 °C
  * Rozměry: 33 x 55 mm
  * 10letá záruka

{{< hardware "Relay Module" >}}

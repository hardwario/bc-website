---
title: Popis k Power Module
---
{{< hardware_intro "Power Module" power-module >}}
Modul určený k napájení BigClown nodů za použití jeho integrovaného LDO regulátoru generujícího výstupní napětí 3.3 V ze vstupního napětí 5V. K Power modulu můžete připojit 5V DC adaptér skrze standardní 2.1 mm jack konektor.

Další funkcí modulu je vysokoproudové relé (230V AC / 16A).

K modulu si rovněž můžete přes svorkovnici přímo připojit programovatelné RGB(W) LED pásky s 5V rozhraním (logika překladu napětí je implementována), což je ideální pro řízení WS2812B kompatibilních LEDek.

U Power modulu jsme rovněž na vstupu jack konektoru implementovali chytrou ochranu před přepětím, podpětím a obrácenou polaritou. Tímto je garantováno, že vstupní napětí bude vždy ve správných mezích.

Modul je osazen dvěmi extra 5 pinovými zásuvkami sloužícími pro připojení dalších BigClown tagů (I2C periferií v BigClown formátu).
{{< /hardware_intro >}}


## Vlastnosti

  * Vstup pro 5 V DC adaptér (2.1mm jack) (viz poznámka 1)
  * Rozsah vstupního napětí od 4.2 V do 5.8 V
  * Výstup vysokoproudového relé (230 V AC / 16 A)
  * Integrovaný LDO regulátor s výstupním napětím 3.3 V
  * Adresovatelný výstup pro RGB(W) LED pásky (viz poznámky 1 a 2)
  * 2x zásuvka pro BigClown tagy
  * Ochrana před přepětím, podpětím a obrácenou polaritou
  * 3-pinový konektor pro releový výstup
  * 3-pinový konektor pro LED pásek
  * Rozsah provozních teplot: -20 až 70 °C
  * Rozměry: 88 x 55 mm
  * 10letá záruka

### Poznámky:
  1. Maximální povolený proud je 6 A
  * K řízení adresovatelných LED pásků je potřeba Core Module

{{< hardware "Power Module" >}}

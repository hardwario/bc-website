# Detektor přiblížení vozidla


## Úvod

Cílem tohoto projektu je indikování vzdálenosti pohybujícího se objektu od ultrazvukového senzoru pomocí chytrého LED pásku.
Například to můžeš použít  jako jednoduchého pomocníka při parkování auta v garáži.
Už nikdy tvoje manželka nebo přítelkyně nemusí narazit do stěny. :-)


## Funkčnost

![Diagram](images/car-proximity-sensor/diagram.png)

Jako senzor pohybu je použit ultrazvukový senzor HC-SR04P, který je schopný pracovat na 3,3V logice (některé senzory to nepodporují a musíš to zjistit z dokumentace), což je pro nás ideální.
Z něho jdou data do Core Modulu, kde proběhne vyhodnocení a graficky promítne vzdálenost auta od senzoru do LED pásku.


## Princip funkce ultrazvukového senzoru

Krátké ultrazvukové pulzy jsou generovány na základě nepřímého piezo-elektrického jevu piezo-elektrickým krystalem.
Ultrazvukový senzor vyvolává vysokofrekvenční zvukové vlny (nad 20 kHz) a zachytává echo.

Výhodou ultrazvukových senzorů je jednoduché nastavení, minimální údržba a velmi široké použití.
Jsou velmi spolehlivé i ve znečištěném prostředí.


## Co budeme potřebovat

- 4x Propojovací drátek kolíček -> dutinka
- BigClown Core Module
- BigClown Power Module
- BigClown Base Module
- LED strip RGBW 1m 144 LEDs
- Auto a garáž :-)


## Sestavení

1. Začni s Base Modulem.

    ![Diagram](images/car-proximity-sensor/1-Base.png)

2. Na Base Module nasaď Power Module.

    ![](images/car-proximity-sensor/2-Base-Power.png)

    ![](images/car-proximity-sensor/3-Base-Power.png)

3. Na Power Module nasaď Core Module.

    ![](images/car-proximity-sensor/4-Base-Power-Core.png)

    ![](images/car-proximity-sensor/5-Base-Power-Core.png)

4. Propoj senzor s Core Modulem:
    - *Napájení* zapoj na **PIN 16 (VDD)**
    - *Zem* zapoj na **PIN 15 (GND)**
    - *Trigger* zapoj na **PIN 10 (P9)**
    - *Echo* zapoj na **PIN 9 (P8)**

    ![Pinout](images/car-proximity-sensor/6-Base-Power-Core-Ultrasonic.png)

5. Zapoj LED pásek do Power Modulu
6. Zkompiluj a nahraj firmware ([GitHub repozitář k projektu](https://github.com/bigclownlabs/bcp-car-proximity-sensor))
7. Přilep si pásek do garáže
8. Dej Power Module do zásuvky
9. Raduj se, jelikož tvé auto už vždy zaparkuješ v dostatečné vzdálenosti :-)


## Závěr

Postavili jsme si ultrazvukový senzor vzdálenosti přibližujícího se objektu.
Tento projekt ukazuje další praktické využití BigClowna v domácí automatizaci.
Jak by jsi ten projekt vylepšil ty? ;-)

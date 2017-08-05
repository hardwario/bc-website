# Řízení napájení


Naše modulární stavebnice umožňuje připojit více zdrojů napájení.
Díky tomu je možné Core Module napájet z USB a zároveň mít vložené baterie v Battery Module.
BigClown stavebnice také inteligentně řeší prioritu přepínání zdrojů.
Co to znamená?
Například to, že když je připojený externí zdroj (adaptér nebo USB), potom se baterie odpojí a nevybíjí se.
Také je možné mít v sestavě připojených více externích zdrojů najednou - například adaptér zapojený do Power Module a zároveň USB kabel v Core Module.
V takovém případě "vítězí" ten modul, který je fyzicky umístěný v sestavě níže.


## Jak jsme toho docílili?


Na BigClown headeru jsou dva signály pro napájení komponent:


1. VDD - kladný napájecí signál (buď 3.1 V při napájení z baterií nebo 3.3 V při externím zdroji)
2. GND - napájecí zem


Ten modul, který je schopen do systému dodávat energii, nazýváme "energizer".
Energii dodává buď prostřednictvím externího zdroje (např. adaptér nebo USB), nebo prostřednictvím baterií.
V každém případě energizer obsahuje obvod pro inteligentní řízení napájení.


Pro funkci takového obvodu jsou na BigClown headeru k dispozici další dva signály:


1. BAT_OFF - tímto signálem se přes součtovou (OR) diodu říká "odpoj zdroj baterie"
2. VDD_OFF - tento signál je díky SMD technologii pinů a socketů rozdělený na dvě části:
   * VDD_OFF_IN - vstup na spodní straně modulu (piny) - tento vstup říká danému modulu, aby odpojil svůj výstup zdroje
   * VDD_OFF_OUT - výstup na horní straně modulu (dutinky) - tento výstup říká nadřazenému modulu, aby odpojil jeho výstup zdroje


Z tohoto je patrné, že energizer moduly mezi sebou řetězí (chain) signál VDD_OFF.


Toto je ukázka obvodového řešení baterkového energizeru:


![](images/power-management/battery-energizer-circuit.png)


Toto je ukázka obvodového řešení energizeru z pevného zdroje:


![](images/power-management/usb-energizer-circuit.png)


Ať už se jedná o bateriový energizer, nebo z pevného zdroje, na výstupu napájení je vždy zapojení dvou P-kanálových MOSFETů - tzv. back-to-back obvod.
Toto zapojení zajišťuje úplné odpojení napájecího obvodu a tím zabraňuje zpětnému protékání proudu při nečinnosti zdroje / požadavku na odpojení baterií.


## Shrnutí


Při návrhu konceptu řízení napájení jsme věnovali veliké úsilí jednoduchosti a komfortu pro uživatele a bezpečnosti proti poničení.
Díky tomu se není třeba obávat připojení více zdrojů napájení ve stejný okamžik.

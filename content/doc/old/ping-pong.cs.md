# Počítadlo skóre

## O čem projekt je a co ti přinese

Velmi jednoduchý projekt, který velice originálně řeší problémy s počítáním bodů, například při hraní stolního tenisu.
V podstatě se jedná o počítadlo na body, které se inkrementuje pokaždé, když jeden, nebo druhý hráč získá bod a po dosažení 21 bodů oznámí vítěze.
Výsledkem je unikátní ping-pongový stůl, který vždy dokáže minimálně rozproudit konverzaci návštěvníků v našich kancelářích, protože je jediný svého druhu.
Zatím...
Pro lepší představu se podívej na [video k projektu](https://youtu.be/otJfNo_x1-Q).

 ![](images/ping-pong/table-1.jpg)


## Co všechno k projektu potřebuješ

* 1x Adresovatelný LED pásek 1,5 m
* 1x Core Module
* 1x Power Module - pro napájení sestavy a zapojení LED pásku
* 1x Base Module - pro snadnou montáž
* 1x Sensor Module - pro snadné připojení tlačítek
* 1x Napájecí adaptér 5V / 3A

Pro projekt jsme připravili [cenově zvýhodněnou sadu](https://obchod.bigclown.cz/products/score-keeper-set).

Dále budeš potřebovat:

* PC nebo notebook s Windows, MacOS nebo Linux
* Tlačítka dle vlastní preference
* Několik metrů dvou-žilového vodiče
* Zápustný hliníkový profil pro LED pásek s matným difuzorem ([lze koupit např. zde](https://www.ledline.cz/profily-pro-led-pasky/alu-profil-zapustny-174-x-8mm/alu-profil-zapustny-174x8-delka-2m-krytka-mat.html))


## Jak na to

### Příprava stolu:

Mechanika celého problému by se dala shrnout asi tak, že výrobce stolu snad počítal s tím, že se tam bude pásek instalovat, jelikož byl celý zákrok neinvazivní, ale výsledek je i přesto velice robustní.
Zápustný hliníkový profil perfektně zapadne do mezery mezi polovinami stolu.

 1. Seřízni zápustný ALU profil přesně na šířku ping-pongového stolu.

 ![](images/ping-pong/table-al-tube.jpg)

 2. Do profilu vyvrtej na krajích dva otvory pro šroub se zápustnou hlavou, tak aby bylo možné na spodní stranu stolu přiložit plechy pro ukotvení. Jejich přesná velikost není nijak kritická. Po upnutí plechu pomocí rychloupínacího držáku na síťku se obě hrací plochy stolu pevně spojí.

 ![](images/ping-pong/table-bottom.jpg)

 3. Nakonec se po stranách připevní tlačítka s kabelem dostatečné délky.

 ![](images/ping-pong/table-button.jpg)

### Složení stavebnice
 1. Sestav Node z modulů BigClown.

 ![](images/ping-pong/node-2.jpg)

2. Stáhni si [zkompilovaný firmware](https://github.com/bigclownlabs/bcp-ping-pong-table/releases/latest)
 nebo zdrojové kódy k projektu. GitHub repozitář k projektu nalezneš [zde](https://github.com/bigclownlabs/bcp-ping-pong-table).

3. Flashni Core Module pomocí micro USB kabelu a dfu [podle tohoto návodu](https://doc.bigclown.cz/core-module-flashing.html#nahrávání-programu-přes-usb-dfu-bootloader).

### Instalace
 1. Zvol místo pro přichycení sestavy a připrav si dostatečně dlouhé kabely pro připojení tlačítek a LED pásku.

 2. Zapoj tlačítka do Senzor Module do 4 pinové svorkovnice (tlačítko A na pozice 1 a 2, tlačítko B na pozice 3 a 4).

 ![](images/ping-pong/node-buttons.jpg)

 3. Zapoj LED pásek do Power Module.

 ![](images/ping-pong/node-led-strip.jpg)

 4. Zapoj 5V napájecí adaptér do Power Module.

 ![](images/ping-pong/table-node.jpg)


## Volitelná Rozšíření a popis FW

### Akustická odezva na stisk tlačítek
Na GPIO port P6 Core Module můžeš připojit piezo měnič (druhý vývod zapoj na GND) pro akustickou odezvu po stisku tlačítek. Piezo doporučujeme připojit pokud použiješ tlačítka s málo zřetelným stiskem (bez cvaknutí).


### Konfigurace a nastavení pravidel hry
Úpravou konfigurace lze zvolit např. barvu hráče a intenzitu podsvětlení.

```
#define BRIGHTNESS_RED 40
#define BRIGHTNESS_BLUE 40
#define BRIGHTNESS_WHITE_GAP 40
```


Pro změnu maximálního skóre zadej počet viditelných bodů (tzn. pro hru do 21 nastav 20, 21. vítězný bod je indikován pohyblivým LED efektem v barvě hráče).
Délka jednotlivých dílků se nastaví automaticky dle zadaného počtu LED celého pásku.

```
#define NUMBER_OF_ROUNDS 20

#define LED_COUNT 204
#define LED_COUNT_PER_POINT ((float)((LED_COUNT - 1.f) / NUMBER_OF_ROUNDS))
```


GOIO porty jsou nastaveny na použití Sensor Modulu (*BC_GPIO_P4* a *BC_GPIO_P5*), piezo na *BC_GPIO_P6*

```
#define RED_BUTTON_GPIO BC_GPIO_P4
#define BLUE_BUTTON_GPIO BC_GPIO_P5
#define PIEZO_GPIO BC_GPIO_P6
```


Dále můžeš jednoduše měnit délku tónu při stisku tlačítka a
```
#define PIEZO_BEEP_TIME 300
```


### Inicializace

Jak je vidět v následující ukázce, inicializace se díky přístupu, kterému by se dalo říkat event-callback, vejde na pár řádků a přesto je velice transparentní.

```
void application_init(void)
{
    // Initialize power module with led strip
    bc_module_power_init();
    bc_led_strip_init(&led_strip, bc_module_power_get_led_strip_driver(), &_led_strip_buffer_rgbw_204);

    // Initialize red button
    bc_button_init(&button_red, BC_GPIO_P4, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button_red, button_score_event_handler, NULL);

    // Initialize reset red button
    bc_button_init(&button_reset_red, BC_GPIO_P4, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button_reset_red, button_reset_event_handler, NULL);
    bc_button_set_hold_time(&button_reset_red, 4000);

    // Initialize blue button
    bc_button_init(&button_blue, BC_GPIO_P5, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button_blue, button_score_event_handler, NULL);

    // Initialize reset blue button
    bc_button_init(&button_reset_blue, BC_GPIO_P5, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button_reset_blue, button_reset_event_handler, NULL);
    bc_button_set_hold_time(&button_reset_blue, 4000);

    // Initialize piezo gpio pin
    bc_gpio_init(BC_GPIO_P6);
    bc_gpio_set_mode(BC_GPIO_P6, BC_GPIO_MODE_OUTPUT);

    reset_task_id = bc_scheduler_register(reset_game, NULL, BC_TICK_INFINITY);
    reset_game();
}
```

### Příprava vlastního bufferu pro LED pásek

Šířka běžného ping-pongového stolu je cca 150 cm a je tedy potřeba si připravit speciální buffer pro delší LED pásek s větším počtem LED. V našem případě vyšel počet počet LED na 204.

```
static uint32_t _dma_buffer_rgb_204[LED_COUNT * sizeof(uint32_t) * 2];

const bc_led_strip_buffer_t _led_strip_buffer_rgbw_204 =
{
    .type = BC_LED_STRIP_TYPE_RGBW,
    .count = LED_COUNT,
    .buffer = _dma_buffer_rgb_204
};
```

### Obsluha piezo reproduktoru

Snad jediná funkce, kterou nenalezneš v BigClown SDK a bylo ji potřeba samostatně implementovat.

```
void piezo()
{
    unsigned int i, j;

    for (i = 0; i < 100; i++)
    {
        for (j = 0; j < 400; j++);
        bc_gpio_set_output(BC_GPIO_P6, true);
        for (j = 0; j < 400; j++);
        bc_gpio_set_output(BC_GPIO_P6, false);
    }
}
```

### Další integrace
Připojením sestavy k Raspberry PI s odpovídajícím programem v pythonu, zobrazovat skóre ve vlastní aplikaci nebo výsledky zaznamenávat v databázi. Přes Raspberry PI se lze připojit také např. k Philips HUE a měnit barvu svícení podle současného stavu počítadla, vše je pouze na tvé fantazii.

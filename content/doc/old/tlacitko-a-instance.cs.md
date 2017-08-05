
# Tlačítko a instance #

## Tlačítko

Pojďme nyní ovládat LED tlačítkem na Core Module.
Opět by šlo využít přímé čtení GPIO pinu.
Použijeme ale další komponentu SDK bc_button, která za nás vyřeší hned několik problémů.
Například ošetří a odfiltruje zákmity, které vznikají při stisku a uvolnění tlačítka.
Dále můžeme zjistit, zda tlačítko bylo stisknuto krátce, nebo dlouze.

Poprvé se nyní setkáme s callback funkcí, do které nám program skočí, když na tlačítku nastane událost.
Nejprve si funkci vytvoříme.
Název funkce můžeme volit libovolný, ale budeme se držet konvencí SDK.
Parametry funkce je potřeba dodržet i když je nyní nebudeme používat všechny.
Také je třeba vytvořit instanci bc_button_t, inicializovat tlačítko a nastavit naši callback funkci v application_init().

``` C
#include <application.h>

// LED instance
bc_led_t led;

// Instance tlačítka
bc_button_t button;

void application_init(void)
{
    // Inicializuj LED
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_ON);

    // Inicializuj tlačítko
    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);
}

// Náš callback event handler
void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    // Nepoužité parametry vypíšeme s (void)
    // aby kompilátor skryl varování
    (void) self;
    (void) event_param;

    // Pokud nastal krátký stisk tlačítka
    if (event == BC_BUTTON_EVENT_PRESS)
    {
        bc_led_set_mode(&led, BC_LED_MODE_TOGGLE);
    }
}
```

## Instance a objektové programování ##

Pro LED a tlačíko jsme si museli vytvořit instance `bc_led_t` a `bc_button_t`.
Tyto vytvořené struktury potom jako pointer posíláme do jednotlivých funkcí jako jejich první parametr.
V jazyce C tímto způsobem nahrazujeme objektový programovací model.
V callback funkci pro naše tlačítko se nám tento objekt `bc_button_t *self` posílá jako první parametr.
Zatím jej nemusíme využívat, ale v callbacku pro senzory se nám instance objektu bude hodit.
V callbacku také zatím nepoužíváme parametr `void *event_param`.
Aby kompilátor zbytečně při kompilaci nevypisoval varování, stačí do funkce napsat tyto parametry na řádek a před ně zapsat `(void)`.
Tím kompilátor donutíme si myslet, že parametry používáme a nevypíše varování.

Teď se možná zeptáte, k čemu jsou instance dobré?
Vytvářejí nám zapouzdření určitého bloku funkcí.
Pokud například budeme chtít mit na volných pinech Core Module další blikající LED, můžeme si snadno vytvořit více blikajících LED následujícím způsobem.

``` C
#include <application.h>

// Vytvoříme pole dvou instancí LED
bc_led_t led[2];

void application_init(void)
{
    // Inicializujeme obě instance
    bc_led_init(&led[0], BC_GPIO_LED, false, false);
    bc_led_init(&led[1], BC_GPIO_P8, false, false);    

    // Rozblikáme obě LEDky. Každou jinou rychlostí
    bc_led_set_mode(&led[0], BC_LED_MODE_BLINK);
    bc_led_set_mode(&led[1], BC_LED_MODE_BLINK_FAST);
}
```

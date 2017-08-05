
# BigClown SDK - úvod a rozblikání LED #

Zde najdeš základní popis a strukturu programu. Pokud něčemu v úvodu nerozumíš, němej strach. Podívej se dál na praktické úkázky s LED diodou a zjistíš, že napsat si vlastní firmware je hračka.

## Úvod

BigClown SDK je modulární API pro Core Module, které nabízí pokročilé funkce pro práci s periferiemi a hardwarovými moduly.

Bylo napsáno od nuly přesně na míru BigClown ekosystému.
Pro dosažení co nejmenší spotřeby energie a co nejnižších hardwarových nároků byla zvolena cesta objektového programovacího modelu v jazyce C.
Ze stejných důvodů bylo také upuštěno od RTOS a byl vytvořen vlastní plánovač.

Pokud jsi někdy programoval Arduino (nadstavba C nazvaná Wiring), pak určitě najdeš společné znaky s BigClown SDK.
Z důvodů úspory energie však hlavní smyčka neprobíhá neustále dokola, ale využívá se callbacků, což jsou jednoduše funkce, které se zavolají, když vám SDK chce něco říct.
Může to být např. přijatá rádiová zpráva nebo výsledek měření teploty.
Ve chvíli, kdy není třeba nic vykonávat, se procesor na určitý čas uspí a probudí se až v okamžiku, kdy přijde přerušení ze senzoru nebo z časovače.

Všechny moduly SDK si v tomto seriálu popíšeme a vysvětlíme. Tutoriál se bude postupně doplňovat a vylepšovat a můžeš se na něm podílet i ty. Dej nám vědět, jestli nějaká část potřebuje doplnit nebo upravit. Můžeš to udělat tlačítkem plus (+), které najdeš u každého odstavce, když na něj najedeš myší, nebo nás kontaktuj přímo.

## Kde program začíná?
V programovacích jazycích existuje vstupní bod.
Může to být funkce `main()`, `loop()`.
V BC SDK v jazyce C se kód začíná vykonávat ve funkci `main()`.
Zde se ale ještě provádí spousta systémových nastavení a úkolů.

Abychom práci co nejvíce zpřehlednili a zpříjemnili, vytvořili jsme vstupní bod uživatelské aplikace v `application_init()` v souboru `app/application.c`.

Obsah souboru `app/application.c` bez žádného dalšího kódu vypadá tedy takto:

``` C
// Následující řádek nám zpřístupní všechny BigClown funkce
#include <application.h>

// Inicializace aplikace (setup)
void application_init(void)
{
}

// Volitelná funkce, ve které je hlavní smyčka tvého programu (loop)
void application_task(void)
{
}
```

## LEDka ##

Podívejme se na klasickou ukázku rozblikání LED diody, která je na Core Module umístěna.
Nejprve budu demonstrovat méně efektivní způsob, který ale vysvětlí základy práce s GPIO piny.

``` C
#include <application.h>

// Inicializace
void application_init(void)
{
    // Inicializuju pin procesoru, na který je na modulu připojena LEDka
    bc_gpio_init(BC_GPIO_LED);
    // Nastavím tento pin jako výstupní
    bc_gpio_set_mode(BC_GPIO_LED, BC_GPIO_MODE_OUTPUT);
}

// Hlavní smyčka
void application_task()
{
    // Přepne výstup pinu. Pokud byl vypnutý, tak jej zapne a naopak
    bc_gpio_toggle_output(BC_GPIO_LED);

    // Zastav program na 500 milisekund (Takový efektivnější delay)
    bc_scheduler_plan_current_relative(500);
}
```

Předchozí ukázka sice rozbliká LED, ale `bc_scheduler_plan_current_relative` nám zastaví na určitou dobu vykonávání smyčky `application_task`.
Pokud bysme chtěli provádět ještě jiný úkon kromě LED, vykonal by se taky až za 500ms.

Pojďme předchozí příklad upravit tak, aby využíval maximálně možnosti SDK. Využijeme komponentu `bc_led`, která se za nás postará nejen o blikání.
Aby jednotlivé funkce z `bc_led` tušily, kterou LED máme na mysli a na kterém je pinu - musíme si vytvořit instanci struktury. Může to znít složitě, ale podívej se na následující ukázku a hned ti vše bude jasné.

``` C
#include <application.h>

// Vytvoříme si instanci pro bc_led komponentu
bc_led_t led;

void application_init(void)
{
    // Referenci `&led` na naši instanci pak posíláme do všech
    // bc_led funkcí jako první parametr
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_BLINK);
}
```

Výsledný kód se zkrátil do dvou řádků a vytvoření instance `bc_led_t led`.

Poslední dva parametry `false` ve funkci `bc_led_init` nastavují zda je výstup open-drain a jaká logická výstupní úroveň odpovídá zhasnuté LED. Tohle znát zatím nemusíš, stačí zatím napsat `false`. Pokud chceš vědět více, pročti si [všechny API funkce k bc_led modulu](http://sdk.bigclown.com/group__bc__led.html).

Také si všimni, že nevytváříme funkci `application_task()`.
Knihovna LED za nás řeší veškerou inicializaci a časování na pozadí.
Na pozadí si vytvoří také vlastní task, který běží jen v okamžiku změny stavu LED.
Po zbylou dobu je task deaktivní a plánovač procesor uspí.

Blikání můžete zrychlit, zpomalit nebo LED úplně vypnout.
Povolené parametry pro funkci bc_led_set_mode naleznete v tabulce níže.

| Parametr | Popis |
| -----------|-------|
| BC_LED_MODE_OFF | LED zhasne |
| BC_LED_MODE_ON | LED se rozsvítí |
| BC_LED_MODE_BLINK | LED bliká |
| BC_LED_MODE_BLINK_SLOW | LED bliká pomalu |
| BC_LED_MODE_BLINK_FAST | LED bliká rychle |
| BC_LED_MODE_FLASH | LED bliká velmi krátkými záblesky |

Další zajímavé funkce jsou:

| Funkce | Popis |
|  ---   |  ---  |
| bc_led_pulse | Jednou blikne LED na dobu určenou parametrem |
| bc_led_set_pattern | Číselný parametr se použije jako vzor pro rozblikání LEDky. Procházejí se jednotlivé bity parametru a pokud je bit v log. 1, pak se LED rozsvítí. Např. 0xF0F0FFF0 |
| bc_led_set_slot_interval | Určuje, jak rychle se mají jednotlivé bity z předchozí funkce posouvat. |

Na závěr tady mám ještě jednu hádanku. Zkuste přijít na to, co za zprávu v morseovce vyblikává následující příklad. Číslo jsem záměrně zapsal v desítkové soustavě, protože v hexadecimální soustavě lze vzor blikání snadno odhalit.

``` C
#include <application.h>

bc_led_t led;

void application_init(void)
{
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_slot_interval(&led, 200);
    bc_led_set_pattern(&led, 2849884800);
}
```

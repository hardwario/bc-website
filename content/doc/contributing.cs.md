---
title: Přispívání do dokumentace
slug: prispivani-do-dokumentace
---

Do dokumentace je možné svobodně přispívat formou pull-requestů na GitHub, případně je možné pro drobné úpravy využít tlačítka `EDIT THIS PAGE` v záhlaví každého dokumentu. Zdrojový repozitář na GitHub se nazývá [bc-website](git@github.com:bigclownlabs/bc-website.git). Vlastní obsah dokumentace je umístěn v adresáři `content/doc`.

# Základní pravidla

* Dbáme na správnost obsažených informací, pravopisné chyby a typografii psaného dokumentu.

* Každý dokument obsahuje stručný, srozumitelný a přehledně strukturovaný obsah.

* Všechny dokumenty píšeme prostřednictvím **Markdown** formátu.

* Kořen názvu souboru je vždy v angličtině a následuje jazyková přípona.

    Příklad: `tutorial.cs.md` / `tutorial.en.md`

* Řádky zalamujeme **po odstavcích**. Je proto vhodné použít editor, který podporuje automatické zalamování řádků (word wrapping) - například [Atom](https://atom.io/).

* Mezi odstavci je vždy jeden prázdný řádek.

* Používáme editor, který má podporu pro EditorConfig plugin - například [Atom](https://atom.io/). Případně si odsazení v editoru nastavíme na **4 mezery**.

# Front matter

Každý dokument začíná pomocí tzv. "YAML front matter", který se uvozuje a ukončuje `---`. V této sekci front matter lze nastavovat parametry dokumentu.

Příklad:

```
---
title: Přispívání do dokumentace
slug: prispivani-do-dokumentace
---

```

* První povinný parametr se nazývá `title`, za kterým následuje titulek dokumentu.

* Druhý nepovinný parametr se nazývá `slug`, který označuje cestu k dokumentu v URL. Pokud není parametr `slug` uveden, použije se tvar odvozený z názvu souboru.

* Za ukončením front matter následuje prázdný řádek.

# Nadpisy

Maximální doporučená úroveň zanoření nadpisů je 3. Nadpis se uvozuje znakem `#` a jejich počet určuje úroveň nadpisu. Před nadpisem a po nadpisu je vždy **jeden prázdný řádek**.

Příklad:

```

# Nadpis úrovně 1

## Nadpis úrovně 2

### Nadpis úrovně 3

```

Každý nadpis vygeneruje název záložky, na který se lze odkazovat v rámci dokumentu, nebo mezi dokumenty. Ten se odvozuje z nadpisu - například `Nadpis úrovně 1` bude mít název záložky `nadpis-urovne-1`.

# Typografie

* Text je možné **zvýraznit** jeho uzavřením mezi `**`.

    Příklad:

    ```
    **Zvýrazněný text**
    ```

* Text je také možné označit **kurzivou** jeho uzavřením mezi `*`.

    Příklad:

    ```
    *Text kurzivou*
    ```

* V textu je možné **strojově** označit slovo jeho uzavřením mezi `` ` ``.

    Příklad:

    ```
    `Ctrl+C`
    ```

    Toto je vhodné používat pro názvy příkazů, programů, klávesových zkratek, apod. Správné použití výrazně urychluje orientaci mezi klíčovými informacemi.

# Seznamy

Položka v nečíslovaném seznamu se uvozuje pomocí znaku `*`.

Příklad:

```
* Položka 1
* Položka 2
* Položka 3
```

Číslované seznamy je možné uvodit pomocí pořadového čísla a tečky.

Příklad:

```
1. První položka
2. Druhá položka
3. Třetí položka
```

Seznamy lze do sebe také zanořovat. V takovém případě se musí pro odsazení použít 4 mezery.

Příklad:

```
* Položka 1
    1. První položka
    2. Druhá položka
    3. Třetí položka
* Položka 2
* Položka 3
```

Pokud má položka v seznamu charakter odstavce, je nutné před i po položkou nechat prázdný řádek.

Příklad:

```

1. Toto je první odstavec.

2. Toto je druhý odstavec.

3. Toto je třetí odstavec.

```

Pokud má položka v seznamu například přidružený kus kódu, je potřeba jej příslušně odsadit.

Příklad:

```
* Položka

    ```
    uname -a
    ```
```

# Odkazy

## Volba správného textu v odkazu

{{< note "warning" "Text odkazu by měl obsahovat informaci na co odkaz odkazuje. Jednak je to pro lidi přehlednější, když něco hledají a očima prohlížejí jen modré odkazy. Pro vyhledávače je to lepší kvůli indexaci obsahu. Hlavně nepoužívejte odkazy se samotným textem \"zde\" nebo \"download\"." />}}

**Špatně:**

  * Image Bigclown Raspbianu naleznete [zde](https://github.com/bigclownlabs/bc-raspbian/releases). \\
  * Image Bigclown Raspbianu si můžete [stáhnout](https://github.com/bigclownlabs/bc-raspbian/releases).

**Správně:**

  * Na Githubu si můžete [stáhnout BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases).
  * Stáhněte si [image BigClown Raspbian](https://github.com/bigclownlabs/bc-raspbian/releases). \\

## Existuje několik možností odkazů:

1. **Externí bez pojmenování** - pouze se vloží URL včetně protokolu do textu.

    Příklad:

    ```
    https://www.google.com/
    ```

2. **Externí s pojmenováním** - URL se uzavře do formátu `[jméno](odkaz)`.

    Příklad:

    ```
    [Google](https://www.google.com/)
    ```

3. **Interní bez záložky** - použije se speciální funkce, která převede cestu k dokumentu na relativní URL. Cesta k dokumentu je vždy relativní k adresáři `content`.

    Příklad:

    ```
    [Tutoriál]({{</* relref "doc/tutorial.cs.md" */>}})
    ```

    {{< note "info" "Tato funkce zaručuje integritu odkazů v dokumentaci. Pokud by uvedený soubor neexistoval, nepovedlo by se dokumentaci sestavit." />}}

3. **Interní se záložkou** - stejný formát jako předchozí s tím, že se za název souboru uvede `#` a název záložky.

    Příklad:

    ```
    [Tutoriál]({{</* relref "doc/tutorial.cs.md#zalozka" */>}})
    ```

4. **V rámci dokumentu** - použije se formát `[Kapitola](#zalozka)`.

    Příklad:

    ```
    [Další kapitola](#dalsi-kapitola)
    ```




# Obrázky

Nejprve je nutné umístit obrázek do příslušné cesty v adresáři `static`. Pokud je URL k dokumentu `/cs/doc/tutorial/`, potom je nutné např. obrázek `screenshot.png` umístit v repozitáři do cesty `static/cs/doc/tutorial/screenshot.png`.

Samotné vložení v dokumentu se provede standardní Markdown konstrukcí.

Příklad:

```
![alternativní text](cesta)
```

Tedy v našem případě:

```
![Snímek z obrazovky](screenshot.png)
```

{{< note "warning" "Je dobrým zvykem vždy vyplnit alternativní text obrázku." />}}

# Vložení kódu

Jsou 2 varianty, jak lze do textu vložit kód:

1. **Kód bez zvýraznění syntaxe**

    Toto se provede uzavřením kódu uzavřením mezi ```` ``` ````.

    Příklad:

    ~~~
    ```
    for (int i = 0; i < 10; i++)
    {
        // Do something...
    }
    ```
    ~~~

2. **Kód se zvýrazněním syntaxe**

    Toto se provede jako předchozí případ, ale s uvedením jména jazyka bezprostředně za otevíracími ```` ``` ```` (bez mezery).

    Příklad:

    ~~~
    ```c
    for (int i = 0; i < 10; i++)
    {
        // Do something...
    }
    ```
    ~~~

Dále je možné u kódu explicitně povolit zobrazování čísel řádků a tlačítko pro zkopírování do schránky. To se provede uzavřením do `syntax` bloku a konfigurací parametrů `line` a `copy`. Ty nabývají hodnot `true` nebo `false`.

Příklad:

~~~
{{%/* syntax line="true" copy="true" */%}}
```c
#include <application.h>

void application_init(void)
{
    bc_gpio_init(BC_GPIO_LED);
}
```
{{%/* /syntax */%}}
~~~

Výsledek:

{{% syntax line="true" copy="true" %}}
```c
#include <application.h>

void application_init(void)
{
    bc_gpio_init(BC_GPIO_LED);
}
```
{{% /syntax %}}



# Tabulky

V dokumentu lze vytvářet tabulky prostřednictvím znaků `|`, `-` a `:`.

Příklad:

```
| Sloupec 1 | Sloupec 2 | Sloupec 3 |
|-----------|-----------|-----------|
| Buňka A1  | Buňka B1  | Buňka C1  |
| Buňka A2  | Buňka B2  | Buňka C2  |
| Buňka A3  | Buňka B3  | Buňka C3  |
```

Také je možné obsah sloupce 2 zarovnat na střed.

Příklad:

```
| Sloupec 1 | Sloupec 2 | Sloupec 3 |
|-----------|:---------:|-----------|
| Buňka A1  | Buňka B1  | Buňka C1  |
| Buňka A2  | Buňka B2  | Buňka C2  |
| Buňka A3  | Buňka B3  | Buňka C3  |
```

Případně je možné slopec 3 zarovnat vpravo.

Příklad:

```
| Sloupec 1 | Sloupec 2 | Sloupec 3 |
|-----------|-----------|----------:|
| Buňka A1  | Buňka B1  | Buňka C1  |
| Buňka A2  | Buňka B2  | Buňka C2  |
| Buňka A3  | Buňka B3  | Buňka C3  |
```

# Anotace

Pro lepší orientaci v textu je vhodné rozdělovat sémantické bloky, které mají charakter upozornění. V této dokumentaci používáme 4 typy upozornění:

1. **Úspěch** - označení `success`
2. **Doplnění** - označení `info`
3. **Upozornění** - označení `warning`
4. **Nebezpečí** - označení `danger`

Existují 3 typy zápisu anotace:

1. **Krátká anotace**

    Tato se zapisuje pomocí:

    ```
    {{</* note "warning" "This is not recommended." /*/>}}
    ```

    Výsledek:

    {{< note "warning" "I told you - don't drink and drive..." />}}

2. **Bloková anotace bez nadpisu**

    ```
    {{</* note "danger" */>}}
    If you don't obey, things will go apart!
    {{</* /note */>}}
    ```

    Výsledek:

    {{< note "danger" >}}
    If you don't obey, things will go apart!
    {{< /note >}}

3. **Bloková anotace s nadpisem**

    ```
    {{</* note "info" "Did you know that..." */>}}
    ...tomato is a fruit?
    {{</* /note */>}}
    ```

    Výsledek:

    {{< note "info" "Did you know that..." >}}
    ...tomato is a fruit?
    {{< /note >}}

# Závěr

Tento dokument shrnuje základní pravidla pro psaní dokumentace BigClown. Kvalitní dokumentace je základním pilířem pro popularizaci každé platformy.

Jakýkoliv příspěvek ať už ve formě nového návodu, popisu projektu nebo jen opravy překlepu, je srdečně vítán.

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

* Text je možné zvýraznit jeho uzavřením mezi `**`.

    Příklad: `**Zvýrazněný text**`

* Text je také možné označit kurzivou jeho uzavřením mezi `*`.

    Příklad: `*Text kurzivou*`

* V textu je možné strojově označit slovo jeho uzavřením mezi `` ` ``.

    Příklad: `` `Ctrl+C` ``

    Toto je vhodné používat pro názvy příkazů, programů, klávesových zkratek, apod. Správné použití výrazně urychluje orientaci mezi klíčovými informacemi.

# Seznamy

Položka v nečíslovaném seznamu se uvozuje pomocí znaku `*`:

```
* Položka 1
* Položka 2
* Položka 3
```

Číslované seznamy je možné uvodit pomocí pořadového čísla a tečky:

```
1. První položka
2. Druhá položka
3. Třetí položka
```

Seznamy lze do sebe také zanořovat. V takovém případě se musí pro odsazení použít 4 mezery:

```
* Položka 1
    1. První položka
    2. Druhá položka
    3. Třetí položka
* Položka 2
* Položka 3
```

Pokud má položka v seznamu charakter odstavce, je nutné před i po položkou nechat prázdný řádek:

```

1. Toto je první odstavec.

2. Toto je druhý odstavec.

3. Toto je třetí odstavec.

```

Pokud má položka v seznamu například přidružený kus kódu, je potřeba jej příslušně odsadit:

```
* Položka

    ```
    uname -a
    ```
```

# Odkazy

Existuje několik možností odkazů:

1. **Externí bez pojmenování** - pouze se vloží URL včetně protokolu do textu.

    Příklad: `https://www.google.com/`

2. **Externí s pojmenováním** - URL se uzavře do formátu `[jméno](odkaz)`.

    Příklad: `[Google](https://www.google.com/)`

3. **Interní bez záložky** - použije se speciální funkce, která převede cestu k dokumentu na relativní URL. Cesta k dokumentu je vždy relativní k adresáři `content`.

    Příklad: `[Tutoriál]({{</* relref "doc/tutorial.cs.md" */>}})`

    *Poznámka: Tato funkce zaručuje integritu celé dokumentace. Pokud by uvedený soubor neexistoval, nepovedlo by se dokumentaci sestavit.*

3. **Interní se záložkou** - stejný formát jako předchozí s tím, že se za název souboru uvede `#` a název záložky.

    Příklad: `[Tutoriál]({{</* relref "doc/tutorial.cs.md#zalozka" */>}})`

4. **V rámci dokumentu** - použije se formát `[Kapitola](#zalozka)`.

    Příklad: `[Další kapitola](#dalsi-kapitola)`

# Obrázky

Nejprve je nutné umístit obrázek do příslušné cesty v adresáři `static`. Pokud je URL k dokumentu `/cs/doc/tutorial/`, potom je nutné např. obrázek `screenshot.png` umístit v repozitáři do cesty `static/cs/doc/tutorial/screenshot.png`.

Samotné vložení v dokumentu se provede standardní Markdown konstrukcí `![alternativní text](cesta)`, tedy v našem případě: `![Snímek z obrazovky](screenshot.png)`.

Je dobrým zvykem vždy vyplnit alternativní text obrázku.

# Vložení kódu

Jsou 3 varianty, jak lze do textu vložit kód:

Do dokumentu lze vložit kód uzavřením mezi ```` ``` ````:

~~~
```
for (int i = 0; i < 10; i++)
{
    // Do something...
}
```
~~~

Pokud chceme na kus kódu uplatnit vybarvení syntaxe pro konkrétní jazyk, uvedeme jméno jazyka bezprostředně za otevíracími ```` ``` ```` (bez mezery):

~~~
```c
for (int i = 0; i < 10; i++)
{
    // Do something...
}
```
~~~

# Tabulky

V dokumentu lze vytvářet tabulky prostřednictvím znaků `|`, `-` a `:`.

Pokud chceme vytvořit tabulku, kde bude obsah všech sloupců zarovnaných vlevo:

```
| Sloupec 1 | Sloupec 2 | Sloupec 3 |
|-----------|-----------|-----------|
| Buňka A1  | Buňka B1  | Buňka C1  |
| Buňka A2  | Buňka B2  | Buňka C2  |
| Buňka A3  | Buňka B3  | Buňka C3  |
```

Pokud chceme vytvořit tabulku, kde bude obsah sloupce 2 zarovnaný na střed:

```
| Sloupec 1 | Sloupec 2 | Sloupec 3 |
|-----------|:---------:|-----------|
| Buňka A1  | Buňka B1  | Buňka C1  |
| Buňka A2  | Buňka B2  | Buňka C2  |
| Buňka A3  | Buňka B3  | Buňka C3  |
```

Pokud chceme vytvořit tabulku, kde bude obsah sloupce 3 zarovnaný vpravo:

```
| Sloupec 1 | Sloupec 2 | Sloupec 3 |
|-----------|-----------|----------:|
| Buňka A1  | Buňka B1  | Buňka C1  |
| Buňka A2  | Buňka B2  | Buňka C2  |
| Buňka A3  | Buňka B3  | Buňka C3  |
```

# Anotace



# Závěr

Tento dokument shrnuje základní pravidla pro psaní dokumentace BigClown. Kvalitní dokumentace je základním pilířem pro popularizaci každé platformy.

Jakýkoliv příspěvek ať už ve formě nového návodu, popisu projektu nebo jen opravy překlepu, je srdečně vítán.

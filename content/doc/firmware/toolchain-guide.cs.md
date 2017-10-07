---
title: Používání nástrojů pro firmware
slug: pouzivani-nastroju
---

{{% note "danger" %}}Tento dokument předpokládá, že máte nainstalované potřebné nástroje dle dokumentu [Instalace nástrojů pro firmware]({{< relref "doc/firmware/toolchain-setup.cs.md" >}}).{{% /note %}}

{{% note "warning" %}}Všechny níže uvedené postupy předpokládají práci s aplikací **BigClown Toolchain** ve Windows, případně s aplikací **Terminal** v macOS či Ubuntu.{{% /note %}}

## Nástroj BigClown Firmware Tool

Nástroj BigClown Firmware Tool (dále jen **bcf**) zjednodušuje práci s firmware.

Tento nástroj umožňuje:

* Pracovat s firmware balíčky:

    * Aktualizovat databázi balíčků (`bcf update`)

    * Zobrazit výpis z databáze balíčků (`bcf list`)

    * Hledání v databázi balíčků (`bcf search`)

    * Stažení balíčku pro offline použití (`bcf pull`)

* Nahrávat firmware (`bcf flash`)

* Vytvořit prázdný projekt pro psaní firmware (`bcf create`)

Jednotlivé operace si ukážeme v následujících kapitolách.

{{% note "info" %}}Pro BigClown projekty jsou binární obrazy firmwaru připravené v sekci **Releases** daného firmwarového GitHub repozitáře.{{% /note %}}

Nástroj bcf má zabudovaný systém nápovědy. Základní seznam příkazů zobrazíte pomocí `bcf help` a detailní použití konkrétního příkladu například pomocí `bcf flash --help`.

## Výpis dostupných firmware balíčků

Pro aktualizaci seznamu dostupných firmwarových balíčků použijte příkaz:

    bcf update

Pro výpis dostupných firmwarových balíčků použijte příkaz:

    bcf list

Pro hledání mezi dostupnými balíčky z popisu nebo názvu použijte příkaz:

    bcf search <hledaný-výraz>

## Nahrání firmware

{{% note "warning" %}}V případě, že potřebujete náhrat firmware do Core Module, je nutné ho nejdříve [uvést do DFU režimu]({{< relref "#uvedení-core-module-do-dfu-režimu" >}}). Dále je nutné příkaz pro nahrávání uvádět ve tvaru `bcf flash --dfu`.{{% /note %}}

Nahrání firmware je možné příkazem `bcf flash`, a to ze 3 různých zdrojů:

1. Zdroj **firmwarový balíček**, například:

        bcf flash bigclownlabs/bcf-sigfox-co2-monitor:firmware.bin:v1.0.0

2. Zdroj **lokální soubor z disku**, například:

        bcf flash firmware.bin

3. Zdroj binární soubor ze **specifikované URL adresy**, například:

        bcf flash https://github.com/bigclownlabs/bcf-sigfox-co2-monitor/releases/download/v1.0.0/firmware.bin

Pokud si potřebujete stáhnout firmware balíček a pracovat s ním později offline, je možné jej stáhnout pomocí příkazu `bcf pull`, například:

        bcf pull bigclownlabs/bcf-sigfox-co2-monitor:firmware.bin:v1.0.0

## Vytvoření prázdného firmware projektu

1. Přejděte do adresáře, kde chcete vytvořit adresář s firmware.

2. Spustťe následující příkaz programu `bcf`:

        bcf create <jméno-firmware>

3. Program `bcf` naklonoval z GitHub základní skeleton firmware, který je okamžitě připravený k sestavení (viz popis níže).

{{% note "info" %}}Výchozím bodem pro vývoj vlastního firmware je soubor `app/application.c`.{{% /note %}}

## Sestavení firmware

Sestavení firmware probíhá prostřednictvím tradičního systému **GNU Make**, který postupuje dle předpisu daném v souboru `Makefile` (ten naleznete v kořenovém adresáři firmware).

Pro sestavení firmware existují 2 cílové konfigurace:

* `debug`

    Tato konfigurace je implicitní a je vhodná pro vývoj firmware. Sestavený firmware je připravený pro ladění (debugging).

* `release`

    Tato konfigurace je vhodná pro finální nasazení. Má zapnuté optimalizace při sestavování a kvůli optimalizacím není vhodná pro ladění firmware. Výsledný program v této konfiguraci může běžet rychleji a vykazovat nižší spotřebu, než nabízí `debug` konfigurace.

Firmware lze sestavit pomocí následujícího postupu:

1. Přejděte do adresáře s firmware, který chcete sestavit.

2. Spusťte příkaz pro sestavení:

        make

    {{% note "info" %}}Sestavení lze urychlit specifikací počtu paralelních procesů překladače prostřednictvím parametru `-j<počet>`. Číslo by mělo odpovídat počtu jader vašeho procesoru. Příklad: `make -j4`{{% /note %}}

3. Při **úspěšném dokončení** překladu dostanete na konci procesu podobný výpis:

        Linking object files...
        Size of sections:
           text    data     bss     dec     hex filename
          74332    2776    7328   84436   149d4 out/debug/firmware.elf
        Creating out/debug/firmware.bin from out/debug/firmware.elf...

4. Program zvaný **linker** vytvořil 2 důležité soubory:

    * `out/debug/firmware.elf`

        Toto je soubor ve formátu ELF obsahující symboly pro ladění firmware potřebný pro debugger.

    * `out/debug/firmware.bin`

        Toto je binární obraz firmware potřebný pro naprogramování (soubor ELF má v sobě i potřebný binární obraz).

5. Pro sestavení firmware v `release` konfiguraci použijte příkaz:

        make release

    Tento příkaz vygeneruje soubor `out/release/firmware.bin`.

## Uvedení Core Module do DFU režimu

Pro naprogramování Core Module jej musíme nejdříve uvést do DFU režimu.

To provedeme následujícími kroky:

1. Zkontrolujte, že USB kabel je zapojený do Core Module a vašeho počítače.

2. Stiskněte a stále držte tlačítko **BOOT** na Core Module.

    {{% note "info" %}}Tlačítko **BOOT** je vpravo a je označeno písmenem `B`.{{% /note %}}

3. Krátce stiskněte a uvolněte tlačítko **RESET** na Core Module. V tomto okamžiku musíte stále držet druhé tlačítko **BOOT**.

    {{% note "info" %}}Tlačítko **RESET** je vlevo a je označeno písmenem `R`.{{% /note %}}

4. Uvolněte tlačítko **BOOT**.

5. Nyní se Core Module připojí k počítači jako zařízení USB DFU a je připravený k programování.

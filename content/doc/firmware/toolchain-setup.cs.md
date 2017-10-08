---
title: Instalace nástrojů pro firmware
slug: instalace-nastroju
---

V tomto článku si popíšeme instalaci nástrojů pro práci s firmware. Systém nástrojů je připravený tak, aby umožňoval kompilaci firmware na všech podporovaných operačních systémech prostřednictvím příkazové řádky **jednotným způsobem**.

{{% note "info" %}}Díky použití příkazové řádky můžete také svůj firmware projekt automaticky sestavovat na serveru například při commitu na GitHub pomocí Travis CI.{{% /note %}}

Nástroje pro firmware se skládají z několika základních komponent:

* Kompilátor **GCC ARM Embedded**

* Verzovací systém **Git**

* Skriptovací jazyk **Python 3**

* DFU nahrávací utilita **dfu-util**

* Firmware utilita **BigClown Firmware Tool**

Na konci článku si ukážeme, jak lze vyvíjet a kompilovat firmware pomocí populárních editorů **Atom** a **Visual Studio Code**.

Pro instalaci přejděte na postup jedné z podporovaných platforem:

* [**Instalace na Windows**]({{< relref "#instalace-na-windows" >}})

* [**Instalace na macOS**]({{< relref "#instalace-na-macos" >}})

* [**Instalace na Ubuntu**]({{< relref "#instalace-na-ubuntu" >}})

Pro aktualizaci již existující instalace přejděte na postup jedné z podporovaných platforem:

* [**Aktualizace na Windows**]({{< relref "#aktualizace-na-windows" >}})

* [**Aktualizace na macOS**]({{< relref "#aktualizace-na-macos" >}})

* [**Aktualizace na Ubuntu**]({{< relref "#aktualizace-na-ubuntu" >}})

## Instalace na Windows

{{% note "warning" %}}Pro instalaci budete potřebovat práva adminstrátora.{{% /note %}}

1. Stáhněte si aktuální verzi instalátoru **BigClown Toolchain**:

    {{% download "Stažení" "https://github.com/bigclownlabs/bch-windows-toolchain/releases" %}}

2. Spusťte stažený instalátor a zvolte cílové umístění:

    ![](windows-location.png)

3. Zvolte konfiguraci proměnné prostředí **Path** (doporučujeme ponechat výchozí nastavení) a spusťte instalaci:

    ![](windows-paths.png)

4. V průběhu instalace budete vyzváni k nainstalování ovladačů FTDI, nainstalujte je:

    ![](windows-ftdi.png)

5. Po dokončení instalace spusťte **BigClown Toolchain** jedním ze 3 způsobů:

    * Z pracovní plochy

    * Z nabídky **Start**

    * Z kontextového menu nad vybraným adresářem (pravým tlačítkem)

        {{% note "info" %}}Výhodat kontextového menu spočívá v tom, že **BigClown Toolchain** rovnou otevřete v umístění adresáře, se kterým potřebujete pracovat.{{% /note %}}

    ![](windows-toolchain.png)

6. Pokračujte na článek [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md" >}}), případně na integraci s editorem [**Atom**]({{< relref "#integrace-s-editorem-atom" >}}) nebo [**Visual Studio Code**]({{< relref "#integrace-s-editorem-visual-studio-code" >}}).

## Aktualizace na Windows

1. Nejdříve odinstalujte předchozí verzi přes aplikaci **Apps & features**:

    ![](windows-uninstall.png)

2. Stáhněte a nainstalujte novou verzi dle kapitoly [**Instalace na Windows**]({{< relref "#instalace-na-windows" >}}).

## Instalace na macOS

{{% note "warning" %}}Následující postup byl testován na verzi **macOS 10.12**.{{% /note %}}

1. Otevřete aplikaci **Terminal**.

2. Nainstalujte si [**Homebrew**](https://brew.sh) (pokud jej ještě nemáte).

    {{% note "info" %}}Homebrew je balíčkovací systém a ekosystém balíčků pro macOS.{{% /note %}}

3. Nainstalujte balíček kompilátoru **GCC ARM Embedded**:

        brew install caskroom/cask/gcc-arm-embedded

4. Nainstalujte balíček verzovacího systému **Git**:

        brew install git

5. Nainstalujte balíček skriptovacího jazyka **Python 3**:

        brew install python3

6. Nainstalujte balíček DFU nahrávací utility **dfu-util**:

        brew install dfu-util

7. Nainstalujte firmware utilitu **BigClown Firmware Tool**:

        sudo pip3 install bcf

8. Pokračujte na článek [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md" >}}), případně na integraci s editorem [**Atom**]({{< relref "#integrace-s-editorem-atom" >}}) nebo [**Visual Studio Code**]({{< relref "#integrace-s-editorem-visual-studio-code" >}}).

## Aktualizace na macOS

* Upgrade balíčků:

        brew update && brew upgrade

* Upgrade firmware utility:

        sudo pip3 install --upgrade bcf

## Instalace na Ubuntu

{{% note "warning" %}}Následující postup byl testován na verzi **Ubuntu 16.04 LTS**.{{% /note %}}

1. Otevřete aplikaci **Terminal**.

2. Přidejte následující PPA do seznamu repozitářů:

        sudo add-apt-repository ppa:team-gcc-arm-embedded/ppa

3. Zaktualizujte index dostupných balíčků:

        sudo apt update

4. Nainstalujte balíček kompilátoru **GCC ARM Embedded**:

        sudo apt install gcc-arm-embedded

5. Nainstalujte balíček verzovacího systému **Git**:

        sudo apt install git

6. Nainstalujte balíček skriptovacího jazyka **Python 3**:

        sudo apt install python3

7. Nainstalujte balíček DFU nahrávací utility **dfu-util**:

        sudo apt install dfu-util

8. Nainstalujte firmware utilitu **BigClown Firmware Tool**:

        sudo pip3 install bcf

9. Pokračujte na článek [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md" >}}), případně na integraci s editorem [**Atom**]({{< relref "#integrace-s-editorem-atom" >}}) nebo [**Visual Studio Code**]({{< relref "#integrace-s-editorem-visual-studio-code" >}}).

## Aktualizace na Ubuntu

* Upgrade balíčků:

        sudo apt update && sudo apt upgrade

* Upgrade firmware utility:

        sudo pip3 install --upgrade bcf

## Integrace s editorem Atom

**TODO**

## Integrace s editorem Visual Studio Code

**TODO**

## Závěr

{{% note "success" %}}V tomto článku jsme si popsali instalaci nástrojů pro firmware a způsob jejich aktualizace. Dále jsme si ukázali možnost integraci nástrojů s populárními editory jako je **Atom** nebo **Visual Studio Code**.{{% /note %}}

Pokračujte na článek [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md" >}}).

---
title: Firmware Toolchain Setup
slug: toolchain-setup
---

In this document we will describe the installation of tools for working with firmware - the firmware toolchain. The toolchain is designed to allow firmware operations on all the supported operating systems through a command line in a **uniform manner**.

{{% note "info" %}}Orientation on command line interface has the advantage to build your firmware automatically on server, e.g. on commit to GitHub via Travis CI continuous integration service.{{% /note %}}

The firmware toolchain consists of several fundamental components:

* Compiler **GCC ARM Embedded**

* Version control system **Git**

* Scripting language **Python 3**

* DFU upload utility **dfu-util**

* Program **BigClown Firmware Tool**

At the end of the article, we'll show how to develop and compile firmware with popular editors like **Atom** or **Visual Studio Code**.

To install, go to one of the supported platforms:

* [**Setup on Windows**]({{< relref "#setup-on-windows" >}})

* [**Setup on macOS**]({{< relref "#setup-on-macos" >}})

* [**Setup on Ubuntu**]({{< relref "#setup-on-ubuntu" >}})

To upgrade an existing installation, go to one of the supported platforms:

* [**Update on Windows**]({{< relref "#update-on-windows" >}})

* [**Update on macOS**]({{< relref "#update-on-macos" >}})

* [**Update on Ubuntu**]({{< relref "#update-on-ubuntu" >}})

## Setup on Windows

{{% note "warning" %}}You will need administrator rights to install.{{% /note %}}

1. Download the current version of the **BigClown Toolchain** Windows installer:

    {{% download "Download from GitHub" "https://github.com/bigclownlabs/bch-windows-toolchain/releases" %}}

2. Spusťte stažený instalátor a zvolte cílové umístění:

    ![](windows-location.png)

3. Zvolte konfiguraci proměnné prostředí **Path** (doporučujeme ponechat výchozí nastavení) a spusťte instalaci:

    ![](windows-paths.png)

4. V průběhu instalace budete vyzváni k nainstalování ovladačů FTDI, nainstalujte je:

    ![](windows-ftdi.png)

5. Po dokončení instalace spusťte **BigClown Toolchain** jedním ze 3 způsobů:

    * From the **Desktop**

    * From the **Start** menu

    * From the **context menu** on the selected directory (using right click)

        {{% note "info" %}}The advantage of the context menu is to open the **BigClown Toolchain** directly in the directory location you need to work with.{{% /note %}}

    ![](windows-toolchain.png)

6. Pokračujte na článek [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md" >}}), případně na integraci s editorem [**Atom**]({{< relref "#integrace-s-editorem-atom" >}}) nebo [**Visual Studio Code**]({{< relref "#integrace-s-editorem-visual-studio-code" >}}).

## Update on Windows

1. Uninstall the previous version first through **Apps & features**:

    ![](windows-uninstall.png)

2. Download and install the new version according to the chapter [**Setup on Windows**]({{< relref "#setup-on-windows" >}}).

## Setup on macOS

{{% note "warning" %}}The following procedure has been tested on **macOS 10.12**.{{% /note %}}

1. Open the application **Terminal**.

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

## Update on macOS

* Update of packages:

        brew update && brew upgrade

* BigClown Firmware tool update:

        sudo pip3 install --upgrade bcf

## Setup on Ubuntu

{{% note "warning" %}}The following procedure has been tested on **Ubuntu 16.04 LTS**.{{% /note %}}

1. Open the application **Terminal**.

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

## Update on Ubuntu

* Update of packages:

        sudo apt update && sudo apt upgrade

* BigClown Firmware tool update:

        sudo pip3 install --upgrade bcf

## Integration with Atom editor

**TODO**

## Integration with Visual Studio Code editor

**TODO**

## Summary

{{% note "success" %}}V tomto článku jsme si popsali instalaci nástrojů pro firmware a způsob jejich aktualizace. Dále jsme si ukázali možnost integraci nástrojů s populárními editory jako je **Atom** nebo **Visual Studio Code**.{{% /note %}}

Pokračujte na článek [**Používání nástrojů**]({{< relref "doc/firmware/toolchain-guide.cs.md" >}}).

---
title: Toolchain Setup
---

In this document we will describe the installation of tools for working with firmware - the firmware toolchain. The toolchain is designed to allow the firmware operations on all the supported operating systems using a command line in a **uniform manner**.

{{% note "info" %}}Orientation on a command line interface has the advantage to build your firmware automatically on server, e.g. on commit to GitHub via Travis CI continuous integration service.{{% /note %}}

The firmware toolchain consists of several fundamental components:

* Compiler **GCC ARM Embedded**

* Version control system **Git**

* Interpret for scripting language **Python 3**

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

2. Launch the downloaded installer and choose the destination directory:

    ![](windows-location.png)

3. Now you can adjust the desired **Path** environment variable (we recommend to leave the default settings if in doubt) and proceed with the installation:

    ![](windows-paths.png)

4. The FTDI driver setup will launch automatically during the installation - install it:

    ![](windows-ftdi.png)

5. After finishing the installation, lauch the **BigClown Toolchain** using one these 3 ways:

    * From the **Desktop**

    * From the **Start** menu

    * From the **context menu** on the selected directory (using a right click)

        {{% note "info" %}}The advantage of the context menu is to open the **BigClown Toolchain** directly in the directory location you need to work with.{{% /note %}}

    ![](windows-toolchain.png)

6. Continue on the document [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}}). You may also try:

    * [**Integration with Atom**]({{< relref "#integration-with-atom" >}}) or

    * [**Integration with Visual Studio Code**]({{< relref "#integration-with-visual-studio-code" >}})

## Update on Windows

1. Uninstall the previous version first through **Apps & features**:

    ![](windows-uninstall.png)

2. Download and install the new version according to the chapter [**Setup on Windows**]({{< relref "#setup-on-windows" >}}).

## Setup on macOS

{{% note "warning" %}}The following procedure has been tested on **macOS 10.12**.{{% /note %}}

1. Open the application **Terminal**.

2. Install [**Homebrew**](https://brew.sh) (unless you already have it).

    {{% note "info" %}}Homebrew is the package management system and the ecosystem of packages for macOS.{{% /note %}}

3. Install **GCC ARM Embedded**:

        brew install caskroom/cask/gcc-arm-embedded

4. Install **Git**:

        brew install git

5. Install **Python 3**:

        brew install python3

6. Install **dfu-util**:

        brew install dfu-util

7. Install **BigClown Firmware Tool**:

        sudo pip3 install bcf

8. Continue on the document [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}}). You may also try:

    * [**Integration with Atom**]({{< relref "#integration-with-atom" >}}) or

    * [**Integration with Visual Studio Code**]({{< relref "#integration-with-visual-studio-code" >}})

## Update on macOS

* Update of packages:

        brew update && brew upgrade

* BigClown Firmware tool update:

        sudo pip3 install --upgrade bcf

## Setup on Ubuntu

{{% note "warning" %}}The following procedure has been tested on **Ubuntu 16.04 LTS**.{{% /note %}}

1. Open the application **Terminal**.

2. Add the following PPA to the list of available repositories:

        sudo add-apt-repository ppa:team-gcc-arm-embedded/ppa

3. Update the index of the available packages:

        sudo apt update

4. Install **GCC ARM Embedded**:

        sudo apt install gcc-arm-embedded

5. Install **Git**:

        sudo apt install git

6. Install **Python 3**:

        sudo apt install python3

7. Install **dfu-util**:

        sudo apt install dfu-util

8. Install **BigClown Firmware Tool**:

        sudo pip3 install bcf

9. Continue on the document [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}}). You may also try:

    * [**Integration with Atom**]({{< relref "#integration-with-atom" >}}) or

    * [**Integration with Visual Studio Code**]({{< relref "#integration-with-visual-studio-code" >}})

## Update on Ubuntu

* Update of packages:

        sudo apt update && sudo apt upgrade

* BigClown Firmware tool update:

        sudo pip3 install --upgrade bcf

## Integration with Atom

**TODO**

## Integration with Visual Studio Code

**TODO**

## Related Documents

* [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}})

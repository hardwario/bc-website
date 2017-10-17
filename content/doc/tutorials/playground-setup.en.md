---
title: "Playground Setup"
---

In this document we will install a set of components that are fundamental for the BigClown projects and will help you to get started quickly on your workstation or laptop.

These fundamental components are:

* MQTT broker **Mosquitto** (with client tools)

* Web-based tool **Node-RED** for automation flows

* BigClown **USB Gateway** for MQTT/hardware bridging

    {{% note "info" %}}This component works as a bridge between the serial port of the **USB Dongle** or **Core Module** and MQTT broker.{{% /note %}}

Once you install this setup, you will be able to start designing your automation flows quickly and easily.

## Requirements

* Workstation with **Windows**, **macOS** or **Ubuntu**

* BigClown **USB Dongle**

* One of the **BigClown IoT kits**

## Playground Setup or Upgrade

Select the installation procedure on one of the supported operating systems:

* [**Playground Setup on Windows**]({{< relref "#playground-setup-on-windows" >}})

* [**Playground Setup on macOS**]({{< relref "#playground-setup-on-macos" >}})

* [**Playground Setup on Ubuntu**]({{< relref "#playground-setup-on-ubuntu" >}})

If you already have previously installed playground, you can upgrade it at any time:

* [**Playground Upgrade on Windows**]({{< relref "#playground-upgrade-on-windows" >}})

* [**Playground Upgrade on macOS**]({{< relref "#playground-upgrade-on-macos" >}})

* [**Playground Upgrade on Ubuntu**]({{< relref "#playground-upgrade-on-ubuntu" >}})

## Playground Setup on Windows

**TODO**

## Playground Upgrade on Windows

**TODO**

## Playground Setup on macOS

1. Install FTDI driver:

    {{% download "Download from FTDI" "http://www.ftdichip.com/Drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_4_2.dmg" %}}

2. Restart your computer.

3. Open the application **Terminal**.

4. Install [**Homebrew**](https://brew.sh) (unless you already have it).

5. Upgrade **Homebrew** packages:

        brew update && brew upgrade

6. Install **Mosquitto** server and clients:

        brew install mosquitto

7. Install **Node.js** version 6 (required by **Node-RED**).

        brew install node@6
    \

        brew unlink node
    \

        echo 'export PATH="/usr/local/opt/node@6/bin:$PATH"' >> ~/.bash_profile
    \

        source ~/.bash_profile

8. Install **Node-RED**:

        sudo npm install -g --unsafe-perm node-red

9. Install **Python 3** (required by **BigClown USB Gateway**).

        brew install python3

10. Install **BigClown Firmware Tool**:

        sudo pip3 install --upgrade bcf

11. Install **BigClown USB Gateway**:

        sudo pip3 install --upgrade bcg

12. Plug the **USB Dongle** into a USB port.

13. Upload the latest firmware into **USB Dongle**:

        bcf update
    \

        bcf flash bigclownlabs/bcf-usb-dongle:latest

14. Start **BigClown USB Gateway** (in the background):

        bcg --device /dev/cu.*

15. Start **Node-RED**:

        node-red

16. Open your web browser with the URL:

    **https://localhost:1880/**

17. Continue in the document [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.en.md" >}}).

## Playground Upgrade on macOS

1. Upgrade **Homebrew** packages:

        brew update && brew upgrade

2. Upgrade **Node-RED**:

        sudo npm update -g node-red

3. Upgrade **BigClown Firmware Tool**:

        sudo pip3 install --upgrade bcf

4. Upgrade **BigClown USB Gateway**:

        sudo pip3 install --upgrade bcg

## Playground Setup on Ubuntu

1. Open the application **Terminal**.

2. Upgrade all packages:

        sudo apt update && sudo apt upgrade

3. Install **Mosquitto** server and clients:

        sudo apt install mosquitto mosquitto-clients

4. Install **Node.js** version 6 (required by **Node-RED**).

        sudo apt install nodejs

5. Install **Node-RED**:

        sudo npm install -g --unsafe-perm node-red

6. Install **Python 3** (required by **BigClown USB Gateway**).

        sudo apt install python3.5

7. Install **BigClown Firmware Tool**:

        sudo pip3 install --upgrade bcf

8. Install **BigClown USB Gateway**:

        sudo pip3 install --upgrade bcg

9. Plug the **USB Dongle** into a USB port.

10. Upload the latest firmware into **USB Dongle**:

        bcf update
    \

        bcf flash bigclownlabs/bcf-usb-dongle:latest

11. Start **BigClown USB Gateway** (in the background):

        bcg --device /dev/cu.*

12. Start **Node-RED**:

        node-red

13. Open your web browser with the URL:

    **https://localhost:1880/**

14. Continue in the document [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.en.md" >}}).

## Playground Upgrade on Ubuntu

1. Upgrade all packages:

        sudo apt update && sudo apt upgrade

2. Upgrade **Node-RED**:

        sudo npm update -g node-red

3. Upgrade **BigClown Firmware Tool**:

        sudo pip3 install --upgrade bcf

4. Upgrade **BigClown USB Gateway**:

        sudo pip3 install --upgrade bcg

## Related Documents

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.en.md" >}})
* [**Toolchain Setup**]({{< relref "doc/firmware/toolchain-setup.en.md" >}})
* [**Toolchain Guide**]({{< relref "doc/firmware/toolchain-guide.en.md" >}})

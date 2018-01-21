---
title: Raspberry Pi Installation
---

{{% note "warning" %}}If you already have Raspberry Pi with the original Raspbian distribution, go to the section [**Setup on Original Raspbian**]({{< relref "#setup-on-original-raspbian" >}}). Or if you have OSMC, go to section [**Setup on OSMC**]({{< relref "#setup-on-osmc" >}}){{% /note %}}

This document will guide you through installing Raspberry Pi. The tutorial is tested for Raspberry Pi 3 (Model B) but should also work for older Raspberry Pi 2.

{{% note "info" %}}Raspberry Pi is a small, affordable, single-board computer that is able to run Linux operating system. BigClown uses this system to process sensor information, actuator control, decision logic for automation, data storage, or serve as a gateway to connect cloud services.{{% /note %}}

In the following procedure, we will install the **BigClown Raspbian** Linux distribution. Raspbian is the official and most widely distributed Linux distribution for Raspberry Pi. BigClown maintains a modified version of this distribution that facilitates some steps and includes pre-installed packages that are key to BigClown.

## Requirements

* Raspberry Pi 3 (Model B)

* MicroSD card with a minimum capacity of 4 GB

* MicroSD Card Reader (+ optional SD Card Adapter)

* Ethernet cable

* Workstation or laptop

* Router (or LAN switch) with the DHCP server set up

* One of the following operating systems:

    * Windows 7, 8.x, 10 (32-bit or 64-bit)

    * macOS (tested on version 10.12.x)

    * Ubuntu (tested on version 16.04 LTS)

## SD Card Preparation

In the following steps, we will prepare a MicroSD card for Raspberry Pi. Go to one of the supported platforms:

* [**Instructions for Windows**]({{< relref "#instructions-for-windows" >}})

* [**Instructions for macOS**]({{< relref "#instructions-for-macos" >}})

* [**Instructions for Ubuntu**]({{< relref "#instructions-for-ubuntu" >}})

## Instructions for Windows

1. Insert the MicroSD card into the card reader.

2. Download the current version of the **BigClown Raspbian** image:

    {{% download "Download from GitHub" "https://github.com/bigclownlabs/bc-raspbian/releases" %}}

3. Unzip the downloaded image.

    {{% note "info" %}}You can use the [**7-Zip**](http://www.7-zip.org) tool for this step.{{% /note %}}

4. Write the downloaded image `bc-raspbian-VER-armhf-rpi.img` to the MicroSD card (replace `VER` with the actual version of the downloaded image).

    {{% note "info" %}}You can use the [**Win32 Disk Imager**](https://sourceforge.net/projects/win32diskimager/files/latest/download) tool for this step.{{% /note %}}

    {{% note "warning" %}}The **Win32 Disk Imager** must run with the operating system administrator rights.{{% /note %}}

5. Insert the Micro SD card to the Raspberry Pi.

6. Connect the Ethernet cable to the Raspberry Pi.

7. Connect the USB power adapter to the Raspberry Pi.

8. Log in to the Raspberry Pi using SSH. Detailed procedure is provided in the document [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}}).

## Instructions for macOS

1. Insert the MicroSD card into the card reader.

2. Download the current version of the **BigClown Raspbian** image:

    {{% download "Download from GitHub" "https://github.com/bigclownlabs/bc-raspbian/releases" %}}

3. Open the `Terminal` application and go to the folder with the downloaded image, e.g.:

        cd ~/Downloads

4. Unzip the downloaded image (replace `VER` with the actual version of the downloaded image):

        unzip bc-raspbian-VER-armhf-rpi.zip

5. Search for the disk identifier (it looks like `/dev/diskX`):

        diskutil list

6. You must unmount the disk (replace `X` with the correct disk identifier):

        diskutil unmountDisk /dev/diskX

7. Write the downloaded image to the MicroSD card (replace `VER` with the actual version of the downloaded image and `X` with the correct disk identifier):

        sudo dd if=bc-raspbian-VER-armhf-rpi.img of=/dev/rdiskX bs=1m

    {{% note "info" %}}`sudo` means the process will run with the administrator's rights and may ask for the your password (if you have such privileges).{{% /note %}}

    {{% note "warning" %}}This process may take several minutes.{{% /note %}}

    {{% note "warning" %}}If you encounter the error message `Permission denied`, please make sure you MicroSD card is not write-protected (e.g. by a switch on the MicroSD card adapter).{{% /note %}}

8. Eject the MicroSD card from the operating system (replace `X` with the correct disk identifier):

        diskutil eject /dev/diskX

9. Insert the Micro SD card to the Raspberry Pi.

10. Connect the Ethernet cable to the Raspberry Pi.

11. Connect the USB power adapter to the Raspberry Pi.

12. Log in to the Raspberry Pi using SSH. Detailed procedure is provided in the document [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}}).

## Instructions for Ubuntu

1. Insert the MicroSD card into the card reader.

2. Download the current version of the **BigClown Raspbian** image:

    {{% download "Download from GitHub" "https://github.com/bigclownlabs/bc-raspbian/releases" %}}

3. Open the `Terminal` application and go to the folder with the downloaded image, e.g.:

        cd ~/Downloads

4. Unzip the downloaded image (replace `VER` with the actual version of the downloaded image):

        unzip bc-raspbian-VER-armhf-rpi.zip

5. Search for the disk identifier (it looks like `/dev/sdX`):

        lsblk

6. You must unmount the disk (replace `X` with the correct disk identifier):

        sudo umount /dev/sdX?

    {{% note "info" %}}`sudo` means the process will run with the administrator's rights and may ask for the your password (if you have such privileges).{{% /note %}}

7. Write the downloaded image to the MicroSD card (replace `VER` with the actual version of the downloaded image and `X` with the correct disk identifier):

        sudo dd if=bc-raspbian-VER-armhf-rpi.img of=/dev/sdX bs=1M

    {{% note "warning" %}}This process may take several minutes.{{% /note %}}

    {{% note "warning" %}}If you encounter the error message `Permission denied`, please make sure you MicroSD card is not write-protected (e.g. by a switch on the MicroSD card adapter).{{% /note %}}

8. Eject the MicroSD card from the operating system (replace `X` with the correct disk identifier):

        sudo eject /dev/sdX

9. Insert the Micro SD card to the Raspberry Pi.

10. Connect the Ethernet cable to the Raspberry Pi.

11. Connect the USB power adapter to the Raspberry Pi.

12. Log in to the Raspberry Pi using SSH. Detailed procedure is provided in the document [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}}).

## Differences from the Original Raspbian

This is a brief list of differences:

* Hostname is `hub` instead of `raspberrypi`.

* The time zone is set to `Europe/Prague`.

* The following records were added to the repository APT list:

    * https://deb.nodesource.com/node_8.x
    * http://repo.mosquitto.org/debian

* By default, these packages are also installed:

    * mosquitto
	* mosquitto-clients
	* nodejs
	* python3-pip
	* python3-venv
	* dfu-util
	* git
	* htop
	* mc
	* tmux
    * npm pm2
	* npm node-red
    * pip3 bcf
    * pip3 bcg

## Setup on Original Raspbian

{{% note "warning" %}}Apply the following procedure only if you are using Raspberry Pi, on which the original Raspbian distribution is running. This is an alternative way of installing the previous procedure.{{% /note %}}

1. Log in to the Raspberry Pi using SSH. Detailed procedure is provided in the document [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}}).

2. Upgrade all packages:

        sudo apt update && sudo apt upgrade

3. Install **Mosquitto** server and clients:

        sudo apt install mosquitto mosquitto-clients

4. Install **Node.js** version 8 (required by **Node-RED**).

        curl -sL  https://deb.nodesource.com/setup_8.x | sudo -E bash -
    \

        sudo apt-get install -y nodejs

5. Install **Node-RED**:

        sudo npm install -g --unsafe-perm node-red

6. Install **PM2**:

        sudo npm install -g pm2

7. Tell **PM2** to run **Node-RED**:

        pm2 start `which node-red` -- --verbose
    \

        pm2 save

8. Tell **PM2** to run on boot:

        sudo -H PM2_HOME=/home/$(whoami)/.pm2 pm2 startup systemd -u $(whoami)

    \

        sudo -H chmod 644 /etc/systemd/system/pm2-$(whoami).service

9. Install **Python 3** (required by the **BigClown Firmware Tool** and **BigClown Gateway**):

        sudo apt install python3 python3-pip python3-setuptools

10. Update **pip** (Python Package Manager) to the latest version:

        sudo pip3 install --upgrade --no-cache-dir pip

11. Install the **BigClown Firmware Tool**:

        sudo pip3 install --upgrade --no-cache-dir bcf

12. Install the **BigClown Gateway**:

        sudo pip3 install --upgrade --no-cache-dir bcg

13. Add udev rules

        echo 'SUBSYSTEMS=="usb", ACTION=="add", KERNEL=="ttyUSB*", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6015", ATTRS{serial}=="bc-usb-dongle*", SYMLINK+="bcUD%n", TAG+="systemd", ENV{SYSTEMD_ALIAS}="/dev/bcUD%n"'  | sudo tee --append /etc/udev/rules.d/58-bigclown-usb-dongle.rules

    \

        echo 'SUBSYSTEMS=="usb", ACTION=="add", KERNEL=="ttyACM*", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="5740", SYMLINK+="bcCM%n", TAG+="systemd", ENV{SYSTEMD_ALIAS}="/dev/bcCM%n"' | sudo tee --append /etc/udev/rules.d/59-bigclown-core-module.rules

    {{% note "warning" %}}Unplug and plug gateway.{{% /note %}}

14. Create folder for configuration file

        sudo mkdir -p /etc/bigclown

15. Configuration file for Gateway USB Dongle

    Open file

        sudo nano /etc/bigclown/bcg-ud.yml
    \

    Insert this

        device: /dev/bcUD0
        name: "usb-dongle"
        mqtt:
            host: localhost
            port: 1883

16. Run service for Gateway USB Dongle

        pm2 start /usr/bin/python3 --name "bcg-ud" -- /usr/local/bin/bcg -c /etc/bigclown/bcg-ud.yml

    \

        pm2 save

17. Configuration file for Gateway Core module

    Open file

        sudo nano /etc/bigclown/bcg-cm.yml
    \

    Insert this

        device: /dev/bcCM0
        name: "core-module"
        mqtt:
            host: localhost
            port: 1883

16. Run service for Gateway Core module

        pm2 start /usr/bin/python3 --name "bcg-cm" -- /usr/local/bin/bcg -c /etc/bigclown/bcg-cm.yml

    \

        pm2 save
17. Bash autocomplete for bcf


        register-python-argcomplete bcf >> .bashrc

    \

        source .bashrc



## WiFi Setup on Raspberry Pi 3

The Raspberry Pi version 3 has added the ability to connect to a WiFi network.

The connection procedure is as following:

1. Open the file for editing `wpa_supplicant.conf`:

        sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

2. Add to end of the file the following template and edit the appropriate items:

        network={
            ssid="wifi_network_name"
            psk="wifi_network_password"
        }

    For example (with multiple WiFi networks):

        country=CZ
        ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
        update_config=1

        network={
            ssid="nameofmywifi1"
            psk="passwordtomywifi1"
        }

        network={
            ssid="nameofmywifi2"
            psk="passwordtomywifi2"
        }

4. Save the file (`Ctrl+X`) and confirm the file name (`y` + `Enter`).

5. Restart the Raspberry Pi:

        sudo reboot

6. Log in and verify using the `iwlist` command, that the connection is active.

## Setup on OSMC

1. Log in to the Raspberry Pi using SSH.

    * default login `osmc`

    * default password `osmc`

2. Upgrade all packages:

        sudo apt update && sudo apt full-upgrade

3. Install dependency for node-gyp

        sudo apt install build-essential

4. Continue point 3 in section the section [**Setup on Original Raspbian**]({{< relref "#setup-on-original-raspbian" >}})

## Related Documents

* [**Raspberry Pi Login**]({{< relref "doc/tutorials/raspberry-pi-login.md" >}})

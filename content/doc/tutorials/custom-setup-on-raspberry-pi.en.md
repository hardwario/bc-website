---
title: "Custom Setup on Raspberry Pi"
menu:
  doc:
    parent: 'tutorials'
    weight: 60
---

If you need more permanent solution than **BigClown Playground** you can install all the services yourself in your system. This guide will help you to install and configure these services:

* BigClown Gateway `bcg`
* BigClown Firmware Tool `bcf`
* BigClown Host Tool `bch`
* Mosquitto MQTT broker
* Node-RED
* The process manager `pm2`

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

{{% note "warning" %}}Apply the following procedure only if you are using Raspberry Pi, on which the original Raspbian distribution is running. This is an alternative way of installing `bc-raspbian` in []({{< relref "/doc/tutorials/raspberry-pi-installation.en.md">}}).{{% /note %}}

1. Log in to the Raspberry Pi using SSH. Detailed procedure is provided in the document [**Raspberry Pi Login**]({{< relref "/doc/tutorials/raspberry-pi-login.en.md" >}}).

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

    Make sure you copy next command exactly with the back-tick symbol `.

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

        sudo pip3 install --upgrade pip

11. Install the **BigClown Firmware Tools**.

    BigClown Firmware Tool `bcf`, BigClown Gateway `bcg` and BigClown Host Tool `bch`.

        sudo pip3 install --upgrade bcf bcg bch

12. Add udev rules

        echo 'SUBSYSTEMS=="usb", ACTION=="add", KERNEL=="ttyUSB*", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6015", ATTRS{serial}=="bc-usb-dongle*", SYMLINK+="bcUD%n", TAG+="systemd", ENV{SYSTEMD_ALIAS}="/dev/bcUD%n"'  | sudo tee --append /etc/udev/rules.d/58-bigclown-usb-dongle.rules

    {{% note "warning" %}}Unplug and plug gateway.{{% /note %}}


13. Run service for Gateway Radio Dongle

        pm2 start /usr/bin/python3 --name "bcg-ud" -- /usr/local/bin/bcg --device /dev/bcUD0

    \

        pm2 save

14. Bash autocomplete for bcf


        register-python-argcomplete bcf >> ~/.bashrc

    \

        source ~/.bashrc

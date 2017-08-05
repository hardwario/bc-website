# Raspberry Pi - Installation

<!-- toc -->

{% set raspbian_zip = "bc-raspbian-v1.0.1-armhf-rpi.zip" %}
{% set raspbian_img = "bc-raspbian-v1.0.1-armhf-rpi.img" %}
{% set note_sudo = "**Note** “sudo” means the process will start with administrator privileges and may require your account password (if you are eligible for administrator rights)." %}

> **Important** If you already have your Raspberry Pi with Raspbian running on it, you can skip to [Install BigClown Packages on Existing System](#install-bigclown-packages-on-existing-system) to see how to install BigClown packages to your existing system.

This tutorial will guide you through a step-by-step installation procedure of Raspberry Pi.
It has been tested on Raspberry Pi 3 (Model B) but it will probably work on Raspberry Pi 2 as well.

We will install BigClown's version of Raspbian - the official and the most popular Linux distribution for Raspberry Pi.


## Requirements

* Raspberry Pi 3 (Model B)
* Minimum 4 GB MicroSD card
* MicroSD card reader
* Ethernet cable
* Desktop or laptop PC
* Router (or LAN switch) with configured DHCP server
* Operating system with one of these:
  * Windows 7, 8.x, 10 (32-bit or 64-bit version)
  * macOS (tested with 10.12.1)
  * Linux (tested with Ubuntu 16.04 LTS)


## Prepare the MicroSD Card

1. Insert the MicroSD card to the MicroSD card reader.

2. Download the latest release of BigClown's Raspbian image from https://github.com/bigclownlabs/bc-raspbian/releases.


### From Windows Desktop

3. Unzip the downloaded image.

   You can use [7-Zip](http://www.7-zip.org) to do it.

4. Write `{{ raspbian_img }}` to the MicroSD card.

   You can use [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/files/latest/download) to do it.

   > **Note** Win32 Disk Imager must be run under administrator privileges.


### From macOS Desktop

3. Open Terminal and navigate to your folder with downloads, for example:

   ```
   cd ~/Downloads
   ```

4. Unzip the downloaded image:

   ```
   unzip {{ raspbian_zip }}
   ```

5. Insert the MicroSD card to your Mac and find out what is the disk identifier (it will be /dev/diskX):

   ```
   diskutil list
   ```

6. You have to unmount the disk (replace X with the appropriate identifier):

   ```
   diskutil unmountDisk /dev/diskX
   ```

7. Write the image to the MicroSD card (replace X with the appropriate identifier):

   ```
   sudo dd if={{ raspbian_img }} of=/dev/rdiskX bs=1m
   ```

   > {{ note_sudo }}

  This will take some time.
  If you get a “permission denied” message, please make sure your MicroSD card is not write-protected (e.g. by SD card adapter).

8. Eject the card (replace X with the appropriate identifier):

   ```
   diskutil eject /dev/diskX
   ```


### From Linux Desktop

3. Open Terminal and navigate to your folder with downloads, for example:

   ```
   cd ~/Downloads
   ```

4. Unzip the downloaded image:

   ```
   unzip {{ raspbian_zip }}
   ```

5. Insert the MicroSD card to your Linux desktop and find out what is the disk identifier (it will be /dev/sdX):

   ```
   lsblk
   ```

6. You have to unmount all disk partitions (replace X with the appropriate identifier):

   ```
   sudo umount /dev/sdX?
   ```

   > {{ note_sudo }}

7. Write the image to the card (replace X with the appropriate identifier):

   ```
   sudo dd if={{ raspbian_img }} of=/dev/sdX bs=1M status=progress
   ```

   > **Info** This will take some time.

   > **Tip** If you get a “permission denied” message, please make sure your MicroSD card is not write-protected (e.g. by an SD card adapter).

8. Eject the MicroSD card (replace X with the appropriate identifier):

   ```
   eject /dev/sdX
   ```


## Start Raspberry Pi

1. Insert the MicroSD card to Raspberry Pi.

2. Connect the Ethernet cable to Raspberry Pi.

3. Connect the USB power adapter to Raspberry Pi.


## Log-in to Raspberry Pi

Next step is to login to Raspberry Pi via SSH terminal.

You can access the device in two ways:

 1. Using IP address (you have to determine what is the assigned address from the DHCP server).

 2. Using zeroconf mechanism by accessing `hub.local` host (this mechanism should work on any recent desktop).


### On Windows desktop

1. Download [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

2. Open PuTTY and open SSH session:

   * Use hostname: `hub.local` or *IP address of Raspberry Pi*

   * Use login: `pi`

   * Use password: `raspberry`


### On OS X and Linux Desktop

1. Open Terminal and connect to Raspberry Pi:

   1. using IP address:

      ```
      ssh pi@(IP address of Raspberry Pi)
      ```

   2. or using zeroconf name:

      ```
      ssh pi@hub.local
      ```

   3. Enter password: `raspberry`


## Update your installation

At the first time you log in do NOT forget to change the default password.
You can do it with the following command:

```
passwd
```

For security and stability reasons it is wise to keep your system updated.

Run this command to update the system:

```
sudo apt update && sudo apt upgrade
```


## Differences from the Official Raspbian

Why have we created our own deployment of Raspbian distribution?
We wanted to simplify the installation process for users and automate some of our own stuff (we use Travis CI for automation).

This is a brief description of changes:

* Hostname is `hub` instead of `raspberrypi`.

* Timezone is set to Europe/Prague.

* The following repositories have been added to APT sources:

  * https://repo.bigclown.com
  * https://apt.dockerproject.org/repo

* Installed packages:

  * mosquitto
  * mosquitto-clients
  * docker
  * htop
  * git
  * python3.4
  * python3-paho-mqtt
  * python3-venv
  * python3-pip
  * bc-common
  * bc-gateway
  * bc-workroom-led-strip
  * bc-workroom-blynk


## Install BigClown Packages on Existing System

> **Important** Follow this procedure only if you have already running Raspberry Pi with Raspbian distribution on it and you have skipped all the previous steps.

1. Log in to SSH terminal.

2. Install dependencies:

   ```
   sudo apt install apt-transport-https wget
   ```

3. Add BigClown APT repository to sources list:

   ```
   sudo sh -c 'echo "deb https://repo.bigclown.com/debian jessie main" >/etc/apt/sources.list.d/bigclown.list'
   ```

4. Add APT PGP key:

   ```
   wget https://repo.bigclown.com/debian/pubkey.gpg -O - | sudo apt-key add -
   ```

5. Update your existing installation:

   ```
   sudo apt update && sudo apt upgrade
   ```

6. Now you can install the individual packages:

   * Basic package for Smart LED Strip (Workroom) project (hardware interface):

     ```
     sudo apt install bc-workroom-gateway
     ```

   * LED strip plugin for Smart LED Strip (Workroom) project:

     ```
     sudo apt install bc-workroom-led-strip
     ```

   * Blynk plugin for Smart LED Strip (Workroom) project:

     ```
     sudo apt install bc-workroom-blynk
     ```

## Connect Raspberry Pi 3 to WiFi network


Raspberry Pi version 3 enables connecting to WiFi network.

Open configuration file for WiFi settings:

```
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```

Use the following template to configure desired settings:

```
network={
    ssid="WiFi_Network_Name"
    psk="WiFi_Network_Password"
}
```

Save the file (Ctrl+X), confirm changes (y) and with Enter the content will be saved, then restart Raspberry Pi:

```
sudo reboot
```

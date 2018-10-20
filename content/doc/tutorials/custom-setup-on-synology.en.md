---
title: "Custom Setup on Synology"
---

<div style="float:right;width:50%;text-align:center;padding-left:10px">
{{% img-zoom src="synology-bigclown.jpg" %}}
</div>

You can have BigClown Gateway running on Raspberry Pi, but if you have any kind of NAS already running 24/7 in your newtwork, why not take advantage of it? You will save a tiny bit on electricity bill and also get more durable system.

If you need more permanent solution than **BigClown Playground** you can install all the services yourself in your system. This guide will help you to install and configure these services:

* BigClown Gateway `bcg`
* BigClown Firmware Tool `bcf`
* BigClown Host Tool `bch`
* Mosquitto MQTT broker
* Node-RED
* The process manager `pm2`

# About project

Synology NAS is a very versatile device. You can install many services with a single click of your mouse. You can also SSH to the internal Linux OS and change anything you like. If you connect {{< shop "Radio Dongle" >}} it appears as `/dev/ttyUSB0` so it's easy to use Synology NAS as a BigClown gateway. You can install `Python`, BigClown gateway `bcg` and `mosquitto` very easily. You can also use **Docker** to run different services separately from the host OS.

This tutorial is going further and is using the **Virtual Machine Manager** to create completely separate virtual Ubuntu 16.04 server. Please see the [list of supported Synology NAS](https://www.synology.com/en-global/dsm/packages/Virtualization).

All the services will be installed inside the virtual machine. The advantage is that this machine can be easily exported and moved to another host. Synology is using QEMU emulator, but exported machines can be run also in Virtualbox without any issue. Other advantage is that you get more robustness of your data in comparison of Raspberry Pi which is using microSD card. Synology can use BTRFS filesystem which is immune to failure of one or many hard drives.

# Installation

1. Install [**Virtual Machine Manager**](https://www.synology.com/en-global/dsm/packages/Virtualization)

<div style="width:50%;text-align:center;padding:10px">
{{% img-zoom src="vmm-install.png" %}}
</div>

2. Download [**Ubuntu 16.04 server amd64**](http://cdimage.ubuntu.com/releases/16.04/release/). The 64 bit is important because Grafana do not release 32 bit versions anymore.

3. Open **Virtual Machine Manager** and create a new virtual machine. The parameters below are the minimal which were tested

  * **Generic** tab
      * **1 CPU Core**
      * **1 GB of RAM**

  * **Storage** tab
      * **Boot ISO file** - select your downloaded installation ISO
      * **Virtual disk size** - 10 GB

  * **Other** tab
      * **Virtual USB driver** - USB 2.0 or 3.0 (**you can change this only when a virtual machine is turned off**)
      * **USB Device** - select the Radio Dongle which is connected to you Synology NAS now, or later after you install virtual machine.

4. Confirm virtual machine creation, turn on the virtual machine and press **Connect** so noVNC virtual console is opened in your browser, follow the installation steps to install the Ubuntu.

5. If you did not already inserted {{% shop "Radio Dongle" %}}, do it now. Open virtual machine configuration on the **Other** tab and in the **USB device** list select **Future Technology Devices International**.

    {{< note "warning" >}}If you disconnect **Radio Dongle** from the USB then this **USB device** configuration **must be set again!**
    {{< /note >}}

    <div style="width:50%;text-align:center;padding:10px">
    {{% img-zoom src="vmm-usb.png" %}}
    </div>

6. Follow steps [**Custom Setup on Ubuntu]({{< relref "/doc/tutorials/custom-setup-on-ubuntu.en.md">}}) to install all the tools and services.

7. Now you have Node-RED, Grafana and all the tools running on your Synology NAS.

<div style="width:100%;text-align:center;padding:10px;">
{{% img-zoom src="grafana.png" %}}
<br /><br />
{{% img-zoom src="node-red.png" %}}
</div>

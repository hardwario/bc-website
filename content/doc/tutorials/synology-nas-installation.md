---
title: "Synology NAS Installation"
---

<div style="float:right;width:50%;text-align:center;padding-left:10px">
{{% img-zoom src="synology-bigclown.jpg" %}}
</div>

Synology NAS is a very versatile device. You can install many services with a single click of your mouse. You can also SSH to the internal Linux OS and change anything you like. If you connect {{< shop "USB Dongle" >}} it appears as `/dev/ttyUSB0` so it's easy to use Synology NAS as a BigClown gateway. You can install `Python`, BigClown gateway `bcg` and `mosquitto` very easily. You can also use **Docker** to run different services separately from the host OS.

This tutorial is going further and is using the **Virtual Machine Manager** to create completely separate virtual Ubuntu 16.04 server. Please see the [list of supported Synology NAS](https://www.synology.com/en-global/dsm/packages/Virtualization).

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
      * **USB Device** - select the USB Dongle which is connected to you Synology NAS now, or later after you install virtual machine.

4. Confirm virtual machine creation, turn on the virtual machine and press **Connect** so noVNC virtual console is opened in your browser, follow the installation steps to install the Ubuntu.

5. If you did not already inserted {{% shop "USB Dongle" %}}, do it now. Open virtual machine configuration on the **Other** tab and in the **USB device** list select **Future Technology Devices International**.

    {{< note "warning" >}}If you disconnect **USB Dongle** from the USB then this **USB device** configuration **must be set again!**
    {{< /note >}}

    <div style="width:50%;text-align:center;padding:10px">
    {{% img-zoom src="vmm-usb.png" %}}
    </div>

6. Follow steps [Playground Setup on Ubuntu]({{<relref "doc/tutorials/playground-setup.md#playground-setup-on-ubuntu">}}) to install all the tools and services.

7. Now you have Node-RED, Grafana and all the tools running on your Synology NAS.

<div style="width:50%;text-align:center;padding:10px;">
{{% img-zoom src="grafana.png" %}}
</div>

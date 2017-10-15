---
title: Raspberry Pi Login
---

This document describes how to log in to Raspberry Pi using a remote terminal via SSH protocol.

{{% note "info" %}}The SSH stands for "Secure Shell". In a simple way, this can be seen as a secure connection to the Raspberry Pi command line over the network.{{% /note %}}

If you do not already have Raspberry Pi installed, first go to the document [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}}).

You can log in two ways:

1. **Using an IP address**

    In this case, you need to find out what address the DHCP server assigned to your Raspberry Pi.

    {{% note "info" %}}The client's IP address can usually be found through the configuration interface of your router in the section **DHCP Clients**, eventually **LAN Status**, etc.{{% /note %}}

2. **Using the DNS name**

    This can either be:

    * `hub.local` in the case of the **BigClown Raspbian** distribution

    * `raspberry.local` in the case of the original Raspbian distribution

## Instructions for Windows

1. Download the [**PuTTY**](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) program.

2. Run **PuTTY** and create an SSH session:

    * Use the hostname `hub.local` (or `raspberry.local` if you are using the original **Raspbian** distribution), or the Raspberry Pi IP address

    * Enter the login `pi`

    * Enter the password `raspberry`

    * Give the session a name and save it for the future use

## Instructions for macOS and Linux

1. Run the **Terminal** application and connect to the Raspberry Pi either:

    * using the IP address instead `...`:

            ssh pi@...

    * or using the DNS name `hub.local` if you are using the **BigClown Raspbian** distribution:

            ssh pi@hub.local

    * or using the DNS name `raspberry.local` if you are using the original **Raspbian** distribution:

            ssh pi@raspberry.local

2. Enter the password `raspberry`.

## Changing the password

Remember to change the default password when you first login. You can make the change using the following command:

    passwd

## System Update

For reasons of security and stability, it is important to keep the system up to date. The system consists of packages and you can update them with the following command:

    sudo apt update && sudo apt upgrade

## Related Documents

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.en.md" >}})

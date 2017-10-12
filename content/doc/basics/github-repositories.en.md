---
title: GitHub Repositories
---

The BigClown system is open-source and is developed through the GitHub platform, where you can find source data in individual repositories or download the precompiled packages from the section `Releases`.

The GitHub organization name is `bigclownlabs` and you can find its page at **https://github.com/bigclownlabs**.

For better clarity, each repository has its prefix name that determines what it has for the content.

## Basic Repositories

| Repository                                                               | Description                                                  | Releases |
|--------------------------------------------------------------------------|--------------------------------------------------------------|----------|
| [**bc&#8209;enclosures**](https://github.com/bigclownlabs/bc-enclosures) | Enclosures and their 3D models in the STL format             | -        |
| [**bc&#8209;hardware**](https://github.com/bigclownlabs/bc-hardware)     | Hardware design data - schematic/assembly drawings, etc.     | -        |
| [**bc&#8209;raspbian**](https://github.com/bigclownlabs/bc-raspbian)     | Modified Linux distribution Raspbian for Raspberry Pi        | Yes      |
| [**bc&#8209;website**](https://github.com/bigclownlabs/bc-website)       | Source repository for the website, documentation, blog, etc. | -        |

## Hub/Host Repositories

Repositories with the prefix [**bch**](https://github.com/bigclownlabs?q=bch) contain application software for the hub or development system (host).

| Repository                                                                                     | Description                                                            | Releases |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|----------|
| [**bch&#8209;dashboard**](https://github.com/bigclownlabs/bch-dashboard)                       | Web application for easy radio pairing and firmware upgrade            | Yes      |
| [**bch&#8209;firmware&#8209;tool**](https://github.com/bigclownlabs/bch-firmware-tool)         | CLI tool for easy fimware operations - creation, flashing, etc.        | Yes      |
| [**bch&#8209;usb&#8209;gateway**](https://github.com/bigclownlabs/bch-usb-gateway)             | Gateway as a background service connecting USB gateway device and MQTT | Yes      |
| [**bch&#8209;toolchain&#8209;windows**](https://github.com/bigclownlabs/bch-toolchain-windows) | Firmware toolchain for the Windows platform                            | Yes      |

## Project Repositories

Repositories with the prefix [**bcp**](https://github.com/bigclownlabs?q=bcp) contain Git submodules for the given project. These submodules typically point to firmware and/or application repository.

| Repository                                                                                                         | Description                      | Releases |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------|----------|
| [**bcp&#8209;sigfox&#8209;climate&#8209;monitor**](https://github.com/bigclownlabs/bcp-sigfox-climate-monitor)     | Project Sigfox Climate Monitor   | Yes      |
| [**bcp&#8209;sigfox&#8209;co2&#8209;monitor**](https://github.com/bigclownlabs/bcp-sigfox-co2-monitor)             | Project Sigfox CO2 Monitor       | Yes      |
| [**bcp&#8209;sigfox&#8209;energy&#8209;meter**](https://github.com/bigclownlabs/bcp-sigfox-energy-meter)           | Project Sigfox Energy Meter      | Yes      |
| [**bcp&#8209;sigfox&#8209;flood&#8209;detector**](https://github.com/bigclownlabs/bcp-sigfox-flood-detector)       | Project Sigfox Flood Detector    | Yes      |
| [**bcp&#8209;sigfox&#8209;motion&#8209;detector**](https://github.com/bigclownlabs/bcp-sigfox-motion-detector)     | Project Sigfox Motion Detector   | Yes      |
| [**bcp&#8209;sigfox&#8209;push&#8209;button**](https://github.com/bigclownlabs/bcp-sigfox-push-button)             | Project Sigfox Push Button       | Yes      |
| [**bcp&#8209;sigfox&#8209;shock&#8209;detector**](https://github.com/bigclownlabs/bcp-sigfox-shock-detector)       | Project Sigfox Shock Detector    | Yes      |
| [**bcp&#8209;wireless&#8209;climate&#8209;monitor**](https://github.com/bigclownlabs/bcp-wireless-climate-monitor) | Project Wireless Climate Monitor | Yes      |
| [**bcp&#8209;wireless&#8209;co2&#8209;monitor**](https://github.com/bigclownlabs/bcp-wireless-co2-monitor)         | Project Wireless CO2 Monitor     | Yes      |
| [**bcp&#8209;wireless&#8209;energy&#8209;meter**](https://github.com/bigclownlabs/bcp-wireless-energy-meter)       | Project Wireless Energy Meter    | Yes      |
| [**bcp&#8209;wireless&#8209;flood&#8209;detector**](https://github.com/bigclownlabs/bcp-wireless-flood-detector)   | Project Wireless Flood Detector  | Yes      |
| [**bcp&#8209;wireless&#8209;lcd&#8209;thermostat**](https://github.com/bigclownlabs/bcp-wireless-lcd-thermostat)   | Project Wireless LCD Thermostat  | Yes      |
| [**bcp&#8209;wireless&#8209;motion&#8209;detector**](https://github.com/bigclownlabs/bcp-wireless-motion-detector) | Project Wireless Motion Detector | Yes      |
| [**bcp&#8209;wireless&#8209;push&#8209;button**](https://github.com/bigclownlabs/bcp-wireless-push-button)         | Project Wireless Push Button     | Yes      |
| [**bcp&#8209;wireless&#8209;shock&#8209;detector**](https://github.com/bigclownlabs/bcp-wireless-shock-detector)   | Project Wireless Shock Detector  | Yes      |

## Firmware Repositories

Repositories with the prefix [**bcf**](https://github.com/bigclownlabs?q=bcf) contain firmware projects for the Core Module, Cloony or USB Dongle.

| Repository                                                                                                 | Description                                                              | Releases |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|----------|
| [**bcf&#8209;generic&#8209;node**](https://github.com/bigclownlabs/bcf-generic-node)                       | Universal firmware for the wireless nodes                                | Yes      |
| [**bcf&#8209;sdk&#8209;core&#8209;module**](https://github.com/bigclownlabs/bcf-sdk-core-module)           | SDK for the firmware development - part of the projects as Git submodule | -        |
| [**bcf&#8209;skeleton&#8209;core&#8209;module**](https://github.com/bigclownlabs/bcf-skeleton-core-module) | Empty firmware skeleton for your new project                             | -        |
| [**bcf&#8209;usb&#8209;dongle**](https://github.com/bigclownlabs/bcf-usb-dongle)                           | Firmware with gateway functionality for the USB Dongle                   | Yes      |
| [**bcf&#8209;usb&#8209;gateway**](https://github.com/bigclownlabs/bcf-usb-gateway)                         | Firmware with gateway functionality for the Core Module                  | Yes      |

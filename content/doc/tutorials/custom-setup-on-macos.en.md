---
title: "Custom Setup on macOS"
menu:
  main:
    parent: 'tutorials'
    weight: 50
  doc:
    parent: 'tutorials'
    weight: 50
---

If you need more permanent solution than **BigClown Playground** you can install all the services yourself in your system. This guide will help you to install and configure these services:

* BigClown Gateway `bcg`
* BigClown Firmware Tool `bcf`
* BigClown Host Tool `bch`
* Mosquitto MQTT broker
* Node-RED
* The process manager `pm2`

## Setup on macOS

1. Install the driver for the **BigClown Radio Dongle**:

    {{% download "Download drivers from FTDI" "http://www.ftdichip.com/Drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_4_2.dmg" %}}

    {{% note "info" %}}This is a driver for the FT231X USB UART bridge.{{% /note %}}

2. Restart your computer.

3. Open the **Terminal** application.

4. Install [**Homebrew**](https://brew.sh) (unless you already have it).

5. Upgrade the **Homebrew** packages:

        brew update && brew upgrade

6. Install **Mosquitto** server and clients:

        brew install mosquitto
    \

        brew services start mosquitto

7. Install **Node.js** (required by **Node-RED**).

        brew install node

8. Install **Node-RED**:

        sudo npm install -g --unsafe-perm node-red

8. Install **node-red-dashboard** for graphs, gauges, buttons

        cd ~/.node-red/
        npm i node-red-dashboard

9. Install **PM2**:

        sudo npm install -g pm2

    {{% note "info" %}}**PM2** is a process manager that will help you to start **Node-RED** and other processes on boot.{{% /note %}}

10. Tell **PM2** to run **Node-RED**:

        pm2 start `which node-red`

11. Tell **PM2** to run on boot:

        pm2 save
    \

        pm2 startup

    {{% note "danger" %}}Now you must follow the instructions provided by the command `pm2 startup systemd`.{{% /note %}}

12. Install **Python 3** (required by the **BigClown Firmware Tool** and **BigClown Gateway**).

        brew install python3

13. Update **pip** (Python Package Manager) to the latest version:

        sudo pip3 install --upgrade --no-cache-dir pip

14. Install the **BigClown Firmware Tool**:

        sudo pip3 install --upgrade --no-cache-dir bcf

15. Install the **BigClown Gateway**:

        sudo pip3 install --upgrade --no-cache-dir bcg

16. Plug the **BigClown Radio Dongle** into a USB port.

17. List the available devices:

        bcf devices

    {{% note "info" %}}You can use `-v` parameter to see verbose information about the connected devices (possibly helping you to identify them).{{% /note %}}

18. Upload the latest firmware into the **BigClown Radio Dongle**:

        bcf update
    \

        bcf flash --device ... bigclownlabs/bcf-gateway-usb-dongle:latest

    {{% note "warning" %}}You have to replace `...` with the device (you can look it up using `bcf devices`.{{% /note %}}

19. Start the **BigClown Gateway** as **PM2** service:

        pm2 start `which python3` --name "bcg-ud" -- `which bcg` --device ...

    {{% note "info" %}}Replace `...` with the device listed using `bcf devices`.{{% /note %}}

    {{% note "warning" %}}If you want to update firmware in the **Radio Dongle**, first you have to stop **bcg** by the command `pm2 stop bcg-ud`. After update, restart the service by the command `pm2 restart bcg-ud`.{{% /note %}}

20. Open your web browser with the URL:

    **http://localhost:1880/**


## Upgrade on macOS

1. Upgrade the **Homebrew** packages:

        brew update && brew upgrade

2. Upgrade **Node-RED**:

        sudo npm update -g node-red

3. Upgrade **PM2**:

        sudo npm update -g pm2

4. Upgrade the **BigClown Firmware Tool**:

        sudo pip3 install --upgrade --no-cache-dir bcf

5. Upgrade the **BigClown Gateway**:

        sudo pip3 install --upgrade --no-cache-dir bcg

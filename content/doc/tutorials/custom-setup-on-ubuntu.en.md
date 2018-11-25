---
title: "Custom Setup on Ubuntu"
menu:
  doc:
    parent: 'tutorials'
    weight: 40
---

If you need more permanent solution than **BigClown Playground** you can install all the services yourself in your system. This guide will help you to install and configure these services:

* BigClown Gateway `bcg`
* BigClown Firmware Tool `bcf`
* BigClown Host Tool `bch`
* Mosquitto MQTT broker
* Node-RED
* The process manager `pm2`

## Playground Setup on Ubuntu

1. Open the **Terminal** application.

2. Upgrade all packages:

        sudo apt update && sudo apt upgrade

3. Install **Mosquitto** server and clients:

        sudo apt install mosquitto mosquitto-clients

4. Install **Node.js** version 6 (required by **Node-RED**).

        sudo apt install nodejs nodejs-legacy npm

5. Install **Node-RED**:

        sudo npm install -g --unsafe-perm node-red

5. Install **node-red-dashboard** for graphs, gauges, buttons

        cd ~/.node-red/
        npm i node-red-dashboard

6. Install **PM2**:

        sudo npm install -g pm2

    {{% note "info" %}}**PM2** is a process manager that will help you to start **Node-RED** and other processes on boot.{{% /note %}}

7. Tell **PM2** to run **Node-RED**:

        pm2 start `which node-red`

8. Tell **PM2** to run on boot:

        pm2 save
    \

        pm2 startup systemd

    {{% note "danger" %}}Now you must follow the instructions provided by the command `pm2 startup systemd`.{{% /note %}}

9. Install **Python 3** (required by the **BigClown Firmware Tool** and **BigClown Gateway**):

        sudo apt install python3.5 python3-pip

10. Update **pip** (Python Package Manager) to the latest version:

        sudo pip3 install --upgrade --no-cache-dir pip

11. Install the **BigClown Firmware Tool**:

        sudo pip3 install --upgrade --no-cache-dir bcf

12. Install the **BigClown Gateway**:

        sudo pip3 install --upgrade --no-cache-dir bcg

13. Add yourself to the **dialout** user group:

    {{% note "info" %}}This is needed in order to get privileges to access the serial ports.{{% /note %}}

        sudo usermod $USER -a -G dialout

14. Plug the **BigClown Radio Dongle** into a USB port.

15. List the available devices:

        bcf devices

    {{% note "info" %}}You can use `-v` parameter to see verbose information about the connected devices (possibly helping you to identify them).{{% /note %}}

16. Upload the latest firmware into the **BigClown Radio Dongle**:

        bcf update
    \

        bcf flash --device ... bigclownlabs/bcf-gateway-usb-dongle:latest

    {{% note "warning" %}}You have to replace `...` with the device (you can look it up using `bcf devices`.{{% /note %}}

17. Start the **BigClown Gateway** as **PM2** service:

        pm2 start `which python3` --name "bcg-ud" -- `which bcg` --device ...

    {{% note "info" %}}Replace `...` with the device listed using `bcf devices`.{{% /note %}}

    {{% note "warning" %}}If you want to update firmware in the **Radio Dongle**, first you have to stop **bcg** by the command `pm2 stop bcg-ud`. After update, restart the service by the command `pm2 restart bcg-ud`.{{% /note %}}

18. Open your web browser with the URL:

    **http://localhost:1880/**


## Playground Upgrade on Ubuntu

1. Upgrade all the packages:

        sudo apt update && sudo apt upgrade

2. Upgrade **Node-RED**:

        sudo npm update -g node-red

3. Upgrade **PM2**:

        sudo npm update -g pm2

4. Upgrade the **BigClown Firmware Tool**:

        sudo pip3 install --upgrade --no-cache-dir bcf

5. Upgrade the **BigClown Gateway**:

        sudo pip3 install --upgrade --no-cache-dir bcg

---
title: "Playground Setup"
---

In this document we will install a set of components that are fundamental for the BigClown projects and will help you to get started quickly on your workstation or laptop.

These fundamental components are:

* The MQTT broker **Mosquitto** (with client tools)

* The web-based tool **Node-RED** for automation flows

* The process manager **PM2** to start the components automatically on boot

* The Python application **BigClown Gateway** for MQTT/gateway bridging

    {{% note "info" %}}This component works as a bridge between the serial port of **BigClown USB Dongle** or **BigClown Core Module** and an MQTT broker.{{% /note %}}

Once you install this setup, you will be able to start designing your automation flows quickly and easily.

## Requirements

* Workstation with **Windows**, **macOS** or **Ubuntu**

* **BigClown USB Dongle**

* One of the **BigClown IoT kits**

## Platform Guides

Select the setup procedure on one of the supported operating systems:

* [**Playground Setup on Windows**]({{< relref "#playground-setup-on-windows" >}})

* [**Playground Setup on macOS**]({{< relref "#playground-setup-on-macos" >}})

* [**Playground Setup on Ubuntu**]({{< relref "#playground-setup-on-ubuntu" >}})

If you already have previously installed playground, you can upgrade it at any time:

* [**Playground Upgrade on Windows**]({{< relref "#playground-upgrade-on-windows" >}})

* [**Playground Upgrade on macOS**]({{< relref "#playground-upgrade-on-macos" >}})

* [**Playground Upgrade on Ubuntu**]({{< relref "#playground-upgrade-on-ubuntu" >}})

## Playground Setup on Windows

1. Download and Install [**bch-playground-windows**](https://github.com/bigclownlabs/bch-playground-windows) installer.

    {{% download "Download Windows Playground from GitHub" "https://github.com/bigclownlabs/bch-playground-windows/releases/latest" %}}

    After installation browser is navigated to Node-RED.        

    {{% note "warning" %}}During installation **Python3** and **Node.js** are uninstalled (in case there was previous installation) and installed again. **Python3** and **Node.js** installers do not handle reinstallation correctly under some circumstances unfortunately.{{% /note %}}

    {{< note "info" "Windows firewall is configured during installation to allow TCP connections from all networks for Node.js and Mosquitto." />}}

2. Execute **BigClown Playground** from the Start menu.

3. Check services with `pm2 list`, you should get something like:

    ```
    C:\Users\michal>pm2 list
    ┌───────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬───────────┬────────┬──────────┐
    │ App name  │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user   │ watching │
    ├───────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼───────────┼────────┼──────────┤
    │ mosquitto │ 0  │ fork │ 9872  │ online │ 0       │ 10m    │ 0%  │ 5.4 MB    │ michal │ disabled │
    │ node-red  │ 1  │ fork │ 11420 │ online │ 0       │ 9m     │ 0%  │ 46.0 MB   │ michal │ disabled │
    └───────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴───────────┴────────┴──────────┘
    ```

4. Restart PC.

5. Execute **BigClown Playground** from the Start menu.

6. Plug the **BigClown USB Dongle** into a USB port.

7. List the available devices:

        bcf devices

    {{% note "info" %}}You can use `-v` parameter to see verbose information about the connected devices (possibly helping you to identify them).{{% /note %}}

8. Upload the latest firmware into the **BigClown USB Dongle**:

        bcf flash --device ... bigclownlabs/bcf-gateway-usb-dongle:latest

    {{% note "warning" %}}You have to replace `...` with the device (you can look it up using `bcf devices`.{{% /note %}}

    {{% note "info" %}}`bcf update` is executed during installation.{{% /note %}}

10. Restart Mosquitto and Node-RED:

        pm2 resurrect

11. Start the **BigClown Gateway** (in the background):

        pm2 start "%BigClownGateway%" --name bcg -- --device ...

    {{% note "note" %}}Replace `...` with the device listed using `bcf devices`, e.g. `COM5`{{% /note %}}

    Example:

        pm2 start "%BigClownGateway%" --name bcg -- --device com5

    {{% note "info" %}}You can see the log outputs from the **bcg** application using the `pm2 logs bcg` command. Quit the log watching using the `Ctrl-C` keyboard shortcut.{{% /note %}}

12. Tell **PM2** to save state:

        pm2 save

    {{% note "info" %}}You can restart all services after reboot or login (user session start) by the command `pm2 resurrect`.{{% /note %}}

13. Open your web browser with the URL:

    ** http://localhost:1880/ **

14. Continue in the document [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}}) or with projects:

    * [**Wireless Push Button**]({{< relref "doc/projects/wireless-push-button.md" >}})
    * [**Wireless Motion Detector**]({{< relref "doc/projects/wireless-motion-detector.md" >}})
    * [**Wireless Flood Detector**]({{< relref "doc/projects/wireless-flood-detector.md" >}})

## Playground Upgrade on Windows

1. Download and install **BigClown Playground for Windows**:

    {{% download "Download installer from GitHub" "https://github.com/bigclownlabs/bch-playground-windows/releases/latest" %}}

    {{% note "info" %}}Windows firewall is reset during upgrade for Node.js and Mosquitto to allow TCP connections from all networks.{{% /note %}}

## Playground Setup on macOS

1. Install the driver for the **BigClown USB Dongle**:

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

16. Plug the **BigClown USB Dongle** into a USB port.

17. List the available devices:

        bcf devices

    {{% note "info" %}}You can use `-v` parameter to see verbose information about the connected devices (possibly helping you to identify them).{{% /note %}}

18. Upload the latest firmware into the **BigClown USB Dongle**:

        bcf update
    \

        bcf flash --device ... bigclownlabs/bcf-gateway-usb-dongle:latest

    {{% note "warning" %}}You have to replace `...` with the device (you can look it up using `bcf devices`.{{% /note %}}

19. Start the **BigClown Gateway** (in the background):

        bcg --device ...

    {{% note "note" %}}Replace `...` with the device listed using `bcf devices`.{{% /note %}}

20. Open your web browser with the URL:

    **http://localhost:1880/**

21. Continue in the document [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}}).

## Playground Upgrade on macOS

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

14. Plug the **BigClown USB Dongle** into a USB port.

15. List the available devices:

        bcf devices

    {{% note "info" %}}You can use `-v` parameter to see verbose information about the connected devices (possibly helping you to identify them).{{% /note %}}

16. Upload the latest firmware into the **BigClown USB Dongle**:

        bcf update
    \

        bcf flash --device ... bigclownlabs/bcf-gateway-usb-dongle:latest

    {{% note "warning" %}}You have to replace `...` with the device (you can look it up using `bcf devices`.{{% /note %}}

17. Start the **BigClown Gateway** (in the background):

        bcg --device ...

    {{% note "note" %}}Replace `...` with the device listed using `bcf devices`.{{% /note %}}

18. Open your web browser with the URL:

    **http://localhost:1880/**

19. Continue in the document [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}}).

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

## Related Documents

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}})

* [**Toolchain Setup**]({{< relref "doc/tutorials/toolchain-setup.md" >}})

* [**Toolchain Guide**]({{< relref "doc/tutorials/toolchain-guide.md" >}})

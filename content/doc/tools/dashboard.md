---
title: "Dashboard"
slug: "dashboard"
---

In this document I will show you how to install **bch-dashboard**. If you are not familiar with *CLI* to log your MQTT broker then you can use this tool to graphicallly access MQTT log and you can control your nodes as well. This tool is also usefule for debugging your MQTT flow.

Feel free to report all issues on [GitHub](https://github.com/bigclownlabs/bch-dashboard/issues).

{{< note "warning" "Note that Dashboard is still in BETA, some features may not will work as described." />}}

## Requirements

- Workstation with Windows, macOS, Ubuntu
- BigClown USB Dongle
- One of the BigClown IoT kits
- Raspberry Pi 3 or above


## Dashboard setup

1. Connect via SSH to your Raspberry Pi.

2. Make sure that **git** and **Node.js** are installed by typing:

```
    git --version && node --version
```

3. Clone dashboard repo from BigClown GitHub account.

```
    git clone https://github.com/bigclownlabs/bch-dashboard.git
```

4. Navigate to the directory.

```
    cd ./bch-dashboard
```

5. Install all dependencies.

```
    npm install
```

6. Run the local webserver by typing:

```
    npm run rpi
```

7. You can acces your Dashboard by your internet explorer (Google Chrome is recommended) in your LAN: `hub.local:3000` or `<ip-of-raspberry>:3000`.

## How to use Dashboard

**TODO**

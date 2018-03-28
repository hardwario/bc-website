---
title: "BigClown GUI firmware flashing tool"
---

In this document I will show you how to install **bch-firmware-app**. If you are not familiar with *CLI* to flash or maintain your binaries to the MCU, you can use this GUI cross-platform application to do that!

Feel free to report all issues on [GitHub](https://github.com/bigclownlabs/bch-firmware-app/issues). You can contribude to the project as well!

{{< note "warning" "Note that GUI firmware flashing tool is still in BETA, some features may not will work as described." />}}

## Requirements

- Workstation with Windows, macOS, Ubuntu
- BigClown USB Dongle or Core Module
- Python 2.x, git, Node.js, bcf installed (this will not be neccesary in the future)


## GUI flashing app setup

[**Quick tutorial**](https://github.com/bigclownlabs/bch-firmware-app/blob/master/README.md) how to setup GUI flashing app.

## How to use GUI flashing app

When your launch the app it will not be synchronized. Sou you need to hit the refresh button to cache content from **BigClown Labs** GitHub repo. It will fetch all repositories starting with *bcf*.

{{% img-zoom src="firmware-app-1.png" %}}

Once you fetch the repo, you will have an opportunity to download the binary from **GitHub**. Online connectivity is only required when you want to fetch repos again or you want to download binary to you PC.

{{% img-zoom src="firmware-app-2.png" %}}

When you are ready to flash binary to your MCU, simply just click on bolt in left navigation. It will redirect you to the flashing page. Then just just select binary, select port and click big flashing button. Then the progress bar will appear.

{{% img-zoom src="firmware-app-3.png" %}}

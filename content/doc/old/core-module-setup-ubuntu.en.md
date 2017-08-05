# Core Module Development Setup - Ubuntu Desktop


<!-- toc -->


## Requirements


* Clean install of 32-bit or 64-bit Ubuntu 16.04 LTS.


## Install Toolchain


This section will guide you through GCC ARM Embedded toolchain installation on your Ubuntu desktop.


1. Open Terminal and add PPA repository:

   ```
   sudo add-apt-repository ppa:team-gcc-arm-embedded/ppa
   ```

   > **Note** This PPA enables seamless installation of [GNU ARM Embedded Toolchain](https://launchpad.net/gcc-arm-embedded).

2. Update the package lists:

   ```
   sudo apt update
   ```

3. Download and install ARM GCC compiler package:

   ```
   sudo apt install gcc-arm-embedded
   ```

4. Verify that the ARM GCC compiler has installed correctly:

   ```
   arm-none-eabi-gcc --version
   ```

   You should get this output in Terminal:

   ```
   arm-none-eabi-gcc (GNU Tools for ARM Embedded Processors) 6.2.1 20161205 (release) [ARM/embedded-6-branch revision 243739]
   Copyright (C) 2016 Free Software Foundation, Inc.
   This is free software; see the source for copying conditions.  There is NO
   warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
   ```


## Build Firmware


This section will guide you through the BigClown Core Module firmware build process.


1. Get necessary packages (`git` + `make`):

   ```
   sudo apt install git build-essential
   ```

2. Clone BigClown Core Module top-level repository:

   ```
   git clone --recursive https://github.com/bigclownlabs/bc-core-module.git
   ```

3. Switch to the cloned repository:

   ```
   cd bc-core-module
   ```

4. Start the build process:

   ```
   make
   ```

5. Check if the file `firmware.elf` has been created:

   ```
   ls -l out
   ```


## Install Mosquitto


Mosquitto is a MQTT broker which is the central hub of BigClown communication. Please follow [Mosquitto installation steps in this tutorial](mosquitto.md).


## Install Gateway


Gateway is a simple Python script which is connecting serial port and MQTT together. Clone `bch-gateway` repository

``https://github.com/bigclownlabs/bch-gateway``

And run the script `bc-gateway.py` in the gateway folder.

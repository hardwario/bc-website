# Core Module Development Setup - macOS Desktop


<!-- toc -->


## Requirements


* Clean install of macOS (tested with version 10.12 Sierra).


## Install Toolchain


This section will guide you through GCC ARM Embedded toolchain installation on your macOS desktop.


1. Open Terminal.

2. Install Homebrew unless you have it.

   See this website for more information: http://brew.sh

3. Download and install ARM GCC compiler package:

   ```
   brew install Caskroom/cask/gcc-arm-embedded
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
   brew install git
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

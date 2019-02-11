---
title: "Blank Start"
menu:
  doc:
    parent: 'firmware'
    weight: 13
---

This document will guide you through a blank firmware creation, explains the structure of the created project and the typical development cycle.

{{% note "danger" %}}This document assumes that you have necessary tools installed according to the document [**Toolchain Setup**]({{< relref "/doc/firmware/toolchain-setup.en.md" >}}).{{% /note %}}

## Hello World

You can simply use the **BigClown Firmware Tool** (**bcf**) to create an empty firmware skeleton.

Open the **Terminal** application or **BigClown Prompt** and run this command:

```sh
bcf create hello-world
```

The command above should give similar output:

```
Download [--------------------]   0.0%
Initialized empty Git repository in /home/bigclown/hello-world/.git/
Cloning into '/home/bigclown/hello-world/sdk'...
remote: Counting objects: 423, done.
remote: Compressing objects: 100% (362/362), done.
remote: Total 423 (delta 66), reused 263 (delta 49), pack-reused 0
Receiving objects: 100% (423/423), 7.06 MiB | 772.00 KiB/s, done.
Resolving deltas: 100% (66/66), done.
```

{{% note "success" %}}Now you have your empty firmware project ready to be built.{{% /note %}}

## Project Structure

This is the file structure of your `hello-world` project. It is a Git-initialized repository with an `sdk` Git submodule.

```
.
├── .git
│   └── ...skipped
├── LICENSE
├── Makefile
├── README.md
├── sdk
│   └── ...skipped
└── app
    ├── application.c
    └── application.h
```

This project can be imediately compiled and flashed to the **Core Module**, **Radio Dongle** or **Cloony**. The place where you should edit your code is in the `app` directory. Usually you will not need to modify other files than those in there.

Therefore your first step most likely will be to open the `app/application.c` file in your favourite editor - for instance **Atom**, **Visual Studio Code**, **Sublime Text**, etc.

## Development Cycle

Normally, the development cycle is the repetition of the following 3 steps:

* Edit the file `app/application.c`.

* Run `make` to produce the firmware image `firmware.bin`.

* Run `bcf flash` to upload the firmware image into the **Core Module** or **Radio Dongle**.

{{% core-module-2 %}}

{{% note "info" %}}If you need to debug your application, please follow the document [**Debugging**]({{< relref "/doc/firmware/debugging.en.md" >}}).{{% /note %}}

## How It Works

For those who are interested of what is going on behind the scenes...

The **BigClown Firmware Tool** caches the `bc-skeleton` repository as a downloaded ZIP file (`master.zip`). Once the project is created (`bcf create`), the empty Git repository is initialized and `sdk` Git submodule is added.

## Manual Approach

You can also clone the skeleton repository manually:

```sh
git clone --recursive git@github.com:bigclownlabs/bcf-skeleton.git hello-world
```

The command above should give similar output:

```
Cloning into 'bcf-skeleton'...
remote: Counting objects: 152, done.
remote: Total 152 (delta 0), reused 0 (delta 0), pack-reused 152
Receiving objects: 100% (152/152), 31.95 KiB | 0 bytes/s, done.
Resolving deltas: 100% (63/63), done.
Submodule 'sdk' (https://github.com/bigclownlabs/bc-sdk.git) registered for path 'sdk'
Cloning into '/home/bigclown/bc/bcf-skeleton/sdk'...
remote: Counting objects: 5375, done.
remote: Compressing objects: 100% (192/192), done.
remote: Total 5375 (delta 151), reused 222 (delta 87), pack-reused 5069
Receiving objects: 100% (5375/5375), 14.30 MiB | 1.36 MiB/s, done.
Resolving deltas: 100% (2782/2782), done.
Submodule path 'sdk': checked out '9d8452f189b305f83b5b7040cbdef1fa9d3a09c0'
```

It is now recommended to update the **Firmware SDK** to the latest version:

```sh
make update
```

## Related Documents

* [**Toolchain Setup**]({{< relref "/doc/firmware/toolchain-setup.en.md" >}})

* [**Toolchain Guide**]({{< relref "/doc/firmware/toolchain-guide.en.md" >}})

* [**Debugging**]({{< relref "/doc/firmware/debugging.en.md" >}})

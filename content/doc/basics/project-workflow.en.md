---
title: "Project workflow"
---

Let's dive a little more into how we envision that each project you start might be done. With help of all the great tools available.

## The tools

Before we start with how the proceed from zero to running application let us list the tools we are using:

To start minimal:

* __GIT__ - version control system (powers many open source projects)
* __GCC__ - GNU C compiler and other tools (gnu-arm as we run on Cortex-M4 of STMicro)
* __Python__ - Scripting language that comes handy for many tasks
* __DFU-Util__ - A tiny tool compiled for Win/Lin/Mac to flash the Core modules
* __bcf__ - A command line tool written by us in Python to expedite boring parts

Some more tools to add when growing into clouds:

* __MQTT__ - an IBM invention - sensor messaing system ([on Wikipedia](https://en.wikipedia.org/wiki/MQTT), main site [mqtt.org](http://mqtt.org/) and a lightweight [broker](https://mosquitto.org/))
* __Node JS__ - Google's big thing, running their Chrome V8 Javascript engine (=fast) on server side (see more on [nodejs.org](https://nodejs.org/))

## How to start

Let us start with assumption that you already have the minimal set of tools. If not please refer to [Playground Setup](../../tutorials/playground-setup/).

The easy way if to use __bcf__ magic wand to let it do the work.

```bash
bcf create flyingClown
```

The command above execute in shell has the following output on my computer.

```bash
('download firmware from', 'https://github.com/bigclownlabs/bcf-skeleton-core-module/archive/master.zip')
('save as', '/home/bigclown/Library/Caches/bcf/2ff407c06772b35adb3e9435d5325ea4f1aff57670ab2754549da992e3aef4fc')
Download [--------------------]   0.0%
Initialized empty Git repository in /home/bigclown/bc/flyingClown/.git/
Cloning into '/home/bigclown/bc/flyingClown/sdk'...
remote: Counting objects: 423, done.
remote: Compressing objects: 100% (362/362), done.
remote: Total 423 (delta 66), reused 263 (delta 49), pack-reused 0
Receiving objects: 100% (423/423), 7.06 MiB | 772.00 KiB/s, done.
Resolving deltas: 100% (66/66), done.
```

In this output the two first lines are ```bcf``` internal messages saying that the bcf tool has downloaded the archive __master.zip__ from the release directory of the __bcf-skeleton-core-module__ and stored it in it's cache directory. Those two line will only appear if there is new version of the particular directory. (ToDo: check how or whether offline operation works).

The next thing that can be seen in this output is that the ```bcf``` has initialized the __.git__ for you and added a submodule of recent __sdk__ pulled from the Internet (this is not cached at the moment).

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

And at this moment you are left with skeleton source code. This source code can be imediately compiled and flashed to the core module.

The place where you should take over is the directory __app__. Usualy you will not need to modify other files than those in there. Therefore your first step most likely will be to open __app/application.c__ in your favourite editor __atom__ (__sublime__, __eclipse__).

Here comes the loop:

* update the __application.c__
* ```make``` the application into __firmware.bin__
* ```bcf flash firmware.bin``` into the __core module__

If you are lucky and prodigy programmer that you just do few loops here and then you can deploy your application running on __core module__ into the field.

If you for a second admit that you are not that prodigious as you might have thought. Then __debugging__ comes into the game. That's the necessity of learning the things the hard way.

> **Note:** The setup of debugger connected to __SWD__ (JTAG variant) into your IDE is covered in separate article (Todo:ref) 

### Make it into product

Well considering the __real-world__ little bit more, you will probably make the _prototype_ like that. When you consider the project mature enough for going into the wild then you would need a production version of your project. That said the Big Clowns could help here and make it into BOM optimized nice sealed package for field deployment.

## Behind the scenes

For those curious of what going on behind the scenes. The ```bcf``` improves the following ```git clone --recursive 
git@github.com:bigclownlabs/bcf-skeleton-core-module.git``` in a way that it caches the __bcf-skeleton-core-module.git__ in __master.zip__ form and removes the link of the __.git__ to original repository and initializes empty one.

```bash
$ git clone --recursive git@github.com:bigclownlabs/bcf-skeleton-core-module.gitCloning into 'bcf-skeleton-core-module'...
remote: Counting objects: 152, done.
remote: Total 152 (delta 0), reused 0 (delta 0), pack-reused 152
Receiving objects: 100% (152/152), 31.95 KiB | 0 bytes/s, done.
Resolving deltas: 100% (63/63), done.
Submodule 'sdk' (https://github.com/bigclownlabs/bc-core-module-sdk.git) registered for path 'sdk'
Cloning into '/home/bigclown/bc/bcf-skeleton-core-module/sdk'...
remote: Counting objects: 5375, done.
remote: Compressing objects: 100% (192/192), done.
remote: Total 5375 (delta 151), reused 222 (delta 87), pack-reused 5069
Receiving objects: 100% (5375/5375), 14.30 MiB | 1.36 MiB/s, done.
Resolving deltas: 100% (2782/2782), done.
Submodule path 'sdk': checked out '9d8452f189b305f83b5b7040cbdef1fa9d3a09c0'
```


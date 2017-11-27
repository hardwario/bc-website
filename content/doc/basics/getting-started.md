---
title: "Getting Started"
---

BigClown is a device platform, specifically designed for the Internet-of-Things. With BigClown, you can quickly build your own electronics devices. Thanks to its open approach, you will have a total control about your devices, the way they communicate or integrate with 3rd party components. That will give you a freedom for the future customization and extensibility. With BigClown, you will not encounter things like black box magic or vendor lock-in.

## Basic Features

BigClown offers a unique set of features that makes it different from other platforms...

### Feature #1: BigClown is open-source

Open-source is our passion, so we share everything what we do. We have an organization at GitHub. More information can be found in the document [**GitHub Repositories**]({{< relref "doc/basics/github-repositories.md" >}}).

In general, we don't like hidden catches nor hiding the implementation under the hood. We work hard every day to earn your trust in our products, so anytime you have a chance to see the amount of care, passion and quality we put into the design and code.

As we grow and build the community, we sincerely appreciate every single contribution from it. Why wouldn't you join us today?

### Feature #2: BigClown is wireless

With BigClown, you can build a radio network for your devices. The radio network uses a sub-GHz communication technology (868/915 MHz), which is a great choice for home automation applications, security alarms, smart metering, etc.

The devices in your network will be able to communicate up to 500 meters line-of-sight distance. Speaking the indoor range, in most cases you will be able to achieve a full house coverage from a single point.

### Feature #3: BigClown is modular

Why would you constantly reinvent the wheel? We take no shortcomings when it comes down to **modularity and reusability**.

You will be able to assemble your hardware similar like you do with the LEGO&reg; bricks. When you start building multiple devices, you will greatly appreciate the fact that there is **no need for wiring or soldering**. We use a standardized pin header format, which is compatible across the whole ecosystem of hardware products.

The equal level of modularity has been also taken on the software level. Either on a device side, anyone can master creating the firmware with the properly documented APIs and examples, or - the distributed system approach of **MQTT messages** on the side of hub.

### Feature #4: BigClown is low-power

From the very beginning, BigClown has been been optimized for **long service time from batteries**. Most devices can operate without a need for battery replacement for **more than 2 years**.

We have achieved that thanks to our long-time experience designing ultra-low-power devices and utilizing modern hardware components that offer very low standby and/or operation currents.

### Feature #5: BigClown is secure

BigClown uses simple, yet proven security mechanisms for data **encryption and authentication** in the radio communication.

In every BigClown device, you will also find a special hardware security element - the so-called **cryptochip**. This special tiny memory allows to store your security keys used in message authentication in a secure manner. You cannot rip the keys from the memory even if you get a physical access to the device.

We all know that the "security by obscurity" approach does not work in long-term and still you will find it in so many proprietary products.

## System Concept

{{% img src="system-concept.svg" %}}

## Design Decisions

We believe in doing things the right way, so we have taken the following design decisions...

### Decision #1: Radio Frequency

We use the 868/915 MHz frequency for radio communication. This is a license-free band designated for short signal messages. Abusing your IoT devices with a 2.4 GHz band and fighting streaming WiFi, Bluetooth, ZigBee and other protocols will not help your system reliability. It is also about basic rules from physics - with higher frequency, you get worse penetration through the walls and other obstacles. Also the power consumption efficiency is better at lower frequency. As stated earlier - low-power designs are our goal!

### Decision #2: Programming Language

Most developers have somewhat biased opinions about their favourite programming language and we fully hear those. However, in the embedded world if you want to get most from your platform that has to run for several years without a restart and with the lowest possible power consumption, you have to stick with the tools that simply satisfy such requirements.

That's why we have chosen the C language as the technology for the firmware development. With a solid, battle-tested GCC toolchain and traditional Makefile-based build, your projects will be secured for the future.

Despite the fact how much tempting it might be to use a high-level interpreted language like Python, Javascript, etc., you will always do worse in terms of consumed resources and execution time, than with a well-written code in C.

On the other hand, we have created a framework - a firmware SDK - that makes your own firmware development easy and working with the API feels like working in a high-level language.

### Decision #3: Asynchronous Architecture

We have taken some really innovative technique to embedded level - the most notable one is asynchronous-like programming pattern. The built-in scheduler simplifies your life with tasks and platform's power management - it is done for you automatically and you focus on the application development rather than low-level internals.

Also on the hub side, the MQTT follow asynchronous concepts as well. That's a great opportunity to design your own IoT system in one, uniform, asynchronous concept.

### Decision #4: CLI-First Approach

Command Line Interface (CLI) is the first class citizen in the BigClown system. This is where we differ from most other embedded IoT platforms. We emphasize CLI approach in the very first place. It has plenty of advantages - first of all you can do all the operations on the so-called "headless" machines - like servers, embedded computers, etc. Secondly, you can easily hook up continuous integration services that can automate your workflow.

Moreover, tied with Git, MQTT client tools, logging mechanism, etc. you will quickly see that your workflow is rather smooth and efficient.

## Reference Projects

It is important to start somewhere and our aim is to start with simple things. That's why we have prepared several reference IoT projects. Following them will get you on track quickly. You can always explore the parts you are most interested about, tweak them or write your own firmware applications, automation flows or cloud integrations from scratch.

For the very first time, we recommend to walk through the [**Project Workflow**]({{< relref "doc/basics/project-workflow.md" >}}) and [**Quick Tutorial**]({{< relref "doc/basics/quick-tutorial.md" >}}).

On the other hand, if you want to build something real right away, don't hesitate to start with one of our projects:

* [**Wireless Push Button**]({{< relref "doc/projects/wireless-push-button.md" >}})

* [**Wireless Climate Monitor**]({{< relref "doc/projects/wireless-climate-monitor.md" >}})

* [**Wireless Motion Detector**]({{< relref "doc/projects/wireless-motion-detector.md" >}})

* [**Wireless Flood Detector**]({{< relref "doc/projects/wireless-flood-detector.md" >}})

* [**Wireless LCD Thermostat**]({{< relref "doc/projects/wireless-lcd-thermostat.md" >}})

* [**Wireless CO2 Monitor**]({{< relref "doc/projects/wireless-co2-monitor.md" >}})

## Related Documents

* [**Project Workflow**]({{< relref "doc/basics/project-workflow.md" >}})

* [**Quick Tutorial**]({{< relref "doc/basics/quick-tutorial.md" >}})

---
title: "Project Workflow"
---

Let's dive a little more into how we envision that each project you start might be done.

{{% note "warning" %}}This document assumes you are already familiar with the basic concepts from the document [**Getting Started**]({{< relref "doc/basics/getting-started.md" >}}).{{% /note %}}

## Generic Guidelines

Each project is unique, but we still like to provide these generic guidelines that will give you an idea what you

### Phase #1: Project Planning

You can either come up with your completely unique idea, or you may get inspired by our reference projects. In any case, it is worth spending a couple minutes and plan your work.

To be more specific, here is the list of basic questions to answer:

* **What are the tools required?**

* **Which hardware components will I need to build the project?**

* **How will the hardware components interact with me?**

* **How will the hardware components communicate with each other?**

* **How will the system integrate with cloud services (if any)?**

* **How is the system open for any future tweaking and extensibility?**

### Phase #2: Getting Stuff

There is no one-stop-shop for all your needs. The [**BigClown Shop**](https://shop.bigclown.com/) provides a solid starting point for the IoT processor and communication modules, interfaces, sensors, actuators, etc.

On the other hand, the **BigClown IoT Kit** perfectly mates with the 3rd party products, like:

* [**Sparkfun**](https://www.sparkfun.com/)

* [**Adafruit**](https://www.adafruit.com/)

* [**Seeed Studio**](https://www.seeedstudio.com/)

* ...and others

### Phase #3: Firmware Upload

You can start with the existing pre-built firmware image, or just write your own firmware using our high-level **BigClown Firmware SDK**.

In terms of firmware image upload, we have tried to make things really simple. That's why we have developed the **BigClown Firmware Tool** that will make the firmware uploads really simple.

{{% note "info" %}}More information about the **BigClown Firmware Tool** can be found in the document [**Toolchain Setup**]({{< relref "doc/tutorials/toolchain-setup.md" >}}) and [**Toolchain Guide**]({{< relref "doc/tutorials/toolchain-guide.md" >}}).{{% /note %}}

### Phase #4: Hardware Assembling

If your project consists of the **BigClown**-only hardware components, this part is a real fun. Using our **Plug'n'Make** system of compatible modules and tags, you can do so without wiring or soldering.

However, if you need to hookup and/or solder your own circuitry or any 3rd party breakout board, we did not put any obstacle in your way. For such purposes, you can find the prototyping area on the **Battery Module** or **Base Module**.

{{% note "warning" %}}Simple 2-wire interfaces like thermistors, external inputs or voltage outputs can be connected using **Sensor Module** featuring 2 channels and flexible weak/strong pull-up configuration.{{% /note %}}

### Phase #5: Playground Bootstrap

For most of our projects, we use **Node-RED** application (and web-server) that allows you to create automation flows visually with a drag-and-drop style. This tool perfectly integrates with MQTT protocol, which is the fundamental foundation of the **BigClown IoT Kit**.

Because there is a set of software components, that repeat over and over again, we put them in the bundle we call the **BigClown Playground** and you can install it on your desktop on **Windows**, **macOS** and **Ubuntu**.

{{% note "warning" %}}Those users who use the **BigClown Raspbian** image on **Raspberry Pi** can skip this part since it comes already pre-installed on the image.{{% /note %}}

This **BigClown Playground** includes:

* **Mosquitto** MQTT broker

* **Node-RED** application

* **BigClown Gateway**

{{% note "info" %}}More information can be found in the document [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}}) and [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}}).{{% /note %}}

{{% note "success" %}}If you prefer the more technical approach and want to write things from scratch, there is no problem whatsoever to dive deep to **Python**, **Node.js** or any other environment  you are comfortable with.{{% /note %}}

### Phase #6: Radio Pairing

Most of our projects, and probably yours, will be wireless. And there is a need to pair the items to form the network. We use star-network topology and pairing is pretty simple. Just bring the gateway to the pairing mode and let the node transmit the pairing request.

{{% note "info" %}}More information about the radio communication and network can be found in the document [**Sub-GHz Radio**]({{< relref "doc/interfaces/sub-ghz-radio.md" >}}).{{% /note %}}

### Phase #7: Communication Test

Getting the radio link working is half the victory. Normally it is as simple as observing the MQTT messages either in your prompt or using **Node-RED** debug window. Simply activate the sensor, push the button or inject the MQTT message to control the actuator to see whether the link is working.

This is how you can start observing MQTT messages from your prompt:

```sh
mosquitto_sub -t '#' -v
```

### Phase #8: Enclosure Wrapping

Well, having the working prototypes on the table is just as beautiful as it can be. These gadgets can get even more beautiful when they get wrapped in the **BigClown** colorful enclosures.

We have designed these as freely available models, ready to be printed on your 3D printer.

{{% note "info" %}}More information can be found in the document [**Enclosures**]({{< relref "doc/basics/enclosures.md" >}}).{{% /note %}}

### Phase #9: Services Integration

The world of IoT is all about integrations and we partner and integrate with several 3rd party platforms. To name a few:

* **Grafana**

* **Blynk**

* **Ubidots**

* **WolkAbout**

The integration guides are discussed in the **Integrations** section of this documentation.

### Phase #10: MQTT Tweaking

It is the right approach to have MQTT topics and responses properly described so you can tweak your project, extend it or integrate it easily anytime from any development environment.

Remember, the MQTT asynchronous approach allows you to build the whole architecture of microservices.

{{% note "info" %}}More information can be found in the document [**MQTT Protocol**]({{< relref "doc/interfaces/mqtt-protocol.md" >}}).{{% /note %}}

## Share Your Work

It is always a great feeling when you finish something. Honestly, we know these feelings are even stronger when you share what you have achieved with other people.

Get social - start with a tweet, screenshot, post to the forum or get to the point when you will write down a cookbook of your project, so anybody can build it and use it.

**Moreover, this documentation is open-source project and anybody can contribute with a project or a small improvement. So why shouldn't you?**

## Related Documents

* [**Getting Started**]({{< relref "doc/basics/getting-started.md" >}})

* [**Toolchain Setup**]({{< relref "doc/tutorials/toolchain-setup.md" >}})

* [**Toolchain Guide**]({{< relref "doc/tutorials/toolchain-guide.md" >}})

* [**Playground Setup**]({{< relref "doc/tutorials/playground-setup.md" >}})

* [**Playground Starter**]({{< relref "doc/tutorials/playground-starter.md" >}})

* [**Sub-GHz Radio**]({{< relref "doc/interfaces/sub-ghz-radio.md" >}})

* [**Enclosures**]({{< relref "doc/basics/enclosures.md" >}})

* [**MQTT Protocol**]({{< relref "doc/interfaces/mqtt-protocol.md" >}})

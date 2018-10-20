---
title: "MQTT Protocol"
---
* MQTT is open, simple and low overhead communication protocol for sending messages between many clients which are connected to the central MQTT broker.
* Every **message** contains two parts - **topic** and **payload**.
* Topic describes content of the message.
* Topic name contains "directory" structure - each level is divided with symbol `/`.
* Topic can be `bedroom/temperature` or `kitchen/light/set`.
* MQTT server is called the **broker** and clients can **publish** messages and **subscribe** to different topics.
* The task of MQTT broker is to deliver messages from **publishers** to the **subscribers**.
* You can use the `+` symbol to subscribe to all topics in the current topic (`+/light/set`) and `#` symbol to subscribe to all sub-topics (`kitchen/#`).

{{< note "info" >}}
The symbol `#` can be used only at the end of the topic name.
{{< /note >}}


[More information about MQTT topics](http://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices)

# Mosquitto MQTT broker

BigClown is using open-source [Mosquitto](https://mosquitto.org) MQTT broker. All messages are routed through MQTT broker. This allows further expansion of BigClown system.

When you connect the Core Module or Radio Dongle with connected remote node, you can display all incoming messages using `mosquitto-cli` package by typing:

```
pi@hub:~ $ mosquitto_sub -t "#" -v
node/836d19821664/thermometer/0:1/temperature 24.69
node/836d19821664/thermometer/0:1/temperature 24.94
node/836d19821664/push-button/-/event-count 5
```

# GUI tool for MQTT messages

For debugging the communication you can use graphical tool [Eclipse Paho mqtt-spy](https://github.com/eclipse/paho.mqtt-spy).

{{< note "info" >}}
This tool need JRE 8 installed on your host machine.
{{< /note >}}

* More information about Paho https://github.com/eclipse/paho.mqtt-spy/wiki

* [Download Eclipse Paho mqtt-spy](https://github.com/eclipse/paho.mqtt-spy/wiki/Downloads)

After installation you have to set IP adress of the MQTT broker. For example `hub.local` or IP adress of your **Raspberry Pi**

{{< note "info" >}}
This tool allows writing of the custom scripts in the JavaScripts.
You can automate tasks using scripting.
{{< /note >}}

{{% img-zoom src="mqtt-spy.png" %}}

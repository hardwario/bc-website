# Mosquitto - MQTT Broker

<!-- toc -->


## MQTT Basics

* MQTT is open, simple, light-weight and message-oriented protocol.

* Each **message** consists of **topic** and **payload**.

* Topics describe the message category.

* Topics use tree-like structure - individual levels are separated with `/` symbol.

* Example topics are `bedroom/temperature` or `kitchen/light/set`.

* MQTT server is called **broker** and clients can **publish** messages and **subscribe** to various topics.

* MQTT server's role is to deliver messages from publishers to subscribers.

* In subscribe topics the wildcard `+` can be used for single level subscription and symbol `#` for multi level subscription.

  > **Note** Symbol `#` can only be used at the end of subscribed topic.

  [Click here to see more on topics](http://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices)


## MQTT Broker Installation

BigClown uses open-source broker [Mosquitto](https://mosquitto.org).

For example in Ubuntu/Debian/Raspbian you can install Mosquitto server with this command:

```
sudo apt install mosquitto
```

You can also install `mosquitto-clients` package if you want to be able to work with messages from terminal:

```
sudo apt install mosquitto-clients
```


## Using Mosquitto Client Tools


To subscribe to all messages use `mosquitto_sub` command:

```
mosquitto_sub -v -t '#'
```

To publish a message use `mosquitto_pub` command:

```
mosquitto_pub -t 'kitchen/light/set' -m '{"state": true}'
```

You can also publish message with empty (null) payload with this command:

```
mosquitto_pub -t 'kitchen/light/set' -n
```


## Mosquitto Configuration

You can edit Mosquitto settings in the configuration file which is located in `/etc/mosquitto/mosquitto.conf` inside the Docker.


### Bridging Mosquitto Brokers

Bridging two MQTT brokers together is useful for example when you have your local MQTT server behind NAT and you would like to publish messages from the outside/Internet.
You can create public MQTT server (for example on AWS server) which you bridge with your home MQTT server.
In this use case your local server will connect to your public server in AWS.


So you have to configure your local server with commands below.

```
# Bridge to AWS
connection aws
address your.server.com

# Optional password, you should also use TLS to protect credentials
remote_username root
remote_password root

#topic <topic> [[[out | in | both] qos-level] local-prefix remote-prefix]
topic # in 0 home/# remote/#
```

Topic command will subscribe to all topics (`#`) on remote server under `remote/#` and will publish them on local server under `home/#`.

* Parameter `in` describes direction and zero `0` means no QoS.


## GUI Tool for MQTT Messages

For debugging and diagnostic purposes, you can use a tool with graphical user interface - [Eclipse Paho mqtt-spy](https://github.com/eclipse/paho.mqtt-spy).

> **Important** This tool needs JRE 8 to be installed on the host machine.

* For more information about this tool, see: https://github.com/eclipse/paho.mqtt-spy/wiki

* Follow this link to download the tool: https://github.com/eclipse/paho.mqtt-spy/wiki/Downloads

After installation connect to your MQTT's broker IP address and subscribe to topics or start publishing messages.

> **Tip** This tool supports subscription scripts written in JavaScript.
>         You can automate your tasks with this feature.

![](images/mosquitto/mqtt-spy.png)

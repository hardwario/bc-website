# MQTT - Messaging via Broker

<!-- toc -->

MQTT (formerly Message Queuing Telemetry Transport, today MQTT) is a simple and lightweight protocol for transmitting messages between clients through a central point/broker.
Thanks to its compact simplicity it can easily be implemented in systems with “small” processors and has spread relatively quickly.
It was designed at IBM, is backed today by the Eclipse Foundation and recently went through OASIS standardization.

The MQTT protocol is transmitted via TCP and uses a publisher - subscriber design model.
There is one central point (MQTT broker), that handles the exchange of messages.
Messages are sorted into topics, and devices either publish in the given topic, meaning that they send data to the broker, which stores and distributes them to other devices, or they subscribe to a topic or topics, and the broker then sends all messages with the given topic to the device.
Of course one device can at the same time be a publisher for some topics and a subscriber for others.

The content of messages is not given or required in any way; MQTT is “payload-agnostic”.
The content of messages is simply binary data that is transmitted.
JSON, BSON and text messages are used most often, but it can really be anything.
The size of the message in the current version of the protocol is limited to almost 256MB, but most messages are much smaller...

MQTT minimizes the amount of ballast data, so it only adds a minimum of service data.
It establishes three levels of QoS (Quality of Service) - which pertains to message confirmation, with the lowest level meaning that the message is sent without confirmation and delivery is not guaranteed (at-most-once), the middle level says that the message is delivered at least once, and the highest level, QoS 2, means that each message is delivered exactly once.
However, a client need not support all three levels of QoS.


## MQTT in Detail

Messages in MQTT belong to certain topics.
Each message belongs to a single topic.
Topics are hierarchical and separated by slashes.
For example, hypothetical “light number 26 on the ceiling in room 103, first floor, building 1” might have the topic `building-1/floor-1/room-103/ceiling/light-26`.
Or perhaps `house/bedroom/light`.
Topics in the MQTT chain are in UTF-8, so naming with diacritical marks is not a problem.

Hierarchy is not fixed, it depends on the application and how you design it.
Designing appropriate hierarchy may be no trivial task.
The best structure is not always the “natural” one.
In this regard it is important to consider the data model and interface and find a suitable arrangement where topics logically go together.

The publisher, the person who produces the message, selects the topic and sends it together with the message.
It need not configure or check the topic, as soon as the broker receives a message for a topic that it does not yet have, it configures the topic.
The important thing is that the publisher and subscriber agree in advance on the topic to be used.
Usually this will be given by the data model.

Devices request to subscribe to messages in the same way - by sending the broker a special “subscribe” mesage with the name of the topic they want to subscribe to.
Here, they may use wildcard symbols `#` and `+`. The `+` symbol replaces one level, e.g. `building1/floor1/+/door` addresses the doors in all rooms on the first floor of building 1 - i.e. `building1/floor1/room101/door`, `building1/floor1/room102/door`, `building1/floor1/toilets/door` etc.
The `#` wildcard symbol replaces one or more levels and must always be last.
Subscribing to topic `building1/floor1/#` means that messages will be received with all topics pertaining to the first floor of building 1.

There is one more note regarding naming convention:
If the name of the topic starts with the `$` symbol, this is a special topic publishers cannot publish to.
This is used as a special topic for messages which the broker needs to send.
The most widely used approach is to begin topics with `$SYS/` - these usages are not yet fixed and a list of recommended topic names is available at [MQTT Wiki](https://github.com/mqtt/mqtt.github.io/wiki/SYS-Topics).


## Exchanging Messages

Initially the client (device, node) establishes a connection with the broker via TCP.
This most often uses port 1883, or port 8883 for a connection via TLS.
Another approach that is used is a connection via [WebSocket](websocket.md) (ws/wss), most often to ports 8080/8081 (or via reverse proxy to ports 80 and 443), but naturally it is possible to set communication in any way.

After establishing a connection, the device sends a `CONNECT` message, usually with a clean session flag to ensure that the session starts without any subscriptions to any topics.
Connection can also take place with some basic verification of name and password.
The broker responds with the message `CONNACK`, which confirms the connection.

Next there may be one or more `SUBSCRIBE` messages with the names of the topics which the device wants to subscribe to.
See above for details.
The broker confirms by sending `SUBACK`.
Of course, at any time after connecting and receiving confirmation (`CONNACK`), the device can request to subscribe to other topics.

Once connected and confirmed (`CONNACK`), everything is set and both the device and broker can send messages using `PUBLISH`.

A device can request to stop receiving a certain topic by sending an `UNSUBSCRIBE` message (the broker confirms this with `UNSUBACK`), and once its work is finished it sends a `DISCONNECT` message.

In the event that the device has already been disconnected, it can connect without using a clean session, meaning that all previously subscribed topics will be retained.

MQTT also detects whether the device is still active.
If over a certain period of time a device fails to send a message, it is considered to have been forcibly disconnected and a “last will” is sent, which we will explain in a moment.
For a device to avoid this situation, if it does not have any message to send, it should send a `PINGREQ`.
The broker responds with a `PINGACK` message.

If the connection is lost, the broker can send for a certain topic a “last will” message, which is a message that the device can send when sending a `CONNECT` message to connect with the broker.
This message is not required.


## QoS & Retain

So we have already taken a brief look at Quality of Service.
We mentioned that there are three levels, 0, 1 and 2, that differ depending on degree of confirmation and manner of ensuring delivery.

At level 0 (at most once, or fire and forget) the publisher sends a `PUBLISH` message to the broker and is done with it.
The broker sends the given topic to subscribers in the same way.

At level 1 (at least once) the publisher sends the broker a `PUBLISH` message and waits.
The broker accepts the message and sends it to subscribers (again `PUBLISH`).
Transmission takes place either via QoS 1 or QoS 0 if the device cannot handle QoS 1.
The general rule, however, is that it is sent with the same QoS with which it was received.
In this case, it is sent with QoS 1 (`PUBLISH`) and waits for confirmation from the recipient.
As soon as the subscriber confirms receipt with a `PUBACK` message, the broker removes the message and sends a `PUBACK` message to the publisher.
The publisher then knows that the message has been passed on by the broker and can get rid of it.
The broker can send `PUBACK`, without getting confirmation from all recipients.
The exact behavior depends on the implementation, usually it does this and MQTT enables both scenarios, i.e. waiting and not waiting.

At level 2 (exactly once) the publisher sends a `PUBLISH` message to the broker.
As in the previous case, the broker receives the message and sends it to subscribers, and then sends a `PUBREC` message back to the publisher (confirming receipt).
The publisher responds with a `PUBREL` message, the broker deletes the message and confirms with `PUBCOMP`.
This concludes the exchange.

With respect to QoS, the broker sends the message on the level that it was received, with the option of lowering the level if the client can only handle a lower level.

![](images/mqtt/mqtt-qos-levels.png)

In addition to QoS, a message can also set the retain flag, i.e. a symbol that says that the broker should not delete the message after sending, but should save it and send it to new subscribers for the given topic.
The broker always sends the last saved message with a retain flag.

It is important to know that the publisher can send a message to the broker with any QoS.
The broker will then send the message to subscribers with the same QoS.
The same approach applies here.
For QoS 2, for example, the broker sends the message to the subscriber, the subscriber confirms receipt (`PUBREC`), the broker verifies that it received confirmation (`PUBREL`) and the subscriber concludes communication with `PUBCOMP`.
When subscribing however, the subscriber can specify the maximum QoS it wants to receive.
The broker then sends messages it receives at the requested QoS.
If a message is received by the broker at QoS 2, but the subscriber request a maximum of QoS 1, the broker will send the message with QoS 1.
Of course, this means that the subscriber may get the message multiple times (because QoS 1 does not guarantee delivery “exactly once”).


### An example of MQTT in practice

Let us assume the simplest situation possible, turning on a light bulb with a switch.

The first idea is the simplest:
The switch will be the publisher, and it will publish in the topic room/switch (for simplicity’s sake; in reality the name will probably be more complex), and the smart bulb has subscribed to receive messages with the topic room/switch and it will respond to messages.

Something like this:

![](images/mqtt/mqtt-pub-sub-simple.png)

The second approach is more complex and requires a certain amount of intelligence.
The bulb need not listen only to the switch; the pathway may include a minimal amount of intelligence that evaluates messages from publishers and based on these sends instructions to subscribers.

![](images/mqtt/mqtt-pub-sub-extended.png)

With this kind of arrangement it is much easier to give the entire system another level of abstraction.
We can easily logically rearrange the entire system if necessary or add logic that the devices themselves do not implement - for example a step switch with a timer, or a “cross” switch where we control one light from multiple places, or other intelligent behavior.


MQTT is very easy to use - many broker implementations exist (probably the most well known and widely used is the Mosquitto open-source MQTT broker http://mosquitto.org/[Mosquitto]) and even more client libraries for various languages (Java, Python, JavaScript, Ruby, Go or Erlang) and devices (Arduino, mbed, netduino, ...).
You will find MQTT in cloud services (AWS IoT, Azure IoT), or in various home automation systems (Domoticz) or tools for smartphones.
Without exaggeration it can be said that MQTT is really one of few IoT standards.


### MQTT and BigClown

The BigClown Hub enables communcation via MQTT.
Defines topics and subtopics for data, and also defines the format of messages sent.

The topic addresses a specific node.
In the case of BigClown Bridge project it is the Bridge Module, and its topic is `nodes/bridge/0/#`.
If you connect another Bridge Module, the topic will be `nodes/bridge/1` etc.

Each sensor and actuator has its own subtopic, which gives the class of the device (thermometer, barometer etc.), and says where the device is connected, i.e. to which I²C bus and with what address.

The following table gives a summary of all the devices available in Bridge project:

| Part of topic           | Payload key        |
| ----------------------- | ------------------ |
| led/-                   | state              |
| thermometer/i2c0-48     | temperature        |
| thermometer/i2c1-48     |                    |
| thermometer/i2c0-49     |                    |
| thermometer/i2c1-49     |                    |
| lux-meter/i2c0-44       | illuminance        |
| lux-meter/i2c1-44       |                    |
| lux-meter/i2c0-45       |                    |
| lux-meter/i2c1-45       |                    |
| barometer/i2c0-60       | pressure, altitude |
| barometer/i2c1-60       |                    |
| humidity-sensor/i2c0-40 | relative-humidity  |
| humidity-sensor/i2c0-41 |                    |
| humidity-sensor/i2c1-40 |                    |
| humidity-sensor/i2c1-41 |                    |
| co2-sensor/i2c0-38      | concentration      |
| relay/i2c0-3b           | state              |
| relay/i2c0-3f           |                    |

In their basic settings the yellow highlighted devices do not require soldering to the tag or module.

The complete topic consists of the topic for the given node and the subtopic of the specific sensor or actuator.
For example, `nodes/bridge/0/thermometer/i2c0-48`.
This would be the address of the thermometer connected to the I2C0 bus with the address 0x48 (i.e. the Temperature Tag) on Bridge Module number 0.

The actual data (payload) is formatted as a JSON object {"key": value}.
The key is in the table, listed above (e.g. for a thermometer it is "temperature").
The value will either be boolean (true/false), or a simple chain, or a field of two values, where the first contains the measured value and the second the unit.
If the particular sensor measures multiple variables, the JSON object will have more key-value pairs.

Examples:

```
nodes/bridge/0/lux-meter/i2c0-44 {"illuminance": [829.44, "lux"]}
nodes/bridge/0/lux-meter/i2c1-44 {"illuminance": [994.56, "lux"]}
nodes/bridge/0/barometer/i2c1-60 {"pressure": [97.062, "kPa"], "altitude": [361.3, "m"]}
```

You see the values from two lux meters (each on a different bus) and from the barometer (here there are two values, pressure and altitude).


## References

* MQTT
  http://mqtt.org/

* List of clients for MQTT:
  http://www.hivemq.com/blog/seven-best-mqtt-client-tools

* Best practices for MQTT:
  http://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices

* Installation of Mosquito MQTT broker on Raspberry Pi:
  http://www.4makers.info/instalace-mosquitto-na-raspi-ze-zdrojovych-kodu/

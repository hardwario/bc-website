# I²C - Communication Interface

<!-- toc -->

In the world of the internet we encounter many abbreviations and names for technology that can be confusing for a novice.
Let’s take a look at some of them and see what they mean.


## What is I²C?

I²C, or more correctly I²C (read I squared C and standing for Inter-Integrated Circuit) is a serial bus that has become a de facto standard for connecting various sensors and other electronic devices.
It was developed by the Philips Company, and since I²C is a registered trademark, some manufacturers use the abbreviation TWI (Two Wire Interface).
Practically it means the same thing.


## What is Serial?

Every peripheral, sensor or similar device must be connected in some way to a control unit.
In electronics this control unit is often a microcontroller (dedicated computer embedded in a single chip).
This component is programmable, contains program memory and data, and is most often tasked with communicating with peripherals and serving them so that they do what the designer intended.

Microcontrollers communicate with the surrounding world through either a parallel connection, most often consisting of eight data signals, so that it is able to transfer an entire byte of data at once, or through a serial connection where data is transmitted as a sequence of bits.
A parallel connection is theoretically faster, but it has its drawbacks: you must connect multiple wires, which takes up some space on the board.
A serial connection is theoretically slower, but since data is sent along a single wire that can easily be shielded, it is able to handle communication over greater distances.
It is also not necessary to connect so many wires as in the case of a parallel connection.


## What is Bus?

Sometimes a single device is connected rigidly to certain microcontroller pins.
The programmer then knows that the given pins are working with a single specific device.
Unfortunately, the number of pins is not unlimited and there may be multiple devices.
In such cases a bus is used.
A bus is a manner of connection where one or more devices are connected to one or more wires, and where the bus always communicates in some manner with only one of them at a time.
There are several types of serial buses (1-Wire, SPI, I²C, ...) that vary in terms of attributes, the number of wires required, and the manner of selecting the device with which they communicate.


## I²C Bus

In our case a pair of signals are used for connection, SCL (Synchronous Clock) and SDA (Synchronous Data). The I²C bus always has one control device (usually a microcontroller called Master) and several controlled devices (Slaves).

![](images/i2c/i2c.png)

In theory the I²C bus can connect up to 128 devices (but in reality certain addresses are reserved for special purposes).
To clearly indicate which one it is communicating with, each device has an address ranging from 0-127 (Ox7F), i.e. seven bit.

Unfortunately, device addresses cannot be arbitrarily changed (unless it is a peripheral's feature).
Most devices have an address given by the manufacturer, or possible a range of addresses.
For example, the TMP112 thermometer has the address 0x48 or 0x49.
To enable designers to select which address to use, this component has a reserved pin address, and depending on whether it is connected to ground or the power supply, the address of the component is 0x48 or 0x49.

If the designer wants to connect a single TMP112 thermometer, he will connect its address input to ground and the component will have the address 0x48.
If he wants to connect another to the same bus, he will connect the address output to the power supply, and the component will have the address 0x49.
What happens if he wants to connect a third?
Unfortunately, this is not possible. He must choose a different I²C bus - microcontrollers usually have two, marked I2C0 and I2C1.
He can, however, connect other devices to the same bus, provided that they have different addresses.

List of certain devices and their addresses in the BigClown system:

| Device             | Component | I²C Address |
| ------------------ | --------- | ----------- |
| Accelerometer      | LIS2DH12  | 0x19        |
| Temperature Sensor | TMP112    | 0x48 / 0x49 |
| NFC Tag            | NT3H2111  | 0x08        |
| Humidity Sensor    | HDC2080   | 0x40        |
| Barometer          | MPL3115A2 | 0x60        |
| Lux Meter          | OPT3001   | 0x44 / 0x45 |
| Relay Module       | TCA9534A  | 0x3B / 0x3F |


## Communication through I²C

When idle both the SCL and SDA wires will have a logical 1 (pull-up keep signals at this level).
The Master always starts communication by setting SCL to logical 1 and SDA to logical 0 - START event.
This signal means that communication has begun and all devices begin listening.
The Master then sends the address of the device with which it wants to communicate.
It transmits bit by bit from the least significant along the SDA line, and each bit is confirmed by a pulse on the SCL line.
After transmitting the seven bits of the address and the eighth bit that determines whether the master wants to read or write, all devices with a different address disconnect and only the device whose address was sent continues to communicate.
Based on the acknowledging ACK bit, the master then determines whether the device has signalled that it has recognized its address and is ready to transmit data.
Then the actual transmission takes place, either from the master to the slave (the master controls SDA and SCL), or the opposite direction, from the device (slave) to the microcontroller (master), when the master sends the SCL clock signal but the SDA data line is controlled by the device.
At the end of the transmission the Master sets SCL to 1 and then SDA to 1, which sends a “STOP event”.
The bus is then idle.

The actual form of data is different for each device.
Some very simple sensors send only a byte with a value.
Most devices however contain several control and data registers, and to function correctly these registers must first be set properly for the device to start working.
For example, the real time clock must first be allowed to run.
The Master then communicates with devices by writing to and reading from them.

The problem of insufficient address space is resolved by the new standard I²C bus, which introduces a ten-bit address, i.e. from the range of 0-1023.
But not all circuits implement this standard.

The programmer generally needs not to worry about generating and following signals; microcontrollers contain special circuits for communicating through the I²C bus (sometimes more than one), so the work of the programmer is limited to entering the data that is to be sent and reading the data that arrives through the bus.

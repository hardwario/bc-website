---
title: "LoRa Climate Monitor"
menu:
  main:
    parent: 'projects'
    weight: 10
  doc:
    parent: 'projects'
    weight: 10
---

With this kit, you can measure **temperature**, **humidity**, **luminosity** and **pressure**. Then the values are sent wirelessly to the LoRa gateway.

You can use community The Things Network to receive the data.

## What You Will Need   

- {{< shop "Core Module" >}}
- {{< shop "LoRa Module" >}}
- {{< shop "Mini Battery Module" >}}
- {{< shop "Climate Module" >}}


## Firmware Upload

1. Download the latest [**BigClown Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

2. Connect the Core Module to your computer.

3. In Playground, go to the **Firmware** tab, select `bcf-lora-climate-monitor` and flash the firmware.

4. After upload, the red LED on the Core Module will turn on for 2 seconds, then it will turn off.

## LoRa Configuration

For configuration you can use `AT` commands over USB virutal serial port. Use your serial terminal application ([Hterm](http://www.der-hammer.info/terminal/), putty, minicom). Communication parameters are:

- Baudrate 115200
- 8 data bits, 1 stop bit, no parity
- New line `CR+LF` for transmit and for receive

To list all possible commands use `AT$HELP`. You will get:

```
AT$DEVEUI
AT$DEVADDR
AT$NWKSKEY
AT$APPSKEY
AT$SEND Immediately send packet
AT$STATUS Show status
AT$BLINK LED blink 3 times
AT$LED LED on/off
AT+CLAC
AT$HELP This help
OK
```

To read the parameter use:

`AT$APPSKEY?`

You receive the key:

`$APPSKEY: BF22C15EB89237A65DAABB05B2C91EB4`

To write the parameter:

`AT$APPSKEY=BF22C15EB89237A65DAABB05B2C91EB4`

For LoRa **ABP** mode you need to set these keys/values:

- `APPSKEY`
- `NWKSKEY`

Also for the LoRa gateway you need to get this information:

- `DEVEUI`
- `DEVADDR`

## LoRa Configuration

You need to configure your LoRa gateway. This step is different for your LoRa provider or The Things Network. The authentization is now only **ABP**.

## Transmitting the data

The LoRa Climate Monitor sends a LoRa packet when:

- After power-up, when the batteries are inserted
- Every 15 minutes when the measure values are the same
- After pressing the button
- When you type `AT$SEND` to the console

## Reading the Data

The data are encoded in the LoRa message. You need to extract the right bits to get the values back. This is explained in the [README.md file](https://github.com/bigclownlabs/bcf-lora-climate-monitor/blob/master/README.md#buffer). You can also use the `decode.py`python [script in the repository](https://github.com/bigclownlabs/bcf-lora-climate-monitor).

You can pass the received HEX string as a parameter for the `decode.py`:

`python3 decode.py 011b0100f5600024c313`


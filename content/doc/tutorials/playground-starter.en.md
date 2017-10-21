---
title: "Playground Starter"
---

## TODO



## Gateway services

Service bch-gateway

You can name your nodes so you don't need to remember the 8 character node address. Just edit the gateway config file `/etc/bigclown/bc-gateway.yml`. You can edit the [example configuration file](https://github.com/bigclownlabs/bch-usb-gateway/blob/master/config/config.mqtt.ssl.example.yml).

This example file renames the node with address `836d1983631e` to the human-friendly `room` name.

```yml
device: /dev/ttyACM0
mqtt:
  host: localhost
  port: 8883
  cafile: /home/karel/clown/tls/ca.crt
  certfile: /home/karel/clown/tls/client.crt
  keyfile: /home/karel/clown/tls/client.key
rename:
  836d1983631e: room
```

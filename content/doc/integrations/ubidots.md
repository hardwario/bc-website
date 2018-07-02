---
title: "Ubidots"
---

With [Ubidots](https://ubidots.com) you can monitor your values remotely and get notifications when they go over set thresholds.

You get 5000 free credits with new account. You can send notifications over e-mail, Telegram or by webhooks which costs you 1 credit or SMS notification with 20 credits.

{{% img-zoom src="ubidots-website.png" %}}

## Create Ubidots device and variable

  * After you create your account on [Ubidots](https://ubidots.com), go to the **Devices** page
  * Create a new device and open it
  * Set the **API Label** of newly created device to some URL-friendly name, which we later use in HTTP API ("bc" for BigClown in this example)
  * Create a new variable and again, set **API Label** to some URL-friendly name, which we later use in HTTP API ("temperature" in this example)
  * Click on your name in the right-top and select **API Credentials**, copy **Default token** to the script below

## Node-RED flow

Here is the complete flow which you can import to **Node-RED**. Just change the incoming MQTT topic and the token variable in the function block.

```
[{"id":"b2631b08.d79dc8","type":"inject","z":"a387667a.a475f8","name":"Test value 40","topic":"","payload":"40","payloadType":"num","repeat":"","crontab":"","once":false,"x":150,"y":200,"wires":[["e066c88d.34a6a8"]]},{"id":"e066c88d.34a6a8","type":"function","z":"a387667a.a475f8","name":"Ubidots temperature","func":"\n// Ubidots HTTP request\n\nvar token = \"<your token>\";\nvar device_api_label = \"bc\";\nvar variable_api_label = \"temperature\";\n\nmsg.url = \"http://things.ubidots.com/api/v1.6/devices/\" + device_api_label + \"/\" + variable_api_label + \"/values?token=\" + token;\nmsg.method = \"POST\";\n\nvar value = msg.payload;\n\nmsg.payload= {\"value\": value};\nreturn msg;","outputs":1,"noerr":0,"x":420,"y":200,"wires":[["297a3ffc.56488","205bacd5.8879d4"]]},{"id":"297a3ffc.56488","type":"http request","z":"a387667a.a475f8","name":"","method":"use","ret":"txt","url":"","tls":"","x":650,"y":160,"wires":[["205bacd5.8879d4"]]},{"id":"205bacd5.8879d4","type":"debug","z":"a387667a.a475f8","name":"","active":true,"console":"false","complete":"false","x":830,"y":200,"wires":[]},{"id":"7c568c97.13fe44","type":"mqtt in","z":"a387667a.a475f8","name":"","topic":"node/generic-node:0/thermometer/0:1/temperature","qos":"2","broker":"29fba84a.b2af58","x":250,"y":120,"wires":[["e066c88d.34a6a8"]]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```


{{% img-zoom src="ubidots-flow.png" %}}

## Node-RED function for Ubidots

This section just explains the function which is already included in the Node-RED flow above.
Here is the complete function for **Node-RED** which translates incoming values (for example from MQTT) to HTTP request which sends data to Ubidots.

```javascript
// Ubidots HTTP request

var token = "<your token here>";
var device_api_label = "bc";
var variable_api_label = "temperature";

msg.url = "http://things.ubidots.com/api/v1.6/devices/" + device_api_label + "/" + variable_api_label + "/values?token=" + token;
msg.method = "POST";

var value = msg.payload;

msg.payload= {"value": value};
return msg;

```

## There's more

In the **Dashboard** tab you can create a preview of all your important values. In the **Event** tab you can set rules so you'll get notified when some value gets out of the limits. The SMS notification is easy to set-up and just works.

# References

* [How to Send Data to Ubidots Using Raspberry Pi and NodeRED](https://www.hackster.io/kierankieran/how-to-send-data-to-ubidots-using-raspberry-pi-and-nodered-128b5c)

---
title: "Ubidots"
menu:
  main:
    parent: 'integrations'
    weight: 50
  doc:
    parent: 'integrations'
    weight: 50
---

With [Ubidots](https://ubidots.com) you can monitor your values remotely and get notifications when they go over set thresholds.

## How to use Indiegogo Ubidots Coupons

1. Indiegogo Ubidots coupons are applicable for Education platform and each coupon code provided can be used only once
2. Details to how a coupon code can be applied to any Ubidots for Education account can be found [here](http://help.ubidots.com/user-guides/promo-codes)
3. Ubidots for Education and additional details to this DIY platform can be found [here](https://ubidots.com/education/)
4. New Ubidots for Education Accounts can be created using the following [link](https://app.ubidots.com/accounts/signup/)

Any users looking for additional cloud and IoT Application development tools are encouraged to take Ubidots free 30-day trial using this [link](https://industrial.ubidots.com/accounts/signup_industrial/)

{{% img-zoom src="ubidots-website.png" %}}

## Sign up to Ubidots and get an API Token

  * Create an Ubidots account [here](https://ubidots.com).
  * Click on the profile icon in the top-right corner and select **API Credentials**, then copy your **Default Token**

## Node-RED flow

Here is the complete flow which you can import to **Node-RED**:

```
[{"id":"6c6622f5.06be2c","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/#","qos":"2","broker":"29fba84a.b2af58","x":70,"y":40,"wires":[["f3036e8f.15107"]]},{"id":"f3036e8f.15107","type":"function","z":"2c41a2bd.aa36ae","name":"Ubidots Decode","func":"// Declare variables\nvar ubi_payload = {}\nvar ubi_msg = {};\nvar topic = msg.topic.split(\"/\");\n\n// Get device label, variable name and value from BigClown message\nvar device_label = topic[1];\nvar variable = topic[4];\nvar value = msg.payload;\n\n// Build Ubidots MQTT payload\nubi_msg['device_label'] = device_label;\nubi_payload[variable] = value;\nubi_msg['payload'] = ubi_payload;\nreturn ubi_msg;","outputs":1,"noerr":0,"x":280,"y":40,"wires":[["3ae188a9.accc48"]]},{"id":"3ae188a9.accc48","type":"ubidots_out","z":"2c41a2bd.aa36ae","name":"","token":"YOUR-TOKEN-HERE","label_device":"","device_label":"","tier":"educational","x":530,"y":40,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

{{% img-zoom src="ubidots-flow.png" %}}

To send your data to your Ubidots account just double click on the **Ubidots out** node and enter your **Ubidots TOKEN**.

## The Ubidots Node

BigClown utilizes Ubidots official Node-RED node, which connects to Ubidots' MQTT broker and expects a Node-RED message with the following format:

```
{
    "device_label": YOUR_DEVICE_NAME,
    "payload": {"SENSOR_VARIABLE_NAME": "SENSOR_VARIABLE_VALUE"}
}
```
To aggregate BigClown's messages into the expected Ubidots format, a function called **Ubidots Decode** is used (this function is already included in the Node-RED flow above):

```javascript
// Declare variables
var ubi_payload = {}
var ubi_msg = {};
var topic = msg.topic.split("/");

// Get device label, variable name and value from BigClown message
var device_label = topic[1];
var variable = topic[4];
var value = msg.payload;

// Build Ubidots MQTT payload
ubi_msg['device_label'] = device_label;
ubi_payload[variable] = value;
ubi_msg['payload'] = ubi_payload;
return ubi_msg;
```
## Results

This simple setup will automatically create a new Ubidots device for every new BigClown module detected by your BigClown gateway.

## There's more

In the **Dashboard** tab you can create a preview of all your important values. In the **Event** tab you can set rules so you'll get notified when some value gets out of the limits. The SMS notification is easy to set-up and just works.

# References

* [How to Send Data to Ubidots Using Raspberry Pi and NodeRED](https://www.hackster.io/kierankieran/how-to-send-data-to-ubidots-using-raspberry-pi-and-nodered-128b5c)

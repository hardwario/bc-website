---
title: "Google Assistant"
draft: false
menu:
  doc:
    parent: 'integrations'
    weight: 70
---

With the Google Assistant integration you can control you BigClown kits with your Google Assistant.

For now, you can control:

 * {{% shop "Climate Monitor Kit" %}}
 * {{% shop "CO2 Monitor Kit" %}}
 * {{% shop "Power Controller Kit" %}}
 * {{% shop "Push Button Kit" %}}
 * {{% shop "Motion Detector Kit" %}}

{{< note "info" "What is Google Assistant?"  >}}
Google Assistant is voice assistant, made by Google. Avaliable on bilions of devices, you can use it to do many things. Now, even control your BigClown kits.
{{< /note >}}

## Setup

Setup will be containing three steps:

1. Setup of the kit and Blynk mobile app

2. Adding Node-RED nodes to enable Google Assistant support

3. Google Assistant set-up


## Kit and Blynk setup

Please setup at least one of supported modules using [Projects guides](https://www.bigclown.com/doc/projects/push-the-button/) and make sure you have [Blynk](https://www.bigclown.com/doc/projects/push-the-button/#blynk-mobile-app-set-up) installed on your device. Google Assistant will use Blynk to communicate with your Hub in the background and fulfill your commands.

Here is [list of projects with Blynk integrations]({{< relref "doc/integrations/blynk-for-mobile-applications.en.md#blynk-example-projects-with-bigclown" >}}).

**Make sure you have your kit sucesfully running with Blynk before you move to next steps.**

## Node-RED setup

1. Open **Node-RED** in **BigClown Playground** in the **Function** tab or in your web browser **http://localhost:1880/**

3. Insert the following snippet in the flow (using **Menu >> Import >> Clipboard**) and click in **Flow 1** tab to insert the imported flow.

    ```json
    [{"id":"a71a22d0.98a6a","type":"blynk-ws-in-write","z":"f12ddf57.809","name":"Get nodes","pin":"41","pin_all":0,"client":"","x":136,"y":99,"wires":[["4d781603.f9b7a8"]]},{"id":"9fadf05.d06501","type":"blynk-ws-out-write","z":"f12ddf57.809","name":"Send data","pin":"40","pinmode":0,"client":"","x":678,"y":159,"wires":[]},{"id":"4d781603.f9b7a8","type":"function","z":"f12ddf57.809","name":"Set get_message","func":"flow.set(\"get_message\", \"true\");\nreturn msg;","outputs":1,"noerr":0,"x":333,"y":97,"wires":[["4dbb2843.32be08"]]},{"id":"5375b293.6d5dec","type":"mqtt in","z":"f12ddf57.809","name":"","topic":"gateway/usb-dongle/nodes","qos":"2","broker":"a5605d5c.f080e","x":207,"y":159,"wires":[["29d803d7.0cef3c"]]},{"id":"29d803d7.0cef3c","type":"function","z":"f12ddf57.809","name":"Check get_message","func":"var get_msg = flow.get('get_message') || \"false\";\nif(get_msg == \"true\") {\n    return msg;    \n} else {\n    return;\n}\n","outputs":1,"noerr":0,"x":461,"y":159,"wires":[["9fadf05.d06501"]]},{"id":"4dbb2843.32be08","type":"mqtt out","z":"f12ddf57.809","name":"","topic":"gateway/usb-dongle/nodes/get","qos":"","retain":"","broker":"a5605d5c.f080e","x":613,"y":97,"wires":[]},{"id":"ca23ca3b.0edbc8","type":"mqtt in","z":"f12ddf57.809","name":"","topic":"node/+/co2-meter/-/concentration","qos":"2","broker":"29fba84a.b2af58","x":201,"y":344,"wires":[["d8ba44c5.a41a38"]]},{"id":"236c66ba.0bb7ca","type":"mqtt in","z":"f12ddf57.809","name":"","topic":"node/+/hygrometer/0:4/relative-humidity","qos":"2","broker":"29fba84a.b2af58","x":222,"y":393,"wires":[["d8ba44c5.a41a38"]]},{"id":"d7601afc.c5b448","type":"mqtt in","z":"f12ddf57.809","name":"","topic":"node/+/thermometer/0:0/temperature","qos":"2","broker":"29fba84a.b2af58","x":211,"y":295,"wires":[["d8ba44c5.a41a38"]]},{"id":"a95041d6.93855","type":"mqtt in","z":"f12ddf57.809","name":"","topic":"node/+/barometer/0:0/altitude","qos":"2","broker":"29fba84a.b2af58","x":189,"y":443,"wires":[["d8ba44c5.a41a38"]]},{"id":"d8ba44c5.a41a38","type":"function","z":"f12ddf57.809","name":"Save data (connect data nodes here)","func":"flow.set(msg.topic, msg.payload);\nreturn;","outputs":1,"noerr":0,"x":745,"y":323,"wires":[["445e3013.1b42f"]]},{"id":"445e3013.1b42f","type":"function","z":"f12ddf57.809","name":"Get data","func":"msg.payload = flow.get(msg.payload);\nif(msg.payload === null || \"\") {\n    msg.payload = \"No value\";\n}\nreturn msg;","outputs":1,"noerr":0,"x":415,"y":227,"wires":[["674d74fb.55a18c"]]},{"id":"b250e3ca.fa51c","type":"blynk-ws-in-write","z":"f12ddf57.809","name":"Get data","pin":"42","pin_all":0,"client":"","x":199,"y":229,"wires":[["445e3013.1b42f"]]},{"id":"674d74fb.55a18c","type":"blynk-ws-out-write","z":"f12ddf57.809","name":"Send data","pin":"43","pinmode":0,"client":"","x":619,"y":227,"wires":[]},{"id":"9c68887b.be7268","type":"blynk-ws-in-write","z":"f12ddf57.809","name":"","pin":"44","pin_all":0,"client":"","x":166,"y":632,"wires":[["afcf9ce9.8d0ea"]]},{"id":"afcf9ce9.8d0ea","type":"function","z":"f12ddf57.809","name":"Split data","func":"var values = msg.payload.split(\"AND\");\nmsg.payload = values[0];\nmsg.topic = values[1];\nreturn msg;","outputs":1,"noerr":0,"x":375,"y":633,"wires":[["90a4c19d.773d5"]]},{"id":"90a4c19d.773d5","type":"mqtt out","z":"f12ddf57.809","name":"","topic":"","qos":"","retain":"","broker":"a5605d5c.f080e","x":532,"y":633,"wires":[]},{"id":"e74f6ca6.f66a","type":"comment","z":"f12ddf57.809","name":"2 part data send","info":"","x":146.5,"y":593,"wires":[]},{"id":"a5605d5c.f080e","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

    It will look like this:

    {{% img-zoom src="node-red-config-needed.PNG" %}}

    {{% note "info" %}}This snippet prepares Node-RED to fulfill commands from Google Assistant{{% /note %}}

4. Configure **all 5 Blynk nodes** with correct Blynk token. You've received the token in your email when you've created new project in the Blynk app. Use the pencil icon on the right to create a new connection with your token.

    Use `ws://blynk-cloud.com/websockets` URL in the configuration.

    {{% img-zoom src="node-red-pick-config.PNG" %}}

6. Deploy the flow using the **Deploy** button in the top-right corner.

7. After that, all Blynk nodes should have green indicator at the bottom and say connected. Make sure that Blynk project is running in your phone (Play icon was pressed)

Your setup should look like this:
{{% img-zoom src="node-red-setup-finished.PNG" %}}


## Google Assistant setup

To complete Google Assistant setup, **you need a mobile device**.

Also make sure that your language is supported. Meaning that you can do voice search does not mean you have **Google Assistant**. If you are not sure, switch your phone language to **English** language.

1. Launch BigClown action by saying (or typing) *Talk to BigClown*</br>
    {{% img-zoom src="reg1.jpg" width="40%" height="40%" %}}

2. Confirm account creation by saying *yes*. Account is needed because of Google Assistant guidelines for storing information like Blynk secret.</br>
    {{% img-zoom src="reg2.jpg" width="40%" height="40%" %}}
3. Confirm ToS and Privacy policy to finish the registration.</br>
    {{% img-zoom src="reg3.jpg" width="40%" height="40%" %}}
4. Confirm that you want to start the setup by saying *yes*</br>
{{% img-zoom src="reg4.jpg" width="40%" height="40%" %}}

1. If you had already completed the Node-RED setup above, you don't need to open the instructions, otherwise, complete the Node-RED setup first and come back when you are finished.

    Reply with **just the Blynk secret key** you used to configure Blynk nodes in Node-RED.

    Blynk secret key has this format `ed058033163b4f4b977e6e1d60c725d4` and you can find it in the Node-RED Blynk configuration or in your email which was send to you when you created Blynk dashboard in your phone.</br>
    {{% img-zoom src="ga-instructions.jpg" width="40%" height="40%" %}}

2. Confirm that you want to use this key</br>
{{% img-zoom src="ga-confirmation.jpg" width="40%" height="40%" %}}

5. If everything worked well, your modules will show up now. Pick the module to send commands to it.</br>
{{% img-zoom src="ga-welcome.jpg" width="40%" height="40%" %}}</br>

6. Try it out! You can now use voice enabled devices like Google Home to control your BigClown modules just like you would with your phone.
Say **Talk to BigClown** to start the Action again.</br>

{{% img-zoom src="ga-example-1.jpg" width="40%" height="40%" %}}
{{% img-zoom src="ga-example-2.jpg" width="40%" height="40%" %}}
{{% img-zoom src="ga-example-3.jpg" width="40%" height="40%" %}}

## Adding more nodes

In case you have more nodes that does not have standard MQTT topics, you add them here and connect them to the **Save data** node.

{{% img-zoom src="node-red-data-nodes.PNG" %}}

## Example Conversation

You can also tell command in a single sentence. This way you switch the **context** to the new device.

- What's the humidity (pressure, altitude, temperature, illuminance) on the Climate Monitor?
- Set color to orange on Power Controller.
- Turn the relay on. (You can use it only when the **context** was switched for example by previous command to Power Controller)
- Set brightness to 30% on Power Controller.

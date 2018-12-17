---
title: "Google Assistant"
---

With the Google Assistant integration you can control you BigClown kits with your Google Assistant.

For now, you can control [Power Controller](https://shop.bigclown.com/power-controller-kit/), [CO2 Monitor](https://shop.bigclown.com/co2-monitor-kit/), [Push Button](https://shop.bigclown.com/push-button-kit/) and [Motion Detektor](https://shop.bigclown.com/motion-detector-kit/).

{{< note "info" "What is Google Assistant?"  >}}

Google Assistant is virtual assistant, made by Google. Avaliable on bilions of devices, you can use it to do many things. Now, even control your BigClown kits. :)
{{< /note >}}

## Setup

There are a few setup steps to enable Google Assistant controlling your modules.

1. Setup of the kit and Blynk mobile app
2. Adding Node-RED nodes to enable Google Assistant support
3. Configure BigClown action in Google Assistant

### Kit and Blynk setup
Please setup at least one of supported modules using [Projects guides](https://www.bigclown.com/doc/projects/push-the-button/) and make sure you have [Blynk](https://www.bigclown.com/doc/projects/push-the-button/#blynk-mobile-app-set-up) installed on your device. Google Assistant will use Blynk to communicate with your Hub in the background and fulfill your commands. 

### Node-RED setup
{{% note "danger" %}}If you are using the new **BigClown Playground**, then use the **Functions** tab instead of using **http://localhost:1880/**. Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.{{% /note %}}

1. Open **Node-RED** in your web browser:

    **http://localhost:1880/**

2. You can use either existing workspace or create new one.

3. Insert the following snippet in the flow (using **Menu >> Import >> Clipboard**) and click in **Flow 1** tab to paste the code

    ```json
    [{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
    ```

    It will look like this:

    {{% img-zoom src="node-red-gw-controls.png" %}}

    {{% note "info" %}}This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.{{% /note %}}

4. Deploy the flow using the **Deploy** button in the top-right corner.

## Try it on Google Assistant

1. Open Google Assistant on your phone to complete setup, after setup is done, you can use other Google Assistant products to control your modules
2. Launch the BigClown action by saying (or typing) "OK Google, talk to BigClown"
3. Proceed as you see in image
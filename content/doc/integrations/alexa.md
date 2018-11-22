---
title: "Amazon Alexa"
menu:
  main:
    parent: 'integrations'
    weight: 70
  doc:
    parent: 'integrations'
    weight: 70
---

In the end of Alexa integration you will be able to control your BigClown projects using Alexa. Result of this article will be controlling [LED strip](https://shop.bigclown.com/led-strip-rgbw-1m-144-leds/).

## Installing
You need to install plugin to Node-RED (functions). Open BigClown Playground on you computer. If you want use for this integration your computer, just open functions in menu. However if you want to use [BigClown Hub](https://shop.bigclown.com/bigclown-hub/), you have to see on main page available hubs like on following screenshot just click on one and it will open in your browser.

{{% img-zoom src="screen-1.PNG" %}}

Now you have to install plugin which allow you to controlling BigClown with Alexa. Click on hamburger menu in top right corner > Manage palette > Install and search for `node-red-contrib-alexa-home-skill`. You should see alexa category with `alexa home` and `alexa home response` in nodes.

{{% img-zoom src="screen-2.PNG" %}}

We will be using service [Node-RED Alexa Home Skill Bridge](https://alexa-node-red.bm.hardill.me.uk/) where you have to register an account.

So now you have installed plugin on your Computer or Hub and registred account. However it is not all. Open [Alexa app](https://www.amazon.com/gp/help/customer/display.html?nodeId=201602060) on your smartphone or use browser on your computer on [desktop app](https://alexa.amazon.com/). Navigate to Skills and install [Node-RED skill](https://skills-store.amazon.com/deeplink/dp/B01N0D97FZ?deviceType=app&share&refSuffix=ss_copy). After installing you have to Sign in using account you have created.

## Setting up device
Login in on [Node-RED Alexa Home Skill Bridge](https://alexa-node-red.bm.hardill.me.uk/) and click on devices. Click add device and fill it with following parameters. Name it by yourself.

{{% img-zoom src="screen-4.PNG" %}}

Then click Ok. Go to Alexa app or desktop app and click on Smart Home > Devices > Discover and you should see your device you've just added.

{{% img-zoom src="screen-5.PNG" %}}

Now place an `alexa home` node to flow and double-click on it. You should see setting page. Click on little pencil next to the account and login in with account you've just created in Installing part.

{{% img-zoom src="screen-3.PNG" %}}

If you click on refresh icon, you would be able to choose devices you added on Node-RED Alexa Home Skill Bridge website and click Done.

## Hardware
As I said in the beggining. We will be controling BigClown LED strip. Prepair MicroUSB cable, [Core Module](https://shop.bigclown.com/core-module/) and [Power Module](https://shop.bigclown.com/power-module/) with DC source. Now connect Core Module to the computer via MicroUSB cable and open BigClown Playground on your computer. In Playground navigate to the Firmware section and you should be able to see connected device. Choose bigclownlabs/bcf-radio-powe-controller and version depends on your LED strip you bought. I bought rgbw144 and click Flash firmware.

{{% img-zoom src="screen-6.PNG" %}}

Now open your Devices (on BigClown Hub if you want have Alexa there) and Click start pairing. Assembly hardware like in following video, plug it in to electricity and plug in LED strip.

<iframe width="100%" height="450vw" src="https://www.youtube.com/embed/idxAoc2q6O0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You should see connected device in device section on Hub or your computer. Do not forget to click **Stop pairing**!

{{% img-zoom src="screen-7.PNG" %}}

Now click Functions and you should have placed `alexa home` from previous section.

{{% img-zoom src="screen-8.PNG" %}}

Now click hamburger menu in top right corner > Import > Clipboard and copy there following code:

```
[{"id":"70cb2802.0f4e08","type":"switch","z":"3abb2073.f7b74","name":"color switch","property":"payload.hue","propertyType":"msg","rules":[{"t":"eq","v":"0x0","vt":"str"},{"t":"eq","v":"0x78","vt":"str"},{"t":"eq","v":"0xf0","vt":"str"}],"checkall":"true","repair":false,"outputs":3,"x":450,"y":260,"wires":[["1c18841e.37453c"],["e925ec80.33ace"],["53fd3cc4.1f87a4"]]},{"id":"1c18841e.37453c","type":"change","z":"3abb2073.f7b74","name":"red","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#ff0000\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":650,"y":160,"wires":[["ccaf0313.3f267"]]},{"id":"ccaf0313.3f267","type":"mqtt out","z":"3abb2073.f7b74","name":"","topic":"node/power-controller:0/led-strip/-/color/set","qos":"","retain":"","broker":"29fba84a.b2af58","x":1190,"y":200,"wires":[]},{"id":"e925ec80.33ace","type":"change","z":"3abb2073.f7b74","name":"green","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#008000\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":650,"y":220,"wires":[["ccaf0313.3f267"]]},{"id":"6beeac02.679194","type":"switch","z":"3abb2073.f7b74","name":"off switch","property":"payload","propertyType":"msg","rules":[{"t":"false"}],"checkall":"true","repair":false,"outputs":1,"x":440,"y":340,"wires":[["d0dbd430.16a4d8"]]},{"id":"d0dbd430.16a4d8","type":"change","z":"3abb2073.f7b74","name":"off","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#000000(00)\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":650,"y":340,"wires":[["ccaf0313.3f267"]]},{"id":"53fd3cc4.1f87a4","type":"change","z":"3abb2073.f7b74","name":"blue","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#0000ff\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":650,"y":280,"wires":[["ccaf0313.3f267"]]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

{{% img-zoom src="screen-9.PNG" %}}

Connected with your node to functions you imported and deploy. You have to wait 5 seconds until alexa plugin connects to servers and than say "Alexa, turn [your device] to red". That's it!

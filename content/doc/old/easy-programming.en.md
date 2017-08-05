# Easily Program your Home Automation

## What is this project about?

For a long time I dreamed about my own home automation.
But the hardware...
I just prefer programming new features and integrating with other services.
So it was great when Arduino, ESP8266  and similar appeared on the scene.

Well, now with BigClown it is even better because it solves things, that are unsolved in Arduino - ensures that the units will run on batteries for a reasonable amount of time and it provides full radio stack including security.
On Linux side we use Python and Node.js to implement high-level behaviour of home automation.

That's why I've prepared this project which will help you to understand how to create these scripts.
And if you do not want to bother with coding, I'll show you a nice tool Node-RED which allows to draft the functionality visually.

I'll demonstrate how to:

* Make the LED light  flash in case it rains in London, for example
* Visualize measured data thanks to Node-RED plugin
* Turn on the LED on the Core Module using Python once the pre-defined values have been exceeded 
* Tweet the temperature and humidity through Node-RED 

## How to do it…

### Buy a discounted [Basic Wireless Set](https://shop.bigclown.com/products/basic-wireless-set)

### Assembly hardware 

### Setup a Raspberry Pi

You can use preconfigured Raspberry Pi from BigClown, but feel free to use your own, as long as you have Raspbian Jessie.

#### Preconfigured Raspberry Pi

Perform an upgrade and install Node-RED:

  `sudo apt update && sudo apt upgrade`
  `sudo npm install -g node-red`

#### You own Raspberry Pi

* Add BigClown repositiry
* Install an actual version of node.js:

  `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`

  `sudo apt install -y nodejs`

* Install Node-RED `sudo npm install -g node-red`
* Install MQTT broker `sudo apt install mosquitto mosquitto-clients`
* Install a gateway which serves communication between MQTT and units

  `sudo apt install bc-workroom-gateway`

Connect to Raspberry Pi.


### Firmware

It's always reccomended to upgrade a firmware on your Core Modules. If you want to perform an upgrade trough your PC, please follow instructions [here](https://doc.bigclown.com/core-module-flashing.html). Or you can use Raspberry Pi like me...

#### Upgrade through Raspberry Pi

* Install a tool for an upgrade

  `sudo apt install dfu-util`

* Download actual version of the firmware

  `wget "https://docs.google.com/uc?export=download&id=0B5pXL_JAACMvVkNRT2dPd1VJRlE" -O bc-workroom-remote.binary`

  `wget "https://docs.google.com/uc?export=download&id=0B5pXL_JAACMvM284WW9sSFNCWkE" -O bc-workroom-base.binary`

* Get know what 'dfu mode' is [here](https://doc.bigclown.com/core-module-flashing.html)

* Connect Remote unit, switch it to the dfu mode and install new firmware

  `sudo dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D bc-workroom-remote.binary`

* Make the same with a Base unit

  `sudo dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D bc-workroom-base.binary`

### Base and Remote units pairing

* Hold the right button on a Base unit untill LED starts blinking
* Hold the right button on a Remote unit untill LED starts blinking
* Try press button on a Remote unit and LED on on a Base unit should turn on or off

### Send and receive few test messages

#### Turn LED on
`mosquitto_pub -t "nodes/base/light/-/set" -m '{"state": true}'`

#### Turn LED off
`mosquitto_pub -t "nodes/base/light/-/set" -m '{"state": false}'`

#### Get messages from Remote unit
`mosquitto_sub -v -t 'nodes/remote/#'`

> **Note:** It will take a while, data are sent every 30 seconds and you will see something like this:
> `nodes/remote/thermometer/i2c0-49 {"temperature": [24.18, "\u2103"]}`

> `nodes/remote/humidity-sensor/i2c0-40 {"relative-humidity": [32.0, "%"]}`

**If you got here, then everything works fine and we can pass to more interesting tasks.**

### Write simple Python script

Your Python script will receive data from wireless temperature and humidity sensors and will turn on the LED on the Core Module once the pre-defined values have been exceeded.

```python
#!/usr/bin/env python3
import json
import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc):
    print('Connected to MQTT broker (code %s)', rc)

    for topic in ('nodes/remote/thermometer/i2c0-49', 'nodes/remote/humidity-sensor/i2c0-40'):
        print('subscribe %s', topic)
        client.subscribe(topic)

def on_message(client, userdata, msg):
    payload = json.loads(msg.payload.decode('utf-8'))

    print(msg.topic, payload)

    if msg.topic == 'nodes/remote/thermometer/i2c0-49':
        userdata['temperature'] = payload['temperature'][0]

    if msg.topic == 'nodes/remote/humidity-sensor/i2c0-40':
        userdata['relative-humidity'] = payload['relative-humidity'][0]

    state = False
    if userdata['temperature'] > 20 or userdata['relative-humidity'] > 30:
        state = True

    client.publish('nodes/base/light/-/set', json.dumps({'state': state}))

def main():
    userdata = {'temperature': 0, 'relative-humidity': 0}
    client = mqtt.Client(userdata = userdata)
    client.on_connect = on_connect
    client.on_message = on_message

    client.connect('localhost', keepalive=10)

    client.loop_forever()


if __name__ == '__main__':
    main()
```

### Tweet the temperature and humidity through Node-RED

1. Run Node-RED
`node-red-pi`

2. In your broswer opne a new tab and insert URL **http://ip-of-your-raspberry:1880**

3. On the upper right corner click on menu > import > clipboard and insert following text:

  ```json
  [{"id":"92298281.d0ca5","type":"tab","label":"Twitter(Temperature and humidity)"},{"id":"2d1d3d32.b2d7d2","type":"mqtt in","z":"92298281.d0ca5","name":"thermometer","topic":"nodes/remote/thermometer/+","qos":"2","broker":"fc8241ff.e69d68","x":110,"y":100,"wires":[["65e5412e.ef424"]]},{"id":"2d5a3b21.61043c","type":"function","z":"92298281.d0ca5","name":"text","func":"var text = \"Kancelář\";\n\nif (msg.payload[\"temperature\"]) {\n    text += \" teplota: \" + \n    msg.payload[\"temperature\"][0] + \n    msg.payload[\"temperature\"][1] ;\n}\n\nif (msg.payload[\"relative-humidity\"]) {\n    text += \" humidity: \" +\n    msg.payload[\"relative-humidity\"][0] +\n    msg.payload[\"relative-humidity\"][1];\n}\n\nmsg.payload = text;\nreturn msg;","outputs":1,"noerr":0,"x":790,"y":160,"wires":[["8ec0d340.85b338","557fae8c.a8c028"]]},{"id":"8ec0d340.85b338","type":"debug","z":"92298281.d0ca5","name":"","active":true,"console":"false","complete":"true","x":970,"y":220,"wires":[]},{"id":"557fae8c.a8c028","type":"twitter out","z":"92298281.d0ca5","twitter":"","name":"Tweet","x":970,"y":160,"wires":[]},{"id":"742fb418.b09dfc","type":"join","z":"92298281.d0ca5","name":"","mode":"custom","build":"merged","property":"payload","propertyType":"msg","key":"topic","joiner":"\\n","timeout":"5","count":"2","x":450,"y":160,"wires":[["17ff364d.4d7c82"]]},{"id":"2448519.8315d2e","type":"mqtt in","z":"92298281.d0ca5","name":"humidity-sensor","topic":"nodes/remote/humidity-sensor/+","qos":"2","broker":"fc8241ff.e69d68","x":100,"y":240,"wires":[["221f12cf.db5476"]]},{"id":"65e5412e.ef424","type":"json","z":"92298281.d0ca5","name":"","x":250,"y":100,"wires":[["742fb418.b09dfc"]]},{"id":"221f12cf.db5476","type":"json","z":"92298281.d0ca5","name":"","x":250,"y":240,"wires":[["742fb418.b09dfc"]]},{"id":"17ff364d.4d7c82","type":"delay","z":"92298281.d0ca5","name":"","pauseType":"rate","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"15","rateUnits":"minute","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":true,"x":620,"y":160,"wires":[["2d5a3b21.61043c"]]},{"id":"fc8241ff.e69d68","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"30","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
  ```
So you have imported a flow, which will tweet every 5 minutes message about temperature and humidity.


### Visualize measured data thanks to Node-RED plugin

* Install a dashboard `sudo npm install -g node-red-dashboard`

* On the upper right corner click on menu > import > clipboard, choose new flow and insert following text:

  ```json
  [{"id":"374dd21f.fd4c7e","type":"tab","label":"Dashboard"},{"id":"9afb76b1.23b218","type":"function","z":"374dd21f.fd4c7e","name":"relative-humidity","func":"msg.payload = JSON.parse(msg.payload);\nif (!msg.payload[\"relative-humidity\"]) return;\nmsg.payload = msg.payload[\"relative-humidity\"][0]\nreturn msg;","outputs":1,"noerr":0,"x":360,"y":180,"wires":[["ddbbf7fd.bddbf8","d22890b7.39829"]]},{"id":"f9d7b6c7.66c898","type":"function","z":"374dd21f.fd4c7e","name":"temperature","func":"msg.payload = JSON.parse(msg.payload);\nif (!msg.payload[\"temperature\"]) return;\nmsg.payload = msg.payload[\"temperature\"][0]\nreturn msg;","outputs":1,"noerr":0,"x":350,"y":100,"wires":[["726bcafb.0f5814","a36a4bff.393538"]]},{"id":"ddbbf7fd.bddbf8","type":"ui_gauge","z":"374dd21f.fd4c7e","name":"","group":"d5b24428.bc1088","order":0,"width":0,"height":0,"gtype":"gage","title":"","label":"%","format":"{{value}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"x":650,"y":160,"wires":[]},{"id":"d22890b7.39829","type":"ui_chart","z":"374dd21f.fd4c7e","name":"","group":"d5b24428.bc1088","order":0,"width":0,"height":0,"label":"","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","ymin":"1","ymax":"100","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"604800","cutout":0,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"x":650,"y":200,"wires":[[],[]]},{"id":"726bcafb.0f5814","type":"ui_gauge","z":"374dd21f.fd4c7e","name":"","group":"4f2bc493.ffa5fc","order":0,"width":0,"height":0,"gtype":"donut","title":"","label":"units","format":"{{value}}","min":"-20","max":"100","colors":["#00b500","#e6e600","#ca3838"],"x":650,"y":80,"wires":[]},{"id":"a36a4bff.393538","type":"ui_chart","z":"374dd21f.fd4c7e","name":"","group":"4f2bc493.ffa5fc","order":0,"width":0,"height":0,"label":"","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","ymin":"","ymax":"","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"604800","cutout":0,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"x":650,"y":120,"wires":[[],[]]},{"id":"bb3d38f1.b52118","type":"mqtt in","z":"374dd21f.fd4c7e","name":"thermometer","topic":"nodes/remote/thermometer/+","qos":"2","broker":"fc8241ff.e69d68","x":110,"y":100,"wires":[["f9d7b6c7.66c898"]]},{"id":"22fc1811.50e798","type":"mqtt in","z":"374dd21f.fd4c7e","name":"humidity-sensor","topic":"nodes/remote/humidity-sensor/+","qos":"2","broker":"fc8241ff.e69d68","x":120,"y":180,"wires":[["9afb76b1.23b218"]]},{"id":"9743d089.910a2","type":"mqtt in","z":"374dd21f.fd4c7e","name":"led","topic":"nodes/base/light/-","qos":"2","broker":"fc8241ff.e69d68","x":90,"y":260,"wires":[["72ac25fe.5e788c"]]},{"id":"72ac25fe.5e788c","type":"function","z":"374dd21f.fd4c7e","name":"state","func":"msg.payload = JSON.parse(msg.payload)[\"state\"];\nmsg.topic = \"nodes/base/light\";\nreturn msg;","outputs":1,"noerr":0,"x":330,"y":260,"wires":[["6e0a84f3.eb41fc"]]},{"id":"6e0a84f3.eb41fc","type":"ui_switch","z":"374dd21f.fd4c7e","name":"","label":"Led","group":"497f7863.2a9dd8","order":0,"width":0,"height":0,"passthru":true,"topic":"","style":"","onvalue":"true","onvalueType":"bool","onicon":"","oncolor":"","offvalue":"false","offvalueType":"bool","officon":"","offcolor":"","x":650,"y":240,"wires":[["ec03a7b3.144968"]]},{"id":"ec03a7b3.144968","type":"function","z":"374dd21f.fd4c7e","name":"{state: msg.payload}","func":"msg.payload = {state: msg.payload}\nreturn msg;","outputs":1,"noerr":0,"x":900,"y":260,"wires":[["db2322ee.709bc"]]},{"id":"db2322ee.709bc","type":"mqtt out","z":"374dd21f.fd4c7e","name":"led set","topic":"nodes/base/light/-/set","qos":"","retain":"","broker":"fc8241ff.e69d68","x":1130,"y":260,"wires":[]},{"id":"d5b24428.bc1088","type":"ui_group","z":"","name":"Vlhkost","tab":"663e87fd.e4e8d8","order":1,"disp":true,"width":"6"},{"id":"4f2bc493.ffa5fc","type":"ui_group","z":"","name":"Teplota","tab":"663e87fd.e4e8d8","order":2,"disp":true,"width":"6"},{"id":"fc8241ff.e69d68","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"30","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"497f7863.2a9dd8","type":"ui_group","z":"","name":"Base","tab":"663e87fd.e4e8d8","order":3,"disp":true,"width":"6"},{"id":"663e87fd.e4e8d8","type":"ui_tab","z":"","name":"Kancl","icon":"dashboard"}]
  ```

* Take a look on a dashboard with measured data **http://ip-of-your-raspberry:1880/ui**

### Make the LED light flash in case it rains in London and visualise wheather information on your dashboard.
Maybe it's a crazy idea, but you can see unlimited possibilities of your home automation :-)

* Install **openweathermap** `sudo npm install -g node-red-node-openweathermap`

* Sign up at **https://openweathermap.org/appid**, get **api key** and enter this key to openweathermap, set a city to **London** and country to **GB**

* On the upper right corner click on menu > import > clipboard, choose new flow and insert following text:
  ```json
  {"id":"e72e5e5c.0d2bc","type":"tab","label":"Weather"},{"id":"2bc6a772.07e128","type":"openweathermap in","z":"e72e5e5c.0d2bc","name":"","lon":"","lat":"","city":"London","country":"UK","language":"en","x":180,"y":120,"wires":[["40be2a63.8a72f4","d5f0d2ef.066ea","5ab2a431.0d3c6c"]]},{"id":"40be2a63.8a72f4","type":"function","z":"e72e5e5c.0d2bc","name":"prsi?","func":"return {topic:\"prsi\", \npayload: msg.payload.weather == \"Rain\"};","outputs":1,"noerr":0,"x":510,"y":220,"wires":[["d5f0d2ef.066ea","4a53c279.bb0ffc","fc86f110.87b1f"]]},{"id":"d5f0d2ef.066ea","type":"debug","z":"e72e5e5c.0d2bc","name":"","active":true,"console":"false","complete":"true","x":750,"y":200,"wires":[]},{"id":"5ab2a431.0d3c6c","type":"ui_template","z":"e72e5e5c.0d2bc","group":"5c9f8529.e22d0c","name":"widget na ui","order":0,"width":"6","height":"3","format":"<div>\n    <img ng-src=\"http://openweathermap.org/img/w/{{msg.data.weather[0].icon}}.png\" />\n    {{msg.payload.description}}\n</div>\n","storeOutMessages":true,"fwdInMessages":true,"x":770,"y":40,"wires":[[]]},{"id":"4a53c279.bb0ffc","type":"ui_switch","z":"e72e5e5c.0d2bc","name":"","label":"prší ?","group":"5c9f8529.e22d0c","order":0,"width":0,"height":0,"passthru":true,"topic":"","style":"","onvalue":"true","onvalueType":"bool","onicon":"","oncolor":"","offvalue":"false","offvalueType":"bool","officon":"","offcolor":"","x":750,"y":100,"wires":[[]]},{"id":"53170763.536f68","type":"inject","z":"e72e5e5c.0d2bc","name":"Test button","topic":"","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"x":360,"y":360,"wires":[["fc86f110.87b1f"]]},{"id":"211f12d5.f9ca8e","type":"mqtt out","z":"e72e5e5c.0d2bc","name":"led set","topic":"nodes/base/light/-/set","qos":"","retain":"","broker":"fc8241ff.e69d68","x":1010,"y":360,"wires":[]},{"id":"fc86f110.87b1f","type":"function","z":"e72e5e5c.0d2bc","name":"pulses generator","func":"if (msg.payload === false) return;\n\nif (msg.cnt == undefined) {\n    msg.cnt = 20;\n}\nif (msg.cnt < 0) return;\nmsg.cnt--;\nmsg.payload = {state: msg.cnt % 2 == 0}\nreturn msg;","outputs":1,"noerr":0,"x":780,"y":360,"wires":[["5056d513.2a21cc","211f12d5.f9ca8e"]]},{"id":"5056d513.2a21cc","type":"delay","z":"e72e5e5c.0d2bc","name":"","pauseType":"delay","timeout":"500","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":770,"y":500,"wires":[["fc86f110.87b1f"]]},{"id":"5c9f8529.e22d0c","type":"ui_group","z":"","name":"London","tab":"663e87fd.e4e8d8","order":4,"disp":true,"width":"6"},{"id":"fc8241ff.e69d68","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"30","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"663e87fd.e4e8d8","type":"ui_tab","z":"","name":"Kancl","icon":"dashboard"}]
  ```

![](images/easy-programming/twitter.png)

![](images/easy-programming/dashboard.png)

![](images/easy-programming/pocasi.png)

![](images/easy-programming/ui.png)

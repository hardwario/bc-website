# Jednoduché programování domácí automatizace

## O čem projekt je a co ti přinese

Dlouhou dobu jsem snil o tom, že si postavím vlastní automatizaci.
Ale ten hardware...
Já prostě raději programuji a integruji.
Takže bylo super, když se objevilo Arduino, esp8266 a vše okolo.

No a teď s BigClownem to je ještě lepší, protože řeší věci v Arduinu neřešené - zajišťuje aby mi jednotky běžely na baterky nějakou rozumnou dobu a aby byla komunikace a vlastně celý systém bezpečný.
Funkčnost systému a závislosti se řeší pomocí skriptů v Pythonu nebo Node.js.

Proto jsem připravil tento projekt, který ti pomůže pochopit způsob vytváření těchto skriptů.
A pokud se nechceš trápit psaním, tak ti ukážu bezva nástroj NodeRED, který si kód píše sám.

Ukáži ti, jak:

* Pythonem při překročení nastavené meze rozsvítíme LEDku na Core Module
* Pes Node RED tweetovat teplotu a vlhkost z bezdrátového čidla
* Rozblikáme LEDku v případě, když někde ve světě prší
* Pomocí pluginu do Node RED si zobrazíme měřená data

## Jak na to...

### Kup si zvýhodněný [Basic Wireless Set](https://obchod.bigclown.cz/products/basic-wireless-set)

### Poskládej si jednotky Base a Remote

### Zprovozni si Raspberry Pi

Můžeš použít předpřipravené BigClown Raspberry Pi, nebo použij své, pokud na něm máš Raspbian Jessie.

#### Předpřipravené Raspberry Pi

Mělo by ti stačit ho aktualizovat a nainstalovat Node-RED těmito příkazy:

  `sudo apt update && sudo apt upgrade`
  `sudo npm install -g node-red`

#### Vlastní Raspberry Pi

* Přidej si repozitář BigClown
* Nainstaluj si aktuální verzi node.js pomocí těchto příkazů

  `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`

  `sudo apt install -y nodejs`

* Nainstaluj si Node-RED `sudo npm install -g node-red`
* Nainstaluj si MQTT broker `sudo apt install mosquitto mosquitto-clients`
* Nainstaluj si gateway sloužící pro komunikaci mezi MQTT a jednotkou

  `sudo apt install bc-workroom-gateway`

Připoj se na Raspberry Pi.


### Firmware

Je dobré mít vždy vše aktuální, takže si zaktualizujeme firmware, můžeš k tomu použít vlastní počítač pak postupuj dle návodu [zde](https://doc.bigclown.cz/core-module-flashing.html), nebo k tomu využít Raspberry jako já.

#### Aktualizace přes Raspberry Pi

* Nainstaluj si nástroj pro aktualizaci

  `sudo apt install dfu-util`

* Stáhni si aktuální firmware

  * přímo z repozitáře [https://github.com/bigclownlabs/bcp-wireless-circus/releases/latest](https://github.com/bigclownlabs/bcp-wireless-circus/releases/latest) jsou to soubory firmware-remote.bin a firmware-base.bin

  * nebo pomocí těchto příkazů

    `wget $(wget "https://api.github.com/repos/bigclownlabs/bcp-wireless-circus/releases/latest" -q -O - | grep browser_download_url | grep base.bin | head -n 1 | cut -d '"' -f 4)`

    `wget $(wget "https://api.github.com/repos/bigclownlabs/bcp-wireless-circus/releases/latest" -q -O - | grep browser_download_url | grep remote.bin | head -n 1 | cut -d '"' -f 4)`

* Přečti si co je dfu mód [zde](https://doc.bigclown.cz/core-module-flashing.html#nahrávání-programu-přes-usb-dfu-bootloader)

* Připoj jednotku Remote, přepni jí do dfu módu a nahraj nový firmware

  `sudo dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware-remote.bin`

* Proveď to stejné s Base jednotkou

  `sudo dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware-base.bin`

### Párování Base s Remote

* Podrž pravé tlačítko na Base dokud nezačne dioda blikat
* Podrž pravé tlačítko na Remote dokud nezačne dioda blikat
* Zkoušej klikat na tlačítko Remote jednotky a na Base jednotce by měla podle toho svítit či nesvítit dioda

### Pošli si a přijmi pár testovacích zpráv

#### Rozsvícení diody
`mosquitto_pub -t "nodes/base/light/-/set" -m '{"state": true}'`

#### Zhasnutí diody
`mosquitto_pub -t "nodes/base/light/-/set" -m '{"state": false}'`

#### Zachycení zpráv z Remote jednotky
`mosquitto_sub -v -t 'nodes/remote/#'`

> **Poznámka:** Chce to chvilku trpělivosti data chodí jednou za 30s až dorazí uvidíš něco jako
> `nodes/remote/thermometer/i2c0-49 {"temperature": [24.18, "\u2103"]}`

> `nodes/remote/humidity-sensor/i2c0-40 {"relative-humidity": [32.0, "%"]}`

**Pokud ses dostal až sem, tak vše funguje jak má a můžeme se posunout k zajímavějším úlohám.**

### Napiš si v Pythonu jednoduchý skript

Napiš si v Pythonu skript, který přijme přes MQTT data z bezdrátového čidla teploty a vlhkosti a rozsvítí LEDku, když jedna z hodnot přeleze nastavenou mez.

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

### Pomocí Node-RED zatvítuj teplotu a vlhkost

1. Spusť si Node-RED příkazem
`node-red-pi`

2. V prohlížeči si otevři novou záložku a zadej URL **http://ip-tveho-raspberry:1880**

3. Vpravo nahoře klikni na menu > import > clipboard a vlož následující text:

{% raw %}
  ```json
  [{"id":"92298281.d0ca5","type":"tab","label":"Twitter(Teplota a vlhkost)"},{"id":"2d1d3d32.b2d7d2","type":"mqtt in","z":"92298281.d0ca5","name":"thermometer","topic":"nodes/remote/thermometer/+","qos":"2","broker":"fc8241ff.e69d68","x":110,"y":100,"wires":[["65e5412e.ef424"]]},{"id":"2d5a3b21.61043c","type":"function","z":"92298281.d0ca5","name":"text","func":"var text = \"Kancelář\";\n\nif (msg.payload[\"temperature\"]) {\n    text += \" teplota: \" + \n    msg.payload[\"temperature\"][0] + \n    msg.payload[\"temperature\"][1] ;\n}\n\nif (msg.payload[\"relative-humidity\"]) {\n    text += \" vlhkost: \" +\n    msg.payload[\"relative-humidity\"][0] +\n    msg.payload[\"relative-humidity\"][1];\n}\n\nmsg.payload = text;\nreturn msg;","outputs":1,"noerr":0,"x":790,"y":160,"wires":[["8ec0d340.85b338","557fae8c.a8c028"]]},{"id":"8ec0d340.85b338","type":"debug","z":"92298281.d0ca5","name":"","active":true,"console":"false","complete":"true","x":970,"y":220,"wires":[]},{"id":"557fae8c.a8c028","type":"twitter out","z":"92298281.d0ca5","twitter":"","name":"Tweet","x":970,"y":160,"wires":[]},{"id":"742fb418.b09dfc","type":"join","z":"92298281.d0ca5","name":"","mode":"custom","build":"merged","property":"payload","propertyType":"msg","key":"topic","joiner":"\\n","timeout":"5","count":"2","x":450,"y":160,"wires":[["17ff364d.4d7c82"]]},{"id":"2448519.8315d2e","type":"mqtt in","z":"92298281.d0ca5","name":"humidity-sensor","topic":"nodes/remote/humidity-sensor/+","qos":"2","broker":"fc8241ff.e69d68","x":100,"y":240,"wires":[["221f12cf.db5476"]]},{"id":"65e5412e.ef424","type":"json","z":"92298281.d0ca5","name":"","x":250,"y":100,"wires":[["742fb418.b09dfc"]]},{"id":"221f12cf.db5476","type":"json","z":"92298281.d0ca5","name":"","x":250,"y":240,"wires":[["742fb418.b09dfc"]]},{"id":"17ff364d.4d7c82","type":"delay","z":"92298281.d0ca5","name":"","pauseType":"rate","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"15","rateUnits":"minute","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":true,"x":620,"y":160,"wires":[["2d5a3b21.61043c"]]},{"id":"fc8241ff.e69d68","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"30","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
  ```
{% endraw %}

Tímto jsi naimportoval flow, který každých 5 minut tvítne zprávu o teplotě a vlhkosti.

### Pomocí Node-RED si graficky zobraz naměřená data

* Doinstaluj si `sudo npm install -g node-red-dashboard`

* Vpravo nahoře klikni na menu > import > clipboard, překliknout na new flow a vlož následující text:

{% raw %}
  ```json
  [{"id":"bf61818.514e18","type":"tab","label":"Dashboard"},{"id":"7780645a.781c7c","type":"function","z":"bf61818.514e18","name":"relative-humidity","func":"msg.payload = JSON.parse(msg.payload);\nif (!msg.payload[\"relative-humidity\"]) return;\nmsg.payload = msg.payload[\"relative-humidity\"][0]\nreturn msg;","outputs":1,"noerr":0,"x":360,"y":180,"wires":[["896677e1.a84758","b694a808.9b52c8"]]},{"id":"d53acce4.4ace7","type":"function","z":"bf61818.514e18","name":"temperature","func":"msg.payload = JSON.parse(msg.payload);\nif (!msg.payload[\"temperature\"]) return;\nmsg.payload = msg.payload[\"temperature\"][0]\nreturn msg;","outputs":1,"noerr":0,"x":350,"y":100,"wires":[["10af774.8dcfd89","b6839d20.1df83"]]},{"id":"896677e1.a84758","type":"ui_gauge","z":"bf61818.514e18","name":"","group":"3f3e3327.0ae45c","order":0,"width":0,"height":0,"gtype":"gage","title":"","label":"%","format":"{{value | number:1}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":650,"y":160,"wires":[]},{"id":"b694a808.9b52c8","type":"ui_chart","z":"bf61818.514e18","name":"","group":"3f3e3327.0ae45c","order":0,"width":0,"height":0,"label":"","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","ymin":"1","ymax":"100","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"604800","cutout":0,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"x":650,"y":200,"wires":[[],[]]},{"id":"10af774.8dcfd89","type":"ui_gauge","z":"bf61818.514e18","name":"","group":"b1223209.74611","order":0,"width":0,"height":0,"gtype":"donut","title":"","label":"units","format":"{{value | number:1}}","min":"-20","max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":650,"y":80,"wires":[]},{"id":"b6839d20.1df83","type":"ui_chart","z":"bf61818.514e18","name":"","group":"b1223209.74611","order":0,"width":0,"height":0,"label":"","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","ymin":"","ymax":"","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"604800","cutout":0,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"x":650,"y":120,"wires":[[],[]]},{"id":"79fb247a.ce95ac","type":"mqtt in","z":"bf61818.514e18","name":"thermometer","topic":"nodes/remote/thermometer/+","qos":"2","broker":"3bb67a6c.879b46","x":110,"y":100,"wires":[["d53acce4.4ace7"]]},{"id":"69fae82.5f8de18","type":"mqtt in","z":"bf61818.514e18","name":"humidity-sensor","topic":"nodes/remote/humidity-sensor/+","qos":"2","broker":"3bb67a6c.879b46","x":120,"y":180,"wires":[["7780645a.781c7c"]]},{"id":"345824c8.11f23c","type":"mqtt in","z":"bf61818.514e18","name":"led","topic":"nodes/base/light/-","qos":"2","broker":"3bb67a6c.879b46","x":90,"y":260,"wires":[["e8b334f5.55d908"]]},{"id":"e8b334f5.55d908","type":"function","z":"bf61818.514e18","name":"state","func":"msg.payload = JSON.parse(msg.payload)[\"state\"];\nmsg.topic = \"nodes/base/light\";\nreturn msg;","outputs":1,"noerr":0,"x":330,"y":260,"wires":[["b4ebd801.96f088"]]},{"id":"b4ebd801.96f088","type":"ui_switch","z":"bf61818.514e18","name":"","label":"Led","group":"922c5818.f34ae8","order":0,"width":0,"height":0,"passthru":true,"decouple":"false","topic":"","style":"","onvalue":"true","onvalueType":"bool","onicon":"","oncolor":"","offvalue":"false","offvalueType":"bool","officon":"","offcolor":"","x":650,"y":240,"wires":[["1497df6f.1f5601"]]},{"id":"1497df6f.1f5601","type":"function","z":"bf61818.514e18","name":"{state: msg.payload}","func":"msg.payload = {state: msg.payload}\nreturn msg;","outputs":1,"noerr":0,"x":900,"y":260,"wires":[["bc54b999.318ff8"]]},{"id":"bc54b999.318ff8","type":"mqtt out","z":"bf61818.514e18","name":"led set","topic":"nodes/base/light/-/set","qos":"","retain":"","broker":"3bb67a6c.879b46","x":1130,"y":260,"wires":[]},{"id":"3f3e3327.0ae45c","type":"ui_group","z":"","name":"Vlhkost","tab":"10ab5edc.069241","order":1,"disp":true,"width":"6"},{"id":"b1223209.74611","type":"ui_group","z":"","name":"Teplota","tab":"10ab5edc.069241","order":2,"disp":true,"width":"6"},{"id":"3bb67a6c.879b46","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"30","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"922c5818.f34ae8","type":"ui_group","z":"","name":"Base","tab":"10ab5edc.069241","order":3,"disp":true,"width":"6"},{"id":"10ab5edc.069241","type":"ui_tab","z":"","name":"Kancl","icon":"dashboard"}]
  ```
{% endraw %}

* Podívej se na grafické zobrazení naměřených hodnot **http://ip-tveho-raspberry:1880/ui**

### Pomocí Node-RED zablikáme LEDkou, pokud začne v Londýně pršet a zároveň si informaci o počasí zobrazíme do ui
Možná je to trochu mimo, ale ukazuje to na nekonečné možnosti dnešní domácí automatizace :-)

* Doinstaluj si **openweathermap** `sudo npm install -g node-red-node-openweathermap`

* Zaregistruj se na **https://openweathermap.org/appid** a získej **api key**, který vlož do komponenty openweathermap, nastav město na **London** a zemi na **GB**

* Vpravo nahoře klikni na menu > import > clipboard, překliknout na new flow a vlož následující text:

{% raw %}
  ```json
  [{"id":"e72e5e5c.0d2bc","type":"tab","label":"Počasí"},{"id":"2bc6a772.07e128","type":"openweathermap in","z":"e72e5e5c.0d2bc","name":"","lon":"","lat":"","city":"London","country":"UK","language":"en","x":180,"y":120,"wires":[["40be2a63.8a72f4","d5f0d2ef.066ea","5ab2a431.0d3c6c"]]},{"id":"40be2a63.8a72f4","type":"function","z":"e72e5e5c.0d2bc","name":"prsi?","func":"return {topic:\"prsi\", \npayload: msg.payload.weather == \"Rain\"};","outputs":1,"noerr":0,"x":510,"y":220,"wires":[["d5f0d2ef.066ea","4a53c279.bb0ffc","fc86f110.87b1f"]]},{"id":"d5f0d2ef.066ea","type":"debug","z":"e72e5e5c.0d2bc","name":"","active":true,"console":"false","complete":"true","x":750,"y":200,"wires":[]},{"id":"5ab2a431.0d3c6c","type":"ui_template","z":"e72e5e5c.0d2bc","group":"5c9f8529.e22d0c","name":"widget na ui","order":0,"width":"6","height":"3","format":"<div>\n    <img ng-src=\"http://openweathermap.org/img/w/{{msg.data.weather[0].icon}}.png\" />\n    {{msg.payload.description}}\n</div>\n","storeOutMessages":true,"fwdInMessages":true,"x":770,"y":40,"wires":[[]]},{"id":"4a53c279.bb0ffc","type":"ui_switch","z":"e72e5e5c.0d2bc","name":"","label":"prší ?","group":"5c9f8529.e22d0c","order":0,"width":0,"height":0,"passthru":true,"topic":"","style":"","onvalue":"true","onvalueType":"bool","onicon":"","oncolor":"","offvalue":"false","offvalueType":"bool","officon":"","offcolor":"","x":750,"y":100,"wires":[[]]},{"id":"53170763.536f68","type":"inject","z":"e72e5e5c.0d2bc","name":"Testovací tlačítko","topic":"","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"x":360,"y":360,"wires":[["fc86f110.87b1f"]]},{"id":"211f12d5.f9ca8e","type":"mqtt out","z":"e72e5e5c.0d2bc","name":"led set","topic":"nodes/base/light/-/set","qos":"","retain":"","broker":"fc8241ff.e69d68","x":1010,"y":360,"wires":[]},{"id":"fc86f110.87b1f","type":"function","z":"e72e5e5c.0d2bc","name":"generátor pulzů","func":"if (msg.payload === false) return;\n\nif (msg.cnt == undefined) {\n    msg.cnt = 20;\n}\nif (msg.cnt < 0) return;\nmsg.cnt--;\nmsg.payload = {state: msg.cnt % 2 == 0}\nreturn msg;","outputs":1,"noerr":0,"x":780,"y":360,"wires":[["5056d513.2a21cc","211f12d5.f9ca8e"]]},{"id":"5056d513.2a21cc","type":"delay","z":"e72e5e5c.0d2bc","name":"","pauseType":"delay","timeout":"500","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":770,"y":500,"wires":[["fc86f110.87b1f"]]},{"id":"5c9f8529.e22d0c","type":"ui_group","z":"","name":"London","tab":"663e87fd.e4e8d8","order":4,"disp":true,"width":"6"},{"id":"fc8241ff.e69d68","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"30","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"663e87fd.e4e8d8","type":"ui_tab","z":"","name":"Kancl","icon":"dashboard"}]
  ```
{% endraw %}

![](images/easy-programming/twitter.png)

![](images/easy-programming/dashboard.png)

![](images/easy-programming/pocasi.png)

![](images/easy-programming/ui.png)

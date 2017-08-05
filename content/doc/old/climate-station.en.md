# Project "Climate Station with LED Thermometer and Dashboard"

<!-- toc -->


## What is this project about

Climate station is one of the basic elements of home automation.
Information about temperature, humidity, atmospheric pressure and CO2 concentration are needed to ensure proper living conditions and the thermal comfort of your home or office.

![](images/climate-station/LED-cable-on.png)

The basis of this project is unit assembled from:

* 1x Base Module
* 1x Power Module with AC adapter
* 1x Core Module
* 1x Humidity Tag
* 1x Barometer Tag
* 1x Lux Meter Tag
* 1x LED Strip


You will also need:

* 1x Raspberry Pi 3 or other Linux-based PC
* PC or notebook with Windows, MacOS or Linux
* Ethernet cable
* LAN router/switch with one available port
* Internet connection

## How to assemble a unit

1. Insert Power Module to Base Module
2. Insert Core Module to Power Module
3. Insert Barometer and Humidity Tags to Power Module's 5-pin sockets
4. Insert Lux Meter Tag to lower right corner of Core Module

![](images/climate-station/clima-station.png)

5. Connect LED Thermometer to Power Module
6. Connect AC adapter to Power Module


## How to install and connect Grafana application

### Update

```
sudo apt update && sudo apt upgrade -y
```

### Firmware

It's always better to have your system updated, so please perform a firmware update first:

* Find more about dfu mode [here](https://doc.bigclown.com/core-module-flashing.html#flashing-firmware-thru-usb-dfu-bootloader)

* if you will use your own PC, then follow these instructions [here](https://doc.bigclown.com/core-module-flashing.html) you will find a firmware here [https://github.com/bigclownlabs/bcp-climate-station/releases/latest](https://github.com/bigclownlabs/bcp-climate-station/releases/latest), LED Thermometer has 72 diodes, so download firmware-72pixel.bin

* if you will use Raspberry Pi, then download the latest version of firmware-72pixel.bin and upload it to Core Module with these commands:
  ```
  sudo apt install dfu-util wget
  wget $(wget "https://api.github.com/repos/bigclownlabs/bcp-climate-station/releases/latest" -q -O - | grep browser_download_url | grep firmware-72pixel.bin | head -n 1 | cut -d '"' -f 4)
  sudo dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware-72pixel.bin
  ```

#### InfluxDB

```
sudo apt install apt-transport-https
curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
echo "deb https://repos.influxdata.com/debian jessie stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
sudo apt update && sudo apt install influxdb
sudo systemctl daemon-reload
sudo systemctl enable influxdb
sudo systemctl start influxdb
```

If you want to admin influx over http, then in /etc/influxdb/influxdb.conf
uncomment and enable = true a bind-address = ":8083"

#### Grafana

```
sudo apt install adduser libfontconfig -y
```

* rpi

    ```
	wget "https://github.com/fg2it/grafana-on-raspberry/releases/download/v4.1.2/grafana_4.1.2-1487023783_armhf.deb"
	sudo dpkg -i grafana_4.1.2-1487023783_armhf.deb
    ```
* x86-64

    ````
	sudo apt install -y apt-transport-https
	curl -sL https://packagecloud.io/gpg.key | sudo apt-key add -
	echo "deb https://packagecloud.io/grafana/stable/debian/ jessie main" | sudo tee /etc/apt/sources.list.d/grafana.list
	sudo apt update && sudo apt install grafana
    ````

```
sudo systemctl daemon-reload
sudo systemctl enable grafana-server
sudo systemctl start grafana-server
```

### Gateway between USB and MQTT broker

* If you are using our Raspberry Pi or you have downloaded our [bc-raspbian](https://github.com/bigclownlabs/bc-raspbian/releases/latest), then use these commands:

  ```
  sudo systemctl disable bc-workroom-gateway.service
  sudo systemctl stop bc-workroom-gateway.service
  ```

* If you have your own Raspbian, then you have to add our repository:

  ```
  sudo apt install wget
  sudo sh -c 'echo "deb https://repo.bigclown.com/debian jessie main" >/etc/apt/sources.list.d/bigclown.list'
  wget https://repo.bigclown.com/debian/pubkey.gpg -O - | sudo apt-key add -
  sudo apt update && sudo apt upgrade -y
  sudo apt install mosquitto bc-common python3-docopt python3-paho-mqtt python3-serial
  ```

For both cases:
```
sudo apt install mosquitto-clients
wget "https://raw.githubusercontent.com/bigclownlabs/bch-gateway/master/bc-gateway.py" -O bc-gateway
sudo mv bc-gateway /usr/bin/bc-gateway
sudo chmod +x /usr/bin/bc-gateway
wget "https://raw.githubusercontent.com/bigclownlabs/bch-gateway/master/bc-gateway.service" -O "bc-gateway.service"
sudo mv bc-gateway.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl enable bc-gateway.service
sudo systemctl start bc-gateway.service
```

Funcionality test:

* Turn on LED on Core Module
  ```
  mosquitto_pub -t 'node/climate-station/led/-/state/set' -m true
  ```

* Turn off LED on Core Module
  ```
  mosquitto_pub -t 'node/climate-station/led/-/state/set' -m false
  ```

* Turn on relay on Power Module
  ```
  mosquitto_pub -t 'node/climate-station/relay/-/state/set' -m true
  ```
  > **Hint** First aid:
  If relay doesn't work, then check-out if AC/DC Adpater is connected to Power Module

* Turn off relay
  ```
  mosquitto_pub -t 'node/climate-station/relay/-/state/set' -m false
  ```
* Display all MQTT messages (for termination press ctrl+c)
  ```
  mosquitto_sub -v -t '#'
  ```

### Database creation in InfluxDB
```
curl -s "http://localhost:8086/query?q=CREATE+DATABASE+%22node%22&db=_internal"
```
To check out if database was created
```
curl -s "http://localhost:8086/query?q=SHOW+DATABASES&db=_internal" | grep \"node\"
```

### Run service of copying MQTT data to InfluxDB

```
sudo apt install python3-pip
sudo pip3 install influxdb

wget "https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/mqtt_to_influxdb.py" -O mqtt_to_influxdb
sudo mv mqtt_to_influxdb /usr/bin/mqtt_to_influxdb
sudo chmod +x /usr/bin/mqtt_to_influxdb
wget "https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/mqtt_to_influxdb.service" -O mqtt_to_influxdb.service
sudo mv mqtt_to_influxdb.service /etc/systemd/system

sudo systemctl daemon-reload
sudo systemctl enable mqtt_to_influxdb.service
sudo systemctl start mqtt_to_influxdb.service
```

### Grafana settings

* Log in to Grafana [http://ip-raspberry:3000](http://ip-raspberry:3000)  User `admin` and Password `admin`

* Creation of datasource

  * Click on `Add data source` and fill in following values:
    * Name: node
    * Type: InfluxDB
    * Url: http://localhost:8086
    * Database: node

  * Click on `Add`, Grafana will try to connect to InfluxDB - succesful connection will be followed by this announcement  `Data source is working`

* Dashboard import

  * In upper left corner click on Grafana icon and select `Dashboard` and `Import`

  * Download to your PC file with dashboard [https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/grafana-climate-station.json](https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/grafana-climate-station.json)

  * Select option `Upload .json File` and choose downloaded json file. Then select `node` from the list of avalaible datasources (the one we created).

  * Click on `Import`

  * You should see measured data.

  ![](images/climate-station/grafana.png)



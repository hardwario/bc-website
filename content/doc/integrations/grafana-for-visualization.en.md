---
title: "Graphana"
---

[The Graphana](https://grafana.com/) is an HTML based visualisation option for projects. It let's you create nice looking dashboards quicky providing a graphical interface for your sensors, actuators and any other service. It is an itegration point for your projects.

## Prerequsites and dependencies

In order to breathe live into your dashboard you would need some other componets to put everything together:

* **InfluxDB** - a database
* **Mosquitto** - a MQTT broker
* **bc-gateway** - an interconnect between the Core module and the MQTT broker 

> **Note:** some od the componets are installed in a ```culr | bash``` way which is sometimes considered harmfull. Please consider reading some articles about it before continuing ([curl | sudo bash](https://gist.github.com/btm/6700524), [Secure Curl/Bash](https://medium.com/@esotericmeans/the-truth-about-curl-and-installing-software-securely-on-linux-63cd12e7befd))

Here we are assuming that you have Debian, Raspbian or Ubuntu Xenial. The description below might work also on other distributions and/or different versions but the above mentioned was tested.

> **Note:** HW and SW combinations tested __Raspbian Jessie @ Raspberry Pi 3__ and __Ubuntu 16.04 Xenial as LXC @ Turris Omnia__

First you have to install packages that are necessary for later instalations.

```bash
# install dependencies
sudo apt install apt-transport-https curl -y
```

### Installing InfluxDB

The database to store collected data.

In order to install InfluxDB and recognize it's signing key as trusted you have to install that key among the trusted keys.

> *ToDo: check PPA option and/or Docker*

```bash
# one liner curl | sudo ... type
curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
```

Add the Influx as a new repository.

on Debian and/or Raspbian Jessie use:

```
echo "deb https://repos.influxdata.com/debian jessie stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

on Ubuntu 16.04 Xenial use:

```bash
echo "deb https://repos.influxdata.com/ubuntu/ xenial stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

then update packages list and install packages:

```bash
sudo apt update && sudo apt install influxdb
```

when installed, you can start the InfluxDB like:

```bash
sudo systemctl start influxdb
```

> **Note:** If you want to controll/configure the InfluxDB via web interface that you have to update **/etc/influxdb/influxdb.conf** and remove ```#``` in front of **enabled** and **bind-address** and set ``enabled = true`` and ```bind-address = ":8083"```. Then you can acces the web on **http://localhost:8083**. Beware that port 8083 has to be available and not used by other application.

### Mosquitto

The minimalist MQTT broker (see [mosquitto.org](http://mosquitto.org)). The role of this server side piece is to route and distribute messages among the clients (publishers and subscribers). In principle **sensor** tends to be a **publisher** as it is sharing the value of the sensor and **actuator** vice versa serves a role of **subscriber**. Well of course there are **dashboards** and those can be both as they usualy offer way to visualize the value and has button to press to trigger action.

Install the server and client tools for testing.

```bash
sudo apt install mosquitto mosquitto-clients -y
```

## The Grafana

First install dependencies:

```bash
sudo apt install adduser libfontconfig -y
```

Based on your architecture select the appropriate package.

### For ARM CPU (Raspberry Pi a Omnia LXC)

Either manualy download latest version from [LatestGraphana @ ARM](https://github.com/fg2it/grafana-on-raspberry/releases/latest)

or with a help of little trick (finding latest version)

```bash
wget $(wget "https://api.github.com/repos/fg2it/grafana-on-raspberry/releases/latest" -q -O - | grep browser_download_url | grep armhf.deb | head -n 1 | cut -d '"' -f 4) -O grafana.deb
```

Install the deb package.

```bash
sudo dpkg -i grafana.deb
```

> *ToDo: check repository/PPA way*

### On Intel CPU (x86-64/AMD64)

Add the key as trusted for packages.

```bash
curl -sL https://packagecloud.io/gpg.key | \
  sudo apt-key add -
```

Add the repository to your Debian or Ubuntu.

```bash
echo "deb https://packagecloud.io/grafana/stable/debian/ jessie main" | \
  sudo tee /etc/apt/sources.list.d/grafana.list
```

then update packages list and install packages:

```bash
sudo apt update && sudo apt install grafana -y
```

## Systen tidying

Reload the systemd configuration.

```bash
sudo systemctl daemon-reload
```

Enable the Graphana on boot.

```bash
sudo systemctl enable grafana-server
```

Run the Graphana server now (manualy).

```bash
sudo systemctl start grafana-server
```

## Wiring it together

At this moment you have the Graphana up and running as well as the MQTT broker.

### Connect Core Module and Mosquitto

In order to interconnect your Core module with the MQTT you have to install bc-gateway.

Install dependencies, you might have them from steps above.

```bash
sudo apt install apt-transport-https curl -y
```

Add a key from BigClown into trusted keys for packages.

```bash
curl -sL https://repo.bigclown.com/debian/pubkey.gpg | \
  sudo apt-key add -
```

Add the repository of BigClown into repositories.

```bash
echo "deb https://repo.bigclown.com/debian jessie main" | \
  sudo tee /etc/apt/sources.list.d/bigclown.list
```

then update packages list and install packages:

```bash
sudo apt update && sudo apt install bc-gateway
```

Either start the gateway straight away.

```bash
sudo systemctl start bc-gateway.service
```

and/or set it to be started on boot and/or USB plug in/out (fancy feature of *SystemD*).

```bash
sudo systemctl start bc-gateway.service
```

### Interconnect Mosquitto and InfluxDB

Create the database **node** in **InfluxDB** using REST interface.

```bash
curl --data "q=CREATE+DATABASE+%22node%22&db=_internal" \
  http://localhost:8086/query
```

Install python module for influxdb.

```bash
sudo -H pip3 install influxdb
```

Get the python source for the gateway ([mqtt_to_influxdb.py@GitHub](https://github.com/bigclownlabs/bcf-climate-station/blob/master/hub/mqtt_to_influxdb.py)) from MQTT (Mosquitto) to InfluxDB. And make it executable.

```bash
sudo wget "https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/mqtt_to_influxdb.py" \
-O /usr/bin/mqtt_to_influxdb
sudo chmod +x /usr/bin/mqtt_to_influxdb
```

> **Note:** sudo aka root is required because the target directory **/usr/bin/** is only writeable by root.

Download and install from BigClown GitHub new SystemD service describing how to run the MQTT to InfluxDB gateway ([mqtt_to_influxdb.service](https://github.com/bigclownlabs/bcf-climate-station/blob/master/hub/mqtt_to_influxdb.service)).

```bash
sudo sh -c "curl -sL https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/mqtt_to_influxdb.service | \
  sed -e 's/User=bigclown/User=root/' \
  > /etc/systemd/system/mqtt_to_influxdb.service"
```

Reload the SystemD in order to load the service ```mqtt_to_influxdb.service``` you have just created.

```bash
sudo systemctl daemon-reload
```

Enable the service ```mqtt_to_influxdb.service``` on boot.

```bash
sudo systemctl enable mqtt_to_influxdb.service
```

Start it straight away.

```bash
sudo systemctl start mqtt_to_influxdb.service
```

> **Note:** the command above expects that the InfluxDB is running on the port 8086 if not please use your port.

## Make it fly

At first download [grafana-climate-station.json](https://github.com/bigclownlabs/bcf-climate-station/raw/master/hub/grafana-climate-station.json) directly of review it at [GitHub](https://github.com/bigclownlabs/bcf-climate-station/blob/master/hub/grafana-climate-station.json) and get using the [raw](https://github.com/bigclownlabs/bcf-climate-station/raw/master/hub/grafana-climate-station.json) link.


You have to configure the Graphana. Open the Graphana web interface at [http://localhost:3000](http://localhost:3000). Initial user name is **admin** and default password also **admin**.

Next you have to create **data source**. Just click on **Add data source** and fill in:

* **Name:** node
* **Type:** InfluxDB
* **Url:** http://localhost:8086
* **Database:** node

Finish by clicking on **Add**. At this moment the Grapahana tries to connect to the **data source** and reports back ```Data source is working```.

Now we have the data but we want to see them. For that you have to click on the top left icon of the Graphana, select **Dashboard** and then **Import**. Then use the option **Upload** give it the file [grafana-climate-station.json](https://github.com/bigclownlabs/bcf-climate-station/raw/master/hub/grafana-climate-station.json) downloaded before. By that you have the dash board, it needs a data source so choose the **data source "node"** you just have created a minute ago. After clicking final **Import** you can enjoy the values from sensors!

![The Graphana Dashboard](https://doc.bigclown.cz/images/climate-station/grafana.png)

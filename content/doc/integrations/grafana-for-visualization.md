---
title: "Grafana for Visualization"
---

[**Grafana**](https://grafana.com/) is the open platform for beautiful analytics and monitoring. It allows you to create nice looking dashboards that will give you quick insights into your sensor data.

## Requirements

You will need these components to make it work:

* **InfluxDB** - Time-series database

* **Mosquitto** - MQTT broker

* **BigClown Gateway** - Bridge between the **USB Dongle** or **Core Module** in the gateway role and the MQTT broker

{{% note "danger" %}}This documents assumes that you are working with either **Debian**, **Raspbian** or **Ubuntu 16.04** distribution. The description below might work also on other Linux distributions and/or different versions but it has not been tested.{{% /note %}}

{{% note "warning" %}}It has been tested on **Raspberry Pi 3** + **Raspbian Jessie** and **Turris Omnia** + **Ubuntu 16.04** (via LXC container).{{% /note %}}

## Installing Utilities

First, you have to install packages that are necessary for later instalation.

```sh
sudo apt install apt-transport-https curl -y
```

## Installing InfluxDB

The database to store collected data.

In order to install **InfluxDB** and recognize its signing key, you have to put it among the trusted keys.

```sh
curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
```

Add the **InfluxDB** as a new repository.

* On **Debian** and/or **Raspbian Jessie** use:

    ```sh
    echo "deb https://repos.influxdata.com/debian jessie stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
    ```

* On **Ubuntu 16.04** use:

    ```sh
    echo "deb https://repos.influxdata.com/ubuntu/ xenial stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
    ```

Update the package list and install the packages:

```sh
sudo apt update && sudo apt install influxdb
```

Now you can start the **InfluxDB** service:

```sh
sudo systemctl start influxdb
```

## InfluxDB Web Interface

If you want to control and configure **InfluxDB** using the web interface, then you have to update the `/etc/influxdb/influxdb.conf` file:

* Remove `#` in front of `enabled` and `bind-address`.

* Set `enabled = true` and `bind-address = ":8083"`.

Later you will be able to access the web at **http://localhost:8083/**. Of course, the port number 8083 has to be available and not used by any other application.

## Installing Mosquitto

[**Mosquitto**](http://mosquitto.org) is a popular open-source MQTT broker implementation. The role of this service is to route and distribute messages between the clients (**publishers** and **subscribers**).

In principle a **sensor** tends to be a **publisher** as it is sharing its value. On the other hand, an **actuator** normally plays the role of a **subscriber**. Of course, the mix of **publisher** and **subscriber** role for each client is possible. Typically a **dashboard** can visualize data and at the same time it can have some control button, which triggers an action (publishes a message).

Install the server and client tools for testing.

```sh
sudo apt install mosquitto mosquitto-clients -y
```

## Installing Grafana

First install dependencies:

```sh
sudo apt install adduser libfontconfig -y
```

Based on your taget platform, select the appropriate procedure:

* For **Raspberry Pi** and **Omnia LXC**:

    You can manualy download latest version from [**Grafana**](https://github.com/fg2it/grafana-on-raspberry/releases/latest), or you can use the following helper to download it for you:

    ```sh
wget $(wget "https://api.github.com/repos/fg2it/grafana-on-raspberry/releases/latest" -q -O - | grep browser_download_url | grep armhf.deb | head -n 1 | cut -d '"' -f 4) -O grafana.deb
```

    Then install the package:

    ```sh
    sudo dpkg -i grafana.deb
    ```

* For **desktop** (**Ubuntu** and **Debian**):

    Add the key to be trusted:

    ```sh
    curl -sL https://packagecloud.io/gpg.key | sudo apt-key add -
    ```

    Add the repository to the sources:

    ```sh
    echo "deb https://packagecloud.io/grafana/stable/debian/ jessie main" | sudo tee /etc/apt/sources.list.d/grafana.list
    ```

    Then update the package list and install the package:

    ```sh
    sudo apt update && sudo apt install grafana -y
    ```

## Starting Services

Reload the **systemd** configuration:

```bash
sudo systemctl daemon-reload
```

Enable **Grafana** on boot:

```bash
sudo systemctl enable grafana-server
```

Start **Grafana** server (manually):

```bash
sudo systemctl start grafana-server
```

## Installing BigClown Gateway

In order to bridge data from the **USB Dongle** or **Core Module** (in gateway role) to MQTT, you have to install **BigClown Gateway**.

Add the **BigClown** repository into the trusted keys:

```sh
curl -sL https://repo.bigclown.com/debian/pubkey.gpg | sudo apt-key add -
```

Add the **BigClown** repository to the source list:

```sh
echo "deb https://repo.bigclown.com/debian jessie main" | sudo tee  etc/apt/sources.list.d/bigclown.list
```

Update the package list and install the package:

```sh
sudo apt update && sudo apt install bc-gateway
```

Start the **BigClown Gateway** service:

```sh
sudo systemctl start bc-gateway.service
```

## Connect Mosquitto and InfluxDB

Create a database node in **InfluxDB** using REST interface:

```sh
curl --data "q=CREATE+DATABASE+%22node%22&db=_internal" http://localhost:8086/query
```

Install Python module for **InfluxDB**:

```sh
sudo -H pip3 install influxdb
```

Get the Python source for the gateway ([mqtt_to_influxdb.py@GitHub](https://github.com/bigclownlabs/bcf-climate-station/blob/master/hub/mqtt_to_influxdb.py)) from MQTT (Mosquitto) to InfluxDB. And make it executable.

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

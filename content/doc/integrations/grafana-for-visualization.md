---
title: "Grafana for Visualization"
---

[**Grafana**](https://grafana.com/) is the open platform for beautiful analytics and monitoring. It allows you to create a nice looking dashboards that will give you quick insights into your sensor data.

## Requirements

You will need these components to make it work:

* **Debian-based Linux**

* **Mosquitto** - MQTT broker

{{% note "danger" %}}This documents assumes that you are working with either **Debian**, **Raspbian** or **Ubuntu 16.04** distribution. The description below might work also on other Linux distributions and/or different versions but it has not been tested.{{% /note %}}

{{% note "warning" %}}It has been tested on **Raspberry Pi 3** + **Raspbian Jessie** and **Turris Omnia** + **Ubuntu 16.04** (via LXC container).{{% /note %}}

## Installing InfluxDB

The database to store collected data.

1. Install dependency packages:

        sudo apt install apt-transport-https curl -y

2. Add repository key:

        curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -

3. Add repository to source list:

    * On **Debian** and/or **Raspbian** use:

            echo "deb https://repos.influxdata.com/debian jessie stable" | sudo tee /etc/apt/sources.list.d/influxdb.list

    * On **Ubuntu 16.04** use:

            echo "deb https://repos.influxdata.com/ubuntu/ xenial stable" | sudo tee /etc/apt/sources.list.d/influxdb.list

4. Update the package list and install the packages:

        sudo apt update && sudo apt install influxdb

5. Now you can start the **InfluxDB** service:

        sudo systemctl start influxdb


## Installing Grafana

1. Install dependencies:

        sudo apt install adduser libfontconfig -y


2. Based on your taget platform, select the appropriate procedure:

    * For **Raspberry Pi** and **Omnia LXC**:

        1. You can manualy download latest version from [**Grafana**](https://github.com/fg2it/grafana-on-raspberry/releases/latest), or you can use the following helper to download it for you:


                wget $(wget "https://api.github.com/repos/fg2it/grafana-on-raspberry/releases/latest" -q -O - | grep browser_download_url | grep armhf.deb | head -n 1 | cut -d '"' -f 4) -O grafana.deb


        2. Then install the package:


                sudo dpkg -i grafana.deb


    * For **desktop** (**Ubuntu** and **Debian**):

        1. Add repository key:

                curl -sL https://packagecloud.io/gpg.key | sudo apt-key add -


        2. Add repository to source list:

                echo "deb https://packagecloud.io/grafana/stable/debian/ jessie main" | sudo tee /etc/apt/sources.list.d/grafana.list


        3. Then update the package list and install the package:

                sudo apt update && sudo apt install grafana -y


3. Reload the **systemd** configuration:

        sudo systemctl daemon-reload


4. Enable **Grafana** on boot:

        sudo systemctl enable grafana-server

5. Now you can start the **Grafana** server:

        sudo systemctl start grafana-server


## Connect Mosquitto and InfluxDB

1. Install the **Mqtt to InfluxDB**:

        sudo pip3 install --upgrade --no-cache-dir mqtt2influxdb

2. Configuration:

    Open file

        sudo nano /etc/bigclown/mqtt2influxdb.yml

    And paste this:


        mqtt:
          host: 127.0.0.1
          port: 1883

        influxdb:
          host: 127.0.0.1
          port: 8086
          database: node

        points:
          - measurement: temperature
            topic: node/+/thermometer/+/temperature
            fields:
              value: $.payload
            tags:
              id: $.topic[1]
              channel: $.topic[3]

          - measurement: relative-humidity
            topic: node/+/hygrometer/0:4/relative-humidity
            fields:
              value: $.payload
            tags:
              id: $.topic[1]

          - measurement: illuminance
            topic: node/+/lux-meter/0:0/illuminance
            fields:
              value: $.payload
            tags:
              id: $.topic[1]

          - measurement: pressure
            topic: node/+/barometer/0:0/pressure
            fields:
              value: $.payload
            tags:
              id: $.topic[1]

          - measurement: co2
            topic: node/+/co2-meter/-/concentration
            fields:
              value: $.payload
            tags:
              id: $.topic[1]

{{% note "info" %}}In section **tags** you can use text, for example:

tags:

&nbsp;&nbsp;room: bedroom
{{% /note %}}

3. Configuration file test:

        mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml --test

4. Run service:

        pm2 start /usr/bin/python3 --name "mqtt2influxdb" -- /usr/local/bin/mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml


{{% note "info" %}}For show temperatures from database in CSV format use this command:

    influx -database node -execute "select * from temperature;" -format csv
{{% /note %}}

{{% note "info" %}}After change configuration file you must restart service:

    pm2 restart mqtt2influxdb
{{% /note %}}


## Configure the Grafana.

1. Open the Grafana web interface at [**http://localhost:3000/**](http://localhost:3000/) or [**http://hub.local:3000/**](http://hub.local:3000/) or [**http://ip:3000/**](http://ip:3000/) and **Log in**

    * Enter the **User** `admin`

    * Enter the **Password** `admin`

2. Create a **data source**.

    Just click on **Add data source** and:

    * Enter the **Name:** `node`

    * Select the **Type:** `InfluxDB`

    * Enter the **URL:** `http://localhost:8086`

    * Enter the **Database:** `node`

    Finish by clicking on the **Add** button. At this moment Grafana tries to connect to the **data source** and reports back the message `Data source is working`.

    {{% img-zoom src="datasource.png" %}}

3. Download dashboard.json or Copy to clipboard

    <a href="dashboard.json" target="_blank">dashboard.json</a>

4. Import the visualization dashboards, click the **Graphana icon** (at the top left), select **Dashboarts** in the menu, then **Import**

    {{% img-zoom src="menu-import-dashboard.png" %}}

5. Upload .json File or Paste JSON.

6. Select datasourc *node* and click on Import

    {{% img-zoom src="import-dashboard-select-datasource.png" %}}

7. Result for [Wireless Climate Monitor]({{< relref "doc/projects/wireless-climate-monitor.md" >}}) and [Wireless CO2 Monitor]({{< relref "doc/projects/wireless-co2-monitor.md" >}})

    {{% img-zoom src="demo-dashboard.png" %}}


## Related Documents

* [**Raspberry Pi Installation**]({{< relref "doc/tutorials/raspberry-pi-installation.md" >}})

* [**MQTT Protocol**]({{< relref "doc/interfaces/mqtt-protocol.md" >}})

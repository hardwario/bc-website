---
title: "Grafana for Visualization"
menu:
  main:
    parent: 'integrations'
    weight: 10
  doc:
    parent: 'integrations'
    weight: 10
---

[**Grafana**](https://grafana.com/) is an open platform for beautiful analytics and monitoring. It allows you to create a nice looking dashboards that will give you quick insights into your sensor data.

{{% img-zoom src="grafana.png" %}}

## Requirements

You will need these components to make it work:

* **Debian-based Linux**, or **macOS**

* **Mosquitto** - MQTT broker

{{% note "warning" %}}This setup has been tested on:

* **Raspberry Pi 3** + **Raspbian Jessie**

* **Turris Omnia** + **Ubuntu 16.04** (via LXC container)

* **macOS 10.13**{{% /note %}}

## Installing InfluxDB on Linux

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

## Installing Grafana on Linux

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

Continue in the section [**Connect Mosquitto and InfluxDB**]({{< relref "#connect-mosquitto-and-influxdb" >}}).

## Installing InfluxDB on macOS

1. Open the **Terminal** application.

2. Make sure you have [**Homebrew**](https://brew.sh/) installed.

3. Install **InfluxDB**:

        brew install influxdb

4. Enable **InfluxDB** service:

        brew services start influxdb

## Installing Grafana on macOS

1. Open the **Terminal** application.

2. Make sure you have [**Homebrew**](https://brew.sh/) installed.

3. Install **Grafana**:

        brew install grafana

4. Enable **Grafana** service:

        brew services start grafana

## Connect Mosquitto and InfluxDB

1. Install the **MQTT to InfluxDB** service:

        sudo pip3 install --upgrade mqtt2influxdb

2. Create the `/etc/bigclown` directory:

        sudo mkdir /etc/bigclown

2. Open the configuration file:

    {{% note "info" %}}For text editing, we use **nano** editor. You can save changes by pressing key combination `Ctrl + O` and exit editor by pressing `Ctrl + X`.
{{% /note %}}

        sudo nano /etc/bigclown/mqtt2influxdb.yml

3. Paste this snippet to the configuration file:

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

          - measurement: voltage
            topic: node/+/battery/+/voltage
            fields:
              value: $.payload
            tags:
              id: $.topic[1]

          - measurement: button
            topic: node/+/push-button/+/event-count
            fields:
              value: $.payload
            tags:
              id: $.topic[1]
              channel: $.topic[3]

    {{% note "info" %}}In the section **tags** you can your identifiers, e.g.:
    ```
    tags:
        room: bedroom
    ```
    {{% /note %}}

4. Configuration file test:

        mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml --test

5. Start the **MQTT to InfluxDB** service:

        pm2 start `which python3` --name "mqtt2influxdb" -- `which mqtt2influxdb` -c /etc/bigclown/mqtt2influxdb.yml

6. Save the **PM2 state** (so it will start after reboot):

        pm2 save

{{% note "info" %}}If you want to see temperature records from database in CSV format, use this command:

    influx -database node -execute "select * from temperature;" -format csv

{{% /note %}}

{{% note "info" %}}You must restart the service when you change the configuration file:

    pm2 restart mqtt2influxdb

{{% /note %}}

## Configure Grafana

1. Open the Grafana web interface at [**http://localhost:3000/**](http://localhost:3000/) or [**http://hub.local:3000/**](http://hub.local:3000/) or _http://ip:3000/_ and log in:

    * Enter the **User** `admin`

    * Enter the **Password** `admin`

2. Create a **data source**.

    Select **Add data source** and then:

    * Enter the **Name:** `node`

    * Select the **Type:** `InfluxDB`

    * Enter the **URL:** `http://localhost:8086`

    * Enter the **Database:** `node`

    Finish by clicking on the **Add** button. At this moment **Grafana** will try to connect to the **data source** and replies back with the message **Data source is working**.

    {{% img-zoom src="datasource.png" %}}

3. Download `dashboard.json` or copy the content of this file to clipboard:

    <a href="dashboard.json" target="_blank">dashboard.json</a>

4. Import the visualization dashboards, click the **Grafana icon** (top left button), select **Dashboards** in the menu, then choose **Import**:

    {{% img-zoom src="menu-import-dashboard.png" %}}

5. Upload the `dashboard.json` file or paste the JSON from clipboard.

6. Choose **node** as a data source and click on **Import**:

    {{% img-zoom src="import-dashboard-select-datasource.png" %}}

7. Result for [**Wireless Climate Monitor**]({{< relref "/doc/projects/radio-climate-monitor.en.md" >}}) and [**Wireless CO2 Monitor**]({{< relref "/doc/projects/radio-co2-monitor.en.md" >}})

    {{% img-zoom src="demo-dashboard.png" %}}

## Related Documents

* [**Raspberry Pi Installation**]({{< relref "/doc/tutorials/raspberry-pi-installation.en.md" >}})

* [**MQTT Protocol**]({{< relref "/doc/interfaces/mqtt-protocol.en.md" >}})

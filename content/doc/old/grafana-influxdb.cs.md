# Grafana + InfluxDB

<!-- toc -->

## Instalace

Návod je pro distribuci Debian a Raspbian Jessie a Ubuntu Xenial.

Testováno na:

* Raspbian Jessie na Raspberry Pi 3
* Ubuntu Xenial jako LXC kontejner na Turris Omnia

### InfluxDB

* Nainstaluj závislosti:
  ```
  sudo apt install apt-transport-https curl -y
  ```

* Přidání klíče repozitáře:
  ```
  curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
  ```

* Přidání repozitáře:

  * Pro Debian (Raspbian) Jessie:
    ```
    echo "deb https://repos.influxdata.com/debian jessie stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
    ```
  * Pro Ubuntu Xenial:
    ```
    echo "deb https://repos.influxdata.com/ubuntu/ xenial stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
    ```

* Proveď aktualizaci repozitářů a nainstaluj balíček:
  ```
  sudo apt update && sudo apt install influxdb
  ```

* Spustíme:
  ```
  sudo systemctl start influxdb
  ```

  > **Poznámka:** Pokud chceš administrovat InfluxDB přes http tak v `/etc/influxdb/influxdb.conf` odkomentuj a uprav `enabled = true` a `bind-address = ":8083"`.

### Grafana

* Nainstaluj závislosti:
  ```
  sudo apt install adduser libfontconfig -y
  ```

* Vyber si podle architektury:

  * Raspberry Pi a Omnia lxc

    * Stažení deb balíčku (ten ošklivý příkaz si najde poslední release) nebo si jej stáhněte ručně z: [https://github.com/fg2it/grafana-on-raspberry/releases/latest](https://github.com/fg2it/grafana-on-raspberry/releases/latest)
    ```
    wget $(wget "https://api.github.com/repos/fg2it/grafana-on-raspberry/releases/latest" -q -O - | grep browser_download_url | grep armhf.deb | head -n 1 | cut -d '"' -f 4) -O grafana.deb
    ```

    * Instalace
    ```
    sudo dpkg -i grafana.deb
    ```

  * x86-64
    * Přidání klíče repozitáře:
      ```
      curl -sL https://packagecloud.io/gpg.key | sudo apt-key add -
      ```
    * Přidání repozitáře:
      ```
      echo "deb https://packagecloud.io/grafana/stable/debian/ jessie main" | sudo tee /etc/apt/sources.list.d/grafana.list
      ```
    * Proveď aktualizaci repozitářů a nainstaluj balíček:
      ```
      sudo apt update && sudo apt install grafana -y
      ```

* Znovu načti konfiguraci systemd:
  ```
  sudo systemctl daemon-reload
  ```

* Povol spuštění Grafana po bootu:
  ```
  sudo systemctl enable grafana-server
  ```

* Spustíme Grafana server:
  ```
  sudo systemctl start grafana-server
  ```

### MQTT brouker

Existuje jich víc - my používáme Mosquitto:

```
sudo apt install mosquitto mosquitto-clients -y
```

### Gateway mezi USB serial a MQTT brokerem

* Nainstaluj závislosti:
  ```
  sudo apt install apt-transport-https curl -y
  ```

* Přidání klíče repozitáře:
  ```
  curl -sL https://repo.bigclown.com/debian/pubkey.gpg | sudo apt-key add -
  ```

* Přidání repozitáře:
  ```
  echo "deb https://repo.bigclown.com/debian jessie main" | sudo tee /etc/apt/sources.list.d/bigclown.list
  ```

* Proveď aktualizaci repozitářů a nainstaluj balíček:
  ```
  sudo apt update && sudo apt install bc-gateway
  ```

* Pokud nedošlo ke zpuštění po instalaci spustíme, nebo připojíme a odpojíme usb:
  ```
  sudo systemctl start bc-gateway.service
  ```

### Gateway mezi MQTT a InfluxDB

* Vytvoření databáze jménem `node` v InfluxDB:
  ```
  curl --data "q=CREATE+DATABASE+%22node%22&db=_internal" http://localhost:8086/query
  ```

* Nainstaluj závislosti:
  ```
  sudo -H pip3 install influxdb
  ```

* Stažení Gateway z GitHubu:
  ```
  sudo wget "https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/mqtt_to_influxdb.py" -O /usr/bin/mqtt_to_influxdb
  ```

* Stažení a úprava konfiguračního souboru pro systemd:
  ```
  sudo sh -c "curl -sL https://raw.githubusercontent.com/bigclownlabs/bcp-climate-station/master/hub/mqtt_to_influxdb.service | sed -e 's/User=bigclown/User=root/' > /etc/systemd/system/mqtt_to_influxdb.service"
  ```
* Povolíme spuštění:
  ```
  sudo chmod +x /usr/bin/mqtt_to_influxdb
  ```

* Znovu načti konfiguraci systemd:
  ```
  sudo systemctl daemon-reload
  ```

* Zapnuti spuštění Grafana po bootu:
  ```
  sudo systemctl enable mqtt_to_influxdb.service
  ```

* Spustíme Grafana server:
  ```
  sudo systemctl start mqtt_to_influxdb.service
  ```

### Nastavení Grafana

* Připoj se na Grafana [http://<ip>:3000](http://<ip>:3000)  Uživatel `admin` a heslo `admin`

* Vytvoření datasource:

  * Klikneme na `Add data source` a vyplníme následující hodnoty:
    * Name: node
    * Type: InfluxDB
    * Url: http://localhost:8086
    * Database: node

  * Klikneme na `Add`, Grafana se pokusí připojit na InfluxDB - úspěch oznámí takovouto hláškou `Data source is working`.

* Import dashboardu:

  * Vlevo nahoře klikneme na ikonku Grafany, vybereme `Dashboard` a `Import`.

  * Stáhněte si do počítače soubor s dashboardem. [files/grafana-dashboard-wireles-set.json](files/grafana-dashboard-wireles-set.json)

  * Vybereme možnost `Upload .json File` a vybereme stažený JSON file, teď už jen zvolíme `node` ze seznamu dostupných datasource - to je ten, který jsme si před chvílí vytvořili.

  * A klikneme na `Import`.

  * Nyní bys měl vidět naměřené hodnoty.

  ![](images/climate-station/grafana.png)



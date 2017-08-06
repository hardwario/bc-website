---
title: Turris
---

# Update
  Před jakoukoliv instalací doporučuji aktualizovat opkg
  ```
  opkg update
  ```

# Instalace ovladačů
  ```
  opkg install kmod-usb-acm kmod-usb-serial-ftdi
  ```

# MQTT brouker

  Balíček `mosquitto-client` obsahuje velmi užitečné nástroje `mosquitto_sub` a `mosquitto_pub`

  * Instalace
    ```
    opkg install mosquitto mosquitto-client
    ```

  * Zapnuti spuštění po bootu
    ```
    /etc/init.d/mosquitto enable
    ```

  * Spustíme
    ```
    /etc/init.d/mosquitto start
    ```

  * Test
    ```
    mosquitto_pub -t 'hello' -m 'world'
    ```
    Pokud brouker neběží dostanem hlášku `Error: Connection refused`, zkute znovu spustit, případně onidtalovat a znovu naintalovat.

# Gateway mezi USB serial a MQTT brokerem

  * Závislosti
    ```
    opkg install python3 python3-pip
    ```

  * Gateway
    ```
    pip3 install bc-gateway
    ```

  * Test funkčnosti
    ```
    bc-gateway --help
    ```

  * Spuštení bc-gateway jako služby

    * Stažení základní konfigurace pro bc-gateway ve formátu pro uci
      ```
      wget "https://raw.githubusercontent.com/bigclownlabs/bch-usb-gateway/master/turris/bc-gateway.conf" -O /etc/config/bc-gateway
      ```

    * Stažení init souboru
      ```
      wget "https://raw.githubusercontent.com/bigclownlabs/bch-usb-gateway/master/turris/bc-gateway.init" -O /etc/init.d/bc-gateway
      ```

    * Zapnuti spuštění po bootu
      ```
      /etc/init.d/bc-gateway enable
      ```

    * Spustíme
      ```
      /etc/init.d/bc-gateway start
      ```

  * Připojíme usb gateway, nebo usb dongle a zobrazíme si zprávy v mqtt

    ```
    mosquitto_sub -v -t '#'
    ```

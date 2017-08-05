# Blynk - Mobile App Builder

<!-- toc -->

This tutorial will show you how to connect to BigClown.Hub remotely from your smartphone.


## Installation Procedure

1. Install Blynk on your smartphone / tablet.

   > **Note** Just use Google Play or App Store.

2. Run Blynk and select **Create new project**.

   ![](images/blynk/blynk-create-project-1.png)

3. Give it a name (e.g. “bigclown demo”) and select **Generic Board** as a hardware.

   ![](images/blynk/blynk-create-project-2.png)

4. Write down your Auth Token (or let the application to send it to you by e-mail).

   **TODO** Configure Blynk Auth token via MQTT.

5. Create an Menu element for LED.

   Set output as virtual pin V1 (see below for pin assignment).

   ![](images/blynk/blynk-menu-led-1.png)

6. Create selections “on”, “off”, “1 dot”, “2 dot”, and “3 dot” as menu items.

   ![](images/blynk/blynk-menu-led-2.png)

7. Create relay button on pin V19.

   ![](images/blynk/blynk-button-relay.png)

8. Create widgets for your sensors, i.e. humidity, temperature, lux-meter and barometer.

   ![](images/blynk/blynk-value-humidity.png)
   ![](images/blynk/blynk-value-temperature.png)
   ![](images/blynk/blynk-value-lux-meter.png)
   ![](images/blynk/blynk-value-barometer.png)

7. Now you have a working Blynk dashboard.

   ![](images/blynk/blynk-dashboard.png)

> **Tip** If you will contend with busy state of the virtual pin, then you should simply logout and login to Blynk app again.


## Virtual Pin Assignment for Blynk

| Virtual PIN  | Part of topic           | Payload key       | Unit                         |
| ------------ | ----------------------- | ----------------- | ---------------------------- |
| 1            | led/-                   | state             | on, off, 1-dot, 2-dot, 3-dot |
| 2            | thermometer/i2c0-48     | temperature       | °C                           |
| 3            | thermometer/i2c1-48     | temperature       | °C                           |
| 4            | thermometer/i2c0-49     | temperature       | °C                           |
| 5            | thermometer/i2c1-49     | temperature       | °C                           |
| 6            | lux-meter/i2c0-44       | illuminance       | lux                          |
| 7            | lux-meter/i2c1-44       | illuminance       | lux                          |
| 8            | lux-meter/i2c0-45       | illuminance       | lux                          |
| 9            | lux-meter/i2c1-45       | illuminance       | lux                          |
| 10           | barometer/i2c0-60       | pressure          | kPa                          |
| 11           | barometer/i2c0-60       | altitude          | m                            |
| 12           | barometer/i2c1-60       | pressure          | kPa                          |
| 13           | barometer/i2c1-60       | altitude          | m                            |
| 14           | humidity-sensor/i2c0-5f | relative-humidity | %                            |
| 15           | --                      | --                | --                           |
| 16           | humidity-sensor/i2c1-5f | relative-humidity | %                            |
| 17           | --                      | --                | --                           |
| 18           | co2-sensor/i2c0-38      | concentration     | ppm                          |
| 19           | relay/i2c0-3b           | state             | true, false                  |
| 20           | relay/i2c0-3f           | state             | true, false                  |

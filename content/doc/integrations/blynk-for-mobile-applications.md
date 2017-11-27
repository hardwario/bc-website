---
title: Blynk - Mobile App Builder
---

[The Blynk](http://www.blynk.cc/) is a mobile front end builder and signaling relay (MQTT). This let's you quicky create control and display for your IoT things. Here we will guide you the process of putting together the hardware and connecting it to the cloud. The cloud in turn gets interconnected with the project on your phone withing the Blynk app. The local side of the project is hosted on the BigClown Raspian which has all the necessary components prepared for interconnection. When everything will be finished then you would have an ability to turn on and off the relay, switch the LED strip on and off, change the light intensity using slider and also you would be able to watch the temperature (and other values collected) acompanied by graphs.

> **Note:** Blynk also offers the off-line version of the server called [Local blynk server](http://docs.blynk.cc/#blynk-server) with [Github sources](https://github.com/blynkkk/blynk-server). The off-line here stands for **no-Internet** setup, either intentionaly of by environment. It does not meant that you do not need any connectivity. You still have to have **core module** and **USB dongle** with 868MHz radio **Raspberry Pi** with Wi-Fi or Ethernet plugged into Wi-Fi Access point where your phones get's attached to close the loop.

# Setup Blynk app

The very first step needed is to install and configure the application on your mobile device. In order to interconnect things you would have to create account. The Blynk gives you two options either create account by email or use OAuth2 login of Facebook. Decide yourself which is better for you.

> **Note:** If you do not want to share your email, which I would consider quite safe in this case, then just create a testing email account for this purpose.

1. Install Blynk on your device from [Google Play](https://play.google.com/store/apps/details?id=cc.blynk) or [Apple App Store](https://itunes.apple.com/us/app/blynk-iot-for-arduino-rpi-particle-esp8266/id808760481).

2. After starting the app you have to create account. No email confirmation is needed, it is up to you to be careful when filling in the email address, typos might lead to unrecoverable account. The email address is used for token distribution, thus pretty important.

# Create Blynk project

In order to create a UI for your application you have to first create a project. The process of UI creation takes time thus we have made a shortcut for you. You can skip this section if you want to expedite the project creation just by scanning the project definition from QR.

> **Note:** The Blynk is supported by user contribution, in case of this application it is done by in-app purchase of so called energy units. You are given 1000 (thousand) units of energy. You can freely stread that amount across all your projects. By the way it is pretty small amount for any bigger project. If you want to take the shortcut make sure that you have available at least these 1000 energy units in order to clone our app.

![QR](blynk-qr.png)

Virtual Pin Assignment for Blynk

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

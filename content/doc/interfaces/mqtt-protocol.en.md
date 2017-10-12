---
title: MQTT protokol
---

* MQTT je otevřený, jednoduchý a nenáročný protokol pro předávání zpráv mezi klienty prostřednictvím centrálního bodu - brokeru.
* Každá **zpráva** sestává z **tématu (topic)** a **obsahu (payload)**.
* Témata popisují kategorii zprávy.
* Témata používají stromovou strukturu - jednotlivé úrovně jsou odděleny symbolem `/`.
* Vzorové příklady témat: `ložnice/teplota` nebo `kuchyně/světlo/zapnuto`.
* MQTT server se nazývá **broker** a klienti můžou **publikovat (publish)** zprávy a **přihlásit (subscribe)** se k různým tématům.
* Funkcí MQTT serveru je doručovat zprávy od publisherů k subscriberům.
* U subscribe témat se může použít symbol `+` pro přihlášení k odběru zpráv jedné úrovně a symbol `#` pro přihlášení k následujícím úrovním.

  > Symbol `#` se může použít pouze na konci přihlášeného tématu.

  [Více informací o tématech](http://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices)

# Mosquitto MQTT broker

BigClown používá open-source brokera [Mosquitto](https://mosquitto.org). Všechny zprávy jsou předávány skrz MQTT broker. Díky tomu je možné systém snadno rozšiřovat.

Pokud máte zprovozněný Core Module nebo bezdrátovou síť co posílá hodnoty, můžete si nechat vypisovat všechny zprávy s pomocí `mosquitto-cli` příkazů:

```
pi@hub:~ $ mosquitto_sub -t "#" -v
node/836d19821664/thermometer/0:1/temperature 24.69
node/836d19821664/thermometer/0:1/temperature 24.94
node/836d19821664/push-button/-/event-count 5
```

# GUI nástroj pro MQTT zprávy

Pro debugování a diagnostiku můžeš použít nástroj s grafickým uživatelským rozhraním - [Eclipse Paho mqtt-spy](https://github.com/eclipse/paho.mqtt-spy).

> Tento nástroj vyžaduje instalaci JRE 8 na hostovaném stroji.

* Pro více informací o tomto nástroji se podívej zde: https://github.com/eclipse/paho.mqtt-spy/wiki

* Zde si můžeš nástroj stáhnout: https://github.com/eclipse/paho.mqtt-spy/wiki/Downloads

Po instalaci zadej IP adresu tvého MQTT brokeru a přihlaš se k tématům nebo začni publikovat zprávy.

> **Tip** Tento nástroj podporuje přihlašovací skripty psané v JavaScriptu.
>         Tímto si můžeš zautomatizovat tvé úlohy.

![](images/mosquitto/mqtt-spy.png)

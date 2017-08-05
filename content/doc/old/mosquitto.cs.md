# Mosquitto - MQTT Broker

<!-- toc -->


## Základy MQTT

* MQTT je otevřený, jednoduchý a nenáročný protokol pro předávání zpráv mezi klienty prostřednictvím centrálního bodu - brokeru.

* Každá **zpráva** sestává z **tématu (topic)** a **obsahu (payload)**.

* Témata popisují kategorii zprávy.

* Témata používají stromovou strukturu - jednotlivé úrovně jsou odděleny symbolem `/`.

* Vzorové příklady témat: `ložnice/teplota` nebo `kuchyně/světlo/zapnuto`.

* MQTT server se nazývá **broker** a klienti můžou **publikovat (publish)** zprávy a **přihlásit (subscribe)** se k různým tématům.

* Funkcí MQTT serveru je doručovat zprávy od publisherů k subscriberům.

* U subscribe témat se může použít symbol `+` pro přihlášení k odběru zpráv jedné úrovně a symbol `#` pro přihlášení k následujícím úrovním.

  > **Note** Symbol `#` se může použít pouze na konci přihlášeného tématu.

  [Klikni tady pro více informací o tématech](http://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices)


## Instalace MQTT Brokera

BigClown používá open-source brokera [Mosquitto](https://mosquitto.org).

Pro Ubuntu/Debian/Raspbian si nainstaluješ Mosquitto server tímto příkazem:

```
sudo apt install mosquitto
```

Také si můžeš nainstalovat `mosquitto-clients` balíček, pokud budeš chtít pracovat se zprávami v terminálu:

```
sudo apt install mosquitto-clients
```


## Používání Mosquitto klienta


Pro přihlášení ke všem zprávám použij příkaz `mosquitto_sub`:

```
mosquitto_sub -v -t '#'
```

Pro publikování zprávy použij příkaz `mosquitto_pub`:

```
mosquitto_pub -t 'kitchen/light/set' -m '{"state": true}'
```

Tímto příkazem můžeš publikovat zprávu bez obsahu (null):

```
mosquitto_pub -t 'kitchen/light/set' -n
```


## Nastavení Mosquitto

Nastavení Mosquitto můžeš měnit v konfiguračním souboru `/etc/mosquitto/mosquitto.conf`.


### Přemostění Mosquitto brokerů

Přemostění dvou MQTT brokerů je užitečné pokud máš svůj lokální MQTT server za NATem a chceš publikovat zprávy z internetu.
Můžeš si vytvořit veřejný MQTT server (například na AWS serveru), který můžeš přemostit se svým domácím MQTT serverem.
V tomto případě se tvůj lokální server bude připojovat k tvému veřejnému na AWS.


Pro přemostění si nastav svůj lokální server příkazy níže.

```
# Bridge to AWS
connection aws
address your.server.com

# Optional password, you should also use TLS to protect credentials
remote_username root
remote_password root

#topic <topic> [[[out | in | both] qos-level] local-prefix remote-prefix]
topic # in 0 home/# remote/#
```

Příkaz tématu se přihlásí ke všem tématům (`#`) na vzdáleném serveru pod `remote/#` a bude je všechny publikovat na lokálním serveru pod `home/#`.

* Parametr `in` popisuje směr a nula `0` znamená žádná QoS.


## GUI nástroj pro MQTT zprávy

Pro debugování a diagnostiku můžeš použít nástroj s grafickým uživatelským rozhraním - [Eclipse Paho mqtt-spy](https://github.com/eclipse/paho.mqtt-spy).

> **Important** Tento nástroj vyžaduje instalaci JRE 8 na hostovaném stroji.

* Pro více informací o tomto nástroji se podívej zde: https://github.com/eclipse/paho.mqtt-spy/wiki

* Zde si můžeš nástroj stáhnout: https://github.com/eclipse/paho.mqtt-spy/wiki/Downloads

Po instalaci zadej IP adresu tvého MQTT brokeru a přihlaš se k tématům nebo začni publikovat zprávy.

> **Tip** Tento nástroj podporuje přihlašovací skripty psané v JavaScriptu.
>         Tímto si můžeš zautomatizovat tvé úlohy.

![](images/mosquitto/mqtt-spy.png)

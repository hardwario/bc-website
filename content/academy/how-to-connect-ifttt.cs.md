---
title: Napoj IFTTT na svůj projekt v Playgroundu
draft: false
date: 2019-10-13T16:42:19.844Z
weight: 10
description: >-
  Díky IFTTT propojíš Playground a různé appky, které používáš. A to už je dost
  cool. Nauč se, jak na to.
slug: propoj-ifttt-a-playground
meta_title: Napoj IFTTT na svůj projekt v Playgroundu
meta_description: >-
  Díky IFTTT propojíš Playground a různé appky, které používáš. A to už je dost
  cool. Nauč se, jak na to.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image19.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image19.png
---
Díky IFTTT propojíš Playground a různé appky, které používáš. A to už je dost cool. Nauč se, jak na to.

## Co je to IFTTT?

Tahle zkratka znamená _If This, Then That_. Tedy Pokud tohle, tak tamto. IFTTT je totiž online služba, která propojuje **akci a reakci**. Takže když se něco stane, automaticky se provede něco jiného na oplátku. A o všech těhle věcech rozhodneš ty sám, když si je naprogramuješ.

Jako bonus IFTTT propojuje **programy a appky**. 👌 Nastavíš si třeba zasílání SMS zpráv v určitou denní dobu, připomínání zahvězdičkovaných e-mailů ve své poště, dostaneš upozornění na nové tvíty holky nebo kluka, které tajně obdivuješ, a tak dál. Boží! 🤡

Svoje vlastní IFTTT vytvoříš přes speciální rozhraní [IFTTT.com](https://ifttt.com/), které jednoduše **propojíš s Playgroundem**.

## Jak zavedeš IFTTT do Playgroundu? Zkus si to na příkladu s chytrým zvonkem.

1. **Zaregistruj se** na stránce [IFTTT.com](https://ifttt.com/). Tahle služba je naštěstí zdarma. 🤑 Tady začneš používat něco, čemu se říká **Applet**. Applet je název pro nastavenou reakci na akci. Nový Applet vytvoříš kliknutím na **Create** pod svojí ikonkou.

![IFTTT registrace](https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image18.png)

2. Naběhne ti stránka s velkým textem _IF THIS THEN THAT_. **Klikni na to THIS**.

![IFTTT a playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image13.png)

3. Vyskočí na tebe spousta možností. Vyber si **WebHooks**. Díky službě Webhooks si vytvoříš svoje vlastní IFTTT projekty, které propojí Playground s různými online appkami.

![WebHooks a IFTTT](https://res.cloudinary.com/lukasfabik/image/upload/v1570985204/academy/connect-ifttt-with-your-project-with-the-playground/image1.png)

Postupně musíš odkliknout buttony **Connect a Receive a web request**.

Pak ti to nabídne **pojmenování Eventu**. Tam se vydováděj, ale název Eventu si zapamatuj. 👀 Tenhle název bude důležitý při pozdějším propojování s mobilem a Playgroundem.

![IFTTP propojení s playgroundem](https://res.cloudinary.com/lukasfabik/image/upload/v1570985205/academy/connect-ifttt-with-your-project-with-the-playground/image7.png)

Pak název potvrď buttonem **Create trigger**. 🙌

4. Teď klikni na **THAT**.

![IFTTT a playground](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image13.png)

Vyber si, co se má stát jako reakce na akci. Zatím nastavíme oznámení. Najdi tedy **Notifications**…

![IFTTT notifikace](https://res.cloudinary.com/lukasfabik/image/upload/v1570985204/academy/connect-ifttt-with-your-project-with-the-playground/image6.png)

… a postupně je potvrď tlačítky **Connect** a **Send a notification from the IFTTT app**.

Teď vytvoříš obsah upozornění. **Do dalšího políčka vepiš, co chceš, aby ti notifikace sdělila**. A protože vytváříš chytrý zvonek 🔔, bude se ti hodit třeba takováhle zpráva:
_Někdo je u dveri {{OccurredAt}}__

![IFTTT notifikace](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image15.png)

Závorka se zobáčky představuje **proměnnou**, která ti zašle informaci, kdy ke zmáčknutí tlačítka došlo. Proto ji tam ponechej.

**Náš tip**: Při dalších experimentech můžeš použít button Add ingredient, se kterými nastavíš různé jiné proměnné.

Máš zprávu hotovou? Potvrď ji tlačítkem **Create Action**.

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image9.png)

5. Go **Finish!** 👇

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985210/academy/connect-ifttt-with-your-project-with-the-playground/image19.png)

Vidíš Connected? Seš tam! 👍

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image12.png)

6. To ale není všechno, spojení je taky třeba otestovat. Klikni na **ikonku Webhoooks**.

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image16.png)

7. Vpravo nahoře vyber **Documentation**…

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985208/academy/connect-ifttt-with-your-project-with-the-playground/image14.png)

… a dostaneš se na stránku se spoustou textu. Ale neděs se. 😱

Klikni na políčko **Event** a přepiš ho na název svého eventu, jak jsi ho zadával dřív. V tomhle případě to bude _zmacknute_tlacitko_. Díky tomu se všechno identifikuje a propojí.

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image17.png)

8. Vezmi si do ruky **mobil** 📱 a nainstaluj si **IFTTT appku**: odkaz na [Google Play](https://play.google.com/store/apps/details?id=com.ifttt.ifttt&hl=cs) a odkaz na [Apple Store](https://apps.apple.com/us/app/ifttt/id660944635).

**Přihlas se** pod stejným účtem jako na webu.

9. **V počítači** klikni na button **Test it**. Stránku pořád nechej zapnutou.

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985209/academy/connect-ifttt-with-your-project-with-the-playground/image11.png)

Na mobilu bys měl automaticky vidět, že to funguje. 👌

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985203/academy/connect-ifttt-with-your-project-with-the-playground/image3.png)

10. A teď IFTTT propoj s Playgroundem. Otevři **Playground**.

Programování jsme protentokrát zjednodušili a vyrobili jsme pro tebe přednastavené flow. Vlož ho do Playgroundu. Jak na to? Vpravo nahoře vidíš **menu** (tři čárky). Když na ně klikneš, zobrazí se ti **Import a pod tím Clipboard.**

Sem zkopíruj následující textový kód.

```
[{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

![IFTTT propojení s playgroundem](https://res.cloudinary.com/lukasfabik/image/upload/v1570985205/academy/connect-ifttt-with-your-project-with-the-playground/image2.png)

Ve flow vidíš **tři nody**:

* první je klasický **MQTT node**,
* druhý je **Change node** s mazací funkcí. Díky tomu bude mít tvůj HTTP request takovou podobu, jakou má mít,
* třetí je **node HTTP**, který jinak najdeš v sekci Function. Díky tomuhle nodu můžeš Playground připojit k webové službě, jako je právě IFTTT. Umí totiž zpracovávat HTTP požadavky.

11. Zkopíruj kód z webu IFTTT...

![MQTT node a HTTP node](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image8.png)

12. … a vlož ho v Playgroundu do nastavení nodu HTTP request.

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985207/academy/connect-ifttt-with-your-project-with-the-playground/image10.png)

13. Node ulož tlačítkem **Done**. Elektronický zvonek budiž nastaven.
14. Teď už jenom zmáčkni staré dobré **Deploy**...
15. … A oslavuj, že umíš **zase něco navíc**. 👏 Když totiž zmáčkneš tlačítko na krabičce, v mobilu se ti ukáže, že jsi ho zmáčkl. Po rozkliknutí notifikace vidíš detailní Applet.

![IFTTT v playgroundu](https://res.cloudinary.com/lukasfabik/image/upload/v1570985206/academy/connect-ifttt-with-your-project-with-the-playground/image4.png)

16. **Krabičku umísti místo zvonku** a až někdo zazvoní, dozvíš se to i při návštěvě souseda. Žádné kámoše už tak nezmeškáš. 👋

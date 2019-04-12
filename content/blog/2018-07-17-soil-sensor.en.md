---
date: "2018-07-17"
title: "Soil Sensor"
description: "New modern sensor to monitor soil moisture and temperature in your garden and flowerpots."
image_preview: "/blog/2018-07-17-soil-sensor/preview.png"
image_main: "/blog/2018-07-17-soil-sensor/main.jpg"
author: "pavel_hubner"
---


Hi guys,

recently we have lauched the new [**Wireless Soil Sensor**](https://developers.bigclown.com/projects/radio-soil-sensor) project. You can use it for well-being monitoring of your flowers, vegetables and other stuff (obviously all legal).

The **{{< shop "Soil Moisture Sensor" >}}** is **fully sealed** in silicone, comes with the **3 meter cable** you can hook it up with **{{< shop "Sensor Module" >}}**. Together with the out-of-the-box firmware, you can be set and read the moisture data in minutes. Do not hesitate to read more details in the [**project description**](https://developers.bigclown.com/projects/radio-soil-sensor) and step-by-step <a href="https://youtu.be/6kU-_ldaGOw">**video tutorial**</a> created by Martin

I was thinking it is worth spending a couple of words about the sensor element itself.

<img src="main2.jpg" style="width:100%;margin:0;" />

Of course, when you are starting something new, you want to start easy. And there are a lot of soil moisture sensors for the DIY market, Arduino, ESP, etc. that are as simple as this:

<img src="resistive-sensor.jpg" style="width:400px;margin:0" />

Such sensor operates on a trivial principle: They measure the **conductivity** between the two electrodes. If the soil is wet, you get higher conductivity (lower resistance) and vice versa. The electrodes are therefore plated across the large area to increase the contact surface.

But wait - I smell something fishy in the air!

You are putting a coated piece of the PCB into the soil. And you are energizing the electrodes (you bet there must be some current flow if you want to measure conductivity). So what about the long-term reliability? How about **oxidizing effect** on the electrodes? What did my chemistry teacher taught me about that? And if the PCB is naked and I will be pouring water on my lovely flowers and all around, can it be realiable and practical at the same time? I doubt about it. All I can think of now is my wife totally focused to not to spill a single drop of water on my beautiful electronics! These are the correct concerns you should have been raising. And these are the concerns which have brought us to look for a better way for the [**Wireless Soil Sensor**](https://developers.bigclown.com/projects/radio-soil-sensor) project.

So let's start with the assumption, we want to make a sensor that is reliable, durable, and water-resistant. It has to be completely sealed. Honestly I do not see any other way around if you want to create things that last for years, not weeks or months. So how do we measure soil moisture when you seal the whole thing?

The answer is simple: Use the **capacitive method**. It is a similiar principle you get with your smartphone touchscreens. Your finger changes dielectric properties when it touches the glass. Just briefly - dielectrics is the material and environment you have around the electrodes. Also water changes the dielectric properties when it gets between the electrodes. In another words: Two pieces of metal (electrodes) have different mutual capacitance when there is air or when there is water. The same is when you put it in dry soil versus wet soil.

<!--**TODO** Insert picture - electrodes + dielectrics.-->

Until this point, there are no new discoveries. We have been using the same principles for years. And there are lots for capacitance soil sensors we have been using for years too! So why shouldn't we integrate the existing solution? It was tempting, but we actually could not find anything that would fit our price expectations, mechanical design and/or output interface. Regarding the last point - the vast majority of the sensors come with analog output. So you need a positive rail, ground and the signal wire. That is fine if you have just one sensor. But what about if you want to have **multiple** of these? Where will you connect all these analog channels? And what about if you want to get more than just moisture, but the e.g. the never boring temperature?

Welcome to the world of the **BigClown {{< shop "Soil Moisture Sensor" >}}**. It is a fully digital sensor with a wide power supply range from 2.8 V to 5.5 V (yes, it is Arduino-compatible). It uses industry-standard **1-Wire** bus and it allows to connect multiple sensors in parallel (number of sensors are virtually unlimited). Not only **capacitance** (well, moisture), it also reports **temperature** from the on-board digital temperature sensor. And it is **fully sealed** in silicone and can be immersed in the water, of course.

There are a few key components the **BigClown {{< shop "Soil Moisture Sensor" >}}** integrates:

* 1-Wire to I2C bridge DS28E17
* Low quiescent current LDO TLV73330
* I2C capacitance to digital converter ZSSC3123
* I2C digital temperature sensor TMP112
* Reverse polarity protection

And let me emphasize this once again - it is **1-Wire** so you can mix various 1-Wire compliant sensors (like popular temperature DS18B20) on a single data wire. It is just awesome!

One tricky part when designing the sensor has been the electrode design. We started with a simple shape - two rectangular strips in parallel. These have reported capacitance in the range from approximately 5 pF (sensor in the air) to 50 pF (sensor in the water). But we have observed fairly high sensitivity to the environmental changes. We have switched to the inner-shaped electrode with the surrounding electrode working as a guard-ring. This helped a lot with the immunity.

<img src="electrodes-variants.jpg" style="margin:0;width:100%" />

This item is already available for pre-order (see the links below) and we are eager to see your IoT flower transformation blooming. :)

Cheers, Pavel.
# References

* **{{< shop "Soil Moisture Sensor" >}}**
* [**Wireless Soil Sensor**](https://developers.bigclown.com/projects/radio-soil-sensor)
* **BigClown {{< shop "Sensor Module" >}}**

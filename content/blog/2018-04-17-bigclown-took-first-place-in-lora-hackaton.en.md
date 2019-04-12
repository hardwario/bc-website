---
date: "2018-04-17"
title: "BigClown Took First Place In LoRa Hackathon"
description: "BigClown team quickly created interesting solution usign the new LoRa Module."
image_preview: "/blog/2018-04-17-bigclown-took-first-place-in-lora-hackaton/preview.jpg"
image_main: "/blog/2018-04-17-bigclown-took-first-place-in-lora-hackaton/main.jpg"
author: "martin_hubacek"
---

BigClown team took part in the LoRaWAN hackaton organized by [České Radiokomunikace](https://www.cra.cz/). The story behind the presented project was not so simple. First we had plans to use the new {{< shop "VOC Tag">}} to measure the smell the quality of air in the room. We could simply re-use all the code in already done [Wireless VOC sensor project](https://developers.bigclown.com/projects/radio-voc-sensor).

However during the presentation of LoRa technology there was a statement that this network is not suitable to transfer sound or picture. That reminded me one [article examining options of LoRa image transmission](http://cpham.perso.univ-pau.fr/WSN-MODEL/tool-html/imagesensor.html). So we accepted this challenge and used Panasonic infrared Grid-EYE sensor to transmit 8x8 pixel heatmap.

We used {{< shop "Core Module">}} to communicate with infrared sensor, {{< shop "Power Module">}} to display image preview on "Neopixel" matrix display and our new {{< shop "LoRa Module">}}.

We created first battery operated LoRa thermal camera. On the camera there is a LED matrix to create a preview of the image, but without it this device could send data for few years thanks to the power efficient BigClown hardware and clever SDK automatically taking care of sleeping.

{{< tweet 985060393113587719 >}}

Here's the received picture from our backend.

{{< tweet 985132258792263681 >}}

Big thanks goes to České Radiokomunikace for organizing this event.

{{< tweet 985826874495553536 >}}

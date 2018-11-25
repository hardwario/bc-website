---
title: IKEA světla s detekcí pohybu a HomeKitem
description: "Posviť si v noci automaticky se světly IKEA a Apple HomeKit!"
tags: ["Indoor"]
levels: ["Beginner"]
places: ["Home", "Office", "School"]
devices: ["Motion Kit"]
meta:
  title: Monitoring vlhkosti půdy
  desciption: ""
images:
  preview: /projects/toilete-night-light-with-ikea-and-apple/preview.jpg
  main: /projects/toilete-night-light-with-ikea-and-apple/main.jpg
author:
  name: Lukáš Fabik
  email: lukas.fabik@hardwario.com
  image: /authors/lukas.jpg
  github:
    name: hubmartin
    link: https://github.com/hubmartin

---

Noční příchody domů i cestu na toaletu si můžeš zjednodušit automatickým rozsvícením světel. Doma využítám světla IKEA a tak jsem se rozhodl využít svůj Motion Detector Kit, který používám jako alarm.

### Použil jsem tyto věci:

* [Motion Detector Kit](https://shop.bigclown.com/motion-detector-kit/)
* Chytré osvětlení [IKEA TRÅDFRI](https://www.ikea.com/cz/cs/catalog/categories/departments/lighting/smart_lighting/)
* a samozřejmě [Radio Dongle](https://shop.bigclown.com/radio-dongle/), pokud ještě žádný nemáš

### Realizace projektu pak byla jednoduchá:

* Motion Detector jsem spároval se svým BigClown Hubem.
* Pomocí Node-Red jsem vytvořil propojení s Apple Homekit.
* K Apple HomeKit jsem připojil světla IKEA.
* Vytvořil jsem automatizaci pro rozsvícení při detekování pohybu.

Chceš zrealizovat stejný projekt a nevíš jak? Napiš nám, rádi ti se vším pomůžeme!

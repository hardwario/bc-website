---
date: "2018-05-17"
title: "Synology NAS With BigClown Gateway"
description: "Another use of your NAS storage in a home network."
image_preview: "/blog/2018-05-17-synology-nas/preview.jpg"
image_main: "/blog/2018-05-17-synology-nas/main.jpg"
author: "martin_hubacek"
---

Because I continue to improve my home with BigClown and I need more permanent solution to save and visualize measured data. I have Synology NAS running 24/7 so I've explored possibilities of running **BigClown Gateway** with **Grafana** and **Node-RED**.

There's a lot of options how to set-up all the services to your NAS and I'm sure this can be applied to other NAS brands. You can SSH to you NAS because it is basically a Linux computer and install the **Python** and **BigClown Gateway**. Many brands support **Docker** containers which is another option. The more advanced NASes with x64 CPUs also support full virtualization and [**this is the way I went**](https://developers.bigclown.com/tutorials/custom-setup-on-synology).

# References

  * [**Synology NAS Installation**](https://developers.bigclown.com/tutorials/custom-setup-on-synology)

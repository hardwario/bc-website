---
title: Create your own dashboard for the BigClown
draft: false
date: 2019-09-26T18:53:49.915Z
weight: 60
description: >-
  Do you want to see data from your BigClown box in colour charts and
  indicators? Create a handy dashboard, we’ll tell you how.
slug: Create-your-own-dashboard
meta_title: Create your own dashboard for the BigClown
meta_description: >-
  Do you want to see data from your BigClown box in colour charts and
  indicators? Create a handy dashboard, we’ll tell you how.
image_preview: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566160234/academy/what-is-dashboard/image6.png
image_main: >-
  https://res.cloudinary.com/lukasfabik/image/upload/v1566160234/academy/what-is-dashboard/image6.png
---
Do you want to follow colour charts of changing temperature in your room? Or to see a pop-up window on your computer every time someone presses a button? 🤓 This and much more can be done by a smart interface called Dashboard. We’ll tell you how to make it happen.

## What is a dashboard?

Imagine a dashboard as your **virtual message board**, where after a little setup you will see everything what is going on around your box. For example, do you want to see a colour chart of how your room temperature has been changing over the past hour? No problem! It’s only up to you what you put in your dashboard. 💪

In other words, everything that your box measures **will be** **displayed right here**.

You can find it in your Playground in the left menu under the **Dashboard** tab. If you haven’t programmed anything yet and you click on it, you will see only a white area. Let’s change it!
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160234/academy/what-is-dashboard/image6.png" alt = "Node-RED Dashboard" >}}

## What to fill the dashboard with?

You can influence the appearance of the dashboard using the nodes found in the left menu in the **Functions** tab. The are separated by the Dashboard header and have **a** **turquoise colour**.
{{< b-image src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image1.png" alt = "Node-RED dashboard nodes" >}}

Now, we will show you **three smart nodes** that you can tune up your dashboard with:

<div class = "row align-items-start">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image2.png" alt = "Node-RED Dashboard gauge" >}}
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image4.png" alt = "Node-RED Dashboard gauge" >}}
    </div>
    <div class = "col-md-8">
        <p>Thanks to the <strong>Gauge</strong> node, a gauge will appear in the dashboard; it is similar to the one you can find in a car for speed measuring. 🏎️</p>
        <p>You will set the minimum and maximum values and the arrow between them will show you what the current value is.</p>
        <p>Gauge can be used also when measuring ambient temperature. Try to put the box in the fridge and watch the arrow move to the left.</p>
    </div>
</div>

<div class = "row content-justify-center">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image5.png" alt = "Node-RED Dashboard chart" >}}
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image8.png" alt = "Node-RED Dashboard chart" >}}
    </div>
    <div class = "col-md-8">
         <p>Connect the <strong>Chart</strong> node to your programme and a colour chart will appear in your dashboard. You can watch the progress of the measured value.</p>
        <p>You will decide how long is the time interval the chart should display and then you just measure the temperature or press the button. The chart will gladly show you a bunch of different statistics - it just depends on how you set it up. 📈</p>
    </div>
</div>

<div class = "row">
    <div class = "col-md-4">
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image7.png" alt = "Node-RED Dashboard notification" >}}
        {{< img-nm src = "https://res.cloudinary.com/lukasfabik/image/upload/v1566160233/academy/what-is-dashboard/image3.png" alt = "Node-RED Dashboard notification" >}}
    </div>
    <div class = "col-md-8">
        <p>The dashboard can also receive various notifications. When you link your project to the <strong>Notification</strong> node, you will see the hot news about what’s going on in your box. </p>
        <p>For example, set up a pop-up window with a text message when someone presses the button. This is also how you create a simple doorbell at the door of your room.🔔</p>
    </div>
</div>

Are you already thinking about what you can come up with in your dashboard? [Check out our projects and get inspired!]({{< ref "/projects/_index.en.md" >}})

---
title: Jak začít
meta:
    title: 5 Jednoduchých kroků, jak se začít učit digitální dovednosti
mainHeading: 5 Jednoduchých kroků,<br /> jak se začít&nbsp;učit&nbsp;digitální dovednosti
mainParagraph: Naučíte se jak sestavit hardware, připojit jej bezdrátově k svému počítači a nastavit notifikace pro chytrý telefon.
slug: start
---

{{< p-step >}}
{{% p-step-content order = "2" step = "1" title = "Sestavte hardware" %}}
Sestavte Kit složením všech tří modudů dohromady. Dejte pozor, aby byl správně zapojen Mini Battery Module.
{{% /p-step-content %}}
{{< p-step-video order = "1" id = "OCPPKXzCBg0" >}}
{{< /p-step >}}


{{< p-step >}}
{{% p-step-content order = "1" step = "2" title = "Vytvořte bezdrátové připojení" %}}
* Stáhněte si a nainstalujte aplikaci [BigClown Playground](https://github.com/bigclownlabs/bch-playground/releases/latest)
* Připojte Radio Dongle k svému počítači
* Spusťte BigClown Playground a otevřete záložku "Devices"
* Klikněte na tlačítko "Connect"
{{% /p-step-content %}}
{{% p-step-gallery order = "2" %}}
{{< p-step-gallery-video id = "-ndjehUElWE" >}}
{{< p-step-gallery-image src = "/_assets/images/start/connect-usb-dongle.jpg" src-full = "/_assets/images/start/connect-usb-dongle.jpg" title = "Zapoj Radio Dongle k počítači" >}}
{{% /p-step-gallery %}}
{{< /p-step >}}

{{< p-step >}}
{{% p-step-content order = "2" step = "3" title = "Nastavte mobilní aplikaci" %}}
* Stáhněte si mobilní aplikaci Blynk z [App Store](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) nebo [Google Play](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Založte si účet a přihlaste se
* Klikněte na ikonku "QR code" v pravém horním rohu
* Naskenujte QR kód z této stránky, najdete jej nalevo
* Přepošlete si Auth Code na svůj e-mail
* Klikněte na ikonu play &#9654; pro spuštění projektu
{{% /p-step-content %}}
{{% p-step-gallery order = "1" %}}
{{< p-step-gallery-video id = "dPPVQDQ3nY8" >}}
{{< p-step-gallery-image src = "/_assets/images/start/blynk-qr-code-push.button-kit.jpg" src-full = "/_assets/images/start/blynk-qr-code-push.button-kit.jpg" title = "Blynk App QR Code" >}}
{{% /p-step-gallery %}}
{{< /p-step >}}

{{< p-step >}}
{{% p-step-content order = "1" step = "4" title = "Propojte Starter Kit s&nbsp;mobilní aplikací pro notifikace" %}}
* Otevřete v BigClown Playground záložku "Functions" a [importujte Blynk flow](https://developers.bigclown.com/projects/push-the-button#step-5-switch-to-the-functions-tab-and-make-sure-you-see-the-flow-on-the-image-below)
* Dvakrát klikněte na zelený uzel "Blynk notification"
* Klikněte na ikonku tužky a vložte Auth Token z aplikace Blynk, který najdete v e-mailu
* Uložte změny kliknutím na "Done"
* Klikněte na tlačítko "Deploy"
{{% /p-step-content %}}
{{< p-step-video order = "2" id = "F_3t0XPnTFA" >}}
{{< /p-step >}}

{{< p-step >}}
{{% p-step-content order = "2" step = "5" title = "Stiskněte tlačítko!" %}}
A hned uvidíte notifikaci na svém telefonu
<br /><br />
[Detailní tutoriál](https://developers.bigclown.com/projects/push-the-button)
{{% /p-step-content %}}
{{< p-step-image order = "1" src = "/_assets/images/start/button-pressed.jpg" src-full = "/_assets/images/start/button-pressed.jpg" title = "BigClown Button Pressed">}}
{{< /p-step >}}

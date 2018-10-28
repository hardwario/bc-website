---
title: "Common Problems"
menu:
  main:
    parent: 'firmware'
    weight: 16
  doc:
    parent: 'firmware'
    weight: 16
---

On this page you can find common problems that you can encounter and its solutions. To suggest new problem to be added, please use [Github Issues](https://github.com/bigclownlabs/bc-website/issues)

## LCD
#### **My LCD module shows random dots/nothing**

You probably forgot to call the `bc_module_lcd_update(void)` function. Every draw or rotation you make in your code is done internally within the SDK and those changes needs to be sent to LCD by this function.

## Core module
#### **USB_CDC: `\n` behaves incorrectly.**
Try to use `\r\n` as if you would use Windows.

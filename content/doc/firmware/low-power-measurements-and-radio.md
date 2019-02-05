---
title: "Low Power, Measurements and Radio"
menu:
  doc:
    parent: 'firmware'
    weight: 15
---

To get the most from the batteries we use some clever tricks to improve the battery lifetime but don't miss an important measured value.

Behavior explained below applies to the most of our firmwares `generic`, `climate`, `lora`, `sigfox` and many others.

## Service and Normal Mode

When you put batteries and power-up the module. For first 60 minutes it stays in **Service Mode**. This means that the sensors are measuring and sending the values more often ([5 seconds](https://github.com/bigclownlabs/bcf-radio-climate-monitor/blob/master/app/application.c#L6)). This is so you can play with the module, see the changing values.

After an hour the module is switched to **Normal Mode** and sensor are measuring with lower period ([10 seconds](https://github.com/bigclownlabs/bcf-radio-climate-monitor/blob/master/app/application.c#L7)) but still can react quickly as explained further.

The length of the service interval can be configured in [SERVICE_INTERVAL_INTERVAL](https://github.com/bigclownlabs/bcf-radio-climate-monitor/blob/master/app/application.c#L3) in the code.
After this time the measurement interval is reconfigured in the [switch_to_normal_mode_task](https://github.com/bigclownlabs/bcf-radio-climate-monitor/blob/master/app/application.c#L136).

## Measuring and Transmitting

These are two separate things. The firmware measures for example temperature. If the measured temperature is staying within certain threshold it is transmitted in [15 minute intervals](https://github.com/bigclownlabs/bcf-radio-climate-monitor/blob/master/app/application.c#L11).

If the temperature [changes rapidly more than ±0.2 °C](https://github.com/bigclownlabs/bcf-radio-climate-monitor/blob/master/app/application.c#L12), then the measure value is send immediatelly. Then next temperature is send again after 15 minutes unless it does change again by ±0.2 °C.

---
title: "How to: PWM"
---

Pulse Width Modulation (PWM) is a method to create analog-like signal from the microcontroller digital output. It will achieve that by fast toggling of the pin with different ration of logic **HIGH** and **LOW**. This ratio is called **duty cycle**.

Please check the [**Core Module pinout**]({{<relref "doc/hardware/header-pinout.md">}}) to see which pins allows PWM.

## SDK PWM functions

Here are the main functions. You need to call all three of them for every PWM output.

```c
void bc_pwm_init(bc_pwm_channel_t channel);
void bc_pwm_enable(bc_pwm_channel_t channel);
void bc_pwm_set(bc_pwm_channel_t channel, uint16_t pwm_value);
```

The `channel` parameter can be one of the output pins.

```c
BC_PWM_P0
BC_PWM_P1
BC_PWM_P2
BC_PWM_P3
BC_PWM_P6
BC_PWM_P7
BC_PWM_P8
BC_PWM_P12
BC_PWM_P14
```

The `value` is a number between `0` and `255`. I choosed this to be the same like in Arduino `analogWrite()` function. But by calling `bc_pwm_tim_configure()` function you can simply change period of the PWM.

## Example code

Enable PWM signal on P6, P7 and P8 outputs. Every output has different duty cycle: 180, 210 and 255 (which is permanent **HIGH**).

```c

void application_init()
{
    bc_pwm_init(BC_PWM_P6);
    bc_pwm_set(BC_PWM_P6, 180);
    bc_pwm_enable(BC_PWM_P6);

    bc_pwm_init(BC_PWM_P7);
    bc_pwm_set(BC_PWM_P7, 210);
    bc_pwm_enable(BC_PWM_P7);

    bc_pwm_init(BC_PWM_P8);
    bc_pwm_set(BC_PWM_P8, 255);
    bc_pwm_enable(BC_PWM_P8);
}

```

## Example project

- [bc_pwm](https://github.com/hubmartin/bcf-pwm-servo/blob/master/app/application.c)


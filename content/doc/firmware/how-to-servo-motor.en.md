---
title: "How to: Servo motor"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

Please see the `bc_servo` functions in the [**BigClown SDK**](http://sdk.bigclown.com/group__bc__servo.html).


First initialize the servo output by calling function
```
bc_servo_init (bc_servo_t *self, bc_pwm_channel_t channel)
```

The `channel` parameter can be one of the output pins. Please check the [**Core Module pinout**]({{< relref "/doc/hardware/header-pinout.en.md">}}) to see which pins allows PWM.


```c
BC_PWM_P0
BC_PWM_P1  // Power Module LED connector
BC_PWM_P2
BC_PWM_P3
BC_PWM_P6
BC_PWM_P7
BC_PWM_P8
BC_PWM_P12
BC_PWM_P14
```

{{< note "info" >}}
The `BC_PWM_P1` is special, because it's connected to the **DATA** signal on the {{<shop "Power Module">}}. This way you can connect the servo directly to the 3 pins instead of digital LEDs. **You have to use power adapter to power the servo! The USB +5V is not connected to the Power Module.**
{{< /note >}}

Then you can control the servo signal and the servo movement. You can use function to set the pulse length in microseconds or you can write directly the desired angle between the `0-180` degrees.

```
bc_servo_set_microseconds (bc_servo_t *self, uint16_t us)
bc_servo_get_angle (bc_servo_t *self)
```

In case you need to tune the pulse length limits. Use `bc_servo_set_pulse_limits()` function.

## Example code

```c
bc_servo_t servo;

void application_init()
{
    bc_servo_init(&servo, BC_PWM_P0);
    bc_servo_set_microseconds(&servo, 1500);
}

```

## Example project

- [bc_servo](https://github.com/blavka/bcf-test-servo/blob/master/app/application.c)

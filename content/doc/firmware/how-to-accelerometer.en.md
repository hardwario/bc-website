---
title: "How to: Accelerometer"
---

Core module comes with three-axis ultra-low-power linear accelerometer connected via [I2C bus](../../hardware/i2c-address-space/). It is capable of motion detection and a free-fall based on interrupts.
Basically you have **two options how to use the accelerometer - continuous measurement of acceleration or as an alarm**, which triggers event handler if defined conditions occurs.


{{< note "info" "As always..." >}}
... all available SDK functions for Accelerometer can be found [here](http://sdk.bigclown.com/group__bc__lis2dh12.html).{{< /note >}}

## Recognizable Accelerometer Events
- BC_LIS2DH12_EVENT_ERROR 
- BC_LIS2DH12_EVENT_UPDATE
- BC_LIS2DH12_EVENT_ALARM 

## Continuous Measurement
This can be achieved by setting the update interval in your code with function ```bc_lis2dh12_set_update_interval```, which takes pointer to instantiated accelerometer and time before measurements in milliseconds as parameters.

You also have to instantiate a struct ```bc_lis2dh12_result_g_t``` to store results of measurements. Those values can be retrieved by calling ```bc_lis2dh12_get_result_g``` function. In simple example bellow, we measure exact values of acceleration in g every second and send them over USB.

```
#include <bcl.h>
#include <bc_usb_cdc.h>

bc_led_t led;

bc_lis2dh12_t a;
bc_lis2dh12_result_g_t a_result;

void disableLed(void* params)
{
    (void) params;
    bc_led_set_mode(&led, BC_LED_MODE_OFF);
}

void lis2_event_handler(bc_lis2dh12_t *self, bc_lis2dh12_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_LIS2DH12_EVENT_UPDATE) {
        bc_lis2dh12_get_result_g(&a, &a_result);
        char message[100];
        sprintf(message, "X: %f\r\nY: %f\r\nZ: %f\r\n", a_result.x_axis, a_result.y_axis, a_result.z_axis);
        bc_usb_cdc_write(message, strlen(message));
    } else {
        bc_usb_cdc_write("error\r\n", strlen("error\r\n"));
    }
}

void application_init(void)
{
    bc_lis2dh12_init(&a, BC_I2C_I2C0, 0x19);
    bc_lis2dh12_set_event_handler(&a, lis2_event_handler, NULL);
    bc_lis2dh12_set_update_interval(&a, 1000);

    bc_usb_cdc_init();
}
```


## Alarm
Alarm is a very interesting "feature". This allows you to set up certain conditions when the "alarm" should be triggered (like "wake up, when module is moved in direction of X-axis && acceleration is higher than 1g"). The module uses interrupts to inform the microcontroller, which means that the microcontroller can sleep when it is not being moved and only be awaken when moved. 

You can set conditions for the alarm in struct [*bc_lis2dh12_alarm_t*](http://sdk.bigclown.com/structbc__lis2dh12__alarm__t.html).

When the accelerometer checks these settings it uses logical AND operation (so every set condition needs to occur for the alarm to be triggered). 

In example bellow, we set the alarm to be triggered when core module is moved in direction of X-axis with acceleration > 1g. When triggered, integrated red LED will switch on for one second.

After flashing, try to move your Core module very slowly. It will do nothing in any direction. Then try to move it quickly up and down - once again nothing happens, because this movement is in Z-axis. No try to make a quick move in X-axis and the LED should light up.


```
#include <bcl.h>

bc_led_t led;

bc_lis2dh12_t a;
bc_lis2dh12_result_g_t a_result;

// alarm settings
bc_lis2dh12_alarm_t alarm1;

void disableLed(void* params)
{
    (void) params;
    bc_led_set_mode(&led, BC_LED_MODE_OFF);
}

void lis2_event_handler(bc_lis2dh12_t *self, bc_lis2dh12_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_LIS2DH12_EVENT_ALARM) {
        bc_led_set_mode(&led, BC_LED_MODE_ON);
        bc_scheduler_register(disableLed, NULL, bc_tick_get() + 1000);
    }
}

void application_init(void)
{
    // here you can set conditions for the alarm to be triggered
    alarm1.x_high = true;
    alarm1.threshold = 1;

    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_OFF);

    bc_lis2dh12_init(&a, BC_I2C_I2C0, 0x19);
    bc_lis2dh12_set_alarm(&a, &alarm1);
    bc_lis2dh12_set_event_handler(&a, lis2_event_handler, NULL);
}

```
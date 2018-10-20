---
title: "How to: A/D Converter"
---

Analog to digital converter can measure the voltage on the one of the six inputs `A0` to `A5` and return measured value. The result can be 16 bit value or `float` number in volts.

## Channels and sampling types

The ADC subsystem has to be initialized by calling `bc_adc_init()`.
Each channel can be configured to different resolution and oversampling. Sampling can be synchronous and asynchronous. No matter what resolution you choose (6, 8, 10, 12) the result is always scaled to 16 bit value 0-65535. In asynchronous mode you can also get value directly in volts in the `float` data type.

## Synchronous sampling

During the synchronous measurement, the code is blocked until the measurement is over.

```
#include <application.h>

void application_init(void)
{
    bc_log_init(BC_LOG_LEVEL_DEBUG, BC_LOG_TIMESTAMP_OFF);

    bc_adc_init();
}

void application_task()
{
    uint16_t adc;

    bc_adc_get_value(BC_ADC_CHANNEL_A2, &adc);
    bc_log_debug("%d", adc);

    bc_scheduler_plan_current_relative(200);
}

```

## Asynchronous sampling

Asynchronous sampling is not blocked and is running in the background. When the result is ready, your callback function is called. It is possible to start multiple channels, the scheduler samples each channel and calls the callback for each channel separately.

```
#include <application.h>

static void _adc_event_handler(bc_adc_channel_t channel, bc_adc_event_t event, void *param)
{
    (void) channel;
    (void) param;

    if (event == BC_ADC_EVENT_DONE)
    {
        uint16_t adc;
        bc_adc_async_get_value(BC_ADC_CHANNEL_A2, &adc);
        bc_log_debug("%d", adc);

       //float voltage;
       //bc_adc_get_result_voltage(BC_ADC_CHANNEL_A2, &voltage);
       //bc_log_debug("%f", voltage);
    }
}

void application_init(void)
{
    bc_log_init(BC_LOG_LEVEL_DEBUG, BC_LOG_TIMESTAMP_OFF);

    bc_adc_init();
    bc_adc_set_event_handler(BC_ADC_CHANNEL_A2, _adc_event_handler, NULL);
    bc_adc_resolution_set(BC_ADC_CHANNEL_A2, BC_ADC_RESOLUTION_12_BIT);
    bc_adc_oversampling_set(BC_ADC_CHANNEL_A2, BC_ADC_OVERSAMPLING_256);
}

void application_task()
{
    bc_adc_async_measure(BC_ADC_CHANNEL_A2);

    bc_scheduler_plan_current_relative(200);
}
```

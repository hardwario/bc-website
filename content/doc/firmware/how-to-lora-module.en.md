---
title: "How to: LoRa module"
menu:
  main:
    parent: 'firmware'
    weight: 20
  doc:
    parent: 'firmware'
    weight: 20
---

{{< shop "LoRa Module" >}} provides a simple way how to connect your kit to the LoRA network. You can use commercial, community or your own LoRa gateway to receive messages from your device.

The most used community LoRa backends are [The Things Network](https://www.thethingsnetwork.org/) and [LorIoT](https://www.loriot.io/).

# How Does it Work?
- Message is sent from device
- LoRa gateway receives the message which is processed by the backend
- Backend resends the message to your server

# Example

This example sends simple packet after boot. It is also demonstrating handling of the various events in the callback function.
Some parts of the code is commented out for different configuration like OTAA key exchange with JOIN command.

Also there is a example how to read the modem parameters when the device is ready in the `BC_CMWX1ZZABZ_EVENT_READY` event handler.

You can also receive data in **Class A** or **Class C** mode which you can set by calling `bc_cmwx1zzabz_set_class`.
The received data are handled in the `BC_CMWX1ZZABZ_EVENT_MESSAGE_RECEIVED` event handler.

```c
#include <application.h>

// LED instance
bc_led_t led;

// LoRa instance
bc_cmwx1zzabz_t lora;

void lora_callback(bc_cmwx1zzabz_t *self, bc_cmwx1zzabz_event_t event, void *event_param)
{
    if (event == BC_CMWX1ZZABZ_EVENT_READY)
    {
        volatile char deveui[20];
        volatile char devaddr[20];
        bc_cmwx1zzabz_get_deveui(&lora, (char*)deveui);
        bc_cmwx1zzabz_get_devaddr(&lora, (char*)devaddr);

        bc_led_pulse(&led, 50);
    }

    if (event == BC_CMWX1ZZABZ_EVENT_ERROR)
    {
        bc_led_set_mode(&led, BC_LED_MODE_BLINK_FAST);
    }

    if (event == BC_CMWX1ZZABZ_EVENT_JOIN_ERROR)
    {
        bc_led_set_mode(&led, BC_LED_MODE_BLINK_FAST);
    }

    if (event == BC_CMWX1ZZABZ_EVENT_SEND_MESSAGE_START)
    {
        bc_led_set_mode(&led, BC_LED_MODE_ON);
    }

    if (event == BC_CMWX1ZZABZ_EVENT_SEND_MESSAGE_DONE)
    {
        bc_led_set_mode(&led, BC_LED_MODE_OFF);
    }

    if (event == BC_CMWX1ZZABZ_EVENT_MESSAGE_RECEIVED)
    {
        volatile uint8_t port = bc_cmwx1zzabz_get_received_message_port(self);
        volatile uint32_t length = bc_cmwx1zzabz_get_received_message_length(self);

        uint8_t msg_buffer[51];
        volatile uint32_t len = bc_cmwx1zzabz_get_received_message_data(self, msg_buffer, sizeof(msg_buffer));

        bc_led_pulse(&led, 800);

        (void) len;
        (void) length;
        (void) port;
    }
}

void application_init(void)
{
    // Initialize LED
    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_pulse(&led, 100);

    bc_cmwx1zzabz_init(&lora, BC_UART_UART1);
    bc_cmwx1zzabz_set_event_handler(&lora, lora_callback, NULL);
    //bc_cmwx1zzabz_set_appkey(&lora, "4257FAD1D73C3B7D4C2EDBAE6EBDA740");
    //bc_cmwx1zzabz_set_appskey(&lora, "4357FAD1D73C3B7D4C2EDBAE6EBDA740");
    //bc_cmwx1zzabz_set_nwkskey(&lora, "4457FAD1D73C3B7D4C2EDBAE6EBDA740");

    bc_cmwx1zzabz_set_band(&lora, BC_CMWX1ZZABZ_CONFIG_BAND_EU868);
    bc_cmwx1zzabz_set_mode(&lora, BC_CMWX1ZZABZ_CONFIG_MODE_ABP);
    bc_cmwx1zzabz_set_class(&lora, BC_CMWX1ZZABZ_CONFIG_CLASS_A);

    //bc_cmwx1zzabz_join(&lora);
}

void application_task()
{
    if (!bc_cmwx1zzabz_is_ready(&lora))
    {
        bc_scheduler_plan_current_relative(200);
        return;
    }

    uint8_t buffer[] = {'A', 'B', 'C'};
    bc_cmwx1zzabz_send_message(&lora, buffer, sizeof(buffer) );

    // do not plan this task anymore
}

```

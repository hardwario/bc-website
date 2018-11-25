---
title: "How to: Sigfox module"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

Sigfox module provides a simple way how to connect your kit to the Sigfox network. As any other BigClown module, Sigfox module can be controlled with the [SDK](https://sdk.bigclown.com/group__bc__module__sigfox.html). Please note that if you bought this module WITH connectivity from our e-shop, you will have to use MySigfox.com service to get messages from Sigfox Backend to your server.

## MySigfox.com Service
*This applies to users who bought Sigfox connectivity from our e-shop*. Because we are resellers of the connectivity, you can not get access to the Sigfox Backend directly. So we built mysigfox.com to make it easy for you to get the messages real time.

### How Does it Work?
- message is sent from device
- Sigfox network receives the message which is processed by the Backend
- Backend sends the message to MySigfox.com
- MySigfox.com resends the message to your server

It is pretty easy to set it all up. For more information, there is a [different article](../../tutorials/mysigfox-com-service/).


## Example 1 - "Hello World"
This example does nothing interesting - just sends a message containing this data "000102030405" every time button is pressed. When message is sent, LED on Core module lights up for three second. If something went wrong, LED will blink three times. This serves mainly for testing out that Sigfox module is working or that mysigfox.com does what you want it to do.

```c
#include <application.h>

bc_led_t led;
bc_button_t button;
bc_module_sigfox_t sigfox;

static void disableLCD(void* param) {
    (void) param;
    bc_led_set_mode(&led, BC_LED_MODE_OFF);
}

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    if (event == BC_BUTTON_EVENT_PRESS)
    {
        if (bc_module_sigfox_is_ready(&sigfox)) {
            uint8_t buffer[6];
            buffer[0] = 0x00;
            buffer[1] = 0x01;
            buffer[2] = 0x02;
            buffer[3] = 0x03;
            buffer[4] = 0x04;
            buffer[5] = 0x05;

            if (bc_module_sigfox_send_rf_frame(&sigfox, buffer, sizeof(buffer))) {
                bc_led_set_mode(&led, BC_LED_MODE_ON);
                bc_scheduler_register(disableLCD, NULL, bc_tick_get() + 3000);
            } else {
                bc_led_set_mode(&led, BC_LED_MODE_BLINK);
                bc_scheduler_register(disableLCD, NULL, bc_tick_get() + 2000);
            }
        } else {
            bc_led_set_mode(&led, BC_LED_MODE_BLINK);
            bc_scheduler_register(disableLCD, NULL, bc_tick_get() + 2000);
        }
    }
}

void application_init(void)
{

    bc_led_init(&led, BC_GPIO_LED, false, false);
    bc_led_set_mode(&led, BC_LED_MODE_OFF);

    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);

    bc_module_sigfox_init(&sigfox, BC_MODULE_SIGFOX_REVISION_R2);
}

```

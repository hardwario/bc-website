/*
 Visual Studio Code
 Ctrl+Shift+B     to build
 Ctrl+P task dfu  to flash MCU with dfu-util
 */

#include <application.h>
#include <bc_button.h>
#include <bc_module_power.h>
#include <bc_gpio.h>
#include <bcl.h>

#define MAX 20
#define LED_COUNT 205
#define MUL ((float)((LED_COUNT - 1.) / MAX))
#define SHINE_RED 50
#define SHINE_BLUE 50
#define SHINE_GREEN_GAP 40

unsigned int red, blue;
static bc_led_strip_t led_strip;
static bc_button_t button_red;
static bc_button_t button_blue;
static bool _is_winner_known;
bc_scheduler_task_id_t reset_task_id;

// Create costume led strip buffer
static uint32_t _dma_buffer_rgb_205[LED_COUNT * sizeof(uint32_t) * 2];

const bc_led_strip_buffer_t _led_strip_buffer_rgbw_205 =
{
    .type = BC_LED_STRIP_TYPE_RGBW,
    .count = LED_COUNT,
    .buffer = _dma_buffer_rgb_205
};

typedef struct
{
    uint8_t red;
    uint8_t green;
    uint8_t blue;
    uint8_t white;
} colors_t;

colors_t frame_buffer[LED_COUNT];


// Dummy piezo implementation
static unsigned int I = 100, J = 400;

void piezo()
{
    unsigned int i, j;

    for (i = 0; i < I; i++)
    {
        for (j = 0; j < J; j++)
            ;
        bc_gpio_set_output(BC_GPIO_P5, true);
        for (j = 0; j < J; j++)
            ;
        bc_gpio_set_output(BC_GPIO_P5, false);
    }
}

void update_led_strip()
{
    unsigned int i;

    memset(frame_buffer, 0, sizeof(frame_buffer));

    for (i = 0; i < (red * MUL); i++)
    {
        frame_buffer[i].red = SHINE_RED;
    }

    for (i = 0; i < (blue * MUL); i++)
    {
        frame_buffer[i].blue = SHINE_BLUE;
    }

    for (i = 0; i <= (LED_COUNT / MUL); i++)
    {
        frame_buffer[(unsigned int) (i * MUL)].red = 0;
        frame_buffer[(unsigned int) (i * MUL)].green = SHINE_GREEN_GAP;
        frame_buffer[(unsigned int) (i * MUL)].blue = 0;
        frame_buffer[(unsigned int) (i * MUL)].white = 0;
    }

    bc_led_strip_set_rgbw_framebuffer(&led_strip, (uint8_t *) frame_buffer, LED_COUNT * 4);

    bc_led_strip_write(&led_strip);
}

void reset()
{
    _is_winner_known = false;
    bc_led_strip_effect_stop(&led_strip);
    red = 0;
    blue = 0;
    update_led_strip();
}

void button_red_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    static int i = 0;

    if (!_is_winner_known)
    {
        if (event == BC_BUTTON_EVENT_PRESS)
        {
            piezo();

            if (red >= MAX)
            {
                _is_winner_known = true;
                bc_led_strip_effect_theater_chase(&led_strip, 0x80000000, 100);
                bc_led_strip_write(&led_strip);
                bc_scheduler_plan_relative(reset_task_id, 3000);
            }
            else
            {
                i = 0;
                red++;
            }
        }

        // TODO ... figure out counter reset
        if (event == BC_BUTTON_EVENT_HOLD)
        {
            piezo();

            if (red > 0)
            {
                red -= 2;
            }

            i++;

            if (i >= 2)
            {
                i = 0;
                reset();
            }
        }

        update_led_strip();
    }
}

void button_blue_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    static int i = 0;
    if (!_is_winner_known)
    {
        if (event == BC_BUTTON_EVENT_PRESS)
        {
            piezo();

            if (blue >= MAX)
            {
                _is_winner_known = true;
                bc_led_strip_effect_theater_chase(&led_strip, 0x8000, 100);
                bc_led_strip_write(&led_strip);
                bc_scheduler_plan_relative(reset_task_id, 3000);
            }
            else
            {
                i = 0;
                blue++;
            }
        }

        // TODO ... figure out counter reset
        if (event == BC_BUTTON_EVENT_HOLD)
        {
            piezo();

            if (blue > 0)
            {
                blue -= 2;
            }

            i++;

            if (i >= 2)
            {
                i = 0;
                reset();
            }
        }

        update_led_strip();
    }
}

void application_init(void)
{
    // Initialize power module with led strip
    bc_module_power_init();
    bc_led_strip_init(&led_strip, bc_module_power_get_led_strip_driver(), &_led_strip_buffer_rgbw_205);

    // Initialize red button
    bc_button_init(&button_red, BC_GPIO_P3, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button_red, button_red_event_handler, NULL);

    // Initialize blue button
    bc_button_init(&button_blue, BC_GPIO_P2, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button_blue, button_blue_event_handler, NULL);

    // Initialize piezo gpio pin
    bc_gpio_init(BC_GPIO_P5);
    bc_gpio_set_mode(BC_GPIO_P5, BC_GPIO_MODE_OUTPUT);

    // Initialize reset task and execute it one time
    reset_task_id = bc_scheduler_register(reset, NULL, BC_TICK_INFINITY);
    reset();
}

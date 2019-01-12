---
title: "How to: UART interface"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

Core Module has 3 UARTs you can use. The signal for each channel is named TXD**x**, RXD**x** where **x** is **0**, **1** or **2**. Please refer to the [module drawing pinout]({{< relref "/doc/hardware/header-pinout.en.md#module-drawing-standard" >}}) where you find the signals positions.

Also check the [UART API on the SDK site](http://sdk.bigclown.com/group__bc__uart.html).

{{< note "info" "Multi-platform serial terminal" >}}
For UART testing you can try [H-term terminal](http://www.der-hammer.info/terminal/). This is free multi-platform software which has plenty of configuration, tools and support for macros.
{{< /note >}}

## Initialization and write

First you have to set up the UART channel, baudrate and frame format. Then you can send the data. The transmittion can be synchronous which blocks the code until all the data are send, or asynchronous where you don't wait for transmission and you can get a callback event `BC_UART_EVENT_ASYNC_WRITE_DONE` informing, that the data were sent.

## Synchronous write example

Function `bc_uart_write` needs to know how many bytes to send. That's why you need to use `sizeof(uart_tx)`.

```c
void application_init()
{
    bc_uart_init(BC_UART_UART1, BC_UART_BAUDRATE_115200, BC_UART_SETTING_8N1);
    char uart_tx[] = "Hello world\r\n";
    bc_uart_write(BC_UART_UART1, uart_tx, strlen(uart_tx));
}
```

## Asynchronous write example

This is a little bit complicated because you need to create FIFO structure and FIFO buffer array. Then you initialize the FIFO and assign the FIFO to the UART. In this example we demonstrate just the async TX

```c

bc_fifo_t tx_fifo;
uint8_t tx_fifo_buffer[32];

void uart_handler(bc_uart_channel_t channel, bc_uart_event_t event, void *param)
{
    if (event == BC_UART_EVENT_ASYNC_WRITE_DONE)
    {
        // here you can for example send more data
    }
}

void application_init()
{
    bc_uart_init(BC_UART_UART1, BC_UART_BAUDRATE_115200, BC_UART_SETTING_8N1);
    bc_uart_set_event_handler(BC_UART_UART1, uart_handler, NULL);

    bc_fifo_init(&tx_fifo, tx_fifo_buffer, sizeof(tx_fifo_buffer));
    // We set only TX FIFO, for RX_FIFO we pass NULL
    bc_uart_set_async_fifo(BC_UART_UART1, &tx_fifo, NULL);

    char uart_tx[] = "Hello world\r\n";
    bc_uart_async_write(BC_UART_UART1, uart_tx, strlen(uart_tx));
}
```

## Reading received data

There are again two options to read received bytes. You can read data synchronously in your task, or asynchronously using callbacks.

## Synchronous reading

We use read function

`size_t bc_uart_read(bc_uart_channel_t channel, void *buffer, size_t length, bc_tick_t timeout);`

Code example

```c
void application_task()
{
    // Define receive buffer
    uint8_t uart_rx[32];
    // Synchronous reading
    size_t number_of_rx_bytes = bc_uart_read(BC_UART_UART1, uart_rx, sizeof(uart_rx), 500);

    char uart_tx[32];
    snprintf(uart_tx, sizeof(uart_tx), "RX bytes: %d\r\n", number_of_rx_bytes);
    bc_uart_write(BC_UART_UART1, uart_tx, strlen(uart_tx));

    bc_scheduler_plan_current_now();
}
```

Note that the last parameter `timeout` is `500` so the function is waiting 500ms for incoming bytes and stores them in `uart_rx` buffer. The function returns number of received bytes or `0` if no byte was received during timeout window.

## Asynchronous reading and writing

This example does asynchronous send and receive of data on `BC_UART_UART1`.

{{< note "info" "Low power UART" >}}
When you call `bc_uart_async_read_start` then the sheduler stops sleeping the MCU so this function is not low-power friendly. After you call `bc_uart_async_read_stop` the periodic sleeping of MCU is again activated. The only solution to receive over UART in low-power mode is to use `BC_UART_UART1` with `BC_UART_BAUDRATE_9600` which is using `LPUART` (low power UART peripheral). `LPUART` is clocked from the 32 kHz crystal that can run even when the MCU is sleeping so you won't miss a single byte.
{{< /note >}}

```c
#include <application.h>

bc_fifo_t tx_fifo;
bc_fifo_t rx_fifo;
uint8_t tx_fifo_buffer[64];
uint8_t rx_fifo_buffer[64];

void uart_handler(bc_uart_channel_t channel, bc_uart_event_t event, void *param)
{
    uint8_t rx_data[32];

    if (event == BC_UART_EVENT_ASYNC_WRITE_DONE)
    {
        // here you can for example send more data
    }
    if (event == BC_UART_EVENT_ASYNC_READ_DATA)
    {
        // Read data from FIFO by a single byte as you receive it
        size_t number_of_rx_bytes = bc_uart_async_read(BC_UART_UART1, rx_data, sizeof(rx_data));
        char uart_tx[32];
        snprintf(uart_tx, sizeof(uart_tx), "RX: %d\r\n", number_of_rx_bytes);
        bc_uart_async_write(BC_UART_UART1, uart_tx, strlen(uart_tx));
    }
    if (event == BC_UART_EVENT_ASYNC_READ_TIMEOUT)
    {
        // No data received during set timeout period
        char uart_tx[] = "Timeout\r\n";
        bc_uart_async_write(BC_UART_UART1, uart_tx, strlen(uart_tx));
        // You can also read received bytes here instead of BC_UART_EVENT_ASYNC_READ_DATA
    }
}

void application_init()
{
    bc_uart_init(BC_UART_UART1, BC_UART_BAUDRATE_115200, BC_UART_SETTING_8N1);
    bc_uart_set_event_handler(BC_UART_UART1, uart_handler, NULL);

    bc_fifo_init(&tx_fifo, tx_fifo_buffer, sizeof(tx_fifo_buffer));
    bc_fifo_init(&rx_fifo, rx_fifo_buffer, sizeof(rx_fifo_buffer));

    bc_uart_set_async_fifo(BC_UART_UART1, &tx_fifo, &rx_fifo);

    bc_uart_async_read_start(BC_UART_UART1, 500);

    char uart_tx[] = "Hello world\r\n";
    bc_uart_async_write(BC_UART_UART1, uart_tx, strlen(uart_tx));
}
```

---
title: "How to: UART interface"
---

Core Module has 3 UARTs you can use. The signal for each channel is named TXD**x**, RXD**x** where **x** is **0**, **1** or **2**. Please refer to the [module drawing pinout]({{< relref "doc/hardware/headers-and-signals.md#module-drawing-standard" >}}) where you find the signals positions.

Also check the [UART API on the SDK site](http://sdk.bigclown.com/group__bc__uart.html).

# Initialization and write

First you have to set up the UART channel, baudrate and frame format. Then you can send the data. The transmittion can be synchronous which blocks the code until all the data are send, or asynchronous where you don't wait for transmission and you can get a callback event `BC_UART_EVENT_ASYNC_WRITE_DONE` informing, that the data we're sent.

```
size_t bc_uart_write(bc_uart_channel_t channel, const void *buffer, size_t length);
size_t bc_uart_async_write(bc_uart_channel_t channel, const void *buffer, size_t length);
```

# Init and synchronous write

Function `bc_uart_write` needs to know how many bytes to send. That's why you need to use `sizeof(uart_tx)`.

```c
void application_init()
{
    bc_uart_init(BC_UART_UART2, BC_UART_BAUDRATE_115200, BC_UART_SETTING_8N1);
    char uart_tx[] = "Hello world\r\n";
    bc_uart_write(BC_UART_UART2, uart_tx, sizeof(uart_tx));
}
```

# Init and asynchronous write

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
    bc_uart_init(BC_UART_UART2, BC_UART_BAUDRATE_115200, BC_UART_SETTING_8N1);
    bc_uart_set_event_handler(BC_UART_UART2, uart_handler, NULL);

    bc_fifo_init(tx_fifo, tx_fifo_buffer, sizeof(tx_fifo_buffer));
    // We set only TX FIFO, for RX_FIFO we pass NULL
    bc_uart_set_async_fifo(BC_UART_UART2, tx_fifo, NULL);

    char uart_tx[] = "Hello world\r\n";
    bc_uart_async_write(BC_UART_UART2, uart_tx, sizeof(uart_tx));
}
```

# Reading received data

There are again two options to read received bytes. You can read data synchronously in your task, or asynchronously using callbacks.

# Synchronous reading

We use read function

`size_t bc_uart_read(bc_uart_channel_t channel, void *buffer, size_t length, bc_tick_t timeout);`

Code example

```c
// Define receive buffer
uint8_t uart_rx[32];
// Synchronous reading
size_t number_of_rx_bytes = bc_uart_read(BC_UART_UART2, uart_rx, sizeof(uart_rx), 0)

if (number_of_rx_bytes)
{
    // Do something with data in the uart_rx buffer
}
else
{
    // There are no data in the UART receive buffer
}
```

Note that the last parameter `timeout` is `0` so the function checks if there's some data in the receive buffer and if not, the function returns zero `0`.

# Asynchronous reading and writing


```c

bc_fifo_t tx_fifo;
bc_fifo_t rx_fifo;
uint8_t tx_fifo_buffer[32];
uint8_t rx_fifo_buffer[32];

void uart_handler(bc_uart_channel_t channel, bc_uart_event_t event, void *param)
{
    uint8_t rx_data[32];

    if (event == BC_UART_EVENT_ASYNC_WRITE_DONE)
    {
        // here you can for example send more data
    }
    if (event == BC_UART_EVENT_ASYNC_READ_DATA)
    {
        // Read data from FIFO
        size_t number_of_rx_bytes = bc_uart_async_read(BC_UART_UART2, rx_data, sizeof(rx_data));
    }
    if (event == BC_UART_EVENT_ASYNC_READ_TIMEOUT)
    {
        // No data received during set timeout period
    }
}

void application_init()
{
    bc_uart_init(BC_UART_UART2, BC_UART_BAUDRATE_115200, BC_UART_SETTING_8N1);
    bc_uart_set_event_handler(BC_UART_UART2, uart_handler, NULL);

    bc_fifo_init(tx_fifo, tx_fifo_buffer, sizeof(tx_fifo_buffer));
    bc_fifo_init(rx_fifo, rx_fifo_buffer, sizeof(rx_fifo_buffer));

    bc_uart_set_async_fifo(BC_UART_UART2, tx_fifo, rx_fifo);

    char uart_tx[] = "Hello world\r\n";
    bc_uart_async_write(BC_UART_UART2, uart_tx, sizeof(uart_tx));
}
```

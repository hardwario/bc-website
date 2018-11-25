---
title: "How to: SPI bus"
menu:
  doc:
    parent: 'firmware'
    weight: 20
---

Serial Peripheral Bus (SPI) is synchronous serial bus. It's used for fast interconnection of the peripherals inside the device. BigClown uses SPI for example in the {{< shop "LCD Module" >}}.

The SPI uses these signals:

  - `SCK` - **Serial Clock** - SPI transfers are synchronous and needs the clock signal
  - `MOSI` - **Master Out, Slave In** - This is serial output from MCU to the peripheral
  - `MISO` - **Master In, Slave Out** - This is serial input for data from peripheral to MCU
  - `NSS` - **Negative Slave Select** - This signal activates the slave device. It's active low, that's why the word **negative**. If you have multiple slave devices you have multiple `NSS` signals. It's sometimes also called the Chip Select `CS`.


## Initialization

SPI on BigClown Core Module has fixed pins, so initialization is simple

```c
bc_spi_init(BC_SPI_SPEED_1_MHZ, BC_SPI_MODE_0);
```

### Speed

You can choose from several communication speeds. The communication speed is limited by the maximal speed that the slave device can communicate, the length of the wires, noise, current consumption or electromagnetic radiation limits.

```c
BC_SPI_SPEED_1_MHZ
BC_SPI_SPEED_2_MHZ
BC_SPI_SPEED_4_MHZ
BC_SPI_SPEED_8_MHZ
BC_SPI_SPEED_16_MHZ
```

### SPI Mode

Clock polarity and clock phase defines when the output data is valid. Whether its on the rising or falling edge. This information can be found in the datasheet of the slave device.

```c
BC_SPI_MODE_0 // SPI mode of operation is 0 (CPOL = 0, CPHA = 0)
BC_SPI_MODE_1 // SPI mode of operation is 1 (CPOL = 0, CPHA = 1)
BC_SPI_MODE_2 // SPI mode of operation is 2 (CPOL = 1, CPHA = 0)
BC_SPI_MODE_3 // SPI mode of operation is 3 (CPOL = 1, CPHA = 1)
```

## Transmiting and receiving data

The transmission can be done synchronously (blocking read and write) or asynchronously (non-blocking read and write).
With asynchronous transmition it is neccessary to first check if the previous operation has ended.

```c
if (bc_spi_is_ready())
{
    // Start new stransfer
}
```

During transmission you are sending data out at `MOSI` pin and at the same time receiving data at `MISO` pin. So every transmission is basically also receiving data. So the functions have always parameters for both buffers.

### Synchronous transfer

You need to create transmit and receive buffer. Then you start the blocking transfer.

```c
uint8_t tx_buffer[2] = { 0x20, 0x00 };
uint8_t rx_buffer[2];

bc_spi_transfer(tx_buffer, rx_buffer, sizeof(rx_buffer));
```

If you are just transmitting data, then replace the `rx_buffer` by `NULL` and vice-versa for just receiving. The function returns `false` if the previous asynchronous transfer has not ended yet.

### Asynchronous transfer

This is non-blocking transfer where the callback function is called when the transfer is completed.

```c
// In async transmit the buffers must be global or
// in the function but defined as a static
uint8_t tx_buffer[2] = { 0x20, 0x00 };
uint8_t rx_buffer[2];

void send_data(void)
{
    // Check if previous asynchronous transfer is not running
    if (bc_spi_is_ready())
    {
        // Set event handler and optional parameter (NULL for now)
        bc_spi_async_transfer(tx_buffer, rx_buffer, sizeof(tx_buffer), _bc_spi_event_handler, NULL)
    }
}

void _bc_spi_event_handler(bc_spi_event_t event, void *event_param)
{
    (void) event_param;

    if (event == BC_SPI_EVENT_DONE)
    {
        // Transfer done, you can for example handle received data or initiate a new transfer
    }
}
```

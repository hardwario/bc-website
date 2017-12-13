---
title: "How to: EEPROM"
---

EEPROM is a special kind of memory. It is small (**6 KB on Core module chip**) memory with limited number of write/erase cycles. It is non-volatile memory - which means that it does not require power to retain stored information. **Which means that bytes written/stored inside the EEPROM will stay there until erased/rewritten.**

Don't be afraid of limited W/E cycles. In standard conditions the chip guarantees 100 000 cycles. Remember that those cycles are *Write/Erase* -> *Reading* from the EEPROM do not count, so it is completely safe to read from it as much as you wish.



## EEPROM Size
BigClown Core module has 6 KB EEPROM included. In case you need to find this value out inside your code, there is a function for this inside the SDK:
`size_t bc_eeprom_get_size(void)`


## EEPROM Write
Writing to EEPROM is very easy. It takes only one call to this function:
`bool bc_eeprom_write(uint32_t address, const void *buffer, size_t length)`

**Parameters taken:**

- `address` - start address (starts at 0, ends at 6143)
- `buffer` - pointer to source buffer, from which data will be red (can be any type - int, char, float, ...)
- `length` - number of bytes to by written

**Returned value** indicates whether the write process was successful or not. 

It is completely up to you from what address you start to write. You can start from 0, 42, 46 or 666. Just make sure you won't accidentally overwrite any of yours important data.

Always make sure that you have correctly chosen the `length` parameter. If you want to write some numeric value, you can use the `sizeof()` function to find out the correct number. Let's say that you have a *float* variable and you want to write this number to address 0:
```c
float var = 3.14159;
bc_eeprom_write(0, &var, sizeof(var));
```


## EEPROM Read
Reading from the EEPROM is similar to writing. There is appropriate function for this task:
`bool c_eeprom_read(uint32_t address, void *buffer, size_t length)`

Same parameters and return value purpose. Only exception is that the `buffer` is now pointer to the destination buffer where data from EEPROM will be written to.

Let's say that now you want to read previously saved value and store it inside variable called buf. You also know that *float* value has size of four bytes:
```c
float buf;
bc_eeprom_read(0, &buf, 4);
```



## R/W Example
In this example we will write float value and string to EEPROM immediately after Core boot. On every press of a button the data will be retrieved from EEPROM and sent to computer. To test that the memory is really persistent you can try to comment both `bc_eeprom_write*` lines out (after running the original example once, of course). It will still work.

The output in serial console will look like this:
```
EEPROM size: 6144
Data:
3.141590
hello world!
```
**Example**
```c
#include "bcl.h"
#include "bc_usb_cdc.h"

bc_button_t button;

void button_event_handler(bc_button_t *self, bc_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == BC_BUTTON_EVENT_PRESS)
    {
        size_t eeprom = bc_eeprom_get_size();
        char buffer[100];
        char readEeprom[13];
        float readFloat;

        bc_eeprom_read(0, &readFloat, 4);
        bc_eeprom_read(4, readEeprom, 12);
        readEeprom[12] = '\0';

        sprintf(buffer, "EEPROM size: %d\r\nData:\r\n%f\r\n%s\r\n", eeprom, readFloat, readEeprom);

        bc_usb_cdc_write(buffer, strlen(buffer));
    }
}

void application_init(void)
{
    float toWriteFloat = 3.14159;
    char toWrite[] = "hello world!";
    bc_eeprom_write(0, &toWriteFloat, sizeof(toWriteFloat));
    bc_eeprom_write(sizeof(toWriteFloat), toWrite, sizeof(toWrite));

    // Initialize button
    bc_button_init(&button, BC_GPIO_BUTTON, BC_GPIO_PULL_DOWN, false);
    bc_button_set_event_handler(&button, button_event_handler, NULL);

    bc_usb_cdc_init();
}

```
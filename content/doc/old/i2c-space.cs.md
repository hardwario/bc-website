# I²C Address Space


The following tables lists BigClown I²C address space.
All addresses are listed in 7-bit format.


| Address | Chip         | BigClown Device      | Remark                                  |
| :------ | :----------- | :------------------- | :-------------------------------------- |
| 0x00    | *(reserved)* |                      | I²C reserved address                    |
| 0x01    | *(reserved)* |                      | I²C reserved address                    |
| 0x02    | *(reserved)* |                      | I²C reserved address                    |
| 0x03    | *(reserved)* |                      | I²C reserved address                    |
| 0x04    | *(reserved)* |                      | I²C reserved address                    |
| 0x05    | *(reserved)* |                      | I²C reserved address                    |
| 0x06    | *(reserved)* |                      | I²C reserved address                    |
| 0x07    | *(reserved)* |                      | I²C reserved address                    |
| 0x08    | NT3H2011     | NFC Tag              | Changed from default to avoid collision |
| 0x19    | LIS2DH12     | Core Module          | Connected to I²C bus 0                  |
| 0x38    | TCA9534A     | CO2 Module           |                                         |
| 0x39    | TCA9534A     | LCD Module           |                                         |
| 0x3B    | TCA9534A     | Relay Module         | Default address                         |
| 0x3F    | TCA9534A     | Relay Module         | Alternate address                       |
| 0x40    | HDC2080      | Humidity Tag (R2.x+) | Default address                         |
| 0x41    | HDC2080      | Humidity Tag (R2.x+) | Alternate address                       |
| 0x44    | OPT3001      | Lux Meter Tag        | Default address                         |
| 0x45    | OPT3001      | Lux Meter Tag        | Alternate address                       |
| 0x48    | TMP112       | Temperature Tag      | Default address                         |
| 0x49    | TMP112       | Temperature Tag      | Alternate address                       |
| 0x49    | TMP112       | Core Module          | Connected to I²C bus 0                  |
| 0x50    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x51    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x52    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x53    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x54    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x55    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x56    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x57    | *(reserved)* | Bridge Module        | FT260 EEPROM search                     |
| 0x5F    | HTS221       | Humidity Tag (R1.x)  |                                         |
| 0x60    | MPL3115A2    | Barometer Tag        |                                         |
| 0x64    | ATSHA204A    | Core Module          | Connected to I²C bus 0                  |
| 0x70    | FT260        | Bridge Module        |                                         |
| 0x78    | *(reserved)* |                      | I²C reserved address                    |
| 0x79    | *(reserved)* |                      | I²C reserved address                    |
| 0x7A    | *(reserved)* |                      | I²C reserved address                    |
| 0x7B    | *(reserved)* |                      | I²C reserved address                    |
| 0x7C    | *(reserved)* |                      | I²C reserved address                    |
| 0x7D    | *(reserved)* |                      | I²C reserved address                    |
| 0x7E    | *(reserved)* |                      | I²C reserved address                    |
| 0x7F    | *(reserved)* |                      | I²C reserved address                    |

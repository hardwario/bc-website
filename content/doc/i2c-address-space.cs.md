---
title: Adresy na I²C sběrnici
slug: adresy-na-i2c-sbernici
---

Následuje tabulka obsahující seznam adres na sběrnici I²C obsazených v systému BigClown.

Všechny adresy jsou uvedeny v 7bitovém formátu.

| Adresa  | Obvod        | BigClown produkt     | Poznámka                                |
| :------ | :----------- | :------------------- | :-------------------------------------- |
| 0x00    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x01    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x02    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x03    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x04    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x05    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x06    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x07    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x08    | NT3H2011     | NFC Tag              | Upravena z výchozí pro předejití kolize |
| 0x19    | LIS2DH12     | Core Module          | Připojeno ke kanálu I2C0                |
| 0x38    | TCA9534A     | CO2 Module           |                                         |
| 0x39    | TCA9534A     | LCD Module           |                                         |
| 0x3B    | TCA9534A     | Relay Module         | Výchozí adresa                          |
| 0x3F    | TCA9534A     | Relay Module         | Alternativní adresa                     |
| 0x40    | HDC2080      | Humidity Tag (R2.x+) | Výchozí adresa                          |
| 0x41    | HDC2080      | Humidity Tag (R2.x+) | Alternativní adresa                     |
| 0x44    | OPT3001      | Lux Meter Tag        | Výchozí adresa                          |
| 0x45    | OPT3001      | Lux Meter Tag        | Alternativní adresa                     |
| 0x48    | TMP112       | Temperature Tag      | Výchozí adresa                          |
| 0x49    | TMP112       | Temperature Tag      | Alternativní adresa                     |
| 0x49    | TMP112       | Core Module          | Připojeno ke kanálu I2C0                |
| 0x50    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x51    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x52    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x53    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x54    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x55    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x56    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x57    | *(rezerva)*  | Bridge Module        | FT260 zde hledá paměť EEPROM            |
| 0x5F    | HTS221       | Humidity Tag (R1.x)  |                                         |
| 0x60    | MPL3115A2    | Barometer Tag        |                                         |
| 0x64    | ATSHA204A    | Core Module          | Připojeno ke kanálu I2C0                |
| 0x70    | FT260        | Bridge Module        |                                         |
| 0x78    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x79    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x7A    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x7B    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x7C    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x7D    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x7E    | *(rezerva)*  |                      | I²C rezerva                             |
| 0x7F    | *(rezerva)*  |                      | I²C rezerva                             |

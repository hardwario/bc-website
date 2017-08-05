# IFTTT - If This Then That

<!-- toc -->


## Co je IFTTT?

**IFTTT** neboli “If This Then That” je bezplatná webová služba která propojuje mnoho jiných webových služeb do jednoho místa a umožňuje vykonávat akce podle zadaných kritérií.

IFTTT umožňuje vytvářet tzv. **recepty** - jestliže se něco stane v jedné službě **This** (**spouštěč**), **Then (pak)** se něco stane v jiné službě **That** (**akce**).
Celý řetězec se nazývá **Applet**.

Jako spouštěcí služba může být použita služba **Maker** která umožňuje komunikovat s IFTTT skrze **Web request** (**POST**).

A právě službu **Maker** jsme použili pro integraci s naším systémem.


## Jak vytvoříš nový Applet?


1. Nejdříve si vytvoř účet [**IFTTT**](https://ifttt.com).

2. Po přihlášení klikni na své uživatelské jméno v pravém horním rohu, otevři Menu a zvol **"New Applet"**.

3. Otevře se stránka s "If **This** Then That" a nejdříve vyber spouštěcí službu **"This"**.

4. Ze seznamu dostupných služeb vyber jako spouštěcí službu **Maker**.

5. Připoj se k Maker kanálu a vyber možnost **"Receive a web request"**.

6. Vyplň **Event name** a vyber **"Create Trigger"**.

7. Poslední krok tě zavede zpátky na stránku "Then If This **That**", ale nyní nastavíš akci **That**.

8. Vyber akci která má být vykonána spouštěcí službou a postupuj podle instrukcí u nastavení služby.

9. Na závěr klikni na **"Create action"** a je to hotovo!


## Jak přes službu Maker pošleš data do IFTTT?


Při založení účtu u služby **Maker** se vygeneruje unikátní klíč který ti umožní komunikovat s IFTTT, tento klíč najdeš u nastavení služby Maker.

Pro nastavení služby Maker postupuj podle tohoto návodu:

1. Vyhledej službu **Maker** (v horní liště stránky IFTTT klikni na **"Search"**.)

2. Na stránce "About" klikni na **"Settings"** (v pravém horním rohu).

3. Poslední krok tě zavede na stránku nastavení služby Maker. Tady budeš potřebovat **URL** které obsahuje unikátní Maker klíč.

4. Klikni na **URL**, tímto se dostaneš na how-to stránku.

Podle zobrazeného návodu si vytvoříš finální adresu kde se budou posílat data.

**Finální adresa** bude vypadat následovně:

`https://maker.ifttt.com/trigger/{event}/with/key/{key}`

* `{event}` - krok 6 návodu "How to create an new applet?".
* `{key}` – tvůj unikátní Maker klíč

Data jsou posílána použitím metody **POST** method v **JSON** formátu:

```json
{"value1": "your_first_value", "value2": "your_second_value", "value3": "your_third_value"}
```

Můžeš poslat až **3 hodnoty** v jedné žádosti.


## Příklad


Jednoduchý **Python 3** příklad pro BigClown, sloužící k otestování služby IFTTT, můžeš najít v tomto GitHub repositáři: [**BigClown IFTTT Service Integration Example**](https://github.com/bigclownlabs/bc-ifttt).

1. Nastav tvůj název `event` a Maker `key` v **_url** proměnné ve třídě **IFTTTWorker** class.

2. Pokud chceš, tak si můžeš upravit konstanty pro limity a hysterezi teploty:

```python3
TEMPERATURE_TRESHOLD_HIGH = {top threshold temperature}
TEMPERATURE_TRESHOLD_LOW = {bottom threshold temperature}
TEMPERATURE_ALARM_HYSTERESIS = {temperature hysteresis}
```

3. Spusť program:

`python3 ifttt-bigclown.py`

# IFTTT - If This Then That

<!-- toc -->

## Introduction

**IFTTT** or “If This Then That” is a free web-based service that aggregates many other web apps into one place and can then perform actions given a certain set of criteria.

IFTTT is made to create **recipes** - If something happens in one service **This** (**Trigger**), Then something should Happen in another service **That** (**Action**).
This whole chain is called **Applet**.

As a trigger service can be used **Maker** service that allows you to communicate with IFTTT through a **Web request** (**POST**).

The Maker service is useful for BigClown Hub integration.


## How to create a new Applet?

1. The first step is to create your account on [**IFTTT**](https://ifttt.com).

2. After login, click on your username in the top-right corner and open menu, then Select **"New Applet"**.

3. This opens a page with "if **this** Then That". First select the trigger service **"this"**.

4. From the list of all services, select trigger **Maker** service.

5. Connect to the Maker channel and select option **"Receive a web request"**.

6. Fill the **event name** and select **"Create Trigger"**.

7. The last step brings you back to the page "Then if this **That**".

   But this time set **action „that“**.

8. Choose action service that you want to affected by trigger service and follow the service instructions.

9. Finally click on **"Create action"** and you are done!


## How to send data to IFTTT using Maker service?

When you create an account on the **Maker** service, maker generates a unique key that allows you to communicate with IFTTT.

This key can be found in the Maker settings.

For information about Maker service follow these instructions:

1. Search for **Maker** service. (On the top bar of IFTTT page, click on **"Search"**.)

2. On the "About" page click on **"Settings"** (in the top-right corner).

3. Last step brings you to settings page for Maker service.

   Here you will need **URL** that contains the unique Maker key.

4. Click on **URL**, that will bring you to how-to page.

According to these instructions, you can build a final address where you can send data.

The **final address** will look like this:

`https://maker.ifttt.com/trigger/{event}/with/key/{key}`

* `{event}` - Step 6 in the instructions "How to create an new applet?".
* `{key}` – your Maker unique key

Data is sent using the **POST** method in the **JSON** format:

```json
{"value1": "your_first_value", "value2": "your_second_value", "value3": "your_third_value"}
```

You can send up to **3 values** in one request.


## Example

A simple **Python 3** example for BigClown Hub has been provided to test IFTTT service.
You can find it in the following GitHub repository: [**BigClown IFTTT Service Integration Example**](https://github.com/bigclownlabs/bc-ifttt).


### Usage

1. Set your `event` name and Maker `key` in **_url** variable in **IFTTTWorker** class.

2. If you want, you can modify constants for temperature thresholds and hysteresis:

```python3
TEMPERATURE_TRESHOLD_HIGH = {top threshold temperature}
TEMPERATURE_TRESHOLD_LOW = {bottom threshold temperature}
TEMPERATURE_ALARM_HYSTERESIS = {temperature hysteresis}
```

3. Run it:

`python3 ifttt-bigclown.py`

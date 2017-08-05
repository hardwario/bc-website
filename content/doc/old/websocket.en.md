# WebSocket - Real-time Protocol

<!-- toc -->

Web programmers who have done more than just work with content management systems are certainly familiar with the principle of web sockets.
Basically it is a communication link established between two processes using IP technology.
Simply put, a socket is described by the pair of IP addresses, protocol and port, that is used for communication.
Higher level services use sockets to transmit data (usually in both directions).

WebSocket is similar technology transferred to the world of web applications.
We can use WebSocket to write web applications where the client (application in the browser) can establish two-way communication with the server, and can use this connection to exchange information in real time.
There’s no need to use “heartbeat” technology, where the client regularly asks the server “Do you have something for me?” (and the server usually answers “No...”).
With WebSocket it’s much easier to create real-time applications like online chat or cooperative services, or various dashboards to monitor data from sensors or control actuators.

An advantage is that the API is very simple and only requires four events and two methods.
Unlike AJAX, the connection is constantly open with data being sent from either side.
WebSocket has direct support for UTF-8 and follows the CORS security model as well as AJAX.


## Using WebSocket

[WebSocket](https://html.spec.whatwg.org/multipage/comms.html#network) offers a very simple interface to establish connections for the bi-directional exchange of messages between client and server.
On the client side (most often in the browser) the WebSocket class is available.
You can create instances of this class, and thus establish a connection with the server (provided, of course, that the server supports this technology).

```javascript
var myWebSocket = new WebSocket("ws://server.com/service");
```

As you can see, the prefix `ws://` is used for the WebSocket URL.
If the connection uses SSL/TLS, then `wss://` can be used.
When creating a new WebSocket class object, a connection is established using the ws/wss protocol and messages can be sent.

WebSocket messages are not sophisticated objects - just a simple string, and their format depends on the developer’s application.

A WebSocket object offers four events called `onopen`, `onmessage`, `onerror` and `onclose`.

The names are fairly self-explanatory:

* Event `onopen` is called when opening a connection.

  This can serve to indicate that messages can now be sent.

* Event `onclose` announces the connection has been closed.

* Event `onerror` arises when any error occurs when transmitting data or establishing a connection.

* Event `onmessage` event serves for the actual exchange of data.
  As the name suggests, it is called when a message comes from the server.
  The body of the message is transmitted in the attributes of the event.

```javascript
myWebSocket.onopen = function(e) {
  console.log("Connection opened.");
};

myWebSocket.onmessage = function(e) {
  console.log( "Message received: " + e.data);
};

myWebSocket.onclose = function(e) {
  console.log("Connection closed.");
};
```

To send messages use method `send(data)`.
The parameters are the string, blob or ArrayBuffer to be sent.

Example:

```javascript
myWebSocket.send("Hello server!");
```

When done running the application, it is possible to close the connection by using method `close()`.

The server side requires more than just a regular HTTP server – a server that supports WebSocket technology is needed.
One possibility is to use special services, e.g. a Kaazing or Jetty server, or possibly a local WebSocket node.
There is also [pywebsocket](https://github.com/google/pywebsocket), an implementation written in Python that functions as a stand-alone server, but that can also work with an Apache server (mod_pywebsocket).


## Examples of using WebSocket

Let’s look at a simple example that sets up a WebSocket connection with the Clown.Hub server, sends a message, and displays the received message.

First, we prepare the framework for the application that will serve the WebSocket:

```javascript
var websocket;

var wsConnect = function(wsUri) {
  try {
    websocket = WebSocket.connect(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  } catch (e) {
    console.log(e);
    return;
  }
}

// After connecting the initialization message is sent:
function onOpen(evt) {
  websocket.send('["clown.talk/-/config/set", {}]\n');
}

function onClose(evt) {
  // What should happen when closing the connection
}

function onMessage(evt) {
  var rawData = JSON.parse(evt.data);
  var topic = rawData[0];
  var payload = rawData[1];
  console.log(rawData, topic ,payload);
}

function onError(evt) {
  console.log("Error: " + evt.data);
}
```

We initialize the connection by calling the wsConnect function, where we pass on the WebSocket address to the server.

For example: `wss://localhost/auth/clown-talk-server_nodes_bridge_0`.

Part of the URL can also be the name and password for the connection in the form `name:password@server`, or specifically:
`wss://clown:bigclown@localhost/auth/clown-talk-server_nodes_bridge_0`.

After calling the `wsConnect` function, the connection is established and if everything is in order, the `onOpen` function is called. This function sends an initialization message to Clown.Hub.

The `onMessage` function responds to messages received - it receives them, expects them to be in Clown.Talk format, parses them and displays them on the data received console.

Messages can be sent easily using `websocket.send()`.

For example, we can send a message for a relay:

```javascript
websocket.send("[\"relay/i2c0-3b/set\", {\"state\": false}]");
```

const pythonBridge = require('python-bridge');
const python = pythonBridge();
const WebSocket = require("ws");
const serverAddress = 'ws://servers.crosside.eu/';
const rcon = require("rcon-client")
//const { token } = require('./config.json');


python.ex`import os, platform, subprocess, re, psutil`
return python`psutil.cpu_percent(interval=1)`.then(x => console.log(x))

python.ex`
import os, platform, subprocess, re, psutil
for x in range(1):
    print(psutil.cpu_percent(interval=1))
    print(psutil.virtual_memory().used / psutil.virtual_memory().total * 100)
    print(psutil.disk_usage('/').used / psutil.disk_usage('/').total * 100)`;

var ws;
//connect()
function connect() {
    ws = new WebSocket(serverAddress, {
        headers: {
            "user-agent": "Mozilla",
            'token': `${token}`
        },
        noServer: true
    });
}


//console.log("READY | Crosside-EU-01")

//ws.on('open', function () {
//    console.log("Connected | Crosside-EU-01")
//    connected = "true";
//});
//ws.on('close', function () {
//    connected = "false";
//});
//ws.on('message', function (msg) {
//
//});
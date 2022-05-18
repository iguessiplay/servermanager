const pythonBridge = require('python-bridge');
const python = pythonBridge();
python.ex`import os, platform, subprocess, re, psutil`
const Discord = require("discord.js");
const dcclient = new Discord.Client();
const WebSocket = require("ws");
const serverAddress = 'ws://servers.crosside.eu/';
const rcon = require("rcon-client")
//const { token } = require('./config.json');

//DEFINIING
clientdc.commands = new Discord.Collection()
clientdc.queue = new Map();
clientdc.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "system")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
    const command = require(join(__dirname, "system", file))
    clientdc.commands.set(command.name, command)
} //LOADING DONE

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
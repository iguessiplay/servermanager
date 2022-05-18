const google = require('googlethis');
const WebSocket = require("ws");
const pythonBridge = require('python-bridge');
const python = pythonBridge();
module.exports = {
    name: "setcpupercent",
    description: "Message",
    async execute(ws, message) {
        var cpupercent;
        var virtualmem;
        var diskusage;
        function getcpupercent() {
            python`psutil.cpu_percent(interval=1)`.then(function (x) { callback(x) })
            function callback(result) {
                cpupercent = result;
                return
            }
        }
        function getvirtualmem() {
            python`psutil.cpu_percent(interval=1)`.then(function (x) { callback(x) })
            function callback(result) {
                virtualmem = result;
                return
            }
        }
        function getdiskusage() {
            python`psutil.cpu_percent(interval=1)`.then(function (x) { callback(x) })
            function callback(result) {
                diskusage = result;
                return
            }
        }
        getcpupercent()
        getdiskusage()
        getvirtualmem()
        setTimeout(function () {
            setInterval(function () {
                getcpupercent()
                getdiskusage()
                getvirtualmem()
                console.log(cpupercent)
                console.log(diskusage)
                console.log(virtualmem)
            }, 1000)
        }, 3000)
    }
}
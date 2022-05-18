const pythonBridge = require('python-bridge');
const python = pythonBridge();
console.log("start")
function checkos() {
    python.ex`import platform`
    python`platform.system()`.then(function (x) { callback(x) })
    function callback(result) {
        console.log(result)
        if (result == "Windows") {
            console.log("start")
            python.ex`import os, subprocess`
            python`subprocess.call([r'check.bat'])`
        }
    }
}
checkos();

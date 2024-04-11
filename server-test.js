const http = require('http');
const fs = require('fs');

function ShowText() {
    // const content = document.querySelector(".content");
    // const [file] = document.querySelector("input[type=file]").files;
    // const read = new FileReader();

    // read.addEventListener("load", () => {
    //     content.innerText = read.result;
    // }, false);

    // if (file) {
    //     read.readAsText(file);
    //     const http = require('http');
    //     RequestHTTP();
    // }

    http.createServer(function (req, res) {
        fs.readFile('GetText.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }).listen(8000);
    RequestHTTP();
}

function RequestHTTP() {
    const options = {
        protocol: 'http:',
        hostname: 'localhost',
        port: 8000,
        path: '/',
        method: 'GET',
    };

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(data);
        });
    });

    req.end();
}

ShowText();
const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log("Request: " + req.url + " Request method: " + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }

        var filePath = path.resolve('./public' + fileUrl);
        var fileExt = path.extname(filePath);
        if (fileExt = '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error: 404</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error: 404 Not an html</h1></body></html>');
            return;
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error: 404 '+req.method+' not supported</h1></body></html>');
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World</h1></body></html>');
})

server.listen(port, hostname, () => {
    console.log(`Server is up at http://${hostname}:${port}`);
})
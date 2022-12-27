const http = require('http');
const url = require('url');
const fs = require('fs');


// This top level code is only being executed once, when we start the program.
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);
// Server
// Create server
// The callback is fired every time a request hits our server.
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else if (pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>')
    }
});

// Listen incoming requests from the client
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
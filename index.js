const http = require('http');
const url = require('url');

// Server

// Create server
// The callback is fired every time a request hits our server.
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>')
    }
});

// Listen incoming requests from the client
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
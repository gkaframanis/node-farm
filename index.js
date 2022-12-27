const http = require('http');

// Server

// Create server
// The callback is fired every time a request hits our server.
const server = http.createServer((req, res) => {
    res.end('Hello from the server!');
});

// Listen incoming requests from the client
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
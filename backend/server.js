const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set status code
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World!s\n'); // Send response
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
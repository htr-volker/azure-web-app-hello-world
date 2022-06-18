const http = require('http');
const process = require('process');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`Hello World from ${process.env.WEBSITE_HOSTNAME}!`);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

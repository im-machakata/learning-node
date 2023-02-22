require("http").createServer((request, response) => {
    response.end("Hello from the other side!");
}).listen(8080);
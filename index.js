const http = require('http');

function processRequest(req,res){
    let body = "This is a Node Daemon!\n";
    res.writeHead(200,{
        'Content-Length': body.length,
        'Content-Type': 'text/html'
    });
    res.end(body);
}
let s = http.createServer(processRequest);
s.listen(8080);
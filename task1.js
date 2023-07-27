var  HTTP = require('http');
const port=3030;
const server=HTTP.createServer((req,res)=>{
    res.statusCode=200;
   res.writeHead(200,{'content-type':'text/html'});
   res.end("Hello, World!");
});
server.listen(port);
// Create a HTTP server on port 8000
// Send plain text headers and 'Hello World' to each client
 
var http = require('http');
var port = process.env.PORT || 5000;
 
var counter = 0;
 
http.createServer(function (req, res) {
  	
	res.writeHead(200, {'Content-Type': 'text/html'}); // prepare response headers
 
	res.end('Hello World');
 
}).listen(port);
 
// console info message
console.log('Server running at http://127.0.0.1:' + port);

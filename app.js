const http = require('http');

http.createServer(function(req,res){

res.write('from node.js server');
	res.end();

}).listen(3000);

console.log('server started');

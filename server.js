const http = require("http"); 
const fs = require("fs"); 
let html; 

function onRequest(request,response){ 
	fs.readFile('index.html',function(err,data){ 
		response.writeHead(200,{"Content-Type":"text/html"}); 
		response.write(html); 
		response.end(); 
	});
}
http.createServer(onRequest).listen(8888);
console.log("Server started on port 8888");
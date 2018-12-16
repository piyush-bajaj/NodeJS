//import http module
const http = require("http");
//import file system module
const fs = require("fs");

//callback function on server hit
function onRequest(request, response) {
	console.log(request);
	//read file present at relative path and execute callback
	fs.readFile("./index.html",
		/**
		 * callback function 
		 * @param err (if any error while reading file return true) 
		 * @param data (buffer of the read file) 
		 *
		 **/
		function(err, data) {
			if (!err) {
				//write response header
				response.writeHead(200, { "Content-Type": "text/html" });
				//write response data
				response.write(data);
				//close response
				response.end();
			}
		}
	);
}
/**
 * create http server to listen on port
 *
 * @callback onRequest (call on hit to server)
 * @param port (list http request on port)
 **/
http.createServer(onRequest).listen(8888);
//simply print that the server has started
console.log("Server started on port 8888");
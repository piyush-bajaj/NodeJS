//import http module
const http = require("http");
//import fileserver module
const fileServer = require("./file-server");
//variable to store filename requested
let fileName;
/**
 * create http server to listen on port
 **/
http.createServer(function(request, response){
	if(request.url === "/"){
		fileName = "../application-code/index.html"
	}
	fileServer(fileName, request, response)
}).listen(8888);

//simply print that the server has started
console.log("Server started on port 8888");
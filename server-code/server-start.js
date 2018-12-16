//import http module
const http = require("http");
//import fileserver module
const fileServer = require("./file-server");
/**
 * create http server to listen on port 8888
 **/ 
http.createServer(function(request, response){
	//variable to store file to be served
	let fileName = request.url;
	//if root url requested then serve index.html
	if(request.url === "/"){
		fileName = "/index.html"
	}
	/** 
	 * call module file-server with the required arguments
	 * @argument fileName (file to be served)
	 * @argument request (request of the http server from the webpage)
	 * @argument response (response to be provided to the webpage by the http server)
	**/
	fileServer(fileName, request, response)
}).listen(8888);

//simply print that the server has started
console.log("Server started on port 8888");
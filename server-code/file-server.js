module.exports = function(){
	//import file system module
	const fs = require("fs");
	//variable to store fileName
	let fileName;
	//variable to store content-type
	let type;
	//variable to store extensions
	const extensions = {
		"html":"text/html",
		"js":"text/javascript",
		"css":"text/css",
		"json":"text/json",
		"png":"image/png",
		"jpg":"image/jpg",
		"wav":"audio/wav"
	}
	//callback function on server hit
	function onRequest(request,response){
		//check the requested url and serve accordingly the file type
		if(request.url === "/" || request.url === "/index.html"){
			fileName = "./index.html"
			type = "text/html"
		}
		//read file present at relative path and execute callback
		fs.readFile(fileName,
			/**
			 * @callback
			 * @param err (if any error while reading file return true)
			 * @param data (buffer of the read file)
			 * */
			function(err, data){
				if(!err){
					//write response header
					response.writeHead(200,{"Content-Type":type});
					//write response data
					response.write(data);
					//close response
					response.end();
				}
			}
		);
	}
}
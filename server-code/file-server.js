/** file-server module
 * to provide the request file to the webpage with proper content type based on file extension
 * @param fileName (file to be served)
 * @param request (request received from http server)
 * @param response (response to be provided to http server)
 **/
module.exports = function(fileName, request, response){
	//import file system module
	const fs = require("fs");
	//import path module
	const path = require("path");
	//variable to store rootDirectory
	let root = "../application-code";
	//variable to store complete file path
	let filepath;
	//variable to store content-type
	let type;
	//generate the full file path of the file requested and set the type for content based on extension
	if(fileName === "/index.html"){
		filepath = root + fileName;
		type = "text/html";
	}
	else{
		switch (path.extname(fileName)) {
			case ".html":
				filepath = root + fileName;
				type = "text/html";
				break;
			case ".js":
				filepath = root + fileName;
				type = "text/javascript";
				break;
			case ".css":
				filepath = root + fileName;
				type = "text/css";
				break;
			case ".json":
				filepath = root + fileName;
				type = "text/json";
				break;
			case ".jpg":
				type = "image/jpg";
			case ".png":
				filepath = root + fileName;
				type = "image/png";
				break;
			case ".wav":
				filepath = root + fileName;
				type = "audio/wav";
				break;
			default:
				filepath = null;
				break;
		}
	}
	/**
	 *  if filepath is valid then read the file fromthe location and give it in response
	 **/
	if(filepath){
		fs.readFile(filepath,
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
				else{
					console.log(`File : ${fileName} does not exist.\nThe complete filepath is ${filepath}`);
				}
			}
		);
	}
}
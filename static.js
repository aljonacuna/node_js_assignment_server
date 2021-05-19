var fs = require('fs');
var path = require('path');
module.exports = function(request, response) {

	//arrays of content types;
	const mimeTypes = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpg'
    };
    var urls = request.url;
    const ext_name = String(path.extname(urls).toLowerCase());
    //if empty it means the url request is from HTML
    const contentType = (ext_name== "") ? "html" : mimeTypes[ext_name];

    // get the path of the request concatenated the folders
    var filePath = (contentType == "html") ? filePath = "views"+urls+".html" : urls.substring(1,urls.length);
    console.log(filePath);
    fs.readFile(filePath, (error, content) => {
		if (error) {
			response.writeHead(500);
			response.end(`500 error: ${error.code}`)
		}
		else {
			response.writeHead(200, { 'Content-Type': contentType }); // indicate the request was successful
			response.end(content, 'utf-8');
		}
	});
}
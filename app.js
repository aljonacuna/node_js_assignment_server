// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
var path = require("path");
var static_content = require("./static");

// creating a server using http module:
var server = http.createServer(function (request, response){
    console.log(static_content(request, response));
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    const mimeTypes = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpg'
    }
    // this is how we do routing:
    static_content(request, response);
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");

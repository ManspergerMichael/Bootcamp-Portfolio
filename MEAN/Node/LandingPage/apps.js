const http = require('http'); 
const fs = require('fs');

var server = http.createServer(function (request, response){

    if(request.url === "/"){
        fs.readFile('index.html','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }

    if(request.url === "/ninjas"){
        fs.readFile('ninjas.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    if(request.url === "/dojos/new"){
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    
});

server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
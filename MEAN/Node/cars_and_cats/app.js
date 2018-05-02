const http = require('http'); 
const fs = require('fs');

var server = http.createServer(function (request, response){
    if(request.url === '/cars'){
        fs.readFile('./views/cars.html','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        
        });
    }
    /* to load a single image
    else if(request.url === '/cars/ebj'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/EBJ.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    */
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});

server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
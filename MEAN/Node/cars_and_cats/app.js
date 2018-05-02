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
    else if(request.url === '/cats'){
        fs.readFile('./views/cats.html','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        
        });
    }
    else if(request.url === '/new'){
        fs.readFile('./views/new.html','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        
        });
    }
    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(""+contents);
         response.end();
        });
      }
    else if(request.url === '/images/EBJ.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/EBJ.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/hunchback.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/hunchback.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/BigLittleCats.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/BigLittleCats.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/babyJag.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/babyJag.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});

server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
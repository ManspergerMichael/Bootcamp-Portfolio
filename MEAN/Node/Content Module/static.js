const fs = require('fs');
module.exports = function(){
return {
        route : function(request, response){
            if(request.url === '/'){
            fs.readFile('./views/index.html','utf8', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});  
                response.write(""+contents); 
                response.end();
                });
            }
            else if(request.url === '/dojos'){
                fs.readFile('./views/dojo.html', 'utf8', function(errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.write(""+contents);  
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
            else{
                response.end("File not found!");
            }
        }
    }
}
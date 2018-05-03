var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request,response){
    response.sendFile('cars.html',{root : __dirname});
})
app.get('/cats', function(request,response){
    response.sendFile('cats.html',{root : __dirname});
})
app.get('/form', function(request,response){
    response.sendFile('form.html',{root : __dirname});
})

app.get('/styles.css',function(request,response){
    response.sendFile('styles.css',{root : __dirname + "./static/images"});
})
app.get('/EBJ.jpeg',function(request,response){
    response.sendFile('EBJ.jpeg',{root : __dirname + "./static"});
})

app.get('/hunchback.jpeg',function(request,response){
    response.sendFile('hunchback.jpeg',{root : __dirname + "./static/images"});
})

app.get('/babyJag.jpeg',function(request,response){
    response.sendFile('babyJag.jpeg',{root : __dirname + "./static/images"});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })
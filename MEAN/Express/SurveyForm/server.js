const express = require('express');
const path = require('path');
let app = express();

//render a page with a form
app.set('views', path.join(__dirname + "/Views"))
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    console.log("root route");
    response.render('index');
})

app.post('/result', function(request, response){
    console.log("form posted");
    console.log(request.body);
    response.render('result',request.body)
})
app.listen(8000, function(errs){
    console.log("Server at 8000");
})
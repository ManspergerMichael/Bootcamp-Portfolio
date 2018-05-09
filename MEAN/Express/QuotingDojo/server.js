const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require('fs');
let app = express();



app.use(express.static(__dirname+"/static"));
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
require('./server/database');
require('./server/config/routes.js')(app);

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
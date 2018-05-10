const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require('fs');
let app = express();



app.use(express.static(__dirname+"/client/static"));
app.set('views', __dirname+"/client/views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
require('./server/database');//starts the database connection when server starts .js is not required
require('./server/config/routes.js')(app);//requires the routs file

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
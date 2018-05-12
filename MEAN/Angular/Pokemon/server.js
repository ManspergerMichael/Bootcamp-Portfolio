const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/API/dist/API'));

//mongoose.connect('mongodb://localhost/Pok');


app.listen(8000, function(errs){
    console.log("Server at 8000");
})
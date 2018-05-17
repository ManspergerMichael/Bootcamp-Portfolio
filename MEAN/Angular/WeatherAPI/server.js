const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/WatherAPI/dist/WatherAPI'));

//mongoose.connect('mongodb://localhost/<dbname>')

//schema

//routes

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
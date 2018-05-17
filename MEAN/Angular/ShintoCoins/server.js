

const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/ShintoCoins/dist/ShintoCoins'));
var path = require('path');

//mongoose.connect('mongodb://localhost/<dbname>

//<schema>

//<routes>
app.all("*", (request,response,next) =>{
    response.sendFile(path.resolve("./ShintoCoins/dist/ShintoCoins/index.html"))
});

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
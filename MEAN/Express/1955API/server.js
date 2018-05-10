const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955API');
var APISchema = new mongoose.Schema({ //creates the model to be sent to the DB
    name: String
   }, {timestamps: true});
   mongoose.model('API', APISchema); // We are setting this Schema in our Models as 'User'
   var API = mongoose.model('API')

app.get('/', function(request,response){
    API.find({}, function(err, api){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:api})
        }
    })
})

app.get('/new/:name/', function(request,response){
    var newName = request.params.name;
    API.create({name:newName}, function(err,api){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:api})
        }
    })
})

app.get('/remove/:name', function(request,response){
    var removeName = request.params.name;
    API.deleteOne({name:removeName}, function(err,api){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:api})
        }
    })

})

app.get('/:name', function(request,response){
    API.find({name: request.params.name}, function(err,api){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:api})
        }
    })
})

app.listen(8000, function(errs){
    console.log("Server at 8000");
})

/*

*/
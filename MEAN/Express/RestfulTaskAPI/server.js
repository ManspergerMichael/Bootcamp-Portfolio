const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/RestfulTaskAngular/dist/RestfulTaskAngular'));

mongoose.connect('mongodb://localhost/RestfulAPI');
var TaskSchema = new mongoose.Schema({ //creates the model to be sent to the DB
    title: String,
    description: {type: String, default:""},
    completed: {type: Boolean, default: false},
   }, {timestamps: true});
   mongoose.model('Task_API', TaskSchema); // We are setting this Schema in our Models as 'User'
   var Task = mongoose.model('Task_API')

app.get('/getAll', function(request, response){
    Task.find({}, function(err,task){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:task})
        }
    })
})
app.get('/find/:id', function(request,response){
    console.log("In server");
    Task.find({_id:request.params.id},function(err,task){
    if(err){
        console.log("returned error", err);
        response.json({message: "Error", error: err})
    }
    else {
        console.log("sending");
        response.json({message: "Success", data:task})
    }
    })
})
app.post('/update/:id', function(request,response){
    Task.findByIdAndUpdate({_id: request.params.id},{$set:{title:request.body.title, description:request.body.description, completed:request.body.completed}}, function(err,task){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:task})
        }
    })
    //console.log("Update function. I don't know how to pass parameters through a service.")
})

app.get('/delete/:id', function(request,response){
    console.log("IN server delete");
    console.log(request.params.id);
    Task.deleteOne({_id:request.params.id}, function(err,task){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:task})
        }
    })
})

app.post('/create', function(request, response){
    console.log(request.body);
    var newTask = new Task({title:request.body.title, description:request.body.description})
        newTask.save(function(err,task){
        if(err){
            console.log("returned error", err);
            response.json({message: "Error", error: err})
        }
        else {
            response.json({message: "Success", data:newTask})
        }
    })
    //response.json({message: "Create"});
})





   app.listen(8000, function(errs){
    console.log("Server at 8000");
})
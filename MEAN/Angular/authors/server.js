const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Authors/dist/Authors'));
var path = require('path')

mongoose.connect('mongodb://localhost/Authors');

//<schema>
var AuthorSchema = new mongoose.Schema({ //creates the model to be sent to the DB
    name:{type:String,requred:true, minlength:[3, "Name must be longer than 3 characters"]}
   }, {timestamps: true});
   mongoose.model('Author', AuthorSchema); // We are setting this Schema in our Models as 'User'
   var Author = mongoose.model('Author')

//<routes>
app.get('/getAll', function(req,res){
    Author.find({}, function(err,auth){
        if(err){
            //console.log("returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data:auth})
        }
    })
})

app.post('/create', function(req,res){
    console.log(req.body);
    Author.create({name: req.body.name},function(err,auth){
        if(err){
            console.log({message: "Error", error: err});
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data:auth})
        }
    })
})

app.get('/find/:id', function(req,res){
    Author.find({_id:req.params.id}, function(err,auth){
        if(err){
            console.log("returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data:auth})
        }
    })
})

app.post('/edit/:id', function(req,res){
    console.log(req.params.id, req.body)
    Author.findByIdAndUpdate({_id:req.params.id}, {name:req.body.name}, function(err,auth){
        if(err){
            console.log("returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success",data: auth})
        }
    })
})
app.get('/delete/:id', function(req,res){
    console.log("server delete", req.params.id)
    Author.deleteOne({_id:req.params.id}, function(err,auth){
        if(err){
            console.log("returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success",data: auth})
        }
    })
})

app.all("*", (request,response,next) =>{
    response.sendFile(path.resolve("./Authors/dist/Authors/index.html"))
});

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
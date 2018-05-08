const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require('fs');
let app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname+"/static"));
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({ //creates the model to be sent to the DB
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
   



app.get('/', function(request, response){
    User.find({}, function(err,users){
        if(err){
            console.log("Something went wrong.")
        }
        if(users){
            console.log(users);
            response.render('index',{users :users});
        }
    })
})

app.post('/users', function(request, response){
    //console.log("POST DATA",request.body);
    //create a new user
    var user = new User({name: request.body.name, age: request.body.age});
    //save user to DB
    user.save(function(err){
        //print error or sucsess message
        if(err){
            console.log('something went wrong');
        }
        else{
            console.log('successfully added a user');
            response.redirect('/');
        }
    })
    
})

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
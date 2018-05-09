const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');
var fs = require('fs');
let app = express();
app.use(flash());

app.set('trust proxy', 1)//trust first proxy
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

var mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname+"/static"));
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/LoginRegistration');
var UserSchema = new mongoose.Schema({ 
    firstname: {type: String, required: true, minlength:[4, "First name should be longer that 4 characters"]},
    lastname: {type: String, required: true, minlength: [4, "Last name should be longer that 4 characters"]},
    email: {type: mongoose.SchemaTypes.Email, required: true},
    salt: {type: String, required: true}
   }, {timestamps: true});

mongoose.model('User', UserSchema); 
var User = mongoose.model('User'); 

app.get('/', function(request,response){
    response.render('landing');
})
app.get('/sucess', function(request,response){
    response.render('sucess')
})
//login
app.post('/login', function(request,response){
    //console.log(request.body);
    User.findOne({email:request.body.email}).exec(function(err,user){
        bcrypt.compare(request.body.password, user.salt)
        .then( result => {
            console.log('match');
            response.redirect('/sucess');
        })
        .catch( error => {
            console.log('not a match');
            //console.log(error.message);
            request.flash('errors', "Invalid password");
            response.redirect('/');
            
        })
    })
    
    
})
//register
app.post('/register', function(request,response){
    //console.log(request.body);
    if(request.body.password.length < 8){
        request.flash('errors', "Password should be longer than 8 characters.");
        response.redirect('/');
    }
    //hash password
    bcrypt.hash(request.body.password, 10)
    .then(saltedPassword =>{
        //create user
        //console.log(saltedPassword);
        var user = new User({firstname:request.body.firstname,lastname:request.body.lastname, email:request.body.email,salt:saltedPassword});
        user.save(function(err){
            if(err){
                //console.log('something went wrong', err);
                for(var key in err.errors){
                    request.flash('errors', err.errors[key].message);
                }
                response.redirect('/');
            }
            else{
                console.log('successfully added a user');
                response.redirect('/sucess');
            }
        })
    })  
})



app.listen(8000, function(errs){
    console.log("Server at 8000");
})
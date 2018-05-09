const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');
const fs = require('fs');
let app = express();

//database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//static content 
app.use(express.static(__dirname+"/static"));
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');
//body parser
app.use(bodyParser.urlencoded({extended: true}));
//session
app.set('trust proxy', 1)//trust first proxy
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

//database conection and schema creation
mongoose.connect('mongodb://localhost/SessionTest');
var userSchema = new mongoose.Schema({ 
    name: String,
    password: String,
    email: String,
   }, {timestamps: true});

mongoose.model('User', userSchema); 
var User = mongoose.model('User'); 

//routes
app.get('/', function(request, response){
    response.render('landing');
})

app.post('/sessions', (req, res) => {
    console.log(" req.body: ", req.body);
    User.findOne({email:req.body.email, password: req.body.password}, (err, user) => {
        if (err) {
            // Code...
        }
        else {
            bcrypt.hash('password_from_form', 10)
                .then(hashed_password => {
                    //function statements go here
                })
                .catch(error => {
	 
                });

    		req.session.id = user._id;
            req.session.email = user.email;
        }
    })
})


app.listen(8000, function(errs){
    console.log("Server at 8000");
})
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

mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({ 
    name: String,
    quote: String
   }, {timestamps: true});

mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote'); 

app.get('/', function(request,response){
    response.render('index');
})

app.get('/quotes', function(request,response){
    Quote.find({}).sort('-date').exec(function(err,quotes){
        //console.log(quotes);
        if(err){
            console.log("Something went wrong.")
            response.redirect('/');
        }
        if(quotes){
            console.log(quotes);
            response.render('quotes',{quotes :quotes});
        }
    })
})

app.post('/add', function(request,response){
    console.log(request.body)
    var quote = new Quote({name : request.body.name, quote : request.body.quote});
    quote.save(function(err){
        if(err){
            console.log('something went wrong');
        }
        else{
            console.log('successfully added a user');
            response.redirect('/quotes');
        }
    })
})


app.listen(8000, function(errs){
    console.log("Server at 8000");
})
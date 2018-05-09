const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({ 
    name: String,
    quote: String
   }, {timestamps: true});

mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote'); 

module.exports = {

    index : function(request,response){
        response.render('index');
    },

    getQuotes : function(request,response){
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
    },

    addQuote : function(request,response){
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
    }

}
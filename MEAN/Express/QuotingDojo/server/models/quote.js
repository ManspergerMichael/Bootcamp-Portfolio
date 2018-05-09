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
    findAll : function(request){
        Quote.find({}).sort('-date').exec(function(err,quotes){
            return(err,quotes);
            
        })
    },
    
    addQuote : function(request){
        var quote = new Quote({name : request.body.name, quote : request.body.quote});
        quote.save(function(err){
            return(err);
        })
    }
}
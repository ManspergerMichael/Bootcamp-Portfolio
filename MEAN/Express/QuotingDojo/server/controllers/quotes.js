
const mongoose = require('mongoose'); 
const Quote = mongoose.model('Quote'); 
module.exports = {

    index : function(request,response){
        response.render('index');
    },

    getQuotes : function(request,response){
        Quote.find()
            .then(function(quotes){
                response.render('quotes',{quotes:quotes})
            })
    },

    addQuote : function(request,response){
       Quote.create(request.body)
        .then(function(quote){
            response.redirect('/quotes');
        })
        .catch(function(err){
            response.render('index', err)
        })
        
    }

}
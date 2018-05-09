var quote = require('../models/quote.js');

module.exports = {

    index : function(request,response){
        response.render('index');
    },

    getQuotes : function(request,response){
        quote.findAll(request,response, function(err,quotes){
            if(err){
                console.log("Something went wrong.")
                response.redirect('/');
            }
            if(quotes){
                console.log(quotes);
                response.render('quotes',{quotes :quotes});
            }
        });
    },

    addQuote : function(request,response){
        quote.addQuote(request,response, function(err){
            if(err){
                console.log('something went wrong', err);
                //flash messages
            }
            else{
                console.log('successfully added a user');
                response.redirect('/quotes');
            }
        });
        
    }

}
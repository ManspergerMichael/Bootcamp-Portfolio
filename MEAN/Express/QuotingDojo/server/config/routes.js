var quotes = require('../controllers/quotes.js');
module.exports = function(app){

app.get('/', function(request,response){
    quotes.index(request,response);
})

app.get('/quotes', function(request,response){
    quotes.getQuotes(request,response);
})

app.post('/add', function(request,response){
    console.log(request.body);
    quotes.addQuote(request,response);
})
}//end export
const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/quotes');
const QuoteSchema = new mongoose.Schema({ 
    name: String,
    quote: String
   }, {timestamps: true});

//creates/sets collection in database
mongoose.model('Quote', QuoteSchema); 
//const Quote = mongoose.model('Quote'); 
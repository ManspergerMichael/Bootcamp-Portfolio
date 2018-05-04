const express = require('express');
const session = require('express-session');
//var bodyParser = require('body-parser');
var app = express();
app.use(session({
    secret: 'Bazinga!',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.set('view engine', 'ejs');
app.set('views', __dirname); 


app.get('/', function(req, res) {
    req.session.counter += 1;
    result = req.session.counter;
    res.render("index",{count:result});
})


app.listen(8000, function() {
    console.log("listening on port 8000");
});
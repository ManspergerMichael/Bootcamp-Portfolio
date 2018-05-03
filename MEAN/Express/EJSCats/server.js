var express = require('express');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>");
})

app.get("/cats", function(request,response){
    response.render('cats');
})

app.get("/Squeeky", function(request,response){
    var cat_details ={
        name : "Squeeky",
        food : "Blood of his enemies",
        pic : "/images/babyJag.jpeg",
        likes: ["Sleeping","Eating", "Meowing"]

    }
    response.render('details', {cat: cat_details});
})

app.get("/Momma", function(request,response){
    var cat_details ={
        name : "Lilith",
        food : "Ungrateful Children",
        pic : "/images/BigLittleCats.jpeg",
        likes: ["Sleeping","Eating", "Thinking about when the kids leave the house."]

    }
    response.render('details', {cat: cat_details});
})

app.listen(8000, function(){
    console.log("Listening on port 8000")
})
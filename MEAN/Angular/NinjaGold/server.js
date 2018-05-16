const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(express.static(__dirname + '/NinjaGold/dist/NinjaGold'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/NinjaGold');

var scoreSchema = new mongoose.Schema({
    user : {type: String, required:[true,"Username is required."]},
    score : {type: Number}
},{timestamps: true})
mongoose.model('HighScores', scoreSchema);
var scores = mongoose.model('HighScores');


app.get('/topTen', function(request,response){
    scores.find({}, null, {sort:{score:'descending'},limit:10}, function(errs,data){
        if(errs){
            console.log("errors");
        }
        else{
            response.json(data);
        }
    })
})

app.post('/scores', function(request,response){
    scores.create({user:request.body.user, score:request.body.score}, function(err,data){
        if(err){
            console.log("Error!");
            console.log(err['errors']['user']['properties']['message']); //
            let result = {
                status: "Not goodly",
                errors: err['errors']['user']['properties']['message'],
            }
            response.json(result);
        }
        else{
            
            response.json(data);
        }
    })
})





app.listen(8000, function(errs){
console.log("Server at 8000");
})
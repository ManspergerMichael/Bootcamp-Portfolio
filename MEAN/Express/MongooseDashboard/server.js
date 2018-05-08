const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
var fs = require('fs');
let app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname+"/static"));
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/Mechs');
var MechSchema = new mongoose.Schema({ 
    name: String,
    class: String,
    faction: String,
    hardpoints: Number
   }, {timestamps: true});

mongoose.model('Mech', MechSchema); 
var Mech = mongoose.model('Mech'); 

app.get('/', function(request,response){
    Mech.find({}).sort('-date').exec(function(err,mechs){
        //console.log(quotes);
        if(err){
            console.log("Something went wrong.", err);
            for(var key in err.errors){
                req.flash('errors', err,errors[key].message);
            }
            response.render('index');
        }
        if(mechs){
            //console.log(mechs);
            response.render('index',{mechs:mechs});
        }
    })

})

//new route
app.get('/new', function(request, response){
    response.render('new');
})
//new process
app.post('/processNew', function(request, response){
    console.log(request.body);
    var mech = new Mech({name : request.body.name, class : request.body.class, faction : request.body.faction, hardpoints : request.body.hardpoints});
    mech.save(function(err){
        if(err){
            console.log('something went wrong');
        }
        else{
            console.log('successfully added a mech');
            response.redirect('/');
        }
    })
})

//id route
app.get('/id/:mechID', function(request, response){
    //console.log(request.params);
    var mechID = request.params.mechID;
    //console.log(mechID);
    Mech.find({_id: mechID}, function(err,mech){
        //console.log(mech);
        response.render('id',{mech:mech});
    })
    
})

//edit route
app.get('/edit/:mechID', function(request, response){
    //console.log(request.params);
    var mechID = request.params.mechID;
    Mech.find({_id: mechID}, function(err,mech){
        response.render('edit',{mech:mech});
    })
})

//edit process
app.post('/editProcess/:mechID', function(request, response){
    console.log(request.body);
    var mechID = request.params.mechID;
    //callback at the end of the next line
    Mech.update({_id:mechID},{$set:{name: request.body.name, class: request.body.class, faction : request.body.faction, hardpoints : request.body.hardpoints}}, function(err){
        response.redirect('/');
    });
})

//delete
app.get('/delete/:mechID', function(request, response){
    Mech.remove({_id: request.params.mechID}, function(err){
        console.log(err);
        response.redirect('/');
    })
})

app.listen(8000, function(errs){
    console.log("Server at 8000");
})
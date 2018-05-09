const mongoose = require('mongoose');

const bcrypt = require('bcrypt-as-promised');

module.exports = function(app) {
app.get('/', function(request,response){
    response.render('landing');
})
app.get('/sucess', function(request,response){
    response.render('sucess')
})
//login
app.post('/login', function(request,response){
    //console.log(request.body);
    User.findOne({email:request.body.email}).exec(function(err,user){
        bcrypt.compare(request.body.password, user.password)
        .then( result => {
            console.log('match');
            response.redirect('/sucess');
        })
        .catch( error => {
            console.log('not a match');
            //console.log(error.message);
            request.flash('errors', "Invalid password");
            response.redirect('/');
            
        })
    })
    
    
})
//register
app.post('/register', function(request,response){
    //console.log(request.body);
    //hash password
    bcrypt.hash(request.body.password, 10)
    .then(saltedPassword =>{
        //create user
        //console.log(saltedPassword);
        var user = new User({firstname:request.body.firstname,lastname:request.body.lastname, email:request.body.email,password:saltedPassword});
        user.save(function(err){
            if(err){
                //console.log('something went wrong', err);
                for(var key in err.errors){
                    request.flash('errors', err.errors[key].message);
                }
                response.redirect('/');
            }
            else{
                console.log('successfully added a user');
                //Error here
                response.redirect('/sucess');
            }
        })
    })  
})

}//exports
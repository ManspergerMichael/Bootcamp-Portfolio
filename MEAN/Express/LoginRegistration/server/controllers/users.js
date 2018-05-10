const mongoose = require('mongoose');
const User = mongoose.model('User');
const flash = require('express-flash');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');

module.exports ={
    login : function(request,response){
       User.findOne({email :request.body.email})
        .then(function(user){
            bcrypt.compare(request.body.password, user.password)
                .then(function(user){
                    request.session.id = user._id;
                    console.log(request.session.id);
                    response.redirect('/sucess');
                })
                .catch(function(err){
                    for(var key in err.errors){
                        request.flash('errors', err.errors[key].message);
                    }
                    response.redirect('/');
                })
            
        })
        .catch(function(err){
            for(var key in err.errors){
                request.flash('errors', err.errors[key].message);
            }
            response.redirect('/');
        })
    },

    register : function(request,response){
        bcrypt.hash(request.body.password, 10)
        .then(saltedPassword =>{
            //create user
            //console.log(saltedPassword);
            user = User.create({firstname:request.body.firstname,lastname:request.body.lastname, email:request.body.email,password:saltedPassword}, (err,user) =>{
                if(user){
                    User.findOne({email:user.email})
                        .then(function(user){
                        request.session.id = user._id;
                        console.log(request.session.id);
                        response.redirect('/sucess');
                        })
                }
                else {
                    for(var key in err.errors){
                        request.flash('errors', err.errors[key].message);
                    }
                    response.redirect('/');
                }
            })
            
        })
    },
       
}

const mongoose = require('mongoose');
const Mech = mongoose.model('Mech');
const flash = require('express-flash');
const session = require('express-session');


module.exports = {
    getAll : function(request,response){
        Mech.find({}).sort('-date')
            .then(function(mechs){
                response.render('index',{mechs:mechs});
            })
    },

    createNew : function(request, response){
        Mech.create(request.body)
            .then(function(mech){
                response.redirect('/');
            })
            .catch(function(err){
                for(var key in err.errors){
                    request.flash('errors', err.errors[key].message);
                }
                response.redirect('new');
            })
    },
    delete : function(request, response, id){
        Mech.remove({_id: id })
            .then(function(){
                response.redirect('/');
            })
    },


    getMech : function(request, response, id){
        Mech.find({_id: id})
            .then(function(mech){
                response.render('id',{mech:mech});
            })
            
    },
    getAndEdit : function(request, response, id){
        Mech.find({_id: id})
            .then(function(mech){
                response.render('edit',{mech:mech});
        })
        .catch(function(err){
            console.log('Error: '+ err)
            response.redirect('/');
        })
    },
    editMech : function(request, response, id){
        Mech.update({_id:id},{$set:{name: request.body.name, class: request.body.class, faction : request.body.faction, hardpoints : request.body.hardpoints}}, function(err){
            if(err){
                console.log(err);
            }
            response.redirect('/');
        });
    }

}
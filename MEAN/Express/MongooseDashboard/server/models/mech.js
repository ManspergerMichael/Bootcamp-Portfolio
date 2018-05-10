const mongoose = require('mongoose');

var MechSchema = new mongoose.Schema({ 
    name: {type: String, required: true, minlength:[4, "Name is too short"]},
    class: {type: String, required: true, minlength: 4},
    faction: {type: String, required: true, minlength: 4},
    hardpoints: {type: Number, required: true}
   }, {timestamps: true});

mongoose.model('Mech', MechSchema); 
//var Mech = mongoose.model('Mech'); 
const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({ 
    firstname: {type: String, required: true, minlength:[4, "First name should be longer that 4 characters"]},
    lastname: {type: String, required: true, minlength: [4, "Last name should be longer that 4 characters"]},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength:[8,"Password Should be longer than 8 characters"]}
   }, {timestamps: true});

mongoose.model('User', UserSchema); 
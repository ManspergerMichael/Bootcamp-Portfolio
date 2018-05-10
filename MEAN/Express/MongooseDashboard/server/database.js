
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, 'models');

mongoose.connect('mongodb://localhost/Mechs');

//connects to each file in models
fs.readdirSync(modelsPath).forEach(file => {
    require(path.join(modelsPath, file));
})
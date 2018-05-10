const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, 'models');

mongoose.connect('mongodb://localhost/LoginRegistration');

fs.readdirSync(modelsPath).forEach(file => {
    require(path.join(modelsPath, file));
})
const User = require('../controllers/users.js');

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
    User.login(request,response);
})
//register
app.post('/register', function(request,response){
    User.register(request,response);
    //console.log(request.body);
    //hash password
    
})}
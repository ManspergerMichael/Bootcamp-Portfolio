var mech = require('../controllers/mechs.js');
module.exports = function(app){


app.get('/', function(request,response){
    mech.getAll(request, response);

})

//new route
app.get('/new', function(request, response){
    response.render('new');
})
//new process
app.post('/processNew', function(request, response){
    mech.createNew(request,response);
})

//id route
app.get('/id/:mechID', function(request, response){
    //console.log(request.params);
    var id = request.params.mechID;
    //console.log(mechID);
    mech.getMech(request,response,id)
    
})

//edit route
app.get('/edit/:mechID', function(request, response){
    //console.log(request.params);
    var id = request.params.mechID;
    mech.getAndEdit(request,response,id)
    
})

//edit process
app.post('/editProcess/:mechID', function(request, response){
    console.log(request.body);
    var id = request.params.mechID;
    mech.editMech(request,response,id)
    //callback at the end of the next line
})

//delete
app.get('/delete/:mechID', function(request, response){
    var id = request.params.mechID;
    mech.delete(request, response, id);
})

}
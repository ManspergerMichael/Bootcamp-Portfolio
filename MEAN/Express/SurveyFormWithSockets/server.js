const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

//render a page with a form
app.set('views', path.join(__dirname + "/Views"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    //console.log("root route");
    response.render('index');
})

/*
app.post('/result', function(request, response){
    //console.log("form posted");
    //console.log(request.body.name);
    response.render('result', {result:request.body})
})
*/

/*************
 * Socket function
 */

io.on('connection', function (socket) {
  
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { 
      console.log(data.msg); 
    });
    socket.on('posting_form', function (data){
        //console.log(data.msg['name']);
        randNum = Math.floor(Math.random()*1000);
        console.log(randNum);
        socket.emit('updated_message', {msg: "The server recieved<br> Name:" +data.msg['name']+"<br> Location: "+data.msg['location']+"<br> Language:"+data.msg['language']+"<br> Comment: "+data.msg['comment']+"<br>"});
        socket.emit('random_number', {msg: "Your lucky number is "+randNum})

    });
      
  });




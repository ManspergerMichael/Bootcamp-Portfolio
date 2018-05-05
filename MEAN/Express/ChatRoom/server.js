const express = require('express');
const path = require('path');
let app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
app.set('views', path.join(__dirname + "/views"))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    //console.log("root route");
    response.render('index');
})
app.get('/styles.css',function(request,response){
    response.sendFile('styles.css',{root : __dirname + "./static/images"});
})

var users ={}

io.sockets.on('connection', function(socket){
    socket.on('registerUser', function(registeration){
        var username = registeration.name;
        users[socket.id] = username;
        socket.broadcast.emit('msg', {msg:`${username} has joined the room`});
        //store new user in users
        //send new user to existing people in room
    });

    socket.on('msg', function(message){
        var username = users[socket.id]
        io.emit('msg', {msg: `${username} says: ${message.message_text}`});
    })

    socket.on('disconnect', function(){
        console.log(`${socket.id} disconnected`);
    })
});
const express = require('express');
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

const path = require('path');

app.use(express.static(__dirname + "/public" ));

const { mongoose } = require('./db.js');
const contactusfunctions = require('./controllers/contactusfunctions')

app.use(express.json())

app.use('/contactus', contactusfunctions)

app.get('/',function(req,res){
    res.redirect('index.html');
    });

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

io.on('connection',function(socket){
 
    socket.on('stream',function(image){
        socket.broadcast.emit('stream',image);  
    });
 
});

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

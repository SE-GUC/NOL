
const express = require('express');
var app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

const { mongoose } = require('./db.js');


const path = require('path');

const contactusfunctions = require('./controllers/contactusfunctions')

app.use(express.json())

app.use('/contactus', contactusfunctions)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))




const express = require('express');
var app = express();

const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

const { mongoose } = require('./db.js');
const userfunctions = require('./controllers/userfunctions')

app.use(express.json())

app.use('/users', userfunctions)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))




const express = require('express');
var app = express();

const path = require('path');

const { mongoose } = require('./db.js');
const eventfunctions = require('./controllers/eventfunctions')

app.use(express.json())

app.use('/events', eventfunctions)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


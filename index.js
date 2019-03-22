
const express = require('express');
var app = express();

const path = require('path');

const { mongoose } = require('./db.js');
const aboutusfunctions = require('./controllers/aboutusfunctions')
const MUNuserfunctions = require('./controllers/MUNuserfunctions')

app.use(express.json())

app.use('/aboutus', aboutusfunctions)
app.use('/MUNuser', MUNuserfunctions)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))




const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const { mongoose } = require('./db.js');
const userfunctions = require('./controllers/userfunctions')

app.use('/users', userfunctions)
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))




const express = require('express');
var app = express();

const path = require('path');

const { mongoose } = require('./db.js');
const committieeFunctions = require('./controllers/committieeFunctions')
const AWG_AboutUsFunctions= require('./controllers/AWG_AboutUsFunctions')
const MUNuserControl= require('./controllers/MUNuserControl')
const MUNadminControl= require('./controllers/MUNadminControl')
const admin= require('./controllers/AWGadminControl')

app.use(express.json())

app.use('/committiees', committieeFunctions)
app.use('/AWG_AboutUs', AWG_AboutUsFunctions)
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/AWG/signin/admin', admin);
app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



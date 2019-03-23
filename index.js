
const express = require('express');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
var app = express();
const path = require('path');
const { mongoose } = require('./db.js');
const MUNadminControl= require('./controllers/MUNadminControl');
const MUNuserControl = require('./controllers/MUNuserControl');
const signup = require('./controllers/MUNsignup');

app.use(express.json())

 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}

app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



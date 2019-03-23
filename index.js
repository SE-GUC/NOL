const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./controllers/users');
const admin = require('./controllers/adminControl');
const user = require('./controllers/userControl');
const contactusfunctions = require('./controllers/contactusfunctions')
const MUNadminControl= require('./controllers/MUNadminControl');
const MUNuserControl = require('./controllers/MUNuserControl');
const signup = require('./controllers/MUNsignup');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}
 
app.use(express.json());
app.use('/AWG/signup', users);
app.use('/AWG/signin/admin', admin);
app.use('/AWG/signin/user', user);
app.use('/contactus', contactusfunctions)
app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


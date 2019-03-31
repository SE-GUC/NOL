
const express = require('express');
var app = express();
const cors = require('cors')

const path = require('path');

const { mongoose } = require('./db.js');
const subdomainfunctions = require('./controllers/subdomainfunctions');
const faqsfunctions = require('./controllers/faqsfunctions');
const MUNadminControl= require('./controllers/MUNadminControl');
const MUNuserControl = require('./controllers/MUNuserControl');
const admin = require('./controllers/AWGadminControl');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/subdomain', subdomainfunctions);
app.use('/faqs', faqsfunctions);
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/AWG/signin/admin', admin);

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



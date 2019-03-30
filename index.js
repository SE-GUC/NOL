
const express = require('express');
const cors = require('cors')
var app = express();

const path = require('path');

const { mongoose } = require('./db.js');
const MUNadminControl= require('./controllers/MUNadminControl');
const MUNuserControl = require('./controllers/MUNuserControl');


app.use(express.json())
app.use(cors())
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);



const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



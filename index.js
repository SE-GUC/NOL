const config = require('config');
const Joi = require('joi');

const cors = require('cors');
Joi.objectId = require('joi-objectid')(Joi);
const AWGadmin = require('./controllers/AWGadminControl');
const AWGsignup = require('./controllers/AWGsignup');
const announcement = require('./controllers/announcementFunctions');
const express = require('express');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}
 
app.use(express.json());
app.use('/AWG/signin/admin', AWGadmin );
app.use('/AWG/signup/admin', AWGsignup );
app.use(express.json());
app.use('/announcement', announcement );

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



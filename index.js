const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const AWGsignup = require('./controllers/AWGadmin');
const AWGadmin = require('./controllers/AWGadminControl');
const announcement = require('./controllers/announcementFunctions');
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
app.use('/AWG/signup/admin', AWGsignup);
app.use('/AWG/signin/admin', AWGadmin );
app.use('/announcements', announcement)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



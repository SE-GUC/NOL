const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

app.use(express.json())

app.use('/committiees', committieeFunctions)
app.use('/AWG_AboutUs', AWG_AboutUsFunctions)
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/AWG/signin/admin', admin);



const AWGsignup = require('./controllers/AWGadmin');
const AWGadmin = require('./controllers/AWGadminControl');
const announcement = require('./controllers/announcementFunctions');
const users = require('./controllers/users');
const admin = require('./controllers/adminControl');
const user = require('./controllers/userControl');
const contactusfunctions = require('./controllers/contactusfunctions')
const MUNadminControl= require('./controllers/MUNadminControl');
const MUNuserControl = require('./controllers/MUNuserControl');
const signup = require('./controllers/MUNsignup');
const galleryfunctions = require('./controllers/galleryfunctions')
const DocumentController = require('./controllers/DocumentController')
const committieeFunctions = require('./controllers/committieeFunctions')
const AWG_AboutUsFunctions= require('./controllers/AWG_AboutUsFunctions')
const MUNuserControl= require('./controllers/MUNuserControl')
const merchandisefunctions = require('./controllers/merchandisefunctions')
const admin = require('./controllers/adminControl');
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

app.use('/merchandise', merchandisefunctions)
app.use('/AWG/signup/admin', AWGsignup);
app.use('/AWG/signin/admin', AWGadmin );
app.use('/announcements', announcement)
app.use('/AWG/signup', users);
app.use('/AWG/signin/admin', admin);
app.use('/AWG/signin/user', user);
app.use('/api/documents', DocumentController)
app.use('/contactus', contactusfunctions)
app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/galleries', galleryfunctions)

 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));





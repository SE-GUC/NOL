
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const config=require('config')
const cors = require('cors')


const express = require('express');

const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())



const AWGadmin = require('./controllers/AWGadminControl');
const MUNadminControl= require('./controllers/MUNadminControl');
const MUNuserControl = require('./controllers/MUNuserControl');
const committieeFunctions = require('./controllers/committieeFunctions')
const AWG_AboutUsFunctions= require('./controllers/AWG_AboutUsFunctions')





app.use('/AWG/signin/admin', AWGadmin );
app.use('/committiees', committieeFunctions)
app.use('/AWG_AboutUs', AWG_AboutUsFunctions)
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/MUN/signin/MUNadmins', MUNadminControl);






app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}
 
app.use(express.json());




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


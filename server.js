const { mongoose } = require('./db.js');
const config = require('config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

app.use(cors())

app.use(bodyParser.json());
 
 if (!config.get('PrivateKey')) {
     console.error('FATAL ERROR: PrivateKey is not defined.');
     process.exit(1);
 }

const galleryfunctions = require('./routes/api/galleryfunctions')

app.use(express.json());
app.use('/galleries', galleryfunctions)


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


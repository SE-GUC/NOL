
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

const users = require('./routes/api/users')

app.use('/user', users)






app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}
 
app.use(express.json());




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


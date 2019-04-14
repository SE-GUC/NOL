const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./routes/api/users');
var cors = require('cors')


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}
 
app.use(express.json());

// Init middleware
app.use(express.json())
//app.use(express.urlencoded({extended: false}))

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/user', users);

//app.use('/AWG/signin/admin', admin);
//app.use('/AWG/signin/user', user);
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

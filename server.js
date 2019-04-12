const { mongoose } = require('./db.js');
const config = require('config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const users = require("./routes/api/publicRoute");
const MUNadminControl= require('./routes/api/MUNadminControl');
const signup = require('./routes/api/MUNsignup');
const galleryfunctions = require('./routes/api/galleryfunctions');
const contactusfunctions= require('./routes/api/contactusfunctions');
const DocumentController = require('./routes/api/DocumentController');
const merchandise = require(',/routes/api/merchandiseControl');
const dev = require("./routes/api/users");
const users1 = require('./routes/api/users');
const faq=require('./routes/api/faqsfunctions')


app.use(cors())
app.use(bodyParser.json());
 
 if (!config.get('PrivateKey')) {
     console.error('FATAL ERROR: PrivateKey is not defined.');
     process.exit(1);
 }

 // Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());
  
// Passport config
require("./config/passport")(passport);

app.use(express.json());
// Routes
app.use("/api/users", users);
app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/galleries', galleryfunctions);
app.use('/contactus', contactusfunctions);
app.use('/api/documents', DocumentController);
app.use('/api/merhandise', merchandise);
app.use("/api/users", dev);
app.use('/user', users1);
app.use('/faq', faq);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


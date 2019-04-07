const express = require("express");
const app = express();
const config = require('config');
const { mongoose } = require('./db.js');
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors')
var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const users = require("./routes/api/publicRoute");
const MUNadminControl= require('./routes/api/MUNadminControl');
const signup = require('./routes/api/MUNsignup');
const galleryfunctions = require('./routes/api/galleryfunctions');
const contactusfunctions= require('./routes/api/contactusfunctions');

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}

app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());
app.use(cors())
app.use(express.json());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/galleries', galleryfunctions);
app.use('/contactus', contactusfunctions)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

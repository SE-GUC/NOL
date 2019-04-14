const express = require("express");
const { mongoose } = require('./db.js');
const bodyParser = require("body-parser");
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const passport = require("passport");
const app = express();
const cors = require('cors')

const users = require("./routes/api/publicRoute");
const faq=require('./routes/api/faqsfunctions');
const committiee= require('./routes/api/committieeFunctions');
const subdomain = require('./routes/api/subdomainsfunction');
const awgaboutus =require('./routes/api/AWGaboutus');
const MUNadminControl= require('./routes/api/MUNadminControl');
const signup = require('./routes/api/MUNsignup');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());
app.use(cors());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/faq', faq);
app.use('/committiee',committiee);
app.use('/subdomain', subdomain);
app.use('/awgaboutus', awgaboutus);
app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNadmins', MUNadminControl);

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}
//mongoose.Promise = global.Promise;
//mongoose.connect(config.db, { useNewUrlParser: true }).then(
  //() => {console.log('Database is connected') },
  //err => { console.log('Can not connect to the database'+ err)}
//);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

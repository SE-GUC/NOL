const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userss = require('./routes/api/users');
const users = require('./routes/api/users');
const MUNadminControl= require('./routes/api/MUNadminControl');
const signup = require('./routes/api/MUNsignup');
const faq=require('./routes/api/faqsfunctions');
const committiee= require('./routes/api/committieeFunctions');
const subdomain = require('./routes/api/subdomainsfunction');
const awgaboutus =require('./routes/api/AWGaboutus');
const contactusfunctions= require('./routes/api/contactusfunctions');

app.use(cors());
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
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}

// db
const db = require("./config/keys").mongoURI;

mongoose.connect(db,  { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}
  ).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
 

app.use(express.json());

// Init middleware
app.use(express.json())
//app.use(express.urlencoded({extended: false}))


app.use("/api/users", users);
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/MUN/signup', signup);
app.use('/faq', faq);
app.use('/committiee',committiee);
app.use('/user', userss);
app.use('/subdomain', subdomain);
app.use('/awgaboutus', awgaboutus);
app.use('/contactus', contactusfunctions)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

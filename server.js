const express = require("express");
const mongoose = require('mongoose');
//const { mongoose } = require('./db.js');
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/publicRoute");
const app = express();

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

// Routes
app.use("/api/users", users);

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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

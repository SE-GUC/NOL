const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./controllers/users');
const admin = require('./controllers/adminControl');
const user = require('./controllers/userControl');
app.use('/api/documents', DocumentController)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');


app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}
 
app.use(express.json());
app.use('/AWG/signup', users);
app.use('/AWG/signin/admin', admin);
app.use('/AWG/signin/user', user);
const DocumentController = require('./controllers/DocumentController')
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


const express = require('express');
const app = express();

const { mongoose } = require('./db.js');
const merchandisefunctions = require('./controllers/merchandisefunctions')

app.use('/merchandise', merchandisefunctions)
app.use(express.json())



const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



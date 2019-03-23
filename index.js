const express = require('express');
const mongoose = require('./db.js');
const bodyParser = require('body-parser');
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const DocumentController = require('./controllers/DocumentController')
app.use('/api/documents', DocumentController)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



const express = require('express');
const app = express();


const { mongoose } = require('./db.js');
const galleryfunctions = require('./controllers/galleryfunctions')

app.use('/galleries', galleryfunctions)
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



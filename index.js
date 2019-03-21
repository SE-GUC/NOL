
const express = require('express');
const app = express();

const { mongoose } = require('./db.js');
const userfunctions = require('./controllers/userfunctions')

app.use('/users', userfunctions)
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))



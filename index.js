var express = require('express');
var app = express();

app.use(express.json())

const Merchandise = require('./controllers/Merchandise')
app.use('/api/merhcandise', Merchandise)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
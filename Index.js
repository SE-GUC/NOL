var express = require ('express')
var app = express()
app.use(express.json())

const development = require ('./controllers/Developement')
app.use('/api/development', development)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

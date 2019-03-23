const contactusfunctions = require('./controllers/contactusfunctions')


app.use('/contactus', contactusfunctions)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})





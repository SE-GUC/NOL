var express = require('express');
var app = express();

app.use(express.json())

const committiee = require('./controllers/Committiee')
const AWG_AboutUs = require('./controllers/AWG_AboutUs')



app.use('/api/committiees', committiee)
app.use('/api/awg_about_us', AWG_AboutUs)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})




const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
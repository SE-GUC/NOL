
const express = require('express')

const app = express()

app.use(express.json())


const aboutus= require('./controllers/aboutus')
app.use('/api/Aboutus',aboutus )

const munadmin= require('./controllers/MUNadmin')
app.use('/api/MUNadmins' , munadmin )


app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

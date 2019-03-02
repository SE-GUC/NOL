const express = require('express')

const app = express()

app.use(express.json())


const aboutus= require('./controllers/aboutus')
app.use('/api/Aboutus',aboutus )

const munadmin= require('./controllers/MUNadmin')
app.use('/api/MUNadmins' , munadmin )

const committiee = require('./controllers/Committiee')
app.use('/api/committiees', committiee)

const AWG_AboutUs = require('./controllers/AWG_AboutUs')
app.use('/api/awg_about_us', AWG_AboutUs)

const userController = require('./controllers/userController')
app.use('/api/users', userController)

const Merchandise = require('./controllers/Merchandise')
app.use('/api/merhcandise', Merchandise)

const Events = require('./controller/events')
app.use('/api/events', Events)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


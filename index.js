
// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

const aboutus= require('./controllers/aboutus')
app.use('/api/Aboutus',aboutus )

const munadmin= require('./controllers/MUNadmin')
app.use('/api/MUNadmins' , munadmin )

const userController = require('./controllers/userController')
app.use('/api/users', userController)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

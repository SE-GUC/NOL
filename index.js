
const express = require('express')
const app = express()
app.use(express.json())



const announecement = require('./controllers/announcement')
const AWG_Admin = require('./controllers/AWG_Admin')
app.use('/api/AWG_Admins', AWG_Admin)
app.use('/api/Announcements', announecement)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


var express = require('express');
var router = express.Router()
//created array MUN admins
const MUNadmins=[
    {
    username: 'Maggie',
    pass: 'pwijr',
    aL: 9,
    email:'Maggie@gmail.com',
    id: 5
    
    },
    {
        username: 'sara',
        pass: 'pwijssdfr',
        aL: 5,
        email:'sara@gmail.com',
        id: 7
        
        },
        {
            username: 'yara',
            pass: 'pdssdfsdfsdf',
            aL: 1,
            email:'yara@mail.com',
            id: 9
    
            }
    
    
    ]



// Get all mun admins WORKING
router.get('/', (req, res) => {
    res.send(MUNadmins)
})

// Get a certain mun admin WORKING
router.get('/:username', (req, res) => {
    const adminname = req.params.username
    const MUNadmin = MUNadmins.find(MUNadmin => MUNadmin.username === adminname)
    res.send(MUNadmin)
})



// Create a MUN admin
router.post('/', (req, res) => {
    const username = req.body.username
    const pass = req.body.pass
    const email = req.body.email
    const aL = req.body.aL
    const id = req.body.id

    
    const admins = {
        username: username,
        pass: pass,
        aL: aL,
        email: email,
        id:id,
    }
    MUNadmins.push(admins)
    res.send(MUNadmins)
})
// Delete an MUN admin 
router.delete('/:username', (req, res) => {
    const adminsname = req.params.username 
    const admin = MUNadmins.find(admin => admin.username === adminsname)
    const index = MUNadmins.indexOf(admin)
    MUNadmins.splice(index,1)
    res.send(MUNadmins)
})

// Update an admin WORKING
router.put('/:username', (req, res) => {
    const adminsname = req.params.username 
    const updatedaL = req.body.aL
    const updatedusername = req.body.username
    const updatedpass = req.body.pass
    const updatedemail = req.body.email
    const updatedid = req.body.id

    const admin = MUNadmins.find(admin => admin.username === adminsname)
    admin.al = updatedaL
    admin.username = updatedusername
    admin.pass = updatedpass
    admin.email=updatedemail
    admin.id=updatedid

    res.send(MUNadmins)
})
module.exports=router;
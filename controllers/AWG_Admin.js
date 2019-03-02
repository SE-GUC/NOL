const express = require('express')
// Create the app

// Use it with post

var router = express.Router()

// We will treat this array of books as our database for now
const AWG_Admins = [
    {
        name:'Sarah Elfouly',
        email: 'sarah@hotmail.com',
        password: 'sarah123', 
        id: '1'
    },
    {
        name:'Reem Mohey',
        email: 'reem@hotmail.com',
        password: 'reem123', 
        id: '2'
    },
    {
        name:'Farida Elshenawy',
        email: 'farida@hotmail.com',
        password: 'farida123', 
        id: '3'
    },
   
]



// Get all books
router.get('/', (req, res) => {
    res.send(AWG_Admins)
})


// Get a certain description
router.get('/:id', (req, res) => {
    const desc_id = req.params.id
    var singleAdmin = AWG_Admins.filter(function(AWG_Admin){return AWG_Admin.id == desc_id});
    res.send(singleAdmin)
})

// Create a description
router.post('/', (req, res) => {
    
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const id = req.body.id
    
    const AWG_Admin = {
        name: name,
        email: email,
        password: password,
        id: AWG_Admins.length + 1
    }
    AWG_Admins.push(AWG_Admin)
    res.send(AWG_Admins)
})




//Update mission
router.put('/update_m/:id', (req, res) => {
    const name_id = req.params.id 
    const updatedname = req.body.name
    var singleAdmin = AWG_Admins.filter(function(AWG_AboutUs){return AWG_AboutUs.id == name_id});
    const index = AWG_Admins.indexOf(singleAdmin[0])
    singleAdmin.name = updatedname
    AWG_Admins[index].name = updatedname
    res.send(AWG_Admins)
})

//Update vision
router.put('/update_email/:id', (req, res) => {
    const email_id = req.params.id 
    const updatedemail = req.body.email
    var singleAdmin = AWG_Admins.filter(function(AWG_Admin){return AWG_Admin.id == email_id});
    const index = AWG_Admins.indexOf(singleAdmin[0])
    singleAdmin.email = updatedemail
    AWG_Admins[index].email = updatedemail
    res.send(AWG_Admins)
})

router.put('/update_pass/:id', (req, res) => {
    const password_id = req.params.id 
    const updatedpassword = req.body.password
    var singleAdmin = AWG_Admins.filter(function(AWG_Admin){return AWG_Admin.id == password_id});
    const index = AWG_Admins.indexOf(singleAdmin[0])
    singleAdmin.password = updatedpassword
    AWG_Admins[index].password = updatedpassword
    res.send(AWG_Admins)
})

// Delete AWG_Admins
router.delete('/:id', (req, res) => {
    const Admin_id = req.params.id 
    var singleAdmin = AWG_Admins.filter(function(AWG_Admin){return AWG_Admin.id == Admin_id});
    
    const index = AWG_Admins.indexOf(singleAdmin[0])
    AWG_Admins.splice(index,1)
    res.send(AWG_Admins)
})

module.exports = router;
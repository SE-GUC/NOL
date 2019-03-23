var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');
const users = mongoose.model('users');



//Get all Subdomains
router.get('/', (req, res) => {
    res.send(users)
})

//Get a certain Subdomain
router.get('/:id', (req, res) => {
    const ID = req.params.id
    var singleuser = users.filter(function(user){return users.id == ID});
    res.send(users)
})

//create a Subdomain
router.post('/', (req, res) => {

    const ID = req.body.ID
    const name = req.body.fullname
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    
    const user = {
        name: fullname,
        email: email,
        username = username,
        password: password,
        id: subdomains.length + 1
        
    }
    users.push(user)
    res.send(users)
})

// Update a Subdomain's name
router.put('/:id', (req, res) => {
    const user_id = req.params.ID
    const updatedName = req.body.fullname 
    var singleuser = users.filter(function(user){return user.id == user_id});
    const index = users.indexOf(singleuser[0])
    singleuser.name = updatedName
    users[index].name = updatedName
    res.send(users)
})

// Update a Subdomain's description
router.put('/:id', (req, res) => {
    const user_id = req.params.ID
    const email = req.body.email
    var singleuser = users.filter(function(user){return user.id == user_id});
    const index = users.indexOf(singleuser[0])
    singleuser.email = email
    users[index].email = email
    res.send(users)
})


router.delete('/delete', (req, res) => {
    const Id = req.params.ID
    const singleuser = users.filter(function(user){return user.id == Id});
    const index = users.indexOf(singleuser[0])
    users.splice(index,1)
    res.send(users)
})


module.exports = router;
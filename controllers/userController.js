var express = require('express');
var router = express.Router()

var usersList = [
    {
        id: 1,
        name: 'Mukesh Chapagain',
        age: 99,
        email: 'mukesh@example.com'
    },
    {
        id: 2,
        name: 'Brad Pitt',
        age: 80,
        email: 'brad@example.com'
    },
    {
        id: 3,
        name: 'Steve Smith',
        age: 56,
        email: 'steve@example.com'
    },
    {
        id: 4,
        name: 'Darren Sammy',
        age: 48,
        email: 'sammy@example.com'
    }
];


router.get('/', (req, res) => {
    res.send(usersList)
})

router.get('/:id', (req, res) => {
    const userId = req.params.id
    var singleUser = usersList.filter(function(user){return user.id == userId});
    res.send(singleUser)
})


router.post('/', (req, res) => {
    // const id = req.body.id
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    
    const user = {
        name: name,
        age: age,
        email: email,
        id: usersList.length + 1
    }
    usersList.push(user)
    res.send(usersList)
})


router.put('/:id', (req, res) => {
    const userId = req.params.id 
    const updatedName = req.body.name
    const singleUser = usersList.filter(function(user){return user.id == userId});
    const index = usersList.indexOf(singleUser[0])
    singleUser.name = updatedName
    usersList[index].name = updatedName
    res.send(usersList)
})

router.delete('/:id', (req, res) => {
    const userId = req.params.id 
    const singleUser = usersList.filter(function(user){return user.id == userId});
    const index = usersList.indexOf(singleUser[0])
    usersList.splice(index,1)
    res.send(usersList)
})


module.exports = router;
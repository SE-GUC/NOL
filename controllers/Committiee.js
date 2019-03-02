const express = require('express')
// Create the app

// Use it with post

var router = express.Router()

// We will treat this array of books as our database for now
const committiees = [
    {
        name: 'Security Council',
        head_Id: 1,
        id: 1
    },
    {
        name: 'International Court of juistice',
        head_Id: 2,
        id: 2
    },
    {
        name: 'General Assembly-2nd committiee',
        head_Id: 3,
        id: 3
    },
    {
        name: 'General Assembly-3rd committiee',
        head_Id: 4,
        id: 4
    },
    {
        name: 'MNO',
        head_Id: 5,
        id: 5
    },
    {
        name: 'ECOSOC Advocates',
        head_Id: 6,
        id: 6
    },
    {
        name: 'USOs',
        head_Id: 7,
        id: 7
    }
]



// Get all committiees
router.get('/', (req, res) => {
    res.send(committiees)
})


// Get a certain committie
router.get('/:id', (req, res) => {
    const comm_id = req.params.id
    var singleCommittiee = committiees.filter(function(committie){return committie.id == comm_id});
    res.send(singleCommittiee)
})

// Create a committiee
router.post('/', (req, res) => {
    const name = req.body.name
    const head_Id = req.body.head_Id
    
    
    
    const committiee = {
        name: name,
        head_Id: head_Id,
        id: committiees.length + 1
    }
    committiees.push(committiee)
    
    res.send(committiees)
})


// Update a committie's name
router.put('/name/:id', (req, res) => {
    const comm_id = req.params.id 
    const updatedName = req.body.name 
    var singleCommittiee = committiees.filter(function(committie){return committie.id == comm_id});
    const index = committiees.indexOf(singleCommittiee[0])
    singleCommittiee.name = updatedName
    committiees[index].name = updatedName
    res.send(committiees)
})
//update a committie's head
router.put('/head/:id', (req, res) => {
    const comm_id = req.params.id  
    const updatedHead = req.body.head_Id
    var singleCommittiee = committiees.filter(function(committie){return committie.id == comm_id});
    const index = committiees.indexOf(singleCommittiee[0])
    singleCommittiee.head_Id = updatedHead
    committiees[index].head_Id = updatedHead
    res.send(committiees)
})

// Delete a committie
router.delete('/:id', (req, res) => {
    const comm_id = req.params.id 
    var singleCommittiee = committiees.filter(function(committie){return committie.id == comm_id});
    const index = committiees.indexOf(singleCommittiee[0])
    committiees.splice(index,1)
    res.send(committiees)
})

module.exports = router;
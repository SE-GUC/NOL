const express = require('express')
// Create the app

// Use it with post

var router = express.Router()

// We will treat this array of books as our database for now
const announcements = [
    {
        Description: 'Recrutement sarting from february',
        posted_datetime: '1/1/2019 12:00:00',
        event_ID: 1,
        User_ID: 5,
        id: '1'
    },
    {
        Description: 'Day off on the 10th of May',
        posted_datetime: '5/5/2019 01:30:00',
        event_ID: 2,
        User_ID: 8,
        id: '2'
    },
    {
        Description: 'Graduation photoshoot',
        posted_datetime: '1/9/2019 3:00:00',
        event_ID: 3,
        User_ID: 10,
        id: '3'
    },
    {
        Description: 'MUN club meeting',
        posted_datetime: '3/31/2019 05:30:00',
        event_ID: 5,
        User_ID: 22,
        id: '4'
    },
    {
        Description: 'Opening of MUN',
        posted_datetime: '1/20/2019 01:30:00',
        event_ID: 2,
        User_ID: 8,
        id: '5'
    },
]



// Get all committiees
router.get('/', (req, res) => {
    res.send(announcements)
})


// Get a certain committie
router.get('/:id', (req, res) => {
    const ann_id = req.params.id
    var singleann = announcements.filter(function(announcement){return committie.id == ann_id});
    res.send(singleann)
})

// Create a committiee
router.post('/', (req, res) => {
    const Description = req.body.Description
    const posted_datetime = req.body.posted_datetime
    const event_ID = req.body.event_ID
    const User_ID = req.body.User_ID
    
    const announcement = {
        Description: Description,
        posted_datetime: posted_datetime,
        event_ID: event_ID,
        User_ID: User_ID,
        id: announcements.length + 1
    }
    announcements.push(announcement)
    
    res.send(announcements)
})


// Update a committie's name
router.put('/description/:id', (req, res) => {
    const Description_id = req.params.id 
    const updatedDescription = req.body.Description
    var singleann = announcements.filter(function(announcement){return announcement.id == Description_id});
    const index = announcements.indexOf(singleann[0])
    singleann.Description = updatedDescription
    announcements[index].Description = updatedDescription
    res.send(announcements)
})
//update a committie's head
router.put('/date/:id', (req, res) => {
    const posted_datetime_id = req.params.id  
    const updateddate = req.body.posted_datetime
    var singleann = announcements.filter(function(announcement){return announcement.id == posted_datetime_id});
    const index = announcements.indexOf(singleann[0])
    singleann.posted_datetime = updateddate
    announcements[index].posted_datetime = updateddate
    res.send(announcements)
})

router.put('/event/:id', (req, res) => {
    const event_ID_id = req.params.id  
    const updatedevent = req.body.event_ID
    var singleann = announcements.filter(function(announcement){return announcement.id == event_ID_id});
    const index = announcements.indexOf(singleann[0])
    singleann.event_ID = updatedevent
    announcements[index].event_ID = updatedevent
    res.send(announcements)
})

router.put('/user/:id', (req, res) => {
    const User_ID_id = req.params.id  
    const updateduser = req.body.User_ID
    var singleann = announcements.filter(function(announcement){return announcement.id == User_ID_id});
    const index = announcements.indexOf(singleann[0])
    singleann.User_ID = updateduser
    announcements[index].User_ID = updateduser
    res.send(announcements)
})



// Delete a committie
router.delete('/:id', (req, res) => {
    const ann_id = req.params.id 
    var singleann = announcements.filter(function(announcement){return announcement.id == ann_id});
    const index = announcements.indexOf(singleann[0])
    announcements.splice(index,1)
    res.send(announcements)
})

module.exports = router;
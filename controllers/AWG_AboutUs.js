const express = require('express')
// Create the app

// Use it with post

var router = express.Router()

// We will treat this array of books as our database for now
const descriptions = [
    {
        id:1,
        description: 'Description of the AWG website',
        mission:'AWG Mission',
        vision:'AWG vision'
        
    }
]



// Get all books
router.get('/', (req, res) => {
    res.send(descriptions)
})


// Get a certain description
router.get('/:id', (req, res) => {
    const desc_id = req.params.id
    var singleDesc = descriptions.filter(function(AWG_AboutUs){return AWG_AboutUs.id == desc_id});
    res.send(singleDesc)
})

// Create a description
router.post('/', (req, res) => {
    
    const description = req.body.description
    const vision = req.body.vision
    const mission = req.body.mission
    
    const AWG_AboutUs = {
       
        description: description,
        vision: vision,
        mission:mission,
        id: descriptions.length + 1
    }
    descriptions.push(AWG_AboutUs)
    res.send(descriptions)
})


// Update description
router.put('/update_d/:id', (req, res) => {
    const desc_id = req.params.id 
    const updatedDes = req.body.description
    var singleDesc = descriptions.filter(function(AWG_AboutUs){return AWG_AboutUs.id == desc_id});
    const index = descriptions.indexOf(singleDesc[0])
    singleDesc.description = updatedDes
    descriptions[index].description = updatedDes
    res.send(descriptions)
})

//Update mission
router.put('/update_m/:id', (req, res) => {
    const mission_id = req.params.id 
    const updatedMission = req.body.mission
    var singleDesc = descriptions.filter(function(AWG_AboutUs){return AWG_AboutUs.id == mission_id});
    const index = descriptions.indexOf(singleDesc[0])
    singleDesc.mission = updatedMission
    descriptions[index].mission = updatedMission
    res.send(descriptions)
})

//Update vision
router.put('/update_v/:id', (req, res) => {
    const vision_id = req.params.id 
    const updatedVision = req.body.vision
    var singleDesc = descriptions.filter(function(AWG_AboutUs){return AWG_AboutUs.id == vision_id});
    const index = descriptions.indexOf(singleDesc[0])
    singleDesc.vision = updatedVision
    descriptions[index].vision = updatedVision
    res.send(descriptions)
})


// Delete description
router.delete('/:id', (req, res) => {
    const desc_id = req.params.id 
    var singleDesc = descriptions.filter(function(AWG_AboutUs){return AWG_AboutUs.id == desc_id});
    
    const index = descriptions.indexOf(singleDesc[0])
    descriptions.splice(index,1)
    res.send(descriptions)
})

module.exports = router;
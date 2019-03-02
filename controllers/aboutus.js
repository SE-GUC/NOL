var express = require('express');
var router = express.Router()
// array of Aboutus

const Aboutus = [
    {
        Misson : 'Our global commitment to build the world you deserve',
        vision : 'Change the world',
        clubname : 'MUN',
        achievement_Desc : '',
        achievement_Pic : ''
        
    },
    {
        Misson: ' GUC MUNs mission is to create a healthy environment ',
        vision: 'healthy community ',
        clubname: 'GUC MUN',
        achievement_Desc: '',
        achievement_Pic: ''

    }
]


// Update a mission or vision WORKING
router.put('/:clubname', (req, res) => {
    const ClubName = req.params.clubname 
    const updatedmission = req.body.Misson
    const updatedvision = req.body.vision
    const about = Aboutus.find(about => about.clubname === ClubName)
    about.Misson = updatedmission
    about.vision = updatedvision

    res.send(Aboutus)
})

router.get('/', (req, res) => {
    res.send(Aboutus)
})
// Create a aboutus
router.post('/', (req, res) => {
    const Misson = req.body.Misson
    const vision = req.body.vision
    const clubname = req.body.clubname
    const achievement_Desc = req.body.achievement_Desc
    const achievement_Pic = req.body.achievement_Pic

    
    const aboutus = {
        Misson : Misson,
        vision: vision,
        clubname: clubname,
        achievement_Desc: achievement_Desc,
        achievement_Pic: achievement_Pic
    }
    Aboutus.push(aboutus)
    res.send(Aboutus)
})
// Get a certain About us WORKING
router.get('/:clubname', (req, res) => {
    const ClubName = req.params.clubname
    const about = Aboutus.find(about => about.clubname === ClubName)
    res.send(about)
})
// Delete aboutus
router.delete('/:clubname', (req, res) => {
    const ClubName = req.params.clubname 
    const about = Aboutus.find(about => about.clubname === ClubName)
    const index = Aboutus.indexOf(about)
    Aboutus.splice(index,1)
    res.send(Aboutus)
})
module.exports=router;
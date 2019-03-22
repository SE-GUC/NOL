var express = require('express');
var router = express.Router();
var merchandise = [
    {
        releaseDate: '01/03/2019',
        picture: 'GUCMUN Hoodie 1',
        id: '1'
    },
    {
        releaseDate: '01/03/2019',
        picture: 'GUCMUN Hoodie 2',
        id: '2'
    },
    {
        releaseDate: '01/03/2019',
        picture: 'GUCMUN Hoodie 3',
        id: '3'
    },
    {
        releaseDate: '01/03/2019',
        picture: 'GUCMUN Hoodie 4',
        id: '4'
    },
    {
        releaseDate: '01/03/2019',
        picture: 'GUCMUN Hoodie 5',
        id: '5'
    },
    {
        releaseDate: '01/03/2019',
        picture: 'GUCMUN Hoodie 6',
        id: '6'
    }
]

router.get('/', (req, res) => {
    res.send(merchandise)
})

router.get('/:id', (req, res) => {
    const merchandiseId = req.params.id
    const oneMerchandise = merchandise.find(oneMerchandise => oneMerchandise.id === merchandiseId)
    res.send(oneMerchandise)
})

// Create merchandise
router.post('/', (req, res) => {
    const releaseDate = req.body.releaseDate
    const picture = req.body.picture
    
    const oneMerchandise = {
        releaseDate: releaseDate,
        picture: picture,
        id: merchandise.length + 1
    }
    merchandise.push(oneMerchandise)
    res.send(merchandise)
})

// Update merchandise's picture 
router.put('/:id', (req, res) => {
    const merchandiseId = req.params.id 
    const updatedPicture = req.body.picture
    const oneMerchandise = merchandise.find(oneMerchandise => oneMerchandise.id === merchandiseId)
    oneMerchandise.picture = updatedPicture
    res.send(merchandise)
})

// Delete merchandise
router.delete('/:id', (req, res) => {
    const merchandiseId = req.params.id 
    const oneMerchandise = merchandise.find(oneMerchandise => oneMerchandise.id === merchandiseId)
    const index = merchandise.indexOf(oneMerchandise)
    merchandise.splice(index,1)
    res.send(merchandise)
})

module.exports = router;
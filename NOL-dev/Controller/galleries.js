var express = require('express');
var router = express.Router()

// 6.3 // We will treat this array of galleries as our database for now
const galleries= [
    {
        title: '1',
        description: 'Here is a photo of Guc MUN members',
        image: 'www.guc.com'
        

    },
    {
    
        title: '2',
        description: 'Here is a photo of Guc MUN admins',
        image: 'www.munguc.com'

    },

    {

        title: '3',
        description: 'Here is a photo of Guc MUN meetings',
        image: 'www.mun.com'

    }
]



// Get all galleries
router.get('/', (req, res) => {
    res.send(galleries)
})

// Get a certain gallery
router.get('/:title', (req, res) => {
    const gallerytitle = req.params.title
    const gallery = galleries.find(gallery => gallery.title === gallerytitle)
    res.send(gallery)
})

// Update a gallery's title
router.put('/:title', (req, res) => {
    const gallerytitle = req.params.title 
    const updatedTitle = req.body.title
    const updateddescription = req.body.description
    const updatedimage = req.body.image
    const gallery = galleries.find(gallery => gallery.title === gallerytitle)
    gallery.title = updatedTitle
    gallery.description = updateddescription
    gallery.image = updatedimage
    res.send(galleries)
})

// Create a gallery
router.post('/', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    
    
    const gallery = {
        title: title,
        description: description,
        image: image
        
    }
    galleries.push(gallery)
    res.send(galleries)
})
// Delete a galleries
router.delete('/:title', (req, res) => {
    const gallerytitle = req.params.title 
    const gallery = galleries.find(gallery => gallery.title === gallerytitle)
    const index = galleries.indexOf(gallery)
    galleries.splice(index,1)
    res.send(galleries)
})
module.exports= router;
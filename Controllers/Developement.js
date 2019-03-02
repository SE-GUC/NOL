var express = require('express');
var router = express.Router()

var Dev = [
    {
        id=51
    },
    {
        title: 'GUCMUN Developement'
    },
    {
       description: 'Description here'
    }
]

//get Developement
router.get('/api/Dev', (req, res) => {
    res.send(Dev)
})

//update
router.put('/api/dev/:id', (req, res) => {
    const devid = req.params.id
    const updatedTitle = req.body.title
    const updatedDescription = req.body.description
    const Dev = Dev.find(Dev => Dev.id === devid)
    Dev.title = updatedTitle
    Dev.description = updatedDescription
    res.send(books)
})
//delete
router.delete('/:id' , (req, res) =>
{
    const devid=req.params.id
    const devdesc = Dev.filter(function(Description){return dev.id == devid});
    const index = dev.indexof(devdesc[0])
    Dev.splice(index,1)
    res.send(Dev)
})

module.exports = router;
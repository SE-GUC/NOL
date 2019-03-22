var express = require('express');
var router = express.Router()

var subdomains = [
    {
        id: 1,
        name: 'MUN',
        email: 'Modern United Nations'
    },
    {
        id: 2,
        name: 'Enactus',
        email: 'Create a better, more sustainable world'
    },
    {
        id: 3,
        name: 'Tedx',
        email: 'Inspiring talks'
    }
];

//Get all Subdomains
router.get('/', (req, res) => {
    res.send(subdomains)
})

//Get a certain Subdomain
router.get('/:id', (req, res) => {
    const subdomainId = req.params.id
    var singleSubdomain = subdomains.filter(function(subdomain){return subdomain.id == subdomainId});
    res.send(singleSubdomain)
})

//create a Subdomain
router.post('/create', (req, res) => {
    
    const name = req.body.name
    const description = req.body.description
    
    const subdomain = {
        name: name,
        description: description,
        id: subdomains.length + 1
        
    }
    subdomains.push(subdomain)
    res.send(subdomains)
})

// Update a Subdomain's name
router.put('/updatename/:id', (req, res) => {
    const sub_id = req.params.id 
    const updatedName = req.body.name 
    var singleSubdomain = subdomains.filter(function(subdomain){return subdomain.id == sub_id});
    const index = subdomains.indexOf(singleSubdomain[0])
    singleSubdomain.name = updatedName
    subdomains[index].name = updatedName
    res.send(subdomains)
})

// Update a Subdomain's description
router.put('/updatedesc/:id', (req, res) => {
    const sub_id = req.params.id 
    const updatedDesc = req.body.description 
    var singleSubdomain = subdomains.filter(function(subdomain){return subdomain.id == sub_id});
    const index = subdomains.indexOf(singleSubdomain[0])
    singleSubdomain.description = updatedDesc
    subdomains[index].description = updatedDesc
    res.send(subdomains)
})


router.delete('/delete', (req, res) => {
    const subdomainId = req.params.id 
    const singleSubdomain = subdomains.filter(function(subdomain){return subdomain.id == subdomainId});
    const index = subdomains.indexOf(singleSubdomain[0])
    subdomains.splice(index,1)
    res.send(subdomains)
})


module.exports = router;
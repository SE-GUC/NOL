const express = require('express')
const app = express()

var contactus = [
    {
    description: 'If you need to contact us please feel free to use any of the methods below.',
    number: '0100000000',
    email: 'gucmun@gmail.com',
    instagram: 'www.instagram.com/gucmun',
    facebook: 'www.facebook.com/gucmun',
    snapchat: 'GUCMUN',
    id: 1
    },
    {
    description: 'To contact us, use one of the methods below.',
    number: '01111111111',
    email: 'guc.mun@gmail.com',
    instagram: 'www.instagram.com/gu_cmun',
    facebook: 'www.facebook.com/guc_mun',
    snapchat: 'GUC_MUN',
    id: 2
    }
]


// all contact us
app.get('/', (req, res) => {
    res.send(contactus)
})

// certain contact us
app.get('/:id', (req, res) => {
    const contactusId = req.params.id
    var cu = contactus.filter(function(contactus){return contactus.id == contactusId});
    res.send(cu)
})


// create contact us
app.post('/', (req, res) => {
    const description = req.body.description
    const number = req.body.number
    const email = req.body.email
    const instagram = req.body.instagram
    const facebook = req.body.facebook
    const snapchat = req.body.snapchat
    
    const cu = {
        description: description,
        number: number,
        email: email,
        instagram: instagram,
        facebook: facebook,
        snapchat: snapchat,
        id: contactus.length + 1
    }
    contactus.push(cu)
    res.send(contactus)
})

// update description
app.put('/:id', (req, res) => {
    const contactusId = req.params.id 
    const updatedDescription = req.body.description
    const cu = contactus.filter(function(contactus){return contactus.id == contactusId});
    const index = contactus.indexOf(cu[0])
    cu.description = updatedDescription
    contactus[index].description = updatedDescription
    res.send(contactus)
})

//delete contactus
app.delete('/:id', (req, res) => {
    const contactusId = req.params.id 
    const cu = contactus.filter(function(contactus){return contactus.id == contactusId});
    const index = contactus.indexOf(cu[0])
    contactus.splice(index,1)
    res.send(contactus)
})


module.exports = app;
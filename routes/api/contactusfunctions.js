var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { contactus } = require('../../models/contactusController');


// all contact us
router.get('/', (req, res) => {
    contactus.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Contact Us :' + JSON.stringify(err, undefined, 2)); }
    });
});


// certain contact us
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        contactus.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Contact Us :' + JSON.stringify(err, undefined, 2)); }
    });
});

// create contact us
router.post('/', (req, res) => {
    var cu = new contactus({
        description: req.body.description,
        number: req.body.number,
        email: req.body.email,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        snapchat: req.body.snapchat,
    });
    cu.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Us Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var cu = {
        description: req.body.description,
        number: req.body.number,
        email: req.body.email,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        snapchat: req.body.snapchat,
    };
    contactus.findByIdAndUpdate(req.params.id, { $set: cu }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Us Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



//delete contactus
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    contactus.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Us Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
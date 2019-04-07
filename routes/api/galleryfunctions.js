const { galleries } = require('../../models/galleryController');
const express = require('express');
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
    galleries.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving galleries :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given title : ${req.params.title}`);

    galleries.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving gallery :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var gallery = new galleries({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    });
    gallery.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in gallery Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given title : ${req.params.title}`);

    var gallery = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    };
    galleries.findByIdAndUpdate(req.params.id, { $set: gallery }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in gallery Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`No record with given title : ${req.params.title}`);

    galleries.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in gallery Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
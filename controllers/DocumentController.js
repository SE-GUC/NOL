const express = require('express');
const router = express.Router();
const Document = require('../models/Document.js');

//As a GUCMUN user(admin) I want to read the portal library to view academic articles available.
//As a GUCMUN user I want to read the portal library that includes archives of GUCMUN's conference resolutions and annual academic papers so that I can know more about GUCMUN.
router.get('/', async (req, res) => {
    const documents = await Document.find();
    res.json(documents);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const document = await Document.findById(id);
    res.json(document);
})

//As a GUCMUN user(admin) I want to create a portal library to store academic articles for users to read.
router.post('/', (req, res) => {    
    const document = new Document({
        name: req.body.name,
        date: req.body.date,
        type: req.body.type,
        document: req.body.document
    });
    document.save();
    res.json(document);
})

//As a GUCMUN user(admin) I want to update the portal library to add academic articles for users to read.
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const document = await Document.findById(id);
    if (req.body.name) { document.name = req.body.name; }
    if (req.body.date) { document.name = req.body.date; }
    if (req.body.type) { document.name = req.body.type; }
    if (req.body.doument) { document.name = req.body.document; }
    document.save();
    res.send(document);
})

//As a GUCMUN user(admin) I want to delete the portal library to store academic articles for users to read.
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const document = await Document.findByIdAndRemove(id);
    res.send(document);
})

module.exports = router;
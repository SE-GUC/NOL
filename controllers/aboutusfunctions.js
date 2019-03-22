var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { aboutuss } = require('../models/aboutusController');



router.get('/', (req, res) => {
    aboutuss.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/:clubname', (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

        aboutuss.findById(req.params.clubname, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var aboutus = new aboutuss({
        Misson: req.body.Misson,
        vision: req.body.vision,
        clubname: req.body.clubname,
        achievement_Desc: req.body.achievement_Desc,
        achievement_Pic: req.body.achievement_Pic,
    });
    aboutus.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:clubname', (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

    var aboutus = {
        Misson: req.body.Misson,
        vision: req.body.vision,
        clubname: req.body.clubname,
        achievement_Desc: req.body.achievement_Desc,
        achievement_Pic: req.body.achievement_Pic,
    };
    aboutuss.findByIdAndUpdate(req.params.clubname, { $set: aboutus }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in aboutus Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:clubname', (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname: ${req.params.clubname}`);

    aboutuss.findByIdAndRemove(req.params.clubname, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in about us Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;

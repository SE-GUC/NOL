var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { faqs } = require('../models/faqsController');



router.get('/', (req, res) => {
    faqs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving FAQs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    faqs.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving FAQ :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/create', (req, res) => {
    var faq = new faqs({
        admin_id: req.body.admin_id,
        user_id: req.body.user_id,
        AWGadmin_ID: req.body.AWGadmin_ID,
        question: req.body.question,
        answer: req.body.answer,
        qes_date: req.body.qes_date,
        ans_date: req.body.ans_date,
    });
    faq.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id/update', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var faq = {
        admin_id: req.body.admin_id,
        user_id: req.body.user_id,
        AWGadmin_ID: req.body.AWGadmin_ID,
        question: req.body.question,
        answer: req.body.answer,
        qes_date: req.body.qes_date,
        ans_date: req.body.ans_date,
    };
    faqs.findByIdAndUpdate(req.params.id, { $set: faq }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id/delete', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    faqs.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
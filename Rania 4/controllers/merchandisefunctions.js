const { merchandise } = require('../models/merchandiseController');
const express = require('express');
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
	merchandise.find((err, docs) => {
	if (!err) { res.send(docs); }
	else { console.log('Error in Retriving merchandise :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	
	router.get('/:id',(req, res) => {
	if (!ObjectId.isValid(req.params.id))
	return res.status(400).send(`No record with given id : ${req.params.id}`);
	
	merchandise.findById(req.params.id, (err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in Retriving merchandise :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	//create
	router.post('/', (req, res) => {
	var merchandise = new merchandise({
	    releaseDate: req.body.releaseDate,
        picture: req.body.picture,
	});
	m.save((err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in merchandise :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	//update
	router.put('/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))
	return res.status(400).send(`No record with given id : ${req.params.id}`);
	
	var m = {
        releaseDate: req.body.releaseDate,
        picture: req.body.picture,
	};
	merchandise.findByIdAndUpdate(req.params.id, { $set: m }, { new: true }, (err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in merchandise Update :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	
	router.delete('/:id' ,(req, res) => {
	if (!ObjectId.isValid(req.params.id))
	return res.status(400).send(`No record with given id : ${req.params.id}`);
	
	merchandise.findByIdAndRemove(req.params.id, (err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in merchandise Delete :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	
	module.exports = router;

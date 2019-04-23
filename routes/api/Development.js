const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { dev } = require('../../models/Development');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
	dev.find((err, docs) => {
	if (!err) { res.send(docs); }
	else { console.log('Error in Retriving dev :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	
	router.get('/:id',(req, res) => {
	if (!ObjectId.isValid(req.params.id))
	return res.status(400).send(`No record with given id : ${req.params.id}`);
	
	dev.findById(req.params.id, (err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in Retriving dev :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	//create
	router.post('/', (req, res) => {
	var m = new dev({
	    releaseDate: req.body.releaseDate,
        picture: req.body.picture,
	});
	m.save((err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in dev :' + JSON.stringify(err, undefined, 2)); }
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
	dev.findByIdAndUpdate(req.params.id, { $set: m }, { new: true }, (err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in dev Update :' + JSON.stringify(err, undefined, 2)); }
	});
	});
	
	router.delete('/:id' ,(req, res) => {
	if (!ObjectId.isValid(req.params.id))
	return res.status(400).send(`No record with given id : ${req.params.id}`);
	
	dev.findByIdAndRemove(req.params.id, (err, doc) => {
	if (!err) { res.send(doc); }
	else { console.log('Error in dev Delete :' + JSON.stringify(err, undefined, 2)); }
	});
	});

module.exports = router;
const Joi = require('joi');
const mongoose = require('mongoose');
 
const AWGadmins = mongoose.model('AWGadmins', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));
 
function validateAWGadmin(AWGadmin) {
    const schema = {
        name: Joi.string().max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(AWGadmin, schema);
}
 
exports.AWGadmins = AWGadmins;
exports.validate = validateAWGadmin;


const jwt = require('jsonwebtoken');
const config = require('config');
 
module.exports = function (req, res, next) {
 
    const token = req.header('token');
    if (!token) {
        return res.status(401).send('Access denied. provide JWT token for authorization.');
    }
 
    try {
        const decoded = jwt.verify(token, config.get('PrivateKey'));
        req.AWGadmin = decoded;
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid JWT.');
    }
}
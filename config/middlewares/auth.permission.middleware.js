const jwt = require('jsonwebtoken'),
secret = require('../config/env.config')['jwt_secret'];

const ADMIN_PERMISSION = 4096;
const REGULARUSER = 1;

exports.minimumPermissionLevelRequired = (required_permission_level) => {
    return (req, res, next) => {
        let user_permission_level = parseInt(req.jwt.permissionLevel);
        let userId = req.jwt.userId;
        if (ADMIN_PERMISSION) {
            return next();
        }
        if ( REGULARUSER ) {
            return next();
        }
            else {
            return res.status(403).send("403");
        }
    };
};

exports.onlySameUserOrAdminCanDoThisAction = (required_permission_level) => (req, res, next) => {

    let user_permission_level = parseInt(req.jwt.permissionLevel);
    let userId = req.jwt.userId;
    if (req.params && req.params.userId && userId === req.params.userId) {
        return next();
    } else {
        if (ADMIN_PERMISSION) {
            return next();
        } else {
            return res.status(403).send("4033");
        }
    }

};
exports.sameUserCantDoThisAction = (req, res, next) => {
    let userId = req.jwt.userId;

    if (req.params.userId !== userId) {
        return next();
    } else {
        return res.status(400).send("400");
    }

};

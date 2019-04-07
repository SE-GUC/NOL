const UsersController = require('./users.controller');
const PermissionMiddleware = require('../config/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../config/middlewares/auth.validation.middleware');
const config = require('../config/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;
const FREE = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function (app) {
    app.post('/login', [
        UsersController.insert
        
    ]);
    app.get('/login/users', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction(ADMIN),
        UsersController.list
    ]);
    app.get('login/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction(ADMIN),
        PermissionMiddleware.sameUserCantDoThisAction,
        UsersController.getById
    ]);
    app.patch('login/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        UsersController.patchById
    ]);
    app.delete('login/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction(ADMIN),
        UsersController.removeById
    ]);
    app.get('/Test', [
        UsersController.list
    ]);
};
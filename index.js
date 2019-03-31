const config = require('./config/config/env.config.js');
const { mongoose } = require('./db.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const AuthorizationRouter = require('./middleware/routes.config');
const UsersRouter = require('./controllers/routes.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);
app.use(cors())


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

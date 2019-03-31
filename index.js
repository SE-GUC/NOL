const { mongoose } = require('./db.js');
const config = require('config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
var http = require("http").Server(app);
var io = require("socket.io")(http);

const AuthorizationRouter = require('./middleware/routes.config');
const UsersRouter = require('./controllers/routes.config');

app.use(cors())
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
 
 if (!config.get('PrivateKey')) {
     console.error('FATAL ERROR: PrivateKey is not defined.');
     process.exit(1);
 }
 
app.use(express.json());
app.use(express.static(__dirname + "/public" ));

const AWGsignup = require('./controllers/AWGadminControl');
const AWGsignupp = require('./controllers/AWGsignup');
const committieeFunctions = require('./controllers/committieeFunctions')
const subdomainfunctions = require('./controllers/subdomainfunctions');
const faqsfunctions = require('./controllers/faqsfunctions');
const AWGadmin = require('./controllers/AWGadminControl');
const announcement = require('./controllers/announcementFunctions');
const contactusfunctions = require('./controllers/contactusfunctions')
const MUNadminControl= require('./controllers/MUNadminControl');
const signup = require('./controllers/MUNsignup');
const galleryfunctions = require('./controllers/galleryfunctions')
const DocumentController = require('./controllers/DocumentController')
const AWG_AboutUsFunctions= require('./controllers/AWG_AboutUsFunctions')
const MUNuserControl= require('./controllers/MUNuserControl')
const merchandisefunctions = require('./controllers/merchandisefunctions')

app.use('/AWG_AboutUs', AWG_AboutUsFunctions)
app.use('/MUN/signin/MUNusers', MUNuserControl );
app.use('/merchandise', merchandisefunctions)
app.use('/AWG/signup/admin', AWGsignup);
app.use('/AWG/signin/admin', AWGadmin );
app.use('/announcements', announcement)
app.use('/api/documents', DocumentController)
app.use('/contactus', contactusfunctions)
app.use('/MUN/signup', signup);
app.use('/MUN/signin/MUNadmins', MUNadminControl);
app.use('/galleries', galleryfunctions)
app.use('/subdomain', subdomainfunctions);
app.use('/faqs', faqsfunctions);
app.use('/committiees', committieeFunctions)
app.use('/AWG/signup/admin', AWGsignupp );
app.use('/announcement', announcement );



AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);


io.on('connection',function(socket){
 
    socket.on('stream',function(image){
        socket.broadcast.emit('stream',image);  
    });


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

});
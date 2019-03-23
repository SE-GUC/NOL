const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nohaamr', (err) => {
    useNewUrlParser: true;
    useCreateIndex:true;

})
.then(()=> console.log('MongoDB connected...'))
.catch(err=> console.log('Error'));
module.exports = mongoose;
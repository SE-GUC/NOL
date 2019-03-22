const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nohaamr', {

useNewUrlParser :true,
useCreateIndex :true 
})

.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err)); 

module.exports = mongoose;
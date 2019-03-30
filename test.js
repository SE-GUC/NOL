

const mongoose = require('mongoose')
// Import testfiles

const committieeFunctionTest = require('./Tests/committieeTest')
const AWG_AboutUsTest = require('./Tests/AWG_AboutUsTest')
const MunuserControlTest=require('./Tests/MUNuserControlTest')
const MunadminControlTest=require('./Tests/MUNadminControlTest')
const AWGadminControlTest=require('./Tests/AWGadminControlTest')
// Connect to mongo atlas

const db = 'mongodb://localhost:27017/nohaamr';

// Calling the test files
const commTest = new committieeFunctionTest(3000, '/committiee')
const AWGTest = new AWG_AboutUsTest(3000, '/AWG_AboutUs')
const AWGadminTest= new AWGadminControlTest(3000,'AWG/signin/admin')
const MunuserTest= new MunuserControlTest(3000,'/MUN/signin/MUNusers')
const MunadminTest= new MunadminControlTest(3000,'/MUN/signin/MUNadmins')
mongoose
.connect(db,{ useNewUrlParser: true })

beforeAll(async () => {
  mongoose.Promise = Promise;
  await mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))
})
// Calling tests
// describe('Event Requests Tests', () => {
//   Promise.all([
//     erTests.run(),
//   ]).then(result => {})
// })
describe('Committiee Test', () => {
  Promise.all([
    commTest.run(),
  ]).then(result => {})
})


afterAll(async () => {
  await mongoose.disconnect();
})

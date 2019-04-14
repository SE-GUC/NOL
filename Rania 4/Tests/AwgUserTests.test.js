const funcs = require('../controllers/testuserfunctions');
const request = require('supertest');

let user1 = {
    firstName: "noha",
    lastName: "amr",
    email : "noha@gmail.com",
    password : "123456",
    permissionLevel : "1"
}
let user2 = {
  firstName: "ziad",
  lastName: "hazem",
  email : "ziad@gmail.com",
  password : "123456",
  permissionLevel : "4096"
}


test('get', async() => {
  const result = await funcs.get()
  expect(result.length).toBe(10)
});







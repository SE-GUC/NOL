const funcs = require('../tests/fns.js')

var user
var user1 = {
    username : "x",
    email : "x@gmail.com",
    password : "123456",
    aL : "x",
    preferredcommittee : "x"
}
var user2 = {
    username : "y",
    email : "y@gmail.com",
    password : "123456",
    aL : "y",
    preferredcommittee : "y"
}

test('user sign up', async () => {
    user = await funcs.UserSignUp(user1)
    expect(user.username).toEqual(user1.username)
})

test('user sign in', async () => {
    const res = await funcs.UserSignIn(user)
    expect(res.email).toEqual(user.email)
})

test('get users', async () => {
    const res = await funcs.getUsers()
    expect(res[0].username).toEqual(user.username)
})

test('get user', async () => {
    const res = await funcs.getUser(user._id)
    expect(res).toEqual(user)
})

test('update user', async () => {
    const res = await funcs.updateUser(user._id, user2)
    expect(res.username).toEqual(user2.username)
})

test('delete user', async () => {
    const res = await funcs.deleteUser(user._id)
    expect(res._id).toEqual(user._id)
})

var aboutUs
var aboutUs1 = {
    misson : "x",
    vision : "x",
    clubname : "x",
    achievement_Desc : "x",
    achievement_Pic : "x"
}
var aboutUs2 = {
    misson : "y",
    vision : "y",
    clubname : "y",
    achievement_Desc : "y",
    achievement_Pic : "y"
}

test('add about us', async () => {
    aboutUs = await funcs.AddAboutUs(aboutUs1)
    expect(aboutUs.clubname).toEqual(aboutUs1.clubname)
})

test('get about us', async () => {
    const res = await funcs.getAboutUs()
    expect(res[0]).toEqual(aboutUs)
})

test('get about us by id', async () => {
    const res = await funcs.getAboutUsByClubName(aboutUs._id)
    expect(res).toEqual(aboutUs)
})

test('update about us', async () => {
    const res = await funcs.updateAboutUs(aboutUs._id, aboutUs2)
    expect(res.clubname).toEqual(aboutUs2.clubname)
})

test('delete about us', async () => {
    const res = await funcs.deleteAboutUs(aboutUs._id)
    expect(res._id).toEqual(aboutUs._id)
})
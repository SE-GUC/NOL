const funcs = require('../controllers/AWGfunctions')



var AWGadmin
var AWGadmin1 = {
    username : "x",
    email : "x@gmail.com",
    password : "123456",
    name : "n"
}
var AWGadmin2 = {
    username : "y",
    email : "y@gmail.com",
    password : "1234567",
    name : "n2"
}

test('AWGadmin sign up', async () => {
    AWGadmin = await funcs.AWGadminSignUp(AWGadmin1)
    expect(AWGadmin.username).toEqual(AWGadmin1.username)
})

test('AWGadmin sign in', async () => {
    const res = await funcs.AWGadminSignIn(AWGadmin)
    expect(res.email).toEqual(AWGadmin.email)
    
})

test('get AWGadmin', async () => {
    const res = await funcs.getAWGadmins()
    expect(res[0]).username.toEqual(AWGadmin.username)
})

test('get AWGadmin', async () => {
    const res = await funcs.getAWGadmins(AWGadmin._id)
    expect(res).toEqual(AWGadmin)
})

test('update AWGadmin', async () => {
    const res = await funcs.updateAWGadmins(AWGadmin._id, AWGadmin2)
    expect(res.username).toEqual(AWGadmin2.username)
})

test('delete AWGadmin', async () => {
    const res = await funcs.deleteAWGadmins(AWGadmin._id)
    expect(res._id).toEqual(AWGadmin._id)
})

var announcement
var announcement1 = {
    Description : "x",
    posted_date : "x1"
}
var announcement2 = {
    Description : "y",
    posted_date : "y1"
}

test('add announcement', async () => {
    const res = await funcs.Addannouncements(announcement1)
    expect(res.Description).toEqual(announcement1.Description)
    announcement1 = res
})

test('get announcement', async () => {
    const res = await funcs.getannouncements()
    expect(res.length).toBe(1)
})

test('get announcement by id', async () => {
    const res = await funcs.getannouncementByDescription(announcement1._id)
    expect(res).toEqual(announcement1)
})

test('update announcement', async () => {
    const res = await funcs.updateannouncement(announcement1._id, announcement2)
    expect(res.Description).toEqual(announcement2.Description)
})

test('delete announcement', async () => {
    const res = await funcs.deleteannouncement(announcement1._id)
    expect(res._id).toEqual(announcement1._id)
})
const functions = require('../controllers/reemmohey-fn')

var s1 = {name : "n1",description : "d1"}
var s2 = {name : "n2",description : "d2"}
var u1={name:"n1", email:"e1",password:"p1"}
var u2={name:"n2", email:"e2",password:"p2"}

var f1={admin_id:1,user_id:1,AWGadmin_ID: 1,question: "q1",answer: "a1",
qes_date: "03/03/2019",ans_date:"02/08/2019"}

var f2={admin_id:1,user_id:1,AWGadmin_ID: 1,question: "q2",answer: "a2",
qes_date: "03/03/2019",ans_date:"02/08/2019"}

 test('createSubdomain', async () => {
    const result = await functions.createSubdomain(s1)
    expect(result.name).toEqual(s1.name)
    s1 = result
})


test('getSubdomain', async () => {
    const result = await functions.getSubdomain()
    expect(result.length).toBe(1)
})
 
test('getSubdomainById', async () => {
    const result = await functions.getSubdomainById(s1._id)
    expect(result).toEqual(s1)
})

test('updateSubdomain', async () => {
    const result = await functions.updateSubdomain(s1._id, s2)
    expect(result.name).toEqual(s2.name)
})
 
test('deleteSubdomain', async () => {
    const result = await functions.deleteSubdomain(s1._id)
    expect(result._id).toEqual(s1._id)
})



test('createFAQs', async () => {
    const result = await functions.createFAQs(f1)
    expect(result.admin_id).toEqual(f1.admin_id)
    f1 = result
})

test(' getFAQs', async () => {
    const result = await functions. getFAQs()
    expect(result.length).toBe(1)
})

test('getFAQsById', async () => {
    const result = await functions.getFAQsById(f1._id)
    expect(result).toEqual(f1)
})

test('updateFAQs', async () => {
    const result = await functions.updateFAQs(f1._id, f2)
    expect(result.question).toEqual(f2.question)
})

test('deleteFAQs', async () => {
    const result = await functions.deleteFAQs(f1._id)
    expect(result._id).toEqual(f1._id)
})


test('AWG Admin create FAQs', async () => {
    const result = await functions.AWGadminCreateFAQ(f1)
    expect(result.question).toEqual(f1.question)
    f1 = result
})

test('AWG Admin get FAQs', async () => {
    const result = await functions.AWGadminGetFAQ()
    expect(result.length).toBe(1)
})

test('AWG Admin get FAQsById', async () => {
    const result = await functions.AWGadminGetFAQById(f1._id)
    expect(result).toEqual(f1)
})

test('AWG Admin update FAQs', async () => {
    const result = await functions.AWGadminUpdateFAQs(f1._id, f2)
    expect(result.question).toEqual(f2.question)
})

test('AWG Admin delete FAQs', async () => {
    const result = await functions.AWGadminDeleteFAQ(f1._id)
    expect(result._id).toEqual(f1._id)
})



test('AWG Admin create Subdomain', async () => {
    const result = await functions.AWGadminCreateSubdomain(s1)
    expect(result.name).toEqual(s1.name)
    s1 = result
})

test('AWG Admin get Subdomain', async () => {
    const result = await functions.AWGadminGetSubdomain()
    expect(result.length).toBe(1)
})

test('AWG Admin get SubdomainById', async () => {
    const result = await functions.AWGadminGetSubdomainById(s1._id)
    expect(result).toEqual(s1)
})

test('AWG Admin update Subdomain', async () => {
    const result = await functions.AWGadminUpdateSubdomain(s1._id, s2)
    expect(result.name).toEqual(s2.name)
})

test('AWG Admin delete Subdomain', async () => {
    const result = await functions.AWGadminDeleteSubdomain(s1._id)
    expect(result._id).toEqual(s1._id)
})


test('MUN Admin get FAQs', async () => {
    const result = await functions.MUNadminGetFAQs()
    expect(result.length).toBe(1)
})

test('MUN Admin getFAQsById', async () => {
    const result = await functions.MUNadminGetFAQById(f1._id)
    expect(result).toEqual(f1)
})

test('MUN Admin update FAQ', async () => {
    const result = await functions.MUNadminUpdateFAQs(f1._id, f2)
    expect(result.question).toEqual(f2.question)
})

test('MUN User get FAQs', async () => {
    const result = await functions.MUNuserGetFAQs()
    expect(result.length).toBe(1)
})

test('MUN User getFAQsById', async () => {
    const result = await functions.MUNuserGetFAQsById(f1._id)
    expect(result._id).toEqual(f1._id)
})

test('MUN User update FAQ', async () => {
    const result = await functions.MUNuserUpdateFAQs(f1._id, f2)
    expect(result.question).toEqual(f2.question)
})

test('AWG Admin update User', async () => {
    const result = await functions.AWGadminUpdateUser(u1._id, u2)
    expect(result.email).toEqual(u2.email)
})

test('AWG Admin delete User', async () => {
    const result = await functions.AWGadminDeleteUser(u1._id, u2)
    expect(result._id).toEqual(u2._id)
})

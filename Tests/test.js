const functions = require('./fn')

var c1 = {name : "n1",head_Id : 1}
var c2 = {name : "n2",head_Id : 2}
var d1={description:"d1", mission:"m1",vision:"v1"}
var d2={description:"d2", mission:"m2",vision:"v2"}

var f1={admin_id:1,user_id:1,AWGadmin_ID: 1,question: "q1",answer: "a1",
qes_date: "03/03/2019",ans_date:"02/08/2019"}

var f2={admin_id:1,user_id:1,AWGadmin_ID: 1,question: "q2",answer: "a2",
qes_date: "03/03/2019",ans_date:"02/08/2019"}

 test('createCommittiee', async () => {
    const result = await functions.createCommittiee(c1)
    expect(result.name).toEqual(c1.name)
    c1 = result
})

test('getCommittiee', async () => {
    const result = await functions.getCommittiee()
    expect(result.length).toBe(1)
})
 
test('getCommittieeById', async () => {
    const result = await functions.getCommittieeById(c1._id)
    expect(result).toEqual(c1)
})

test('updateCommittiee', async () => {
    const result = await functions.updateCommittiee(c1._id, c2)
    expect(result.name).toEqual(c2.name)
})
 
test('deleteCommittiee', async () => {
    const result = await functions.deleteCommittiee(c1._id)
    expect(result._id).toEqual(c1._id)
})



test('createAWG_AboutUs', async () => {
    const result = await functions.createAWG_AboutUs(d1)
    expect(result.description).toEqual(d1.description)
    d1 = result
})

test(' getAWG_AboutUs', async () => {
    const result = await functions. getAWG_AboutUs()
    expect(result.length).toBe(1)
})

test('getAWG_AboutUsById', async () => {
    const result = await functions.getAWG_AboutUsById(d1._id)
    expect(result).toEqual(d1)
})

test('updateAWG_AboutUs', async () => {
    const result = await functions.updateAWG_AboutUs(d1._id, d2)
    expect(result.description).toEqual(d2.description)
})

test('deleteAWG_AboutUs', async () => {
    const result = await functions.deleteAWG_AboutUs(d1._id)
    expect(result._id).toEqual(d1._id)
})


test('AWG Admin create AWG_AboutUs', async () => {
    const result = await functions.AWGadminCreateAWG_AboutUs(d1)
    expect(result.description).toEqual(d1.description)
    d1 = result
})

test('AWG Admin get AWG_AboutUs', async () => {
    const result = await functions.AWGadminGetAWG_AboutUs()
    expect(result.length).toBe(1)
})

test('AWG Admin get AWG_AboutUsById', async () => {
    const result = await functions.AWGadminGetAWG_AboutUsById(d1._id)
    expect(result).toEqual(d1)
})

test('AWG Admin update AWG_AboutUs', async () => {
    const result = await functions.AWGadminUpdateAWG_AboutUs(d1._id, d2)
    expect(result.description).toEqual(d2.description)
})

test('AWG Admin delete AWG_AboutUs', async () => {
    const result = await functions.AWGadminDeleteAWG_AboutUs(d1._id)
    expect(result._id).toEqual(d1._id)
})

test('MUN Admin create Committiee', async () => {
    const result = await functions.MUNadminCreateCommittiee(c1)
    expect(result.name).toEqual(c1.name)
    c1 = result
})

test('MUN Admin get Committiee', async () => {
    const result = await functions.MUNadminGetCommittiee()
    expect(result.length).toBe(1)
})

test('MUN Admin getCommittieeById', async () => {
    const result = await functions.MUNadminGetCommittieeById(c1._id)
    expect(result).toEqual(c1)
})

test('MUN Admin update committiee', async () => {
    const result = await functions.MUNadminUpdateCommittiee(c1._id, c2)
    expect(result.name).toEqual(c2.name)
})

test('MUN Admin delete committiee', async () => {
    const result = await functions.MUNadminDeleteCommittiee(c1._id)
    expect(result._id).toEqual(c1._id)
})

 test('createAWG_AboutUs', async () => {
    const result = await functions.createAWG_AboutUs(d1)
    expect(result.description).toEqual(d1.description)
    d1 = result
})
 
test('MUN user get AWG_AboutUs', async () => {
    const result = await functions. MUNuserGetAWG_AboutUs()
    expect(result.length).toBe(1)
})

test('MUN user get AWG_AboutUsById', async () => {
    const result = await functions.MUNuserGetAWG_AboutUsById(d1._id)
    expect(result).toEqual(d1)
}) 

test('AWG Admin update FAQs', async () => {
    const result = await functions.AWGadminUpdateFAQs(f1._id, f2)
    expect(result.admin_id).toEqual(f2.admin_id)
})
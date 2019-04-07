const functions = require('../controllers/contactusfn.js')

var contactus
var contactus1 = {
    description: 'If you need to contact us please feel free to use any of the methods below.',
    number: '0100000000',
    email: 'gucmun@gmail.com',
    instagram: 'www.instagram.com/gucmun',
    facebook: 'www.facebook.com/gucmun',
    snapchat: 'GUCMUN'
}
var contactus2 = {
    description: 'To contact us, use one of the methods below.',
    number: '01111111111',
    email: 'guc.mun@gmail.com',
    instagram: 'www.instagram.com/gu_cmun',
    facebook: 'www.facebook.com/guc_mun',
    snapchat: 'GUC_MUN'
}

test('Create Contact Us', async () => {
    const result = await functions.createContactUs(contactus1)
    expect(result.description).toEqual(contactus1.description)
    contactus1 = result
})

test('Get all Contact Us', async () => {
    const result = await functions.getAllContactUs()
    expect(result.length).toBe(1)
})

test('Get Contact Us by ID', async () => {
    const result = await functions.getContactUs(contactus1._id)
    expect(result).toEqual(contactus1)
})

test('Update Contact Us', async () => {
    const result = await functions.updateContactUs(contactus1._id, contactus2)
    expect(result.description).toEqual(contactus2.description)
})

test('Delete Contact Us', async () => {
    const result = await functions.deleteContactUs(contactus1._id)
    expect(result._id).toEqual(contactus._id)
})

const functions = require('../routes/tests/merchandise.functions.js')

var m1 = {
    picture : "a",
    releaseDate : "a"
}

var m2 = {
    picture : "b",
    releaseDate : "b",
    }

test('admin create merchandise', async () => {
    const result = await functions.createMerchandise(m1)
    expect(result.picture).toEqual(m1.picture)
    m1 = result
})

test('admin get events', async () => {
    const result = await functions.adminGetMerchandise()
    expect(result.length).toBe(1)
})

test('admin get merchandise', async () => {
    const result = await functions.adminGetMerchandise(m1._id)
    expect(result).toEqual(m1)
})

test('admin update merchandise', async () => {
    const result = await functions.updateMerchandise(m1._id, e2)
    expect(result.picture).toEqual(e2.picture)
})

test('user get merchandise', async () => {
    const result = await functions.userGetMerchandise(m1._id)
    expect(result._id).toEqual(m1._id)
})

test('admin delete merchandise', async () => {
    const result = await functions.deleteMerchandise(m1._id)
    expect(result._id).toEqual(m1._id)
})

test('user get merchandise', async () => {
    const result = await functions.userGetMerchandise()
    expect(result).toEqual([])
})
const functions = require('./fn')

var e1 = {
    title : "a",
    Description: "a",
    Image : "a"
}

var e2 = {
    title : "b",
    Description: "b",
    Image : "b"
}

test('admin create gallery', async () => {
    const result = await functions.createGallery(e1)
    expect(result.title).toEqual(e1.title)
    e1 = result
})

test('admin get galleries', async () => {
    const result = await functions.adminGetGalleries()
    expect(result.length).toBe(1)
})

test('admin get gallery', async () => {
    const result = await functions.adminGetGallery(e1._title)
    expect(result).toEqual(e1)
})

test('admin update gallery', async () => {
    const result = await functions.updateGallery(e1._title, e2)
    expect(result.title).toEqual(e2.title)
})

test('user get gallery', async () => {
    const result = await functions.userGetGallery(e1._title)
    expect(result._title).toEqual(e1._title)
})

test('admin delete gallery', async () => {
    const result = await functions.deleteGallery(e1._title)
    expect(result._title).toEqual(e1._title)
})

test('user get galleries', async () => {
    const result = await functions.userGetGalleries()
    expect(result).toEqual([])
})
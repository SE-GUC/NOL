const functions = require('./fn')

var e1 = {
    title : "a",
    summary : "a",
    MoreDetails : "a"
}

var e2 = {
    title : "b",
    summary : "b",
    MoreDetails : "b"
}

test('admin create event', async () => {
    const result = await functions.createEvent(e1)
    expect(result.title).toEqual(e1.title)
    e1 = result
})

test('admin get events', async () => {
    const result = await functions.adminGetEvents()
    expect(result.length).toBe(1)
})

test('admin get event', async () => {
    const result = await functions.adminGetEvent(e1._id)
    expect(result).toEqual(e1)
})

test('admin update event', async () => {
    const result = await functions.updateEvent(e1._id, e2)
    expect(result.title).toEqual(e2.title)
})

test('user get event', async () => {
    const result = await functions.userGetEvent(e1._id)
    expect(result._id).toEqual(e1._id)
})

test('admin delete event', async () => {
    const result = await functions.deleteEvent(e1._id)
    expect(result._id).toEqual(e1._id)
})

test('user get events', async () => {
    const result = await functions.userGetEvents()
    expect(result).toEqual([])
})
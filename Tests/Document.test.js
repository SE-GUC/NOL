const functions = require('./Documentfn')



var document = {

    _id: "",

    name: "name",

    date: "2019-1-1",

    type: "type",

    document: "document"

}



var editedDocument = {

    _id: "",

    name: "name",

    date: "2019-1-1",

    type: "type",

    document: "editeddocument"

}



test('create document', async () => {

    const response = await functions.createDocument(document)

    document._id = response._id

    expect(response.document).toBe(document.document)

})



test('get documents', async () => {

    const response = await functions.getDocuments()

    expect(response[0].document).toBe(document.document)

})



test('get document by id', async () => {

    const response = await functions.getDocument(document._id)

    expect(response.document).toBe(document.document)

})



test('update document by id', async () => {

    const response = await functions.updateDocument(document._id, editedDocument)

    editedDocument._id = response._id

    expect(response.document).toBe(editedDocument.document)

})



test('delete document by id', async () => {

    const response = await functions.deleteDocument(document._id)

    expect(response.document).toEqual(editedDocument.document)

})
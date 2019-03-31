const axios = require('axios')
const url = 'http://localhost:3000/api/documents/'

const functions = {
    createDocument: async (document) => {
        const response = await axios({
            method: 'post',
            url: url,
            headers: {},
            data: document
        })
        return response.data
    },
    getDocuments: async () => {
        const response = await axios.get(url)
        return response.data
    },
    getDocument: async (id) => {
        const response = await axios.get(url+id)
        return response.data
    },
    updateDocument: async (id, document) => {
        const response = await axios({
            method: 'put',
            url: url+id,
            headers: {},
            data: document
        })
        return response.data
    },
    deleteDocument: async (id) => {
        const response = await axios.delete(url+id)
        return response.data
    }
}
module.exports = functions